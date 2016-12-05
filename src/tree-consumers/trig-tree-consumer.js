
/**
Rule handler based on following w3c specs:
  TRIG: https://www.w3.org/TR/trig/
*/


var uriUtils = require('../util/uri-utils.js');
var strUtils = require('../util/str-utils.js');
var uuid = require('uuid');
var moment = require('moment');
var createTreeTransformHelpers = require('./tree-transform-helpers.js');

var DEFAULT_GRAPH_URI = 'https://www.w3.org/TR/trig/defaultGraph';
var LITERAL_STATES = {
  'UNPROCESSED_IRI_LITERAL' : 'UNPROCESSED_IRI_LITERAL',
  'UNPROCESSED_LITERAL' : 'UNPROCESSED_LITERAL'
};

var replaceExpandedXSD = new RegExp('^http://www.w3.org/2001/XMLSchema#');



module.exports = function(trig, parser, options){
  options = options || {};
  DEFAULT_GRAPH_URI = DEFAULT_GRAPH_URI || options.defaultGraphURI;

  var symbols = parser.symbolicNames;
  var ruleNames = parser.ruleNames;
  var literals = parser.literalNames;

  var transformHelpers = createTreeTransformHelpers(trig, parser);

  var createSymbol = transformHelpers.createSymbol;
  var createExpression = transformHelpers.createExpression;
  var createNode = transformHelpers.createNode;



  function createLiteral(_spo, value){
    return {
      literalState: LITERAL_STATES.UNPROCESSED_LITERAL,
      type: _spo.type,
      value: value !== undefined ? value : _spo.token,
      _source: _spo
    };
  }


  function expandIRIString(str, prefixes, returnOnUnseen){
    var prefix = uriUtils.getPrefix(str)[0];

    if(!(prefix in prefixes)){
      if(returnOnUnseen) return uriUtils.toURI(str);
      throw new Error('Prefix not declared: ' + prefix);
    }
    var iri = prefixes[prefix];
    return str.replace(new RegExp('^' + prefix), iri.token);
  }

  function tryExpandIRI(_spo, prefixes, errors){

    switch(_spo.type){
      case 'IRIREF':
          return uriUtils.toURI(_spo.token);
      case 'iri':
        return uriUtils.toURI(_spo.children[0].token);
      case 'prefixedname':
        try{
          return expandIRIString(_spo.token, prefixes);
        }catch(e){
          errors.push({
            message: e.message,
            line: _spo.pos.line,
            column: _spo.pos.column,
            start: _spo.start,
            stop: _spo.stop
          });
        }

      case '\'a\'':
        return 'a';
      case 'rdfLiteral':
        return _spo.children[0].token;
      case 'BlankNode':
        return _spo.token;
      default:
        return _spo;
    }

  }




  function handleObjectList(subject, predicate, objectList, results){
    return objectList.children.forEach(function(olItem){
      switch(olItem.type){

        case 'object':
          handleObject(subject, predicate, olItem, results);
          break;
        case 'predicate':
          predicate = olItem;
          break;
        default:
          break;
      }
    });
  }

  function handlePredicateObjectList(subject, predicateObjectList, results){
    var predicate;

    predicateObjectList.children.forEach(function(child){

      switch(child.type){
        case 'verb':
          predicate = child;
          break;
        case 'objectList':
          handleObjectList(subject, predicate, child, results);
          break;
        default:

          break;
      }
    });
  }





  function handleIRILiteralValue(iriLiteralObject){
    //Need to properly use prefixes in IRI Expansion
    var type = iriLiteralObject.type;
    var str = iriLiteralObject.value;
    if(replaceExpandedXSD.test(type)){
      type = type.replace(replaceExpandedXSD, 'xsd:');
    }
    switch(type){
      case 'xsd:boolean':
        if(str === 'false') return false;
        if(str === 'true') return true;
        throw new Error('xsd:boolean iri literal with invalid value: ' + str);
      case 'xsd:anyURI':
        if(uriUtils.isURI(str))
          return str;
        throw new Error("Invalid URI in anyURI literal: " + str)
        break;
      case 'xsd:date':
        return moment(str, 'YYYY-MM-DDZ');
      case 'xsd:dateTime':
        return moment(str, 'YYYY-MM-DD HH:mm:ss Z');

      //TODO: validation of these types
      case 'xsd:int':
      case 'xsd:long':
      case 'xsd:short':
      case 'xsd:unsignedLong':
      case 'xsd:unsignedShort':
      case 'xsd:unsignedInt':
      case 'xsd:negativeInteger':
      case 'xsd:positiveInteger':
      case 'xsd:nonPositiveInteger':
      case 'xsd:nonNegativeInteger':
      case 'xsd:integer':
        return Number.parseInt(str);
      case 'xsd:decimal':
        return Number.parseFloat(str);
      //case 'xsd:string':
      default:
        return str;

    }
  }

  function resolveLiteral(literal){
      switch(literal.children[0].type){
        case 'rdfLiteral':
          var stringNode = literal.children[0].children.filter(function(child){
            return child.type === 'String';
          })[0];
          var stringLit = strUtils.removeLiteralQuotes(stringNode.token);
          var hasLiteralIRIIdentifier = literal.children[0].children.filter(function(child){
            return child.type === '\'^^\'';
          }).length > 0;

          var hasLangTagIdentifier = literal.children[0].children.length === 2 ?
            literal.children[0].children[1].type === 'LANGTAG' : false;
          if(hasLangTagIdentifier){
            return {
              literalState: LITERAL_STATES.UNPROCESSED_LITERAL,
              type: "LANGTAGED-LITERAL",
              value: stringLit,
              _source: literal.children[0]
            };
          }

          if(hasLiteralIRIIdentifier){
            return {
              literalState: LITERAL_STATES.UNPROCESSED_IRI_LITERAL,
              iriLiteralType: literal.children[0].children[2].token,
              _source: literal.children[0],
              value: stringLit
            };
          }
          return createLiteral(stringNode, stringLit);

        case 'NumericLiteral':
          var isFloat = literal.token.indexOf('.');
          var value = isFloat ? Number.parseFloat(literal.token) : Number.parseInt(literal.token);
          return createLiteral(literal, value);
        case 'BooleanLiteral':
          if(literal.token === 'false') return createLiteral(literal, false);
          else if(literal.token === 'true') return createLiteral(literal, true);
          return null;
        default:
          break;
      }
  }

  function createBlankNodeList(subject, tempResults, results){
    var _uri = uriUtils.ensureSlashEnd(uriUtils.toURI(subject.token));
    var bnodeId = _uri + uuid.v4();
    tempResults.forEach(function(tresult){
      results.push(createTriple(bnodeId, tresult._v, tresult._o));
    });

    return bnodeId;
  }

  function handleObject(subject, predicate, obj, results){
    var object = obj.children[0];
    if(!object || !object.type) return;


    switch(object.type){
      //case 'iri' :
      //case 'literal':

      case 'blankNodePropertyList':
        var predicateObjectList = object.children[1]; //removes the '[' and ']'
        var tempResults = [];
        handlePredicateObjectList(subject, predicateObjectList, tempResults);
        object = createBlankNodeList(subject, tempResults, results);
        break;

      case 'collection':
        object.children.filter(function(_obj){ return _obj.type !== '\')\'' && _obj.type !== '\'(\''; }).forEach(function(_obj){
          handleObject(subject, predicate, _obj, results);
        });
        break;
      case 'BlankNode':
        break;
      case 'literal':
        object = resolveLiteral(object);
        break;
      default:
        break;
    }
    results.push(createTriple(subject, predicate, object));
  }


    function flattenSPO(spo){
    if(spo.type === '\'a\''){
      return spo;
    }

    if(!spo.children){ return spo;}
    else if(spo.children[0].type === 'iri'){
      return spo.children[0].children[0];
    }
    return spo.children[0];
  }



  function createTriple(s, v, o){

    var p = v.children[0];

    s = flattenSPO(s);
    p = flattenSPO(p);
    o = flattenSPO(o);





    return {
      iriSubject: s.token, //uriUtils.tryConvertToURI(s.token),
      iriPredicate: p.token, //uriUtils.tryConvertToURI(p.token),
      iriObject: o.token || o, //? uriUtils.tryConvertToURI(o.token) : o,

      _v: v,
      _s: s,
      _p: p,
      _o: o,
      //_g: null

      applyPrefixes: function(prefixes){
        var errors = [];
        this.subject = tryExpandIRI(this._s, prefixes, errors);
        this.predicate = tryExpandIRI(this._p, prefixes, errors);
        this.object = tryExpandIRI(this._o, prefixes, errors);
        if(this._g) this.graph = tryExpandIRI(this._g, prefixes, errors);
        return errors;

      },
      finalize: function(bnodeMap){
        if(this.subject in bnodeMap){ this.subject = bnodeMap[this.subject]; }
        if(this.predicate in bnodeMap){ this.predicate = bnodeMap[this.predicate];}
        if(this.object in bnodeMap){ this.object = bnodeMap[this.object];}

      },
      toString: function(){
        return this.iriSubject + " " + this.iriPredicate + " " + this.iriObject;
      }
    };
  }


  function createTriples(subject, predicateObjectChildren){
    var results = [];
    var predicate = null;
    var objects = [];

    predicateObjectChildren.children.forEach(function(child){
      if(child.type === 'verb'){
        predicate = child;
      }
      else if(child.type === 'objectList'){
        handleObjectList(subject, predicate, child, results);

      }
      else if(child.type === '\';\'' ||
              child.type === '\'.\'' ||
              child.type === '\',\''){
        objects.forEach(function(object){
          results.push(createTriple(subject, predicate, object));
        });

        predicate = null;
        objects = [];
      }else{
        throw new Error('Unknown Child');
      }
    });
    return results;
  }

  function stripBnodePropBrackets(bnodeProp){
    return bnodeProp.children.filter(function(child){
      return child.type === 'predicateObjectList';
    })[0];
  }

  function getAllTriples(triplesBlock){
    return triplesBlock.reduce(function(allTriples, triples){
        var subject_BNodeProps = (triples.children[0]);
        var predicateObjectList =(triples.children[1]);
        switch(subject_BNodeProps.type){
          case 'subject':

            var newTriples = createTriples(subject_BNodeProps, predicateObjectList);
            allTriples = allTriples.concat(newTriples);
            break;
          case 'blankNodePropertyList':
            var propertyList = stripBnodePropBrackets(subject_BNodeProps)
            allTriples = allTriples.concat(createTriples(subject_BNodeProps, propertyList));
            break;
          default:
            break;
        }
        return allTriples;
    }, []);

  }




  function createDefaultGraph(stmts, trigDoc){
    return _createGraph(DEFAULT_GRAPH_URI, stmts, createNode(trigDoc));
  }

  function _createGraph(uri, triples, _graph){

    return {
        iri: uri,
        uri: uri,
        _graph: _graph,
        //pos: (_graph && _graph.pos) || {line: 0, column: 0},

        finalize: function(prefixes){
          var errors = [];

          this._assignGraph();
          errors = errors.concat(this.applyPrefixes(prefixes));
          this._expandBnodes();
          errors = errors.concat(this._convertLiterals(prefixes));
          this.finalized = true;

          return errors;
        },

        getStatements: function(){
          return triples;
        },

        applyPrefixes: function(prefixes){
          var errors = [];
          triples.forEach(function(triple){
            var e1 = triple.applyPrefixes(prefixes);
            errors = errors.concat(triple.applyPrefixes(prefixes));
          });
          if(uriUtils.isURI(this.uri)) return errors;
          try{
              this.uri = expandIRIString(this.uri, prefixes);
          }catch(e){
            errors.push(e);
          }
          return errors;
        },
        _convertLiterals: function(prefixes){
          var errors = [];
          triples.forEach(function(stmt){
            if(!stmt.object.literalState) return;
            switch(stmt.object.literalState){

              case LITERAL_STATES.UNPROCESSED_IRI_LITERAL:
                stmt._o = stmt.object;
                try{
                  stmt.object.type = expandIRIString(stmt.object.iriLiteralType, prefixes, true);
                }catch(e){
                  errors.push({
                    message: e.message,
                    line: stmt.object.pos.line,
                    column: stmt.object.pos.column,
                    start: stmt.object.start,
                    stop: stmt.object.stop
                  });
                }

                stmt.object = handleIRILiteralValue(stmt.object, prefixes);
                stmt.expObject = stmt.object;

                delete stmt._o['literalState'];
                break;

              case LITERAL_STATES.UNPROCESSED_LITERAL:
                stmt._o = stmt.object;
                stmt.object = stmt.object.value;
                stmt.expObject = stmt.object;
                delete stmt._o['literalState'];
                break;

              default:
                throw new Error('Unhandled Literal State when finalizing literals: ' + stmt.object.literalState);
            }


          });
          return errors;
        },
        _assignGraph: function(){
          if(this.finalized) throw new Error('Graph finalized');
          triples.forEach(function(triple){
            triple._g = this;
          }.bind(this));
        },

        _expandBnodes: function(){
          if(this.finalized) throw new Error('Graph finalized');
          var bnodeTriples = triples.filter(function(triple){
              return triple._s.type === 'BlankNode';
          });

          var tripleMap = bnodeTriples.reduce(function(acc, triple){
            acc[triple.subject] = true;
            return acc;
          },{});

          var uuids = Object.keys(tripleMap).reduce(function(acc, bNode){
            acc[bNode] = uuid.v4();
            return acc;
          }, {});

          this.bnodeMap = Object.keys(uuids).reduce(function(acc, bNode){
            var uuid = acc[bNode];
            var _uri = this.uri[this.uri.length - 1] === '/' ? this.uri : this.uri + '/';
            acc[bNode] = _uri + uuid;
            return acc;
          }.bind(this),uuids);
          triples.forEach(function(triple){
            triple.finalize(this.bnodeMap);
          }.bind(this));

        }
    };

  }

  function createGraph(triplesBlocks, iri, graphNode){
    var _uri = uriUtils.isIRI(iri) ? uriUtils.toURI(iri) : iri;
    var triples = [];
    triplesBlocks.forEach(function(triplesBlock){
      triples = triples.concat(triplesBlock.children.map(createNode));
    });

    var triples = triples.filter(function(triple){
      return triple.type !== '\'.\'';
    });
    triples = getAllTriples(triples);
    return _createGraph(_uri, triples, graphNode);

  }




  return {
    handlePredicateObjectList: handlePredicateObjectList,
    handlePrefixID: function(ruleMatch){
      var prefix = ruleMatch.children.map(createSymbol);
      var nameSym = prefix[1];
      var valSym = prefix[2];
      return {
        name: nameSym.token,
        token: uriUtils.toURI(valSym.token),
        pos: nameSym.pos
      };
    },
    getAllTriples: getAllTriples,
    createTriples: createTriples,
    handleGraph: function(triplesBlock, iri, graphToken){
      return createGraph(triplesBlock, iri, graphToken);
    },
    handleFreeStatement: function(stmt){
      return createExpression(stmt);
    },
    handleMacro: function(ruleMatch){
      return createExpression(ruleMatch);
    },
    createDefaultGraph: createDefaultGraph,
    createNode: createNode
  };
};

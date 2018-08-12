
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
  'UNPROCESSED_IRI_LITERAL': 'UNPROCESSED_IRI_LITERAL',
  'UNPROCESSED_LITERAL': 'UNPROCESSED_LITERAL'
};

var replaceExpandedXSD = new RegExp('^http://www.w3.org/2001/XMLSchema#');

module.exports = function (trig, parser, options) {
  options = options || {};
  DEFAULT_GRAPH_URI = DEFAULT_GRAPH_URI || options.defaultGraphURI;

  var transformHelpers = createTreeTransformHelpers(trig, parser);

  var createSymbol = transformHelpers.createSymbol;
  var createExpression = transformHelpers.createExpression;
  var createNode = transformHelpers.createNode;
  function createErrorFromNode (node, message, len) {
    return {
      message: message,
      line: node.pos.line,
      column: node.pos.column,
      start: node.start,
      stop: node.stop,
      len: len 
    };
  }

  function createLiteral (_spo, value) {
    return {
      literalState: LITERAL_STATES.UNPROCESSED_LITERAL,
      type: _spo.type,
      value: value !== undefined ? value : _spo.token,
      source: _spo,
      start: _spo.start,
      stop: _spo.stop
    };
  }

  function expandIRIString (str, prefixMap, returnOnUnseen) {

    
    var prefixMatches = null;
    try{
      prefixMatches = uriUtils.getPrefix(str);
    } catch(e){

    }
     
    if (prefixMatches === null || prefixMatches.length === 0) {
      let error = new Error('No prefix found for: ' + str);
      error.type = 'noPrefixFound';
      error.len = str ? str.length: 0;
      throw error;
    }

    var prefix = prefixMatches[0];
    if (!prefixMap.get(prefix)) {
      if (returnOnUnseen) return uriUtils.toURI(str);
      let error = new Error('Prefix not declared: ' + prefix);
      error.type = 'prefixNotDeclared';
      error.len = prefix.length;
      throw error;
    }
    var iri = prefixMap.get(prefix);
    return str.replace(new RegExp('^' + prefix), iri.value);
  }

  function tryExpandIRI (_spo, prefixMap, errors) {

     switch (_spo.type) {
      case 'IRIREF':
          return uriUtils.toURI(_spo.token);
      case 'iri':
        return uriUtils.toURI(_spo.children[0].token);
      case 'prefixedname':
        //invalid iri: already an 
        if(!_spo.token && _spo.message){
          errors.push(createErrorFromNode(_spo, _spo.message, _spo.len))
          return null;
        }

        try {
          return expandIRIString(_spo.token, prefixMap);
        } catch (e) {
          if (e.type === 'prefixNotDeclared') {
            errors.push(createErrorFromNode(_spo, e.message, e.len));

          }else if (e.type === 'noPrefixFound') {
            let token = _spo.token;
            errors.push(createErrorFromNode(token, e.message, e.len));
          }
          return _spo.token
        }
        break;

      case '\'a\'':
        return "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
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





  function handleIRILiteralValue(iriLiteralObject, prefixMap){
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
      case 'xsd:double':
      case 'xsd:float':
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
              type: "LANGTAG",
              value: stringLit,
              source: literal.children[0]
            };
          }

          if(hasLiteralIRIIdentifier){
            return {
              literalState: LITERAL_STATES.UNPROCESSED_IRI_LITERAL,
              iriLiteralType: literal.children[0].children[2].token,
              source: literal.children[0],
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
      let tempTriple = createTriple(bnodeId, tresult._v, tresult._o)
      if(tempTriple)
        results.push(tempTriple);
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
    if(object && object.type !== 'PN_PREFIX'){
      let maybeTriple = createTriple(subject, predicate, object)
      if(maybeTriple){
        results.push(maybeTriple);

      }
    }
  }


  function _flattenSPO(spo){
    if(spo.type === '\'a\''){
      return spo;
    }

    if(!spo.children){ return spo;}
    else if(spo.children[0].type === 'iri'){
      return spo.children[0].children[0];
    }
    return spo.children[0];


  }
  function flattenSPO(spo){
      var result = _flattenSPO(spo)

      if(!result.pos && result.source){
          result.pos = result.source.pos
      }
      return result;
  }


  let objectTypes = {
    'iri' : true,
    'BlankNode': true,
    'String': true,
    'IRIREF': true,
    'prefixedname': true,
    'PNAME_LN': true,
    'collection': true,
    'literal': true,
    'NumericLiteral': true,
    'PN_PREFIX' : true,
    'INTEGER': true,
    'DECIMAL': true,
    'LANGTAG': true,
    'UNPROCESSED_IRI_LITERAL': true,
  }

  function isInValidObjectType(token){
    if(token && typeof token === 'string' || token.iriLiteralType){
      return false 
    }
    
    return !token || !token.type || !(token.type in objectTypes)
  }

  function createTriple(s, v, o){

    var p = v.children[0];
    s = flattenSPO(s);
    p = flattenSPO(p);
    o = flattenSPO(o);
    if(isInValidObjectType(o)){
      return null
    }
    
    return {
      iriSubject: s.token, //uriUtils.tryConvertToURI(s.token),
      iriPredicate: p.token, //uriUtils.tryConvertToURI(p.token),
      iriObject: o.token || o, //? uriUtils.tryConvertToURI(o.token) : o,
      _g: null,
      _v: v,
      _s: s,
      _p: p,
      _o: o,
      //_g: null

      applyPrefixes: function(prefixMap){
        var errors = [];
        this.subject = tryExpandIRI(this._s, prefixMap, errors);
        this.predicate = tryExpandIRI(this._p, prefixMap, errors);
        this.object = tryExpandIRI(this._o, prefixMap, errors);

        return errors;

      },
      finalize: function(bnodeMap){
        if(this.subject in bnodeMap){
          this.iriSubject = bnodeMap[this.subject];
          this.subject = bnodeMap[this.subject]; 
        }
        if(this.predicate in bnodeMap){ 
            this.iriPredicate = bnodeMap[this.predicate];
            this.predicate = bnodeMap[this.predicate];
        }
        if(this.object in bnodeMap){ 
            this.iriObject = bnodeMap[this.object];
            this.object = bnodeMap[this.object];
        }

				delete this['applyPrefixes']
				delete this['_graph']
				delete this['finalize']
				delete this._o['source']
				delete this['_v']
				// if(_.isString(this.iriObject)) delete this.iriObject['source']
				cleanToken(this._g)
				cleanToken(this._p)
				cleanToken(this._s)

      },
      toString: function(){
        return this.iriSubject + " " + this.iriPredicate + " " + this.object;
      }
    };
  }
	
	function cleanToken(t){
		if(!t) return;
		if(t.stop){
			delete t.stop['source']
		}
		if(t.start){
			delete t.start['source']
		}
		if(t.children){
			delete t['children']
		}
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
            let maybeTriple = createTriple(subject, predicate, object)
            if(maybeTriple)
              results.push(maybeTriple)
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
    return _createGraph(DEFAULT_GRAPH_URI, stmts, createNode(trigDoc), DEFAULT_GRAPH_URI);
  }

  function _createGraph(uri, triples, _graph, iri){
    return {
        _g: iri,
        iri: iri.token,
        uri: uri,
        //pos: (_graph && _graph.pos) || {line: 0, column: 0},

        finalize: function(prefixMap){

          var errors = [];

          errors = errors.concat(this.applyPrefixes(prefixMap));
          errors = errors.concat(this._convertLiterals(prefixMap));
					this._expandBnodes(prefixMap);
					
          this.finalized = true;
          
					//cleanup
					delete this['finalize']
					delete this['_convertLiterals']
					delete this['bnodeMap']
					delete this['_assignGraph']
					delete this['_expandBnodes']
					delete this['applyPrefixes']
					delete this['source']
					
          return errors;
        },

        getStatements: function(){
          return triples;
        },
      
        applyPrefixes: function(prefixMap){
          var errors = [];

           if(!this.uri.token && this.uri.message){
              errors.push(createErrorFromNode(this.uri.token, this.uri.message, this.uri.len))
              return null;
          }
          try{
              if(uriUtils.isPrefixedIRI(this.uri)){
                this.uri = expandIRIString(this.uri, prefixMap);
              }
          }catch(e){
              if(e.type === 'invalidIri'){
                errors.push(createErrorFromNode(iri, e.message, iri.token.length));
              }
              if(e.type === 'prefixNotDeclared'){
                  if(iri.pos){
                    errors.push(createErrorFromNode(iri, e.message, iri.token.length));
                  }
              }
          }

          triples.forEach(function(triple){
            var e1 = triple.applyPrefixes(prefixMap);
            errors = errors.concat(triple.applyPrefixes(prefixMap));
            triple.graph = this.uri;
            triple._g = this._g;
          }.bind(this));
          if(uriUtils.isURI(this.uri)) return errors;

          return errors;
        },
        _convertLiterals: function(prefixMap){

          var errors = [];
          triples.forEach(function(stmt){
            if(!stmt.object.literalState) return;
            switch(stmt.object.literalState){

              case LITERAL_STATES.UNPROCESSED_IRI_LITERAL:
							
								
                try{
                  stmt.object.type = expandIRIString(stmt.object.iriLiteralType, prefixMap, true);
                }catch(e){
                  if(e.type ==='invalidIri'){
                    errors.push({
                      message: e.message,
                      line: stmt.object.source.children[2].pos.line,
                      column: stmt.object.source.children[2].pos.column,
                      start: stmt.object.source.children[2].start,
                      stop: stmt.object.source.children[2].stop,
                      len: e.len
                    });
                  }

                }

                stmt.object = handleIRILiteralValue(stmt.object, prefixMap);
                stmt.expObject = stmt.object;

                delete stmt._o['literalState'];
                break;

              case LITERAL_STATES.UNPROCESSED_LITERAL:
                stmt.object = stmt.object.value;
                stmt.expObject = stmt.object;
                var isLangTag = stmt._o.source && stmt._o.source.children && stmt._o.source.children[1] && stmt._o.source.children[1].token[0] === "@"
                if(isLangTag){
                    stmt._o.lang = stmt._o.source.children[1].token
                }
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

        _expandBnodes: function(prefixMap){
          if(this.finalized) throw new Error('Graph finalized');
          triples = triples.map(function(triple){
              //no type as they are fabricated not parsed
              let finalized = finalizeBnodes(triple);
              return finalized;
          })
          var bnodeTriples = triples.filter(function(triple){
              return triple._s.type == 'BlankNode';
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
            try{
              let iriVal= iri.token || iri;
              var iriExpanded = expandIRIString(iriVal, prefixMap, true)
              var _uri = iriExpanded[iriExpanded.length - 1] === '/' ? this.uri : this.uri + '/';
              acc[bNode] = _uri + uuid;
            }catch(e){
              console.error(e)
            }
            return acc;
          }.bind(this),uuids);
          triples.forEach(function(triple){
            triple.finalize(this.bnodeMap);
          }.bind(this));

        }
    };

  }


  function finalizeBnodes(triple){
      if(!triple._s.type){
          triple._s = { type: 'BlankNode', token: triple.subject, pos: triple._p.pos }
      }
      if(!triple._o.type){
          triple._o = { type: 'BlankNode', token: triple.object, pos: triple._p.pos }
      }
      return triple
  }

  function createGraph(triplesBlocks, iri, graphNode){
    iri = createNode(iri);
    var _iri = iri.token;
    var _uri = uriUtils.isIRI(_iri) ? uriUtils.toURI(_iri) : _iri;
    var triples = [];
    triplesBlocks.forEach(function(triplesBlock){
      triples = triples.concat(triplesBlock.children.map(createNode));
    });

    var triples = triples.filter(function(triple){
      return triple.type !== '\'.\'';
    });
    triples = getAllTriples(triples);

    return _createGraph(_uri, triples, graphNode, iri);

  }


  return {
    handlePredicateObjectList: handlePredicateObjectList,
    handlePrefixID: function(ruleMatch, errors){
      var prefix = ruleMatch.children.map(createSymbol);
      var nameSym = prefix[1];
      var valSym = prefix[2];
      if(!uriUtils.isIRI(valSym.token) && errors){
        errors.push(createErrorFromNode(valSym,
           "Not a valid uri: " + valSym.token, valSym.token.length))
        return null;
      }

      return {
        name_symbol: nameSym,
        value_symbol: valSym,
        name: nameSym.token,
        value: uriUtils.toURI(valSym.token),
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
    createErrorFromNode: createErrorFromNode,
    createDefaultGraph: createDefaultGraph,
    createNode: createNode
  };
};

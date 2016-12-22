
var TrigGrammerListener = function(trigStr, trig, ruleHandler, options) {
  this.trigStr = trigStr;
  this.parser = trig.parser;
  this.ruleHandler = ruleHandler;
  this.prefixMap = { _prefixes: {}};
  this.prefixSymbolMap = { };
  var prefixUsageMap = {};
  this.prefixMap.get = function(prefixName){
    if(!(prefixName in this.prefixMap._prefixes)) return undefined;
    var count = prefixUsageMap[prefixName] || 0;
    prefixUsageMap[prefixName] = count + 1;
    return this.prefixMap._prefixes[prefixName];
  }.bind(this)
  this.prefixMap.put = function(prefix, ctx){
    if(this.finalized) throw new Error("Listener fired after finalization.");
    this.prefixMap._prefixes[prefix.name] = prefix;
    this.prefixSymbolMap[prefix.name] = ctx;
  }.bind(this)
  this.prefixMap.getUnusedAsError = function(prefixName){
    return Object.keys(this.prefixMap._prefixes).filter(function(prefix){
      return !prefixUsageMap[prefix]
    }.bind(this)).map(function(prefix){
      prefix = this.prefixMap._prefixes[prefix]
      return this.ruleHandler.createErrorFromNode(prefix.name_symbol,
         "Unused prefix: " + prefix.name, prefix.name.length);
    }.bind(this))
  }.bind(this)

  this.graphs = [];
  this.macros = [];
  this.errors = [];
  this.defaultStmts = [];
  this.finalized = false;
  this.syntaxErrors = trig.syntaxErrors;
  this.analysisErrors = [];
  this.options = options || {
    allowEmptyDefaultGraph: false
  };
};



TrigGrammerListener.prototype.handleDefaultTriples = function(subjectOrLabel, predicateObjectList){
  if(!subjectOrLabel || !predicateObjectList) return;
  var results = []
  subjectOrLabel = this.ruleHandler.createNode(subjectOrLabel)
  predicateObjectList = this.ruleHandler.createNode(predicateObjectList)
  var results = this.ruleHandler.createTriples(subjectOrLabel, predicateObjectList, results);
  this.defaultStmts = this.defaultStmts.concat(results);

};
TrigGrammerListener.prototype.handleGraphTriples = function(rootTriplesBlock, iri, graphToken){


    var flattenedTriples = this.flattenTriplesBlock(rootTriplesBlock);

    if(iri){
      this.graphs.push(this.ruleHandler.handleGraph(flattenedTriples, iri, graphToken));
    }else{
      flattenedTriples.forEach(function(triplesBlock){
        triplesBlock.children.forEach(function(triples){
          if(!triples.children && triples.symbol.type === 2){
            //the type here is: triplesOrGraph which is strange...
            return;
          }
          var s = this.ruleHandler.createNode(triples.children[0]);
          var po = this.ruleHandler.createNode(triples.children[1]);
          var results = this.ruleHandler.createTriples(s, po);
          this.defaultStmts = this.defaultStmts.concat(results);
        }.bind(this));
      }.bind(this));
    }

}

TrigGrammerListener.prototype.flattenTriplesBlock = function(triplesBlock, results){
  results = results || [ triplesBlock ];
  triplesBlock.children.forEach(function(child, i){
    var ruleName = this.parser.ruleNames[child.ruleIndex];
    if(ruleName === 'triplesBlock'){
      results.push(child);
      triplesBlock.children.splice(i, 1);
      this.flattenTriplesBlock(child, results);
    }
  }.bind(this));
  return results;
};

TrigGrammerListener.prototype.finalize = function(){
  try{
    this.finalized = true;
    var errors = [];
    this.allGraphs.forEach(function(graph){
        errors = errors.concat(graph.finalize(this.prefixMap));
    }.bind(this));
    var unusedPrefixes = this.prefixMap.getUnusedAsError()
    errors = errors.concat(unusedPrefixes)
    return errors;
  }catch(e){
    console.error("Error finalizing trig doc")
    console.error(e);
  }
};

TrigGrammerListener.prototype.handleWrappedGraph = function(wrappedGraph, iri){
  var rootTriplesBlock = wrappedGraph.children.find(function(child){
    return this.parser.ruleNames[child.ruleIndex] === 'triplesBlock';
  }.bind(this));
  this.handleGraphTriples(rootTriplesBlock, iri, this.ruleHandler.createNode(wrappedGraph));

}

TrigGrammerListener.prototype.handleBlock = function(ctx){

    var ruleName = this.parser.ruleNames[ctx.ruleIndex];
    if(!ruleName) return;
    var labelOrSubject = ctx.children.filter(function(child){
      return this.parser.ruleNames[child.ruleIndex] === 'labelOrSubject';
    }.bind(this))[0]

    if(labelOrSubject){
        var iri = labelOrSubject.children.filter(function(child){
          return this.parser.ruleNames[child.ruleIndex] === 'iri';
        }.bind(this))[0];
        var blank_node = labelOrSubject.children.filter(function(child){
          return this.parser.ruleNames[child.ruleIndex] === 'BlankNode';
        }.bind(this))[0];

    }

    var wrappedGraph = ctx.children.filter(function(child){
      return this.parser.ruleNames[child.ruleIndex] === 'wrappedGraph';
    }.bind(this))[0];

    var predicateObjectList = ctx.children.find(function(child){
      return this.parser.ruleNames[child.ruleIndex] === 'predicateObjectList';
    }.bind(this));

    if(wrappedGraph){
      this.handleWrappedGraph(wrappedGraph, iri);
    }
    else if(labelOrSubject && predicateObjectList){
      this.handleDefaultTriples(labelOrSubject, predicateObjectList);
    }

}
TrigGrammerListener.prototype.enterEveryRule = function(ctx){
  if(this.finalized) throw new Error("Listener fired after finalization.");
  var ruleName = this.parser.ruleNames[ctx.ruleIndex];

  try{
    switch(ruleName){

      case 'prefixID':
        var prefix = this.ruleHandler.handlePrefixID(ctx, this.analysisErrors);
        if(prefix){
          if(this.prefixMap.get(prefix.name)){
            var e = this.ruleHandler.createErrorFromNode(prefix.name_symbol,
               "Prefix already declared: " + prefix.name, prefix.name.length);
            this.analysisErrors.push(e);
          }else{
            this.prefixMap.put(prefix, ctx);
          }
        }

        break;

      case 'block':
        this.handleBlock(ctx.children[0]);
        break;

      case 'wrappedGraph':
        if(this.parser.ruleNames[ctx.parentCtx.ruleIndex] === 'block'){
          this.handleWrappedGraph(ctx);
        }
        break;

      case 'triplesBlock':
        var parentType = ctx.parser.ruleNames[ctx.parentCtx.ruleIndex];
        if(parentType === 'trigDoc'){
            this.handleDefaultTriples(ctx);
        }
        break;
      case 'macro':
        this.macros.push(this.ruleHandler.handleMacro(ctx));
        break;

      default:
        break;

    }
  }catch(e){
    this.handleError(e)
    console.error(e);
  }


};
TrigGrammerListener.prototype.handleError = function(){}
TrigGrammerListener.prototype.getDocument = function(){


  var graphs = this.graphs;
  var defaultGraph;

  if(this.defaultStmts.length !== 0 || this.options.allowEmptyDefaultGraph){
    var trigDoc = this.parser.trigDoc();
    defaultGraph = this.ruleHandler.createDefaultGraph(this.defaultStmts, trigDoc);
  }


  var allGraphs = defaultGraph ? [].concat.apply([], [graphs, [ defaultGraph ]]) : graphs;
  this.allGraphs = allGraphs;
  var result =  {
    prefixes: this.prefixMap,
    graphs: graphs,
    macros: this.macros,
    errors: this.errors,
    syntaxErrors: this.syntaxErrors,
    allGraphs: this.allGraphs,
    defaultGraph: defaultGraph,
    analysisErrors: this.analysisErrors,
    getStatements: function(){
      return allGraphs.reduce(function(acc, graph){
        acc = acc.concat(graph.getStatements());
        return acc;
      },[]);
      //return [].concat.apply([], [stmts, this.defaultGraph ? this.defaultGraph.getStatements() : []]);
    }
  };
  result.analysisErrors = result.analysisErrors.concat(this.finalize());

  return result;
};
TrigGrammerListener.prototype.prefixId = function(ctx){};
TrigGrammerListener.prototype.prefixID = function(ctx){};
TrigGrammerListener.prototype.graph = function(ctx){};
TrigGrammerListener.prototype.triplesBlock = function(ctx){};
TrigGrammerListener.prototype.macro = function(ctx){};
TrigGrammerListener.prototype.visitTerminal = function(){};
TrigGrammerListener.prototype.exitEveryRule = function(){};
TrigGrammerListener.prototype.exitRule = function(){};
TrigGrammerListener.prototype.visitErrorNode = function(ctx){
  this.errors.push(ctx);
};
module.exports = TrigGrammerListener;

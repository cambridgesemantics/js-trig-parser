
var TrigGrammerListener = function(trigStr, parser, ruleHandler, options) {
  this.trigStr = trigStr;
  this.parser = parser;
  this.ruleHandler = ruleHandler;
  this.prefixMap = {};
  this.graphs = [];
  this.macros = [];
  this.errors = [];
  this.defaultStmts = [];
  this.finalized = false;
  this.options = options || {
    allowEmptyDefaultGraph: false
  };
};




TrigGrammerListener.prototype.handleDefaultTriples = function(rootTriplesBlock){
  var flattenedTriples = this.flattenTriplesBlock(rootTriplesBlock);
  flattenedTriples.forEach(function(triplesBlock){
    triplesBlock.children.forEach(function(potentialTriples){
      var type = this.parser.ruleNames[potentialTriples.ruleIndex];
      if(type !== 'triples') return;
      this.defaultStmts.push(this.ruleHandler.createNode(potentialTriples));
    }.bind(this));
  }.bind(this));
};
TrigGrammerListener.prototype.handleGraphTriples = function(rootTriplesBlock, iri, graphToken){
    var flattenedTriples = this.flattenTriplesBlock(rootTriplesBlock);
    var iriStr = this.ruleHandler.createNode(iri).token;
    this.graphs.push(this.ruleHandler.handleGraph(flattenedTriples, iriStr, graphToken));
};

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

// some code here
TrigGrammerListener.prototype.finalize = function(){
  this.finalized = true;
  this.allGraphs.forEach(function(graph){
    graph.finalize(this.prefixMap);
  }.bind(this));
};

TrigGrammerListener.prototype.addPrefix = function(prefix){
  if(this.finalized) throw new Error("Listener fired after finalization.");
  this.prefixMap[prefix.name] = prefix;
};

TrigGrammerListener.prototype.prefixId = function(ctx){

};
TrigGrammerListener.prototype.prefixID = function(ctx){

};
TrigGrammerListener.prototype.graph = function(ctx){

};
TrigGrammerListener.prototype.triplesBlock = function(ctx){

};
TrigGrammerListener.prototype.macro = function(ctx){

};
TrigGrammerListener.prototype.enterEveryRule = function(ctx){
  if(this.finalized) throw new Error("Listener fired after finalization.");
  var ruleName = this.parser.ruleNames[ctx.ruleIndex];
  switch(ruleName){
    case 'prefixID':
      var prefix = this.ruleHandler.handlePrefixID(ctx);
      this.addPrefix(prefix);
      break;

    case 'graph':
      var iri = ctx.children.filter(function(child){
        return this.parser.ruleNames[child.ruleIndex] === 'iri';
      }.bind(this))[0];
      var wrappedGraph = ctx.children.filter(function(child){
        return this.parser.ruleNames[child.ruleIndex] === 'wrappedGraph';
      }.bind(this))[0];

      var rootTriplesBlock = wrappedGraph.children.filter(function(child){
        return this.parser.ruleNames[child.ruleIndex] === 'triplesBlock';
      }.bind(this))[0];

      if(iri === undefined){
        this.handleDefaultTriples(rootTriplesBlock);
        break;
      }
      this.handleGraphTriples(rootTriplesBlock, iri, this.ruleHandler.createNode(ctx));
      break;
    //specific to CSI trig files
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
};

TrigGrammerListener.prototype.getDocument = function(){
  var graphs = this.graphs;
  var defaultGraph;
  if(this.defaultStmts.length !== 0 || this.options.allowEmptyDefaultGraph){

    defaultGraph = this.ruleHandler.createDefaultGraph(this.defaultStmts, this.parser.trigDoc());
  }
  var allGraphs = defaultGraph ? [].concat.apply([], [graphs, [ defaultGraph ]]) : graphs;
  this.allGraphs = allGraphs;
  var result =  {
    prefixes: this.prefixMap,
    graphs: graphs,
    macros: this.macros,
    errors: this.errors,
    allGraphs: this.allGraphs,
    defaultGraph: defaultGraph,
    getStatements: function(){
      return allGraphs.reduce(function(acc, graph){
        acc = acc.concat(graph.getStatements());
        return acc;
      },[]);
      //return [].concat.apply([], [stmts, this.defaultGraph ? this.defaultGraph.getStatements() : []]);
    }
  };
  this.finalize();
  return result;
};

TrigGrammerListener.prototype.visitTerminal = function(){};
TrigGrammerListener.prototype.exitEveryRule = function(){};
TrigGrammerListener.prototype.exitRule = function(){};
TrigGrammerListener.prototype.visitErrorNode = function(ctx){
  this.errors.push(ctx);
};
module.exports = TrigGrammerListener;

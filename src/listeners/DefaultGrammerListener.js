var TrigGrammerListener = function(docStr, parser, onRule, onTerminal) {
  this.docStr = docStr;
  this.parser = parser;

  this.onRule = onRule;
  this.onTerminal = onTerminal;

  this.expressions = [];
  this.terminals = [];
  this.errors = [];
};

TrigGrammerListener.prototype.enterEveryRule = function(ctx){
  var result = (this.onRule && this.onRule(ctx)) || ctx;
  this.expressions.push(result);
};

TrigGrammerListener.prototype.visitTerminal = function(ctx){
  var result = (this.onTerminal && this.onTerminal(ctx)) || ctx;
  this.terminals.push(result);
};
TrigGrammerListener.prototype.exitEveryRule = function(){};
TrigGrammerListener.prototype.visitErrorNode = function(ctx){
  this.errors.push(ctx);
};
module.exports = TrigGrammerListener;

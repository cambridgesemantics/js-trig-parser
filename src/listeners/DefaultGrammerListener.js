var DefaultTrigGrammerListener = function(docStr, trig, onRule, onTerminal) {
  this.docStr = docStr;
  this.parser = trig.parser;

  this.onRule = onRule;
  this.onTerminal = onTerminal;

  this.expressions = [];
  this.terminals = [];
  this.errors = [];
  this.syntaxErrors = trig.syntaxErrors;
};

DefaultTrigGrammerListener.prototype.enterEveryRule = function(ctx){
  var result = (this.onRule && this.onRule(ctx)) || ctx;
  this.expressions.push(result);
};

DefaultTrigGrammerListener.prototype.visitTerminal = function(ctx){
  var result = (this.onTerminal && this.onTerminal(ctx)) || ctx;
  this.terminals.push(result);
};
DefaultTrigGrammerListener.prototype.exitEveryRule = function(){};
DefaultTrigGrammerListener.prototype.visitErrorNode = function(ctx){
  this.errors.push(ctx);
};


module.exports = DefaultTrigGrammerListener;

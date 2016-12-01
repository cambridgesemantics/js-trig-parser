function createPreprocessor(trig, parser){
  var symbolicNames = parser.symbolicNames;
  var ruleNames = parser.ruleNames;
  var literalNames = parser.literalNames;
  function createExpression(rule){
    return {
        pos: {
          line: rule.start.line,
          column: rule.start.column
        },
        start: rule.start,
        stop: rule.stop,
        type: ruleNames[rule.ruleIndex],
        token: trig.substring(rule.start.start, rule.stop.stop + 1),
        children: rule.children ? rule.children.map(createNode) : []
    };
  }

  function createNode(childResult){
    if(childResult.ruleIndex !== undefined)
      return createExpression(childResult);
    return createSymbol(childResult);
  }

  function createSymbol(symbolResult){
    symbolResult = symbolResult.symbol;
    return {
        pos:{
          line: symbolResult.line,
          column: symbolResult.column,
        },
        start: symbolResult.start,
        stop: symbolResult.stop,
        type: symbolicNames[symbolResult.type] || literalNames[symbolResult.type],
        token: trig.substring(symbolResult.start, symbolResult.stop + 1)

    };
  }
  return {
    createNode: createNode,
    createExpression: createExpression,
    createSymbol: createSymbol
  };
}
module.exports = createPreprocessor;

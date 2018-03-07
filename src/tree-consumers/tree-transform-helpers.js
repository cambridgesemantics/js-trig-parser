let allowedRootTypes = {
  'predicateObjectList' : true,
  'iri' : true,
  'IRIREF' : true,
  'rdfLiteral' : true,
  '\'a\'' : true,
  'labelOrSubject' : true,
  'triples' : true,
  'subject': true
}

function createPreprocessor(trig, parser){
  var symbolicNames = parser.symbolicNames;
  var ruleNames = parser.ruleNames;
  var literalNames = parser.literalNames;
  
  let substringCached = function(start, end){
    return trig.substring(start, end)
  }

  function createExpression(rule){
    let token = null

    //empty docs don't seem to populate these values
    if(rule.start && rule.stop){
      token = substringCached(rule.start.start, rule.stop.stop + 1)
    }else{
      token = "ERR RESOLVING TOKEN"
    }
    

    return {
        pos: {
          line: rule.start.line,
          column: rule.start.column
        },
        start: rule.start,
        stop: rule.stop,
        type: ruleNames[rule.ruleIndex],
        token: token,
        children: rule.children ? rule.children.map(_createNode) : []
    };
  }

  function createNode(childResult){
    if(childResult.ruleIndex !== undefined){
      if(ruleNames[childResult.ruleIndex] in allowedRootTypes){
        return createExpression(childResult);  
      }else{
        // console.error(ruleNames[childResult.ruleIndex])

      }
      return null;      
    }

    return createSymbol(childResult);
  }

  function _createNode(childResult){
    if(childResult.ruleIndex !== undefined)
      return createExpression(childResult);
    return createSymbol(childResult);
  }

  function createSymbol(symbolResult){
    symbolResult = symbolResult.symbol ?  symbolResult.symbol  : symbolResult


    let type = symbolicNames[symbolResult.type] || literalNames[symbolResult.type]


    return {
        pos:{
          line: symbolResult.line,
          column: symbolResult.column,
        },
        start: symbolResult.start || symbolResult.source.start,
        stop: symbolResult.stop || symbolResult.source.stop,
        type: type,
        token: substringCached(symbolResult.start, symbolResult.stop + 1)

    };
  }
  return {
    createNode: createNode,
    createExpression: createExpression,
    createSymbol: createSymbol
  };
}
module.exports = createPreprocessor;

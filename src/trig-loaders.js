
var antlr4 = require('antlr4');
var TRIGLexer = require('./antlr-trig/TRIGLexer.js').TRIGLexer;
var TRIGParser = require('./antlr-trig/TRIGParser.js').TRIGParser;
var DefaultGrammerListener = require('./listeners/DefaultGrammerListener.js');
var TrigGrammerListener = require('./listeners/TrigGrammerListener.js');
var createRuleHandler = require('./tree-consumers/trig-tree-consumer.js');

var selectPrefixes = new RegExp('@prefix[^\.]*\.', 'g');
var trimPrefixNameWhitespace = new RegExp('[A-Za-z0-9 ]*\\s*:', 'g');
var removeWhitespace = new RegExp('\\s+:');
var treeTransformHelpers = require('./tree-consumers/tree-transform-helpers.js');

var fs;
try {
    fs = require('fs');
} catch(e) {

}

function transformTreeAndGetRules(docStr, trig){
    var helpers = treeTransformHelpers(docStr, trig.parser);
    var listener = new DefaultGrammerListener(docStr, trig, function(rule){
      return helpers.createNode(rule);
    }, function(terminal){
      return helpers.createNode(terminal);
    });

      antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, trig.tree);
    return {
      syntaxErrors: trig.syntaxErrors,
      errors: listener.errors.map(x => {

        return {
          offendingToken: x.parentCtx.exception ? x.parentCtx.exception.offendingToken : null,
          text: x.symbol.text,
          line: x.symbol.line,
          column: x.symbol.column,
          msg: x.symbol._text,
          err: x 
        };
      }),
      expressions: listener.expressions,
      terminals: listener.terminals
    };
};

function replaceBadPrefixes(trigStr){
  (trigStr.match(selectPrefixes) || []).forEach(function(prefix){
    (prefix.match(trimPrefixNameWhitespace) || []).forEach(function(match){
      trigStr = trigStr.replace(match, match.replace(removeWhitespace, ':'));
    });
  });
  return trigStr;
};



function parseTrig(data, options){
    options = options || { printSyntaxErrors: false }
    data = replaceBadPrefixes(data);
    var chars = new antlr4.InputStream(data);
    var lexer = new TRIGLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new TRIGParser(tokens);
    var syntaxErrors = [];

    if(!options.printSyntaxErrors){
      parser._listeners = [];
    }
    
    var e_listener = {
      syntaxError: function(parser, offendingToken, line, column, msg, err){
        syntaxErrors.push({
          offendingToken: offendingToken,
          line: line,
          column: column,
          msg: msg,
          err: err
        });
      },
      reportAttemptingFullContext: function(){
        
      },
      reportContextSensitivity: function(){
        
      },
      reportAmbiguity: function(){
            
      }
    };
    lexer.addErrorListener(e_listener);
    parser.addErrorListener(e_listener);
    parser.buildParseTrees = true;
    
    return {
      tree: parser.trigDoc(),
      parser: parser,
      syntaxErrors: syntaxErrors
    };
}


function graphsFromFile(fn, cb){
    fs.readFile(fn, 'utf-8', function(err, content){
        if(err) cb(err);
        try{
          var result = graphsFromString(content);
        }
        catch(e){
          cb(e);
        }

        cb(null, result);
    });
}

function graphsFromString(data, options){
    data = replaceBadPrefixes(data);
    var trig = parseTrig(data, options);
    
    var ruleHandler = createRuleHandler(data, trig.parser);
    var trigListener = new TrigGrammerListener(data, trig, ruleHandler);
    
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(trigListener, trig.tree);
    return trigListener.getDocument();
}


function treeFromFile(fn, cb){
    fs.readFile(fn, 'utf-8', function(err, content){
      if(err) cb(err);
      cb(null, parseTrig(content));
    });
}

function defaultTransform(data, options){
  data = replaceBadPrefixes(data);
  var trig = parseTrig(data, options);
  return transformTreeAndGetRules(data, trig);
}

function defaultTransformFromFile(fn, cb){
  
    fs.readFile(fn, 'utf-8', function(err, content){
      if(err) cb(err);
      try{
        let results = defaultTransform(content)
        cb(null, defaultTransform(results));
      }catch(e){
        console.error("Error parsing trig file: " + fn)
        console.error(e)
        cb(e);
      }
    });
}



var graphLoader = {
    fromString: graphsFromString
};
var baseLoader = {
    fromString: defaultTransform
};
var syntaxTreeLoader = {
    fromString: parseTrig
};

if(fs){
  graphLoader.fromFile = graphsFromFile;
  baseLoader.fromFile = defaultTransformFromFile;
  syntaxTreeLoader.fromFile = treeFromFile;
}

module.exports = {
    graphLoader: graphLoader,
    baseLoader: baseLoader,
    syntaxTreeLoader: syntaxTreeLoader
};

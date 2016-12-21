
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

var transformTreeAndGetRules = function(docStr, trig){
    var helpers = treeTransformHelpers(docStr, trig.parser);
    var listener = new DefaultGrammerListener(docStr, trig, function(rule){
      return helpers.createNode(rule);
    }, function(terminal){
      return helpers.createNode(terminal);
    });

    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, trig.tree);
    return {
      syntaxErrors: trig.syntaxErrors,
      errors: listener.errors,
      expressions: listener.expressions,
      terminals: listener.terminals
    };
};

var replaceBadPrefixes = function(trigStr){
  (trigStr.match(selectPrefixes) || []).forEach(function(prefix){
    (prefix.match(trimPrefixNameWhitespace) || []).forEach(function(match){
      trigStr = trigStr.replace(match, match.replace(removeWhitespace, ':'));
    });
  });
  return trigStr;
};


/**
 * EBNF rule names to human readable names.
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
function formatSyntaxErrorMessage(msg){
  msg = msg.replace('PNAME_NS', 'Prefix Namespace Declaration');
  return msg;
}


function parseTrig(data){
    data = replaceBadPrefixes(data);
    var chars = new antlr4.InputStream(data);
    var lexer = new TRIGLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new TRIGParser(tokens);
    var syntaxErrors = [];
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
          cb(null, result);
        }
        catch(e){
          cb(e);
        }
    });
}

function graphsFromString(data){
    data = replaceBadPrefixes(data);
    var trig = parseTrig(data);
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

function defaultTransform(data){
  data = replaceBadPrefixes(data);
  var trig = parseTrig(data);
  return transformTreeAndGetRules(data, trig);
}

function defaultTransformFromFile(fn, cb){
    fs.readFile(fn, 'utf-8', function(err, content){
      if(err) cb(err);
      cb(null, defaultTransform(content));
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

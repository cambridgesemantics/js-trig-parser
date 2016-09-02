var fs = require('fs');
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


var transformTreeAndGetRules = function(docStr, trig){
    var helpers = treeTransformHelpers(docStr, trig.parser);
    var listener = new DefaultGrammerListener(docStr, trig.parser, function(rule){
      return helpers.crateNode(rule);
    }, function(terminal){
      return helpers.crateNode(terminal);
    });

    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, trig.tree);
    return {
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



function parseTrig(data){
    data = replaceBadPrefixes(data);
    var chars = new antlr4.InputStream(data);
    var lexer = new TRIGLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new TRIGParser(tokens);
    parser.buildParseTrees = true;
    return {
      tree: parser.trigDoc(),
      parser: parser
    };
}


function graphsFromFile(fn, cb){
    fs.readFile(fn, 'utf-8', function(err, content){
        if(err) cb(err);
        try{
          cb(null, graphsFromString(content));
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
    var trigListener = new TrigGrammerListener(data, trig.parser, ruleHandler);
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



module.exports = {
    graphLoader: {
        fromFile: graphsFromFile,
        fromString: graphsFromString
    },
    baseLoader: { //loads raw antlr4 results w/ type/position expansions
      fromFile: defaultTransformFromFile,
      fromString: defaultTransform
    },
    syntaxTreeLoader: {
      fromFile: treeFromFile,
      fromString: parseTrig
    }
};

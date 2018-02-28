var antlr4 = require('antlr4');
var TRIGLexer = require('./antlr-trig/TRIGLexer.js').TRIGLexer;
var TRIGParser = require('./antlr-trig/TRIGParser.js').TRIGParser;
var DefaultGrammerListener = require('./listeners/DefaultGrammerListener.js');
var fs = require('fs')
var trigLoaders = require('./trig-loaders.js')


let t1 = new Date().getTime()

let contents = fs.readFileSync('../spec/other/performance-test2.trig', 'utf-8')
var chars = new antlr4.InputStream(contents);
var lexer = new TRIGLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new TRIGParser(tokens);

// antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, trig.tree);
parser.buildParseTrees = true;
parser.trigDoc()
let t2 = new Date().getTime()
console.log(t2 - t1)
trigLoaders.baseLoader.fromString(contents)
let t3 = new Date().getTime()
console.log(t3 - t2)

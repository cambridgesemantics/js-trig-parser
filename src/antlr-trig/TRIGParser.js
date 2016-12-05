// Generated from TRIG.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TRIGListener = require('./TRIGListener').TRIGListener;
var grammarFileName = "TRIG.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00034\u00d2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002:\n\u0002\f\u0002",
    "\u000e\u0002=\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003F\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004M",
    "\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005Q\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0005\u0007W\n\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0005\b^\n\b\u0005\b`\n\b\u0003\t\u0003",
    "\t\u0005\td\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\tl\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\nr\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u0089\n\u000f\u0005\u000f\u008b\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0093\n",
    "\u0010\u0007\u0010\u0095\n\u0010\f\u0010\u000e\u0010\u0098\u000b\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0007\u0011\u009d\n\u0011\f\u0011",
    "\u000e\u0011\u00a0\u000b\u0011\u0003\u0012\u0003\u0012\u0005\u0012\u00a4",
    "\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00a9\n\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u00b2\n\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u00b7\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0007\u0018\u00bf\n\u0018\f\u0018",
    "\u000e\u0018\u00c2\u000b\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00ca\n\u0019\u0003\u001a",
    "\u0003\u001a\u0005\u001a\u00ce\n\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0002\u0002\u001c\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.024\u0002\u0003\u0004\u0002\u001c",
    "\u001c\u001e\u001e\u00d9\u0002;\u0003\u0002\u0002\u0002\u0004E\u0003",
    "\u0002\u0002\u0002\u0006G\u0003\u0002\u0002\u0002\bP\u0003\u0002\u0002",
    "\u0002\nR\u0003\u0002\u0002\u0002\fT\u0003\u0002\u0002\u0002\u000eZ",
    "\u0003\u0002\u0002\u0002\u0010k\u0003\u0002\u0002\u0002\u0012q\u0003",
    "\u0002\u0002\u0002\u0014s\u0003\u0002\u0002\u0002\u0016x\u0003\u0002",
    "\u0002\u0002\u0018|\u0003\u0002\u0002\u0002\u001a\u007f\u0003\u0002",
    "\u0002\u0002\u001c\u008a\u0003\u0002\u0002\u0002\u001e\u008c\u0003\u0002",
    "\u0002\u0002 \u0099\u0003\u0002\u0002\u0002\"\u00a3\u0003\u0002\u0002",
    "\u0002$\u00a8\u0003\u0002\u0002\u0002&\u00aa\u0003\u0002\u0002\u0002",
    "(\u00b1\u0003\u0002\u0002\u0002*\u00b6\u0003\u0002\u0002\u0002,\u00b8",
    "\u0003\u0002\u0002\u0002.\u00bc\u0003\u0002\u0002\u00020\u00c5\u0003",
    "\u0002\u0002\u00022\u00cd\u0003\u0002\u0002\u00024\u00cf\u0003\u0002",
    "\u0002\u00026:\u0005\u0012\n\u00027:\u0005\u0004\u0003\u00028:\u0005",
    "\n\u0006\u000296\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u00029",
    "8\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<\u0003\u0003\u0002\u0002\u0002=;\u0003",
    "\u0002\u0002\u0002>F\u0005\u0006\u0004\u0002?F\u0005\f\u0007\u0002@",
    "F\u0005\u0010\t\u0002AB\u0007\u0003\u0002\u0002BC\u0005\b\u0005\u0002",
    "CD\u0005\f\u0007\u0002DF\u0003\u0002\u0002\u0002E>\u0003\u0002\u0002",
    "\u0002E?\u0003\u0002\u0002\u0002E@\u0003\u0002\u0002\u0002EA\u0003\u0002",
    "\u0002\u0002F\u0005\u0003\u0002\u0002\u0002GL\u0005\b\u0005\u0002HM",
    "\u0005\f\u0007\u0002IJ\u0005\u001e\u0010\u0002JK\u0007\u0004\u0002\u0002",
    "KM\u0003\u0002\u0002\u0002LH\u0003\u0002\u0002\u0002LI\u0003\u0002\u0002",
    "\u0002M\u0007\u0003\u0002\u0002\u0002NQ\u00052\u001a\u0002OQ\u0007\u0018",
    "\u0002\u0002PN\u0003\u0002\u0002\u0002PO\u0003\u0002\u0002\u0002Q\t",
    "\u0003\u0002\u0002\u0002RS\u0007\u0013\u0002\u0002S\u000b\u0003\u0002",
    "\u0002\u0002TV\u0007\u0005\u0002\u0002UW\u0005\u000e\b\u0002VU\u0003",
    "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002",
    "XY\u0007\u0006\u0002\u0002Y\r\u0003\u0002\u0002\u0002Z_\u0005\u001c",
    "\u000f\u0002[]\u0007\u0004\u0002\u0002\\^\u0005\u000e\b\u0002]\\\u0003",
    "\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0003\u0002\u0002\u0002",
    "_[\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`\u000f\u0003\u0002",
    "\u0002\u0002ac\u0005,\u0017\u0002bd\u0005\u001e\u0010\u0002cb\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002",
    "ef\u0007\u0004\u0002\u0002fl\u0003\u0002\u0002\u0002gh\u0005.\u0018",
    "\u0002hi\u0005\u001e\u0010\u0002ij\u0007\u0004\u0002\u0002jl\u0003\u0002",
    "\u0002\u0002ka\u0003\u0002\u0002\u0002kg\u0003\u0002\u0002\u0002l\u0011",
    "\u0003\u0002\u0002\u0002mr\u0005\u0014\u000b\u0002nr\u0005\u0016\f\u0002",
    "or\u0005\u001a\u000e\u0002pr\u0005\u0018\r\u0002qm\u0003\u0002\u0002",
    "\u0002qn\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qp\u0003\u0002",
    "\u0002\u0002r\u0013\u0003\u0002\u0002\u0002st\u0007\u0007\u0002\u0002",
    "tu\u0007\u001c\u0002\u0002uv\u0007\u001b\u0002\u0002vw\u0007\u0004\u0002",
    "\u0002w\u0015\u0003\u0002\u0002\u0002xy\u0007\b\u0002\u0002yz\u0007",
    "\u001b\u0002\u0002z{\u0007\u0004\u0002\u0002{\u0017\u0003\u0002\u0002",
    "\u0002|}\u0007\t\u0002\u0002}~\u0007\u001b\u0002\u0002~\u0019\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0007\n\u0002\u0002\u0080\u0081\u0007",
    "\u001c\u0002\u0002\u0081\u0082\u0007\u001b\u0002\u0002\u0082\u001b\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0005$\u0013\u0002\u0084\u0085\u0005",
    "\u001e\u0010\u0002\u0085\u008b\u0003\u0002\u0002\u0002\u0086\u0088\u0005",
    ",\u0017\u0002\u0087\u0089\u0005\u001e\u0010\u0002\u0088\u0087\u0003",
    "\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008b\u0003",
    "\u0002\u0002\u0002\u008a\u0083\u0003\u0002\u0002\u0002\u008a\u0086\u0003",
    "\u0002\u0002\u0002\u008b\u001d\u0003\u0002\u0002\u0002\u008c\u008d\u0005",
    "\"\u0012\u0002\u008d\u0096\u0005 \u0011\u0002\u008e\u0092\u0007\u000b",
    "\u0002\u0002\u008f\u0090\u0005\"\u0012\u0002\u0090\u0091\u0005 \u0011",
    "\u0002\u0091\u0093\u0003\u0002\u0002\u0002\u0092\u008f\u0003\u0002\u0002",
    "\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002\u0002",
    "\u0002\u0094\u008e\u0003\u0002\u0002\u0002\u0095\u0098\u0003\u0002\u0002",
    "\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097\u001f\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002",
    "\u0002\u0099\u009e\u0005(\u0015\u0002\u009a\u009b\u0007\f\u0002\u0002",
    "\u009b\u009d\u0005(\u0015\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009d\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f!\u0003\u0002\u0002\u0002",
    "\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a4\u0005&\u0014\u0002",
    "\u00a2\u00a4\u0007\r\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002",
    "\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4#\u0003\u0002\u0002\u0002",
    "\u00a5\u00a9\u00052\u001a\u0002\u00a6\u00a9\u0007\u0018\u0002\u0002",
    "\u00a7\u00a9\u0005.\u0018\u0002\u00a8\u00a5\u0003\u0002\u0002\u0002",
    "\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002",
    "\u00a9%\u0003\u0002\u0002\u0002\u00aa\u00ab\u00052\u001a\u0002\u00ab",
    "\'\u0003\u0002\u0002\u0002\u00ac\u00b2\u00052\u001a\u0002\u00ad\u00b2",
    "\u0007\u0018\u0002\u0002\u00ae\u00b2\u0005.\u0018\u0002\u00af\u00b2",
    "\u0005,\u0017\u0002\u00b0\u00b2\u0005*\u0016\u0002\u00b1\u00ac\u0003",
    "\u0002\u0002\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b1\u00ae\u0003",
    "\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b0\u0003",
    "\u0002\u0002\u0002\u00b2)\u0003\u0002\u0002\u0002\u00b3\u00b7\u0005",
    "0\u0019\u0002\u00b4\u00b7\u0007\u0014\u0002\u0002\u00b5\u00b7\u0007",
    "\u0016\u0002\u0002\u00b6\u00b3\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003",
    "\u0002\u0002\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7+\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\u0007\u000e\u0002\u0002\u00b9\u00ba\u0005",
    "\u001e\u0010\u0002\u00ba\u00bb\u0007\u000f\u0002\u0002\u00bb-\u0003",
    "\u0002\u0002\u0002\u00bc\u00c0\u0007\u0010\u0002\u0002\u00bd\u00bf\u0005",
    "(\u0015\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c2\u0003",
    "\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003",
    "\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003",
    "\u0002\u0002\u0002\u00c3\u00c4\u0007\u0011\u0002\u0002\u00c4/\u0003",
    "\u0002\u0002\u0002\u00c5\u00c9\u0007\u0017\u0002\u0002\u00c6\u00ca\u0007",
    " \u0002\u0002\u00c7\u00c8\u0007\u0012\u0002\u0002\u00c8\u00ca\u0005",
    "2\u001a\u0002\u00c9\u00c6\u0003\u0002\u0002\u0002\u00c9\u00c7\u0003",
    "\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca1\u0003",
    "\u0002\u0002\u0002\u00cb\u00ce\u0007\u001b\u0002\u0002\u00cc\u00ce\u0005",
    "4\u001b\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00cd\u00cc\u0003",
    "\u0002\u0002\u0002\u00ce3\u0003\u0002\u0002\u0002\u00cf\u00d0\t\u0002",
    "\u0002\u0002\u00d05\u0003\u0002\u0002\u0002\u00199;ELPV]_ckq\u0088\u008a",
    "\u0092\u0096\u009e\u00a3\u00a8\u00b1\u00b6\u00c0\u00c9\u00cd"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'GRAPH'", "'.'", "'{'", "'}'", "'@prefix'", 
                     "'@base'", "'BASE'", "'PREFIX'", "';'", "','", "'a'", 
                     "'['", "']'", "'('", "')'", "'^^'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, "Macro", 
                      "NumericLiteral", "Comment", "BooleanLiteral", "String", 
                      "BlankNode", "WS", "PN_PREFIX", "IRIREF", "PNAME_NS", 
                      "MACRO_VAL", "PNAME_LN", "BLANK_NODE_LABEL", "LANGTAG", 
                      "INTEGER", "DECIMAL", "DOUBLE", "EXPONENT", "STRING_LITERAL_LONG_SINGLE_QUOTE", 
                      "STRING_LITERAL_LONG_QUOTE", "STRING_LITERAL_QUOTE", 
                      "STRING_LITERAL_SINGLE_QUOTE", "UCHAR", "ECHAR", "ANON_WS", 
                      "ANON", "PN_CHARS_BASE", "PN_CHARS_U", "PN_CHARS", 
                      "PN_LOCAL", "PLX", "PERCENT", "HEX", "PN_LOCAL_ESC" ];

var ruleNames =  [ "trigDoc", "block", "triplesOrGraph", "labelOrSubject", 
                   "macro", "wrappedGraph", "triplesBlock", "triples2", 
                   "directive", "prefixID", "base", "sparqlBase", "sparqlPrefix", 
                   "triples", "predicateObjectList", "objectList", "verb", 
                   "subject", "predicate", "object", "literal", "blankNodePropertyList", 
                   "collection", "rdfLiteral", "iri", "prefixedname" ];

function TRIGParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TRIGParser.prototype = Object.create(antlr4.Parser.prototype);
TRIGParser.prototype.constructor = TRIGParser;

Object.defineProperty(TRIGParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TRIGParser.EOF = antlr4.Token.EOF;
TRIGParser.T__0 = 1;
TRIGParser.T__1 = 2;
TRIGParser.T__2 = 3;
TRIGParser.T__3 = 4;
TRIGParser.T__4 = 5;
TRIGParser.T__5 = 6;
TRIGParser.T__6 = 7;
TRIGParser.T__7 = 8;
TRIGParser.T__8 = 9;
TRIGParser.T__9 = 10;
TRIGParser.T__10 = 11;
TRIGParser.T__11 = 12;
TRIGParser.T__12 = 13;
TRIGParser.T__13 = 14;
TRIGParser.T__14 = 15;
TRIGParser.T__15 = 16;
TRIGParser.Macro = 17;
TRIGParser.NumericLiteral = 18;
TRIGParser.Comment = 19;
TRIGParser.BooleanLiteral = 20;
TRIGParser.String = 21;
TRIGParser.BlankNode = 22;
TRIGParser.WS = 23;
TRIGParser.PN_PREFIX = 24;
TRIGParser.IRIREF = 25;
TRIGParser.PNAME_NS = 26;
TRIGParser.MACRO_VAL = 27;
TRIGParser.PNAME_LN = 28;
TRIGParser.BLANK_NODE_LABEL = 29;
TRIGParser.LANGTAG = 30;
TRIGParser.INTEGER = 31;
TRIGParser.DECIMAL = 32;
TRIGParser.DOUBLE = 33;
TRIGParser.EXPONENT = 34;
TRIGParser.STRING_LITERAL_LONG_SINGLE_QUOTE = 35;
TRIGParser.STRING_LITERAL_LONG_QUOTE = 36;
TRIGParser.STRING_LITERAL_QUOTE = 37;
TRIGParser.STRING_LITERAL_SINGLE_QUOTE = 38;
TRIGParser.UCHAR = 39;
TRIGParser.ECHAR = 40;
TRIGParser.ANON_WS = 41;
TRIGParser.ANON = 42;
TRIGParser.PN_CHARS_BASE = 43;
TRIGParser.PN_CHARS_U = 44;
TRIGParser.PN_CHARS = 45;
TRIGParser.PN_LOCAL = 46;
TRIGParser.PLX = 47;
TRIGParser.PERCENT = 48;
TRIGParser.HEX = 49;
TRIGParser.PN_LOCAL_ESC = 50;

TRIGParser.RULE_trigDoc = 0;
TRIGParser.RULE_block = 1;
TRIGParser.RULE_triplesOrGraph = 2;
TRIGParser.RULE_labelOrSubject = 3;
TRIGParser.RULE_macro = 4;
TRIGParser.RULE_wrappedGraph = 5;
TRIGParser.RULE_triplesBlock = 6;
TRIGParser.RULE_triples2 = 7;
TRIGParser.RULE_directive = 8;
TRIGParser.RULE_prefixID = 9;
TRIGParser.RULE_base = 10;
TRIGParser.RULE_sparqlBase = 11;
TRIGParser.RULE_sparqlPrefix = 12;
TRIGParser.RULE_triples = 13;
TRIGParser.RULE_predicateObjectList = 14;
TRIGParser.RULE_objectList = 15;
TRIGParser.RULE_verb = 16;
TRIGParser.RULE_subject = 17;
TRIGParser.RULE_predicate = 18;
TRIGParser.RULE_object = 19;
TRIGParser.RULE_literal = 20;
TRIGParser.RULE_blankNodePropertyList = 21;
TRIGParser.RULE_collection = 22;
TRIGParser.RULE_rdfLiteral = 23;
TRIGParser.RULE_iri = 24;
TRIGParser.RULE_prefixedname = 25;

function TrigDocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_trigDoc;
    return this;
}

TrigDocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TrigDocContext.prototype.constructor = TrigDocContext;

TrigDocContext.prototype.directive = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DirectiveContext);
    } else {
        return this.getTypedRuleContext(DirectiveContext,i);
    }
};

TrigDocContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

TrigDocContext.prototype.macro = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MacroContext);
    } else {
        return this.getTypedRuleContext(MacroContext,i);
    }
};

TrigDocContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterTrigDoc(this);
	}
};

TrigDocContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitTrigDoc(this);
	}
};




TRIGParser.TrigDocContext = TrigDocContext;

TRIGParser.prototype.trigDoc = function() {

    var localctx = new TrigDocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TRIGParser.RULE_trigDoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TRIGParser.T__0) | (1 << TRIGParser.T__2) | (1 << TRIGParser.T__4) | (1 << TRIGParser.T__5) | (1 << TRIGParser.T__6) | (1 << TRIGParser.T__7) | (1 << TRIGParser.T__11) | (1 << TRIGParser.T__13) | (1 << TRIGParser.Macro) | (1 << TRIGParser.BlankNode) | (1 << TRIGParser.IRIREF) | (1 << TRIGParser.PNAME_NS) | (1 << TRIGParser.PNAME_LN))) !== 0)) {
            this.state = 55;
            switch(this._input.LA(1)) {
            case TRIGParser.T__4:
            case TRIGParser.T__5:
            case TRIGParser.T__6:
            case TRIGParser.T__7:
                this.state = 52;
                this.directive();
                break;
            case TRIGParser.T__0:
            case TRIGParser.T__2:
            case TRIGParser.T__11:
            case TRIGParser.T__13:
            case TRIGParser.BlankNode:
            case TRIGParser.IRIREF:
            case TRIGParser.PNAME_NS:
            case TRIGParser.PNAME_LN:
                this.state = 53;
                this.block();
                break;
            case TRIGParser.Macro:
                this.state = 54;
                this.macro();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.triplesOrGraph = function() {
    return this.getTypedRuleContext(TriplesOrGraphContext,0);
};

BlockContext.prototype.wrappedGraph = function() {
    return this.getTypedRuleContext(WrappedGraphContext,0);
};

BlockContext.prototype.triples2 = function() {
    return this.getTypedRuleContext(Triples2Context,0);
};

BlockContext.prototype.labelOrSubject = function() {
    return this.getTypedRuleContext(LabelOrSubjectContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitBlock(this);
	}
};




TRIGParser.BlockContext = BlockContext;

TRIGParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TRIGParser.RULE_block);
    try {
        this.state = 67;
        switch(this._input.LA(1)) {
        case TRIGParser.BlankNode:
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.triplesOrGraph();
            break;
        case TRIGParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.wrappedGraph();
            break;
        case TRIGParser.T__11:
        case TRIGParser.T__13:
            this.enterOuterAlt(localctx, 3);
            this.state = 62;
            this.triples2();
            break;
        case TRIGParser.T__0:
            this.enterOuterAlt(localctx, 4);
            this.state = 63;
            this.match(TRIGParser.T__0);
            this.state = 64;
            this.labelOrSubject();
            this.state = 65;
            this.wrappedGraph();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TriplesOrGraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_triplesOrGraph;
    return this;
}

TriplesOrGraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriplesOrGraphContext.prototype.constructor = TriplesOrGraphContext;

TriplesOrGraphContext.prototype.labelOrSubject = function() {
    return this.getTypedRuleContext(LabelOrSubjectContext,0);
};

TriplesOrGraphContext.prototype.wrappedGraph = function() {
    return this.getTypedRuleContext(WrappedGraphContext,0);
};

TriplesOrGraphContext.prototype.predicateObjectList = function() {
    return this.getTypedRuleContext(PredicateObjectListContext,0);
};

TriplesOrGraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterTriplesOrGraph(this);
	}
};

TriplesOrGraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitTriplesOrGraph(this);
	}
};




TRIGParser.TriplesOrGraphContext = TriplesOrGraphContext;

TRIGParser.prototype.triplesOrGraph = function() {

    var localctx = new TriplesOrGraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TRIGParser.RULE_triplesOrGraph);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.labelOrSubject();
        this.state = 74;
        switch(this._input.LA(1)) {
        case TRIGParser.T__2:
            this.state = 70;
            this.wrappedGraph();
            break;
        case TRIGParser.T__10:
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.state = 71;
            this.predicateObjectList();
            this.state = 72;
            this.match(TRIGParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelOrSubjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_labelOrSubject;
    return this;
}

LabelOrSubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelOrSubjectContext.prototype.constructor = LabelOrSubjectContext;

LabelOrSubjectContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

LabelOrSubjectContext.prototype.BlankNode = function() {
    return this.getToken(TRIGParser.BlankNode, 0);
};

LabelOrSubjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterLabelOrSubject(this);
	}
};

LabelOrSubjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitLabelOrSubject(this);
	}
};




TRIGParser.LabelOrSubjectContext = LabelOrSubjectContext;

TRIGParser.prototype.labelOrSubject = function() {

    var localctx = new LabelOrSubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TRIGParser.RULE_labelOrSubject);
    try {
        this.state = 78;
        switch(this._input.LA(1)) {
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 76;
            this.iri();
            break;
        case TRIGParser.BlankNode:
            this.enterOuterAlt(localctx, 2);
            this.state = 77;
            this.match(TRIGParser.BlankNode);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MacroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_macro;
    return this;
}

MacroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MacroContext.prototype.constructor = MacroContext;

MacroContext.prototype.Macro = function() {
    return this.getToken(TRIGParser.Macro, 0);
};

MacroContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterMacro(this);
	}
};

MacroContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitMacro(this);
	}
};




TRIGParser.MacroContext = MacroContext;

TRIGParser.prototype.macro = function() {

    var localctx = new MacroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TRIGParser.RULE_macro);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(TRIGParser.Macro);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WrappedGraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_wrappedGraph;
    return this;
}

WrappedGraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WrappedGraphContext.prototype.constructor = WrappedGraphContext;

WrappedGraphContext.prototype.triplesBlock = function() {
    return this.getTypedRuleContext(TriplesBlockContext,0);
};

WrappedGraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterWrappedGraph(this);
	}
};

WrappedGraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitWrappedGraph(this);
	}
};




TRIGParser.WrappedGraphContext = WrappedGraphContext;

TRIGParser.prototype.wrappedGraph = function() {

    var localctx = new WrappedGraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TRIGParser.RULE_wrappedGraph);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(TRIGParser.T__2);
        this.state = 84;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TRIGParser.T__11) | (1 << TRIGParser.T__13) | (1 << TRIGParser.BlankNode) | (1 << TRIGParser.IRIREF) | (1 << TRIGParser.PNAME_NS) | (1 << TRIGParser.PNAME_LN))) !== 0)) {
            this.state = 83;
            this.triplesBlock();
        }

        this.state = 86;
        this.match(TRIGParser.T__3);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TriplesBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_triplesBlock;
    return this;
}

TriplesBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriplesBlockContext.prototype.constructor = TriplesBlockContext;

TriplesBlockContext.prototype.triples = function() {
    return this.getTypedRuleContext(TriplesContext,0);
};

TriplesBlockContext.prototype.triplesBlock = function() {
    return this.getTypedRuleContext(TriplesBlockContext,0);
};

TriplesBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterTriplesBlock(this);
	}
};

TriplesBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitTriplesBlock(this);
	}
};




TRIGParser.TriplesBlockContext = TriplesBlockContext;

TRIGParser.prototype.triplesBlock = function() {

    var localctx = new TriplesBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TRIGParser.RULE_triplesBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.triples();
        this.state = 93;
        _la = this._input.LA(1);
        if(_la===TRIGParser.T__1) {
            this.state = 89;
            this.match(TRIGParser.T__1);
            this.state = 91;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TRIGParser.T__11) | (1 << TRIGParser.T__13) | (1 << TRIGParser.BlankNode) | (1 << TRIGParser.IRIREF) | (1 << TRIGParser.PNAME_NS) | (1 << TRIGParser.PNAME_LN))) !== 0)) {
                this.state = 90;
                this.triplesBlock();
            }

        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Triples2Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_triples2;
    return this;
}

Triples2Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Triples2Context.prototype.constructor = Triples2Context;

Triples2Context.prototype.blankNodePropertyList = function() {
    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
};

Triples2Context.prototype.predicateObjectList = function() {
    return this.getTypedRuleContext(PredicateObjectListContext,0);
};

Triples2Context.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

Triples2Context.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterTriples2(this);
	}
};

Triples2Context.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitTriples2(this);
	}
};




TRIGParser.Triples2Context = Triples2Context;

TRIGParser.prototype.triples2 = function() {

    var localctx = new Triples2Context(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TRIGParser.RULE_triples2);
    var _la = 0; // Token type
    try {
        this.state = 105;
        switch(this._input.LA(1)) {
        case TRIGParser.T__11:
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.blankNodePropertyList();
            this.state = 97;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TRIGParser.T__10) | (1 << TRIGParser.IRIREF) | (1 << TRIGParser.PNAME_NS) | (1 << TRIGParser.PNAME_LN))) !== 0)) {
                this.state = 96;
                this.predicateObjectList();
            }

            this.state = 99;
            this.match(TRIGParser.T__1);
            break;
        case TRIGParser.T__13:
            this.enterOuterAlt(localctx, 2);
            this.state = 101;
            this.collection();
            this.state = 102;
            this.predicateObjectList();
            this.state = 103;
            this.match(TRIGParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_directive;
    return this;
}

DirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectiveContext.prototype.constructor = DirectiveContext;

DirectiveContext.prototype.prefixID = function() {
    return this.getTypedRuleContext(PrefixIDContext,0);
};

DirectiveContext.prototype.base = function() {
    return this.getTypedRuleContext(BaseContext,0);
};

DirectiveContext.prototype.sparqlPrefix = function() {
    return this.getTypedRuleContext(SparqlPrefixContext,0);
};

DirectiveContext.prototype.sparqlBase = function() {
    return this.getTypedRuleContext(SparqlBaseContext,0);
};

DirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterDirective(this);
	}
};

DirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitDirective(this);
	}
};




TRIGParser.DirectiveContext = DirectiveContext;

TRIGParser.prototype.directive = function() {

    var localctx = new DirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TRIGParser.RULE_directive);
    try {
        this.state = 111;
        switch(this._input.LA(1)) {
        case TRIGParser.T__4:
            this.enterOuterAlt(localctx, 1);
            this.state = 107;
            this.prefixID();
            break;
        case TRIGParser.T__5:
            this.enterOuterAlt(localctx, 2);
            this.state = 108;
            this.base();
            break;
        case TRIGParser.T__7:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            this.sparqlPrefix();
            break;
        case TRIGParser.T__6:
            this.enterOuterAlt(localctx, 4);
            this.state = 110;
            this.sparqlBase();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrefixIDContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_prefixID;
    return this;
}

PrefixIDContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixIDContext.prototype.constructor = PrefixIDContext;

PrefixIDContext.prototype.PNAME_NS = function() {
    return this.getToken(TRIGParser.PNAME_NS, 0);
};

PrefixIDContext.prototype.IRIREF = function() {
    return this.getToken(TRIGParser.IRIREF, 0);
};

PrefixIDContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterPrefixID(this);
	}
};

PrefixIDContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitPrefixID(this);
	}
};




TRIGParser.PrefixIDContext = PrefixIDContext;

TRIGParser.prototype.prefixID = function() {

    var localctx = new PrefixIDContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TRIGParser.RULE_prefixID);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(TRIGParser.T__4);
        this.state = 114;
        this.match(TRIGParser.PNAME_NS);
        this.state = 115;
        this.match(TRIGParser.IRIREF);
        this.state = 116;
        this.match(TRIGParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_base;
    return this;
}

BaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BaseContext.prototype.constructor = BaseContext;

BaseContext.prototype.IRIREF = function() {
    return this.getToken(TRIGParser.IRIREF, 0);
};

BaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterBase(this);
	}
};

BaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitBase(this);
	}
};




TRIGParser.BaseContext = BaseContext;

TRIGParser.prototype.base = function() {

    var localctx = new BaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TRIGParser.RULE_base);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(TRIGParser.T__5);
        this.state = 119;
        this.match(TRIGParser.IRIREF);
        this.state = 120;
        this.match(TRIGParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SparqlBaseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_sparqlBase;
    return this;
}

SparqlBaseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SparqlBaseContext.prototype.constructor = SparqlBaseContext;

SparqlBaseContext.prototype.IRIREF = function() {
    return this.getToken(TRIGParser.IRIREF, 0);
};

SparqlBaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterSparqlBase(this);
	}
};

SparqlBaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitSparqlBase(this);
	}
};




TRIGParser.SparqlBaseContext = SparqlBaseContext;

TRIGParser.prototype.sparqlBase = function() {

    var localctx = new SparqlBaseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, TRIGParser.RULE_sparqlBase);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(TRIGParser.T__6);
        this.state = 123;
        this.match(TRIGParser.IRIREF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SparqlPrefixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_sparqlPrefix;
    return this;
}

SparqlPrefixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SparqlPrefixContext.prototype.constructor = SparqlPrefixContext;

SparqlPrefixContext.prototype.PNAME_NS = function() {
    return this.getToken(TRIGParser.PNAME_NS, 0);
};

SparqlPrefixContext.prototype.IRIREF = function() {
    return this.getToken(TRIGParser.IRIREF, 0);
};

SparqlPrefixContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterSparqlPrefix(this);
	}
};

SparqlPrefixContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitSparqlPrefix(this);
	}
};




TRIGParser.SparqlPrefixContext = SparqlPrefixContext;

TRIGParser.prototype.sparqlPrefix = function() {

    var localctx = new SparqlPrefixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, TRIGParser.RULE_sparqlPrefix);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(TRIGParser.T__7);
        this.state = 126;
        this.match(TRIGParser.PNAME_NS);
        this.state = 127;
        this.match(TRIGParser.IRIREF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TriplesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_triples;
    return this;
}

TriplesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TriplesContext.prototype.constructor = TriplesContext;

TriplesContext.prototype.subject = function() {
    return this.getTypedRuleContext(SubjectContext,0);
};

TriplesContext.prototype.predicateObjectList = function() {
    return this.getTypedRuleContext(PredicateObjectListContext,0);
};

TriplesContext.prototype.blankNodePropertyList = function() {
    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
};

TriplesContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterTriples(this);
	}
};

TriplesContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitTriples(this);
	}
};




TRIGParser.TriplesContext = TriplesContext;

TRIGParser.prototype.triples = function() {

    var localctx = new TriplesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, TRIGParser.RULE_triples);
    var _la = 0; // Token type
    try {
        this.state = 136;
        switch(this._input.LA(1)) {
        case TRIGParser.T__13:
        case TRIGParser.BlankNode:
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.subject();
            this.state = 130;
            this.predicateObjectList();
            break;
        case TRIGParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.blankNodePropertyList();
            this.state = 134;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TRIGParser.T__10) | (1 << TRIGParser.IRIREF) | (1 << TRIGParser.PNAME_NS) | (1 << TRIGParser.PNAME_LN))) !== 0)) {
                this.state = 133;
                this.predicateObjectList();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicateObjectListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_predicateObjectList;
    return this;
}

PredicateObjectListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateObjectListContext.prototype.constructor = PredicateObjectListContext;

PredicateObjectListContext.prototype.verb = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VerbContext);
    } else {
        return this.getTypedRuleContext(VerbContext,i);
    }
};

PredicateObjectListContext.prototype.objectList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectListContext);
    } else {
        return this.getTypedRuleContext(ObjectListContext,i);
    }
};

PredicateObjectListContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterPredicateObjectList(this);
	}
};

PredicateObjectListContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitPredicateObjectList(this);
	}
};




TRIGParser.PredicateObjectListContext = PredicateObjectListContext;

TRIGParser.prototype.predicateObjectList = function() {

    var localctx = new PredicateObjectListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, TRIGParser.RULE_predicateObjectList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.verb();
        this.state = 139;
        this.objectList();
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TRIGParser.T__8) {
            this.state = 140;
            this.match(TRIGParser.T__8);
            this.state = 144;
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TRIGParser.T__10) | (1 << TRIGParser.IRIREF) | (1 << TRIGParser.PNAME_NS) | (1 << TRIGParser.PNAME_LN))) !== 0)) {
                this.state = 141;
                this.verb();
                this.state = 142;
                this.objectList();
            }

            this.state = 150;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_objectList;
    return this;
}

ObjectListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectListContext.prototype.constructor = ObjectListContext;

ObjectListContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

ObjectListContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterObjectList(this);
	}
};

ObjectListContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitObjectList(this);
	}
};




TRIGParser.ObjectListContext = ObjectListContext;

TRIGParser.prototype.objectList = function() {

    var localctx = new ObjectListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, TRIGParser.RULE_objectList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.object();
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TRIGParser.T__9) {
            this.state = 152;
            this.match(TRIGParser.T__9);
            this.state = 153;
            this.object();
            this.state = 158;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VerbContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_verb;
    return this;
}

VerbContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VerbContext.prototype.constructor = VerbContext;

VerbContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

VerbContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterVerb(this);
	}
};

VerbContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitVerb(this);
	}
};




TRIGParser.VerbContext = VerbContext;

TRIGParser.prototype.verb = function() {

    var localctx = new VerbContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, TRIGParser.RULE_verb);
    try {
        this.state = 161;
        switch(this._input.LA(1)) {
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 159;
            this.predicate();
            break;
        case TRIGParser.T__10:
            this.enterOuterAlt(localctx, 2);
            this.state = 160;
            this.match(TRIGParser.T__10);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_subject;
    return this;
}

SubjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubjectContext.prototype.constructor = SubjectContext;

SubjectContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

SubjectContext.prototype.BlankNode = function() {
    return this.getToken(TRIGParser.BlankNode, 0);
};

SubjectContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

SubjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterSubject(this);
	}
};

SubjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitSubject(this);
	}
};




TRIGParser.SubjectContext = SubjectContext;

TRIGParser.prototype.subject = function() {

    var localctx = new SubjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, TRIGParser.RULE_subject);
    try {
        this.state = 166;
        switch(this._input.LA(1)) {
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 163;
            this.iri();
            break;
        case TRIGParser.BlankNode:
            this.enterOuterAlt(localctx, 2);
            this.state = 164;
            this.match(TRIGParser.BlankNode);
            break;
        case TRIGParser.T__13:
            this.enterOuterAlt(localctx, 3);
            this.state = 165;
            this.collection();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitPredicate(this);
	}
};




TRIGParser.PredicateContext = PredicateContext;

TRIGParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, TRIGParser.RULE_predicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.iri();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_object;
    return this;
}

ObjectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

ObjectContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

ObjectContext.prototype.BlankNode = function() {
    return this.getToken(TRIGParser.BlankNode, 0);
};

ObjectContext.prototype.collection = function() {
    return this.getTypedRuleContext(CollectionContext,0);
};

ObjectContext.prototype.blankNodePropertyList = function() {
    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
};

ObjectContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

ObjectContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterObject(this);
	}
};

ObjectContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitObject(this);
	}
};




TRIGParser.ObjectContext = ObjectContext;

TRIGParser.prototype.object = function() {

    var localctx = new ObjectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, TRIGParser.RULE_object);
    try {
        this.state = 175;
        switch(this._input.LA(1)) {
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.enterOuterAlt(localctx, 1);
            this.state = 170;
            this.iri();
            break;
        case TRIGParser.BlankNode:
            this.enterOuterAlt(localctx, 2);
            this.state = 171;
            this.match(TRIGParser.BlankNode);
            break;
        case TRIGParser.T__13:
            this.enterOuterAlt(localctx, 3);
            this.state = 172;
            this.collection();
            break;
        case TRIGParser.T__11:
            this.enterOuterAlt(localctx, 4);
            this.state = 173;
            this.blankNodePropertyList();
            break;
        case TRIGParser.NumericLiteral:
        case TRIGParser.BooleanLiteral:
        case TRIGParser.String:
            this.enterOuterAlt(localctx, 5);
            this.state = 174;
            this.literal();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.rdfLiteral = function() {
    return this.getTypedRuleContext(RdfLiteralContext,0);
};

LiteralContext.prototype.NumericLiteral = function() {
    return this.getToken(TRIGParser.NumericLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(TRIGParser.BooleanLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitLiteral(this);
	}
};




TRIGParser.LiteralContext = LiteralContext;

TRIGParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, TRIGParser.RULE_literal);
    try {
        this.state = 180;
        switch(this._input.LA(1)) {
        case TRIGParser.String:
            this.enterOuterAlt(localctx, 1);
            this.state = 177;
            this.rdfLiteral();
            break;
        case TRIGParser.NumericLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(TRIGParser.NumericLiteral);
            break;
        case TRIGParser.BooleanLiteral:
            this.enterOuterAlt(localctx, 3);
            this.state = 179;
            this.match(TRIGParser.BooleanLiteral);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlankNodePropertyListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_blankNodePropertyList;
    return this;
}

BlankNodePropertyListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlankNodePropertyListContext.prototype.constructor = BlankNodePropertyListContext;

BlankNodePropertyListContext.prototype.predicateObjectList = function() {
    return this.getTypedRuleContext(PredicateObjectListContext,0);
};

BlankNodePropertyListContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterBlankNodePropertyList(this);
	}
};

BlankNodePropertyListContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitBlankNodePropertyList(this);
	}
};




TRIGParser.BlankNodePropertyListContext = BlankNodePropertyListContext;

TRIGParser.prototype.blankNodePropertyList = function() {

    var localctx = new BlankNodePropertyListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, TRIGParser.RULE_blankNodePropertyList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(TRIGParser.T__11);
        this.state = 183;
        this.predicateObjectList();
        this.state = 184;
        this.match(TRIGParser.T__12);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CollectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_collection;
    return this;
}

CollectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CollectionContext.prototype.constructor = CollectionContext;

CollectionContext.prototype.object = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectContext);
    } else {
        return this.getTypedRuleContext(ObjectContext,i);
    }
};

CollectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterCollection(this);
	}
};

CollectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitCollection(this);
	}
};




TRIGParser.CollectionContext = CollectionContext;

TRIGParser.prototype.collection = function() {

    var localctx = new CollectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, TRIGParser.RULE_collection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(TRIGParser.T__13);
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TRIGParser.T__11) | (1 << TRIGParser.T__13) | (1 << TRIGParser.NumericLiteral) | (1 << TRIGParser.BooleanLiteral) | (1 << TRIGParser.String) | (1 << TRIGParser.BlankNode) | (1 << TRIGParser.IRIREF) | (1 << TRIGParser.PNAME_NS) | (1 << TRIGParser.PNAME_LN))) !== 0)) {
            this.state = 187;
            this.object();
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 193;
        this.match(TRIGParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RdfLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_rdfLiteral;
    return this;
}

RdfLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RdfLiteralContext.prototype.constructor = RdfLiteralContext;

RdfLiteralContext.prototype.String = function() {
    return this.getToken(TRIGParser.String, 0);
};

RdfLiteralContext.prototype.LANGTAG = function() {
    return this.getToken(TRIGParser.LANGTAG, 0);
};

RdfLiteralContext.prototype.iri = function() {
    return this.getTypedRuleContext(IriContext,0);
};

RdfLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterRdfLiteral(this);
	}
};

RdfLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitRdfLiteral(this);
	}
};




TRIGParser.RdfLiteralContext = RdfLiteralContext;

TRIGParser.prototype.rdfLiteral = function() {

    var localctx = new RdfLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, TRIGParser.RULE_rdfLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(TRIGParser.String);
        this.state = 199;
        switch (this._input.LA(1)) {
        case TRIGParser.LANGTAG:
        	this.state = 196;
        	this.match(TRIGParser.LANGTAG);
        	break;
        case TRIGParser.T__15:
        	this.state = 197;
        	this.match(TRIGParser.T__15);
        	this.state = 198;
        	this.iri();
        	break;
        case TRIGParser.T__1:
        case TRIGParser.T__3:
        case TRIGParser.T__8:
        case TRIGParser.T__9:
        case TRIGParser.T__11:
        case TRIGParser.T__12:
        case TRIGParser.T__13:
        case TRIGParser.T__14:
        case TRIGParser.NumericLiteral:
        case TRIGParser.BooleanLiteral:
        case TRIGParser.String:
        case TRIGParser.BlankNode:
        case TRIGParser.IRIREF:
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
        	break;
        default:
        	throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IriContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_iri;
    return this;
}

IriContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IriContext.prototype.constructor = IriContext;

IriContext.prototype.IRIREF = function() {
    return this.getToken(TRIGParser.IRIREF, 0);
};

IriContext.prototype.prefixedname = function() {
    return this.getTypedRuleContext(PrefixednameContext,0);
};

IriContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterIri(this);
	}
};

IriContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitIri(this);
	}
};




TRIGParser.IriContext = IriContext;

TRIGParser.prototype.iri = function() {

    var localctx = new IriContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, TRIGParser.RULE_iri);
    try {
        this.state = 203;
        switch(this._input.LA(1)) {
        case TRIGParser.IRIREF:
            this.enterOuterAlt(localctx, 1);
            this.state = 201;
            this.match(TRIGParser.IRIREF);
            break;
        case TRIGParser.PNAME_NS:
        case TRIGParser.PNAME_LN:
            this.enterOuterAlt(localctx, 2);
            this.state = 202;
            this.prefixedname();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrefixednameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TRIGParser.RULE_prefixedname;
    return this;
}

PrefixednameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixednameContext.prototype.constructor = PrefixednameContext;

PrefixednameContext.prototype.PNAME_LN = function() {
    return this.getToken(TRIGParser.PNAME_LN, 0);
};

PrefixednameContext.prototype.PNAME_NS = function() {
    return this.getToken(TRIGParser.PNAME_NS, 0);
};

PrefixednameContext.prototype.enterRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.enterPrefixedname(this);
	}
};

PrefixednameContext.prototype.exitRule = function(listener) {
    if(listener instanceof TRIGListener ) {
        listener.exitPrefixedname(this);
	}
};




TRIGParser.PrefixednameContext = PrefixednameContext;

TRIGParser.prototype.prefixedname = function() {

    var localctx = new PrefixednameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, TRIGParser.RULE_prefixedname);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        _la = this._input.LA(1);
        if(!(_la===TRIGParser.PNAME_NS || _la===TRIGParser.PNAME_LN)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TRIGParser = TRIGParser;

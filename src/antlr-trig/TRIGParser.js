// Generated from TRIG.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TRIGListener from './TRIGListener.js';
const serializedATN = [4,1,50,208,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,1,0,1,0,5,
0,56,8,0,10,0,12,0,59,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,68,8,1,1,2,1,2,
1,2,1,2,1,2,3,2,75,8,2,1,3,1,3,3,3,79,8,3,1,4,1,4,1,5,1,5,3,5,85,8,5,1,5,
1,5,1,6,1,6,1,6,3,6,92,8,6,3,6,94,8,6,1,7,1,7,3,7,98,8,7,1,7,1,7,1,7,1,7,
1,7,1,7,3,7,106,8,7,1,8,1,8,1,8,1,8,3,8,112,8,8,1,9,1,9,1,9,1,9,1,9,1,10,
1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,
13,3,13,135,8,13,3,13,137,8,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,145,8,
14,5,14,147,8,14,10,14,12,14,150,9,14,1,15,1,15,1,15,5,15,155,8,15,10,15,
12,15,158,9,15,1,16,1,16,3,16,162,8,16,1,17,1,17,1,17,3,17,167,8,17,1,18,
1,18,1,19,1,19,1,19,1,19,1,19,3,19,176,8,19,1,20,1,20,1,20,3,20,181,8,20,
1,21,1,21,1,21,1,21,1,22,1,22,5,22,189,8,22,10,22,12,22,192,9,22,1,22,1,
22,1,23,1,23,1,23,1,23,3,23,200,8,23,1,24,1,24,3,24,204,8,24,1,25,1,25,1,
25,0,0,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,0,1,2,0,26,26,28,28,215,0,57,1,0,0,0,2,67,1,0,0,0,4,69,1,0,0,0,
6,78,1,0,0,0,8,80,1,0,0,0,10,82,1,0,0,0,12,88,1,0,0,0,14,105,1,0,0,0,16,
111,1,0,0,0,18,113,1,0,0,0,20,118,1,0,0,0,22,122,1,0,0,0,24,125,1,0,0,0,
26,136,1,0,0,0,28,138,1,0,0,0,30,151,1,0,0,0,32,161,1,0,0,0,34,166,1,0,0,
0,36,168,1,0,0,0,38,175,1,0,0,0,40,180,1,0,0,0,42,182,1,0,0,0,44,186,1,0,
0,0,46,195,1,0,0,0,48,203,1,0,0,0,50,205,1,0,0,0,52,56,3,16,8,0,53,56,3,
2,1,0,54,56,3,8,4,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,59,1,0,
0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,1,1,0,0,0,59,57,1,0,0,0,60,68,3,4,2,0,
61,68,3,10,5,0,62,68,3,14,7,0,63,64,5,1,0,0,64,65,3,6,3,0,65,66,3,10,5,0,
66,68,1,0,0,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,1,0,0,0,67,63,1,0,0,0,68,
3,1,0,0,0,69,74,3,6,3,0,70,75,3,10,5,0,71,72,3,28,14,0,72,73,5,2,0,0,73,
75,1,0,0,0,74,70,1,0,0,0,74,71,1,0,0,0,75,5,1,0,0,0,76,79,3,48,24,0,77,79,
5,22,0,0,78,76,1,0,0,0,78,77,1,0,0,0,79,7,1,0,0,0,80,81,5,17,0,0,81,9,1,
0,0,0,82,84,5,3,0,0,83,85,3,12,6,0,84,83,1,0,0,0,84,85,1,0,0,0,85,86,1,0,
0,0,86,87,5,4,0,0,87,11,1,0,0,0,88,93,3,26,13,0,89,91,5,2,0,0,90,92,3,12,
6,0,91,90,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,89,1,0,0,0,93,94,1,0,0,
0,94,13,1,0,0,0,95,97,3,42,21,0,96,98,3,28,14,0,97,96,1,0,0,0,97,98,1,0,
0,0,98,99,1,0,0,0,99,100,5,2,0,0,100,106,1,0,0,0,101,102,3,44,22,0,102,103,
3,28,14,0,103,104,5,2,0,0,104,106,1,0,0,0,105,95,1,0,0,0,105,101,1,0,0,0,
106,15,1,0,0,0,107,112,3,18,9,0,108,112,3,20,10,0,109,112,3,24,12,0,110,
112,3,22,11,0,111,107,1,0,0,0,111,108,1,0,0,0,111,109,1,0,0,0,111,110,1,
0,0,0,112,17,1,0,0,0,113,114,5,5,0,0,114,115,5,26,0,0,115,116,5,25,0,0,116,
117,5,2,0,0,117,19,1,0,0,0,118,119,5,6,0,0,119,120,5,25,0,0,120,121,5,2,
0,0,121,21,1,0,0,0,122,123,5,7,0,0,123,124,5,25,0,0,124,23,1,0,0,0,125,126,
5,8,0,0,126,127,5,26,0,0,127,128,5,25,0,0,128,25,1,0,0,0,129,130,3,34,17,
0,130,131,3,28,14,0,131,137,1,0,0,0,132,134,3,42,21,0,133,135,3,28,14,0,
134,133,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,129,1,0,0,0,136,132,
1,0,0,0,137,27,1,0,0,0,138,139,3,32,16,0,139,148,3,30,15,0,140,144,5,9,0,
0,141,142,3,32,16,0,142,143,3,30,15,0,143,145,1,0,0,0,144,141,1,0,0,0,144,
145,1,0,0,0,145,147,1,0,0,0,146,140,1,0,0,0,147,150,1,0,0,0,148,146,1,0,
0,0,148,149,1,0,0,0,149,29,1,0,0,0,150,148,1,0,0,0,151,156,3,38,19,0,152,
153,5,10,0,0,153,155,3,38,19,0,154,152,1,0,0,0,155,158,1,0,0,0,156,154,1,
0,0,0,156,157,1,0,0,0,157,31,1,0,0,0,158,156,1,0,0,0,159,162,3,36,18,0,160,
162,5,11,0,0,161,159,1,0,0,0,161,160,1,0,0,0,162,33,1,0,0,0,163,167,3,48,
24,0,164,167,5,22,0,0,165,167,3,44,22,0,166,163,1,0,0,0,166,164,1,0,0,0,
166,165,1,0,0,0,167,35,1,0,0,0,168,169,3,48,24,0,169,37,1,0,0,0,170,176,
3,48,24,0,171,176,5,22,0,0,172,176,3,44,22,0,173,176,3,42,21,0,174,176,3,
40,20,0,175,170,1,0,0,0,175,171,1,0,0,0,175,172,1,0,0,0,175,173,1,0,0,0,
175,174,1,0,0,0,176,39,1,0,0,0,177,181,3,46,23,0,178,181,5,18,0,0,179,181,
5,20,0,0,180,177,1,0,0,0,180,178,1,0,0,0,180,179,1,0,0,0,181,41,1,0,0,0,
182,183,5,12,0,0,183,184,3,28,14,0,184,185,5,13,0,0,185,43,1,0,0,0,186,190,
5,14,0,0,187,189,3,38,19,0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,
0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,193,194,5,15,0,0,194,45,
1,0,0,0,195,199,5,21,0,0,196,200,5,30,0,0,197,198,5,16,0,0,198,200,3,48,
24,0,199,196,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,47,1,0,0,0,201,
204,5,25,0,0,202,204,3,50,25,0,203,201,1,0,0,0,203,202,1,0,0,0,204,49,1,
0,0,0,205,206,7,0,0,0,206,51,1,0,0,0,23,55,57,67,74,78,84,91,93,97,105,111,
134,136,144,148,156,161,166,175,180,190,199,203];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TRIGParser extends antlr4.Parser {

    static grammarFileName = "TRIG.g4";
    static literalNames = [ null, "'GRAPH'", "'.'", "'{'", "'}'", "'@prefix'", 
                            "'@base'", "'BASE'", "'PREFIX'", "';'", "','", 
                            "'a'", "'['", "']'", "'('", "')'", "'^^'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "Macro", "NumericLiteral", "Comment", 
                             "BooleanLiteral", "String", "BlankNode", "WS", 
                             "PN_PREFIX", "IRIREF", "PNAME_NS", "MACRO_VAL", 
                             "PNAME_LN", "BLANK_NODE_LABEL", "LANGTAG", 
                             "INTEGER", "DECIMAL", "DOUBLE", "EXPONENT", 
                             "STRING_LITERAL_LONG_SINGLE_QUOTE", "STRING_LITERAL_LONG_QUOTE", 
                             "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", 
                             "UCHAR", "ECHAR", "ANON_WS", "ANON", "PN_CHARS_BASE", 
                             "PN_CHARS_U", "PN_CHARS", "PN_LOCAL", "PLX", 
                             "PERCENT", "HEX", "PN_LOCAL_ESC" ];
    static ruleNames = [ "trigDoc", "block", "triplesOrGraph", "labelOrSubject", 
                         "macro", "wrappedGraph", "triplesBlock", "triples2", 
                         "directive", "prefixID", "base", "sparqlBase", 
                         "sparqlPrefix", "triples", "predicateObjectList", 
                         "objectList", "verb", "subject", "predicate", "object", 
                         "literal", "blankNodePropertyList", "collection", 
                         "rdfLiteral", "iri", "prefixedname" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TRIGParser.ruleNames;
        this.literalNames = TRIGParser.literalNames;
        this.symbolicNames = TRIGParser.symbolicNames;
    }



	trigDoc() {
	    let localctx = new TrigDocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TRIGParser.RULE_trigDoc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 373445098) !== 0)) {
	            this.state = 55;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	                this.state = 52;
	                this.directive();
	                break;
	            case 1:
	            case 3:
	            case 12:
	            case 14:
	            case 22:
	            case 25:
	            case 26:
	            case 28:
	                this.state = 53;
	                this.block();
	                break;
	            case 17:
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
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TRIGParser.RULE_block);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	        case 25:
	        case 26:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.triplesOrGraph();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.wrappedGraph();
	            break;
	        case 12:
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.triples2();
	            break;
	        case 1:
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
	}



	triplesOrGraph() {
	    let localctx = new TriplesOrGraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TRIGParser.RULE_triplesOrGraph);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.labelOrSubject();
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 70;
	            this.wrappedGraph();
	            break;
	        case 11:
	        case 25:
	        case 26:
	        case 28:
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
	}



	labelOrSubject() {
	    let localctx = new LabelOrSubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TRIGParser.RULE_labelOrSubject);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	        case 26:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.iri();
	            break;
	        case 22:
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
	}



	macro() {
	    let localctx = new MacroContext(this, this._ctx, this.state);
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
	}



	wrappedGraph() {
	    let localctx = new WrappedGraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TRIGParser.RULE_wrappedGraph);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(TRIGParser.T__2);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 373313536) !== 0)) {
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
	}



	triplesBlock() {
	    let localctx = new TriplesBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TRIGParser.RULE_triplesBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.triples();
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 89;
	            this.match(TRIGParser.T__1);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 373313536) !== 0)) {
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
	}



	triples2() {
	    let localctx = new Triples2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TRIGParser.RULE_triples2);
	    var _la = 0;
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.blankNodePropertyList();
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 369100800) !== 0)) {
	                this.state = 96;
	                this.predicateObjectList();
	            }

	            this.state = 99;
	            this.match(TRIGParser.T__1);
	            break;
	        case 14:
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
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TRIGParser.RULE_directive);
	    try {
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 107;
	            this.prefixID();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.base();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 109;
	            this.sparqlPrefix();
	            break;
	        case 7:
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
	}



	prefixID() {
	    let localctx = new PrefixIDContext(this, this._ctx, this.state);
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
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
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
	}



	sparqlBase() {
	    let localctx = new SparqlBaseContext(this, this._ctx, this.state);
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
	}



	sparqlPrefix() {
	    let localctx = new SparqlPrefixContext(this, this._ctx, this.state);
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
	}



	triples() {
	    let localctx = new TriplesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TRIGParser.RULE_triples);
	    var _la = 0;
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 22:
	        case 25:
	        case 26:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.subject();
	            this.state = 130;
	            this.predicateObjectList();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.blankNodePropertyList();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 369100800) !== 0)) {
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
	}



	predicateObjectList() {
	    let localctx = new PredicateObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TRIGParser.RULE_predicateObjectList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.verb();
	        this.state = 139;
	        this.objectList();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 140;
	            this.match(TRIGParser.T__8);
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 369100800) !== 0)) {
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
	}



	objectList() {
	    let localctx = new ObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TRIGParser.RULE_objectList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.object();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
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
	}



	verb() {
	    let localctx = new VerbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TRIGParser.RULE_verb);
	    try {
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	        case 26:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.predicate();
	            break;
	        case 11:
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
	}



	subject() {
	    let localctx = new SubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TRIGParser.RULE_subject);
	    try {
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	        case 26:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.iri();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.match(TRIGParser.BlankNode);
	            break;
	        case 14:
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
	}



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
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
	}



	object() {
	    let localctx = new ObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TRIGParser.RULE_object);
	    try {
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	        case 26:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 170;
	            this.iri();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(TRIGParser.BlankNode);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 172;
	            this.collection();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 173;
	            this.blankNodePropertyList();
	            break;
	        case 18:
	        case 20:
	        case 21:
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
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TRIGParser.RULE_literal);
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            this.rdfLiteral();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(TRIGParser.NumericLiteral);
	            break;
	        case 20:
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
	}



	blankNodePropertyList() {
	    let localctx = new BlankNodePropertyListContext(this, this._ctx, this.state);
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
	}



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, TRIGParser.RULE_collection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(TRIGParser.T__13);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 376721408) !== 0)) {
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
	}



	rdfLiteral() {
	    let localctx = new RdfLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, TRIGParser.RULE_rdfLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(TRIGParser.String);
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 30:
	        	this.state = 196;
	        	this.match(TRIGParser.LANGTAG);
	        	break;
	        case 16:
	        	this.state = 197;
	        	this.match(TRIGParser.T__15);
	        	this.state = 198;
	        	this.iri();
	        	break;
	        case 2:
	        case 4:
	        case 9:
	        case 10:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 18:
	        case 20:
	        case 21:
	        case 22:
	        case 25:
	        case 26:
	        case 28:
	        	break;
	        default:
	        	break;
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
	}



	iri() {
	    let localctx = new IriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, TRIGParser.RULE_iri);
	    try {
	        this.state = 203;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.match(TRIGParser.IRIREF);
	            break;
	        case 26:
	        case 28:
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
	}



	prefixedname() {
	    let localctx = new PrefixednameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, TRIGParser.RULE_prefixedname);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
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
	}


}

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

class TrigDocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_trigDoc;
    }

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	macro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MacroContext);
	    } else {
	        return this.getTypedRuleContext(MacroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterTrigDoc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitTrigDoc(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_block;
    }

	triplesOrGraph() {
	    return this.getTypedRuleContext(TriplesOrGraphContext,0);
	};

	wrappedGraph() {
	    return this.getTypedRuleContext(WrappedGraphContext,0);
	};

	triples2() {
	    return this.getTypedRuleContext(Triples2Context,0);
	};

	labelOrSubject() {
	    return this.getTypedRuleContext(LabelOrSubjectContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitBlock(this);
		}
	}


}



class TriplesOrGraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_triplesOrGraph;
    }

	labelOrSubject() {
	    return this.getTypedRuleContext(LabelOrSubjectContext,0);
	};

	wrappedGraph() {
	    return this.getTypedRuleContext(WrappedGraphContext,0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterTriplesOrGraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitTriplesOrGraph(this);
		}
	}


}



class LabelOrSubjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_labelOrSubject;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(TRIGParser.BlankNode, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterLabelOrSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitLabelOrSubject(this);
		}
	}


}



class MacroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_macro;
    }

	Macro() {
	    return this.getToken(TRIGParser.Macro, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterMacro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitMacro(this);
		}
	}


}



class WrappedGraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_wrappedGraph;
    }

	triplesBlock() {
	    return this.getTypedRuleContext(TriplesBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterWrappedGraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitWrappedGraph(this);
		}
	}


}



class TriplesBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_triplesBlock;
    }

	triples() {
	    return this.getTypedRuleContext(TriplesContext,0);
	};

	triplesBlock() {
	    return this.getTypedRuleContext(TriplesBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterTriplesBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitTriplesBlock(this);
		}
	}


}



class Triples2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_triples2;
    }

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterTriples2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitTriples2(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_directive;
    }

	prefixID() {
	    return this.getTypedRuleContext(PrefixIDContext,0);
	};

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	sparqlPrefix() {
	    return this.getTypedRuleContext(SparqlPrefixContext,0);
	};

	sparqlBase() {
	    return this.getTypedRuleContext(SparqlBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitDirective(this);
		}
	}


}



class PrefixIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_prefixID;
    }

	PNAME_NS() {
	    return this.getToken(TRIGParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(TRIGParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterPrefixID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitPrefixID(this);
		}
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_base;
    }

	IRIREF() {
	    return this.getToken(TRIGParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitBase(this);
		}
	}


}



class SparqlBaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_sparqlBase;
    }

	IRIREF() {
	    return this.getToken(TRIGParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterSparqlBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitSparqlBase(this);
		}
	}


}



class SparqlPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_sparqlPrefix;
    }

	PNAME_NS() {
	    return this.getToken(TRIGParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(TRIGParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterSparqlPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitSparqlPrefix(this);
		}
	}


}



class TriplesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_triples;
    }

	subject() {
	    return this.getTypedRuleContext(SubjectContext,0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterTriples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitTriples(this);
		}
	}


}



class PredicateObjectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_predicateObjectList;
    }

	verb = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VerbContext);
	    } else {
	        return this.getTypedRuleContext(VerbContext,i);
	    }
	};

	objectList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectListContext);
	    } else {
	        return this.getTypedRuleContext(ObjectListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterPredicateObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitPredicateObjectList(this);
		}
	}


}



class ObjectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_objectList;
    }

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitObjectList(this);
		}
	}


}



class VerbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_verb;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterVerb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitVerb(this);
		}
	}


}



class SubjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_subject;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(TRIGParser.BlankNode, 0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitSubject(this);
		}
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_predicate;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitPredicate(this);
		}
	}


}



class ObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_object;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(TRIGParser.BlankNode, 0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitObject(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_literal;
    }

	rdfLiteral() {
	    return this.getTypedRuleContext(RdfLiteralContext,0);
	};

	NumericLiteral() {
	    return this.getToken(TRIGParser.NumericLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(TRIGParser.BooleanLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class BlankNodePropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_blankNodePropertyList;
    }

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterBlankNodePropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitBlankNodePropertyList(this);
		}
	}


}



class CollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_collection;
    }

	object = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectContext);
	    } else {
	        return this.getTypedRuleContext(ObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitCollection(this);
		}
	}


}



class RdfLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_rdfLiteral;
    }

	String() {
	    return this.getToken(TRIGParser.String, 0);
	};

	LANGTAG() {
	    return this.getToken(TRIGParser.LANGTAG, 0);
	};

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterRdfLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitRdfLiteral(this);
		}
	}


}



class IriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_iri;
    }

	IRIREF() {
	    return this.getToken(TRIGParser.IRIREF, 0);
	};

	prefixedname() {
	    return this.getTypedRuleContext(PrefixednameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterIri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitIri(this);
		}
	}


}



class PrefixednameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TRIGParser.RULE_prefixedname;
    }

	PNAME_LN() {
	    return this.getToken(TRIGParser.PNAME_LN, 0);
	};

	PNAME_NS() {
	    return this.getToken(TRIGParser.PNAME_NS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.enterPrefixedname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TRIGListener ) {
	        listener.exitPrefixedname(this);
		}
	}


}




TRIGParser.TrigDocContext = TrigDocContext; 
TRIGParser.BlockContext = BlockContext; 
TRIGParser.TriplesOrGraphContext = TriplesOrGraphContext; 
TRIGParser.LabelOrSubjectContext = LabelOrSubjectContext; 
TRIGParser.MacroContext = MacroContext; 
TRIGParser.WrappedGraphContext = WrappedGraphContext; 
TRIGParser.TriplesBlockContext = TriplesBlockContext; 
TRIGParser.Triples2Context = Triples2Context; 
TRIGParser.DirectiveContext = DirectiveContext; 
TRIGParser.PrefixIDContext = PrefixIDContext; 
TRIGParser.BaseContext = BaseContext; 
TRIGParser.SparqlBaseContext = SparqlBaseContext; 
TRIGParser.SparqlPrefixContext = SparqlPrefixContext; 
TRIGParser.TriplesContext = TriplesContext; 
TRIGParser.PredicateObjectListContext = PredicateObjectListContext; 
TRIGParser.ObjectListContext = ObjectListContext; 
TRIGParser.VerbContext = VerbContext; 
TRIGParser.SubjectContext = SubjectContext; 
TRIGParser.PredicateContext = PredicateContext; 
TRIGParser.ObjectContext = ObjectContext; 
TRIGParser.LiteralContext = LiteralContext; 
TRIGParser.BlankNodePropertyListContext = BlankNodePropertyListContext; 
TRIGParser.CollectionContext = CollectionContext; 
TRIGParser.RdfLiteralContext = RdfLiteralContext; 
TRIGParser.IriContext = IriContext; 
TRIGParser.PrefixednameContext = PrefixednameContext; 

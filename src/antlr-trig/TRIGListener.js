// Generated from TRIG.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TRIGParser.
function TRIGListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TRIGListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TRIGListener.prototype.constructor = TRIGListener;

// Enter a parse tree produced by TRIGParser#trigDoc.
TRIGListener.prototype.enterTrigDoc = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#trigDoc.
TRIGListener.prototype.exitTrigDoc = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#block.
TRIGListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#block.
TRIGListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#triplesOrGraph.
TRIGListener.prototype.enterTriplesOrGraph = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#triplesOrGraph.
TRIGListener.prototype.exitTriplesOrGraph = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#labelOrSubject.
TRIGListener.prototype.enterLabelOrSubject = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#labelOrSubject.
TRIGListener.prototype.exitLabelOrSubject = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#macro.
TRIGListener.prototype.enterMacro = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#macro.
TRIGListener.prototype.exitMacro = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#wrappedGraph.
TRIGListener.prototype.enterWrappedGraph = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#wrappedGraph.
TRIGListener.prototype.exitWrappedGraph = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#triplesBlock.
TRIGListener.prototype.enterTriplesBlock = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#triplesBlock.
TRIGListener.prototype.exitTriplesBlock = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#triples2.
TRIGListener.prototype.enterTriples2 = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#triples2.
TRIGListener.prototype.exitTriples2 = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#directive.
TRIGListener.prototype.enterDirective = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#directive.
TRIGListener.prototype.exitDirective = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#prefixID.
TRIGListener.prototype.enterPrefixID = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#prefixID.
TRIGListener.prototype.exitPrefixID = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#base.
TRIGListener.prototype.enterBase = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#base.
TRIGListener.prototype.exitBase = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#sparqlBase.
TRIGListener.prototype.enterSparqlBase = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#sparqlBase.
TRIGListener.prototype.exitSparqlBase = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#sparqlPrefix.
TRIGListener.prototype.enterSparqlPrefix = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#sparqlPrefix.
TRIGListener.prototype.exitSparqlPrefix = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#triples.
TRIGListener.prototype.enterTriples = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#triples.
TRIGListener.prototype.exitTriples = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#predicateObjectList.
TRIGListener.prototype.enterPredicateObjectList = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#predicateObjectList.
TRIGListener.prototype.exitPredicateObjectList = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#objectList.
TRIGListener.prototype.enterObjectList = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#objectList.
TRIGListener.prototype.exitObjectList = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#verb.
TRIGListener.prototype.enterVerb = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#verb.
TRIGListener.prototype.exitVerb = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#subject.
TRIGListener.prototype.enterSubject = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#subject.
TRIGListener.prototype.exitSubject = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#predicate.
TRIGListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#predicate.
TRIGListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#object.
TRIGListener.prototype.enterObject = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#object.
TRIGListener.prototype.exitObject = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#literal.
TRIGListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#literal.
TRIGListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#blankNodePropertyList.
TRIGListener.prototype.enterBlankNodePropertyList = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#blankNodePropertyList.
TRIGListener.prototype.exitBlankNodePropertyList = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#collection.
TRIGListener.prototype.enterCollection = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#collection.
TRIGListener.prototype.exitCollection = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#rdfLiteral.
TRIGListener.prototype.enterRdfLiteral = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#rdfLiteral.
TRIGListener.prototype.exitRdfLiteral = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#iri.
TRIGListener.prototype.enterIri = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#iri.
TRIGListener.prototype.exitIri = function(ctx) {
};


// Enter a parse tree produced by TRIGParser#prefixedname.
TRIGListener.prototype.enterPrefixedname = function(ctx) {
};

// Exit a parse tree produced by TRIGParser#prefixedname.
TRIGListener.prototype.exitPrefixedname = function(ctx) {
};



exports.TRIGListener = TRIGListener;
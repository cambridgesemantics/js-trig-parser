grammar TRIG;


trigDoc
   : ( directive
   | block
   | macro)*
   ;

block
  : triplesOrGraph | wrappedGraph | triples2 | 'GRAPH' labelOrSubject wrappedGraph ;

triplesOrGraph
  : labelOrSubject (wrappedGraph | predicateObjectList '.') ;

labelOrSubject
    : iri | BlankNode ;




macro
   : Macro ;



wrappedGraph
   : '{' triplesBlock? '}' ;

triplesBlock
   :  triples ('.' triplesBlock?)? ;

triples2
  : blankNodePropertyList predicateObjectList? '.' | collection predicateObjectList '.' ;

directive
   : prefixID
   | base
   | sparqlPrefix
   | sparqlBase
   ;

Macro
   : '#Mode:' MACRO_VAL ;
prefixID
   : '@prefix' PNAME_NS IRIREF '.'
   ;

base
   : '@base' IRIREF '.'
   ;

sparqlBase
   : 'BASE' IRIREF
   ;

sparqlPrefix
   : 'PREFIX' PNAME_NS IRIREF
   ;

triples
   : subject predicateObjectList
   | blankNodePropertyList predicateObjectList?
   ;

predicateObjectList
   : verb objectList (';' (verb objectList)?)*
   ;

objectList
   : object (',' object)*
   ;

verb
   : predicate
   | 'a'
   ;

subject
   : iri
   | BlankNode
   | collection
   ;

predicate
   : iri
   ;

object
   : iri
   | BlankNode
   | collection
   | blankNodePropertyList
   | literal
   ;

literal
   : rdfLiteral
   | NumericLiteral
   | BooleanLiteral
   ;

blankNodePropertyList
   : '[' predicateObjectList ']'
   ;

collection
   : '(' object* ')'
   ;


NumericLiteral
   : INTEGER | DECIMAL | DOUBLE
   ;

rdfLiteral
   : String (LANGTAG | '^^' iri)?
   ;



Comment
   : '#' ~[\r\n]* -> channel(HIDDEN) ;


BooleanLiteral
   : 'true' | 'false'
   ;


String
   : LONG_STRING | STRING_LITERAL_QUOTE | STRING_LITERAL_SINGLE_QUOTE
   ;

iri
   : IRIREF
   | prefixedname
   ;


BlankNode
   : BLANK_NODE_LABEL | ANON
   ;


WS
   : ([\t\r\n\u000C] | ' ') + -> skip
   ;

// LEXER

PN_PREFIX
   : PN_CHARS_BASE ((PN_CHARS | '.')* PN_CHARS)?
   ;

//IRIREF            :   '<' (~(['\u0000'..'\u0020']|'<'|'>'|'"'|'{'|'}'|'|'|'^'|'`'|'\\') | UCHAR)* '>'; /* \u00=NULL #01-\u1F=control codes \u20=space */

IRIREF
   : '<' (PN_CHARS | '(' | ')' | '.' | ':' | '/' | '\\' | '#' | '@' | '%' | '&' | UCHAR)* '>'
   ;


PNAME_NS
   : PN_PREFIX? ':'
   ;


prefixedname
   : PNAME_LN | PNAME_NS
   ;

MACRO_VAL
   : 'REPLACE' | 'ADD' | 'REMOVE' | 'INITIAL_ONLY';

PNAME_LN
   : PNAME_NS PN_LOCAL
   ;


BLANK_NODE_LABEL
   : '_:' (PN_CHARS_U | [0-9]) ((PN_CHARS | '.')* PN_CHARS)?
   ;


LANGTAG
   : '@' [a-zA-Z] + ('-' [a-zA-Z0-9] +)*
   ;


INTEGER
   : [+-]? [0-9] +
   ;


DECIMAL
   : [+-]? [0-9]* '.' [0-9] +
   ;


DOUBLE
   : [+-]? ([0-9] + '.' [0-9]* EXPONENT | '.' [0-9] + EXPONENT | [0-9] + EXPONENT)
   ;


EXPONENT
   : [eE] [+-]? [0-9] +
   ;


STRING_LITERAL_LONG_SINGLE_QUOTE
   : '\'\'\'' (('\'' | '\'\'')? ([^'\\] | ECHAR | UCHAR | '"'))* '\'\'\''
   ;


STRING_LITERAL_LONG_QUOTE
   : '"""' (('"' | '""')? (~ ["\\] | ECHAR | UCHAR | '\''))* '"""'
   ;


STRING_LITERAL_QUOTE
   : '"' (~ ['"''\\''\r''\n'] | '\'' | '\\"')* '"'
   ;


STRING_LITERAL_SINGLE_QUOTE
   : '\'' (~ ['\u0027''\u005C''\u000A''\u000D'] | ECHAR | UCHAR | '"')* '\''
   ;

fragment LONG_STRING
 : '\'\'\'' LONG_STRING_ITEM*? '\'\'\''
 | '"""' LONG_STRING_ITEM*? '"""'
 ;

/// longstringitem  ::=  longstringchar | stringescapeseq
fragment LONG_STRING_ITEM
 : LONG_STRING_CHAR
 | STRING_ESCAPE_SEQ
 ;

/// longstringchar  ::=  <any source character except "\">
fragment LONG_STRING_CHAR
 : ~'\\'
 ;

/// stringescapeseq ::=  "\" <any source character>
fragment STRING_ESCAPE_SEQ
 : '\\' .
 ;

UCHAR
   : '\\u' HEX HEX HEX HEX | '\\U' HEX HEX HEX HEX HEX HEX HEX HEX
   ;


ECHAR
   : '\\' [tbnrf"\'\\]
   ;


ANON_WS
   : ' ' | '\t' | '\r' | '\n'
   ;


ANON
   : '[' ANON_WS* ']'
   ;




PN_CHARS_BASE
   : 'A' .. 'Z' | 'a' .. 'z' | '\u00C0' .. '\u00D6' | '\u00D8' .. '\u00F6' | '\u00F8' .. '\u02FF' | '\u0370' .. '\u037D' | '\u037F' .. '\u1FFF' | '\u200C' .. '\u200D' | '\u2070' .. '\u218F' | '\u2C00' .. '\u2FEF' | '\u3001' .. '\uD7FF' | '\uF900' .. '\uFDCF' | '\uFDF0' .. '\uFFFD'
   ;


PN_CHARS_U
   : PN_CHARS_BASE | '_'
   ;


PN_CHARS
   : PN_CHARS_U | '-' | [0-9] | '\u00B7' | [\u0300-\u036F] | [\u203F-\u2040]
   ;


PN_LOCAL
   : (PN_CHARS_U | ':' | [0-9] | PLX) ((PN_CHARS | '.' | ':' | PLX)* (PN_CHARS | ':' | PLX))?
   ;


PLX
   : PERCENT | PN_LOCAL_ESC
   ;


PERCENT
   : '%' HEX HEX
   ;


HEX
   : [0-9] | [A-F] | [a-f]
   ;


PN_LOCAL_ESC
   : '\\' ('_' | '~' | '.' | '-' | '!' | '$' | '&' | '\'' | '(' | ')' | '*' | '+' | ',' | ';' | '=' | '/' | '?' | '#' | '@' | '%')
   ;

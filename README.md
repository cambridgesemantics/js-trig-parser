# js-trig-parser
JS antlr4 based trig to graph/statements.



##Install

```
npm i js-trig-parser
```

umd module included built with webpack
## Usage
##### Loaders have the following api's:
```
loader.fromFile(filename) //nodejs env only
loader.fromString(trigStr)
```
[Graph Loader](#graph-loader)

[Base Loader](#base-loader)

[Syntax Tree Loader](#syntax-tree-loader)




#### Graph Loader
Outputs the following trig document
##### Trig Document
```
  {
	prefixes: {prefixKey : prefix},
	graphs: [graph],
	macros: [macroResult],
	errors: [errorResult],
	allGraphs: this.graphs + [defaultGraph],
	defaultGraph: { graph },
	getStatements(): [triple]
  }
```
##### Graph

```
{
	iri: String,
	uri: String,
	pos: {line: int, column: int},
	_graph: { ExpandedParseObject },
	getStatements(): [triple]
	
}	
```

##### Prefixes

```
{
	name: String,
	value: String,
	pos: {line: int, column: int}
}
```
##### Expanded Parse Object
This is a trimmed down and flattened version of the __ANTLR__ parse token



```
Expressions(Rules)
{
	pos: {line: int, column: int},
	start: {},
	stop: {},
	type: String, //antlr rule name
	token: String,
	children: [ExpandedParseObject]
	
}


Terminals(Symbols/Literals)
{
	pos: {line: int, column: int},
	start: {},
	stop: {},
	type: String, //antlr rule name
	token: String
	
	
}
```

##### Statement
```
{
	subject: String,//prefix expanded form/URI
	predicate: String,
	object: Value(String | Number | boolean),
	
	iriSubject: String, //original form found in the document
	iriPredicate: String,
	iriObject: String,
	
	_s: { ExpandedParseObject },
	_p: { ExpandedParseObject },
	_o: { ExpandedParseObject },
	_g: { ExpandedParseObject },
	graph: { graph }
}
```


##### Literals


###### IRIed literals
XSD literals are converted to their corresponding types when possible.

Special XSD integer types(i.e. non-negative postitive) are bit validated.

Non-standard IRIed literals("some literal"^^some:iri) are treated like strings
but the original parser tokens can be retrieved by looking at the _o object on the statement.
Planning to clean this up/simply this in a later version.

###### DateTime literals
DateTime/Date parsed by moment format strings:

	DateTime: 'YYYY-MM-DD HH:mm:ss Z'
	Date: 'YYYY-MM-DDZ'

###### Numeric Values

xsd:decimal or decimal literal are converted using parseFloat.

Anything else is converted to Number using parseInt.


#### Keywords Not Currently Supported by GraphLoader
	@base
	PREFIX/BASE
	GRAPH
	EXPONENT


#### Base Loader

```
{
	expressions: [ExpandedParseObjects],
	terminals: [ExpandedParseObjects],
	errors: [ParseObjects]
	
}
```
#### Syntax Tree Loader
Raw result of running the ANTLR4 parser using the trigDoc rule on the provided trig file.

```
{
	tree: ANTLR parser trig doc/root rule,
	parser: antlrParser
}
```


##Tests

For the profiler to work you need to install devutils(chromium nodejs debugging)
```
npm test
npm profile
```




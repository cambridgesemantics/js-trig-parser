var assert = require('assert');
var expect = require('chai').expect;
//var should = require('chai').should();
var path = require('path');

var containsUuid = new RegExp('.*?-.*?-4.*-.*?-.*?$');

var routines = require('./test-routines.js');
var tryLoadTrig = routines.tryLoadTrig;
var tryParseTrig = routines.tryParseTrig;
var tryDefaultLoad = routines.tryDefaultLoad;
//var tryLoadTrigDebug = routines.tryLoadTrigDebug;
var getTestFiles = routines.getTestFiles;
function testFileParsing(fn) {
  it('Parses without error: ' + fn, function(done) {
    tryParseTrig(fn, function(err, tree) {
      assert(!err);
      assert(tree);
      done();
    });

  });
}

function testGraphGen(fn) {
  it('Generates without errors: ' + fn, function(done) {
    tryLoadTrig(fn, function(err, doc) {
      if (err) {
        err.forEach ? err.forEach(console.error) : console.error(err);
      }
      assert(!err);
      expect(doc.errors.length).equals(0);
      done();
    });
  });
}

function testValidation(fn){
  it('Validates without errors: ' + fn, function(done) {
    tryDefaultLoad(fn, function(err, tree) {
      assert(!err);
      assert(tree);
      done();
    });
  })
}




describe('Trig File Tests - ', function() {
  describe('Trig File Parsing - ', function() {
    describe('W3 spec examples - ', function() {
      getTestFiles('w3-ex').forEach(testFileParsing);
    });

    describe('CSI examples - ', function() {
      getTestFiles('csi-ex').forEach(testFileParsing);
    });

    describe('Validation examples - ', function() {
      //getTestFiles('validation').forEach(testValidation);
      var fn = path.resolve('validation', 'broken-directive.trig');
      it('Handles broken directives', function(done){
        tryDefaultLoad(fn, function(err, doc) {
          //console.log(doc.syntaxErrors);
          done();
        });
      });

      var fn = path.resolve('validation', 'broken-iri.trig');
      it('Handles broken iris', function(done){
        tryDefaultLoad(fn, function(err, doc) {
          //console.log(doc.syntaxErrors);
          done();
        });
      });

      var fn = path.resolve('validation', 'prefix-not-found.trig');
      it('handles prefix not found', function(done){
        tryLoadTrig(fn, function(err, doc) {
          expect(doc.analysisErrors.length).equals(3);
          done();
        });
      });

      it('Handles broken graphs', function(done){
        var fn = path.resolve('validation', 'broken-graph.trig');
        tryLoadTrig(fn, function(err, doc) {
          expect(doc.errors.length).equals(2)
          expect(doc.syntaxErrors.length).equals(5)
          expect(doc.analysisErrors.length).equals(0)
          done();
        });
      });

      it("Handles broken prefixes (validation)", function(done){
        var fn = path.resolve('validation', 'broken-prefix.trig');
        tryLoadTrig(fn, function(err, doc) {
          console.log(doc.errors);
          console.log(doc.syntaxErrors);
          console.log(doc.analysisErrors);
          done();
        });
      })

      it("warns duplicate prefixes", function(done){
        var fn = path.resolve('validation', 'duplicate-prefix.trig');
        tryLoadTrig(fn, function(err, doc) {
          console.log(doc.analysisErrors);
          done();
        });
      })
      it("warns unused prefix", function(done){
        var fn = path.resolve('validation', 'unused-prefix.trig');
        tryLoadTrig(fn, function(err, doc) {
          expect(doc.analysisErrors.length).equals(1)
          done()
        });
      })

      it("doesnt warn unused prefix", function(done){
        var fn2 = path.resolve('validation', 'unused-prefix2.trig');
        tryLoadTrig(fn2, function(err, doc2) {
          console.log(arguments)
          expect(doc2.analysisErrors.length).equals(0)
          done();
        });

      })



    });
  });

  describe('Trig Document Representation', function() {

    describe('Generates graph/statement structures from w3c/csi', function() {
      describe('W3 spec examples', function() {
        getTestFiles('w3-ex').forEach(testGraphGen);
      });

      describe('CSI examples - ', function() {
        getTestFiles('csi-ex').forEach(testGraphGen);
      });
    });

    describe('Other tests - ', function() {
      it('Handles blank nodes: ', function(done) {
        var fn = path.resolve('other', 'blank-node.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          expect(containsUuid.test(doc.graphs[0].getStatements()[0].subject)).equals(true);
          done();
        });
      });

      it("Handles Anzo macros", function(done) {
        var fn = path.resolve('other', 'macros.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          expect(doc.macros[0].token).equals('#Mode:REPLACE');
          expect(doc.macros[1].token).equals('#Mode:ADD');
          expect(doc.macros[2].token).equals('#Mode:REMOVE');
          expect(doc.macros[3].token).equals('#Mode:INITIAL_ONLY');
          done();
        });
      });

      it('Handles broken prefixes(parse)', function(done) {
        //var path = path.resolve('other', 'blank-node.trig');
        var fn = path.resolve('other', 'broken-prefix.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          expect(doc.prefixes.get('rdf:').name).equals('rdf:');
          expect(doc.prefixes.get('rdf:').token).equals('http://www.w3.org/1999/02/22-rdf-syntax-ns');
          done();
        });
      });

      it('Properly handles multiline strings', function(done) {
        var fn = path.resolve('other', 'multiline-string.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          var stmts = doc.getStatements();
          expect(stmts[0].object).equals("test\nstr\n");
          expect(stmts[1].object).equals("test\nstr\n");
          done();
        });
      });

      it('Handles string literals', function(done) {
        var fn = path.resolve('other', 'strings.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          var stmts = doc.getStatements();
          expect(stmts[0].object).equals("teststr");
          expect(stmts[1].object).equals("teststr");
          done();
        });
      });

      it('Properly adds anonymous triples to the default graph', function(done) {
        var fn = path.resolve('other', 'default-graph.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          expect(doc.defaultGraph).to.exist;
          expect(doc.getStatements()).to.have.length(1);
          expect(doc.allGraphs).to.have.length(1);
          done();
        });
      });
      it.only("Properly creates graph values on statements", function(done){
        var fn = path.resolve('other', 'strings.trig');
          tryLoadTrig(fn, function(err, doc) {
            if (err) throw err;
            var stmts = doc.getStatements();
            expect(stmts[0].graph).equals("http://g.com");
            expect(stmts[1].graph).equals("http://g.com");
            done();
          });
      }); 
      it('Properly expands nested triples blocks', function(done) {
        var fn = path.resolve('other', 'nested-triples-expand.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          expect(doc.graphs[0].getStatements()).to.have.length(3);
          done();
        });
      });

      it('Properly expands IRI prefixes on graph', function(done) {
        var fn = path.resolve('other', 'graph-iri-expand.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          expect(doc.graphs).to.have.length(1);
          //tests iri correctness

          expect(doc.graphs[0].iri).equals('rdf:graph');
          expect(doc.graphs[0].uri).equals('http://www.w3.org/1999/02/22-rdf-syntax-ns/graph');
          done();
        });
      });

      it('Properly expands IRI prefixes on statement spo', function(done) {
        var fn = path.resolve('other', 'spo-iri-expand.trig');
        tryLoadTrig(fn, function(err, doc) {
          if (err) throw err;
          var stmt = doc.getStatements()[0];
          expect(stmt.subject).equals('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
          expect(stmt.predicate).equals('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
          expect(stmt.object).equals('http://www.w3.org/1999/02/22-rdf-syntax-ns#type');
          done();
        });
      });

      it('Handles xsd:anyURI', function(done) {
        tryLoadTrig(path.resolve('other', 'any-uri.trig'), function(err, doc) {
          if (err) throw err;
          var stmts = doc.getStatements();
          expect(stmts[0].object).equals('http://flixray.com/movie_reviews/No-Country-for-Old-Men.html');
          done();
        });
      });
      it('Handles invalid xsd:anyURI', function(done) {
        tryLoadTrig(path.resolve('other', 'any-uri-invalid.trig'), function(err) {
          expect(err).to.exist;
          done();
        });
      });

      it('Handles rdf collections', function(done) {
        tryLoadTrig(path.resolve('other', 'rdf-collections.trig'), function(err, doc) {
          if (err) throw err;
          expect(doc.getStatements()[0].object).equals('http://example.org/foo/a');
          expect(doc.getStatements()[0].predicate).equals('http://example.org/foo/predicate');
          expect(doc.getStatements()[0].subject).equals('http://example.org/foo/subject');
          expect(doc.getStatements()[1].object).equals('http://example.org/foo/b');
          expect(doc.getStatements()[2].object).equals('http://example.org/foo/c');
          done();


        });
      });



      it('Handles lang tags', function(done) {
        tryLoadTrig(path.resolve('other', 'lang-tags.trig'), function(err, doc) {
          if (err) throw (err);
          expect(doc.getStatements()[1].object).equals("Человек-паук");
          expect(doc.getStatements()[1]._o._source.children[1].token === '@ru');
          done();
        });


      });


      it('Handles boolean literals', function(done) {
        tryLoadTrig(path.resolve('other', 'bool-lit.trig'), function(err, doc) {
          if (err) throw err;
          var stmts = doc.getStatements();
          expect(stmts[0].object).equals(true);
          expect(stmts[1].object).equals(false);
          expect(stmts[2].object).equals(true);
          expect(stmts[3].object).equals(false)
          done();
        });
      });

      it('Handles numeric literals', function(done) {
        tryLoadTrig(path.resolve('other', 'numeric-lit.trig'), function(err, doc) {
          if (err) throw err;

          //TODO: Add checks for nonNegativeInteger etc...
          expect(doc.getStatements()[0].object).equals(1);
          expect(doc.getStatements()[1].object).equals(9007199254740990);
          expect(doc.getStatements()[2].object).equals(1.1);
          expect(doc.getStatements()[3].object).equals(9007199254740992);
          done();
        });

      });
      it('Handles blank nodes', function(done) {
        tryLoadTrig(path.resolve('other', 'blank-nodes.trig'), function(err, doc) {
          if (err) throw err;

          expect(doc.getStatements().length).equals(2);
          expect(doc.getStatements()[0].subject).equals(doc.getStatements()[1].object);
          expect(containsUuid.test(doc.getStatements()[0].subject)).equals(true);
          expect(containsUuid.test(doc.getStatements()[1].object)).equals(true);
          done();
        });
      });
      it('Handles blank graphs', function(done) {
        tryLoadTrig(path.resolve('other', 'blank-graph.trig'), function(err, doc) {
          if (err) throw err;
          expect(doc.getStatements().length).equals(3);
          expect(doc.graphs.length).equals(0);
          expect(doc.allGraphs.length).equals(1);
          done();
        });
      });
      it('Handles unknown iri literals', function(done) {
        tryLoadTrig(path.resolve('other', 'unknown-iri-literal.trig'), function(err, doc) {
          if (err) throw err;
          expect(doc.getStatements()[0].object).equals('somecoolliteral');
          var iriType = doc.getStatements()[0].iriObject.type
          expect(iriType).equals('http://g.com/fix');
          done();
        });

      });

      it('Handles raw lists', function(done) {
        tryLoadTrig(path.resolve('other', 'raw-list.trig'), function(err, doc) {
          if (err) throw err;
          expect(doc.getStatements().length).equals(6);
          expect(doc.getStatements()[0].object).equals(1);
          expect(doc.getStatements()[1].iriPredicate).equals('rdf:rest');
          expect(doc.getStatements()[0].iriSubject).equals('_:b0');
          expect(doc.getStatements()[5].iriObject).equals('rdf:nil');
          done();
        });

      });

    
      it('Handles blankNode property Lists', function(done) {
        tryLoadTrig(path.resolve('other', 'blank-node-property-list.trig'), function(err, doc) {
          if (err) throw err;
          expect(doc.getStatements().length).equals(4);
          expect(doc.getStatements()[0].object).equals("RDF/XML Syntax Specification (Revised)");
          expect(doc.getStatements()[1].object).equals("Dave Beckett");
          expect(doc.getStatements()[2].object).equals("http://purl.org/net/dajobe/");

          expect(doc.getStatements()[1].iriPredicate).equals("ex:fullname");
          expect(doc.getStatements()[2].iriPredicate).equals("ex:homePage");
          expect(doc.getStatements()[3].iriPredicate).equals("ex:editor");
          expect(containsUuid.test(doc.getStatements()[3].object)).equals(true);

          done();
        });
      });
    });

  });

});

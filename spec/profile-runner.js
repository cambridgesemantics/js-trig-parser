var path = require('path');
var routines = require('./test-routines.js');

var tryLoadTrig = routines.tryLoadTrig;
var tryParseTrig = routines.tryParseTrig;
describe('Profiling: 30K lines 72K stmts', function() {

    it('Performance Test parser only', function(done) {

        this.timeout(1000 * 120);
        console.profile && console.profile("trig perf test");
        tryParseTrig(path.resolve('other', 'performance-test2.trig'), function(err, doc) {
            if (err) throw err;
            console.profileEnd && console.profileEnd("trig perf test");
            debugger;
            done();
        });
    });
    it('Performance Test2', function(done) {

        this.timeout(1000 * 120);
        console.profile && console.profile("trig perf test");
        tryLoadTrig(path.resolve('other', 'performance-test2.trig'), function(err, doc) {
            if (err) throw err;
            console.log(doc.getStatements().length);
            console.profileEnd && console.profileEnd("trig perf test");
            debugger;
            done();
        });
    });
});

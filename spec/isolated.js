let routines = require('./test-routines.js');
let path = require('path');
let fn = path.resolve('validation', 'prefix-not-found.trig');
let tryLoadTrig = routines.tryLoadTrig;
tryLoadTrig(fn, function(err, doc) {
    if(err) console.error(err);
    console.log(doc.analysisErrors)
});

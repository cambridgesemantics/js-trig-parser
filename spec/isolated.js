let routines = require('./test-routines.js');
let path = require('path');
let fn = path.resolve('validation', 'prefix-not-found.trig');
let fn2 = path.resolve('csi-ex', 'film-data.trig');
let tryLoadTrig = routines.tryLoadTrig;
tryLoadTrig(fn2, function(err, doc) {
    if(err) console.error(err);
    console.log(doc.analysisErrors)
});

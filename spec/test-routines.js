import fs from 'fs' ;
import path from 'path';
import trigLoaders from '../src/trig-loaders.js';

function tryParseTrig(fn, cb) {
    trigLoaders.syntaxTreeLoader.fromFile(fn, cb);
}

function tryLoadTrig(fn, cb) {
    trigLoaders.graphLoader.fromFile(fn, cb);
}

function tryDefaultLoad(fn, cb) {
    trigLoaders.baseLoader.fromFile(fn, cb);
}

function getTestFiles(dir) {
    return fs.readdirSync(dir).filter(function(rp){
        return rp.indexOf('.gitignore') === -1;
    }).map(function(rp) {
        return path.resolve(dir, rp);
    });
}

export  {
  tryParseTrig,
  tryLoadTrig,
  tryDefaultLoad,
  getTestFiles
};

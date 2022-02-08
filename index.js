import loaders from './src/trig-loaders.js';
import TRIGLexer from './src/antlr-trig/TRIGLexer.js';
import TRIGParser from './src/antlr-trig/TRIGParser.js';
import TRIGListener from  './src/antlr-trig/TRIGListener.js';


const antlr = {
    TRIGLexer,
    TRIGParser,
    TRIGListener
  };

export  {
  loaders ,
  antlr 
};

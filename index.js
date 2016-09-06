module.exports = {
  loaders :require('./src/trig-loaders.js'),
  antlr: {
    TRIGLexer: require('./src/antlr-trig/TRIGLexer.js'),
    TRIGParser: require('./src/antlr-trig/TRIGParser.js'),
    TRIGListener: require('./src/antlr-trig/TRIGListener.js')
  }
};

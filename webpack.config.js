var path = require("path");
var webpack = require('webpack');


module.exports = {
  entry: "./index.js",
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        warnings: false,
        minimize: true,
        sourceMap: false,
        mangle: true
    })
  ],
  output: {
     path: path.resolve(__dirname, "umd"),
     filename: "trigParser.min.js",
     // export itself to a global var
     //libraryTarget: "var",
     libraryTarget: 'umd',
     // name of the global var: "Foo"
     library: "trigParser",

  }
};

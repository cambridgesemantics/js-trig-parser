var path = require("path");
var webpack = require('webpack');

module.exports = {
  entry: "./index.js",
  output: {
     path: path.resolve(__dirname, "umd"),
     filename: "trigParser.min.js",
     // export itself to a global var
     //libraryTarget: "var",
     libraryTarget: 'umd',
     // name of the global var: "Foo"
     library: "trigParser",

  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
        fallback: {
            "fs": false
        },
    }
};

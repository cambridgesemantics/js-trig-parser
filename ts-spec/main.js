"use strict";
exports.__esModule = true;
var RDF = require("../index");
var process = require("process");
var path = require("path");
var cl = console.log;
var printTokenInfo = function (s) {
    cl(s.pos);
};
var printPos = function (s) {
    printTokenInfo(s._s);
    printTokenInfo(s._p);
    printTokenInfo(s._o);
    printTokenInfo(s._g);
    console.log(s._g.children);
    console.log(s._o);
};
var processGraph = function (err, doc) {
    doc.graphs.forEach(function (x) {
        x.getStatements().forEach(function (y) {
            console.log(y);
        });
    });
};
var rootName = path.dirname(path.dirname(process.argv[1]));
var anyUri = path.resolve(rootName, './spec/other/any-uri.trig');
var datasourcesOnt = path.resolve(rootName, './spec/csi-ex/datasources-ont.trig');
RDF.loaders.graphLoader.fromFile(datasourcesOnt, processGraph);
//# sourceMappingURL=main.js.map
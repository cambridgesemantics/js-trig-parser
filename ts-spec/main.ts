import * as RDF from '../index'
import * as process from 'process'
import * as path from 'path'
import {IParsedStatement, IParsedToken} from "../index";

let cl = console.log

let printTokenInfo = (s: IParsedToken) => {
    cl(s.pos)
}
let printPos = (s: IParsedStatement) => {
    printTokenInfo(s._s)
    printTokenInfo(s._p)
    printTokenInfo(s._o)
    printTokenInfo(s._g)
    console.log(s._g.children)
    console.log(s._o)
}

let processGraph = (err, doc) => {
    doc.graphs.forEach((x) => {
        x.getStatements().forEach((y) => {
           console.log(y)
        })
    })
}

let rootName = path.dirname(path.dirname(process.argv[1]))
let anyUri = path.resolve(rootName, './spec/other/any-uri.trig')
let datasourcesOnt = path.resolve(rootName, './spec/csi-ex/datasources-ont.trig')

RDF.loaders.graphLoader.fromFile(datasourcesOnt, processGraph)
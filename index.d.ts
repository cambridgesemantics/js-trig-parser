export interface IPrefixMap{
    get(prefix: string): PrefixValue

}
export interface PrefixValue{
    name: string
    name_symbol: IParsedToken
    value: string
    value_symbol: IParsedToken
    pos: IEditPosition
}
export interface TrigDoc{
    prefixes: IPrefixMap
    graphs: IParsedGraph[]
    errors: any[]
    syntaxErrors: any[]
    analysisErrors: any[]
    macros: any
    getStatements(): IParsedStatement[]

}

interface HasGetStatements{
    getStatements(): IParsedStatement[]
}
// interface Dataset{
//     getStatements(): IParsedStatement[]
//     find(u: URI, p: URI, v: Value)
//     find(u: URI, p: URI, v: Value, ng: URI)
// }

export interface ILoader{
    fromString(s: string): TrigDoc
    fromFile(s: string): TrigDoc
}

export interface IParsedGraph{
    getStatements(): IParsedStatement[]
}



type Value = string | number | Date | boolean

export interface IParsedStatement{
    subject: string
    predicate: string
    object: Value
    graph: string
    _s: IParsedToken
    _p: IParsedToken
    _o: IParsedToken
    _g: IParsedToken

}
export interface IEditPosition{
    column: number
    line: number
}
export interface IParsedToken{
    pos: IEditPosition
    token: string
    type: string
    start: number
    stop: number
    children: IParsedToken[]
}
interface IriToken extends IParsedToken{
    iriLiteralType: string
    value: string
    type: string
}

// interface IStatement{
//     subject: URI
//     predicate: URI
//     value: Value
//     ng: URI
// }
//
// export class Statement implements IStatement{
//     subject: URI;
//     predicate: URI;
//     value: Value;
//     ng: URI;
//
// }


interface TrigLoader{
    fromFile(path: string, cb: LoaderCB): TrigDoc
    fromString(trig: string, cb: LoaderCB): TrigDoc
}

type LoaderCB = (any, TrigDoc) => any
interface Loaders{
    graphLoader: TrigLoader
    baseLoader: TrigLoader
}
declare module "./index.js" {
    export var loaders: Loaders
}
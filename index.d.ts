export interface IPrefixMap< T extends IPrefixValue>{
    get(prefix: string): T
    _prefixes: object
}
export interface IPrefixValue{
    name: string
    value: string
}
export interface IParsedPrefixValue extends IPrefixValue{
    name: string
    name_symbol: IParsedToken
    value: string
    value_symbol: IParsedToken
    pos: IEditPosition
}
export interface TrigDoc{
    prefixes: IPrefixMap<IParsedPrefixValue>
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
    row: number
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
    fromFile(path: string, cb: LoaderCB): void
    fromString(trig: string, cb: LoaderCB): void
}

interface BaseLoader{
    fromFile(path: string, cb: BaseLoaderCB): void
    fromString(trig: string, cb: BaseLoaderCB): void
}
interface BaseParseResult{
    expressions: IParsedToken[],
    terminals: IParsedToken[]
}

type LoaderCB = (any, TrigDoc) => any
type BaseLoaderCB = (any, BaseParseResult) => any
interface Loaders{
    graphLoader: TrigLoader
    baseLoader: BaseLoader
}
declare module "./index.js" {
    export var loaders: Loaders
}
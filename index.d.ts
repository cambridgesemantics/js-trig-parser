import { URI } from "../rdf-ts/src/values/URI";

export interface IPrefixMap< T extends IPrefixValue>{
    get(prefix: string): T
    hasValue(x: string): boolean
    _prefixes: object
}

export interface IPrefixValue{
    name?: string
    value: string
    strippedValue?: () => string
    prefixURI?: (uri: string| URI) => string
    toRdfString(): string
}

export interface IParsedPrefixValue extends IPrefixValue{
    name: string
    name_symbol: IBaseToken
    value: string
    value_symbol: IBaseToken
    pos: IEditPosition
    file?: string
}

export interface ISyntaxError {
    err: any
    msg: string
    line: number
    column:number
    offendingToken: ICommonToken
}

export interface IAnalysisError {
    len: number
    column: number
    line: number
    message: string
    start: number
    stop: number
}

export interface TrigDoc{
    prefixes: IPrefixMap<IParsedPrefixValue>
    graphs: IParsedGraph[]
    errors: ISyntaxError[]
    syntaxErrors: ISyntaxError[]
    analysisErrors: IAnalysisError[]
    macros: any
    getStatements(): IParsedStatement[]

}

interface HasGetStatements{
    getStatements(): IParsedStatement[]
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
    _s: IBaseToken
    _p: IBaseToken
    _o: IBaseToken
    _g: IBaseToken
}

export interface IEditPosition{
    column: number
    row: number
}

export interface ITokenPosition{
    column: number
    line: number
}

export interface ICommonToken extends ITokenPosition{
    start: number
    stop: number
    text: string
}
export interface IBaseToken{
    type: string
    token: string
    pos? : ITokenPosition
    start?: IBaseToken | number
    stop?: IBaseToken | number
}

export interface IParsedToken extends IBaseToken{
    pos: ITokenPosition
    token: string
    type: string
    start?: IBaseToken | number
    stop?: IBaseToken | number 
    children: IBaseToken[]
}

interface IriToken extends IBaseToken{
    iriLiteralType: string
    value: string
    type: string
}

interface TrigLoader{
    fromFile(path: string, cb: LoaderCB): void
    fromString(trig: string): TrigDoc
}

interface BaseLoader{
    fromFile(path: string): BaseParseResult
    fromString(trig: string): BaseParseResult
}
interface BaseParseResult{
    expressions: IBaseToken[],
    terminals: IBaseToken[]
}

interface BaseLoader{
    fromFile(path: string, cb: BaseLoaderCB): void
    fromString(trig: string, cb: BaseLoaderCB): void
}
interface BaseParseResult{
    expressions: IBaseToken[],
    terminals: IBaseToken[]
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

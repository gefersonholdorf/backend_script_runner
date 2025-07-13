
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model databases
 * 
 */
export type databases = $Result.DefaultSelection<Prisma.$databasesPayload>
/**
 * Model environments
 * 
 */
export type environments = $Result.DefaultSelection<Prisma.$environmentsPayload>
/**
 * Model execution_status
 * 
 */
export type execution_status = $Result.DefaultSelection<Prisma.$execution_statusPayload>
/**
 * Model executions
 * 
 */
export type executions = $Result.DefaultSelection<Prisma.$executionsPayload>
/**
 * Model scripts
 * 
 */
export type scripts = $Result.DefaultSelection<Prisma.$scriptsPayload>
/**
 * Model systems
 * 
 */
export type systems = $Result.DefaultSelection<Prisma.$systemsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const execution_status_ds_status: {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export type execution_status_ds_status = (typeof execution_status_ds_status)[keyof typeof execution_status_ds_status]


export const executions_ds_status: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

export type executions_ds_status = (typeof executions_ds_status)[keyof typeof executions_ds_status]

}

export type execution_status_ds_status = $Enums.execution_status_ds_status

export const execution_status_ds_status: typeof $Enums.execution_status_ds_status

export type executions_ds_status = $Enums.executions_ds_status

export const executions_ds_status: typeof $Enums.executions_ds_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Databases
 * const databases = await prisma.databases.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Databases
   * const databases = await prisma.databases.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.databases`: Exposes CRUD operations for the **databases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Databases
    * const databases = await prisma.databases.findMany()
    * ```
    */
  get databases(): Prisma.databasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environments`: Exposes CRUD operations for the **environments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Environments
    * const environments = await prisma.environments.findMany()
    * ```
    */
  get environments(): Prisma.environmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.execution_status`: Exposes CRUD operations for the **execution_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Execution_statuses
    * const execution_statuses = await prisma.execution_status.findMany()
    * ```
    */
  get execution_status(): Prisma.execution_statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executions`: Exposes CRUD operations for the **executions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Executions
    * const executions = await prisma.executions.findMany()
    * ```
    */
  get executions(): Prisma.executionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scripts`: Exposes CRUD operations for the **scripts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scripts
    * const scripts = await prisma.scripts.findMany()
    * ```
    */
  get scripts(): Prisma.scriptsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systems`: Exposes CRUD operations for the **systems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Systems
    * const systems = await prisma.systems.findMany()
    * ```
    */
  get systems(): Prisma.systemsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    databases: 'databases',
    environments: 'environments',
    execution_status: 'execution_status',
    executions: 'executions',
    scripts: 'scripts',
    systems: 'systems'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "databases" | "environments" | "execution_status" | "executions" | "scripts" | "systems"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      databases: {
        payload: Prisma.$databasesPayload<ExtArgs>
        fields: Prisma.databasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.databasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.databasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload>
          }
          findFirst: {
            args: Prisma.databasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.databasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload>
          }
          findMany: {
            args: Prisma.databasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload>[]
          }
          create: {
            args: Prisma.databasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload>
          }
          createMany: {
            args: Prisma.databasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.databasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload>
          }
          update: {
            args: Prisma.databasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload>
          }
          deleteMany: {
            args: Prisma.databasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.databasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.databasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$databasesPayload>
          }
          aggregate: {
            args: Prisma.DatabasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatabases>
          }
          groupBy: {
            args: Prisma.databasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatabasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.databasesCountArgs<ExtArgs>
            result: $Utils.Optional<DatabasesCountAggregateOutputType> | number
          }
        }
      }
      environments: {
        payload: Prisma.$environmentsPayload<ExtArgs>
        fields: Prisma.environmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.environmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.environmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload>
          }
          findFirst: {
            args: Prisma.environmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.environmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload>
          }
          findMany: {
            args: Prisma.environmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload>[]
          }
          create: {
            args: Prisma.environmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload>
          }
          createMany: {
            args: Prisma.environmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.environmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload>
          }
          update: {
            args: Prisma.environmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload>
          }
          deleteMany: {
            args: Prisma.environmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.environmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.environmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$environmentsPayload>
          }
          aggregate: {
            args: Prisma.EnvironmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironments>
          }
          groupBy: {
            args: Prisma.environmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.environmentsCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentsCountAggregateOutputType> | number
          }
        }
      }
      execution_status: {
        payload: Prisma.$execution_statusPayload<ExtArgs>
        fields: Prisma.execution_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.execution_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.execution_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload>
          }
          findFirst: {
            args: Prisma.execution_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.execution_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload>
          }
          findMany: {
            args: Prisma.execution_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload>[]
          }
          create: {
            args: Prisma.execution_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload>
          }
          createMany: {
            args: Prisma.execution_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.execution_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload>
          }
          update: {
            args: Prisma.execution_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload>
          }
          deleteMany: {
            args: Prisma.execution_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.execution_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.execution_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$execution_statusPayload>
          }
          aggregate: {
            args: Prisma.Execution_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecution_status>
          }
          groupBy: {
            args: Prisma.execution_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Execution_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.execution_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Execution_statusCountAggregateOutputType> | number
          }
        }
      }
      executions: {
        payload: Prisma.$executionsPayload<ExtArgs>
        fields: Prisma.executionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.executionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.executionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload>
          }
          findFirst: {
            args: Prisma.executionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.executionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload>
          }
          findMany: {
            args: Prisma.executionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload>[]
          }
          create: {
            args: Prisma.executionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload>
          }
          createMany: {
            args: Prisma.executionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.executionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload>
          }
          update: {
            args: Prisma.executionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload>
          }
          deleteMany: {
            args: Prisma.executionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.executionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.executionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$executionsPayload>
          }
          aggregate: {
            args: Prisma.ExecutionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutions>
          }
          groupBy: {
            args: Prisma.executionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.executionsCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionsCountAggregateOutputType> | number
          }
        }
      }
      scripts: {
        payload: Prisma.$scriptsPayload<ExtArgs>
        fields: Prisma.scriptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scriptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scriptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload>
          }
          findFirst: {
            args: Prisma.scriptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scriptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload>
          }
          findMany: {
            args: Prisma.scriptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload>[]
          }
          create: {
            args: Prisma.scriptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload>
          }
          createMany: {
            args: Prisma.scriptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.scriptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload>
          }
          update: {
            args: Prisma.scriptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload>
          }
          deleteMany: {
            args: Prisma.scriptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scriptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.scriptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scriptsPayload>
          }
          aggregate: {
            args: Prisma.ScriptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScripts>
          }
          groupBy: {
            args: Prisma.scriptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScriptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.scriptsCountArgs<ExtArgs>
            result: $Utils.Optional<ScriptsCountAggregateOutputType> | number
          }
        }
      }
      systems: {
        payload: Prisma.$systemsPayload<ExtArgs>
        fields: Prisma.systemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.systemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.systemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload>
          }
          findFirst: {
            args: Prisma.systemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.systemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload>
          }
          findMany: {
            args: Prisma.systemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload>[]
          }
          create: {
            args: Prisma.systemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload>
          }
          createMany: {
            args: Prisma.systemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.systemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload>
          }
          update: {
            args: Prisma.systemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload>
          }
          deleteMany: {
            args: Prisma.systemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.systemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.systemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$systemsPayload>
          }
          aggregate: {
            args: Prisma.SystemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystems>
          }
          groupBy: {
            args: Prisma.systemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.systemsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    databases?: databasesOmit
    environments?: environmentsOmit
    execution_status?: execution_statusOmit
    executions?: executionsOmit
    scripts?: scriptsOmit
    systems?: systemsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DatabasesCountOutputType
   */

  export type DatabasesCountOutputType = {
    execution_status: number
  }

  export type DatabasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution_status?: boolean | DatabasesCountOutputTypeCountExecution_statusArgs
  }

  // Custom InputTypes
  /**
   * DatabasesCountOutputType without action
   */
  export type DatabasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabasesCountOutputType
     */
    select?: DatabasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatabasesCountOutputType without action
   */
  export type DatabasesCountOutputTypeCountExecution_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: execution_statusWhereInput
  }


  /**
   * Count Type EnvironmentsCountOutputType
   */

  export type EnvironmentsCountOutputType = {
    databases: number
  }

  export type EnvironmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    databases?: boolean | EnvironmentsCountOutputTypeCountDatabasesArgs
  }

  // Custom InputTypes
  /**
   * EnvironmentsCountOutputType without action
   */
  export type EnvironmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentsCountOutputType
     */
    select?: EnvironmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnvironmentsCountOutputType without action
   */
  export type EnvironmentsCountOutputTypeCountDatabasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: databasesWhereInput
  }


  /**
   * Count Type ExecutionsCountOutputType
   */

  export type ExecutionsCountOutputType = {
    execution_status: number
  }

  export type ExecutionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution_status?: boolean | ExecutionsCountOutputTypeCountExecution_statusArgs
  }

  // Custom InputTypes
  /**
   * ExecutionsCountOutputType without action
   */
  export type ExecutionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionsCountOutputType
     */
    select?: ExecutionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExecutionsCountOutputType without action
   */
  export type ExecutionsCountOutputTypeCountExecution_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: execution_statusWhereInput
  }


  /**
   * Count Type ScriptsCountOutputType
   */

  export type ScriptsCountOutputType = {
    executions: number
  }

  export type ScriptsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | ScriptsCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * ScriptsCountOutputType without action
   */
  export type ScriptsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScriptsCountOutputType
     */
    select?: ScriptsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScriptsCountOutputType without action
   */
  export type ScriptsCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: executionsWhereInput
  }


  /**
   * Count Type SystemsCountOutputType
   */

  export type SystemsCountOutputType = {
    databases: number
  }

  export type SystemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    databases?: boolean | SystemsCountOutputTypeCountDatabasesArgs
  }

  // Custom InputTypes
  /**
   * SystemsCountOutputType without action
   */
  export type SystemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemsCountOutputType
     */
    select?: SystemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemsCountOutputType without action
   */
  export type SystemsCountOutputTypeCountDatabasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: databasesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model databases
   */

  export type AggregateDatabases = {
    _count: DatabasesCountAggregateOutputType | null
    _avg: DatabasesAvgAggregateOutputType | null
    _sum: DatabasesSumAggregateOutputType | null
    _min: DatabasesMinAggregateOutputType | null
    _max: DatabasesMaxAggregateOutputType | null
  }

  export type DatabasesAvgAggregateOutputType = {
    cd_database: number | null
    cd_system: number | null
    cd_environment: number | null
  }

  export type DatabasesSumAggregateOutputType = {
    cd_database: number | null
    cd_system: number | null
    cd_environment: number | null
  }

  export type DatabasesMinAggregateOutputType = {
    cd_database: number | null
    cd_system: number | null
    cd_environment: number | null
    ds_name: string | null
    dt_created: Date | null
  }

  export type DatabasesMaxAggregateOutputType = {
    cd_database: number | null
    cd_system: number | null
    cd_environment: number | null
    ds_name: string | null
    dt_created: Date | null
  }

  export type DatabasesCountAggregateOutputType = {
    cd_database: number
    cd_system: number
    cd_environment: number
    ds_name: number
    dt_created: number
    _all: number
  }


  export type DatabasesAvgAggregateInputType = {
    cd_database?: true
    cd_system?: true
    cd_environment?: true
  }

  export type DatabasesSumAggregateInputType = {
    cd_database?: true
    cd_system?: true
    cd_environment?: true
  }

  export type DatabasesMinAggregateInputType = {
    cd_database?: true
    cd_system?: true
    cd_environment?: true
    ds_name?: true
    dt_created?: true
  }

  export type DatabasesMaxAggregateInputType = {
    cd_database?: true
    cd_system?: true
    cd_environment?: true
    ds_name?: true
    dt_created?: true
  }

  export type DatabasesCountAggregateInputType = {
    cd_database?: true
    cd_system?: true
    cd_environment?: true
    ds_name?: true
    dt_created?: true
    _all?: true
  }

  export type DatabasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which databases to aggregate.
     */
    where?: databasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of databases to fetch.
     */
    orderBy?: databasesOrderByWithRelationInput | databasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: databasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` databases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned databases
    **/
    _count?: true | DatabasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatabasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatabasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabasesMaxAggregateInputType
  }

  export type GetDatabasesAggregateType<T extends DatabasesAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabases[P]>
      : GetScalarType<T[P], AggregateDatabases[P]>
  }




  export type databasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: databasesWhereInput
    orderBy?: databasesOrderByWithAggregationInput | databasesOrderByWithAggregationInput[]
    by: DatabasesScalarFieldEnum[] | DatabasesScalarFieldEnum
    having?: databasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabasesCountAggregateInputType | true
    _avg?: DatabasesAvgAggregateInputType
    _sum?: DatabasesSumAggregateInputType
    _min?: DatabasesMinAggregateInputType
    _max?: DatabasesMaxAggregateInputType
  }

  export type DatabasesGroupByOutputType = {
    cd_database: number
    cd_system: number
    cd_environment: number
    ds_name: string
    dt_created: Date | null
    _count: DatabasesCountAggregateOutputType | null
    _avg: DatabasesAvgAggregateOutputType | null
    _sum: DatabasesSumAggregateOutputType | null
    _min: DatabasesMinAggregateOutputType | null
    _max: DatabasesMaxAggregateOutputType | null
  }

  type GetDatabasesGroupByPayload<T extends databasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatabasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabasesGroupByOutputType[P]>
            : GetScalarType<T[P], DatabasesGroupByOutputType[P]>
        }
      >
    >


  export type databasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cd_database?: boolean
    cd_system?: boolean
    cd_environment?: boolean
    ds_name?: boolean
    dt_created?: boolean
    systems?: boolean | systemsDefaultArgs<ExtArgs>
    environments?: boolean | environmentsDefaultArgs<ExtArgs>
    execution_status?: boolean | databases$execution_statusArgs<ExtArgs>
    _count?: boolean | DatabasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["databases"]>



  export type databasesSelectScalar = {
    cd_database?: boolean
    cd_system?: boolean
    cd_environment?: boolean
    ds_name?: boolean
    dt_created?: boolean
  }

  export type databasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cd_database" | "cd_system" | "cd_environment" | "ds_name" | "dt_created", ExtArgs["result"]["databases"]>
  export type databasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    systems?: boolean | systemsDefaultArgs<ExtArgs>
    environments?: boolean | environmentsDefaultArgs<ExtArgs>
    execution_status?: boolean | databases$execution_statusArgs<ExtArgs>
    _count?: boolean | DatabasesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $databasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "databases"
    objects: {
      systems: Prisma.$systemsPayload<ExtArgs>
      environments: Prisma.$environmentsPayload<ExtArgs>
      execution_status: Prisma.$execution_statusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cd_database: number
      cd_system: number
      cd_environment: number
      ds_name: string
      dt_created: Date | null
    }, ExtArgs["result"]["databases"]>
    composites: {}
  }

  type databasesGetPayload<S extends boolean | null | undefined | databasesDefaultArgs> = $Result.GetResult<Prisma.$databasesPayload, S>

  type databasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<databasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatabasesCountAggregateInputType | true
    }

  export interface databasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['databases'], meta: { name: 'databases' } }
    /**
     * Find zero or one Databases that matches the filter.
     * @param {databasesFindUniqueArgs} args - Arguments to find a Databases
     * @example
     * // Get one Databases
     * const databases = await prisma.databases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends databasesFindUniqueArgs>(args: SelectSubset<T, databasesFindUniqueArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Databases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {databasesFindUniqueOrThrowArgs} args - Arguments to find a Databases
     * @example
     * // Get one Databases
     * const databases = await prisma.databases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends databasesFindUniqueOrThrowArgs>(args: SelectSubset<T, databasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Databases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {databasesFindFirstArgs} args - Arguments to find a Databases
     * @example
     * // Get one Databases
     * const databases = await prisma.databases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends databasesFindFirstArgs>(args?: SelectSubset<T, databasesFindFirstArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Databases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {databasesFindFirstOrThrowArgs} args - Arguments to find a Databases
     * @example
     * // Get one Databases
     * const databases = await prisma.databases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends databasesFindFirstOrThrowArgs>(args?: SelectSubset<T, databasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Databases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {databasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Databases
     * const databases = await prisma.databases.findMany()
     * 
     * // Get first 10 Databases
     * const databases = await prisma.databases.findMany({ take: 10 })
     * 
     * // Only select the `cd_database`
     * const databasesWithCd_databaseOnly = await prisma.databases.findMany({ select: { cd_database: true } })
     * 
     */
    findMany<T extends databasesFindManyArgs>(args?: SelectSubset<T, databasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Databases.
     * @param {databasesCreateArgs} args - Arguments to create a Databases.
     * @example
     * // Create one Databases
     * const Databases = await prisma.databases.create({
     *   data: {
     *     // ... data to create a Databases
     *   }
     * })
     * 
     */
    create<T extends databasesCreateArgs>(args: SelectSubset<T, databasesCreateArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Databases.
     * @param {databasesCreateManyArgs} args - Arguments to create many Databases.
     * @example
     * // Create many Databases
     * const databases = await prisma.databases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends databasesCreateManyArgs>(args?: SelectSubset<T, databasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Databases.
     * @param {databasesDeleteArgs} args - Arguments to delete one Databases.
     * @example
     * // Delete one Databases
     * const Databases = await prisma.databases.delete({
     *   where: {
     *     // ... filter to delete one Databases
     *   }
     * })
     * 
     */
    delete<T extends databasesDeleteArgs>(args: SelectSubset<T, databasesDeleteArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Databases.
     * @param {databasesUpdateArgs} args - Arguments to update one Databases.
     * @example
     * // Update one Databases
     * const databases = await prisma.databases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends databasesUpdateArgs>(args: SelectSubset<T, databasesUpdateArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Databases.
     * @param {databasesDeleteManyArgs} args - Arguments to filter Databases to delete.
     * @example
     * // Delete a few Databases
     * const { count } = await prisma.databases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends databasesDeleteManyArgs>(args?: SelectSubset<T, databasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {databasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Databases
     * const databases = await prisma.databases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends databasesUpdateManyArgs>(args: SelectSubset<T, databasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Databases.
     * @param {databasesUpsertArgs} args - Arguments to update or create a Databases.
     * @example
     * // Update or create a Databases
     * const databases = await prisma.databases.upsert({
     *   create: {
     *     // ... data to create a Databases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Databases we want to update
     *   }
     * })
     */
    upsert<T extends databasesUpsertArgs>(args: SelectSubset<T, databasesUpsertArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {databasesCountArgs} args - Arguments to filter Databases to count.
     * @example
     * // Count the number of Databases
     * const count = await prisma.databases.count({
     *   where: {
     *     // ... the filter for the Databases we want to count
     *   }
     * })
    **/
    count<T extends databasesCountArgs>(
      args?: Subset<T, databasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabasesAggregateArgs>(args: Subset<T, DatabasesAggregateArgs>): Prisma.PrismaPromise<GetDatabasesAggregateType<T>>

    /**
     * Group by Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {databasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends databasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: databasesGroupByArgs['orderBy'] }
        : { orderBy?: databasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, databasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the databases model
   */
  readonly fields: databasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for databases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__databasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    systems<T extends systemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, systemsDefaultArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    environments<T extends environmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, environmentsDefaultArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    execution_status<T extends databases$execution_statusArgs<ExtArgs> = {}>(args?: Subset<T, databases$execution_statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the databases model
   */
  interface databasesFieldRefs {
    readonly cd_database: FieldRef<"databases", 'Int'>
    readonly cd_system: FieldRef<"databases", 'Int'>
    readonly cd_environment: FieldRef<"databases", 'Int'>
    readonly ds_name: FieldRef<"databases", 'String'>
    readonly dt_created: FieldRef<"databases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * databases findUnique
   */
  export type databasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * Filter, which databases to fetch.
     */
    where: databasesWhereUniqueInput
  }

  /**
   * databases findUniqueOrThrow
   */
  export type databasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * Filter, which databases to fetch.
     */
    where: databasesWhereUniqueInput
  }

  /**
   * databases findFirst
   */
  export type databasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * Filter, which databases to fetch.
     */
    where?: databasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of databases to fetch.
     */
    orderBy?: databasesOrderByWithRelationInput | databasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for databases.
     */
    cursor?: databasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` databases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of databases.
     */
    distinct?: DatabasesScalarFieldEnum | DatabasesScalarFieldEnum[]
  }

  /**
   * databases findFirstOrThrow
   */
  export type databasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * Filter, which databases to fetch.
     */
    where?: databasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of databases to fetch.
     */
    orderBy?: databasesOrderByWithRelationInput | databasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for databases.
     */
    cursor?: databasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` databases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of databases.
     */
    distinct?: DatabasesScalarFieldEnum | DatabasesScalarFieldEnum[]
  }

  /**
   * databases findMany
   */
  export type databasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * Filter, which databases to fetch.
     */
    where?: databasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of databases to fetch.
     */
    orderBy?: databasesOrderByWithRelationInput | databasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing databases.
     */
    cursor?: databasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` databases.
     */
    skip?: number
    distinct?: DatabasesScalarFieldEnum | DatabasesScalarFieldEnum[]
  }

  /**
   * databases create
   */
  export type databasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * The data needed to create a databases.
     */
    data: XOR<databasesCreateInput, databasesUncheckedCreateInput>
  }

  /**
   * databases createMany
   */
  export type databasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many databases.
     */
    data: databasesCreateManyInput | databasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * databases update
   */
  export type databasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * The data needed to update a databases.
     */
    data: XOR<databasesUpdateInput, databasesUncheckedUpdateInput>
    /**
     * Choose, which databases to update.
     */
    where: databasesWhereUniqueInput
  }

  /**
   * databases updateMany
   */
  export type databasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update databases.
     */
    data: XOR<databasesUpdateManyMutationInput, databasesUncheckedUpdateManyInput>
    /**
     * Filter which databases to update
     */
    where?: databasesWhereInput
    /**
     * Limit how many databases to update.
     */
    limit?: number
  }

  /**
   * databases upsert
   */
  export type databasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * The filter to search for the databases to update in case it exists.
     */
    where: databasesWhereUniqueInput
    /**
     * In case the databases found by the `where` argument doesn't exist, create a new databases with this data.
     */
    create: XOR<databasesCreateInput, databasesUncheckedCreateInput>
    /**
     * In case the databases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<databasesUpdateInput, databasesUncheckedUpdateInput>
  }

  /**
   * databases delete
   */
  export type databasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    /**
     * Filter which databases to delete.
     */
    where: databasesWhereUniqueInput
  }

  /**
   * databases deleteMany
   */
  export type databasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which databases to delete
     */
    where?: databasesWhereInput
    /**
     * Limit how many databases to delete.
     */
    limit?: number
  }

  /**
   * databases.execution_status
   */
  export type databases$execution_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    where?: execution_statusWhereInput
    orderBy?: execution_statusOrderByWithRelationInput | execution_statusOrderByWithRelationInput[]
    cursor?: execution_statusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Execution_statusScalarFieldEnum | Execution_statusScalarFieldEnum[]
  }

  /**
   * databases without action
   */
  export type databasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
  }


  /**
   * Model environments
   */

  export type AggregateEnvironments = {
    _count: EnvironmentsCountAggregateOutputType | null
    _avg: EnvironmentsAvgAggregateOutputType | null
    _sum: EnvironmentsSumAggregateOutputType | null
    _min: EnvironmentsMinAggregateOutputType | null
    _max: EnvironmentsMaxAggregateOutputType | null
  }

  export type EnvironmentsAvgAggregateOutputType = {
    cd_environment: number | null
  }

  export type EnvironmentsSumAggregateOutputType = {
    cd_environment: number | null
  }

  export type EnvironmentsMinAggregateOutputType = {
    cd_environment: number | null
    ds_name: string | null
    dt_created: Date | null
  }

  export type EnvironmentsMaxAggregateOutputType = {
    cd_environment: number | null
    ds_name: string | null
    dt_created: Date | null
  }

  export type EnvironmentsCountAggregateOutputType = {
    cd_environment: number
    ds_name: number
    dt_created: number
    _all: number
  }


  export type EnvironmentsAvgAggregateInputType = {
    cd_environment?: true
  }

  export type EnvironmentsSumAggregateInputType = {
    cd_environment?: true
  }

  export type EnvironmentsMinAggregateInputType = {
    cd_environment?: true
    ds_name?: true
    dt_created?: true
  }

  export type EnvironmentsMaxAggregateInputType = {
    cd_environment?: true
    ds_name?: true
    dt_created?: true
  }

  export type EnvironmentsCountAggregateInputType = {
    cd_environment?: true
    ds_name?: true
    dt_created?: true
    _all?: true
  }

  export type EnvironmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which environments to aggregate.
     */
    where?: environmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environments to fetch.
     */
    orderBy?: environmentsOrderByWithRelationInput | environmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: environmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned environments
    **/
    _count?: true | EnvironmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnvironmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnvironmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentsMaxAggregateInputType
  }

  export type GetEnvironmentsAggregateType<T extends EnvironmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironments[P]>
      : GetScalarType<T[P], AggregateEnvironments[P]>
  }




  export type environmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: environmentsWhereInput
    orderBy?: environmentsOrderByWithAggregationInput | environmentsOrderByWithAggregationInput[]
    by: EnvironmentsScalarFieldEnum[] | EnvironmentsScalarFieldEnum
    having?: environmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentsCountAggregateInputType | true
    _avg?: EnvironmentsAvgAggregateInputType
    _sum?: EnvironmentsSumAggregateInputType
    _min?: EnvironmentsMinAggregateInputType
    _max?: EnvironmentsMaxAggregateInputType
  }

  export type EnvironmentsGroupByOutputType = {
    cd_environment: number
    ds_name: string
    dt_created: Date | null
    _count: EnvironmentsCountAggregateOutputType | null
    _avg: EnvironmentsAvgAggregateOutputType | null
    _sum: EnvironmentsSumAggregateOutputType | null
    _min: EnvironmentsMinAggregateOutputType | null
    _max: EnvironmentsMaxAggregateOutputType | null
  }

  type GetEnvironmentsGroupByPayload<T extends environmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentsGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentsGroupByOutputType[P]>
        }
      >
    >


  export type environmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cd_environment?: boolean
    ds_name?: boolean
    dt_created?: boolean
    databases?: boolean | environments$databasesArgs<ExtArgs>
    _count?: boolean | EnvironmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environments"]>



  export type environmentsSelectScalar = {
    cd_environment?: boolean
    ds_name?: boolean
    dt_created?: boolean
  }

  export type environmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cd_environment" | "ds_name" | "dt_created", ExtArgs["result"]["environments"]>
  export type environmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    databases?: boolean | environments$databasesArgs<ExtArgs>
    _count?: boolean | EnvironmentsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $environmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "environments"
    objects: {
      databases: Prisma.$databasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cd_environment: number
      ds_name: string
      dt_created: Date | null
    }, ExtArgs["result"]["environments"]>
    composites: {}
  }

  type environmentsGetPayload<S extends boolean | null | undefined | environmentsDefaultArgs> = $Result.GetResult<Prisma.$environmentsPayload, S>

  type environmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<environmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentsCountAggregateInputType | true
    }

  export interface environmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['environments'], meta: { name: 'environments' } }
    /**
     * Find zero or one Environments that matches the filter.
     * @param {environmentsFindUniqueArgs} args - Arguments to find a Environments
     * @example
     * // Get one Environments
     * const environments = await prisma.environments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends environmentsFindUniqueArgs>(args: SelectSubset<T, environmentsFindUniqueArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Environments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {environmentsFindUniqueOrThrowArgs} args - Arguments to find a Environments
     * @example
     * // Get one Environments
     * const environments = await prisma.environments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends environmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, environmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Environments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmentsFindFirstArgs} args - Arguments to find a Environments
     * @example
     * // Get one Environments
     * const environments = await prisma.environments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends environmentsFindFirstArgs>(args?: SelectSubset<T, environmentsFindFirstArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Environments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmentsFindFirstOrThrowArgs} args - Arguments to find a Environments
     * @example
     * // Get one Environments
     * const environments = await prisma.environments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends environmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, environmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Environments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Environments
     * const environments = await prisma.environments.findMany()
     * 
     * // Get first 10 Environments
     * const environments = await prisma.environments.findMany({ take: 10 })
     * 
     * // Only select the `cd_environment`
     * const environmentsWithCd_environmentOnly = await prisma.environments.findMany({ select: { cd_environment: true } })
     * 
     */
    findMany<T extends environmentsFindManyArgs>(args?: SelectSubset<T, environmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Environments.
     * @param {environmentsCreateArgs} args - Arguments to create a Environments.
     * @example
     * // Create one Environments
     * const Environments = await prisma.environments.create({
     *   data: {
     *     // ... data to create a Environments
     *   }
     * })
     * 
     */
    create<T extends environmentsCreateArgs>(args: SelectSubset<T, environmentsCreateArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Environments.
     * @param {environmentsCreateManyArgs} args - Arguments to create many Environments.
     * @example
     * // Create many Environments
     * const environments = await prisma.environments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends environmentsCreateManyArgs>(args?: SelectSubset<T, environmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Environments.
     * @param {environmentsDeleteArgs} args - Arguments to delete one Environments.
     * @example
     * // Delete one Environments
     * const Environments = await prisma.environments.delete({
     *   where: {
     *     // ... filter to delete one Environments
     *   }
     * })
     * 
     */
    delete<T extends environmentsDeleteArgs>(args: SelectSubset<T, environmentsDeleteArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Environments.
     * @param {environmentsUpdateArgs} args - Arguments to update one Environments.
     * @example
     * // Update one Environments
     * const environments = await prisma.environments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends environmentsUpdateArgs>(args: SelectSubset<T, environmentsUpdateArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Environments.
     * @param {environmentsDeleteManyArgs} args - Arguments to filter Environments to delete.
     * @example
     * // Delete a few Environments
     * const { count } = await prisma.environments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends environmentsDeleteManyArgs>(args?: SelectSubset<T, environmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Environments
     * const environments = await prisma.environments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends environmentsUpdateManyArgs>(args: SelectSubset<T, environmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Environments.
     * @param {environmentsUpsertArgs} args - Arguments to update or create a Environments.
     * @example
     * // Update or create a Environments
     * const environments = await prisma.environments.upsert({
     *   create: {
     *     // ... data to create a Environments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Environments we want to update
     *   }
     * })
     */
    upsert<T extends environmentsUpsertArgs>(args: SelectSubset<T, environmentsUpsertArgs<ExtArgs>>): Prisma__environmentsClient<$Result.GetResult<Prisma.$environmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmentsCountArgs} args - Arguments to filter Environments to count.
     * @example
     * // Count the number of Environments
     * const count = await prisma.environments.count({
     *   where: {
     *     // ... the filter for the Environments we want to count
     *   }
     * })
    **/
    count<T extends environmentsCountArgs>(
      args?: Subset<T, environmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentsAggregateArgs>(args: Subset<T, EnvironmentsAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentsAggregateType<T>>

    /**
     * Group by Environments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {environmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends environmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: environmentsGroupByArgs['orderBy'] }
        : { orderBy?: environmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, environmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the environments model
   */
  readonly fields: environmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for environments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__environmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    databases<T extends environments$databasesArgs<ExtArgs> = {}>(args?: Subset<T, environments$databasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the environments model
   */
  interface environmentsFieldRefs {
    readonly cd_environment: FieldRef<"environments", 'Int'>
    readonly ds_name: FieldRef<"environments", 'String'>
    readonly dt_created: FieldRef<"environments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * environments findUnique
   */
  export type environmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * Filter, which environments to fetch.
     */
    where: environmentsWhereUniqueInput
  }

  /**
   * environments findUniqueOrThrow
   */
  export type environmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * Filter, which environments to fetch.
     */
    where: environmentsWhereUniqueInput
  }

  /**
   * environments findFirst
   */
  export type environmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * Filter, which environments to fetch.
     */
    where?: environmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environments to fetch.
     */
    orderBy?: environmentsOrderByWithRelationInput | environmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for environments.
     */
    cursor?: environmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of environments.
     */
    distinct?: EnvironmentsScalarFieldEnum | EnvironmentsScalarFieldEnum[]
  }

  /**
   * environments findFirstOrThrow
   */
  export type environmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * Filter, which environments to fetch.
     */
    where?: environmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environments to fetch.
     */
    orderBy?: environmentsOrderByWithRelationInput | environmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for environments.
     */
    cursor?: environmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of environments.
     */
    distinct?: EnvironmentsScalarFieldEnum | EnvironmentsScalarFieldEnum[]
  }

  /**
   * environments findMany
   */
  export type environmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * Filter, which environments to fetch.
     */
    where?: environmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of environments to fetch.
     */
    orderBy?: environmentsOrderByWithRelationInput | environmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing environments.
     */
    cursor?: environmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` environments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` environments.
     */
    skip?: number
    distinct?: EnvironmentsScalarFieldEnum | EnvironmentsScalarFieldEnum[]
  }

  /**
   * environments create
   */
  export type environmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a environments.
     */
    data: XOR<environmentsCreateInput, environmentsUncheckedCreateInput>
  }

  /**
   * environments createMany
   */
  export type environmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many environments.
     */
    data: environmentsCreateManyInput | environmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * environments update
   */
  export type environmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a environments.
     */
    data: XOR<environmentsUpdateInput, environmentsUncheckedUpdateInput>
    /**
     * Choose, which environments to update.
     */
    where: environmentsWhereUniqueInput
  }

  /**
   * environments updateMany
   */
  export type environmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update environments.
     */
    data: XOR<environmentsUpdateManyMutationInput, environmentsUncheckedUpdateManyInput>
    /**
     * Filter which environments to update
     */
    where?: environmentsWhereInput
    /**
     * Limit how many environments to update.
     */
    limit?: number
  }

  /**
   * environments upsert
   */
  export type environmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the environments to update in case it exists.
     */
    where: environmentsWhereUniqueInput
    /**
     * In case the environments found by the `where` argument doesn't exist, create a new environments with this data.
     */
    create: XOR<environmentsCreateInput, environmentsUncheckedCreateInput>
    /**
     * In case the environments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<environmentsUpdateInput, environmentsUncheckedUpdateInput>
  }

  /**
   * environments delete
   */
  export type environmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
    /**
     * Filter which environments to delete.
     */
    where: environmentsWhereUniqueInput
  }

  /**
   * environments deleteMany
   */
  export type environmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which environments to delete
     */
    where?: environmentsWhereInput
    /**
     * Limit how many environments to delete.
     */
    limit?: number
  }

  /**
   * environments.databases
   */
  export type environments$databasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    where?: databasesWhereInput
    orderBy?: databasesOrderByWithRelationInput | databasesOrderByWithRelationInput[]
    cursor?: databasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatabasesScalarFieldEnum | DatabasesScalarFieldEnum[]
  }

  /**
   * environments without action
   */
  export type environmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the environments
     */
    select?: environmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the environments
     */
    omit?: environmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: environmentsInclude<ExtArgs> | null
  }


  /**
   * Model execution_status
   */

  export type AggregateExecution_status = {
    _count: Execution_statusCountAggregateOutputType | null
    _avg: Execution_statusAvgAggregateOutputType | null
    _sum: Execution_statusSumAggregateOutputType | null
    _min: Execution_statusMinAggregateOutputType | null
    _max: Execution_statusMaxAggregateOutputType | null
  }

  export type Execution_statusAvgAggregateOutputType = {
    cd_execution_status: number | null
    cd_execution: number | null
    cd_database: number | null
  }

  export type Execution_statusSumAggregateOutputType = {
    cd_execution_status: number | null
    cd_execution: number | null
    cd_database: number | null
  }

  export type Execution_statusMinAggregateOutputType = {
    cd_execution_status: number | null
    cd_execution: number | null
    cd_database: number | null
    ds_status: $Enums.execution_status_ds_status | null
    ds_error_message: string | null
    dt_executed: Date | null
  }

  export type Execution_statusMaxAggregateOutputType = {
    cd_execution_status: number | null
    cd_execution: number | null
    cd_database: number | null
    ds_status: $Enums.execution_status_ds_status | null
    ds_error_message: string | null
    dt_executed: Date | null
  }

  export type Execution_statusCountAggregateOutputType = {
    cd_execution_status: number
    cd_execution: number
    cd_database: number
    ds_status: number
    ds_error_message: number
    dt_executed: number
    _all: number
  }


  export type Execution_statusAvgAggregateInputType = {
    cd_execution_status?: true
    cd_execution?: true
    cd_database?: true
  }

  export type Execution_statusSumAggregateInputType = {
    cd_execution_status?: true
    cd_execution?: true
    cd_database?: true
  }

  export type Execution_statusMinAggregateInputType = {
    cd_execution_status?: true
    cd_execution?: true
    cd_database?: true
    ds_status?: true
    ds_error_message?: true
    dt_executed?: true
  }

  export type Execution_statusMaxAggregateInputType = {
    cd_execution_status?: true
    cd_execution?: true
    cd_database?: true
    ds_status?: true
    ds_error_message?: true
    dt_executed?: true
  }

  export type Execution_statusCountAggregateInputType = {
    cd_execution_status?: true
    cd_execution?: true
    cd_database?: true
    ds_status?: true
    ds_error_message?: true
    dt_executed?: true
    _all?: true
  }

  export type Execution_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which execution_status to aggregate.
     */
    where?: execution_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of execution_statuses to fetch.
     */
    orderBy?: execution_statusOrderByWithRelationInput | execution_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: execution_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` execution_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` execution_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned execution_statuses
    **/
    _count?: true | Execution_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Execution_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Execution_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Execution_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Execution_statusMaxAggregateInputType
  }

  export type GetExecution_statusAggregateType<T extends Execution_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateExecution_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecution_status[P]>
      : GetScalarType<T[P], AggregateExecution_status[P]>
  }




  export type execution_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: execution_statusWhereInput
    orderBy?: execution_statusOrderByWithAggregationInput | execution_statusOrderByWithAggregationInput[]
    by: Execution_statusScalarFieldEnum[] | Execution_statusScalarFieldEnum
    having?: execution_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Execution_statusCountAggregateInputType | true
    _avg?: Execution_statusAvgAggregateInputType
    _sum?: Execution_statusSumAggregateInputType
    _min?: Execution_statusMinAggregateInputType
    _max?: Execution_statusMaxAggregateInputType
  }

  export type Execution_statusGroupByOutputType = {
    cd_execution_status: number
    cd_execution: number
    cd_database: number
    ds_status: $Enums.execution_status_ds_status
    ds_error_message: string | null
    dt_executed: Date | null
    _count: Execution_statusCountAggregateOutputType | null
    _avg: Execution_statusAvgAggregateOutputType | null
    _sum: Execution_statusSumAggregateOutputType | null
    _min: Execution_statusMinAggregateOutputType | null
    _max: Execution_statusMaxAggregateOutputType | null
  }

  type GetExecution_statusGroupByPayload<T extends execution_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Execution_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Execution_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Execution_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Execution_statusGroupByOutputType[P]>
        }
      >
    >


  export type execution_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cd_execution_status?: boolean
    cd_execution?: boolean
    cd_database?: boolean
    ds_status?: boolean
    ds_error_message?: boolean
    dt_executed?: boolean
    executions?: boolean | executionsDefaultArgs<ExtArgs>
    databases?: boolean | databasesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution_status"]>



  export type execution_statusSelectScalar = {
    cd_execution_status?: boolean
    cd_execution?: boolean
    cd_database?: boolean
    ds_status?: boolean
    ds_error_message?: boolean
    dt_executed?: boolean
  }

  export type execution_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cd_execution_status" | "cd_execution" | "cd_database" | "ds_status" | "ds_error_message" | "dt_executed", ExtArgs["result"]["execution_status"]>
  export type execution_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | executionsDefaultArgs<ExtArgs>
    databases?: boolean | databasesDefaultArgs<ExtArgs>
  }

  export type $execution_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "execution_status"
    objects: {
      executions: Prisma.$executionsPayload<ExtArgs>
      databases: Prisma.$databasesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cd_execution_status: number
      cd_execution: number
      cd_database: number
      ds_status: $Enums.execution_status_ds_status
      ds_error_message: string | null
      dt_executed: Date | null
    }, ExtArgs["result"]["execution_status"]>
    composites: {}
  }

  type execution_statusGetPayload<S extends boolean | null | undefined | execution_statusDefaultArgs> = $Result.GetResult<Prisma.$execution_statusPayload, S>

  type execution_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<execution_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Execution_statusCountAggregateInputType | true
    }

  export interface execution_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['execution_status'], meta: { name: 'execution_status' } }
    /**
     * Find zero or one Execution_status that matches the filter.
     * @param {execution_statusFindUniqueArgs} args - Arguments to find a Execution_status
     * @example
     * // Get one Execution_status
     * const execution_status = await prisma.execution_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends execution_statusFindUniqueArgs>(args: SelectSubset<T, execution_statusFindUniqueArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Execution_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {execution_statusFindUniqueOrThrowArgs} args - Arguments to find a Execution_status
     * @example
     * // Get one Execution_status
     * const execution_status = await prisma.execution_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends execution_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, execution_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Execution_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {execution_statusFindFirstArgs} args - Arguments to find a Execution_status
     * @example
     * // Get one Execution_status
     * const execution_status = await prisma.execution_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends execution_statusFindFirstArgs>(args?: SelectSubset<T, execution_statusFindFirstArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Execution_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {execution_statusFindFirstOrThrowArgs} args - Arguments to find a Execution_status
     * @example
     * // Get one Execution_status
     * const execution_status = await prisma.execution_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends execution_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, execution_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Execution_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {execution_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Execution_statuses
     * const execution_statuses = await prisma.execution_status.findMany()
     * 
     * // Get first 10 Execution_statuses
     * const execution_statuses = await prisma.execution_status.findMany({ take: 10 })
     * 
     * // Only select the `cd_execution_status`
     * const execution_statusWithCd_execution_statusOnly = await prisma.execution_status.findMany({ select: { cd_execution_status: true } })
     * 
     */
    findMany<T extends execution_statusFindManyArgs>(args?: SelectSubset<T, execution_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Execution_status.
     * @param {execution_statusCreateArgs} args - Arguments to create a Execution_status.
     * @example
     * // Create one Execution_status
     * const Execution_status = await prisma.execution_status.create({
     *   data: {
     *     // ... data to create a Execution_status
     *   }
     * })
     * 
     */
    create<T extends execution_statusCreateArgs>(args: SelectSubset<T, execution_statusCreateArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Execution_statuses.
     * @param {execution_statusCreateManyArgs} args - Arguments to create many Execution_statuses.
     * @example
     * // Create many Execution_statuses
     * const execution_status = await prisma.execution_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends execution_statusCreateManyArgs>(args?: SelectSubset<T, execution_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Execution_status.
     * @param {execution_statusDeleteArgs} args - Arguments to delete one Execution_status.
     * @example
     * // Delete one Execution_status
     * const Execution_status = await prisma.execution_status.delete({
     *   where: {
     *     // ... filter to delete one Execution_status
     *   }
     * })
     * 
     */
    delete<T extends execution_statusDeleteArgs>(args: SelectSubset<T, execution_statusDeleteArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Execution_status.
     * @param {execution_statusUpdateArgs} args - Arguments to update one Execution_status.
     * @example
     * // Update one Execution_status
     * const execution_status = await prisma.execution_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends execution_statusUpdateArgs>(args: SelectSubset<T, execution_statusUpdateArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Execution_statuses.
     * @param {execution_statusDeleteManyArgs} args - Arguments to filter Execution_statuses to delete.
     * @example
     * // Delete a few Execution_statuses
     * const { count } = await prisma.execution_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends execution_statusDeleteManyArgs>(args?: SelectSubset<T, execution_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Execution_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {execution_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Execution_statuses
     * const execution_status = await prisma.execution_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends execution_statusUpdateManyArgs>(args: SelectSubset<T, execution_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Execution_status.
     * @param {execution_statusUpsertArgs} args - Arguments to update or create a Execution_status.
     * @example
     * // Update or create a Execution_status
     * const execution_status = await prisma.execution_status.upsert({
     *   create: {
     *     // ... data to create a Execution_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Execution_status we want to update
     *   }
     * })
     */
    upsert<T extends execution_statusUpsertArgs>(args: SelectSubset<T, execution_statusUpsertArgs<ExtArgs>>): Prisma__execution_statusClient<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Execution_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {execution_statusCountArgs} args - Arguments to filter Execution_statuses to count.
     * @example
     * // Count the number of Execution_statuses
     * const count = await prisma.execution_status.count({
     *   where: {
     *     // ... the filter for the Execution_statuses we want to count
     *   }
     * })
    **/
    count<T extends execution_statusCountArgs>(
      args?: Subset<T, execution_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Execution_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Execution_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Execution_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Execution_statusAggregateArgs>(args: Subset<T, Execution_statusAggregateArgs>): Prisma.PrismaPromise<GetExecution_statusAggregateType<T>>

    /**
     * Group by Execution_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {execution_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends execution_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: execution_statusGroupByArgs['orderBy'] }
        : { orderBy?: execution_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, execution_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecution_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the execution_status model
   */
  readonly fields: execution_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for execution_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__execution_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executions<T extends executionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, executionsDefaultArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    databases<T extends databasesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, databasesDefaultArgs<ExtArgs>>): Prisma__databasesClient<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the execution_status model
   */
  interface execution_statusFieldRefs {
    readonly cd_execution_status: FieldRef<"execution_status", 'Int'>
    readonly cd_execution: FieldRef<"execution_status", 'Int'>
    readonly cd_database: FieldRef<"execution_status", 'Int'>
    readonly ds_status: FieldRef<"execution_status", 'execution_status_ds_status'>
    readonly ds_error_message: FieldRef<"execution_status", 'String'>
    readonly dt_executed: FieldRef<"execution_status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * execution_status findUnique
   */
  export type execution_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * Filter, which execution_status to fetch.
     */
    where: execution_statusWhereUniqueInput
  }

  /**
   * execution_status findUniqueOrThrow
   */
  export type execution_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * Filter, which execution_status to fetch.
     */
    where: execution_statusWhereUniqueInput
  }

  /**
   * execution_status findFirst
   */
  export type execution_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * Filter, which execution_status to fetch.
     */
    where?: execution_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of execution_statuses to fetch.
     */
    orderBy?: execution_statusOrderByWithRelationInput | execution_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for execution_statuses.
     */
    cursor?: execution_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` execution_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` execution_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of execution_statuses.
     */
    distinct?: Execution_statusScalarFieldEnum | Execution_statusScalarFieldEnum[]
  }

  /**
   * execution_status findFirstOrThrow
   */
  export type execution_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * Filter, which execution_status to fetch.
     */
    where?: execution_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of execution_statuses to fetch.
     */
    orderBy?: execution_statusOrderByWithRelationInput | execution_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for execution_statuses.
     */
    cursor?: execution_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` execution_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` execution_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of execution_statuses.
     */
    distinct?: Execution_statusScalarFieldEnum | Execution_statusScalarFieldEnum[]
  }

  /**
   * execution_status findMany
   */
  export type execution_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * Filter, which execution_statuses to fetch.
     */
    where?: execution_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of execution_statuses to fetch.
     */
    orderBy?: execution_statusOrderByWithRelationInput | execution_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing execution_statuses.
     */
    cursor?: execution_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` execution_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` execution_statuses.
     */
    skip?: number
    distinct?: Execution_statusScalarFieldEnum | Execution_statusScalarFieldEnum[]
  }

  /**
   * execution_status create
   */
  export type execution_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a execution_status.
     */
    data: XOR<execution_statusCreateInput, execution_statusUncheckedCreateInput>
  }

  /**
   * execution_status createMany
   */
  export type execution_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many execution_statuses.
     */
    data: execution_statusCreateManyInput | execution_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * execution_status update
   */
  export type execution_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a execution_status.
     */
    data: XOR<execution_statusUpdateInput, execution_statusUncheckedUpdateInput>
    /**
     * Choose, which execution_status to update.
     */
    where: execution_statusWhereUniqueInput
  }

  /**
   * execution_status updateMany
   */
  export type execution_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update execution_statuses.
     */
    data: XOR<execution_statusUpdateManyMutationInput, execution_statusUncheckedUpdateManyInput>
    /**
     * Filter which execution_statuses to update
     */
    where?: execution_statusWhereInput
    /**
     * Limit how many execution_statuses to update.
     */
    limit?: number
  }

  /**
   * execution_status upsert
   */
  export type execution_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the execution_status to update in case it exists.
     */
    where: execution_statusWhereUniqueInput
    /**
     * In case the execution_status found by the `where` argument doesn't exist, create a new execution_status with this data.
     */
    create: XOR<execution_statusCreateInput, execution_statusUncheckedCreateInput>
    /**
     * In case the execution_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<execution_statusUpdateInput, execution_statusUncheckedUpdateInput>
  }

  /**
   * execution_status delete
   */
  export type execution_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    /**
     * Filter which execution_status to delete.
     */
    where: execution_statusWhereUniqueInput
  }

  /**
   * execution_status deleteMany
   */
  export type execution_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which execution_statuses to delete
     */
    where?: execution_statusWhereInput
    /**
     * Limit how many execution_statuses to delete.
     */
    limit?: number
  }

  /**
   * execution_status without action
   */
  export type execution_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
  }


  /**
   * Model executions
   */

  export type AggregateExecutions = {
    _count: ExecutionsCountAggregateOutputType | null
    _avg: ExecutionsAvgAggregateOutputType | null
    _sum: ExecutionsSumAggregateOutputType | null
    _min: ExecutionsMinAggregateOutputType | null
    _max: ExecutionsMaxAggregateOutputType | null
  }

  export type ExecutionsAvgAggregateOutputType = {
    cd_execution: number | null
    cd_script: number | null
  }

  export type ExecutionsSumAggregateOutputType = {
    cd_execution: number | null
    cd_script: number | null
  }

  export type ExecutionsMinAggregateOutputType = {
    cd_execution: number | null
    cd_script: number | null
    ds_executed_by: string | null
    dt_executed: Date | null
    ds_status: $Enums.executions_ds_status | null
    ds_notes: string | null
  }

  export type ExecutionsMaxAggregateOutputType = {
    cd_execution: number | null
    cd_script: number | null
    ds_executed_by: string | null
    dt_executed: Date | null
    ds_status: $Enums.executions_ds_status | null
    ds_notes: string | null
  }

  export type ExecutionsCountAggregateOutputType = {
    cd_execution: number
    cd_script: number
    ds_executed_by: number
    dt_executed: number
    ds_status: number
    ds_notes: number
    _all: number
  }


  export type ExecutionsAvgAggregateInputType = {
    cd_execution?: true
    cd_script?: true
  }

  export type ExecutionsSumAggregateInputType = {
    cd_execution?: true
    cd_script?: true
  }

  export type ExecutionsMinAggregateInputType = {
    cd_execution?: true
    cd_script?: true
    ds_executed_by?: true
    dt_executed?: true
    ds_status?: true
    ds_notes?: true
  }

  export type ExecutionsMaxAggregateInputType = {
    cd_execution?: true
    cd_script?: true
    ds_executed_by?: true
    dt_executed?: true
    ds_status?: true
    ds_notes?: true
  }

  export type ExecutionsCountAggregateInputType = {
    cd_execution?: true
    cd_script?: true
    ds_executed_by?: true
    dt_executed?: true
    ds_status?: true
    ds_notes?: true
    _all?: true
  }

  export type ExecutionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which executions to aggregate.
     */
    where?: executionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of executions to fetch.
     */
    orderBy?: executionsOrderByWithRelationInput | executionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: executionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned executions
    **/
    _count?: true | ExecutionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionsMaxAggregateInputType
  }

  export type GetExecutionsAggregateType<T extends ExecutionsAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutions[P]>
      : GetScalarType<T[P], AggregateExecutions[P]>
  }




  export type executionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: executionsWhereInput
    orderBy?: executionsOrderByWithAggregationInput | executionsOrderByWithAggregationInput[]
    by: ExecutionsScalarFieldEnum[] | ExecutionsScalarFieldEnum
    having?: executionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionsCountAggregateInputType | true
    _avg?: ExecutionsAvgAggregateInputType
    _sum?: ExecutionsSumAggregateInputType
    _min?: ExecutionsMinAggregateInputType
    _max?: ExecutionsMaxAggregateInputType
  }

  export type ExecutionsGroupByOutputType = {
    cd_execution: number
    cd_script: number
    ds_executed_by: string
    dt_executed: Date | null
    ds_status: $Enums.executions_ds_status | null
    ds_notes: string | null
    _count: ExecutionsCountAggregateOutputType | null
    _avg: ExecutionsAvgAggregateOutputType | null
    _sum: ExecutionsSumAggregateOutputType | null
    _min: ExecutionsMinAggregateOutputType | null
    _max: ExecutionsMaxAggregateOutputType | null
  }

  type GetExecutionsGroupByPayload<T extends executionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionsGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionsGroupByOutputType[P]>
        }
      >
    >


  export type executionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cd_execution?: boolean
    cd_script?: boolean
    ds_executed_by?: boolean
    dt_executed?: boolean
    ds_status?: boolean
    ds_notes?: boolean
    execution_status?: boolean | executions$execution_statusArgs<ExtArgs>
    scripts?: boolean | scriptsDefaultArgs<ExtArgs>
    _count?: boolean | ExecutionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executions"]>



  export type executionsSelectScalar = {
    cd_execution?: boolean
    cd_script?: boolean
    ds_executed_by?: boolean
    dt_executed?: boolean
    ds_status?: boolean
    ds_notes?: boolean
  }

  export type executionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cd_execution" | "cd_script" | "ds_executed_by" | "dt_executed" | "ds_status" | "ds_notes", ExtArgs["result"]["executions"]>
  export type executionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution_status?: boolean | executions$execution_statusArgs<ExtArgs>
    scripts?: boolean | scriptsDefaultArgs<ExtArgs>
    _count?: boolean | ExecutionsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $executionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "executions"
    objects: {
      execution_status: Prisma.$execution_statusPayload<ExtArgs>[]
      scripts: Prisma.$scriptsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cd_execution: number
      cd_script: number
      ds_executed_by: string
      dt_executed: Date | null
      ds_status: $Enums.executions_ds_status | null
      ds_notes: string | null
    }, ExtArgs["result"]["executions"]>
    composites: {}
  }

  type executionsGetPayload<S extends boolean | null | undefined | executionsDefaultArgs> = $Result.GetResult<Prisma.$executionsPayload, S>

  type executionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<executionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionsCountAggregateInputType | true
    }

  export interface executionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['executions'], meta: { name: 'executions' } }
    /**
     * Find zero or one Executions that matches the filter.
     * @param {executionsFindUniqueArgs} args - Arguments to find a Executions
     * @example
     * // Get one Executions
     * const executions = await prisma.executions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends executionsFindUniqueArgs>(args: SelectSubset<T, executionsFindUniqueArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Executions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {executionsFindUniqueOrThrowArgs} args - Arguments to find a Executions
     * @example
     * // Get one Executions
     * const executions = await prisma.executions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends executionsFindUniqueOrThrowArgs>(args: SelectSubset<T, executionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {executionsFindFirstArgs} args - Arguments to find a Executions
     * @example
     * // Get one Executions
     * const executions = await prisma.executions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends executionsFindFirstArgs>(args?: SelectSubset<T, executionsFindFirstArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Executions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {executionsFindFirstOrThrowArgs} args - Arguments to find a Executions
     * @example
     * // Get one Executions
     * const executions = await prisma.executions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends executionsFindFirstOrThrowArgs>(args?: SelectSubset<T, executionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Executions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {executionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Executions
     * const executions = await prisma.executions.findMany()
     * 
     * // Get first 10 Executions
     * const executions = await prisma.executions.findMany({ take: 10 })
     * 
     * // Only select the `cd_execution`
     * const executionsWithCd_executionOnly = await prisma.executions.findMany({ select: { cd_execution: true } })
     * 
     */
    findMany<T extends executionsFindManyArgs>(args?: SelectSubset<T, executionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Executions.
     * @param {executionsCreateArgs} args - Arguments to create a Executions.
     * @example
     * // Create one Executions
     * const Executions = await prisma.executions.create({
     *   data: {
     *     // ... data to create a Executions
     *   }
     * })
     * 
     */
    create<T extends executionsCreateArgs>(args: SelectSubset<T, executionsCreateArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Executions.
     * @param {executionsCreateManyArgs} args - Arguments to create many Executions.
     * @example
     * // Create many Executions
     * const executions = await prisma.executions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends executionsCreateManyArgs>(args?: SelectSubset<T, executionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Executions.
     * @param {executionsDeleteArgs} args - Arguments to delete one Executions.
     * @example
     * // Delete one Executions
     * const Executions = await prisma.executions.delete({
     *   where: {
     *     // ... filter to delete one Executions
     *   }
     * })
     * 
     */
    delete<T extends executionsDeleteArgs>(args: SelectSubset<T, executionsDeleteArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Executions.
     * @param {executionsUpdateArgs} args - Arguments to update one Executions.
     * @example
     * // Update one Executions
     * const executions = await prisma.executions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends executionsUpdateArgs>(args: SelectSubset<T, executionsUpdateArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Executions.
     * @param {executionsDeleteManyArgs} args - Arguments to filter Executions to delete.
     * @example
     * // Delete a few Executions
     * const { count } = await prisma.executions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends executionsDeleteManyArgs>(args?: SelectSubset<T, executionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {executionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Executions
     * const executions = await prisma.executions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends executionsUpdateManyArgs>(args: SelectSubset<T, executionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Executions.
     * @param {executionsUpsertArgs} args - Arguments to update or create a Executions.
     * @example
     * // Update or create a Executions
     * const executions = await prisma.executions.upsert({
     *   create: {
     *     // ... data to create a Executions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Executions we want to update
     *   }
     * })
     */
    upsert<T extends executionsUpsertArgs>(args: SelectSubset<T, executionsUpsertArgs<ExtArgs>>): Prisma__executionsClient<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {executionsCountArgs} args - Arguments to filter Executions to count.
     * @example
     * // Count the number of Executions
     * const count = await prisma.executions.count({
     *   where: {
     *     // ... the filter for the Executions we want to count
     *   }
     * })
    **/
    count<T extends executionsCountArgs>(
      args?: Subset<T, executionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionsAggregateArgs>(args: Subset<T, ExecutionsAggregateArgs>): Prisma.PrismaPromise<GetExecutionsAggregateType<T>>

    /**
     * Group by Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {executionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends executionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: executionsGroupByArgs['orderBy'] }
        : { orderBy?: executionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, executionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the executions model
   */
  readonly fields: executionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for executions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__executionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    execution_status<T extends executions$execution_statusArgs<ExtArgs> = {}>(args?: Subset<T, executions$execution_statusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$execution_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scripts<T extends scriptsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, scriptsDefaultArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the executions model
   */
  interface executionsFieldRefs {
    readonly cd_execution: FieldRef<"executions", 'Int'>
    readonly cd_script: FieldRef<"executions", 'Int'>
    readonly ds_executed_by: FieldRef<"executions", 'String'>
    readonly dt_executed: FieldRef<"executions", 'DateTime'>
    readonly ds_status: FieldRef<"executions", 'executions_ds_status'>
    readonly ds_notes: FieldRef<"executions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * executions findUnique
   */
  export type executionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * Filter, which executions to fetch.
     */
    where: executionsWhereUniqueInput
  }

  /**
   * executions findUniqueOrThrow
   */
  export type executionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * Filter, which executions to fetch.
     */
    where: executionsWhereUniqueInput
  }

  /**
   * executions findFirst
   */
  export type executionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * Filter, which executions to fetch.
     */
    where?: executionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of executions to fetch.
     */
    orderBy?: executionsOrderByWithRelationInput | executionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for executions.
     */
    cursor?: executionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of executions.
     */
    distinct?: ExecutionsScalarFieldEnum | ExecutionsScalarFieldEnum[]
  }

  /**
   * executions findFirstOrThrow
   */
  export type executionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * Filter, which executions to fetch.
     */
    where?: executionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of executions to fetch.
     */
    orderBy?: executionsOrderByWithRelationInput | executionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for executions.
     */
    cursor?: executionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of executions.
     */
    distinct?: ExecutionsScalarFieldEnum | ExecutionsScalarFieldEnum[]
  }

  /**
   * executions findMany
   */
  export type executionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * Filter, which executions to fetch.
     */
    where?: executionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of executions to fetch.
     */
    orderBy?: executionsOrderByWithRelationInput | executionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing executions.
     */
    cursor?: executionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` executions.
     */
    skip?: number
    distinct?: ExecutionsScalarFieldEnum | ExecutionsScalarFieldEnum[]
  }

  /**
   * executions create
   */
  export type executionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * The data needed to create a executions.
     */
    data: XOR<executionsCreateInput, executionsUncheckedCreateInput>
  }

  /**
   * executions createMany
   */
  export type executionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many executions.
     */
    data: executionsCreateManyInput | executionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * executions update
   */
  export type executionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * The data needed to update a executions.
     */
    data: XOR<executionsUpdateInput, executionsUncheckedUpdateInput>
    /**
     * Choose, which executions to update.
     */
    where: executionsWhereUniqueInput
  }

  /**
   * executions updateMany
   */
  export type executionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update executions.
     */
    data: XOR<executionsUpdateManyMutationInput, executionsUncheckedUpdateManyInput>
    /**
     * Filter which executions to update
     */
    where?: executionsWhereInput
    /**
     * Limit how many executions to update.
     */
    limit?: number
  }

  /**
   * executions upsert
   */
  export type executionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * The filter to search for the executions to update in case it exists.
     */
    where: executionsWhereUniqueInput
    /**
     * In case the executions found by the `where` argument doesn't exist, create a new executions with this data.
     */
    create: XOR<executionsCreateInput, executionsUncheckedCreateInput>
    /**
     * In case the executions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<executionsUpdateInput, executionsUncheckedUpdateInput>
  }

  /**
   * executions delete
   */
  export type executionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    /**
     * Filter which executions to delete.
     */
    where: executionsWhereUniqueInput
  }

  /**
   * executions deleteMany
   */
  export type executionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which executions to delete
     */
    where?: executionsWhereInput
    /**
     * Limit how many executions to delete.
     */
    limit?: number
  }

  /**
   * executions.execution_status
   */
  export type executions$execution_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the execution_status
     */
    select?: execution_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the execution_status
     */
    omit?: execution_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: execution_statusInclude<ExtArgs> | null
    where?: execution_statusWhereInput
    orderBy?: execution_statusOrderByWithRelationInput | execution_statusOrderByWithRelationInput[]
    cursor?: execution_statusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Execution_statusScalarFieldEnum | Execution_statusScalarFieldEnum[]
  }

  /**
   * executions without action
   */
  export type executionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
  }


  /**
   * Model scripts
   */

  export type AggregateScripts = {
    _count: ScriptsCountAggregateOutputType | null
    _avg: ScriptsAvgAggregateOutputType | null
    _sum: ScriptsSumAggregateOutputType | null
    _min: ScriptsMinAggregateOutputType | null
    _max: ScriptsMaxAggregateOutputType | null
  }

  export type ScriptsAvgAggregateOutputType = {
    cd_script: number | null
  }

  export type ScriptsSumAggregateOutputType = {
    cd_script: number | null
  }

  export type ScriptsMinAggregateOutputType = {
    cd_script: number | null
    ds_name: string | null
    ds_content: string | null
    ds_created_by: string | null
    ds_task: string | null
    dt_created: Date | null
  }

  export type ScriptsMaxAggregateOutputType = {
    cd_script: number | null
    ds_name: string | null
    ds_content: string | null
    ds_created_by: string | null
    ds_task: string | null
    dt_created: Date | null
  }

  export type ScriptsCountAggregateOutputType = {
    cd_script: number
    ds_name: number
    ds_content: number
    ds_created_by: number
    ds_task: number
    dt_created: number
    _all: number
  }


  export type ScriptsAvgAggregateInputType = {
    cd_script?: true
  }

  export type ScriptsSumAggregateInputType = {
    cd_script?: true
  }

  export type ScriptsMinAggregateInputType = {
    cd_script?: true
    ds_name?: true
    ds_content?: true
    ds_created_by?: true
    ds_task?: true
    dt_created?: true
  }

  export type ScriptsMaxAggregateInputType = {
    cd_script?: true
    ds_name?: true
    ds_content?: true
    ds_created_by?: true
    ds_task?: true
    dt_created?: true
  }

  export type ScriptsCountAggregateInputType = {
    cd_script?: true
    ds_name?: true
    ds_content?: true
    ds_created_by?: true
    ds_task?: true
    dt_created?: true
    _all?: true
  }

  export type ScriptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scripts to aggregate.
     */
    where?: scriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scripts to fetch.
     */
    orderBy?: scriptsOrderByWithRelationInput | scriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scripts
    **/
    _count?: true | ScriptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScriptsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScriptsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScriptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScriptsMaxAggregateInputType
  }

  export type GetScriptsAggregateType<T extends ScriptsAggregateArgs> = {
        [P in keyof T & keyof AggregateScripts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScripts[P]>
      : GetScalarType<T[P], AggregateScripts[P]>
  }




  export type scriptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scriptsWhereInput
    orderBy?: scriptsOrderByWithAggregationInput | scriptsOrderByWithAggregationInput[]
    by: ScriptsScalarFieldEnum[] | ScriptsScalarFieldEnum
    having?: scriptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScriptsCountAggregateInputType | true
    _avg?: ScriptsAvgAggregateInputType
    _sum?: ScriptsSumAggregateInputType
    _min?: ScriptsMinAggregateInputType
    _max?: ScriptsMaxAggregateInputType
  }

  export type ScriptsGroupByOutputType = {
    cd_script: number
    ds_name: string
    ds_content: string
    ds_created_by: string
    ds_task: string
    dt_created: Date | null
    _count: ScriptsCountAggregateOutputType | null
    _avg: ScriptsAvgAggregateOutputType | null
    _sum: ScriptsSumAggregateOutputType | null
    _min: ScriptsMinAggregateOutputType | null
    _max: ScriptsMaxAggregateOutputType | null
  }

  type GetScriptsGroupByPayload<T extends scriptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScriptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScriptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScriptsGroupByOutputType[P]>
            : GetScalarType<T[P], ScriptsGroupByOutputType[P]>
        }
      >
    >


  export type scriptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cd_script?: boolean
    ds_name?: boolean
    ds_content?: boolean
    ds_created_by?: boolean
    ds_task?: boolean
    dt_created?: boolean
    executions?: boolean | scripts$executionsArgs<ExtArgs>
    _count?: boolean | ScriptsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scripts"]>



  export type scriptsSelectScalar = {
    cd_script?: boolean
    ds_name?: boolean
    ds_content?: boolean
    ds_created_by?: boolean
    ds_task?: boolean
    dt_created?: boolean
  }

  export type scriptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cd_script" | "ds_name" | "ds_content" | "ds_created_by" | "ds_task" | "dt_created", ExtArgs["result"]["scripts"]>
  export type scriptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | scripts$executionsArgs<ExtArgs>
    _count?: boolean | ScriptsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $scriptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "scripts"
    objects: {
      executions: Prisma.$executionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cd_script: number
      ds_name: string
      ds_content: string
      ds_created_by: string
      ds_task: string
      dt_created: Date | null
    }, ExtArgs["result"]["scripts"]>
    composites: {}
  }

  type scriptsGetPayload<S extends boolean | null | undefined | scriptsDefaultArgs> = $Result.GetResult<Prisma.$scriptsPayload, S>

  type scriptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<scriptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScriptsCountAggregateInputType | true
    }

  export interface scriptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['scripts'], meta: { name: 'scripts' } }
    /**
     * Find zero or one Scripts that matches the filter.
     * @param {scriptsFindUniqueArgs} args - Arguments to find a Scripts
     * @example
     * // Get one Scripts
     * const scripts = await prisma.scripts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scriptsFindUniqueArgs>(args: SelectSubset<T, scriptsFindUniqueArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scripts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {scriptsFindUniqueOrThrowArgs} args - Arguments to find a Scripts
     * @example
     * // Get one Scripts
     * const scripts = await prisma.scripts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scriptsFindUniqueOrThrowArgs>(args: SelectSubset<T, scriptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scriptsFindFirstArgs} args - Arguments to find a Scripts
     * @example
     * // Get one Scripts
     * const scripts = await prisma.scripts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scriptsFindFirstArgs>(args?: SelectSubset<T, scriptsFindFirstArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scripts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scriptsFindFirstOrThrowArgs} args - Arguments to find a Scripts
     * @example
     * // Get one Scripts
     * const scripts = await prisma.scripts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scriptsFindFirstOrThrowArgs>(args?: SelectSubset<T, scriptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scripts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scriptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scripts
     * const scripts = await prisma.scripts.findMany()
     * 
     * // Get first 10 Scripts
     * const scripts = await prisma.scripts.findMany({ take: 10 })
     * 
     * // Only select the `cd_script`
     * const scriptsWithCd_scriptOnly = await prisma.scripts.findMany({ select: { cd_script: true } })
     * 
     */
    findMany<T extends scriptsFindManyArgs>(args?: SelectSubset<T, scriptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scripts.
     * @param {scriptsCreateArgs} args - Arguments to create a Scripts.
     * @example
     * // Create one Scripts
     * const Scripts = await prisma.scripts.create({
     *   data: {
     *     // ... data to create a Scripts
     *   }
     * })
     * 
     */
    create<T extends scriptsCreateArgs>(args: SelectSubset<T, scriptsCreateArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scripts.
     * @param {scriptsCreateManyArgs} args - Arguments to create many Scripts.
     * @example
     * // Create many Scripts
     * const scripts = await prisma.scripts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scriptsCreateManyArgs>(args?: SelectSubset<T, scriptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scripts.
     * @param {scriptsDeleteArgs} args - Arguments to delete one Scripts.
     * @example
     * // Delete one Scripts
     * const Scripts = await prisma.scripts.delete({
     *   where: {
     *     // ... filter to delete one Scripts
     *   }
     * })
     * 
     */
    delete<T extends scriptsDeleteArgs>(args: SelectSubset<T, scriptsDeleteArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scripts.
     * @param {scriptsUpdateArgs} args - Arguments to update one Scripts.
     * @example
     * // Update one Scripts
     * const scripts = await prisma.scripts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scriptsUpdateArgs>(args: SelectSubset<T, scriptsUpdateArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scripts.
     * @param {scriptsDeleteManyArgs} args - Arguments to filter Scripts to delete.
     * @example
     * // Delete a few Scripts
     * const { count } = await prisma.scripts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scriptsDeleteManyArgs>(args?: SelectSubset<T, scriptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scriptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scripts
     * const scripts = await prisma.scripts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scriptsUpdateManyArgs>(args: SelectSubset<T, scriptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scripts.
     * @param {scriptsUpsertArgs} args - Arguments to update or create a Scripts.
     * @example
     * // Update or create a Scripts
     * const scripts = await prisma.scripts.upsert({
     *   create: {
     *     // ... data to create a Scripts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scripts we want to update
     *   }
     * })
     */
    upsert<T extends scriptsUpsertArgs>(args: SelectSubset<T, scriptsUpsertArgs<ExtArgs>>): Prisma__scriptsClient<$Result.GetResult<Prisma.$scriptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scriptsCountArgs} args - Arguments to filter Scripts to count.
     * @example
     * // Count the number of Scripts
     * const count = await prisma.scripts.count({
     *   where: {
     *     // ... the filter for the Scripts we want to count
     *   }
     * })
    **/
    count<T extends scriptsCountArgs>(
      args?: Subset<T, scriptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScriptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScriptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScriptsAggregateArgs>(args: Subset<T, ScriptsAggregateArgs>): Prisma.PrismaPromise<GetScriptsAggregateType<T>>

    /**
     * Group by Scripts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scriptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scriptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scriptsGroupByArgs['orderBy'] }
        : { orderBy?: scriptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scriptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScriptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the scripts model
   */
  readonly fields: scriptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for scripts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scriptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executions<T extends scripts$executionsArgs<ExtArgs> = {}>(args?: Subset<T, scripts$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$executionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the scripts model
   */
  interface scriptsFieldRefs {
    readonly cd_script: FieldRef<"scripts", 'Int'>
    readonly ds_name: FieldRef<"scripts", 'String'>
    readonly ds_content: FieldRef<"scripts", 'String'>
    readonly ds_created_by: FieldRef<"scripts", 'String'>
    readonly ds_task: FieldRef<"scripts", 'String'>
    readonly dt_created: FieldRef<"scripts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * scripts findUnique
   */
  export type scriptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * Filter, which scripts to fetch.
     */
    where: scriptsWhereUniqueInput
  }

  /**
   * scripts findUniqueOrThrow
   */
  export type scriptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * Filter, which scripts to fetch.
     */
    where: scriptsWhereUniqueInput
  }

  /**
   * scripts findFirst
   */
  export type scriptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * Filter, which scripts to fetch.
     */
    where?: scriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scripts to fetch.
     */
    orderBy?: scriptsOrderByWithRelationInput | scriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scripts.
     */
    cursor?: scriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scripts.
     */
    distinct?: ScriptsScalarFieldEnum | ScriptsScalarFieldEnum[]
  }

  /**
   * scripts findFirstOrThrow
   */
  export type scriptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * Filter, which scripts to fetch.
     */
    where?: scriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scripts to fetch.
     */
    orderBy?: scriptsOrderByWithRelationInput | scriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scripts.
     */
    cursor?: scriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scripts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scripts.
     */
    distinct?: ScriptsScalarFieldEnum | ScriptsScalarFieldEnum[]
  }

  /**
   * scripts findMany
   */
  export type scriptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * Filter, which scripts to fetch.
     */
    where?: scriptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scripts to fetch.
     */
    orderBy?: scriptsOrderByWithRelationInput | scriptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scripts.
     */
    cursor?: scriptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scripts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scripts.
     */
    skip?: number
    distinct?: ScriptsScalarFieldEnum | ScriptsScalarFieldEnum[]
  }

  /**
   * scripts create
   */
  export type scriptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * The data needed to create a scripts.
     */
    data: XOR<scriptsCreateInput, scriptsUncheckedCreateInput>
  }

  /**
   * scripts createMany
   */
  export type scriptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many scripts.
     */
    data: scriptsCreateManyInput | scriptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * scripts update
   */
  export type scriptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * The data needed to update a scripts.
     */
    data: XOR<scriptsUpdateInput, scriptsUncheckedUpdateInput>
    /**
     * Choose, which scripts to update.
     */
    where: scriptsWhereUniqueInput
  }

  /**
   * scripts updateMany
   */
  export type scriptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update scripts.
     */
    data: XOR<scriptsUpdateManyMutationInput, scriptsUncheckedUpdateManyInput>
    /**
     * Filter which scripts to update
     */
    where?: scriptsWhereInput
    /**
     * Limit how many scripts to update.
     */
    limit?: number
  }

  /**
   * scripts upsert
   */
  export type scriptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * The filter to search for the scripts to update in case it exists.
     */
    where: scriptsWhereUniqueInput
    /**
     * In case the scripts found by the `where` argument doesn't exist, create a new scripts with this data.
     */
    create: XOR<scriptsCreateInput, scriptsUncheckedCreateInput>
    /**
     * In case the scripts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scriptsUpdateInput, scriptsUncheckedUpdateInput>
  }

  /**
   * scripts delete
   */
  export type scriptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
    /**
     * Filter which scripts to delete.
     */
    where: scriptsWhereUniqueInput
  }

  /**
   * scripts deleteMany
   */
  export type scriptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scripts to delete
     */
    where?: scriptsWhereInput
    /**
     * Limit how many scripts to delete.
     */
    limit?: number
  }

  /**
   * scripts.executions
   */
  export type scripts$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the executions
     */
    select?: executionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the executions
     */
    omit?: executionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: executionsInclude<ExtArgs> | null
    where?: executionsWhereInput
    orderBy?: executionsOrderByWithRelationInput | executionsOrderByWithRelationInput[]
    cursor?: executionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionsScalarFieldEnum | ExecutionsScalarFieldEnum[]
  }

  /**
   * scripts without action
   */
  export type scriptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scripts
     */
    select?: scriptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scripts
     */
    omit?: scriptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scriptsInclude<ExtArgs> | null
  }


  /**
   * Model systems
   */

  export type AggregateSystems = {
    _count: SystemsCountAggregateOutputType | null
    _avg: SystemsAvgAggregateOutputType | null
    _sum: SystemsSumAggregateOutputType | null
    _min: SystemsMinAggregateOutputType | null
    _max: SystemsMaxAggregateOutputType | null
  }

  export type SystemsAvgAggregateOutputType = {
    cd_system: number | null
  }

  export type SystemsSumAggregateOutputType = {
    cd_system: number | null
  }

  export type SystemsMinAggregateOutputType = {
    cd_system: number | null
    ds_name: string | null
    dt_created: Date | null
  }

  export type SystemsMaxAggregateOutputType = {
    cd_system: number | null
    ds_name: string | null
    dt_created: Date | null
  }

  export type SystemsCountAggregateOutputType = {
    cd_system: number
    ds_name: number
    dt_created: number
    _all: number
  }


  export type SystemsAvgAggregateInputType = {
    cd_system?: true
  }

  export type SystemsSumAggregateInputType = {
    cd_system?: true
  }

  export type SystemsMinAggregateInputType = {
    cd_system?: true
    ds_name?: true
    dt_created?: true
  }

  export type SystemsMaxAggregateInputType = {
    cd_system?: true
    ds_name?: true
    dt_created?: true
  }

  export type SystemsCountAggregateInputType = {
    cd_system?: true
    ds_name?: true
    dt_created?: true
    _all?: true
  }

  export type SystemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which systems to aggregate.
     */
    where?: systemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of systems to fetch.
     */
    orderBy?: systemsOrderByWithRelationInput | systemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: systemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned systems
    **/
    _count?: true | SystemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemsMaxAggregateInputType
  }

  export type GetSystemsAggregateType<T extends SystemsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystems[P]>
      : GetScalarType<T[P], AggregateSystems[P]>
  }




  export type systemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: systemsWhereInput
    orderBy?: systemsOrderByWithAggregationInput | systemsOrderByWithAggregationInput[]
    by: SystemsScalarFieldEnum[] | SystemsScalarFieldEnum
    having?: systemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemsCountAggregateInputType | true
    _avg?: SystemsAvgAggregateInputType
    _sum?: SystemsSumAggregateInputType
    _min?: SystemsMinAggregateInputType
    _max?: SystemsMaxAggregateInputType
  }

  export type SystemsGroupByOutputType = {
    cd_system: number
    ds_name: string
    dt_created: Date | null
    _count: SystemsCountAggregateOutputType | null
    _avg: SystemsAvgAggregateOutputType | null
    _sum: SystemsSumAggregateOutputType | null
    _min: SystemsMinAggregateOutputType | null
    _max: SystemsMaxAggregateOutputType | null
  }

  type GetSystemsGroupByPayload<T extends systemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemsGroupByOutputType[P]>
        }
      >
    >


  export type systemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cd_system?: boolean
    ds_name?: boolean
    dt_created?: boolean
    databases?: boolean | systems$databasesArgs<ExtArgs>
    _count?: boolean | SystemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systems"]>



  export type systemsSelectScalar = {
    cd_system?: boolean
    ds_name?: boolean
    dt_created?: boolean
  }

  export type systemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cd_system" | "ds_name" | "dt_created", ExtArgs["result"]["systems"]>
  export type systemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    databases?: boolean | systems$databasesArgs<ExtArgs>
    _count?: boolean | SystemsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $systemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "systems"
    objects: {
      databases: Prisma.$databasesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cd_system: number
      ds_name: string
      dt_created: Date | null
    }, ExtArgs["result"]["systems"]>
    composites: {}
  }

  type systemsGetPayload<S extends boolean | null | undefined | systemsDefaultArgs> = $Result.GetResult<Prisma.$systemsPayload, S>

  type systemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<systemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemsCountAggregateInputType | true
    }

  export interface systemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['systems'], meta: { name: 'systems' } }
    /**
     * Find zero or one Systems that matches the filter.
     * @param {systemsFindUniqueArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends systemsFindUniqueArgs>(args: SelectSubset<T, systemsFindUniqueArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Systems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {systemsFindUniqueOrThrowArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends systemsFindUniqueOrThrowArgs>(args: SelectSubset<T, systemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {systemsFindFirstArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends systemsFindFirstArgs>(args?: SelectSubset<T, systemsFindFirstArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Systems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {systemsFindFirstOrThrowArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends systemsFindFirstOrThrowArgs>(args?: SelectSubset<T, systemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {systemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Systems
     * const systems = await prisma.systems.findMany()
     * 
     * // Get first 10 Systems
     * const systems = await prisma.systems.findMany({ take: 10 })
     * 
     * // Only select the `cd_system`
     * const systemsWithCd_systemOnly = await prisma.systems.findMany({ select: { cd_system: true } })
     * 
     */
    findMany<T extends systemsFindManyArgs>(args?: SelectSubset<T, systemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Systems.
     * @param {systemsCreateArgs} args - Arguments to create a Systems.
     * @example
     * // Create one Systems
     * const Systems = await prisma.systems.create({
     *   data: {
     *     // ... data to create a Systems
     *   }
     * })
     * 
     */
    create<T extends systemsCreateArgs>(args: SelectSubset<T, systemsCreateArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Systems.
     * @param {systemsCreateManyArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const systems = await prisma.systems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends systemsCreateManyArgs>(args?: SelectSubset<T, systemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Systems.
     * @param {systemsDeleteArgs} args - Arguments to delete one Systems.
     * @example
     * // Delete one Systems
     * const Systems = await prisma.systems.delete({
     *   where: {
     *     // ... filter to delete one Systems
     *   }
     * })
     * 
     */
    delete<T extends systemsDeleteArgs>(args: SelectSubset<T, systemsDeleteArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Systems.
     * @param {systemsUpdateArgs} args - Arguments to update one Systems.
     * @example
     * // Update one Systems
     * const systems = await prisma.systems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends systemsUpdateArgs>(args: SelectSubset<T, systemsUpdateArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Systems.
     * @param {systemsDeleteManyArgs} args - Arguments to filter Systems to delete.
     * @example
     * // Delete a few Systems
     * const { count } = await prisma.systems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends systemsDeleteManyArgs>(args?: SelectSubset<T, systemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {systemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Systems
     * const systems = await prisma.systems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends systemsUpdateManyArgs>(args: SelectSubset<T, systemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Systems.
     * @param {systemsUpsertArgs} args - Arguments to update or create a Systems.
     * @example
     * // Update or create a Systems
     * const systems = await prisma.systems.upsert({
     *   create: {
     *     // ... data to create a Systems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Systems we want to update
     *   }
     * })
     */
    upsert<T extends systemsUpsertArgs>(args: SelectSubset<T, systemsUpsertArgs<ExtArgs>>): Prisma__systemsClient<$Result.GetResult<Prisma.$systemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {systemsCountArgs} args - Arguments to filter Systems to count.
     * @example
     * // Count the number of Systems
     * const count = await prisma.systems.count({
     *   where: {
     *     // ... the filter for the Systems we want to count
     *   }
     * })
    **/
    count<T extends systemsCountArgs>(
      args?: Subset<T, systemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemsAggregateArgs>(args: Subset<T, SystemsAggregateArgs>): Prisma.PrismaPromise<GetSystemsAggregateType<T>>

    /**
     * Group by Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {systemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends systemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: systemsGroupByArgs['orderBy'] }
        : { orderBy?: systemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, systemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the systems model
   */
  readonly fields: systemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for systems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__systemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    databases<T extends systems$databasesArgs<ExtArgs> = {}>(args?: Subset<T, systems$databasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$databasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the systems model
   */
  interface systemsFieldRefs {
    readonly cd_system: FieldRef<"systems", 'Int'>
    readonly ds_name: FieldRef<"systems", 'String'>
    readonly dt_created: FieldRef<"systems", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * systems findUnique
   */
  export type systemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * Filter, which systems to fetch.
     */
    where: systemsWhereUniqueInput
  }

  /**
   * systems findUniqueOrThrow
   */
  export type systemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * Filter, which systems to fetch.
     */
    where: systemsWhereUniqueInput
  }

  /**
   * systems findFirst
   */
  export type systemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * Filter, which systems to fetch.
     */
    where?: systemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of systems to fetch.
     */
    orderBy?: systemsOrderByWithRelationInput | systemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for systems.
     */
    cursor?: systemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of systems.
     */
    distinct?: SystemsScalarFieldEnum | SystemsScalarFieldEnum[]
  }

  /**
   * systems findFirstOrThrow
   */
  export type systemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * Filter, which systems to fetch.
     */
    where?: systemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of systems to fetch.
     */
    orderBy?: systemsOrderByWithRelationInput | systemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for systems.
     */
    cursor?: systemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of systems.
     */
    distinct?: SystemsScalarFieldEnum | SystemsScalarFieldEnum[]
  }

  /**
   * systems findMany
   */
  export type systemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * Filter, which systems to fetch.
     */
    where?: systemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of systems to fetch.
     */
    orderBy?: systemsOrderByWithRelationInput | systemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing systems.
     */
    cursor?: systemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` systems.
     */
    skip?: number
    distinct?: SystemsScalarFieldEnum | SystemsScalarFieldEnum[]
  }

  /**
   * systems create
   */
  export type systemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * The data needed to create a systems.
     */
    data: XOR<systemsCreateInput, systemsUncheckedCreateInput>
  }

  /**
   * systems createMany
   */
  export type systemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many systems.
     */
    data: systemsCreateManyInput | systemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * systems update
   */
  export type systemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * The data needed to update a systems.
     */
    data: XOR<systemsUpdateInput, systemsUncheckedUpdateInput>
    /**
     * Choose, which systems to update.
     */
    where: systemsWhereUniqueInput
  }

  /**
   * systems updateMany
   */
  export type systemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update systems.
     */
    data: XOR<systemsUpdateManyMutationInput, systemsUncheckedUpdateManyInput>
    /**
     * Filter which systems to update
     */
    where?: systemsWhereInput
    /**
     * Limit how many systems to update.
     */
    limit?: number
  }

  /**
   * systems upsert
   */
  export type systemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * The filter to search for the systems to update in case it exists.
     */
    where: systemsWhereUniqueInput
    /**
     * In case the systems found by the `where` argument doesn't exist, create a new systems with this data.
     */
    create: XOR<systemsCreateInput, systemsUncheckedCreateInput>
    /**
     * In case the systems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<systemsUpdateInput, systemsUncheckedUpdateInput>
  }

  /**
   * systems delete
   */
  export type systemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
    /**
     * Filter which systems to delete.
     */
    where: systemsWhereUniqueInput
  }

  /**
   * systems deleteMany
   */
  export type systemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which systems to delete
     */
    where?: systemsWhereInput
    /**
     * Limit how many systems to delete.
     */
    limit?: number
  }

  /**
   * systems.databases
   */
  export type systems$databasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the databases
     */
    select?: databasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the databases
     */
    omit?: databasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: databasesInclude<ExtArgs> | null
    where?: databasesWhereInput
    orderBy?: databasesOrderByWithRelationInput | databasesOrderByWithRelationInput[]
    cursor?: databasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatabasesScalarFieldEnum | DatabasesScalarFieldEnum[]
  }

  /**
   * systems without action
   */
  export type systemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the systems
     */
    select?: systemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the systems
     */
    omit?: systemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: systemsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DatabasesScalarFieldEnum: {
    cd_database: 'cd_database',
    cd_system: 'cd_system',
    cd_environment: 'cd_environment',
    ds_name: 'ds_name',
    dt_created: 'dt_created'
  };

  export type DatabasesScalarFieldEnum = (typeof DatabasesScalarFieldEnum)[keyof typeof DatabasesScalarFieldEnum]


  export const EnvironmentsScalarFieldEnum: {
    cd_environment: 'cd_environment',
    ds_name: 'ds_name',
    dt_created: 'dt_created'
  };

  export type EnvironmentsScalarFieldEnum = (typeof EnvironmentsScalarFieldEnum)[keyof typeof EnvironmentsScalarFieldEnum]


  export const Execution_statusScalarFieldEnum: {
    cd_execution_status: 'cd_execution_status',
    cd_execution: 'cd_execution',
    cd_database: 'cd_database',
    ds_status: 'ds_status',
    ds_error_message: 'ds_error_message',
    dt_executed: 'dt_executed'
  };

  export type Execution_statusScalarFieldEnum = (typeof Execution_statusScalarFieldEnum)[keyof typeof Execution_statusScalarFieldEnum]


  export const ExecutionsScalarFieldEnum: {
    cd_execution: 'cd_execution',
    cd_script: 'cd_script',
    ds_executed_by: 'ds_executed_by',
    dt_executed: 'dt_executed',
    ds_status: 'ds_status',
    ds_notes: 'ds_notes'
  };

  export type ExecutionsScalarFieldEnum = (typeof ExecutionsScalarFieldEnum)[keyof typeof ExecutionsScalarFieldEnum]


  export const ScriptsScalarFieldEnum: {
    cd_script: 'cd_script',
    ds_name: 'ds_name',
    ds_content: 'ds_content',
    ds_created_by: 'ds_created_by',
    ds_task: 'ds_task',
    dt_created: 'dt_created'
  };

  export type ScriptsScalarFieldEnum = (typeof ScriptsScalarFieldEnum)[keyof typeof ScriptsScalarFieldEnum]


  export const SystemsScalarFieldEnum: {
    cd_system: 'cd_system',
    ds_name: 'ds_name',
    dt_created: 'dt_created'
  };

  export type SystemsScalarFieldEnum = (typeof SystemsScalarFieldEnum)[keyof typeof SystemsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const databasesOrderByRelevanceFieldEnum: {
    ds_name: 'ds_name'
  };

  export type databasesOrderByRelevanceFieldEnum = (typeof databasesOrderByRelevanceFieldEnum)[keyof typeof databasesOrderByRelevanceFieldEnum]


  export const environmentsOrderByRelevanceFieldEnum: {
    ds_name: 'ds_name'
  };

  export type environmentsOrderByRelevanceFieldEnum = (typeof environmentsOrderByRelevanceFieldEnum)[keyof typeof environmentsOrderByRelevanceFieldEnum]


  export const execution_statusOrderByRelevanceFieldEnum: {
    ds_error_message: 'ds_error_message'
  };

  export type execution_statusOrderByRelevanceFieldEnum = (typeof execution_statusOrderByRelevanceFieldEnum)[keyof typeof execution_statusOrderByRelevanceFieldEnum]


  export const executionsOrderByRelevanceFieldEnum: {
    ds_executed_by: 'ds_executed_by',
    ds_notes: 'ds_notes'
  };

  export type executionsOrderByRelevanceFieldEnum = (typeof executionsOrderByRelevanceFieldEnum)[keyof typeof executionsOrderByRelevanceFieldEnum]


  export const scriptsOrderByRelevanceFieldEnum: {
    ds_name: 'ds_name',
    ds_content: 'ds_content',
    ds_created_by: 'ds_created_by',
    ds_task: 'ds_task'
  };

  export type scriptsOrderByRelevanceFieldEnum = (typeof scriptsOrderByRelevanceFieldEnum)[keyof typeof scriptsOrderByRelevanceFieldEnum]


  export const systemsOrderByRelevanceFieldEnum: {
    ds_name: 'ds_name'
  };

  export type systemsOrderByRelevanceFieldEnum = (typeof systemsOrderByRelevanceFieldEnum)[keyof typeof systemsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'execution_status_ds_status'
   */
  export type Enumexecution_status_ds_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'execution_status_ds_status'>
    


  /**
   * Reference to a field of type 'executions_ds_status'
   */
  export type Enumexecutions_ds_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'executions_ds_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type databasesWhereInput = {
    AND?: databasesWhereInput | databasesWhereInput[]
    OR?: databasesWhereInput[]
    NOT?: databasesWhereInput | databasesWhereInput[]
    cd_database?: IntFilter<"databases"> | number
    cd_system?: IntFilter<"databases"> | number
    cd_environment?: IntFilter<"databases"> | number
    ds_name?: StringFilter<"databases"> | string
    dt_created?: DateTimeNullableFilter<"databases"> | Date | string | null
    systems?: XOR<SystemsScalarRelationFilter, systemsWhereInput>
    environments?: XOR<EnvironmentsScalarRelationFilter, environmentsWhereInput>
    execution_status?: Execution_statusListRelationFilter
  }

  export type databasesOrderByWithRelationInput = {
    cd_database?: SortOrder
    cd_system?: SortOrder
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    systems?: systemsOrderByWithRelationInput
    environments?: environmentsOrderByWithRelationInput
    execution_status?: execution_statusOrderByRelationAggregateInput
    _relevance?: databasesOrderByRelevanceInput
  }

  export type databasesWhereUniqueInput = Prisma.AtLeast<{
    cd_database?: number
    cd_system_cd_environment_ds_name?: databasesCd_systemCd_environmentDs_nameCompoundUniqueInput
    AND?: databasesWhereInput | databasesWhereInput[]
    OR?: databasesWhereInput[]
    NOT?: databasesWhereInput | databasesWhereInput[]
    cd_system?: IntFilter<"databases"> | number
    cd_environment?: IntFilter<"databases"> | number
    ds_name?: StringFilter<"databases"> | string
    dt_created?: DateTimeNullableFilter<"databases"> | Date | string | null
    systems?: XOR<SystemsScalarRelationFilter, systemsWhereInput>
    environments?: XOR<EnvironmentsScalarRelationFilter, environmentsWhereInput>
    execution_status?: Execution_statusListRelationFilter
  }, "cd_database" | "cd_system_cd_environment_ds_name">

  export type databasesOrderByWithAggregationInput = {
    cd_database?: SortOrder
    cd_system?: SortOrder
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    _count?: databasesCountOrderByAggregateInput
    _avg?: databasesAvgOrderByAggregateInput
    _max?: databasesMaxOrderByAggregateInput
    _min?: databasesMinOrderByAggregateInput
    _sum?: databasesSumOrderByAggregateInput
  }

  export type databasesScalarWhereWithAggregatesInput = {
    AND?: databasesScalarWhereWithAggregatesInput | databasesScalarWhereWithAggregatesInput[]
    OR?: databasesScalarWhereWithAggregatesInput[]
    NOT?: databasesScalarWhereWithAggregatesInput | databasesScalarWhereWithAggregatesInput[]
    cd_database?: IntWithAggregatesFilter<"databases"> | number
    cd_system?: IntWithAggregatesFilter<"databases"> | number
    cd_environment?: IntWithAggregatesFilter<"databases"> | number
    ds_name?: StringWithAggregatesFilter<"databases"> | string
    dt_created?: DateTimeNullableWithAggregatesFilter<"databases"> | Date | string | null
  }

  export type environmentsWhereInput = {
    AND?: environmentsWhereInput | environmentsWhereInput[]
    OR?: environmentsWhereInput[]
    NOT?: environmentsWhereInput | environmentsWhereInput[]
    cd_environment?: IntFilter<"environments"> | number
    ds_name?: StringFilter<"environments"> | string
    dt_created?: DateTimeNullableFilter<"environments"> | Date | string | null
    databases?: DatabasesListRelationFilter
  }

  export type environmentsOrderByWithRelationInput = {
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    databases?: databasesOrderByRelationAggregateInput
    _relevance?: environmentsOrderByRelevanceInput
  }

  export type environmentsWhereUniqueInput = Prisma.AtLeast<{
    cd_environment?: number
    ds_name?: string
    AND?: environmentsWhereInput | environmentsWhereInput[]
    OR?: environmentsWhereInput[]
    NOT?: environmentsWhereInput | environmentsWhereInput[]
    dt_created?: DateTimeNullableFilter<"environments"> | Date | string | null
    databases?: DatabasesListRelationFilter
  }, "cd_environment" | "ds_name">

  export type environmentsOrderByWithAggregationInput = {
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    _count?: environmentsCountOrderByAggregateInput
    _avg?: environmentsAvgOrderByAggregateInput
    _max?: environmentsMaxOrderByAggregateInput
    _min?: environmentsMinOrderByAggregateInput
    _sum?: environmentsSumOrderByAggregateInput
  }

  export type environmentsScalarWhereWithAggregatesInput = {
    AND?: environmentsScalarWhereWithAggregatesInput | environmentsScalarWhereWithAggregatesInput[]
    OR?: environmentsScalarWhereWithAggregatesInput[]
    NOT?: environmentsScalarWhereWithAggregatesInput | environmentsScalarWhereWithAggregatesInput[]
    cd_environment?: IntWithAggregatesFilter<"environments"> | number
    ds_name?: StringWithAggregatesFilter<"environments"> | string
    dt_created?: DateTimeNullableWithAggregatesFilter<"environments"> | Date | string | null
  }

  export type execution_statusWhereInput = {
    AND?: execution_statusWhereInput | execution_statusWhereInput[]
    OR?: execution_statusWhereInput[]
    NOT?: execution_statusWhereInput | execution_statusWhereInput[]
    cd_execution_status?: IntFilter<"execution_status"> | number
    cd_execution?: IntFilter<"execution_status"> | number
    cd_database?: IntFilter<"execution_status"> | number
    ds_status?: Enumexecution_status_ds_statusFilter<"execution_status"> | $Enums.execution_status_ds_status
    ds_error_message?: StringNullableFilter<"execution_status"> | string | null
    dt_executed?: DateTimeNullableFilter<"execution_status"> | Date | string | null
    executions?: XOR<ExecutionsScalarRelationFilter, executionsWhereInput>
    databases?: XOR<DatabasesScalarRelationFilter, databasesWhereInput>
  }

  export type execution_statusOrderByWithRelationInput = {
    cd_execution_status?: SortOrder
    cd_execution?: SortOrder
    cd_database?: SortOrder
    ds_status?: SortOrder
    ds_error_message?: SortOrderInput | SortOrder
    dt_executed?: SortOrderInput | SortOrder
    executions?: executionsOrderByWithRelationInput
    databases?: databasesOrderByWithRelationInput
    _relevance?: execution_statusOrderByRelevanceInput
  }

  export type execution_statusWhereUniqueInput = Prisma.AtLeast<{
    cd_execution_status?: number
    cd_execution_cd_database?: execution_statusCd_executionCd_databaseCompoundUniqueInput
    AND?: execution_statusWhereInput | execution_statusWhereInput[]
    OR?: execution_statusWhereInput[]
    NOT?: execution_statusWhereInput | execution_statusWhereInput[]
    cd_execution?: IntFilter<"execution_status"> | number
    cd_database?: IntFilter<"execution_status"> | number
    ds_status?: Enumexecution_status_ds_statusFilter<"execution_status"> | $Enums.execution_status_ds_status
    ds_error_message?: StringNullableFilter<"execution_status"> | string | null
    dt_executed?: DateTimeNullableFilter<"execution_status"> | Date | string | null
    executions?: XOR<ExecutionsScalarRelationFilter, executionsWhereInput>
    databases?: XOR<DatabasesScalarRelationFilter, databasesWhereInput>
  }, "cd_execution_status" | "cd_execution_cd_database">

  export type execution_statusOrderByWithAggregationInput = {
    cd_execution_status?: SortOrder
    cd_execution?: SortOrder
    cd_database?: SortOrder
    ds_status?: SortOrder
    ds_error_message?: SortOrderInput | SortOrder
    dt_executed?: SortOrderInput | SortOrder
    _count?: execution_statusCountOrderByAggregateInput
    _avg?: execution_statusAvgOrderByAggregateInput
    _max?: execution_statusMaxOrderByAggregateInput
    _min?: execution_statusMinOrderByAggregateInput
    _sum?: execution_statusSumOrderByAggregateInput
  }

  export type execution_statusScalarWhereWithAggregatesInput = {
    AND?: execution_statusScalarWhereWithAggregatesInput | execution_statusScalarWhereWithAggregatesInput[]
    OR?: execution_statusScalarWhereWithAggregatesInput[]
    NOT?: execution_statusScalarWhereWithAggregatesInput | execution_statusScalarWhereWithAggregatesInput[]
    cd_execution_status?: IntWithAggregatesFilter<"execution_status"> | number
    cd_execution?: IntWithAggregatesFilter<"execution_status"> | number
    cd_database?: IntWithAggregatesFilter<"execution_status"> | number
    ds_status?: Enumexecution_status_ds_statusWithAggregatesFilter<"execution_status"> | $Enums.execution_status_ds_status
    ds_error_message?: StringNullableWithAggregatesFilter<"execution_status"> | string | null
    dt_executed?: DateTimeNullableWithAggregatesFilter<"execution_status"> | Date | string | null
  }

  export type executionsWhereInput = {
    AND?: executionsWhereInput | executionsWhereInput[]
    OR?: executionsWhereInput[]
    NOT?: executionsWhereInput | executionsWhereInput[]
    cd_execution?: IntFilter<"executions"> | number
    cd_script?: IntFilter<"executions"> | number
    ds_executed_by?: StringFilter<"executions"> | string
    dt_executed?: DateTimeNullableFilter<"executions"> | Date | string | null
    ds_status?: Enumexecutions_ds_statusNullableFilter<"executions"> | $Enums.executions_ds_status | null
    ds_notes?: StringNullableFilter<"executions"> | string | null
    execution_status?: Execution_statusListRelationFilter
    scripts?: XOR<ScriptsScalarRelationFilter, scriptsWhereInput>
  }

  export type executionsOrderByWithRelationInput = {
    cd_execution?: SortOrder
    cd_script?: SortOrder
    ds_executed_by?: SortOrder
    dt_executed?: SortOrderInput | SortOrder
    ds_status?: SortOrderInput | SortOrder
    ds_notes?: SortOrderInput | SortOrder
    execution_status?: execution_statusOrderByRelationAggregateInput
    scripts?: scriptsOrderByWithRelationInput
    _relevance?: executionsOrderByRelevanceInput
  }

  export type executionsWhereUniqueInput = Prisma.AtLeast<{
    cd_execution?: number
    AND?: executionsWhereInput | executionsWhereInput[]
    OR?: executionsWhereInput[]
    NOT?: executionsWhereInput | executionsWhereInput[]
    cd_script?: IntFilter<"executions"> | number
    ds_executed_by?: StringFilter<"executions"> | string
    dt_executed?: DateTimeNullableFilter<"executions"> | Date | string | null
    ds_status?: Enumexecutions_ds_statusNullableFilter<"executions"> | $Enums.executions_ds_status | null
    ds_notes?: StringNullableFilter<"executions"> | string | null
    execution_status?: Execution_statusListRelationFilter
    scripts?: XOR<ScriptsScalarRelationFilter, scriptsWhereInput>
  }, "cd_execution">

  export type executionsOrderByWithAggregationInput = {
    cd_execution?: SortOrder
    cd_script?: SortOrder
    ds_executed_by?: SortOrder
    dt_executed?: SortOrderInput | SortOrder
    ds_status?: SortOrderInput | SortOrder
    ds_notes?: SortOrderInput | SortOrder
    _count?: executionsCountOrderByAggregateInput
    _avg?: executionsAvgOrderByAggregateInput
    _max?: executionsMaxOrderByAggregateInput
    _min?: executionsMinOrderByAggregateInput
    _sum?: executionsSumOrderByAggregateInput
  }

  export type executionsScalarWhereWithAggregatesInput = {
    AND?: executionsScalarWhereWithAggregatesInput | executionsScalarWhereWithAggregatesInput[]
    OR?: executionsScalarWhereWithAggregatesInput[]
    NOT?: executionsScalarWhereWithAggregatesInput | executionsScalarWhereWithAggregatesInput[]
    cd_execution?: IntWithAggregatesFilter<"executions"> | number
    cd_script?: IntWithAggregatesFilter<"executions"> | number
    ds_executed_by?: StringWithAggregatesFilter<"executions"> | string
    dt_executed?: DateTimeNullableWithAggregatesFilter<"executions"> | Date | string | null
    ds_status?: Enumexecutions_ds_statusNullableWithAggregatesFilter<"executions"> | $Enums.executions_ds_status | null
    ds_notes?: StringNullableWithAggregatesFilter<"executions"> | string | null
  }

  export type scriptsWhereInput = {
    AND?: scriptsWhereInput | scriptsWhereInput[]
    OR?: scriptsWhereInput[]
    NOT?: scriptsWhereInput | scriptsWhereInput[]
    cd_script?: IntFilter<"scripts"> | number
    ds_name?: StringFilter<"scripts"> | string
    ds_content?: StringFilter<"scripts"> | string
    ds_created_by?: StringFilter<"scripts"> | string
    ds_task?: StringFilter<"scripts"> | string
    dt_created?: DateTimeNullableFilter<"scripts"> | Date | string | null
    executions?: ExecutionsListRelationFilter
  }

  export type scriptsOrderByWithRelationInput = {
    cd_script?: SortOrder
    ds_name?: SortOrder
    ds_content?: SortOrder
    ds_created_by?: SortOrder
    ds_task?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    executions?: executionsOrderByRelationAggregateInput
    _relevance?: scriptsOrderByRelevanceInput
  }

  export type scriptsWhereUniqueInput = Prisma.AtLeast<{
    cd_script?: number
    AND?: scriptsWhereInput | scriptsWhereInput[]
    OR?: scriptsWhereInput[]
    NOT?: scriptsWhereInput | scriptsWhereInput[]
    ds_name?: StringFilter<"scripts"> | string
    ds_content?: StringFilter<"scripts"> | string
    ds_created_by?: StringFilter<"scripts"> | string
    ds_task?: StringFilter<"scripts"> | string
    dt_created?: DateTimeNullableFilter<"scripts"> | Date | string | null
    executions?: ExecutionsListRelationFilter
  }, "cd_script">

  export type scriptsOrderByWithAggregationInput = {
    cd_script?: SortOrder
    ds_name?: SortOrder
    ds_content?: SortOrder
    ds_created_by?: SortOrder
    ds_task?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    _count?: scriptsCountOrderByAggregateInput
    _avg?: scriptsAvgOrderByAggregateInput
    _max?: scriptsMaxOrderByAggregateInput
    _min?: scriptsMinOrderByAggregateInput
    _sum?: scriptsSumOrderByAggregateInput
  }

  export type scriptsScalarWhereWithAggregatesInput = {
    AND?: scriptsScalarWhereWithAggregatesInput | scriptsScalarWhereWithAggregatesInput[]
    OR?: scriptsScalarWhereWithAggregatesInput[]
    NOT?: scriptsScalarWhereWithAggregatesInput | scriptsScalarWhereWithAggregatesInput[]
    cd_script?: IntWithAggregatesFilter<"scripts"> | number
    ds_name?: StringWithAggregatesFilter<"scripts"> | string
    ds_content?: StringWithAggregatesFilter<"scripts"> | string
    ds_created_by?: StringWithAggregatesFilter<"scripts"> | string
    ds_task?: StringWithAggregatesFilter<"scripts"> | string
    dt_created?: DateTimeNullableWithAggregatesFilter<"scripts"> | Date | string | null
  }

  export type systemsWhereInput = {
    AND?: systemsWhereInput | systemsWhereInput[]
    OR?: systemsWhereInput[]
    NOT?: systemsWhereInput | systemsWhereInput[]
    cd_system?: IntFilter<"systems"> | number
    ds_name?: StringFilter<"systems"> | string
    dt_created?: DateTimeNullableFilter<"systems"> | Date | string | null
    databases?: DatabasesListRelationFilter
  }

  export type systemsOrderByWithRelationInput = {
    cd_system?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    databases?: databasesOrderByRelationAggregateInput
    _relevance?: systemsOrderByRelevanceInput
  }

  export type systemsWhereUniqueInput = Prisma.AtLeast<{
    cd_system?: number
    ds_name?: string
    AND?: systemsWhereInput | systemsWhereInput[]
    OR?: systemsWhereInput[]
    NOT?: systemsWhereInput | systemsWhereInput[]
    dt_created?: DateTimeNullableFilter<"systems"> | Date | string | null
    databases?: DatabasesListRelationFilter
  }, "cd_system" | "ds_name">

  export type systemsOrderByWithAggregationInput = {
    cd_system?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrderInput | SortOrder
    _count?: systemsCountOrderByAggregateInput
    _avg?: systemsAvgOrderByAggregateInput
    _max?: systemsMaxOrderByAggregateInput
    _min?: systemsMinOrderByAggregateInput
    _sum?: systemsSumOrderByAggregateInput
  }

  export type systemsScalarWhereWithAggregatesInput = {
    AND?: systemsScalarWhereWithAggregatesInput | systemsScalarWhereWithAggregatesInput[]
    OR?: systemsScalarWhereWithAggregatesInput[]
    NOT?: systemsScalarWhereWithAggregatesInput | systemsScalarWhereWithAggregatesInput[]
    cd_system?: IntWithAggregatesFilter<"systems"> | number
    ds_name?: StringWithAggregatesFilter<"systems"> | string
    dt_created?: DateTimeNullableWithAggregatesFilter<"systems"> | Date | string | null
  }

  export type databasesCreateInput = {
    ds_name: string
    dt_created?: Date | string | null
    systems: systemsCreateNestedOneWithoutDatabasesInput
    environments: environmentsCreateNestedOneWithoutDatabasesInput
    execution_status?: execution_statusCreateNestedManyWithoutDatabasesInput
  }

  export type databasesUncheckedCreateInput = {
    cd_database?: number
    cd_system: number
    cd_environment: number
    ds_name: string
    dt_created?: Date | string | null
    execution_status?: execution_statusUncheckedCreateNestedManyWithoutDatabasesInput
  }

  export type databasesUpdateInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    systems?: systemsUpdateOneRequiredWithoutDatabasesNestedInput
    environments?: environmentsUpdateOneRequiredWithoutDatabasesNestedInput
    execution_status?: execution_statusUpdateManyWithoutDatabasesNestedInput
  }

  export type databasesUncheckedUpdateInput = {
    cd_database?: IntFieldUpdateOperationsInput | number
    cd_system?: IntFieldUpdateOperationsInput | number
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_status?: execution_statusUncheckedUpdateManyWithoutDatabasesNestedInput
  }

  export type databasesCreateManyInput = {
    cd_database?: number
    cd_system: number
    cd_environment: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type databasesUpdateManyMutationInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type databasesUncheckedUpdateManyInput = {
    cd_database?: IntFieldUpdateOperationsInput | number
    cd_system?: IntFieldUpdateOperationsInput | number
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmentsCreateInput = {
    ds_name: string
    dt_created?: Date | string | null
    databases?: databasesCreateNestedManyWithoutEnvironmentsInput
  }

  export type environmentsUncheckedCreateInput = {
    cd_environment?: number
    ds_name: string
    dt_created?: Date | string | null
    databases?: databasesUncheckedCreateNestedManyWithoutEnvironmentsInput
  }

  export type environmentsUpdateInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    databases?: databasesUpdateManyWithoutEnvironmentsNestedInput
  }

  export type environmentsUncheckedUpdateInput = {
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    databases?: databasesUncheckedUpdateManyWithoutEnvironmentsNestedInput
  }

  export type environmentsCreateManyInput = {
    cd_environment?: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type environmentsUpdateManyMutationInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmentsUncheckedUpdateManyInput = {
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusCreateInput = {
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
    executions: executionsCreateNestedOneWithoutExecution_statusInput
    databases: databasesCreateNestedOneWithoutExecution_statusInput
  }

  export type execution_statusUncheckedCreateInput = {
    cd_execution_status?: number
    cd_execution: number
    cd_database: number
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
  }

  export type execution_statusUpdateInput = {
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executions?: executionsUpdateOneRequiredWithoutExecution_statusNestedInput
    databases?: databasesUpdateOneRequiredWithoutExecution_statusNestedInput
  }

  export type execution_statusUncheckedUpdateInput = {
    cd_execution_status?: IntFieldUpdateOperationsInput | number
    cd_execution?: IntFieldUpdateOperationsInput | number
    cd_database?: IntFieldUpdateOperationsInput | number
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusCreateManyInput = {
    cd_execution_status?: number
    cd_execution: number
    cd_database: number
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
  }

  export type execution_statusUpdateManyMutationInput = {
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusUncheckedUpdateManyInput = {
    cd_execution_status?: IntFieldUpdateOperationsInput | number
    cd_execution?: IntFieldUpdateOperationsInput | number
    cd_database?: IntFieldUpdateOperationsInput | number
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type executionsCreateInput = {
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
    execution_status?: execution_statusCreateNestedManyWithoutExecutionsInput
    scripts: scriptsCreateNestedOneWithoutExecutionsInput
  }

  export type executionsUncheckedCreateInput = {
    cd_execution?: number
    cd_script: number
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
    execution_status?: execution_statusUncheckedCreateNestedManyWithoutExecutionsInput
  }

  export type executionsUpdateInput = {
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
    execution_status?: execution_statusUpdateManyWithoutExecutionsNestedInput
    scripts?: scriptsUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type executionsUncheckedUpdateInput = {
    cd_execution?: IntFieldUpdateOperationsInput | number
    cd_script?: IntFieldUpdateOperationsInput | number
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
    execution_status?: execution_statusUncheckedUpdateManyWithoutExecutionsNestedInput
  }

  export type executionsCreateManyInput = {
    cd_execution?: number
    cd_script: number
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
  }

  export type executionsUpdateManyMutationInput = {
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type executionsUncheckedUpdateManyInput = {
    cd_execution?: IntFieldUpdateOperationsInput | number
    cd_script?: IntFieldUpdateOperationsInput | number
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type scriptsCreateInput = {
    ds_name: string
    ds_content: string
    ds_created_by: string
    ds_task: string
    dt_created?: Date | string | null
    executions?: executionsCreateNestedManyWithoutScriptsInput
  }

  export type scriptsUncheckedCreateInput = {
    cd_script?: number
    ds_name: string
    ds_content: string
    ds_created_by: string
    ds_task: string
    dt_created?: Date | string | null
    executions?: executionsUncheckedCreateNestedManyWithoutScriptsInput
  }

  export type scriptsUpdateInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    ds_content?: StringFieldUpdateOperationsInput | string
    ds_created_by?: StringFieldUpdateOperationsInput | string
    ds_task?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executions?: executionsUpdateManyWithoutScriptsNestedInput
  }

  export type scriptsUncheckedUpdateInput = {
    cd_script?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    ds_content?: StringFieldUpdateOperationsInput | string
    ds_created_by?: StringFieldUpdateOperationsInput | string
    ds_task?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executions?: executionsUncheckedUpdateManyWithoutScriptsNestedInput
  }

  export type scriptsCreateManyInput = {
    cd_script?: number
    ds_name: string
    ds_content: string
    ds_created_by: string
    ds_task: string
    dt_created?: Date | string | null
  }

  export type scriptsUpdateManyMutationInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    ds_content?: StringFieldUpdateOperationsInput | string
    ds_created_by?: StringFieldUpdateOperationsInput | string
    ds_task?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scriptsUncheckedUpdateManyInput = {
    cd_script?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    ds_content?: StringFieldUpdateOperationsInput | string
    ds_created_by?: StringFieldUpdateOperationsInput | string
    ds_task?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type systemsCreateInput = {
    ds_name: string
    dt_created?: Date | string | null
    databases?: databasesCreateNestedManyWithoutSystemsInput
  }

  export type systemsUncheckedCreateInput = {
    cd_system?: number
    ds_name: string
    dt_created?: Date | string | null
    databases?: databasesUncheckedCreateNestedManyWithoutSystemsInput
  }

  export type systemsUpdateInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    databases?: databasesUpdateManyWithoutSystemsNestedInput
  }

  export type systemsUncheckedUpdateInput = {
    cd_system?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    databases?: databasesUncheckedUpdateManyWithoutSystemsNestedInput
  }

  export type systemsCreateManyInput = {
    cd_system?: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type systemsUpdateManyMutationInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type systemsUncheckedUpdateManyInput = {
    cd_system?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SystemsScalarRelationFilter = {
    is?: systemsWhereInput
    isNot?: systemsWhereInput
  }

  export type EnvironmentsScalarRelationFilter = {
    is?: environmentsWhereInput
    isNot?: environmentsWhereInput
  }

  export type Execution_statusListRelationFilter = {
    every?: execution_statusWhereInput
    some?: execution_statusWhereInput
    none?: execution_statusWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type execution_statusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type databasesOrderByRelevanceInput = {
    fields: databasesOrderByRelevanceFieldEnum | databasesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type databasesCd_systemCd_environmentDs_nameCompoundUniqueInput = {
    cd_system: number
    cd_environment: number
    ds_name: string
  }

  export type databasesCountOrderByAggregateInput = {
    cd_database?: SortOrder
    cd_system?: SortOrder
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type databasesAvgOrderByAggregateInput = {
    cd_database?: SortOrder
    cd_system?: SortOrder
    cd_environment?: SortOrder
  }

  export type databasesMaxOrderByAggregateInput = {
    cd_database?: SortOrder
    cd_system?: SortOrder
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type databasesMinOrderByAggregateInput = {
    cd_database?: SortOrder
    cd_system?: SortOrder
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type databasesSumOrderByAggregateInput = {
    cd_database?: SortOrder
    cd_system?: SortOrder
    cd_environment?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DatabasesListRelationFilter = {
    every?: databasesWhereInput
    some?: databasesWhereInput
    none?: databasesWhereInput
  }

  export type databasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type environmentsOrderByRelevanceInput = {
    fields: environmentsOrderByRelevanceFieldEnum | environmentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type environmentsCountOrderByAggregateInput = {
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type environmentsAvgOrderByAggregateInput = {
    cd_environment?: SortOrder
  }

  export type environmentsMaxOrderByAggregateInput = {
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type environmentsMinOrderByAggregateInput = {
    cd_environment?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type environmentsSumOrderByAggregateInput = {
    cd_environment?: SortOrder
  }

  export type Enumexecution_status_ds_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.execution_status_ds_status | Enumexecution_status_ds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.execution_status_ds_status[]
    notIn?: $Enums.execution_status_ds_status[]
    not?: NestedEnumexecution_status_ds_statusFilter<$PrismaModel> | $Enums.execution_status_ds_status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ExecutionsScalarRelationFilter = {
    is?: executionsWhereInput
    isNot?: executionsWhereInput
  }

  export type DatabasesScalarRelationFilter = {
    is?: databasesWhereInput
    isNot?: databasesWhereInput
  }

  export type execution_statusOrderByRelevanceInput = {
    fields: execution_statusOrderByRelevanceFieldEnum | execution_statusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type execution_statusCd_executionCd_databaseCompoundUniqueInput = {
    cd_execution: number
    cd_database: number
  }

  export type execution_statusCountOrderByAggregateInput = {
    cd_execution_status?: SortOrder
    cd_execution?: SortOrder
    cd_database?: SortOrder
    ds_status?: SortOrder
    ds_error_message?: SortOrder
    dt_executed?: SortOrder
  }

  export type execution_statusAvgOrderByAggregateInput = {
    cd_execution_status?: SortOrder
    cd_execution?: SortOrder
    cd_database?: SortOrder
  }

  export type execution_statusMaxOrderByAggregateInput = {
    cd_execution_status?: SortOrder
    cd_execution?: SortOrder
    cd_database?: SortOrder
    ds_status?: SortOrder
    ds_error_message?: SortOrder
    dt_executed?: SortOrder
  }

  export type execution_statusMinOrderByAggregateInput = {
    cd_execution_status?: SortOrder
    cd_execution?: SortOrder
    cd_database?: SortOrder
    ds_status?: SortOrder
    ds_error_message?: SortOrder
    dt_executed?: SortOrder
  }

  export type execution_statusSumOrderByAggregateInput = {
    cd_execution_status?: SortOrder
    cd_execution?: SortOrder
    cd_database?: SortOrder
  }

  export type Enumexecution_status_ds_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.execution_status_ds_status | Enumexecution_status_ds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.execution_status_ds_status[]
    notIn?: $Enums.execution_status_ds_status[]
    not?: NestedEnumexecution_status_ds_statusWithAggregatesFilter<$PrismaModel> | $Enums.execution_status_ds_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexecution_status_ds_statusFilter<$PrismaModel>
    _max?: NestedEnumexecution_status_ds_statusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumexecutions_ds_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.executions_ds_status | Enumexecutions_ds_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.executions_ds_status[] | null
    notIn?: $Enums.executions_ds_status[] | null
    not?: NestedEnumexecutions_ds_statusNullableFilter<$PrismaModel> | $Enums.executions_ds_status | null
  }

  export type ScriptsScalarRelationFilter = {
    is?: scriptsWhereInput
    isNot?: scriptsWhereInput
  }

  export type executionsOrderByRelevanceInput = {
    fields: executionsOrderByRelevanceFieldEnum | executionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type executionsCountOrderByAggregateInput = {
    cd_execution?: SortOrder
    cd_script?: SortOrder
    ds_executed_by?: SortOrder
    dt_executed?: SortOrder
    ds_status?: SortOrder
    ds_notes?: SortOrder
  }

  export type executionsAvgOrderByAggregateInput = {
    cd_execution?: SortOrder
    cd_script?: SortOrder
  }

  export type executionsMaxOrderByAggregateInput = {
    cd_execution?: SortOrder
    cd_script?: SortOrder
    ds_executed_by?: SortOrder
    dt_executed?: SortOrder
    ds_status?: SortOrder
    ds_notes?: SortOrder
  }

  export type executionsMinOrderByAggregateInput = {
    cd_execution?: SortOrder
    cd_script?: SortOrder
    ds_executed_by?: SortOrder
    dt_executed?: SortOrder
    ds_status?: SortOrder
    ds_notes?: SortOrder
  }

  export type executionsSumOrderByAggregateInput = {
    cd_execution?: SortOrder
    cd_script?: SortOrder
  }

  export type Enumexecutions_ds_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.executions_ds_status | Enumexecutions_ds_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.executions_ds_status[] | null
    notIn?: $Enums.executions_ds_status[] | null
    not?: NestedEnumexecutions_ds_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.executions_ds_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumexecutions_ds_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumexecutions_ds_statusNullableFilter<$PrismaModel>
  }

  export type ExecutionsListRelationFilter = {
    every?: executionsWhereInput
    some?: executionsWhereInput
    none?: executionsWhereInput
  }

  export type executionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type scriptsOrderByRelevanceInput = {
    fields: scriptsOrderByRelevanceFieldEnum | scriptsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type scriptsCountOrderByAggregateInput = {
    cd_script?: SortOrder
    ds_name?: SortOrder
    ds_content?: SortOrder
    ds_created_by?: SortOrder
    ds_task?: SortOrder
    dt_created?: SortOrder
  }

  export type scriptsAvgOrderByAggregateInput = {
    cd_script?: SortOrder
  }

  export type scriptsMaxOrderByAggregateInput = {
    cd_script?: SortOrder
    ds_name?: SortOrder
    ds_content?: SortOrder
    ds_created_by?: SortOrder
    ds_task?: SortOrder
    dt_created?: SortOrder
  }

  export type scriptsMinOrderByAggregateInput = {
    cd_script?: SortOrder
    ds_name?: SortOrder
    ds_content?: SortOrder
    ds_created_by?: SortOrder
    ds_task?: SortOrder
    dt_created?: SortOrder
  }

  export type scriptsSumOrderByAggregateInput = {
    cd_script?: SortOrder
  }

  export type systemsOrderByRelevanceInput = {
    fields: systemsOrderByRelevanceFieldEnum | systemsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type systemsCountOrderByAggregateInput = {
    cd_system?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type systemsAvgOrderByAggregateInput = {
    cd_system?: SortOrder
  }

  export type systemsMaxOrderByAggregateInput = {
    cd_system?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type systemsMinOrderByAggregateInput = {
    cd_system?: SortOrder
    ds_name?: SortOrder
    dt_created?: SortOrder
  }

  export type systemsSumOrderByAggregateInput = {
    cd_system?: SortOrder
  }

  export type systemsCreateNestedOneWithoutDatabasesInput = {
    create?: XOR<systemsCreateWithoutDatabasesInput, systemsUncheckedCreateWithoutDatabasesInput>
    connectOrCreate?: systemsCreateOrConnectWithoutDatabasesInput
    connect?: systemsWhereUniqueInput
  }

  export type environmentsCreateNestedOneWithoutDatabasesInput = {
    create?: XOR<environmentsCreateWithoutDatabasesInput, environmentsUncheckedCreateWithoutDatabasesInput>
    connectOrCreate?: environmentsCreateOrConnectWithoutDatabasesInput
    connect?: environmentsWhereUniqueInput
  }

  export type execution_statusCreateNestedManyWithoutDatabasesInput = {
    create?: XOR<execution_statusCreateWithoutDatabasesInput, execution_statusUncheckedCreateWithoutDatabasesInput> | execution_statusCreateWithoutDatabasesInput[] | execution_statusUncheckedCreateWithoutDatabasesInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutDatabasesInput | execution_statusCreateOrConnectWithoutDatabasesInput[]
    createMany?: execution_statusCreateManyDatabasesInputEnvelope
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
  }

  export type execution_statusUncheckedCreateNestedManyWithoutDatabasesInput = {
    create?: XOR<execution_statusCreateWithoutDatabasesInput, execution_statusUncheckedCreateWithoutDatabasesInput> | execution_statusCreateWithoutDatabasesInput[] | execution_statusUncheckedCreateWithoutDatabasesInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutDatabasesInput | execution_statusCreateOrConnectWithoutDatabasesInput[]
    createMany?: execution_statusCreateManyDatabasesInputEnvelope
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type systemsUpdateOneRequiredWithoutDatabasesNestedInput = {
    create?: XOR<systemsCreateWithoutDatabasesInput, systemsUncheckedCreateWithoutDatabasesInput>
    connectOrCreate?: systemsCreateOrConnectWithoutDatabasesInput
    upsert?: systemsUpsertWithoutDatabasesInput
    connect?: systemsWhereUniqueInput
    update?: XOR<XOR<systemsUpdateToOneWithWhereWithoutDatabasesInput, systemsUpdateWithoutDatabasesInput>, systemsUncheckedUpdateWithoutDatabasesInput>
  }

  export type environmentsUpdateOneRequiredWithoutDatabasesNestedInput = {
    create?: XOR<environmentsCreateWithoutDatabasesInput, environmentsUncheckedCreateWithoutDatabasesInput>
    connectOrCreate?: environmentsCreateOrConnectWithoutDatabasesInput
    upsert?: environmentsUpsertWithoutDatabasesInput
    connect?: environmentsWhereUniqueInput
    update?: XOR<XOR<environmentsUpdateToOneWithWhereWithoutDatabasesInput, environmentsUpdateWithoutDatabasesInput>, environmentsUncheckedUpdateWithoutDatabasesInput>
  }

  export type execution_statusUpdateManyWithoutDatabasesNestedInput = {
    create?: XOR<execution_statusCreateWithoutDatabasesInput, execution_statusUncheckedCreateWithoutDatabasesInput> | execution_statusCreateWithoutDatabasesInput[] | execution_statusUncheckedCreateWithoutDatabasesInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutDatabasesInput | execution_statusCreateOrConnectWithoutDatabasesInput[]
    upsert?: execution_statusUpsertWithWhereUniqueWithoutDatabasesInput | execution_statusUpsertWithWhereUniqueWithoutDatabasesInput[]
    createMany?: execution_statusCreateManyDatabasesInputEnvelope
    set?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    disconnect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    delete?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    update?: execution_statusUpdateWithWhereUniqueWithoutDatabasesInput | execution_statusUpdateWithWhereUniqueWithoutDatabasesInput[]
    updateMany?: execution_statusUpdateManyWithWhereWithoutDatabasesInput | execution_statusUpdateManyWithWhereWithoutDatabasesInput[]
    deleteMany?: execution_statusScalarWhereInput | execution_statusScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type execution_statusUncheckedUpdateManyWithoutDatabasesNestedInput = {
    create?: XOR<execution_statusCreateWithoutDatabasesInput, execution_statusUncheckedCreateWithoutDatabasesInput> | execution_statusCreateWithoutDatabasesInput[] | execution_statusUncheckedCreateWithoutDatabasesInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutDatabasesInput | execution_statusCreateOrConnectWithoutDatabasesInput[]
    upsert?: execution_statusUpsertWithWhereUniqueWithoutDatabasesInput | execution_statusUpsertWithWhereUniqueWithoutDatabasesInput[]
    createMany?: execution_statusCreateManyDatabasesInputEnvelope
    set?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    disconnect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    delete?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    update?: execution_statusUpdateWithWhereUniqueWithoutDatabasesInput | execution_statusUpdateWithWhereUniqueWithoutDatabasesInput[]
    updateMany?: execution_statusUpdateManyWithWhereWithoutDatabasesInput | execution_statusUpdateManyWithWhereWithoutDatabasesInput[]
    deleteMany?: execution_statusScalarWhereInput | execution_statusScalarWhereInput[]
  }

  export type databasesCreateNestedManyWithoutEnvironmentsInput = {
    create?: XOR<databasesCreateWithoutEnvironmentsInput, databasesUncheckedCreateWithoutEnvironmentsInput> | databasesCreateWithoutEnvironmentsInput[] | databasesUncheckedCreateWithoutEnvironmentsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutEnvironmentsInput | databasesCreateOrConnectWithoutEnvironmentsInput[]
    createMany?: databasesCreateManyEnvironmentsInputEnvelope
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
  }

  export type databasesUncheckedCreateNestedManyWithoutEnvironmentsInput = {
    create?: XOR<databasesCreateWithoutEnvironmentsInput, databasesUncheckedCreateWithoutEnvironmentsInput> | databasesCreateWithoutEnvironmentsInput[] | databasesUncheckedCreateWithoutEnvironmentsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutEnvironmentsInput | databasesCreateOrConnectWithoutEnvironmentsInput[]
    createMany?: databasesCreateManyEnvironmentsInputEnvelope
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
  }

  export type databasesUpdateManyWithoutEnvironmentsNestedInput = {
    create?: XOR<databasesCreateWithoutEnvironmentsInput, databasesUncheckedCreateWithoutEnvironmentsInput> | databasesCreateWithoutEnvironmentsInput[] | databasesUncheckedCreateWithoutEnvironmentsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutEnvironmentsInput | databasesCreateOrConnectWithoutEnvironmentsInput[]
    upsert?: databasesUpsertWithWhereUniqueWithoutEnvironmentsInput | databasesUpsertWithWhereUniqueWithoutEnvironmentsInput[]
    createMany?: databasesCreateManyEnvironmentsInputEnvelope
    set?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    disconnect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    delete?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    update?: databasesUpdateWithWhereUniqueWithoutEnvironmentsInput | databasesUpdateWithWhereUniqueWithoutEnvironmentsInput[]
    updateMany?: databasesUpdateManyWithWhereWithoutEnvironmentsInput | databasesUpdateManyWithWhereWithoutEnvironmentsInput[]
    deleteMany?: databasesScalarWhereInput | databasesScalarWhereInput[]
  }

  export type databasesUncheckedUpdateManyWithoutEnvironmentsNestedInput = {
    create?: XOR<databasesCreateWithoutEnvironmentsInput, databasesUncheckedCreateWithoutEnvironmentsInput> | databasesCreateWithoutEnvironmentsInput[] | databasesUncheckedCreateWithoutEnvironmentsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutEnvironmentsInput | databasesCreateOrConnectWithoutEnvironmentsInput[]
    upsert?: databasesUpsertWithWhereUniqueWithoutEnvironmentsInput | databasesUpsertWithWhereUniqueWithoutEnvironmentsInput[]
    createMany?: databasesCreateManyEnvironmentsInputEnvelope
    set?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    disconnect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    delete?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    update?: databasesUpdateWithWhereUniqueWithoutEnvironmentsInput | databasesUpdateWithWhereUniqueWithoutEnvironmentsInput[]
    updateMany?: databasesUpdateManyWithWhereWithoutEnvironmentsInput | databasesUpdateManyWithWhereWithoutEnvironmentsInput[]
    deleteMany?: databasesScalarWhereInput | databasesScalarWhereInput[]
  }

  export type executionsCreateNestedOneWithoutExecution_statusInput = {
    create?: XOR<executionsCreateWithoutExecution_statusInput, executionsUncheckedCreateWithoutExecution_statusInput>
    connectOrCreate?: executionsCreateOrConnectWithoutExecution_statusInput
    connect?: executionsWhereUniqueInput
  }

  export type databasesCreateNestedOneWithoutExecution_statusInput = {
    create?: XOR<databasesCreateWithoutExecution_statusInput, databasesUncheckedCreateWithoutExecution_statusInput>
    connectOrCreate?: databasesCreateOrConnectWithoutExecution_statusInput
    connect?: databasesWhereUniqueInput
  }

  export type Enumexecution_status_ds_statusFieldUpdateOperationsInput = {
    set?: $Enums.execution_status_ds_status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type executionsUpdateOneRequiredWithoutExecution_statusNestedInput = {
    create?: XOR<executionsCreateWithoutExecution_statusInput, executionsUncheckedCreateWithoutExecution_statusInput>
    connectOrCreate?: executionsCreateOrConnectWithoutExecution_statusInput
    upsert?: executionsUpsertWithoutExecution_statusInput
    connect?: executionsWhereUniqueInput
    update?: XOR<XOR<executionsUpdateToOneWithWhereWithoutExecution_statusInput, executionsUpdateWithoutExecution_statusInput>, executionsUncheckedUpdateWithoutExecution_statusInput>
  }

  export type databasesUpdateOneRequiredWithoutExecution_statusNestedInput = {
    create?: XOR<databasesCreateWithoutExecution_statusInput, databasesUncheckedCreateWithoutExecution_statusInput>
    connectOrCreate?: databasesCreateOrConnectWithoutExecution_statusInput
    upsert?: databasesUpsertWithoutExecution_statusInput
    connect?: databasesWhereUniqueInput
    update?: XOR<XOR<databasesUpdateToOneWithWhereWithoutExecution_statusInput, databasesUpdateWithoutExecution_statusInput>, databasesUncheckedUpdateWithoutExecution_statusInput>
  }

  export type execution_statusCreateNestedManyWithoutExecutionsInput = {
    create?: XOR<execution_statusCreateWithoutExecutionsInput, execution_statusUncheckedCreateWithoutExecutionsInput> | execution_statusCreateWithoutExecutionsInput[] | execution_statusUncheckedCreateWithoutExecutionsInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutExecutionsInput | execution_statusCreateOrConnectWithoutExecutionsInput[]
    createMany?: execution_statusCreateManyExecutionsInputEnvelope
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
  }

  export type scriptsCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<scriptsCreateWithoutExecutionsInput, scriptsUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: scriptsCreateOrConnectWithoutExecutionsInput
    connect?: scriptsWhereUniqueInput
  }

  export type execution_statusUncheckedCreateNestedManyWithoutExecutionsInput = {
    create?: XOR<execution_statusCreateWithoutExecutionsInput, execution_statusUncheckedCreateWithoutExecutionsInput> | execution_statusCreateWithoutExecutionsInput[] | execution_statusUncheckedCreateWithoutExecutionsInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutExecutionsInput | execution_statusCreateOrConnectWithoutExecutionsInput[]
    createMany?: execution_statusCreateManyExecutionsInputEnvelope
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
  }

  export type NullableEnumexecutions_ds_statusFieldUpdateOperationsInput = {
    set?: $Enums.executions_ds_status | null
  }

  export type execution_statusUpdateManyWithoutExecutionsNestedInput = {
    create?: XOR<execution_statusCreateWithoutExecutionsInput, execution_statusUncheckedCreateWithoutExecutionsInput> | execution_statusCreateWithoutExecutionsInput[] | execution_statusUncheckedCreateWithoutExecutionsInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutExecutionsInput | execution_statusCreateOrConnectWithoutExecutionsInput[]
    upsert?: execution_statusUpsertWithWhereUniqueWithoutExecutionsInput | execution_statusUpsertWithWhereUniqueWithoutExecutionsInput[]
    createMany?: execution_statusCreateManyExecutionsInputEnvelope
    set?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    disconnect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    delete?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    update?: execution_statusUpdateWithWhereUniqueWithoutExecutionsInput | execution_statusUpdateWithWhereUniqueWithoutExecutionsInput[]
    updateMany?: execution_statusUpdateManyWithWhereWithoutExecutionsInput | execution_statusUpdateManyWithWhereWithoutExecutionsInput[]
    deleteMany?: execution_statusScalarWhereInput | execution_statusScalarWhereInput[]
  }

  export type scriptsUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<scriptsCreateWithoutExecutionsInput, scriptsUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: scriptsCreateOrConnectWithoutExecutionsInput
    upsert?: scriptsUpsertWithoutExecutionsInput
    connect?: scriptsWhereUniqueInput
    update?: XOR<XOR<scriptsUpdateToOneWithWhereWithoutExecutionsInput, scriptsUpdateWithoutExecutionsInput>, scriptsUncheckedUpdateWithoutExecutionsInput>
  }

  export type execution_statusUncheckedUpdateManyWithoutExecutionsNestedInput = {
    create?: XOR<execution_statusCreateWithoutExecutionsInput, execution_statusUncheckedCreateWithoutExecutionsInput> | execution_statusCreateWithoutExecutionsInput[] | execution_statusUncheckedCreateWithoutExecutionsInput[]
    connectOrCreate?: execution_statusCreateOrConnectWithoutExecutionsInput | execution_statusCreateOrConnectWithoutExecutionsInput[]
    upsert?: execution_statusUpsertWithWhereUniqueWithoutExecutionsInput | execution_statusUpsertWithWhereUniqueWithoutExecutionsInput[]
    createMany?: execution_statusCreateManyExecutionsInputEnvelope
    set?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    disconnect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    delete?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    connect?: execution_statusWhereUniqueInput | execution_statusWhereUniqueInput[]
    update?: execution_statusUpdateWithWhereUniqueWithoutExecutionsInput | execution_statusUpdateWithWhereUniqueWithoutExecutionsInput[]
    updateMany?: execution_statusUpdateManyWithWhereWithoutExecutionsInput | execution_statusUpdateManyWithWhereWithoutExecutionsInput[]
    deleteMany?: execution_statusScalarWhereInput | execution_statusScalarWhereInput[]
  }

  export type executionsCreateNestedManyWithoutScriptsInput = {
    create?: XOR<executionsCreateWithoutScriptsInput, executionsUncheckedCreateWithoutScriptsInput> | executionsCreateWithoutScriptsInput[] | executionsUncheckedCreateWithoutScriptsInput[]
    connectOrCreate?: executionsCreateOrConnectWithoutScriptsInput | executionsCreateOrConnectWithoutScriptsInput[]
    createMany?: executionsCreateManyScriptsInputEnvelope
    connect?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
  }

  export type executionsUncheckedCreateNestedManyWithoutScriptsInput = {
    create?: XOR<executionsCreateWithoutScriptsInput, executionsUncheckedCreateWithoutScriptsInput> | executionsCreateWithoutScriptsInput[] | executionsUncheckedCreateWithoutScriptsInput[]
    connectOrCreate?: executionsCreateOrConnectWithoutScriptsInput | executionsCreateOrConnectWithoutScriptsInput[]
    createMany?: executionsCreateManyScriptsInputEnvelope
    connect?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
  }

  export type executionsUpdateManyWithoutScriptsNestedInput = {
    create?: XOR<executionsCreateWithoutScriptsInput, executionsUncheckedCreateWithoutScriptsInput> | executionsCreateWithoutScriptsInput[] | executionsUncheckedCreateWithoutScriptsInput[]
    connectOrCreate?: executionsCreateOrConnectWithoutScriptsInput | executionsCreateOrConnectWithoutScriptsInput[]
    upsert?: executionsUpsertWithWhereUniqueWithoutScriptsInput | executionsUpsertWithWhereUniqueWithoutScriptsInput[]
    createMany?: executionsCreateManyScriptsInputEnvelope
    set?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    disconnect?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    delete?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    connect?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    update?: executionsUpdateWithWhereUniqueWithoutScriptsInput | executionsUpdateWithWhereUniqueWithoutScriptsInput[]
    updateMany?: executionsUpdateManyWithWhereWithoutScriptsInput | executionsUpdateManyWithWhereWithoutScriptsInput[]
    deleteMany?: executionsScalarWhereInput | executionsScalarWhereInput[]
  }

  export type executionsUncheckedUpdateManyWithoutScriptsNestedInput = {
    create?: XOR<executionsCreateWithoutScriptsInput, executionsUncheckedCreateWithoutScriptsInput> | executionsCreateWithoutScriptsInput[] | executionsUncheckedCreateWithoutScriptsInput[]
    connectOrCreate?: executionsCreateOrConnectWithoutScriptsInput | executionsCreateOrConnectWithoutScriptsInput[]
    upsert?: executionsUpsertWithWhereUniqueWithoutScriptsInput | executionsUpsertWithWhereUniqueWithoutScriptsInput[]
    createMany?: executionsCreateManyScriptsInputEnvelope
    set?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    disconnect?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    delete?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    connect?: executionsWhereUniqueInput | executionsWhereUniqueInput[]
    update?: executionsUpdateWithWhereUniqueWithoutScriptsInput | executionsUpdateWithWhereUniqueWithoutScriptsInput[]
    updateMany?: executionsUpdateManyWithWhereWithoutScriptsInput | executionsUpdateManyWithWhereWithoutScriptsInput[]
    deleteMany?: executionsScalarWhereInput | executionsScalarWhereInput[]
  }

  export type databasesCreateNestedManyWithoutSystemsInput = {
    create?: XOR<databasesCreateWithoutSystemsInput, databasesUncheckedCreateWithoutSystemsInput> | databasesCreateWithoutSystemsInput[] | databasesUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutSystemsInput | databasesCreateOrConnectWithoutSystemsInput[]
    createMany?: databasesCreateManySystemsInputEnvelope
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
  }

  export type databasesUncheckedCreateNestedManyWithoutSystemsInput = {
    create?: XOR<databasesCreateWithoutSystemsInput, databasesUncheckedCreateWithoutSystemsInput> | databasesCreateWithoutSystemsInput[] | databasesUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutSystemsInput | databasesCreateOrConnectWithoutSystemsInput[]
    createMany?: databasesCreateManySystemsInputEnvelope
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
  }

  export type databasesUpdateManyWithoutSystemsNestedInput = {
    create?: XOR<databasesCreateWithoutSystemsInput, databasesUncheckedCreateWithoutSystemsInput> | databasesCreateWithoutSystemsInput[] | databasesUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutSystemsInput | databasesCreateOrConnectWithoutSystemsInput[]
    upsert?: databasesUpsertWithWhereUniqueWithoutSystemsInput | databasesUpsertWithWhereUniqueWithoutSystemsInput[]
    createMany?: databasesCreateManySystemsInputEnvelope
    set?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    disconnect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    delete?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    update?: databasesUpdateWithWhereUniqueWithoutSystemsInput | databasesUpdateWithWhereUniqueWithoutSystemsInput[]
    updateMany?: databasesUpdateManyWithWhereWithoutSystemsInput | databasesUpdateManyWithWhereWithoutSystemsInput[]
    deleteMany?: databasesScalarWhereInput | databasesScalarWhereInput[]
  }

  export type databasesUncheckedUpdateManyWithoutSystemsNestedInput = {
    create?: XOR<databasesCreateWithoutSystemsInput, databasesUncheckedCreateWithoutSystemsInput> | databasesCreateWithoutSystemsInput[] | databasesUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: databasesCreateOrConnectWithoutSystemsInput | databasesCreateOrConnectWithoutSystemsInput[]
    upsert?: databasesUpsertWithWhereUniqueWithoutSystemsInput | databasesUpsertWithWhereUniqueWithoutSystemsInput[]
    createMany?: databasesCreateManySystemsInputEnvelope
    set?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    disconnect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    delete?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    connect?: databasesWhereUniqueInput | databasesWhereUniqueInput[]
    update?: databasesUpdateWithWhereUniqueWithoutSystemsInput | databasesUpdateWithWhereUniqueWithoutSystemsInput[]
    updateMany?: databasesUpdateManyWithWhereWithoutSystemsInput | databasesUpdateManyWithWhereWithoutSystemsInput[]
    deleteMany?: databasesScalarWhereInput | databasesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumexecution_status_ds_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.execution_status_ds_status | Enumexecution_status_ds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.execution_status_ds_status[]
    notIn?: $Enums.execution_status_ds_status[]
    not?: NestedEnumexecution_status_ds_statusFilter<$PrismaModel> | $Enums.execution_status_ds_status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumexecution_status_ds_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.execution_status_ds_status | Enumexecution_status_ds_statusFieldRefInput<$PrismaModel>
    in?: $Enums.execution_status_ds_status[]
    notIn?: $Enums.execution_status_ds_status[]
    not?: NestedEnumexecution_status_ds_statusWithAggregatesFilter<$PrismaModel> | $Enums.execution_status_ds_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumexecution_status_ds_statusFilter<$PrismaModel>
    _max?: NestedEnumexecution_status_ds_statusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumexecutions_ds_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.executions_ds_status | Enumexecutions_ds_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.executions_ds_status[] | null
    notIn?: $Enums.executions_ds_status[] | null
    not?: NestedEnumexecutions_ds_statusNullableFilter<$PrismaModel> | $Enums.executions_ds_status | null
  }

  export type NestedEnumexecutions_ds_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.executions_ds_status | Enumexecutions_ds_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.executions_ds_status[] | null
    notIn?: $Enums.executions_ds_status[] | null
    not?: NestedEnumexecutions_ds_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.executions_ds_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumexecutions_ds_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumexecutions_ds_statusNullableFilter<$PrismaModel>
  }

  export type systemsCreateWithoutDatabasesInput = {
    ds_name: string
    dt_created?: Date | string | null
  }

  export type systemsUncheckedCreateWithoutDatabasesInput = {
    cd_system?: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type systemsCreateOrConnectWithoutDatabasesInput = {
    where: systemsWhereUniqueInput
    create: XOR<systemsCreateWithoutDatabasesInput, systemsUncheckedCreateWithoutDatabasesInput>
  }

  export type environmentsCreateWithoutDatabasesInput = {
    ds_name: string
    dt_created?: Date | string | null
  }

  export type environmentsUncheckedCreateWithoutDatabasesInput = {
    cd_environment?: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type environmentsCreateOrConnectWithoutDatabasesInput = {
    where: environmentsWhereUniqueInput
    create: XOR<environmentsCreateWithoutDatabasesInput, environmentsUncheckedCreateWithoutDatabasesInput>
  }

  export type execution_statusCreateWithoutDatabasesInput = {
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
    executions: executionsCreateNestedOneWithoutExecution_statusInput
  }

  export type execution_statusUncheckedCreateWithoutDatabasesInput = {
    cd_execution_status?: number
    cd_execution: number
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
  }

  export type execution_statusCreateOrConnectWithoutDatabasesInput = {
    where: execution_statusWhereUniqueInput
    create: XOR<execution_statusCreateWithoutDatabasesInput, execution_statusUncheckedCreateWithoutDatabasesInput>
  }

  export type execution_statusCreateManyDatabasesInputEnvelope = {
    data: execution_statusCreateManyDatabasesInput | execution_statusCreateManyDatabasesInput[]
    skipDuplicates?: boolean
  }

  export type systemsUpsertWithoutDatabasesInput = {
    update: XOR<systemsUpdateWithoutDatabasesInput, systemsUncheckedUpdateWithoutDatabasesInput>
    create: XOR<systemsCreateWithoutDatabasesInput, systemsUncheckedCreateWithoutDatabasesInput>
    where?: systemsWhereInput
  }

  export type systemsUpdateToOneWithWhereWithoutDatabasesInput = {
    where?: systemsWhereInput
    data: XOR<systemsUpdateWithoutDatabasesInput, systemsUncheckedUpdateWithoutDatabasesInput>
  }

  export type systemsUpdateWithoutDatabasesInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type systemsUncheckedUpdateWithoutDatabasesInput = {
    cd_system?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmentsUpsertWithoutDatabasesInput = {
    update: XOR<environmentsUpdateWithoutDatabasesInput, environmentsUncheckedUpdateWithoutDatabasesInput>
    create: XOR<environmentsCreateWithoutDatabasesInput, environmentsUncheckedCreateWithoutDatabasesInput>
    where?: environmentsWhereInput
  }

  export type environmentsUpdateToOneWithWhereWithoutDatabasesInput = {
    where?: environmentsWhereInput
    data: XOR<environmentsUpdateWithoutDatabasesInput, environmentsUncheckedUpdateWithoutDatabasesInput>
  }

  export type environmentsUpdateWithoutDatabasesInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type environmentsUncheckedUpdateWithoutDatabasesInput = {
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusUpsertWithWhereUniqueWithoutDatabasesInput = {
    where: execution_statusWhereUniqueInput
    update: XOR<execution_statusUpdateWithoutDatabasesInput, execution_statusUncheckedUpdateWithoutDatabasesInput>
    create: XOR<execution_statusCreateWithoutDatabasesInput, execution_statusUncheckedCreateWithoutDatabasesInput>
  }

  export type execution_statusUpdateWithWhereUniqueWithoutDatabasesInput = {
    where: execution_statusWhereUniqueInput
    data: XOR<execution_statusUpdateWithoutDatabasesInput, execution_statusUncheckedUpdateWithoutDatabasesInput>
  }

  export type execution_statusUpdateManyWithWhereWithoutDatabasesInput = {
    where: execution_statusScalarWhereInput
    data: XOR<execution_statusUpdateManyMutationInput, execution_statusUncheckedUpdateManyWithoutDatabasesInput>
  }

  export type execution_statusScalarWhereInput = {
    AND?: execution_statusScalarWhereInput | execution_statusScalarWhereInput[]
    OR?: execution_statusScalarWhereInput[]
    NOT?: execution_statusScalarWhereInput | execution_statusScalarWhereInput[]
    cd_execution_status?: IntFilter<"execution_status"> | number
    cd_execution?: IntFilter<"execution_status"> | number
    cd_database?: IntFilter<"execution_status"> | number
    ds_status?: Enumexecution_status_ds_statusFilter<"execution_status"> | $Enums.execution_status_ds_status
    ds_error_message?: StringNullableFilter<"execution_status"> | string | null
    dt_executed?: DateTimeNullableFilter<"execution_status"> | Date | string | null
  }

  export type databasesCreateWithoutEnvironmentsInput = {
    ds_name: string
    dt_created?: Date | string | null
    systems: systemsCreateNestedOneWithoutDatabasesInput
    execution_status?: execution_statusCreateNestedManyWithoutDatabasesInput
  }

  export type databasesUncheckedCreateWithoutEnvironmentsInput = {
    cd_database?: number
    cd_system: number
    ds_name: string
    dt_created?: Date | string | null
    execution_status?: execution_statusUncheckedCreateNestedManyWithoutDatabasesInput
  }

  export type databasesCreateOrConnectWithoutEnvironmentsInput = {
    where: databasesWhereUniqueInput
    create: XOR<databasesCreateWithoutEnvironmentsInput, databasesUncheckedCreateWithoutEnvironmentsInput>
  }

  export type databasesCreateManyEnvironmentsInputEnvelope = {
    data: databasesCreateManyEnvironmentsInput | databasesCreateManyEnvironmentsInput[]
    skipDuplicates?: boolean
  }

  export type databasesUpsertWithWhereUniqueWithoutEnvironmentsInput = {
    where: databasesWhereUniqueInput
    update: XOR<databasesUpdateWithoutEnvironmentsInput, databasesUncheckedUpdateWithoutEnvironmentsInput>
    create: XOR<databasesCreateWithoutEnvironmentsInput, databasesUncheckedCreateWithoutEnvironmentsInput>
  }

  export type databasesUpdateWithWhereUniqueWithoutEnvironmentsInput = {
    where: databasesWhereUniqueInput
    data: XOR<databasesUpdateWithoutEnvironmentsInput, databasesUncheckedUpdateWithoutEnvironmentsInput>
  }

  export type databasesUpdateManyWithWhereWithoutEnvironmentsInput = {
    where: databasesScalarWhereInput
    data: XOR<databasesUpdateManyMutationInput, databasesUncheckedUpdateManyWithoutEnvironmentsInput>
  }

  export type databasesScalarWhereInput = {
    AND?: databasesScalarWhereInput | databasesScalarWhereInput[]
    OR?: databasesScalarWhereInput[]
    NOT?: databasesScalarWhereInput | databasesScalarWhereInput[]
    cd_database?: IntFilter<"databases"> | number
    cd_system?: IntFilter<"databases"> | number
    cd_environment?: IntFilter<"databases"> | number
    ds_name?: StringFilter<"databases"> | string
    dt_created?: DateTimeNullableFilter<"databases"> | Date | string | null
  }

  export type executionsCreateWithoutExecution_statusInput = {
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
    scripts: scriptsCreateNestedOneWithoutExecutionsInput
  }

  export type executionsUncheckedCreateWithoutExecution_statusInput = {
    cd_execution?: number
    cd_script: number
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
  }

  export type executionsCreateOrConnectWithoutExecution_statusInput = {
    where: executionsWhereUniqueInput
    create: XOR<executionsCreateWithoutExecution_statusInput, executionsUncheckedCreateWithoutExecution_statusInput>
  }

  export type databasesCreateWithoutExecution_statusInput = {
    ds_name: string
    dt_created?: Date | string | null
    systems: systemsCreateNestedOneWithoutDatabasesInput
    environments: environmentsCreateNestedOneWithoutDatabasesInput
  }

  export type databasesUncheckedCreateWithoutExecution_statusInput = {
    cd_database?: number
    cd_system: number
    cd_environment: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type databasesCreateOrConnectWithoutExecution_statusInput = {
    where: databasesWhereUniqueInput
    create: XOR<databasesCreateWithoutExecution_statusInput, databasesUncheckedCreateWithoutExecution_statusInput>
  }

  export type executionsUpsertWithoutExecution_statusInput = {
    update: XOR<executionsUpdateWithoutExecution_statusInput, executionsUncheckedUpdateWithoutExecution_statusInput>
    create: XOR<executionsCreateWithoutExecution_statusInput, executionsUncheckedCreateWithoutExecution_statusInput>
    where?: executionsWhereInput
  }

  export type executionsUpdateToOneWithWhereWithoutExecution_statusInput = {
    where?: executionsWhereInput
    data: XOR<executionsUpdateWithoutExecution_statusInput, executionsUncheckedUpdateWithoutExecution_statusInput>
  }

  export type executionsUpdateWithoutExecution_statusInput = {
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
    scripts?: scriptsUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type executionsUncheckedUpdateWithoutExecution_statusInput = {
    cd_execution?: IntFieldUpdateOperationsInput | number
    cd_script?: IntFieldUpdateOperationsInput | number
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type databasesUpsertWithoutExecution_statusInput = {
    update: XOR<databasesUpdateWithoutExecution_statusInput, databasesUncheckedUpdateWithoutExecution_statusInput>
    create: XOR<databasesCreateWithoutExecution_statusInput, databasesUncheckedCreateWithoutExecution_statusInput>
    where?: databasesWhereInput
  }

  export type databasesUpdateToOneWithWhereWithoutExecution_statusInput = {
    where?: databasesWhereInput
    data: XOR<databasesUpdateWithoutExecution_statusInput, databasesUncheckedUpdateWithoutExecution_statusInput>
  }

  export type databasesUpdateWithoutExecution_statusInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    systems?: systemsUpdateOneRequiredWithoutDatabasesNestedInput
    environments?: environmentsUpdateOneRequiredWithoutDatabasesNestedInput
  }

  export type databasesUncheckedUpdateWithoutExecution_statusInput = {
    cd_database?: IntFieldUpdateOperationsInput | number
    cd_system?: IntFieldUpdateOperationsInput | number
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusCreateWithoutExecutionsInput = {
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
    databases: databasesCreateNestedOneWithoutExecution_statusInput
  }

  export type execution_statusUncheckedCreateWithoutExecutionsInput = {
    cd_execution_status?: number
    cd_database: number
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
  }

  export type execution_statusCreateOrConnectWithoutExecutionsInput = {
    where: execution_statusWhereUniqueInput
    create: XOR<execution_statusCreateWithoutExecutionsInput, execution_statusUncheckedCreateWithoutExecutionsInput>
  }

  export type execution_statusCreateManyExecutionsInputEnvelope = {
    data: execution_statusCreateManyExecutionsInput | execution_statusCreateManyExecutionsInput[]
    skipDuplicates?: boolean
  }

  export type scriptsCreateWithoutExecutionsInput = {
    ds_name: string
    ds_content: string
    ds_created_by: string
    ds_task: string
    dt_created?: Date | string | null
  }

  export type scriptsUncheckedCreateWithoutExecutionsInput = {
    cd_script?: number
    ds_name: string
    ds_content: string
    ds_created_by: string
    ds_task: string
    dt_created?: Date | string | null
  }

  export type scriptsCreateOrConnectWithoutExecutionsInput = {
    where: scriptsWhereUniqueInput
    create: XOR<scriptsCreateWithoutExecutionsInput, scriptsUncheckedCreateWithoutExecutionsInput>
  }

  export type execution_statusUpsertWithWhereUniqueWithoutExecutionsInput = {
    where: execution_statusWhereUniqueInput
    update: XOR<execution_statusUpdateWithoutExecutionsInput, execution_statusUncheckedUpdateWithoutExecutionsInput>
    create: XOR<execution_statusCreateWithoutExecutionsInput, execution_statusUncheckedCreateWithoutExecutionsInput>
  }

  export type execution_statusUpdateWithWhereUniqueWithoutExecutionsInput = {
    where: execution_statusWhereUniqueInput
    data: XOR<execution_statusUpdateWithoutExecutionsInput, execution_statusUncheckedUpdateWithoutExecutionsInput>
  }

  export type execution_statusUpdateManyWithWhereWithoutExecutionsInput = {
    where: execution_statusScalarWhereInput
    data: XOR<execution_statusUpdateManyMutationInput, execution_statusUncheckedUpdateManyWithoutExecutionsInput>
  }

  export type scriptsUpsertWithoutExecutionsInput = {
    update: XOR<scriptsUpdateWithoutExecutionsInput, scriptsUncheckedUpdateWithoutExecutionsInput>
    create: XOR<scriptsCreateWithoutExecutionsInput, scriptsUncheckedCreateWithoutExecutionsInput>
    where?: scriptsWhereInput
  }

  export type scriptsUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: scriptsWhereInput
    data: XOR<scriptsUpdateWithoutExecutionsInput, scriptsUncheckedUpdateWithoutExecutionsInput>
  }

  export type scriptsUpdateWithoutExecutionsInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    ds_content?: StringFieldUpdateOperationsInput | string
    ds_created_by?: StringFieldUpdateOperationsInput | string
    ds_task?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scriptsUncheckedUpdateWithoutExecutionsInput = {
    cd_script?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    ds_content?: StringFieldUpdateOperationsInput | string
    ds_created_by?: StringFieldUpdateOperationsInput | string
    ds_task?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type executionsCreateWithoutScriptsInput = {
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
    execution_status?: execution_statusCreateNestedManyWithoutExecutionsInput
  }

  export type executionsUncheckedCreateWithoutScriptsInput = {
    cd_execution?: number
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
    execution_status?: execution_statusUncheckedCreateNestedManyWithoutExecutionsInput
  }

  export type executionsCreateOrConnectWithoutScriptsInput = {
    where: executionsWhereUniqueInput
    create: XOR<executionsCreateWithoutScriptsInput, executionsUncheckedCreateWithoutScriptsInput>
  }

  export type executionsCreateManyScriptsInputEnvelope = {
    data: executionsCreateManyScriptsInput | executionsCreateManyScriptsInput[]
    skipDuplicates?: boolean
  }

  export type executionsUpsertWithWhereUniqueWithoutScriptsInput = {
    where: executionsWhereUniqueInput
    update: XOR<executionsUpdateWithoutScriptsInput, executionsUncheckedUpdateWithoutScriptsInput>
    create: XOR<executionsCreateWithoutScriptsInput, executionsUncheckedCreateWithoutScriptsInput>
  }

  export type executionsUpdateWithWhereUniqueWithoutScriptsInput = {
    where: executionsWhereUniqueInput
    data: XOR<executionsUpdateWithoutScriptsInput, executionsUncheckedUpdateWithoutScriptsInput>
  }

  export type executionsUpdateManyWithWhereWithoutScriptsInput = {
    where: executionsScalarWhereInput
    data: XOR<executionsUpdateManyMutationInput, executionsUncheckedUpdateManyWithoutScriptsInput>
  }

  export type executionsScalarWhereInput = {
    AND?: executionsScalarWhereInput | executionsScalarWhereInput[]
    OR?: executionsScalarWhereInput[]
    NOT?: executionsScalarWhereInput | executionsScalarWhereInput[]
    cd_execution?: IntFilter<"executions"> | number
    cd_script?: IntFilter<"executions"> | number
    ds_executed_by?: StringFilter<"executions"> | string
    dt_executed?: DateTimeNullableFilter<"executions"> | Date | string | null
    ds_status?: Enumexecutions_ds_statusNullableFilter<"executions"> | $Enums.executions_ds_status | null
    ds_notes?: StringNullableFilter<"executions"> | string | null
  }

  export type databasesCreateWithoutSystemsInput = {
    ds_name: string
    dt_created?: Date | string | null
    environments: environmentsCreateNestedOneWithoutDatabasesInput
    execution_status?: execution_statusCreateNestedManyWithoutDatabasesInput
  }

  export type databasesUncheckedCreateWithoutSystemsInput = {
    cd_database?: number
    cd_environment: number
    ds_name: string
    dt_created?: Date | string | null
    execution_status?: execution_statusUncheckedCreateNestedManyWithoutDatabasesInput
  }

  export type databasesCreateOrConnectWithoutSystemsInput = {
    where: databasesWhereUniqueInput
    create: XOR<databasesCreateWithoutSystemsInput, databasesUncheckedCreateWithoutSystemsInput>
  }

  export type databasesCreateManySystemsInputEnvelope = {
    data: databasesCreateManySystemsInput | databasesCreateManySystemsInput[]
    skipDuplicates?: boolean
  }

  export type databasesUpsertWithWhereUniqueWithoutSystemsInput = {
    where: databasesWhereUniqueInput
    update: XOR<databasesUpdateWithoutSystemsInput, databasesUncheckedUpdateWithoutSystemsInput>
    create: XOR<databasesCreateWithoutSystemsInput, databasesUncheckedCreateWithoutSystemsInput>
  }

  export type databasesUpdateWithWhereUniqueWithoutSystemsInput = {
    where: databasesWhereUniqueInput
    data: XOR<databasesUpdateWithoutSystemsInput, databasesUncheckedUpdateWithoutSystemsInput>
  }

  export type databasesUpdateManyWithWhereWithoutSystemsInput = {
    where: databasesScalarWhereInput
    data: XOR<databasesUpdateManyMutationInput, databasesUncheckedUpdateManyWithoutSystemsInput>
  }

  export type execution_statusCreateManyDatabasesInput = {
    cd_execution_status?: number
    cd_execution: number
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
  }

  export type execution_statusUpdateWithoutDatabasesInput = {
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    executions?: executionsUpdateOneRequiredWithoutExecution_statusNestedInput
  }

  export type execution_statusUncheckedUpdateWithoutDatabasesInput = {
    cd_execution_status?: IntFieldUpdateOperationsInput | number
    cd_execution?: IntFieldUpdateOperationsInput | number
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusUncheckedUpdateManyWithoutDatabasesInput = {
    cd_execution_status?: IntFieldUpdateOperationsInput | number
    cd_execution?: IntFieldUpdateOperationsInput | number
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type databasesCreateManyEnvironmentsInput = {
    cd_database?: number
    cd_system: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type databasesUpdateWithoutEnvironmentsInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    systems?: systemsUpdateOneRequiredWithoutDatabasesNestedInput
    execution_status?: execution_statusUpdateManyWithoutDatabasesNestedInput
  }

  export type databasesUncheckedUpdateWithoutEnvironmentsInput = {
    cd_database?: IntFieldUpdateOperationsInput | number
    cd_system?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_status?: execution_statusUncheckedUpdateManyWithoutDatabasesNestedInput
  }

  export type databasesUncheckedUpdateManyWithoutEnvironmentsInput = {
    cd_database?: IntFieldUpdateOperationsInput | number
    cd_system?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusCreateManyExecutionsInput = {
    cd_execution_status?: number
    cd_database: number
    ds_status: $Enums.execution_status_ds_status
    ds_error_message?: string | null
    dt_executed?: Date | string | null
  }

  export type execution_statusUpdateWithoutExecutionsInput = {
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    databases?: databasesUpdateOneRequiredWithoutExecution_statusNestedInput
  }

  export type execution_statusUncheckedUpdateWithoutExecutionsInput = {
    cd_execution_status?: IntFieldUpdateOperationsInput | number
    cd_database?: IntFieldUpdateOperationsInput | number
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type execution_statusUncheckedUpdateManyWithoutExecutionsInput = {
    cd_execution_status?: IntFieldUpdateOperationsInput | number
    cd_database?: IntFieldUpdateOperationsInput | number
    ds_status?: Enumexecution_status_ds_statusFieldUpdateOperationsInput | $Enums.execution_status_ds_status
    ds_error_message?: NullableStringFieldUpdateOperationsInput | string | null
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type executionsCreateManyScriptsInput = {
    cd_execution?: number
    ds_executed_by: string
    dt_executed?: Date | string | null
    ds_status?: $Enums.executions_ds_status | null
    ds_notes?: string | null
  }

  export type executionsUpdateWithoutScriptsInput = {
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
    execution_status?: execution_statusUpdateManyWithoutExecutionsNestedInput
  }

  export type executionsUncheckedUpdateWithoutScriptsInput = {
    cd_execution?: IntFieldUpdateOperationsInput | number
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
    execution_status?: execution_statusUncheckedUpdateManyWithoutExecutionsNestedInput
  }

  export type executionsUncheckedUpdateManyWithoutScriptsInput = {
    cd_execution?: IntFieldUpdateOperationsInput | number
    ds_executed_by?: StringFieldUpdateOperationsInput | string
    dt_executed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ds_status?: NullableEnumexecutions_ds_statusFieldUpdateOperationsInput | $Enums.executions_ds_status | null
    ds_notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type databasesCreateManySystemsInput = {
    cd_database?: number
    cd_environment: number
    ds_name: string
    dt_created?: Date | string | null
  }

  export type databasesUpdateWithoutSystemsInput = {
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    environments?: environmentsUpdateOneRequiredWithoutDatabasesNestedInput
    execution_status?: execution_statusUpdateManyWithoutDatabasesNestedInput
  }

  export type databasesUncheckedUpdateWithoutSystemsInput = {
    cd_database?: IntFieldUpdateOperationsInput | number
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    execution_status?: execution_statusUncheckedUpdateManyWithoutDatabasesNestedInput
  }

  export type databasesUncheckedUpdateManyWithoutSystemsInput = {
    cd_database?: IntFieldUpdateOperationsInput | number
    cd_environment?: IntFieldUpdateOperationsInput | number
    ds_name?: StringFieldUpdateOperationsInput | string
    dt_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
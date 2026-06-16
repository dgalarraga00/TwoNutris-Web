
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * Enlazado 1:1 con auth.users de Supabase
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Order
 * Pedido finalizado — inmutable
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model DishTemplate
 * 
 */
export type DishTemplate = $Result.DefaultSelection<Prisma.$DishTemplatePayload>
/**
 * Model WeeklyMenu
 * 
 */
export type WeeklyMenu = $Result.DefaultSelection<Prisma.$WeeklyMenuPayload>
/**
 * Model WeeklyMenuItem
 * 
 */
export type WeeklyMenuItem = $Result.DefaultSelection<Prisma.$WeeklyMenuItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const DishTemplateCategory: {
  CLASICO: 'CLASICO',
  LOW_CARB: 'LOW_CARB',
  VEGETARIANO: 'VEGETARIANO',
  PREMIUM: 'PREMIUM'
};

export type DishTemplateCategory = (typeof DishTemplateCategory)[keyof typeof DishTemplateCategory]


export const WeeklyMenuStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type WeeklyMenuStatus = (typeof WeeklyMenuStatus)[keyof typeof WeeklyMenuStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type DishTemplateCategory = $Enums.DishTemplateCategory

export const DishTemplateCategory: typeof $Enums.DishTemplateCategory

export type WeeklyMenuStatus = $Enums.WeeklyMenuStatus

export const WeeklyMenuStatus: typeof $Enums.WeeklyMenuStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dishTemplate`: Exposes CRUD operations for the **DishTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DishTemplates
    * const dishTemplates = await prisma.dishTemplate.findMany()
    * ```
    */
  get dishTemplate(): Prisma.DishTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyMenu`: Exposes CRUD operations for the **WeeklyMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyMenus
    * const weeklyMenus = await prisma.weeklyMenu.findMany()
    * ```
    */
  get weeklyMenu(): Prisma.WeeklyMenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyMenuItem`: Exposes CRUD operations for the **WeeklyMenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyMenuItems
    * const weeklyMenuItems = await prisma.weeklyMenuItem.findMany()
    * ```
    */
  get weeklyMenuItem(): Prisma.WeeklyMenuItemDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Profile: 'Profile',
    Order: 'Order',
    OrderItem: 'OrderItem',
    DishTemplate: 'DishTemplate',
    WeeklyMenu: 'WeeklyMenu',
    WeeklyMenuItem: 'WeeklyMenuItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "order" | "orderItem" | "dishTemplate" | "weeklyMenu" | "weeklyMenuItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      DishTemplate: {
        payload: Prisma.$DishTemplatePayload<ExtArgs>
        fields: Prisma.DishTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>
          }
          findFirst: {
            args: Prisma.DishTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>
          }
          findMany: {
            args: Prisma.DishTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>[]
          }
          create: {
            args: Prisma.DishTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>
          }
          createMany: {
            args: Prisma.DishTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>[]
          }
          delete: {
            args: Prisma.DishTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>
          }
          update: {
            args: Prisma.DishTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>
          }
          deleteMany: {
            args: Prisma.DishTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>[]
          }
          upsert: {
            args: Prisma.DishTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishTemplatePayload>
          }
          aggregate: {
            args: Prisma.DishTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDishTemplate>
          }
          groupBy: {
            args: Prisma.DishTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<DishTemplateCountAggregateOutputType> | number
          }
        }
      }
      WeeklyMenu: {
        payload: Prisma.$WeeklyMenuPayload<ExtArgs>
        fields: Prisma.WeeklyMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyMenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyMenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>
          }
          findFirst: {
            args: Prisma.WeeklyMenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyMenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>
          }
          findMany: {
            args: Prisma.WeeklyMenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>[]
          }
          create: {
            args: Prisma.WeeklyMenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>
          }
          createMany: {
            args: Prisma.WeeklyMenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyMenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>[]
          }
          delete: {
            args: Prisma.WeeklyMenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>
          }
          update: {
            args: Prisma.WeeklyMenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyMenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyMenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyMenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyMenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuPayload>
          }
          aggregate: {
            args: Prisma.WeeklyMenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyMenu>
          }
          groupBy: {
            args: Prisma.WeeklyMenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyMenuCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyMenuCountAggregateOutputType> | number
          }
        }
      }
      WeeklyMenuItem: {
        payload: Prisma.$WeeklyMenuItemPayload<ExtArgs>
        fields: Prisma.WeeklyMenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyMenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyMenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>
          }
          findFirst: {
            args: Prisma.WeeklyMenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyMenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>
          }
          findMany: {
            args: Prisma.WeeklyMenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>[]
          }
          create: {
            args: Prisma.WeeklyMenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>
          }
          createMany: {
            args: Prisma.WeeklyMenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyMenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>[]
          }
          delete: {
            args: Prisma.WeeklyMenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>
          }
          update: {
            args: Prisma.WeeklyMenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyMenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyMenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyMenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyMenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyMenuItemPayload>
          }
          aggregate: {
            args: Prisma.WeeklyMenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyMenuItem>
          }
          groupBy: {
            args: Prisma.WeeklyMenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyMenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyMenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyMenuItemCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    dishTemplate?: DishTemplateOmit
    weeklyMenu?: WeeklyMenuOmit
    weeklyMenuItem?: WeeklyMenuItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    orders: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProfileCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type DishTemplateCountOutputType
   */

  export type DishTemplateCountOutputType = {
    weeklyMenuItems: number
  }

  export type DishTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklyMenuItems?: boolean | DishTemplateCountOutputTypeCountWeeklyMenuItemsArgs
  }

  // Custom InputTypes
  /**
   * DishTemplateCountOutputType without action
   */
  export type DishTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplateCountOutputType
     */
    select?: DishTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DishTemplateCountOutputType without action
   */
  export type DishTemplateCountOutputTypeCountWeeklyMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyMenuItemWhereInput
  }


  /**
   * Count Type WeeklyMenuCountOutputType
   */

  export type WeeklyMenuCountOutputType = {
    items: number
  }

  export type WeeklyMenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WeeklyMenuCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * WeeklyMenuCountOutputType without action
   */
  export type WeeklyMenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuCountOutputType
     */
    select?: WeeklyMenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklyMenuCountOutputType without action
   */
  export type WeeklyMenuCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyMenuItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    whatsapp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    whatsapp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    fullName: number
    whatsapp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    fullName: string | null
    whatsapp: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Profile$ordersArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "whatsapp" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Profile$ordersArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string | null
      whatsapp: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Profile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly fullName: FieldRef<"Profile", 'String'>
    readonly whatsapp: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.orders
   */
  export type Profile$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: number | null
    invoiceNumber: number | null
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
    invoiceNumber: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    deliveryAddress: string | null
    deliveryInstructions: string | null
    payphoneTransactionId: string | null
    deliveryDate: Date | null
    deliverySlot: string | null
    taxIdType: string | null
    taxId: string | null
    customerEmail: string | null
    invoiceNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    deliveryAddress: string | null
    deliveryInstructions: string | null
    payphoneTransactionId: string | null
    deliveryDate: Date | null
    deliverySlot: string | null
    taxIdType: string | null
    taxId: string | null
    customerEmail: string | null
    invoiceNumber: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    profileId: number
    status: number
    total: number
    deliveryAddress: number
    deliveryInstructions: number
    payphoneTransactionId: number
    deliveryDate: number
    deliverySlot: number
    taxIdType: number
    taxId: number
    customerEmail: number
    invoiceNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
    invoiceNumber?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
    invoiceNumber?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    profileId?: true
    status?: true
    total?: true
    deliveryAddress?: true
    deliveryInstructions?: true
    payphoneTransactionId?: true
    deliveryDate?: true
    deliverySlot?: true
    taxIdType?: true
    taxId?: true
    customerEmail?: true
    invoiceNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    profileId?: true
    status?: true
    total?: true
    deliveryAddress?: true
    deliveryInstructions?: true
    payphoneTransactionId?: true
    deliveryDate?: true
    deliverySlot?: true
    taxIdType?: true
    taxId?: true
    customerEmail?: true
    invoiceNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    profileId?: true
    status?: true
    total?: true
    deliveryAddress?: true
    deliveryInstructions?: true
    payphoneTransactionId?: true
    deliveryDate?: true
    deliverySlot?: true
    taxIdType?: true
    taxId?: true
    customerEmail?: true
    invoiceNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    profileId: string
    status: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions: string | null
    payphoneTransactionId: string | null
    deliveryDate: Date | null
    deliverySlot: string | null
    taxIdType: string
    taxId: string
    customerEmail: string | null
    invoiceNumber: number
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    deliverySlot?: boolean
    taxIdType?: boolean
    taxId?: boolean
    customerEmail?: boolean
    invoiceNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    deliverySlot?: boolean
    taxIdType?: boolean
    taxId?: boolean
    customerEmail?: boolean
    invoiceNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    deliverySlot?: boolean
    taxIdType?: boolean
    taxId?: boolean
    customerEmail?: boolean
    invoiceNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    profileId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    deliverySlot?: boolean
    taxIdType?: boolean
    taxId?: boolean
    customerEmail?: boolean
    invoiceNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "status" | "total" | "deliveryAddress" | "deliveryInstructions" | "payphoneTransactionId" | "deliveryDate" | "deliverySlot" | "taxIdType" | "taxId" | "customerEmail" | "invoiceNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      status: $Enums.OrderStatus
      total: number
      deliveryAddress: string
      deliveryInstructions: string | null
      payphoneTransactionId: string | null
      deliveryDate: Date | null
      deliverySlot: string | null
      taxIdType: string
      taxId: string
      customerEmail: string | null
      invoiceNumber: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly profileId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly deliveryAddress: FieldRef<"Order", 'String'>
    readonly deliveryInstructions: FieldRef<"Order", 'String'>
    readonly payphoneTransactionId: FieldRef<"Order", 'String'>
    readonly deliveryDate: FieldRef<"Order", 'DateTime'>
    readonly deliverySlot: FieldRef<"Order", 'String'>
    readonly taxIdType: FieldRef<"Order", 'String'>
    readonly taxId: FieldRef<"Order", 'String'>
    readonly customerEmail: FieldRef<"Order", 'String'>
    readonly invoiceNumber: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    dishId: string | null
    dishName: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    dishId: string | null
    dishName: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    dishId: number
    dishName: number
    quantity: number
    unitPrice: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    dishId?: true
    dishName?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    dishId?: true
    dishName?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    dishId?: true
    dishName?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    dishId: string
    dishName: string
    quantity: number
    unitPrice: number
    createdAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    dishName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    dishName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    dishName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    dishId?: boolean
    dishName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "dishId" | "dishName" | "quantity" | "unitPrice" | "createdAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      dishId: string
      dishName: string
      quantity: number
      unitPrice: number
      createdAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly dishId: FieldRef<"OrderItem", 'String'>
    readonly dishName: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Float'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model DishTemplate
   */

  export type AggregateDishTemplate = {
    _count: DishTemplateCountAggregateOutputType | null
    _avg: DishTemplateAvgAggregateOutputType | null
    _sum: DishTemplateSumAggregateOutputType | null
    _min: DishTemplateMinAggregateOutputType | null
    _max: DishTemplateMaxAggregateOutputType | null
  }

  export type DishTemplateAvgAggregateOutputType = {
    price: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
    fatSaturated: number | null
    fatTrans: number | null
    cholesterol: number | null
    sodium: number | null
    fiber: number | null
    sugarTotal: number | null
    sugarAdded: number | null
  }

  export type DishTemplateSumAggregateOutputType = {
    price: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
    fatSaturated: number | null
    fatTrans: number | null
    cholesterol: number | null
    sodium: number | null
    fiber: number | null
    sugarTotal: number | null
    sugarAdded: number | null
  }

  export type DishTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    category: $Enums.DishTemplateCategory | null
    price: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    ingredients: string | null
    servingSize: number | null
    servingUnit: string | null
    fatSaturated: number | null
    fatTrans: number | null
    cholesterol: number | null
    sodium: number | null
    fiber: number | null
    sugarTotal: number | null
    sugarAdded: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    category: $Enums.DishTemplateCategory | null
    price: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    ingredients: string | null
    servingSize: number | null
    servingUnit: string | null
    fatSaturated: number | null
    fatTrans: number | null
    cholesterol: number | null
    sodium: number | null
    fiber: number | null
    sugarTotal: number | null
    sugarAdded: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DishTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    category: number
    price: number
    calories: number
    protein: number
    carbs: number
    fat: number
    ingredients: number
    allergens: number
    servingSize: number
    servingUnit: number
    fatSaturated: number
    fatTrans: number
    cholesterol: number
    sodium: number
    fiber: number
    sugarTotal: number
    sugarAdded: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DishTemplateAvgAggregateInputType = {
    price?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    fatSaturated?: true
    fatTrans?: true
    cholesterol?: true
    sodium?: true
    fiber?: true
    sugarTotal?: true
    sugarAdded?: true
  }

  export type DishTemplateSumAggregateInputType = {
    price?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    fatSaturated?: true
    fatTrans?: true
    cholesterol?: true
    sodium?: true
    fiber?: true
    sugarTotal?: true
    sugarAdded?: true
  }

  export type DishTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    category?: true
    price?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    ingredients?: true
    servingSize?: true
    servingUnit?: true
    fatSaturated?: true
    fatTrans?: true
    cholesterol?: true
    sodium?: true
    fiber?: true
    sugarTotal?: true
    sugarAdded?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    category?: true
    price?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    ingredients?: true
    servingSize?: true
    servingUnit?: true
    fatSaturated?: true
    fatTrans?: true
    cholesterol?: true
    sodium?: true
    fiber?: true
    sugarTotal?: true
    sugarAdded?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DishTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    category?: true
    price?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    ingredients?: true
    allergens?: true
    servingSize?: true
    servingUnit?: true
    fatSaturated?: true
    fatTrans?: true
    cholesterol?: true
    sodium?: true
    fiber?: true
    sugarTotal?: true
    sugarAdded?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DishTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishTemplate to aggregate.
     */
    where?: DishTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishTemplates to fetch.
     */
    orderBy?: DishTemplateOrderByWithRelationInput | DishTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DishTemplates
    **/
    _count?: true | DishTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishTemplateMaxAggregateInputType
  }

  export type GetDishTemplateAggregateType<T extends DishTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateDishTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDishTemplate[P]>
      : GetScalarType<T[P], AggregateDishTemplate[P]>
  }




  export type DishTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishTemplateWhereInput
    orderBy?: DishTemplateOrderByWithAggregationInput | DishTemplateOrderByWithAggregationInput[]
    by: DishTemplateScalarFieldEnum[] | DishTemplateScalarFieldEnum
    having?: DishTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishTemplateCountAggregateInputType | true
    _avg?: DishTemplateAvgAggregateInputType
    _sum?: DishTemplateSumAggregateInputType
    _min?: DishTemplateMinAggregateInputType
    _max?: DishTemplateMaxAggregateInputType
  }

  export type DishTemplateGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string | null
    category: $Enums.DishTemplateCategory
    price: number
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    ingredients: string | null
    allergens: string[]
    servingSize: number | null
    servingUnit: string | null
    fatSaturated: number | null
    fatTrans: number | null
    cholesterol: number | null
    sodium: number | null
    fiber: number | null
    sugarTotal: number | null
    sugarAdded: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DishTemplateCountAggregateOutputType | null
    _avg: DishTemplateAvgAggregateOutputType | null
    _sum: DishTemplateSumAggregateOutputType | null
    _min: DishTemplateMinAggregateOutputType | null
    _max: DishTemplateMaxAggregateOutputType | null
  }

  type GetDishTemplateGroupByPayload<T extends DishTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], DishTemplateGroupByOutputType[P]>
        }
      >
    >


  export type DishTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    price?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    ingredients?: boolean
    allergens?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    fatSaturated?: boolean
    fatTrans?: boolean
    cholesterol?: boolean
    sodium?: boolean
    fiber?: boolean
    sugarTotal?: boolean
    sugarAdded?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weeklyMenuItems?: boolean | DishTemplate$weeklyMenuItemsArgs<ExtArgs>
    _count?: boolean | DishTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dishTemplate"]>

  export type DishTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    price?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    ingredients?: boolean
    allergens?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    fatSaturated?: boolean
    fatTrans?: boolean
    cholesterol?: boolean
    sodium?: boolean
    fiber?: boolean
    sugarTotal?: boolean
    sugarAdded?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dishTemplate"]>

  export type DishTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    price?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    ingredients?: boolean
    allergens?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    fatSaturated?: boolean
    fatTrans?: boolean
    cholesterol?: boolean
    sodium?: boolean
    fiber?: boolean
    sugarTotal?: boolean
    sugarAdded?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dishTemplate"]>

  export type DishTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    price?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    ingredients?: boolean
    allergens?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    fatSaturated?: boolean
    fatTrans?: boolean
    cholesterol?: boolean
    sodium?: boolean
    fiber?: boolean
    sugarTotal?: boolean
    sugarAdded?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DishTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "category" | "price" | "calories" | "protein" | "carbs" | "fat" | "ingredients" | "allergens" | "servingSize" | "servingUnit" | "fatSaturated" | "fatTrans" | "cholesterol" | "sodium" | "fiber" | "sugarTotal" | "sugarAdded" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["dishTemplate"]>
  export type DishTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weeklyMenuItems?: boolean | DishTemplate$weeklyMenuItemsArgs<ExtArgs>
    _count?: boolean | DishTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DishTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DishTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DishTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DishTemplate"
    objects: {
      weeklyMenuItems: Prisma.$WeeklyMenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string | null
      category: $Enums.DishTemplateCategory
      price: number
      calories: number | null
      protein: number | null
      carbs: number | null
      fat: number | null
      ingredients: string | null
      allergens: string[]
      servingSize: number | null
      servingUnit: string | null
      fatSaturated: number | null
      fatTrans: number | null
      cholesterol: number | null
      sodium: number | null
      fiber: number | null
      sugarTotal: number | null
      sugarAdded: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dishTemplate"]>
    composites: {}
  }

  type DishTemplateGetPayload<S extends boolean | null | undefined | DishTemplateDefaultArgs> = $Result.GetResult<Prisma.$DishTemplatePayload, S>

  type DishTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishTemplateCountAggregateInputType | true
    }

  export interface DishTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DishTemplate'], meta: { name: 'DishTemplate' } }
    /**
     * Find zero or one DishTemplate that matches the filter.
     * @param {DishTemplateFindUniqueArgs} args - Arguments to find a DishTemplate
     * @example
     * // Get one DishTemplate
     * const dishTemplate = await prisma.dishTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishTemplateFindUniqueArgs>(args: SelectSubset<T, DishTemplateFindUniqueArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DishTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishTemplateFindUniqueOrThrowArgs} args - Arguments to find a DishTemplate
     * @example
     * // Get one DishTemplate
     * const dishTemplate = await prisma.dishTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, DishTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishTemplateFindFirstArgs} args - Arguments to find a DishTemplate
     * @example
     * // Get one DishTemplate
     * const dishTemplate = await prisma.dishTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishTemplateFindFirstArgs>(args?: SelectSubset<T, DishTemplateFindFirstArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DishTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishTemplateFindFirstOrThrowArgs} args - Arguments to find a DishTemplate
     * @example
     * // Get one DishTemplate
     * const dishTemplate = await prisma.dishTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, DishTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DishTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DishTemplates
     * const dishTemplates = await prisma.dishTemplate.findMany()
     * 
     * // Get first 10 DishTemplates
     * const dishTemplates = await prisma.dishTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishTemplateWithIdOnly = await prisma.dishTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishTemplateFindManyArgs>(args?: SelectSubset<T, DishTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DishTemplate.
     * @param {DishTemplateCreateArgs} args - Arguments to create a DishTemplate.
     * @example
     * // Create one DishTemplate
     * const DishTemplate = await prisma.dishTemplate.create({
     *   data: {
     *     // ... data to create a DishTemplate
     *   }
     * })
     * 
     */
    create<T extends DishTemplateCreateArgs>(args: SelectSubset<T, DishTemplateCreateArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DishTemplates.
     * @param {DishTemplateCreateManyArgs} args - Arguments to create many DishTemplates.
     * @example
     * // Create many DishTemplates
     * const dishTemplate = await prisma.dishTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishTemplateCreateManyArgs>(args?: SelectSubset<T, DishTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DishTemplates and returns the data saved in the database.
     * @param {DishTemplateCreateManyAndReturnArgs} args - Arguments to create many DishTemplates.
     * @example
     * // Create many DishTemplates
     * const dishTemplate = await prisma.dishTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DishTemplates and only return the `id`
     * const dishTemplateWithIdOnly = await prisma.dishTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, DishTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DishTemplate.
     * @param {DishTemplateDeleteArgs} args - Arguments to delete one DishTemplate.
     * @example
     * // Delete one DishTemplate
     * const DishTemplate = await prisma.dishTemplate.delete({
     *   where: {
     *     // ... filter to delete one DishTemplate
     *   }
     * })
     * 
     */
    delete<T extends DishTemplateDeleteArgs>(args: SelectSubset<T, DishTemplateDeleteArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DishTemplate.
     * @param {DishTemplateUpdateArgs} args - Arguments to update one DishTemplate.
     * @example
     * // Update one DishTemplate
     * const dishTemplate = await prisma.dishTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishTemplateUpdateArgs>(args: SelectSubset<T, DishTemplateUpdateArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DishTemplates.
     * @param {DishTemplateDeleteManyArgs} args - Arguments to filter DishTemplates to delete.
     * @example
     * // Delete a few DishTemplates
     * const { count } = await prisma.dishTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishTemplateDeleteManyArgs>(args?: SelectSubset<T, DishTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DishTemplates
     * const dishTemplate = await prisma.dishTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishTemplateUpdateManyArgs>(args: SelectSubset<T, DishTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DishTemplates and returns the data updated in the database.
     * @param {DishTemplateUpdateManyAndReturnArgs} args - Arguments to update many DishTemplates.
     * @example
     * // Update many DishTemplates
     * const dishTemplate = await prisma.dishTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DishTemplates and only return the `id`
     * const dishTemplateWithIdOnly = await prisma.dishTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DishTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, DishTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DishTemplate.
     * @param {DishTemplateUpsertArgs} args - Arguments to update or create a DishTemplate.
     * @example
     * // Update or create a DishTemplate
     * const dishTemplate = await prisma.dishTemplate.upsert({
     *   create: {
     *     // ... data to create a DishTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DishTemplate we want to update
     *   }
     * })
     */
    upsert<T extends DishTemplateUpsertArgs>(args: SelectSubset<T, DishTemplateUpsertArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DishTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishTemplateCountArgs} args - Arguments to filter DishTemplates to count.
     * @example
     * // Count the number of DishTemplates
     * const count = await prisma.dishTemplate.count({
     *   where: {
     *     // ... the filter for the DishTemplates we want to count
     *   }
     * })
    **/
    count<T extends DishTemplateCountArgs>(
      args?: Subset<T, DishTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DishTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DishTemplateAggregateArgs>(args: Subset<T, DishTemplateAggregateArgs>): Prisma.PrismaPromise<GetDishTemplateAggregateType<T>>

    /**
     * Group by DishTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishTemplateGroupByArgs} args - Group by arguments.
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
      T extends DishTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishTemplateGroupByArgs['orderBy'] }
        : { orderBy?: DishTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DishTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DishTemplate model
   */
  readonly fields: DishTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DishTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weeklyMenuItems<T extends DishTemplate$weeklyMenuItemsArgs<ExtArgs> = {}>(args?: Subset<T, DishTemplate$weeklyMenuItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DishTemplate model
   */
  interface DishTemplateFieldRefs {
    readonly id: FieldRef<"DishTemplate", 'String'>
    readonly name: FieldRef<"DishTemplate", 'String'>
    readonly description: FieldRef<"DishTemplate", 'String'>
    readonly image: FieldRef<"DishTemplate", 'String'>
    readonly category: FieldRef<"DishTemplate", 'DishTemplateCategory'>
    readonly price: FieldRef<"DishTemplate", 'Float'>
    readonly calories: FieldRef<"DishTemplate", 'Int'>
    readonly protein: FieldRef<"DishTemplate", 'Float'>
    readonly carbs: FieldRef<"DishTemplate", 'Float'>
    readonly fat: FieldRef<"DishTemplate", 'Float'>
    readonly ingredients: FieldRef<"DishTemplate", 'String'>
    readonly allergens: FieldRef<"DishTemplate", 'String[]'>
    readonly servingSize: FieldRef<"DishTemplate", 'Float'>
    readonly servingUnit: FieldRef<"DishTemplate", 'String'>
    readonly fatSaturated: FieldRef<"DishTemplate", 'Float'>
    readonly fatTrans: FieldRef<"DishTemplate", 'Float'>
    readonly cholesterol: FieldRef<"DishTemplate", 'Float'>
    readonly sodium: FieldRef<"DishTemplate", 'Float'>
    readonly fiber: FieldRef<"DishTemplate", 'Float'>
    readonly sugarTotal: FieldRef<"DishTemplate", 'Float'>
    readonly sugarAdded: FieldRef<"DishTemplate", 'Float'>
    readonly isActive: FieldRef<"DishTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"DishTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"DishTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DishTemplate findUnique
   */
  export type DishTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DishTemplate to fetch.
     */
    where: DishTemplateWhereUniqueInput
  }

  /**
   * DishTemplate findUniqueOrThrow
   */
  export type DishTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DishTemplate to fetch.
     */
    where: DishTemplateWhereUniqueInput
  }

  /**
   * DishTemplate findFirst
   */
  export type DishTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DishTemplate to fetch.
     */
    where?: DishTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishTemplates to fetch.
     */
    orderBy?: DishTemplateOrderByWithRelationInput | DishTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishTemplates.
     */
    cursor?: DishTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishTemplates.
     */
    distinct?: DishTemplateScalarFieldEnum | DishTemplateScalarFieldEnum[]
  }

  /**
   * DishTemplate findFirstOrThrow
   */
  export type DishTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DishTemplate to fetch.
     */
    where?: DishTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishTemplates to fetch.
     */
    orderBy?: DishTemplateOrderByWithRelationInput | DishTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DishTemplates.
     */
    cursor?: DishTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishTemplates.
     */
    distinct?: DishTemplateScalarFieldEnum | DishTemplateScalarFieldEnum[]
  }

  /**
   * DishTemplate findMany
   */
  export type DishTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * Filter, which DishTemplates to fetch.
     */
    where?: DishTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DishTemplates to fetch.
     */
    orderBy?: DishTemplateOrderByWithRelationInput | DishTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DishTemplates.
     */
    cursor?: DishTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DishTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DishTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DishTemplates.
     */
    distinct?: DishTemplateScalarFieldEnum | DishTemplateScalarFieldEnum[]
  }

  /**
   * DishTemplate create
   */
  export type DishTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a DishTemplate.
     */
    data: XOR<DishTemplateCreateInput, DishTemplateUncheckedCreateInput>
  }

  /**
   * DishTemplate createMany
   */
  export type DishTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DishTemplates.
     */
    data: DishTemplateCreateManyInput | DishTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DishTemplate createManyAndReturn
   */
  export type DishTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many DishTemplates.
     */
    data: DishTemplateCreateManyInput | DishTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DishTemplate update
   */
  export type DishTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a DishTemplate.
     */
    data: XOR<DishTemplateUpdateInput, DishTemplateUncheckedUpdateInput>
    /**
     * Choose, which DishTemplate to update.
     */
    where: DishTemplateWhereUniqueInput
  }

  /**
   * DishTemplate updateMany
   */
  export type DishTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DishTemplates.
     */
    data: XOR<DishTemplateUpdateManyMutationInput, DishTemplateUncheckedUpdateManyInput>
    /**
     * Filter which DishTemplates to update
     */
    where?: DishTemplateWhereInput
    /**
     * Limit how many DishTemplates to update.
     */
    limit?: number
  }

  /**
   * DishTemplate updateManyAndReturn
   */
  export type DishTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * The data used to update DishTemplates.
     */
    data: XOR<DishTemplateUpdateManyMutationInput, DishTemplateUncheckedUpdateManyInput>
    /**
     * Filter which DishTemplates to update
     */
    where?: DishTemplateWhereInput
    /**
     * Limit how many DishTemplates to update.
     */
    limit?: number
  }

  /**
   * DishTemplate upsert
   */
  export type DishTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the DishTemplate to update in case it exists.
     */
    where: DishTemplateWhereUniqueInput
    /**
     * In case the DishTemplate found by the `where` argument doesn't exist, create a new DishTemplate with this data.
     */
    create: XOR<DishTemplateCreateInput, DishTemplateUncheckedCreateInput>
    /**
     * In case the DishTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishTemplateUpdateInput, DishTemplateUncheckedUpdateInput>
  }

  /**
   * DishTemplate delete
   */
  export type DishTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
    /**
     * Filter which DishTemplate to delete.
     */
    where: DishTemplateWhereUniqueInput
  }

  /**
   * DishTemplate deleteMany
   */
  export type DishTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DishTemplates to delete
     */
    where?: DishTemplateWhereInput
    /**
     * Limit how many DishTemplates to delete.
     */
    limit?: number
  }

  /**
   * DishTemplate.weeklyMenuItems
   */
  export type DishTemplate$weeklyMenuItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    where?: WeeklyMenuItemWhereInput
    orderBy?: WeeklyMenuItemOrderByWithRelationInput | WeeklyMenuItemOrderByWithRelationInput[]
    cursor?: WeeklyMenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyMenuItemScalarFieldEnum | WeeklyMenuItemScalarFieldEnum[]
  }

  /**
   * DishTemplate without action
   */
  export type DishTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishTemplate
     */
    select?: DishTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DishTemplate
     */
    omit?: DishTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishTemplateInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyMenu
   */

  export type AggregateWeeklyMenu = {
    _count: WeeklyMenuCountAggregateOutputType | null
    _min: WeeklyMenuMinAggregateOutputType | null
    _max: WeeklyMenuMaxAggregateOutputType | null
  }

  export type WeeklyMenuMinAggregateOutputType = {
    id: string | null
    weekStart: Date | null
    weekEnd: Date | null
    status: $Enums.WeeklyMenuStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklyMenuMaxAggregateOutputType = {
    id: string | null
    weekStart: Date | null
    weekEnd: Date | null
    status: $Enums.WeeklyMenuStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklyMenuCountAggregateOutputType = {
    id: number
    weekStart: number
    weekEnd: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeeklyMenuMinAggregateInputType = {
    id?: true
    weekStart?: true
    weekEnd?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklyMenuMaxAggregateInputType = {
    id?: true
    weekStart?: true
    weekEnd?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklyMenuCountAggregateInputType = {
    id?: true
    weekStart?: true
    weekEnd?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeeklyMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyMenu to aggregate.
     */
    where?: WeeklyMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenus to fetch.
     */
    orderBy?: WeeklyMenuOrderByWithRelationInput | WeeklyMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyMenus
    **/
    _count?: true | WeeklyMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyMenuMaxAggregateInputType
  }

  export type GetWeeklyMenuAggregateType<T extends WeeklyMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyMenu[P]>
      : GetScalarType<T[P], AggregateWeeklyMenu[P]>
  }




  export type WeeklyMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyMenuWhereInput
    orderBy?: WeeklyMenuOrderByWithAggregationInput | WeeklyMenuOrderByWithAggregationInput[]
    by: WeeklyMenuScalarFieldEnum[] | WeeklyMenuScalarFieldEnum
    having?: WeeklyMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyMenuCountAggregateInputType | true
    _min?: WeeklyMenuMinAggregateInputType
    _max?: WeeklyMenuMaxAggregateInputType
  }

  export type WeeklyMenuGroupByOutputType = {
    id: string
    weekStart: Date
    weekEnd: Date
    status: $Enums.WeeklyMenuStatus
    createdAt: Date
    updatedAt: Date
    _count: WeeklyMenuCountAggregateOutputType | null
    _min: WeeklyMenuMinAggregateOutputType | null
    _max: WeeklyMenuMaxAggregateOutputType | null
  }

  type GetWeeklyMenuGroupByPayload<T extends WeeklyMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyMenuGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyMenuGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | WeeklyMenu$itemsArgs<ExtArgs>
    _count?: boolean | WeeklyMenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyMenu"]>

  export type WeeklyMenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weeklyMenu"]>

  export type WeeklyMenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weeklyMenu"]>

  export type WeeklyMenuSelectScalar = {
    id?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeeklyMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weekStart" | "weekEnd" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["weeklyMenu"]>
  export type WeeklyMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WeeklyMenu$itemsArgs<ExtArgs>
    _count?: boolean | WeeklyMenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeeklyMenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeeklyMenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeeklyMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyMenu"
    objects: {
      items: Prisma.$WeeklyMenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weekStart: Date
      weekEnd: Date
      status: $Enums.WeeklyMenuStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weeklyMenu"]>
    composites: {}
  }

  type WeeklyMenuGetPayload<S extends boolean | null | undefined | WeeklyMenuDefaultArgs> = $Result.GetResult<Prisma.$WeeklyMenuPayload, S>

  type WeeklyMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyMenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyMenuCountAggregateInputType | true
    }

  export interface WeeklyMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyMenu'], meta: { name: 'WeeklyMenu' } }
    /**
     * Find zero or one WeeklyMenu that matches the filter.
     * @param {WeeklyMenuFindUniqueArgs} args - Arguments to find a WeeklyMenu
     * @example
     * // Get one WeeklyMenu
     * const weeklyMenu = await prisma.weeklyMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyMenuFindUniqueArgs>(args: SelectSubset<T, WeeklyMenuFindUniqueArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyMenu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyMenuFindUniqueOrThrowArgs} args - Arguments to find a WeeklyMenu
     * @example
     * // Get one WeeklyMenu
     * const weeklyMenu = await prisma.weeklyMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyMenuFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyMenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuFindFirstArgs} args - Arguments to find a WeeklyMenu
     * @example
     * // Get one WeeklyMenu
     * const weeklyMenu = await prisma.weeklyMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyMenuFindFirstArgs>(args?: SelectSubset<T, WeeklyMenuFindFirstArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuFindFirstOrThrowArgs} args - Arguments to find a WeeklyMenu
     * @example
     * // Get one WeeklyMenu
     * const weeklyMenu = await prisma.weeklyMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyMenuFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyMenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyMenus
     * const weeklyMenus = await prisma.weeklyMenu.findMany()
     * 
     * // Get first 10 WeeklyMenus
     * const weeklyMenus = await prisma.weeklyMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyMenuWithIdOnly = await prisma.weeklyMenu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyMenuFindManyArgs>(args?: SelectSubset<T, WeeklyMenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyMenu.
     * @param {WeeklyMenuCreateArgs} args - Arguments to create a WeeklyMenu.
     * @example
     * // Create one WeeklyMenu
     * const WeeklyMenu = await prisma.weeklyMenu.create({
     *   data: {
     *     // ... data to create a WeeklyMenu
     *   }
     * })
     * 
     */
    create<T extends WeeklyMenuCreateArgs>(args: SelectSubset<T, WeeklyMenuCreateArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyMenus.
     * @param {WeeklyMenuCreateManyArgs} args - Arguments to create many WeeklyMenus.
     * @example
     * // Create many WeeklyMenus
     * const weeklyMenu = await prisma.weeklyMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyMenuCreateManyArgs>(args?: SelectSubset<T, WeeklyMenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyMenus and returns the data saved in the database.
     * @param {WeeklyMenuCreateManyAndReturnArgs} args - Arguments to create many WeeklyMenus.
     * @example
     * // Create many WeeklyMenus
     * const weeklyMenu = await prisma.weeklyMenu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyMenus and only return the `id`
     * const weeklyMenuWithIdOnly = await prisma.weeklyMenu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyMenuCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyMenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyMenu.
     * @param {WeeklyMenuDeleteArgs} args - Arguments to delete one WeeklyMenu.
     * @example
     * // Delete one WeeklyMenu
     * const WeeklyMenu = await prisma.weeklyMenu.delete({
     *   where: {
     *     // ... filter to delete one WeeklyMenu
     *   }
     * })
     * 
     */
    delete<T extends WeeklyMenuDeleteArgs>(args: SelectSubset<T, WeeklyMenuDeleteArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyMenu.
     * @param {WeeklyMenuUpdateArgs} args - Arguments to update one WeeklyMenu.
     * @example
     * // Update one WeeklyMenu
     * const weeklyMenu = await prisma.weeklyMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyMenuUpdateArgs>(args: SelectSubset<T, WeeklyMenuUpdateArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyMenus.
     * @param {WeeklyMenuDeleteManyArgs} args - Arguments to filter WeeklyMenus to delete.
     * @example
     * // Delete a few WeeklyMenus
     * const { count } = await prisma.weeklyMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyMenuDeleteManyArgs>(args?: SelectSubset<T, WeeklyMenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyMenus
     * const weeklyMenu = await prisma.weeklyMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyMenuUpdateManyArgs>(args: SelectSubset<T, WeeklyMenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyMenus and returns the data updated in the database.
     * @param {WeeklyMenuUpdateManyAndReturnArgs} args - Arguments to update many WeeklyMenus.
     * @example
     * // Update many WeeklyMenus
     * const weeklyMenu = await prisma.weeklyMenu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyMenus and only return the `id`
     * const weeklyMenuWithIdOnly = await prisma.weeklyMenu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklyMenuUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyMenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyMenu.
     * @param {WeeklyMenuUpsertArgs} args - Arguments to update or create a WeeklyMenu.
     * @example
     * // Update or create a WeeklyMenu
     * const weeklyMenu = await prisma.weeklyMenu.upsert({
     *   create: {
     *     // ... data to create a WeeklyMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyMenu we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyMenuUpsertArgs>(args: SelectSubset<T, WeeklyMenuUpsertArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuCountArgs} args - Arguments to filter WeeklyMenus to count.
     * @example
     * // Count the number of WeeklyMenus
     * const count = await prisma.weeklyMenu.count({
     *   where: {
     *     // ... the filter for the WeeklyMenus we want to count
     *   }
     * })
    **/
    count<T extends WeeklyMenuCountArgs>(
      args?: Subset<T, WeeklyMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyMenuAggregateArgs>(args: Subset<T, WeeklyMenuAggregateArgs>): Prisma.PrismaPromise<GetWeeklyMenuAggregateType<T>>

    /**
     * Group by WeeklyMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuGroupByArgs} args - Group by arguments.
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
      T extends WeeklyMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyMenuGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyMenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyMenu model
   */
  readonly fields: WeeklyMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends WeeklyMenu$itemsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyMenu$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WeeklyMenu model
   */
  interface WeeklyMenuFieldRefs {
    readonly id: FieldRef<"WeeklyMenu", 'String'>
    readonly weekStart: FieldRef<"WeeklyMenu", 'DateTime'>
    readonly weekEnd: FieldRef<"WeeklyMenu", 'DateTime'>
    readonly status: FieldRef<"WeeklyMenu", 'WeeklyMenuStatus'>
    readonly createdAt: FieldRef<"WeeklyMenu", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklyMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyMenu findUnique
   */
  export type WeeklyMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenu to fetch.
     */
    where: WeeklyMenuWhereUniqueInput
  }

  /**
   * WeeklyMenu findUniqueOrThrow
   */
  export type WeeklyMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenu to fetch.
     */
    where: WeeklyMenuWhereUniqueInput
  }

  /**
   * WeeklyMenu findFirst
   */
  export type WeeklyMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenu to fetch.
     */
    where?: WeeklyMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenus to fetch.
     */
    orderBy?: WeeklyMenuOrderByWithRelationInput | WeeklyMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyMenus.
     */
    cursor?: WeeklyMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyMenus.
     */
    distinct?: WeeklyMenuScalarFieldEnum | WeeklyMenuScalarFieldEnum[]
  }

  /**
   * WeeklyMenu findFirstOrThrow
   */
  export type WeeklyMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenu to fetch.
     */
    where?: WeeklyMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenus to fetch.
     */
    orderBy?: WeeklyMenuOrderByWithRelationInput | WeeklyMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyMenus.
     */
    cursor?: WeeklyMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyMenus.
     */
    distinct?: WeeklyMenuScalarFieldEnum | WeeklyMenuScalarFieldEnum[]
  }

  /**
   * WeeklyMenu findMany
   */
  export type WeeklyMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenus to fetch.
     */
    where?: WeeklyMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenus to fetch.
     */
    orderBy?: WeeklyMenuOrderByWithRelationInput | WeeklyMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyMenus.
     */
    cursor?: WeeklyMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyMenus.
     */
    distinct?: WeeklyMenuScalarFieldEnum | WeeklyMenuScalarFieldEnum[]
  }

  /**
   * WeeklyMenu create
   */
  export type WeeklyMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyMenu.
     */
    data: XOR<WeeklyMenuCreateInput, WeeklyMenuUncheckedCreateInput>
  }

  /**
   * WeeklyMenu createMany
   */
  export type WeeklyMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyMenus.
     */
    data: WeeklyMenuCreateManyInput | WeeklyMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyMenu createManyAndReturn
   */
  export type WeeklyMenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyMenus.
     */
    data: WeeklyMenuCreateManyInput | WeeklyMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyMenu update
   */
  export type WeeklyMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyMenu.
     */
    data: XOR<WeeklyMenuUpdateInput, WeeklyMenuUncheckedUpdateInput>
    /**
     * Choose, which WeeklyMenu to update.
     */
    where: WeeklyMenuWhereUniqueInput
  }

  /**
   * WeeklyMenu updateMany
   */
  export type WeeklyMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyMenus.
     */
    data: XOR<WeeklyMenuUpdateManyMutationInput, WeeklyMenuUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyMenus to update
     */
    where?: WeeklyMenuWhereInput
    /**
     * Limit how many WeeklyMenus to update.
     */
    limit?: number
  }

  /**
   * WeeklyMenu updateManyAndReturn
   */
  export type WeeklyMenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyMenus.
     */
    data: XOR<WeeklyMenuUpdateManyMutationInput, WeeklyMenuUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyMenus to update
     */
    where?: WeeklyMenuWhereInput
    /**
     * Limit how many WeeklyMenus to update.
     */
    limit?: number
  }

  /**
   * WeeklyMenu upsert
   */
  export type WeeklyMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyMenu to update in case it exists.
     */
    where: WeeklyMenuWhereUniqueInput
    /**
     * In case the WeeklyMenu found by the `where` argument doesn't exist, create a new WeeklyMenu with this data.
     */
    create: XOR<WeeklyMenuCreateInput, WeeklyMenuUncheckedCreateInput>
    /**
     * In case the WeeklyMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyMenuUpdateInput, WeeklyMenuUncheckedUpdateInput>
  }

  /**
   * WeeklyMenu delete
   */
  export type WeeklyMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
    /**
     * Filter which WeeklyMenu to delete.
     */
    where: WeeklyMenuWhereUniqueInput
  }

  /**
   * WeeklyMenu deleteMany
   */
  export type WeeklyMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyMenus to delete
     */
    where?: WeeklyMenuWhereInput
    /**
     * Limit how many WeeklyMenus to delete.
     */
    limit?: number
  }

  /**
   * WeeklyMenu.items
   */
  export type WeeklyMenu$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    where?: WeeklyMenuItemWhereInput
    orderBy?: WeeklyMenuItemOrderByWithRelationInput | WeeklyMenuItemOrderByWithRelationInput[]
    cursor?: WeeklyMenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyMenuItemScalarFieldEnum | WeeklyMenuItemScalarFieldEnum[]
  }

  /**
   * WeeklyMenu without action
   */
  export type WeeklyMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenu
     */
    select?: WeeklyMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenu
     */
    omit?: WeeklyMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyMenuItem
   */

  export type AggregateWeeklyMenuItem = {
    _count: WeeklyMenuItemCountAggregateOutputType | null
    _avg: WeeklyMenuItemAvgAggregateOutputType | null
    _sum: WeeklyMenuItemSumAggregateOutputType | null
    _min: WeeklyMenuItemMinAggregateOutputType | null
    _max: WeeklyMenuItemMaxAggregateOutputType | null
  }

  export type WeeklyMenuItemAvgAggregateOutputType = {
    position: number | null
  }

  export type WeeklyMenuItemSumAggregateOutputType = {
    position: number | null
  }

  export type WeeklyMenuItemMinAggregateOutputType = {
    id: string | null
    menuId: string | null
    dishId: string | null
    position: number | null
  }

  export type WeeklyMenuItemMaxAggregateOutputType = {
    id: string | null
    menuId: string | null
    dishId: string | null
    position: number | null
  }

  export type WeeklyMenuItemCountAggregateOutputType = {
    id: number
    menuId: number
    dishId: number
    position: number
    _all: number
  }


  export type WeeklyMenuItemAvgAggregateInputType = {
    position?: true
  }

  export type WeeklyMenuItemSumAggregateInputType = {
    position?: true
  }

  export type WeeklyMenuItemMinAggregateInputType = {
    id?: true
    menuId?: true
    dishId?: true
    position?: true
  }

  export type WeeklyMenuItemMaxAggregateInputType = {
    id?: true
    menuId?: true
    dishId?: true
    position?: true
  }

  export type WeeklyMenuItemCountAggregateInputType = {
    id?: true
    menuId?: true
    dishId?: true
    position?: true
    _all?: true
  }

  export type WeeklyMenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyMenuItem to aggregate.
     */
    where?: WeeklyMenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenuItems to fetch.
     */
    orderBy?: WeeklyMenuItemOrderByWithRelationInput | WeeklyMenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyMenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyMenuItems
    **/
    _count?: true | WeeklyMenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyMenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyMenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyMenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyMenuItemMaxAggregateInputType
  }

  export type GetWeeklyMenuItemAggregateType<T extends WeeklyMenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyMenuItem[P]>
      : GetScalarType<T[P], AggregateWeeklyMenuItem[P]>
  }




  export type WeeklyMenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyMenuItemWhereInput
    orderBy?: WeeklyMenuItemOrderByWithAggregationInput | WeeklyMenuItemOrderByWithAggregationInput[]
    by: WeeklyMenuItemScalarFieldEnum[] | WeeklyMenuItemScalarFieldEnum
    having?: WeeklyMenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyMenuItemCountAggregateInputType | true
    _avg?: WeeklyMenuItemAvgAggregateInputType
    _sum?: WeeklyMenuItemSumAggregateInputType
    _min?: WeeklyMenuItemMinAggregateInputType
    _max?: WeeklyMenuItemMaxAggregateInputType
  }

  export type WeeklyMenuItemGroupByOutputType = {
    id: string
    menuId: string
    dishId: string
    position: number
    _count: WeeklyMenuItemCountAggregateOutputType | null
    _avg: WeeklyMenuItemAvgAggregateOutputType | null
    _sum: WeeklyMenuItemSumAggregateOutputType | null
    _min: WeeklyMenuItemMinAggregateOutputType | null
    _max: WeeklyMenuItemMaxAggregateOutputType | null
  }

  type GetWeeklyMenuItemGroupByPayload<T extends WeeklyMenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyMenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyMenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyMenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyMenuItemGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyMenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    dishId?: boolean
    position?: boolean
    menu?: boolean | WeeklyMenuDefaultArgs<ExtArgs>
    dish?: boolean | DishTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyMenuItem"]>

  export type WeeklyMenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    dishId?: boolean
    position?: boolean
    menu?: boolean | WeeklyMenuDefaultArgs<ExtArgs>
    dish?: boolean | DishTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyMenuItem"]>

  export type WeeklyMenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuId?: boolean
    dishId?: boolean
    position?: boolean
    menu?: boolean | WeeklyMenuDefaultArgs<ExtArgs>
    dish?: boolean | DishTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyMenuItem"]>

  export type WeeklyMenuItemSelectScalar = {
    id?: boolean
    menuId?: boolean
    dishId?: boolean
    position?: boolean
  }

  export type WeeklyMenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "menuId" | "dishId" | "position", ExtArgs["result"]["weeklyMenuItem"]>
  export type WeeklyMenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | WeeklyMenuDefaultArgs<ExtArgs>
    dish?: boolean | DishTemplateDefaultArgs<ExtArgs>
  }
  export type WeeklyMenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | WeeklyMenuDefaultArgs<ExtArgs>
    dish?: boolean | DishTemplateDefaultArgs<ExtArgs>
  }
  export type WeeklyMenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | WeeklyMenuDefaultArgs<ExtArgs>
    dish?: boolean | DishTemplateDefaultArgs<ExtArgs>
  }

  export type $WeeklyMenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyMenuItem"
    objects: {
      menu: Prisma.$WeeklyMenuPayload<ExtArgs>
      dish: Prisma.$DishTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      menuId: string
      dishId: string
      position: number
    }, ExtArgs["result"]["weeklyMenuItem"]>
    composites: {}
  }

  type WeeklyMenuItemGetPayload<S extends boolean | null | undefined | WeeklyMenuItemDefaultArgs> = $Result.GetResult<Prisma.$WeeklyMenuItemPayload, S>

  type WeeklyMenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyMenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyMenuItemCountAggregateInputType | true
    }

  export interface WeeklyMenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyMenuItem'], meta: { name: 'WeeklyMenuItem' } }
    /**
     * Find zero or one WeeklyMenuItem that matches the filter.
     * @param {WeeklyMenuItemFindUniqueArgs} args - Arguments to find a WeeklyMenuItem
     * @example
     * // Get one WeeklyMenuItem
     * const weeklyMenuItem = await prisma.weeklyMenuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyMenuItemFindUniqueArgs>(args: SelectSubset<T, WeeklyMenuItemFindUniqueArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyMenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyMenuItemFindUniqueOrThrowArgs} args - Arguments to find a WeeklyMenuItem
     * @example
     * // Get one WeeklyMenuItem
     * const weeklyMenuItem = await prisma.weeklyMenuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyMenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyMenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyMenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuItemFindFirstArgs} args - Arguments to find a WeeklyMenuItem
     * @example
     * // Get one WeeklyMenuItem
     * const weeklyMenuItem = await prisma.weeklyMenuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyMenuItemFindFirstArgs>(args?: SelectSubset<T, WeeklyMenuItemFindFirstArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyMenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuItemFindFirstOrThrowArgs} args - Arguments to find a WeeklyMenuItem
     * @example
     * // Get one WeeklyMenuItem
     * const weeklyMenuItem = await prisma.weeklyMenuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyMenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyMenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyMenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyMenuItems
     * const weeklyMenuItems = await prisma.weeklyMenuItem.findMany()
     * 
     * // Get first 10 WeeklyMenuItems
     * const weeklyMenuItems = await prisma.weeklyMenuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyMenuItemWithIdOnly = await prisma.weeklyMenuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyMenuItemFindManyArgs>(args?: SelectSubset<T, WeeklyMenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyMenuItem.
     * @param {WeeklyMenuItemCreateArgs} args - Arguments to create a WeeklyMenuItem.
     * @example
     * // Create one WeeklyMenuItem
     * const WeeklyMenuItem = await prisma.weeklyMenuItem.create({
     *   data: {
     *     // ... data to create a WeeklyMenuItem
     *   }
     * })
     * 
     */
    create<T extends WeeklyMenuItemCreateArgs>(args: SelectSubset<T, WeeklyMenuItemCreateArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyMenuItems.
     * @param {WeeklyMenuItemCreateManyArgs} args - Arguments to create many WeeklyMenuItems.
     * @example
     * // Create many WeeklyMenuItems
     * const weeklyMenuItem = await prisma.weeklyMenuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyMenuItemCreateManyArgs>(args?: SelectSubset<T, WeeklyMenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyMenuItems and returns the data saved in the database.
     * @param {WeeklyMenuItemCreateManyAndReturnArgs} args - Arguments to create many WeeklyMenuItems.
     * @example
     * // Create many WeeklyMenuItems
     * const weeklyMenuItem = await prisma.weeklyMenuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyMenuItems and only return the `id`
     * const weeklyMenuItemWithIdOnly = await prisma.weeklyMenuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyMenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyMenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyMenuItem.
     * @param {WeeklyMenuItemDeleteArgs} args - Arguments to delete one WeeklyMenuItem.
     * @example
     * // Delete one WeeklyMenuItem
     * const WeeklyMenuItem = await prisma.weeklyMenuItem.delete({
     *   where: {
     *     // ... filter to delete one WeeklyMenuItem
     *   }
     * })
     * 
     */
    delete<T extends WeeklyMenuItemDeleteArgs>(args: SelectSubset<T, WeeklyMenuItemDeleteArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyMenuItem.
     * @param {WeeklyMenuItemUpdateArgs} args - Arguments to update one WeeklyMenuItem.
     * @example
     * // Update one WeeklyMenuItem
     * const weeklyMenuItem = await prisma.weeklyMenuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyMenuItemUpdateArgs>(args: SelectSubset<T, WeeklyMenuItemUpdateArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyMenuItems.
     * @param {WeeklyMenuItemDeleteManyArgs} args - Arguments to filter WeeklyMenuItems to delete.
     * @example
     * // Delete a few WeeklyMenuItems
     * const { count } = await prisma.weeklyMenuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyMenuItemDeleteManyArgs>(args?: SelectSubset<T, WeeklyMenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyMenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyMenuItems
     * const weeklyMenuItem = await prisma.weeklyMenuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyMenuItemUpdateManyArgs>(args: SelectSubset<T, WeeklyMenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyMenuItems and returns the data updated in the database.
     * @param {WeeklyMenuItemUpdateManyAndReturnArgs} args - Arguments to update many WeeklyMenuItems.
     * @example
     * // Update many WeeklyMenuItems
     * const weeklyMenuItem = await prisma.weeklyMenuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyMenuItems and only return the `id`
     * const weeklyMenuItemWithIdOnly = await prisma.weeklyMenuItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeeklyMenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyMenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyMenuItem.
     * @param {WeeklyMenuItemUpsertArgs} args - Arguments to update or create a WeeklyMenuItem.
     * @example
     * // Update or create a WeeklyMenuItem
     * const weeklyMenuItem = await prisma.weeklyMenuItem.upsert({
     *   create: {
     *     // ... data to create a WeeklyMenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyMenuItem we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyMenuItemUpsertArgs>(args: SelectSubset<T, WeeklyMenuItemUpsertArgs<ExtArgs>>): Prisma__WeeklyMenuItemClient<$Result.GetResult<Prisma.$WeeklyMenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyMenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuItemCountArgs} args - Arguments to filter WeeklyMenuItems to count.
     * @example
     * // Count the number of WeeklyMenuItems
     * const count = await prisma.weeklyMenuItem.count({
     *   where: {
     *     // ... the filter for the WeeklyMenuItems we want to count
     *   }
     * })
    **/
    count<T extends WeeklyMenuItemCountArgs>(
      args?: Subset<T, WeeklyMenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyMenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyMenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyMenuItemAggregateArgs>(args: Subset<T, WeeklyMenuItemAggregateArgs>): Prisma.PrismaPromise<GetWeeklyMenuItemAggregateType<T>>

    /**
     * Group by WeeklyMenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyMenuItemGroupByArgs} args - Group by arguments.
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
      T extends WeeklyMenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyMenuItemGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyMenuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyMenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyMenuItem model
   */
  readonly fields: WeeklyMenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyMenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyMenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends WeeklyMenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyMenuDefaultArgs<ExtArgs>>): Prisma__WeeklyMenuClient<$Result.GetResult<Prisma.$WeeklyMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dish<T extends DishTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishTemplateDefaultArgs<ExtArgs>>): Prisma__DishTemplateClient<$Result.GetResult<Prisma.$DishTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeeklyMenuItem model
   */
  interface WeeklyMenuItemFieldRefs {
    readonly id: FieldRef<"WeeklyMenuItem", 'String'>
    readonly menuId: FieldRef<"WeeklyMenuItem", 'String'>
    readonly dishId: FieldRef<"WeeklyMenuItem", 'String'>
    readonly position: FieldRef<"WeeklyMenuItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyMenuItem findUnique
   */
  export type WeeklyMenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenuItem to fetch.
     */
    where: WeeklyMenuItemWhereUniqueInput
  }

  /**
   * WeeklyMenuItem findUniqueOrThrow
   */
  export type WeeklyMenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenuItem to fetch.
     */
    where: WeeklyMenuItemWhereUniqueInput
  }

  /**
   * WeeklyMenuItem findFirst
   */
  export type WeeklyMenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenuItem to fetch.
     */
    where?: WeeklyMenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenuItems to fetch.
     */
    orderBy?: WeeklyMenuItemOrderByWithRelationInput | WeeklyMenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyMenuItems.
     */
    cursor?: WeeklyMenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyMenuItems.
     */
    distinct?: WeeklyMenuItemScalarFieldEnum | WeeklyMenuItemScalarFieldEnum[]
  }

  /**
   * WeeklyMenuItem findFirstOrThrow
   */
  export type WeeklyMenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenuItem to fetch.
     */
    where?: WeeklyMenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenuItems to fetch.
     */
    orderBy?: WeeklyMenuItemOrderByWithRelationInput | WeeklyMenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyMenuItems.
     */
    cursor?: WeeklyMenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyMenuItems.
     */
    distinct?: WeeklyMenuItemScalarFieldEnum | WeeklyMenuItemScalarFieldEnum[]
  }

  /**
   * WeeklyMenuItem findMany
   */
  export type WeeklyMenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyMenuItems to fetch.
     */
    where?: WeeklyMenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyMenuItems to fetch.
     */
    orderBy?: WeeklyMenuItemOrderByWithRelationInput | WeeklyMenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyMenuItems.
     */
    cursor?: WeeklyMenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyMenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyMenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyMenuItems.
     */
    distinct?: WeeklyMenuItemScalarFieldEnum | WeeklyMenuItemScalarFieldEnum[]
  }

  /**
   * WeeklyMenuItem create
   */
  export type WeeklyMenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyMenuItem.
     */
    data: XOR<WeeklyMenuItemCreateInput, WeeklyMenuItemUncheckedCreateInput>
  }

  /**
   * WeeklyMenuItem createMany
   */
  export type WeeklyMenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyMenuItems.
     */
    data: WeeklyMenuItemCreateManyInput | WeeklyMenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyMenuItem createManyAndReturn
   */
  export type WeeklyMenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyMenuItems.
     */
    data: WeeklyMenuItemCreateManyInput | WeeklyMenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyMenuItem update
   */
  export type WeeklyMenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyMenuItem.
     */
    data: XOR<WeeklyMenuItemUpdateInput, WeeklyMenuItemUncheckedUpdateInput>
    /**
     * Choose, which WeeklyMenuItem to update.
     */
    where: WeeklyMenuItemWhereUniqueInput
  }

  /**
   * WeeklyMenuItem updateMany
   */
  export type WeeklyMenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyMenuItems.
     */
    data: XOR<WeeklyMenuItemUpdateManyMutationInput, WeeklyMenuItemUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyMenuItems to update
     */
    where?: WeeklyMenuItemWhereInput
    /**
     * Limit how many WeeklyMenuItems to update.
     */
    limit?: number
  }

  /**
   * WeeklyMenuItem updateManyAndReturn
   */
  export type WeeklyMenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyMenuItems.
     */
    data: XOR<WeeklyMenuItemUpdateManyMutationInput, WeeklyMenuItemUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyMenuItems to update
     */
    where?: WeeklyMenuItemWhereInput
    /**
     * Limit how many WeeklyMenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyMenuItem upsert
   */
  export type WeeklyMenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyMenuItem to update in case it exists.
     */
    where: WeeklyMenuItemWhereUniqueInput
    /**
     * In case the WeeklyMenuItem found by the `where` argument doesn't exist, create a new WeeklyMenuItem with this data.
     */
    create: XOR<WeeklyMenuItemCreateInput, WeeklyMenuItemUncheckedCreateInput>
    /**
     * In case the WeeklyMenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyMenuItemUpdateInput, WeeklyMenuItemUncheckedUpdateInput>
  }

  /**
   * WeeklyMenuItem delete
   */
  export type WeeklyMenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
    /**
     * Filter which WeeklyMenuItem to delete.
     */
    where: WeeklyMenuItemWhereUniqueInput
  }

  /**
   * WeeklyMenuItem deleteMany
   */
  export type WeeklyMenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyMenuItems to delete
     */
    where?: WeeklyMenuItemWhereInput
    /**
     * Limit how many WeeklyMenuItems to delete.
     */
    limit?: number
  }

  /**
   * WeeklyMenuItem without action
   */
  export type WeeklyMenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyMenuItem
     */
    select?: WeeklyMenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyMenuItem
     */
    omit?: WeeklyMenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyMenuItemInclude<ExtArgs> | null
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


  export const ProfileScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    whatsapp: 'whatsapp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    status: 'status',
    total: 'total',
    deliveryAddress: 'deliveryAddress',
    deliveryInstructions: 'deliveryInstructions',
    payphoneTransactionId: 'payphoneTransactionId',
    deliveryDate: 'deliveryDate',
    deliverySlot: 'deliverySlot',
    taxIdType: 'taxIdType',
    taxId: 'taxId',
    customerEmail: 'customerEmail',
    invoiceNumber: 'invoiceNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    dishId: 'dishId',
    dishName: 'dishName',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const DishTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    category: 'category',
    price: 'price',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    ingredients: 'ingredients',
    allergens: 'allergens',
    servingSize: 'servingSize',
    servingUnit: 'servingUnit',
    fatSaturated: 'fatSaturated',
    fatTrans: 'fatTrans',
    cholesterol: 'cholesterol',
    sodium: 'sodium',
    fiber: 'fiber',
    sugarTotal: 'sugarTotal',
    sugarAdded: 'sugarAdded',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DishTemplateScalarFieldEnum = (typeof DishTemplateScalarFieldEnum)[keyof typeof DishTemplateScalarFieldEnum]


  export const WeeklyMenuScalarFieldEnum: {
    id: 'id',
    weekStart: 'weekStart',
    weekEnd: 'weekEnd',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeeklyMenuScalarFieldEnum = (typeof WeeklyMenuScalarFieldEnum)[keyof typeof WeeklyMenuScalarFieldEnum]


  export const WeeklyMenuItemScalarFieldEnum: {
    id: 'id',
    menuId: 'menuId',
    dishId: 'dishId',
    position: 'position'
  };

  export type WeeklyMenuItemScalarFieldEnum = (typeof WeeklyMenuItemScalarFieldEnum)[keyof typeof WeeklyMenuItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DishTemplateCategory'
   */
  export type EnumDishTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishTemplateCategory'>
    


  /**
   * Reference to a field of type 'DishTemplateCategory[]'
   */
  export type ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishTemplateCategory[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'WeeklyMenuStatus'
   */
  export type EnumWeeklyMenuStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeeklyMenuStatus'>
    


  /**
   * Reference to a field of type 'WeeklyMenuStatus[]'
   */
  export type ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeeklyMenuStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    fullName?: StringNullableFilter<"Profile"> | string | null
    whatsapp?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    orders?: OrderListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    fullName?: StringNullableFilter<"Profile"> | string | null
    whatsapp?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    orders?: OrderListRelationFilter
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    fullName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: UuidFilter<"Order"> | string
    profileId?: UuidFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    deliveryAddress?: StringFilter<"Order"> | string
    deliveryInstructions?: StringNullableFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliverySlot?: StringNullableFilter<"Order"> | string | null
    taxIdType?: StringFilter<"Order"> | string
    taxId?: StringFilter<"Order"> | string
    customerEmail?: StringNullableFilter<"Order"> | string | null
    invoiceNumber?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrderInput | SortOrder
    payphoneTransactionId?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    deliverySlot?: SortOrderInput | SortOrder
    taxIdType?: SortOrder
    taxId?: SortOrder
    customerEmail?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    profileId?: UuidFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    deliveryAddress?: StringFilter<"Order"> | string
    deliveryInstructions?: StringNullableFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliverySlot?: StringNullableFilter<"Order"> | string | null
    taxIdType?: StringFilter<"Order"> | string
    taxId?: StringFilter<"Order"> | string
    customerEmail?: StringNullableFilter<"Order"> | string | null
    invoiceNumber?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    items?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrderInput | SortOrder
    payphoneTransactionId?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    deliverySlot?: SortOrderInput | SortOrder
    taxIdType?: SortOrder
    taxId?: SortOrder
    customerEmail?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Order"> | string
    profileId?: UuidWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    total?: FloatWithAggregatesFilter<"Order"> | number
    deliveryAddress?: StringWithAggregatesFilter<"Order"> | string
    deliveryInstructions?: StringNullableWithAggregatesFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    deliverySlot?: StringNullableWithAggregatesFilter<"Order"> | string | null
    taxIdType?: StringWithAggregatesFilter<"Order"> | string
    taxId?: StringWithAggregatesFilter<"Order"> | string
    customerEmail?: StringNullableWithAggregatesFilter<"Order"> | string | null
    invoiceNumber?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: UuidFilter<"OrderItem"> | string
    orderId?: UuidFilter<"OrderItem"> | string
    dishId?: StringFilter<"OrderItem"> | string
    dishName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    dishName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: UuidFilter<"OrderItem"> | string
    dishId?: StringFilter<"OrderItem"> | string
    dishName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    dishName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"OrderItem"> | string
    orderId?: UuidWithAggregatesFilter<"OrderItem"> | string
    dishId?: StringWithAggregatesFilter<"OrderItem"> | string
    dishName?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type DishTemplateWhereInput = {
    AND?: DishTemplateWhereInput | DishTemplateWhereInput[]
    OR?: DishTemplateWhereInput[]
    NOT?: DishTemplateWhereInput | DishTemplateWhereInput[]
    id?: UuidFilter<"DishTemplate"> | string
    name?: StringFilter<"DishTemplate"> | string
    description?: StringFilter<"DishTemplate"> | string
    image?: StringNullableFilter<"DishTemplate"> | string | null
    category?: EnumDishTemplateCategoryFilter<"DishTemplate"> | $Enums.DishTemplateCategory
    price?: FloatFilter<"DishTemplate"> | number
    calories?: IntNullableFilter<"DishTemplate"> | number | null
    protein?: FloatNullableFilter<"DishTemplate"> | number | null
    carbs?: FloatNullableFilter<"DishTemplate"> | number | null
    fat?: FloatNullableFilter<"DishTemplate"> | number | null
    ingredients?: StringNullableFilter<"DishTemplate"> | string | null
    allergens?: StringNullableListFilter<"DishTemplate">
    servingSize?: FloatNullableFilter<"DishTemplate"> | number | null
    servingUnit?: StringNullableFilter<"DishTemplate"> | string | null
    fatSaturated?: FloatNullableFilter<"DishTemplate"> | number | null
    fatTrans?: FloatNullableFilter<"DishTemplate"> | number | null
    cholesterol?: FloatNullableFilter<"DishTemplate"> | number | null
    sodium?: FloatNullableFilter<"DishTemplate"> | number | null
    fiber?: FloatNullableFilter<"DishTemplate"> | number | null
    sugarTotal?: FloatNullableFilter<"DishTemplate"> | number | null
    sugarAdded?: FloatNullableFilter<"DishTemplate"> | number | null
    isActive?: BoolFilter<"DishTemplate"> | boolean
    createdAt?: DateTimeFilter<"DishTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"DishTemplate"> | Date | string
    weeklyMenuItems?: WeeklyMenuItemListRelationFilter
  }

  export type DishTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    price?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    ingredients?: SortOrderInput | SortOrder
    allergens?: SortOrder
    servingSize?: SortOrderInput | SortOrder
    servingUnit?: SortOrderInput | SortOrder
    fatSaturated?: SortOrderInput | SortOrder
    fatTrans?: SortOrderInput | SortOrder
    cholesterol?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    fiber?: SortOrderInput | SortOrder
    sugarTotal?: SortOrderInput | SortOrder
    sugarAdded?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weeklyMenuItems?: WeeklyMenuItemOrderByRelationAggregateInput
  }

  export type DishTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DishTemplateWhereInput | DishTemplateWhereInput[]
    OR?: DishTemplateWhereInput[]
    NOT?: DishTemplateWhereInput | DishTemplateWhereInput[]
    name?: StringFilter<"DishTemplate"> | string
    description?: StringFilter<"DishTemplate"> | string
    image?: StringNullableFilter<"DishTemplate"> | string | null
    category?: EnumDishTemplateCategoryFilter<"DishTemplate"> | $Enums.DishTemplateCategory
    price?: FloatFilter<"DishTemplate"> | number
    calories?: IntNullableFilter<"DishTemplate"> | number | null
    protein?: FloatNullableFilter<"DishTemplate"> | number | null
    carbs?: FloatNullableFilter<"DishTemplate"> | number | null
    fat?: FloatNullableFilter<"DishTemplate"> | number | null
    ingredients?: StringNullableFilter<"DishTemplate"> | string | null
    allergens?: StringNullableListFilter<"DishTemplate">
    servingSize?: FloatNullableFilter<"DishTemplate"> | number | null
    servingUnit?: StringNullableFilter<"DishTemplate"> | string | null
    fatSaturated?: FloatNullableFilter<"DishTemplate"> | number | null
    fatTrans?: FloatNullableFilter<"DishTemplate"> | number | null
    cholesterol?: FloatNullableFilter<"DishTemplate"> | number | null
    sodium?: FloatNullableFilter<"DishTemplate"> | number | null
    fiber?: FloatNullableFilter<"DishTemplate"> | number | null
    sugarTotal?: FloatNullableFilter<"DishTemplate"> | number | null
    sugarAdded?: FloatNullableFilter<"DishTemplate"> | number | null
    isActive?: BoolFilter<"DishTemplate"> | boolean
    createdAt?: DateTimeFilter<"DishTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"DishTemplate"> | Date | string
    weeklyMenuItems?: WeeklyMenuItemListRelationFilter
  }, "id">

  export type DishTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    price?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    ingredients?: SortOrderInput | SortOrder
    allergens?: SortOrder
    servingSize?: SortOrderInput | SortOrder
    servingUnit?: SortOrderInput | SortOrder
    fatSaturated?: SortOrderInput | SortOrder
    fatTrans?: SortOrderInput | SortOrder
    cholesterol?: SortOrderInput | SortOrder
    sodium?: SortOrderInput | SortOrder
    fiber?: SortOrderInput | SortOrder
    sugarTotal?: SortOrderInput | SortOrder
    sugarAdded?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DishTemplateCountOrderByAggregateInput
    _avg?: DishTemplateAvgOrderByAggregateInput
    _max?: DishTemplateMaxOrderByAggregateInput
    _min?: DishTemplateMinOrderByAggregateInput
    _sum?: DishTemplateSumOrderByAggregateInput
  }

  export type DishTemplateScalarWhereWithAggregatesInput = {
    AND?: DishTemplateScalarWhereWithAggregatesInput | DishTemplateScalarWhereWithAggregatesInput[]
    OR?: DishTemplateScalarWhereWithAggregatesInput[]
    NOT?: DishTemplateScalarWhereWithAggregatesInput | DishTemplateScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"DishTemplate"> | string
    name?: StringWithAggregatesFilter<"DishTemplate"> | string
    description?: StringWithAggregatesFilter<"DishTemplate"> | string
    image?: StringNullableWithAggregatesFilter<"DishTemplate"> | string | null
    category?: EnumDishTemplateCategoryWithAggregatesFilter<"DishTemplate"> | $Enums.DishTemplateCategory
    price?: FloatWithAggregatesFilter<"DishTemplate"> | number
    calories?: IntNullableWithAggregatesFilter<"DishTemplate"> | number | null
    protein?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    carbs?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    fat?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    ingredients?: StringNullableWithAggregatesFilter<"DishTemplate"> | string | null
    allergens?: StringNullableListFilter<"DishTemplate">
    servingSize?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    servingUnit?: StringNullableWithAggregatesFilter<"DishTemplate"> | string | null
    fatSaturated?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    fatTrans?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    cholesterol?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    sodium?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    fiber?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    sugarTotal?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    sugarAdded?: FloatNullableWithAggregatesFilter<"DishTemplate"> | number | null
    isActive?: BoolWithAggregatesFilter<"DishTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DishTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DishTemplate"> | Date | string
  }

  export type WeeklyMenuWhereInput = {
    AND?: WeeklyMenuWhereInput | WeeklyMenuWhereInput[]
    OR?: WeeklyMenuWhereInput[]
    NOT?: WeeklyMenuWhereInput | WeeklyMenuWhereInput[]
    id?: UuidFilter<"WeeklyMenu"> | string
    weekStart?: DateTimeFilter<"WeeklyMenu"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyMenu"> | Date | string
    status?: EnumWeeklyMenuStatusFilter<"WeeklyMenu"> | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFilter<"WeeklyMenu"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyMenu"> | Date | string
    items?: WeeklyMenuItemListRelationFilter
  }

  export type WeeklyMenuOrderByWithRelationInput = {
    id?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: WeeklyMenuItemOrderByRelationAggregateInput
  }

  export type WeeklyMenuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeeklyMenuWhereInput | WeeklyMenuWhereInput[]
    OR?: WeeklyMenuWhereInput[]
    NOT?: WeeklyMenuWhereInput | WeeklyMenuWhereInput[]
    weekStart?: DateTimeFilter<"WeeklyMenu"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyMenu"> | Date | string
    status?: EnumWeeklyMenuStatusFilter<"WeeklyMenu"> | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFilter<"WeeklyMenu"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyMenu"> | Date | string
    items?: WeeklyMenuItemListRelationFilter
  }, "id">

  export type WeeklyMenuOrderByWithAggregationInput = {
    id?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeeklyMenuCountOrderByAggregateInput
    _max?: WeeklyMenuMaxOrderByAggregateInput
    _min?: WeeklyMenuMinOrderByAggregateInput
  }

  export type WeeklyMenuScalarWhereWithAggregatesInput = {
    AND?: WeeklyMenuScalarWhereWithAggregatesInput | WeeklyMenuScalarWhereWithAggregatesInput[]
    OR?: WeeklyMenuScalarWhereWithAggregatesInput[]
    NOT?: WeeklyMenuScalarWhereWithAggregatesInput | WeeklyMenuScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WeeklyMenu"> | string
    weekStart?: DateTimeWithAggregatesFilter<"WeeklyMenu"> | Date | string
    weekEnd?: DateTimeWithAggregatesFilter<"WeeklyMenu"> | Date | string
    status?: EnumWeeklyMenuStatusWithAggregatesFilter<"WeeklyMenu"> | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyMenu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklyMenu"> | Date | string
  }

  export type WeeklyMenuItemWhereInput = {
    AND?: WeeklyMenuItemWhereInput | WeeklyMenuItemWhereInput[]
    OR?: WeeklyMenuItemWhereInput[]
    NOT?: WeeklyMenuItemWhereInput | WeeklyMenuItemWhereInput[]
    id?: UuidFilter<"WeeklyMenuItem"> | string
    menuId?: UuidFilter<"WeeklyMenuItem"> | string
    dishId?: UuidFilter<"WeeklyMenuItem"> | string
    position?: IntFilter<"WeeklyMenuItem"> | number
    menu?: XOR<WeeklyMenuScalarRelationFilter, WeeklyMenuWhereInput>
    dish?: XOR<DishTemplateScalarRelationFilter, DishTemplateWhereInput>
  }

  export type WeeklyMenuItemOrderByWithRelationInput = {
    id?: SortOrder
    menuId?: SortOrder
    dishId?: SortOrder
    position?: SortOrder
    menu?: WeeklyMenuOrderByWithRelationInput
    dish?: DishTemplateOrderByWithRelationInput
  }

  export type WeeklyMenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    menuId_dishId?: WeeklyMenuItemMenuIdDishIdCompoundUniqueInput
    AND?: WeeklyMenuItemWhereInput | WeeklyMenuItemWhereInput[]
    OR?: WeeklyMenuItemWhereInput[]
    NOT?: WeeklyMenuItemWhereInput | WeeklyMenuItemWhereInput[]
    menuId?: UuidFilter<"WeeklyMenuItem"> | string
    dishId?: UuidFilter<"WeeklyMenuItem"> | string
    position?: IntFilter<"WeeklyMenuItem"> | number
    menu?: XOR<WeeklyMenuScalarRelationFilter, WeeklyMenuWhereInput>
    dish?: XOR<DishTemplateScalarRelationFilter, DishTemplateWhereInput>
  }, "id" | "menuId_dishId">

  export type WeeklyMenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    menuId?: SortOrder
    dishId?: SortOrder
    position?: SortOrder
    _count?: WeeklyMenuItemCountOrderByAggregateInput
    _avg?: WeeklyMenuItemAvgOrderByAggregateInput
    _max?: WeeklyMenuItemMaxOrderByAggregateInput
    _min?: WeeklyMenuItemMinOrderByAggregateInput
    _sum?: WeeklyMenuItemSumOrderByAggregateInput
  }

  export type WeeklyMenuItemScalarWhereWithAggregatesInput = {
    AND?: WeeklyMenuItemScalarWhereWithAggregatesInput | WeeklyMenuItemScalarWhereWithAggregatesInput[]
    OR?: WeeklyMenuItemScalarWhereWithAggregatesInput[]
    NOT?: WeeklyMenuItemScalarWhereWithAggregatesInput | WeeklyMenuItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WeeklyMenuItem"> | string
    menuId?: UuidWithAggregatesFilter<"WeeklyMenuItem"> | string
    dishId?: UuidWithAggregatesFilter<"WeeklyMenuItem"> | string
    position?: IntWithAggregatesFilter<"WeeklyMenuItem"> | number
  }

  export type ProfileCreateInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    profileId: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    profileId: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    dishId: string
    dishName: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    dishId: string
    dishName: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    dishName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    dishName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    dishId: string
    dishName: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    dishName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    dishName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishTemplateCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishTemplateCategory
    price?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    ingredients?: string | null
    allergens?: DishTemplateCreateallergensInput | string[]
    servingSize?: number | null
    servingUnit?: string | null
    fatSaturated?: number | null
    fatTrans?: number | null
    cholesterol?: number | null
    sodium?: number | null
    fiber?: number | null
    sugarTotal?: number | null
    sugarAdded?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklyMenuItems?: WeeklyMenuItemCreateNestedManyWithoutDishInput
  }

  export type DishTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishTemplateCategory
    price?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    ingredients?: string | null
    allergens?: DishTemplateCreateallergensInput | string[]
    servingSize?: number | null
    servingUnit?: string | null
    fatSaturated?: number | null
    fatTrans?: number | null
    cholesterol?: number | null
    sodium?: number | null
    fiber?: number | null
    sugarTotal?: number | null
    sugarAdded?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklyMenuItems?: WeeklyMenuItemUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishTemplateCategoryFieldUpdateOperationsInput | $Enums.DishTemplateCategory
    price?: FloatFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    allergens?: DishTemplateUpdateallergensInput | string[]
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    fatSaturated?: NullableFloatFieldUpdateOperationsInput | number | null
    fatTrans?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarAdded?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklyMenuItems?: WeeklyMenuItemUpdateManyWithoutDishNestedInput
  }

  export type DishTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishTemplateCategoryFieldUpdateOperationsInput | $Enums.DishTemplateCategory
    price?: FloatFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    allergens?: DishTemplateUpdateallergensInput | string[]
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    fatSaturated?: NullableFloatFieldUpdateOperationsInput | number | null
    fatTrans?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarAdded?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklyMenuItems?: WeeklyMenuItemUncheckedUpdateManyWithoutDishNestedInput
  }

  export type DishTemplateCreateManyInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishTemplateCategory
    price?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    ingredients?: string | null
    allergens?: DishTemplateCreateallergensInput | string[]
    servingSize?: number | null
    servingUnit?: string | null
    fatSaturated?: number | null
    fatTrans?: number | null
    cholesterol?: number | null
    sodium?: number | null
    fiber?: number | null
    sugarTotal?: number | null
    sugarAdded?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishTemplateCategoryFieldUpdateOperationsInput | $Enums.DishTemplateCategory
    price?: FloatFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    allergens?: DishTemplateUpdateallergensInput | string[]
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    fatSaturated?: NullableFloatFieldUpdateOperationsInput | number | null
    fatTrans?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarAdded?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishTemplateCategoryFieldUpdateOperationsInput | $Enums.DishTemplateCategory
    price?: FloatFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    allergens?: DishTemplateUpdateallergensInput | string[]
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    fatSaturated?: NullableFloatFieldUpdateOperationsInput | number | null
    fatTrans?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarAdded?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyMenuCreateInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    status?: $Enums.WeeklyMenuStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: WeeklyMenuItemCreateNestedManyWithoutMenuInput
  }

  export type WeeklyMenuUncheckedCreateInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    status?: $Enums.WeeklyMenuStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: WeeklyMenuItemUncheckedCreateNestedManyWithoutMenuInput
  }

  export type WeeklyMenuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWeeklyMenuStatusFieldUpdateOperationsInput | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WeeklyMenuItemUpdateManyWithoutMenuNestedInput
  }

  export type WeeklyMenuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWeeklyMenuStatusFieldUpdateOperationsInput | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WeeklyMenuItemUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type WeeklyMenuCreateManyInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    status?: $Enums.WeeklyMenuStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyMenuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWeeklyMenuStatusFieldUpdateOperationsInput | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyMenuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWeeklyMenuStatusFieldUpdateOperationsInput | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyMenuItemCreateInput = {
    id?: string
    position?: number
    menu: WeeklyMenuCreateNestedOneWithoutItemsInput
    dish: DishTemplateCreateNestedOneWithoutWeeklyMenuItemsInput
  }

  export type WeeklyMenuItemUncheckedCreateInput = {
    id?: string
    menuId: string
    dishId: string
    position?: number
  }

  export type WeeklyMenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    menu?: WeeklyMenuUpdateOneRequiredWithoutItemsNestedInput
    dish?: DishTemplateUpdateOneRequiredWithoutWeeklyMenuItemsNestedInput
  }

  export type WeeklyMenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyMenuItemCreateManyInput = {
    id?: string
    menuId: string
    dishId: string
    position?: number
  }

  export type WeeklyMenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyMenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrder
    payphoneTransactionId?: SortOrder
    deliveryDate?: SortOrder
    deliverySlot?: SortOrder
    taxIdType?: SortOrder
    taxId?: SortOrder
    customerEmail?: SortOrder
    invoiceNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
    invoiceNumber?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrder
    payphoneTransactionId?: SortOrder
    deliveryDate?: SortOrder
    deliverySlot?: SortOrder
    taxIdType?: SortOrder
    taxId?: SortOrder
    customerEmail?: SortOrder
    invoiceNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrder
    payphoneTransactionId?: SortOrder
    deliveryDate?: SortOrder
    deliverySlot?: SortOrder
    taxIdType?: SortOrder
    taxId?: SortOrder
    customerEmail?: SortOrder
    invoiceNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
    invoiceNumber?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    dishName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    dishName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    dishId?: SortOrder
    dishName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type EnumDishTemplateCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DishTemplateCategory | EnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishTemplateCategoryFilter<$PrismaModel> | $Enums.DishTemplateCategory
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WeeklyMenuItemListRelationFilter = {
    every?: WeeklyMenuItemWhereInput
    some?: WeeklyMenuItemWhereInput
    none?: WeeklyMenuItemWhereInput
  }

  export type WeeklyMenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DishTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    price?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    ingredients?: SortOrder
    allergens?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    fatSaturated?: SortOrder
    fatTrans?: SortOrder
    cholesterol?: SortOrder
    sodium?: SortOrder
    fiber?: SortOrder
    sugarTotal?: SortOrder
    sugarAdded?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishTemplateAvgOrderByAggregateInput = {
    price?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    fatSaturated?: SortOrder
    fatTrans?: SortOrder
    cholesterol?: SortOrder
    sodium?: SortOrder
    fiber?: SortOrder
    sugarTotal?: SortOrder
    sugarAdded?: SortOrder
  }

  export type DishTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    price?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    ingredients?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    fatSaturated?: SortOrder
    fatTrans?: SortOrder
    cholesterol?: SortOrder
    sodium?: SortOrder
    fiber?: SortOrder
    sugarTotal?: SortOrder
    sugarAdded?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    price?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    ingredients?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    fatSaturated?: SortOrder
    fatTrans?: SortOrder
    cholesterol?: SortOrder
    sodium?: SortOrder
    fiber?: SortOrder
    sugarTotal?: SortOrder
    sugarAdded?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DishTemplateSumOrderByAggregateInput = {
    price?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    fatSaturated?: SortOrder
    fatTrans?: SortOrder
    cholesterol?: SortOrder
    sodium?: SortOrder
    fiber?: SortOrder
    sugarTotal?: SortOrder
    sugarAdded?: SortOrder
  }

  export type EnumDishTemplateCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DishTemplateCategory | EnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishTemplateCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DishTemplateCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDishTemplateCategoryFilter<$PrismaModel>
    _max?: NestedEnumDishTemplateCategoryFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumWeeklyMenuStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyMenuStatus | EnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyMenuStatusFilter<$PrismaModel> | $Enums.WeeklyMenuStatus
  }

  export type WeeklyMenuCountOrderByAggregateInput = {
    id?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklyMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklyMenuMinOrderByAggregateInput = {
    id?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumWeeklyMenuStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyMenuStatus | EnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyMenuStatusWithAggregatesFilter<$PrismaModel> | $Enums.WeeklyMenuStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeeklyMenuStatusFilter<$PrismaModel>
    _max?: NestedEnumWeeklyMenuStatusFilter<$PrismaModel>
  }

  export type WeeklyMenuScalarRelationFilter = {
    is?: WeeklyMenuWhereInput
    isNot?: WeeklyMenuWhereInput
  }

  export type DishTemplateScalarRelationFilter = {
    is?: DishTemplateWhereInput
    isNot?: DishTemplateWhereInput
  }

  export type WeeklyMenuItemMenuIdDishIdCompoundUniqueInput = {
    menuId: string
    dishId: string
  }

  export type WeeklyMenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    dishId?: SortOrder
    position?: SortOrder
  }

  export type WeeklyMenuItemAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type WeeklyMenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    dishId?: SortOrder
    position?: SortOrder
  }

  export type WeeklyMenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    menuId?: SortOrder
    dishId?: SortOrder
    position?: SortOrder
  }

  export type WeeklyMenuItemSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type OrderCreateNestedManyWithoutProfileInput = {
    create?: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput> | OrderCreateWithoutProfileInput[] | OrderUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProfileInput | OrderCreateOrConnectWithoutProfileInput[]
    createMany?: OrderCreateManyProfileInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput> | OrderCreateWithoutProfileInput[] | OrderUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProfileInput | OrderCreateOrConnectWithoutProfileInput[]
    createMany?: OrderCreateManyProfileInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutProfileNestedInput = {
    create?: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput> | OrderCreateWithoutProfileInput[] | OrderUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProfileInput | OrderCreateOrConnectWithoutProfileInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProfileInput | OrderUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: OrderCreateManyProfileInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProfileInput | OrderUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProfileInput | OrderUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput> | OrderCreateWithoutProfileInput[] | OrderUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProfileInput | OrderCreateOrConnectWithoutProfileInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProfileInput | OrderUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: OrderCreateManyProfileInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProfileInput | OrderUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProfileInput | OrderUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProfileCreateWithoutOrdersInput, ProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrdersInput
    connect?: ProfileWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProfileCreateWithoutOrdersInput, ProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrdersInput
    upsert?: ProfileUpsertWithoutOrdersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutOrdersInput, ProfileUpdateWithoutOrdersInput>, ProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type DishTemplateCreateallergensInput = {
    set: string[]
  }

  export type WeeklyMenuItemCreateNestedManyWithoutDishInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutDishInput, WeeklyMenuItemUncheckedCreateWithoutDishInput> | WeeklyMenuItemCreateWithoutDishInput[] | WeeklyMenuItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutDishInput | WeeklyMenuItemCreateOrConnectWithoutDishInput[]
    createMany?: WeeklyMenuItemCreateManyDishInputEnvelope
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
  }

  export type WeeklyMenuItemUncheckedCreateNestedManyWithoutDishInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutDishInput, WeeklyMenuItemUncheckedCreateWithoutDishInput> | WeeklyMenuItemCreateWithoutDishInput[] | WeeklyMenuItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutDishInput | WeeklyMenuItemCreateOrConnectWithoutDishInput[]
    createMany?: WeeklyMenuItemCreateManyDishInputEnvelope
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
  }

  export type EnumDishTemplateCategoryFieldUpdateOperationsInput = {
    set?: $Enums.DishTemplateCategory
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DishTemplateUpdateallergensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WeeklyMenuItemUpdateManyWithoutDishNestedInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutDishInput, WeeklyMenuItemUncheckedCreateWithoutDishInput> | WeeklyMenuItemCreateWithoutDishInput[] | WeeklyMenuItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutDishInput | WeeklyMenuItemCreateOrConnectWithoutDishInput[]
    upsert?: WeeklyMenuItemUpsertWithWhereUniqueWithoutDishInput | WeeklyMenuItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: WeeklyMenuItemCreateManyDishInputEnvelope
    set?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    disconnect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    delete?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    update?: WeeklyMenuItemUpdateWithWhereUniqueWithoutDishInput | WeeklyMenuItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: WeeklyMenuItemUpdateManyWithWhereWithoutDishInput | WeeklyMenuItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: WeeklyMenuItemScalarWhereInput | WeeklyMenuItemScalarWhereInput[]
  }

  export type WeeklyMenuItemUncheckedUpdateManyWithoutDishNestedInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutDishInput, WeeklyMenuItemUncheckedCreateWithoutDishInput> | WeeklyMenuItemCreateWithoutDishInput[] | WeeklyMenuItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutDishInput | WeeklyMenuItemCreateOrConnectWithoutDishInput[]
    upsert?: WeeklyMenuItemUpsertWithWhereUniqueWithoutDishInput | WeeklyMenuItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: WeeklyMenuItemCreateManyDishInputEnvelope
    set?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    disconnect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    delete?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    update?: WeeklyMenuItemUpdateWithWhereUniqueWithoutDishInput | WeeklyMenuItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: WeeklyMenuItemUpdateManyWithWhereWithoutDishInput | WeeklyMenuItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: WeeklyMenuItemScalarWhereInput | WeeklyMenuItemScalarWhereInput[]
  }

  export type WeeklyMenuItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutMenuInput, WeeklyMenuItemUncheckedCreateWithoutMenuInput> | WeeklyMenuItemCreateWithoutMenuInput[] | WeeklyMenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutMenuInput | WeeklyMenuItemCreateOrConnectWithoutMenuInput[]
    createMany?: WeeklyMenuItemCreateManyMenuInputEnvelope
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
  }

  export type WeeklyMenuItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutMenuInput, WeeklyMenuItemUncheckedCreateWithoutMenuInput> | WeeklyMenuItemCreateWithoutMenuInput[] | WeeklyMenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutMenuInput | WeeklyMenuItemCreateOrConnectWithoutMenuInput[]
    createMany?: WeeklyMenuItemCreateManyMenuInputEnvelope
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
  }

  export type EnumWeeklyMenuStatusFieldUpdateOperationsInput = {
    set?: $Enums.WeeklyMenuStatus
  }

  export type WeeklyMenuItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutMenuInput, WeeklyMenuItemUncheckedCreateWithoutMenuInput> | WeeklyMenuItemCreateWithoutMenuInput[] | WeeklyMenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutMenuInput | WeeklyMenuItemCreateOrConnectWithoutMenuInput[]
    upsert?: WeeklyMenuItemUpsertWithWhereUniqueWithoutMenuInput | WeeklyMenuItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: WeeklyMenuItemCreateManyMenuInputEnvelope
    set?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    disconnect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    delete?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    update?: WeeklyMenuItemUpdateWithWhereUniqueWithoutMenuInput | WeeklyMenuItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: WeeklyMenuItemUpdateManyWithWhereWithoutMenuInput | WeeklyMenuItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: WeeklyMenuItemScalarWhereInput | WeeklyMenuItemScalarWhereInput[]
  }

  export type WeeklyMenuItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<WeeklyMenuItemCreateWithoutMenuInput, WeeklyMenuItemUncheckedCreateWithoutMenuInput> | WeeklyMenuItemCreateWithoutMenuInput[] | WeeklyMenuItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: WeeklyMenuItemCreateOrConnectWithoutMenuInput | WeeklyMenuItemCreateOrConnectWithoutMenuInput[]
    upsert?: WeeklyMenuItemUpsertWithWhereUniqueWithoutMenuInput | WeeklyMenuItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: WeeklyMenuItemCreateManyMenuInputEnvelope
    set?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    disconnect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    delete?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    connect?: WeeklyMenuItemWhereUniqueInput | WeeklyMenuItemWhereUniqueInput[]
    update?: WeeklyMenuItemUpdateWithWhereUniqueWithoutMenuInput | WeeklyMenuItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: WeeklyMenuItemUpdateManyWithWhereWithoutMenuInput | WeeklyMenuItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: WeeklyMenuItemScalarWhereInput | WeeklyMenuItemScalarWhereInput[]
  }

  export type WeeklyMenuCreateNestedOneWithoutItemsInput = {
    create?: XOR<WeeklyMenuCreateWithoutItemsInput, WeeklyMenuUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WeeklyMenuCreateOrConnectWithoutItemsInput
    connect?: WeeklyMenuWhereUniqueInput
  }

  export type DishTemplateCreateNestedOneWithoutWeeklyMenuItemsInput = {
    create?: XOR<DishTemplateCreateWithoutWeeklyMenuItemsInput, DishTemplateUncheckedCreateWithoutWeeklyMenuItemsInput>
    connectOrCreate?: DishTemplateCreateOrConnectWithoutWeeklyMenuItemsInput
    connect?: DishTemplateWhereUniqueInput
  }

  export type WeeklyMenuUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<WeeklyMenuCreateWithoutItemsInput, WeeklyMenuUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WeeklyMenuCreateOrConnectWithoutItemsInput
    upsert?: WeeklyMenuUpsertWithoutItemsInput
    connect?: WeeklyMenuWhereUniqueInput
    update?: XOR<XOR<WeeklyMenuUpdateToOneWithWhereWithoutItemsInput, WeeklyMenuUpdateWithoutItemsInput>, WeeklyMenuUncheckedUpdateWithoutItemsInput>
  }

  export type DishTemplateUpdateOneRequiredWithoutWeeklyMenuItemsNestedInput = {
    create?: XOR<DishTemplateCreateWithoutWeeklyMenuItemsInput, DishTemplateUncheckedCreateWithoutWeeklyMenuItemsInput>
    connectOrCreate?: DishTemplateCreateOrConnectWithoutWeeklyMenuItemsInput
    upsert?: DishTemplateUpsertWithoutWeeklyMenuItemsInput
    connect?: DishTemplateWhereUniqueInput
    update?: XOR<XOR<DishTemplateUpdateToOneWithWhereWithoutWeeklyMenuItemsInput, DishTemplateUpdateWithoutWeeklyMenuItemsInput>, DishTemplateUncheckedUpdateWithoutWeeklyMenuItemsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumDishTemplateCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DishTemplateCategory | EnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishTemplateCategoryFilter<$PrismaModel> | $Enums.DishTemplateCategory
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDishTemplateCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DishTemplateCategory | EnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishTemplateCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DishTemplateCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDishTemplateCategoryFilter<$PrismaModel>
    _max?: NestedEnumDishTemplateCategoryFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWeeklyMenuStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyMenuStatus | EnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyMenuStatusFilter<$PrismaModel> | $Enums.WeeklyMenuStatus
  }

  export type NestedEnumWeeklyMenuStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeeklyMenuStatus | EnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeeklyMenuStatus[] | ListEnumWeeklyMenuStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWeeklyMenuStatusWithAggregatesFilter<$PrismaModel> | $Enums.WeeklyMenuStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeeklyMenuStatusFilter<$PrismaModel>
    _max?: NestedEnumWeeklyMenuStatusFilter<$PrismaModel>
  }

  export type OrderCreateWithoutProfileInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProfileInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutProfileInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput>
  }

  export type OrderCreateManyProfileInputEnvelope = {
    data: OrderCreateManyProfileInput | OrderCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutProfileInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProfileInput, OrderUncheckedUpdateWithoutProfileInput>
    create: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProfileInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProfileInput, OrderUncheckedUpdateWithoutProfileInput>
  }

  export type OrderUpdateManyWithWhereWithoutProfileInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProfileInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: UuidFilter<"Order"> | string
    profileId?: UuidFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    deliveryAddress?: StringFilter<"Order"> | string
    deliveryInstructions?: StringNullableFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliverySlot?: StringNullableFilter<"Order"> | string | null
    taxIdType?: StringFilter<"Order"> | string
    taxId?: StringFilter<"Order"> | string
    customerEmail?: StringNullableFilter<"Order"> | string | null
    invoiceNumber?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ProfileCreateWithoutOrdersInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutOrdersInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutOrdersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutOrdersInput, ProfileUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    dishId: string
    dishName: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    dishId: string
    dishName: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutOrdersInput = {
    update: XOR<ProfileUpdateWithoutOrdersInput, ProfileUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProfileCreateWithoutOrdersInput, ProfileUncheckedCreateWithoutOrdersInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutOrdersInput, ProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type ProfileUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: UuidFilter<"OrderItem"> | string
    orderId?: UuidFilter<"OrderItem"> | string
    dishId?: StringFilter<"OrderItem"> | string
    dishName?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    profileId: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyMenuItemCreateWithoutDishInput = {
    id?: string
    position?: number
    menu: WeeklyMenuCreateNestedOneWithoutItemsInput
  }

  export type WeeklyMenuItemUncheckedCreateWithoutDishInput = {
    id?: string
    menuId: string
    position?: number
  }

  export type WeeklyMenuItemCreateOrConnectWithoutDishInput = {
    where: WeeklyMenuItemWhereUniqueInput
    create: XOR<WeeklyMenuItemCreateWithoutDishInput, WeeklyMenuItemUncheckedCreateWithoutDishInput>
  }

  export type WeeklyMenuItemCreateManyDishInputEnvelope = {
    data: WeeklyMenuItemCreateManyDishInput | WeeklyMenuItemCreateManyDishInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyMenuItemUpsertWithWhereUniqueWithoutDishInput = {
    where: WeeklyMenuItemWhereUniqueInput
    update: XOR<WeeklyMenuItemUpdateWithoutDishInput, WeeklyMenuItemUncheckedUpdateWithoutDishInput>
    create: XOR<WeeklyMenuItemCreateWithoutDishInput, WeeklyMenuItemUncheckedCreateWithoutDishInput>
  }

  export type WeeklyMenuItemUpdateWithWhereUniqueWithoutDishInput = {
    where: WeeklyMenuItemWhereUniqueInput
    data: XOR<WeeklyMenuItemUpdateWithoutDishInput, WeeklyMenuItemUncheckedUpdateWithoutDishInput>
  }

  export type WeeklyMenuItemUpdateManyWithWhereWithoutDishInput = {
    where: WeeklyMenuItemScalarWhereInput
    data: XOR<WeeklyMenuItemUpdateManyMutationInput, WeeklyMenuItemUncheckedUpdateManyWithoutDishInput>
  }

  export type WeeklyMenuItemScalarWhereInput = {
    AND?: WeeklyMenuItemScalarWhereInput | WeeklyMenuItemScalarWhereInput[]
    OR?: WeeklyMenuItemScalarWhereInput[]
    NOT?: WeeklyMenuItemScalarWhereInput | WeeklyMenuItemScalarWhereInput[]
    id?: UuidFilter<"WeeklyMenuItem"> | string
    menuId?: UuidFilter<"WeeklyMenuItem"> | string
    dishId?: UuidFilter<"WeeklyMenuItem"> | string
    position?: IntFilter<"WeeklyMenuItem"> | number
  }

  export type WeeklyMenuItemCreateWithoutMenuInput = {
    id?: string
    position?: number
    dish: DishTemplateCreateNestedOneWithoutWeeklyMenuItemsInput
  }

  export type WeeklyMenuItemUncheckedCreateWithoutMenuInput = {
    id?: string
    dishId: string
    position?: number
  }

  export type WeeklyMenuItemCreateOrConnectWithoutMenuInput = {
    where: WeeklyMenuItemWhereUniqueInput
    create: XOR<WeeklyMenuItemCreateWithoutMenuInput, WeeklyMenuItemUncheckedCreateWithoutMenuInput>
  }

  export type WeeklyMenuItemCreateManyMenuInputEnvelope = {
    data: WeeklyMenuItemCreateManyMenuInput | WeeklyMenuItemCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyMenuItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: WeeklyMenuItemWhereUniqueInput
    update: XOR<WeeklyMenuItemUpdateWithoutMenuInput, WeeklyMenuItemUncheckedUpdateWithoutMenuInput>
    create: XOR<WeeklyMenuItemCreateWithoutMenuInput, WeeklyMenuItemUncheckedCreateWithoutMenuInput>
  }

  export type WeeklyMenuItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: WeeklyMenuItemWhereUniqueInput
    data: XOR<WeeklyMenuItemUpdateWithoutMenuInput, WeeklyMenuItemUncheckedUpdateWithoutMenuInput>
  }

  export type WeeklyMenuItemUpdateManyWithWhereWithoutMenuInput = {
    where: WeeklyMenuItemScalarWhereInput
    data: XOR<WeeklyMenuItemUpdateManyMutationInput, WeeklyMenuItemUncheckedUpdateManyWithoutMenuInput>
  }

  export type WeeklyMenuCreateWithoutItemsInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    status?: $Enums.WeeklyMenuStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyMenuUncheckedCreateWithoutItemsInput = {
    id?: string
    weekStart: Date | string
    weekEnd: Date | string
    status?: $Enums.WeeklyMenuStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyMenuCreateOrConnectWithoutItemsInput = {
    where: WeeklyMenuWhereUniqueInput
    create: XOR<WeeklyMenuCreateWithoutItemsInput, WeeklyMenuUncheckedCreateWithoutItemsInput>
  }

  export type DishTemplateCreateWithoutWeeklyMenuItemsInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishTemplateCategory
    price?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    ingredients?: string | null
    allergens?: DishTemplateCreateallergensInput | string[]
    servingSize?: number | null
    servingUnit?: string | null
    fatSaturated?: number | null
    fatTrans?: number | null
    cholesterol?: number | null
    sodium?: number | null
    fiber?: number | null
    sugarTotal?: number | null
    sugarAdded?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishTemplateUncheckedCreateWithoutWeeklyMenuItemsInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishTemplateCategory
    price?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    ingredients?: string | null
    allergens?: DishTemplateCreateallergensInput | string[]
    servingSize?: number | null
    servingUnit?: string | null
    fatSaturated?: number | null
    fatTrans?: number | null
    cholesterol?: number | null
    sodium?: number | null
    fiber?: number | null
    sugarTotal?: number | null
    sugarAdded?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DishTemplateCreateOrConnectWithoutWeeklyMenuItemsInput = {
    where: DishTemplateWhereUniqueInput
    create: XOR<DishTemplateCreateWithoutWeeklyMenuItemsInput, DishTemplateUncheckedCreateWithoutWeeklyMenuItemsInput>
  }

  export type WeeklyMenuUpsertWithoutItemsInput = {
    update: XOR<WeeklyMenuUpdateWithoutItemsInput, WeeklyMenuUncheckedUpdateWithoutItemsInput>
    create: XOR<WeeklyMenuCreateWithoutItemsInput, WeeklyMenuUncheckedCreateWithoutItemsInput>
    where?: WeeklyMenuWhereInput
  }

  export type WeeklyMenuUpdateToOneWithWhereWithoutItemsInput = {
    where?: WeeklyMenuWhereInput
    data: XOR<WeeklyMenuUpdateWithoutItemsInput, WeeklyMenuUncheckedUpdateWithoutItemsInput>
  }

  export type WeeklyMenuUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWeeklyMenuStatusFieldUpdateOperationsInput | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyMenuUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumWeeklyMenuStatusFieldUpdateOperationsInput | $Enums.WeeklyMenuStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishTemplateUpsertWithoutWeeklyMenuItemsInput = {
    update: XOR<DishTemplateUpdateWithoutWeeklyMenuItemsInput, DishTemplateUncheckedUpdateWithoutWeeklyMenuItemsInput>
    create: XOR<DishTemplateCreateWithoutWeeklyMenuItemsInput, DishTemplateUncheckedCreateWithoutWeeklyMenuItemsInput>
    where?: DishTemplateWhereInput
  }

  export type DishTemplateUpdateToOneWithWhereWithoutWeeklyMenuItemsInput = {
    where?: DishTemplateWhereInput
    data: XOR<DishTemplateUpdateWithoutWeeklyMenuItemsInput, DishTemplateUncheckedUpdateWithoutWeeklyMenuItemsInput>
  }

  export type DishTemplateUpdateWithoutWeeklyMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishTemplateCategoryFieldUpdateOperationsInput | $Enums.DishTemplateCategory
    price?: FloatFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    allergens?: DishTemplateUpdateallergensInput | string[]
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    fatSaturated?: NullableFloatFieldUpdateOperationsInput | number | null
    fatTrans?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarAdded?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishTemplateUncheckedUpdateWithoutWeeklyMenuItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishTemplateCategoryFieldUpdateOperationsInput | $Enums.DishTemplateCategory
    price?: FloatFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    ingredients?: NullableStringFieldUpdateOperationsInput | string | null
    allergens?: DishTemplateUpdateallergensInput | string[]
    servingSize?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnit?: NullableStringFieldUpdateOperationsInput | string | null
    fatSaturated?: NullableFloatFieldUpdateOperationsInput | number | null
    fatTrans?: NullableFloatFieldUpdateOperationsInput | number | null
    cholesterol?: NullableFloatFieldUpdateOperationsInput | number | null
    sodium?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    sugarAdded?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyProfileInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    deliverySlot?: string | null
    taxIdType: string
    taxId: string
    customerEmail?: string | null
    invoiceNumber?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliverySlot?: NullableStringFieldUpdateOperationsInput | string | null
    taxIdType?: StringFieldUpdateOperationsInput | string
    taxId?: StringFieldUpdateOperationsInput | string
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceNumber?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    dishId: string
    dishName: string
    quantity: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    dishName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    dishName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    dishName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyMenuItemCreateManyDishInput = {
    id?: string
    menuId: string
    position?: number
  }

  export type WeeklyMenuItemUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    menu?: WeeklyMenuUpdateOneRequiredWithoutItemsNestedInput
  }

  export type WeeklyMenuItemUncheckedUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyMenuItemUncheckedUpdateManyWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyMenuItemCreateManyMenuInput = {
    id?: string
    dishId: string
    position?: number
  }

  export type WeeklyMenuItemUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    dish?: DishTemplateUpdateOneRequiredWithoutWeeklyMenuItemsNestedInput
  }

  export type WeeklyMenuItemUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type WeeklyMenuItemUncheckedUpdateManyWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
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

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
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Dish
 * 
 */
export type Dish = $Result.DefaultSelection<Prisma.$DishPayload>
/**
 * Model WeeklyBox
 * Carrito en curso — uno por usuario, mutable
 */
export type WeeklyBox = $Result.DefaultSelection<Prisma.$WeeklyBoxPayload>
/**
 * Model BoxItem
 * 
 */
export type BoxItem = $Result.DefaultSelection<Prisma.$BoxItemPayload>
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
  export const DishCategory: {
  VEGETARIANO: 'VEGETARIANO',
  LOW_CARB: 'LOW_CARB',
  NORMAL: 'NORMAL'
};

export type DishCategory = (typeof DishCategory)[keyof typeof DishCategory]


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

export type DishCategory = $Enums.DishCategory

export const DishCategory: typeof $Enums.DishCategory

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
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dish`: Exposes CRUD operations for the **Dish** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dishes
    * const dishes = await prisma.dish.findMany()
    * ```
    */
  get dish(): Prisma.DishDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weeklyBox`: Exposes CRUD operations for the **WeeklyBox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyBoxes
    * const weeklyBoxes = await prisma.weeklyBox.findMany()
    * ```
    */
  get weeklyBox(): Prisma.WeeklyBoxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boxItem`: Exposes CRUD operations for the **BoxItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoxItems
    * const boxItems = await prisma.boxItem.findMany()
    * ```
    */
  get boxItem(): Prisma.BoxItemDelegate<ExtArgs, ClientOptions>;

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
    Address: 'Address',
    Dish: 'Dish',
    WeeklyBox: 'WeeklyBox',
    BoxItem: 'BoxItem',
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
      modelProps: "profile" | "address" | "dish" | "weeklyBox" | "boxItem" | "order" | "orderItem" | "dishTemplate" | "weeklyMenu" | "weeklyMenuItem"
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
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Dish: {
        payload: Prisma.$DishPayload<ExtArgs>
        fields: Prisma.DishFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DishFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DishFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findFirst: {
            args: Prisma.DishFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DishFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          findMany: {
            args: Prisma.DishFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          create: {
            args: Prisma.DishCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          createMany: {
            args: Prisma.DishCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DishCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          delete: {
            args: Prisma.DishDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          update: {
            args: Prisma.DishUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          deleteMany: {
            args: Prisma.DishDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DishUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DishUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>[]
          }
          upsert: {
            args: Prisma.DishUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DishPayload>
          }
          aggregate: {
            args: Prisma.DishAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDish>
          }
          groupBy: {
            args: Prisma.DishGroupByArgs<ExtArgs>
            result: $Utils.Optional<DishGroupByOutputType>[]
          }
          count: {
            args: Prisma.DishCountArgs<ExtArgs>
            result: $Utils.Optional<DishCountAggregateOutputType> | number
          }
        }
      }
      WeeklyBox: {
        payload: Prisma.$WeeklyBoxPayload<ExtArgs>
        fields: Prisma.WeeklyBoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyBoxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyBoxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>
          }
          findFirst: {
            args: Prisma.WeeklyBoxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyBoxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>
          }
          findMany: {
            args: Prisma.WeeklyBoxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>[]
          }
          create: {
            args: Prisma.WeeklyBoxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>
          }
          createMany: {
            args: Prisma.WeeklyBoxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyBoxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>[]
          }
          delete: {
            args: Prisma.WeeklyBoxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>
          }
          update: {
            args: Prisma.WeeklyBoxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyBoxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyBoxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeeklyBoxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>[]
          }
          upsert: {
            args: Prisma.WeeklyBoxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyBoxPayload>
          }
          aggregate: {
            args: Prisma.WeeklyBoxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyBox>
          }
          groupBy: {
            args: Prisma.WeeklyBoxGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyBoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyBoxCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyBoxCountAggregateOutputType> | number
          }
        }
      }
      BoxItem: {
        payload: Prisma.$BoxItemPayload<ExtArgs>
        fields: Prisma.BoxItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoxItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoxItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>
          }
          findFirst: {
            args: Prisma.BoxItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoxItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>
          }
          findMany: {
            args: Prisma.BoxItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>[]
          }
          create: {
            args: Prisma.BoxItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>
          }
          createMany: {
            args: Prisma.BoxItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoxItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>[]
          }
          delete: {
            args: Prisma.BoxItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>
          }
          update: {
            args: Prisma.BoxItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>
          }
          deleteMany: {
            args: Prisma.BoxItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoxItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoxItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>[]
          }
          upsert: {
            args: Prisma.BoxItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxItemPayload>
          }
          aggregate: {
            args: Prisma.BoxItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoxItem>
          }
          groupBy: {
            args: Prisma.BoxItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoxItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoxItemCountArgs<ExtArgs>
            result: $Utils.Optional<BoxItemCountAggregateOutputType> | number
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
    address?: AddressOmit
    dish?: DishOmit
    weeklyBox?: WeeklyBoxOmit
    boxItem?: BoxItemOmit
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
    addresses: number
    orders: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | ProfileCountOutputTypeCountAddressesArgs
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
  export type ProfileCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    orders: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | AddressCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type DishCountOutputType
   */

  export type DishCountOutputType = {
    boxItems: number
  }

  export type DishCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boxItems?: boolean | DishCountOutputTypeCountBoxItemsArgs
  }

  // Custom InputTypes
  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DishCountOutputType
     */
    select?: DishCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DishCountOutputType without action
   */
  export type DishCountOutputTypeCountBoxItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxItemWhereInput
  }


  /**
   * Count Type WeeklyBoxCountOutputType
   */

  export type WeeklyBoxCountOutputType = {
    items: number
  }

  export type WeeklyBoxCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WeeklyBoxCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * WeeklyBoxCountOutputType without action
   */
  export type WeeklyBoxCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBoxCountOutputType
     */
    select?: WeeklyBoxCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeeklyBoxCountOutputType without action
   */
  export type WeeklyBoxCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxItemWhereInput
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
    addresses?: boolean | Profile$addressesArgs<ExtArgs>
    orders?: boolean | Profile$ordersArgs<ExtArgs>
    weeklyBox?: boolean | Profile$weeklyBoxArgs<ExtArgs>
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
    addresses?: boolean | Profile$addressesArgs<ExtArgs>
    orders?: boolean | Profile$ordersArgs<ExtArgs>
    weeklyBox?: boolean | Profile$weeklyBoxArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      weeklyBox: Prisma.$WeeklyBoxPayload<ExtArgs> | null
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
    addresses<T extends Profile$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Profile$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Profile$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weeklyBox<T extends Profile$weeklyBoxArgs<ExtArgs> = {}>(args?: Subset<T, Profile$weeklyBoxArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Profile.addresses
   */
  export type Profile$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
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
   * Profile.weeklyBox
   */
  export type Profile$weeklyBoxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    where?: WeeklyBoxWhereInput
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
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    label: string | null
    street: string | null
    instructions: string | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    label: string | null
    street: string | null
    instructions: string | null
    isDefault: boolean | null
    createdAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    profileId: number
    label: number
    street: number
    instructions: number
    isDefault: number
    createdAt: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    profileId?: true
    label?: true
    street?: true
    instructions?: true
    isDefault?: true
    createdAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    profileId?: true
    label?: true
    street?: true
    instructions?: true
    isDefault?: true
    createdAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    profileId?: true
    label?: true
    street?: true
    instructions?: true
    isDefault?: true
    createdAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    profileId: string
    label: string | null
    street: string
    instructions: string | null
    isDefault: boolean
    createdAt: Date
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    label?: boolean
    street?: boolean
    instructions?: boolean
    isDefault?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    orders?: boolean | Address$ordersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    label?: boolean
    street?: boolean
    instructions?: boolean
    isDefault?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    label?: boolean
    street?: boolean
    instructions?: boolean
    isDefault?: boolean
    createdAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    profileId?: boolean
    label?: boolean
    street?: boolean
    instructions?: boolean
    isDefault?: boolean
    createdAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "label" | "street" | "instructions" | "isDefault" | "createdAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    orders?: boolean | Address$ordersArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      label: string | null
      street: string
      instructions: string | null
      isDefault: boolean
      createdAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends Address$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Address$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly profileId: FieldRef<"Address", 'String'>
    readonly label: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly instructions: FieldRef<"Address", 'String'>
    readonly isDefault: FieldRef<"Address", 'Boolean'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.orders
   */
  export type Address$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Dish
   */

  export type AggregateDish = {
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  export type DishAvgAggregateOutputType = {
    premiumLevel: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type DishSumAggregateOutputType = {
    premiumLevel: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type DishMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    category: $Enums.DishCategory | null
    premiumLevel: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    weekStart: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type DishMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    category: $Enums.DishCategory | null
    premiumLevel: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    weekStart: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type DishCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    category: number
    premiumLevel: number
    calories: number
    protein: number
    carbs: number
    fat: number
    allergens: number
    weekStart: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type DishAvgAggregateInputType = {
    premiumLevel?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type DishSumAggregateInputType = {
    premiumLevel?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type DishMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    category?: true
    premiumLevel?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    weekStart?: true
    isActive?: true
    createdAt?: true
  }

  export type DishMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    category?: true
    premiumLevel?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    weekStart?: true
    isActive?: true
    createdAt?: true
  }

  export type DishCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    category?: true
    premiumLevel?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    allergens?: true
    weekStart?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type DishAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dish to aggregate.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dishes
    **/
    _count?: true | DishCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DishAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DishSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DishMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DishMaxAggregateInputType
  }

  export type GetDishAggregateType<T extends DishAggregateArgs> = {
        [P in keyof T & keyof AggregateDish]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDish[P]>
      : GetScalarType<T[P], AggregateDish[P]>
  }




  export type DishGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DishWhereInput
    orderBy?: DishOrderByWithAggregationInput | DishOrderByWithAggregationInput[]
    by: DishScalarFieldEnum[] | DishScalarFieldEnum
    having?: DishScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DishCountAggregateInputType | true
    _avg?: DishAvgAggregateInputType
    _sum?: DishSumAggregateInputType
    _min?: DishMinAggregateInputType
    _max?: DishMaxAggregateInputType
  }

  export type DishGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string | null
    category: $Enums.DishCategory
    premiumLevel: number
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    allergens: string[]
    weekStart: Date
    isActive: boolean
    createdAt: Date
    _count: DishCountAggregateOutputType | null
    _avg: DishAvgAggregateOutputType | null
    _sum: DishSumAggregateOutputType | null
    _min: DishMinAggregateOutputType | null
    _max: DishMaxAggregateOutputType | null
  }

  type GetDishGroupByPayload<T extends DishGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DishGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DishGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DishGroupByOutputType[P]>
            : GetScalarType<T[P], DishGroupByOutputType[P]>
        }
      >
    >


  export type DishSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    premiumLevel?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    allergens?: boolean
    weekStart?: boolean
    isActive?: boolean
    createdAt?: boolean
    boxItems?: boolean | Dish$boxItemsArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dish"]>

  export type DishSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    premiumLevel?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    allergens?: boolean
    weekStart?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dish"]>

  export type DishSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    premiumLevel?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    allergens?: boolean
    weekStart?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dish"]>

  export type DishSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    category?: boolean
    premiumLevel?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    allergens?: boolean
    weekStart?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type DishOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "category" | "premiumLevel" | "calories" | "protein" | "carbs" | "fat" | "allergens" | "weekStart" | "isActive" | "createdAt", ExtArgs["result"]["dish"]>
  export type DishInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    boxItems?: boolean | Dish$boxItemsArgs<ExtArgs>
    _count?: boolean | DishCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DishIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DishIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DishPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dish"
    objects: {
      boxItems: Prisma.$BoxItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      image: string | null
      category: $Enums.DishCategory
      premiumLevel: number
      calories: number | null
      protein: number | null
      carbs: number | null
      fat: number | null
      allergens: string[]
      weekStart: Date
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["dish"]>
    composites: {}
  }

  type DishGetPayload<S extends boolean | null | undefined | DishDefaultArgs> = $Result.GetResult<Prisma.$DishPayload, S>

  type DishCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DishFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DishCountAggregateInputType | true
    }

  export interface DishDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dish'], meta: { name: 'Dish' } }
    /**
     * Find zero or one Dish that matches the filter.
     * @param {DishFindUniqueArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DishFindUniqueArgs>(args: SelectSubset<T, DishFindUniqueArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dish that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DishFindUniqueOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DishFindUniqueOrThrowArgs>(args: SelectSubset<T, DishFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DishFindFirstArgs>(args?: SelectSubset<T, DishFindFirstArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dish that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindFirstOrThrowArgs} args - Arguments to find a Dish
     * @example
     * // Get one Dish
     * const dish = await prisma.dish.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DishFindFirstOrThrowArgs>(args?: SelectSubset<T, DishFindFirstOrThrowArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dishes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dishes
     * const dishes = await prisma.dish.findMany()
     * 
     * // Get first 10 Dishes
     * const dishes = await prisma.dish.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dishWithIdOnly = await prisma.dish.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DishFindManyArgs>(args?: SelectSubset<T, DishFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dish.
     * @param {DishCreateArgs} args - Arguments to create a Dish.
     * @example
     * // Create one Dish
     * const Dish = await prisma.dish.create({
     *   data: {
     *     // ... data to create a Dish
     *   }
     * })
     * 
     */
    create<T extends DishCreateArgs>(args: SelectSubset<T, DishCreateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dishes.
     * @param {DishCreateManyArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DishCreateManyArgs>(args?: SelectSubset<T, DishCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dishes and returns the data saved in the database.
     * @param {DishCreateManyAndReturnArgs} args - Arguments to create many Dishes.
     * @example
     * // Create many Dishes
     * const dish = await prisma.dish.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DishCreateManyAndReturnArgs>(args?: SelectSubset<T, DishCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dish.
     * @param {DishDeleteArgs} args - Arguments to delete one Dish.
     * @example
     * // Delete one Dish
     * const Dish = await prisma.dish.delete({
     *   where: {
     *     // ... filter to delete one Dish
     *   }
     * })
     * 
     */
    delete<T extends DishDeleteArgs>(args: SelectSubset<T, DishDeleteArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dish.
     * @param {DishUpdateArgs} args - Arguments to update one Dish.
     * @example
     * // Update one Dish
     * const dish = await prisma.dish.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DishUpdateArgs>(args: SelectSubset<T, DishUpdateArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dishes.
     * @param {DishDeleteManyArgs} args - Arguments to filter Dishes to delete.
     * @example
     * // Delete a few Dishes
     * const { count } = await prisma.dish.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DishDeleteManyArgs>(args?: SelectSubset<T, DishDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DishUpdateManyArgs>(args: SelectSubset<T, DishUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dishes and returns the data updated in the database.
     * @param {DishUpdateManyAndReturnArgs} args - Arguments to update many Dishes.
     * @example
     * // Update many Dishes
     * const dish = await prisma.dish.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dishes and only return the `id`
     * const dishWithIdOnly = await prisma.dish.updateManyAndReturn({
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
    updateManyAndReturn<T extends DishUpdateManyAndReturnArgs>(args: SelectSubset<T, DishUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dish.
     * @param {DishUpsertArgs} args - Arguments to update or create a Dish.
     * @example
     * // Update or create a Dish
     * const dish = await prisma.dish.upsert({
     *   create: {
     *     // ... data to create a Dish
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dish we want to update
     *   }
     * })
     */
    upsert<T extends DishUpsertArgs>(args: SelectSubset<T, DishUpsertArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dishes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishCountArgs} args - Arguments to filter Dishes to count.
     * @example
     * // Count the number of Dishes
     * const count = await prisma.dish.count({
     *   where: {
     *     // ... the filter for the Dishes we want to count
     *   }
     * })
    **/
    count<T extends DishCountArgs>(
      args?: Subset<T, DishCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DishCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DishAggregateArgs>(args: Subset<T, DishAggregateArgs>): Prisma.PrismaPromise<GetDishAggregateType<T>>

    /**
     * Group by Dish.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DishGroupByArgs} args - Group by arguments.
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
      T extends DishGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DishGroupByArgs['orderBy'] }
        : { orderBy?: DishGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DishGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDishGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dish model
   */
  readonly fields: DishFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dish.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DishClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    boxItems<T extends Dish$boxItemsArgs<ExtArgs> = {}>(args?: Subset<T, Dish$boxItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dish model
   */
  interface DishFieldRefs {
    readonly id: FieldRef<"Dish", 'String'>
    readonly name: FieldRef<"Dish", 'String'>
    readonly description: FieldRef<"Dish", 'String'>
    readonly image: FieldRef<"Dish", 'String'>
    readonly category: FieldRef<"Dish", 'DishCategory'>
    readonly premiumLevel: FieldRef<"Dish", 'Int'>
    readonly calories: FieldRef<"Dish", 'Int'>
    readonly protein: FieldRef<"Dish", 'Float'>
    readonly carbs: FieldRef<"Dish", 'Float'>
    readonly fat: FieldRef<"Dish", 'Float'>
    readonly allergens: FieldRef<"Dish", 'String[]'>
    readonly weekStart: FieldRef<"Dish", 'DateTime'>
    readonly isActive: FieldRef<"Dish", 'Boolean'>
    readonly createdAt: FieldRef<"Dish", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dish findUnique
   */
  export type DishFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findUniqueOrThrow
   */
  export type DishFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish findFirst
   */
  export type DishFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findFirstOrThrow
   */
  export type DishFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dish to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish findMany
   */
  export type DishFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter, which Dishes to fetch.
     */
    where?: DishWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dishes to fetch.
     */
    orderBy?: DishOrderByWithRelationInput | DishOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dishes.
     */
    cursor?: DishWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dishes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dishes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dishes.
     */
    distinct?: DishScalarFieldEnum | DishScalarFieldEnum[]
  }

  /**
   * Dish create
   */
  export type DishCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to create a Dish.
     */
    data: XOR<DishCreateInput, DishUncheckedCreateInput>
  }

  /**
   * Dish createMany
   */
  export type DishCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish createManyAndReturn
   */
  export type DishCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to create many Dishes.
     */
    data: DishCreateManyInput | DishCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dish update
   */
  export type DishUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The data needed to update a Dish.
     */
    data: XOR<DishUpdateInput, DishUncheckedUpdateInput>
    /**
     * Choose, which Dish to update.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish updateMany
   */
  export type DishUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish updateManyAndReturn
   */
  export type DishUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * The data used to update Dishes.
     */
    data: XOR<DishUpdateManyMutationInput, DishUncheckedUpdateManyInput>
    /**
     * Filter which Dishes to update
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to update.
     */
    limit?: number
  }

  /**
   * Dish upsert
   */
  export type DishUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * The filter to search for the Dish to update in case it exists.
     */
    where: DishWhereUniqueInput
    /**
     * In case the Dish found by the `where` argument doesn't exist, create a new Dish with this data.
     */
    create: XOR<DishCreateInput, DishUncheckedCreateInput>
    /**
     * In case the Dish was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DishUpdateInput, DishUncheckedUpdateInput>
  }

  /**
   * Dish delete
   */
  export type DishDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
    /**
     * Filter which Dish to delete.
     */
    where: DishWhereUniqueInput
  }

  /**
   * Dish deleteMany
   */
  export type DishDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dishes to delete
     */
    where?: DishWhereInput
    /**
     * Limit how many Dishes to delete.
     */
    limit?: number
  }

  /**
   * Dish.boxItems
   */
  export type Dish$boxItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    where?: BoxItemWhereInput
    orderBy?: BoxItemOrderByWithRelationInput | BoxItemOrderByWithRelationInput[]
    cursor?: BoxItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoxItemScalarFieldEnum | BoxItemScalarFieldEnum[]
  }

  /**
   * Dish without action
   */
  export type DishDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dish
     */
    select?: DishSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dish
     */
    omit?: DishOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DishInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyBox
   */

  export type AggregateWeeklyBox = {
    _count: WeeklyBoxCountAggregateOutputType | null
    _min: WeeklyBoxMinAggregateOutputType | null
    _max: WeeklyBoxMaxAggregateOutputType | null
  }

  export type WeeklyBoxMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklyBoxMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeeklyBoxCountAggregateOutputType = {
    id: number
    profileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeeklyBoxMinAggregateInputType = {
    id?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklyBoxMaxAggregateInputType = {
    id?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeeklyBoxCountAggregateInputType = {
    id?: true
    profileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeeklyBoxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyBox to aggregate.
     */
    where?: WeeklyBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBoxes to fetch.
     */
    orderBy?: WeeklyBoxOrderByWithRelationInput | WeeklyBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyBoxes
    **/
    _count?: true | WeeklyBoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyBoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyBoxMaxAggregateInputType
  }

  export type GetWeeklyBoxAggregateType<T extends WeeklyBoxAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyBox[P]>
      : GetScalarType<T[P], AggregateWeeklyBox[P]>
  }




  export type WeeklyBoxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyBoxWhereInput
    orderBy?: WeeklyBoxOrderByWithAggregationInput | WeeklyBoxOrderByWithAggregationInput[]
    by: WeeklyBoxScalarFieldEnum[] | WeeklyBoxScalarFieldEnum
    having?: WeeklyBoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyBoxCountAggregateInputType | true
    _min?: WeeklyBoxMinAggregateInputType
    _max?: WeeklyBoxMaxAggregateInputType
  }

  export type WeeklyBoxGroupByOutputType = {
    id: string
    profileId: string
    createdAt: Date
    updatedAt: Date
    _count: WeeklyBoxCountAggregateOutputType | null
    _min: WeeklyBoxMinAggregateOutputType | null
    _max: WeeklyBoxMaxAggregateOutputType | null
  }

  type GetWeeklyBoxGroupByPayload<T extends WeeklyBoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyBoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyBoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyBoxGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyBoxGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyBoxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    items?: boolean | WeeklyBox$itemsArgs<ExtArgs>
    _count?: boolean | WeeklyBoxCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyBox"]>

  export type WeeklyBoxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyBox"]>

  export type WeeklyBoxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyBox"]>

  export type WeeklyBoxSelectScalar = {
    id?: boolean
    profileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeeklyBoxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "createdAt" | "updatedAt", ExtArgs["result"]["weeklyBox"]>
  export type WeeklyBoxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    items?: boolean | WeeklyBox$itemsArgs<ExtArgs>
    _count?: boolean | WeeklyBoxCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeeklyBoxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type WeeklyBoxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $WeeklyBoxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyBox"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      items: Prisma.$BoxItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weeklyBox"]>
    composites: {}
  }

  type WeeklyBoxGetPayload<S extends boolean | null | undefined | WeeklyBoxDefaultArgs> = $Result.GetResult<Prisma.$WeeklyBoxPayload, S>

  type WeeklyBoxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeeklyBoxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeeklyBoxCountAggregateInputType | true
    }

  export interface WeeklyBoxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyBox'], meta: { name: 'WeeklyBox' } }
    /**
     * Find zero or one WeeklyBox that matches the filter.
     * @param {WeeklyBoxFindUniqueArgs} args - Arguments to find a WeeklyBox
     * @example
     * // Get one WeeklyBox
     * const weeklyBox = await prisma.weeklyBox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyBoxFindUniqueArgs>(args: SelectSubset<T, WeeklyBoxFindUniqueArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeeklyBox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeeklyBoxFindUniqueOrThrowArgs} args - Arguments to find a WeeklyBox
     * @example
     * // Get one WeeklyBox
     * const weeklyBox = await prisma.weeklyBox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyBoxFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyBoxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyBox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBoxFindFirstArgs} args - Arguments to find a WeeklyBox
     * @example
     * // Get one WeeklyBox
     * const weeklyBox = await prisma.weeklyBox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyBoxFindFirstArgs>(args?: SelectSubset<T, WeeklyBoxFindFirstArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeeklyBox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBoxFindFirstOrThrowArgs} args - Arguments to find a WeeklyBox
     * @example
     * // Get one WeeklyBox
     * const weeklyBox = await prisma.weeklyBox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyBoxFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyBoxFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeeklyBoxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBoxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyBoxes
     * const weeklyBoxes = await prisma.weeklyBox.findMany()
     * 
     * // Get first 10 WeeklyBoxes
     * const weeklyBoxes = await prisma.weeklyBox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyBoxWithIdOnly = await prisma.weeklyBox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyBoxFindManyArgs>(args?: SelectSubset<T, WeeklyBoxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeeklyBox.
     * @param {WeeklyBoxCreateArgs} args - Arguments to create a WeeklyBox.
     * @example
     * // Create one WeeklyBox
     * const WeeklyBox = await prisma.weeklyBox.create({
     *   data: {
     *     // ... data to create a WeeklyBox
     *   }
     * })
     * 
     */
    create<T extends WeeklyBoxCreateArgs>(args: SelectSubset<T, WeeklyBoxCreateArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeeklyBoxes.
     * @param {WeeklyBoxCreateManyArgs} args - Arguments to create many WeeklyBoxes.
     * @example
     * // Create many WeeklyBoxes
     * const weeklyBox = await prisma.weeklyBox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyBoxCreateManyArgs>(args?: SelectSubset<T, WeeklyBoxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyBoxes and returns the data saved in the database.
     * @param {WeeklyBoxCreateManyAndReturnArgs} args - Arguments to create many WeeklyBoxes.
     * @example
     * // Create many WeeklyBoxes
     * const weeklyBox = await prisma.weeklyBox.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyBoxes and only return the `id`
     * const weeklyBoxWithIdOnly = await prisma.weeklyBox.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyBoxCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyBoxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeeklyBox.
     * @param {WeeklyBoxDeleteArgs} args - Arguments to delete one WeeklyBox.
     * @example
     * // Delete one WeeklyBox
     * const WeeklyBox = await prisma.weeklyBox.delete({
     *   where: {
     *     // ... filter to delete one WeeklyBox
     *   }
     * })
     * 
     */
    delete<T extends WeeklyBoxDeleteArgs>(args: SelectSubset<T, WeeklyBoxDeleteArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeeklyBox.
     * @param {WeeklyBoxUpdateArgs} args - Arguments to update one WeeklyBox.
     * @example
     * // Update one WeeklyBox
     * const weeklyBox = await prisma.weeklyBox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyBoxUpdateArgs>(args: SelectSubset<T, WeeklyBoxUpdateArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeeklyBoxes.
     * @param {WeeklyBoxDeleteManyArgs} args - Arguments to filter WeeklyBoxes to delete.
     * @example
     * // Delete a few WeeklyBoxes
     * const { count } = await prisma.weeklyBox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyBoxDeleteManyArgs>(args?: SelectSubset<T, WeeklyBoxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyBoxes
     * const weeklyBox = await prisma.weeklyBox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyBoxUpdateManyArgs>(args: SelectSubset<T, WeeklyBoxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyBoxes and returns the data updated in the database.
     * @param {WeeklyBoxUpdateManyAndReturnArgs} args - Arguments to update many WeeklyBoxes.
     * @example
     * // Update many WeeklyBoxes
     * const weeklyBox = await prisma.weeklyBox.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeeklyBoxes and only return the `id`
     * const weeklyBoxWithIdOnly = await prisma.weeklyBox.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeeklyBoxUpdateManyAndReturnArgs>(args: SelectSubset<T, WeeklyBoxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeeklyBox.
     * @param {WeeklyBoxUpsertArgs} args - Arguments to update or create a WeeklyBox.
     * @example
     * // Update or create a WeeklyBox
     * const weeklyBox = await prisma.weeklyBox.upsert({
     *   create: {
     *     // ... data to create a WeeklyBox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyBox we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyBoxUpsertArgs>(args: SelectSubset<T, WeeklyBoxUpsertArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeeklyBoxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBoxCountArgs} args - Arguments to filter WeeklyBoxes to count.
     * @example
     * // Count the number of WeeklyBoxes
     * const count = await prisma.weeklyBox.count({
     *   where: {
     *     // ... the filter for the WeeklyBoxes we want to count
     *   }
     * })
    **/
    count<T extends WeeklyBoxCountArgs>(
      args?: Subset<T, WeeklyBoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyBoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeeklyBoxAggregateArgs>(args: Subset<T, WeeklyBoxAggregateArgs>): Prisma.PrismaPromise<GetWeeklyBoxAggregateType<T>>

    /**
     * Group by WeeklyBox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyBoxGroupByArgs} args - Group by arguments.
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
      T extends WeeklyBoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyBoxGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyBoxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeeklyBoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyBox model
   */
  readonly fields: WeeklyBoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyBox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyBoxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends WeeklyBox$itemsArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyBox$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WeeklyBox model
   */
  interface WeeklyBoxFieldRefs {
    readonly id: FieldRef<"WeeklyBox", 'String'>
    readonly profileId: FieldRef<"WeeklyBox", 'String'>
    readonly createdAt: FieldRef<"WeeklyBox", 'DateTime'>
    readonly updatedAt: FieldRef<"WeeklyBox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyBox findUnique
   */
  export type WeeklyBoxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBox to fetch.
     */
    where: WeeklyBoxWhereUniqueInput
  }

  /**
   * WeeklyBox findUniqueOrThrow
   */
  export type WeeklyBoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBox to fetch.
     */
    where: WeeklyBoxWhereUniqueInput
  }

  /**
   * WeeklyBox findFirst
   */
  export type WeeklyBoxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBox to fetch.
     */
    where?: WeeklyBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBoxes to fetch.
     */
    orderBy?: WeeklyBoxOrderByWithRelationInput | WeeklyBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyBoxes.
     */
    cursor?: WeeklyBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyBoxes.
     */
    distinct?: WeeklyBoxScalarFieldEnum | WeeklyBoxScalarFieldEnum[]
  }

  /**
   * WeeklyBox findFirstOrThrow
   */
  export type WeeklyBoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBox to fetch.
     */
    where?: WeeklyBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBoxes to fetch.
     */
    orderBy?: WeeklyBoxOrderByWithRelationInput | WeeklyBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyBoxes.
     */
    cursor?: WeeklyBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyBoxes.
     */
    distinct?: WeeklyBoxScalarFieldEnum | WeeklyBoxScalarFieldEnum[]
  }

  /**
   * WeeklyBox findMany
   */
  export type WeeklyBoxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyBoxes to fetch.
     */
    where?: WeeklyBoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyBoxes to fetch.
     */
    orderBy?: WeeklyBoxOrderByWithRelationInput | WeeklyBoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyBoxes.
     */
    cursor?: WeeklyBoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyBoxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyBoxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyBoxes.
     */
    distinct?: WeeklyBoxScalarFieldEnum | WeeklyBoxScalarFieldEnum[]
  }

  /**
   * WeeklyBox create
   */
  export type WeeklyBoxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyBox.
     */
    data: XOR<WeeklyBoxCreateInput, WeeklyBoxUncheckedCreateInput>
  }

  /**
   * WeeklyBox createMany
   */
  export type WeeklyBoxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyBoxes.
     */
    data: WeeklyBoxCreateManyInput | WeeklyBoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyBox createManyAndReturn
   */
  export type WeeklyBoxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * The data used to create many WeeklyBoxes.
     */
    data: WeeklyBoxCreateManyInput | WeeklyBoxCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyBox update
   */
  export type WeeklyBoxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyBox.
     */
    data: XOR<WeeklyBoxUpdateInput, WeeklyBoxUncheckedUpdateInput>
    /**
     * Choose, which WeeklyBox to update.
     */
    where: WeeklyBoxWhereUniqueInput
  }

  /**
   * WeeklyBox updateMany
   */
  export type WeeklyBoxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyBoxes.
     */
    data: XOR<WeeklyBoxUpdateManyMutationInput, WeeklyBoxUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyBoxes to update
     */
    where?: WeeklyBoxWhereInput
    /**
     * Limit how many WeeklyBoxes to update.
     */
    limit?: number
  }

  /**
   * WeeklyBox updateManyAndReturn
   */
  export type WeeklyBoxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * The data used to update WeeklyBoxes.
     */
    data: XOR<WeeklyBoxUpdateManyMutationInput, WeeklyBoxUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyBoxes to update
     */
    where?: WeeklyBoxWhereInput
    /**
     * Limit how many WeeklyBoxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyBox upsert
   */
  export type WeeklyBoxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyBox to update in case it exists.
     */
    where: WeeklyBoxWhereUniqueInput
    /**
     * In case the WeeklyBox found by the `where` argument doesn't exist, create a new WeeklyBox with this data.
     */
    create: XOR<WeeklyBoxCreateInput, WeeklyBoxUncheckedCreateInput>
    /**
     * In case the WeeklyBox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyBoxUpdateInput, WeeklyBoxUncheckedUpdateInput>
  }

  /**
   * WeeklyBox delete
   */
  export type WeeklyBoxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
    /**
     * Filter which WeeklyBox to delete.
     */
    where: WeeklyBoxWhereUniqueInput
  }

  /**
   * WeeklyBox deleteMany
   */
  export type WeeklyBoxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyBoxes to delete
     */
    where?: WeeklyBoxWhereInput
    /**
     * Limit how many WeeklyBoxes to delete.
     */
    limit?: number
  }

  /**
   * WeeklyBox.items
   */
  export type WeeklyBox$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    where?: BoxItemWhereInput
    orderBy?: BoxItemOrderByWithRelationInput | BoxItemOrderByWithRelationInput[]
    cursor?: BoxItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoxItemScalarFieldEnum | BoxItemScalarFieldEnum[]
  }

  /**
   * WeeklyBox without action
   */
  export type WeeklyBoxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyBox
     */
    select?: WeeklyBoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeeklyBox
     */
    omit?: WeeklyBoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyBoxInclude<ExtArgs> | null
  }


  /**
   * Model BoxItem
   */

  export type AggregateBoxItem = {
    _count: BoxItemCountAggregateOutputType | null
    _avg: BoxItemAvgAggregateOutputType | null
    _sum: BoxItemSumAggregateOutputType | null
    _min: BoxItemMinAggregateOutputType | null
    _max: BoxItemMaxAggregateOutputType | null
  }

  export type BoxItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type BoxItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type BoxItemMinAggregateOutputType = {
    id: string | null
    boxId: string | null
    dishId: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type BoxItemMaxAggregateOutputType = {
    id: string | null
    boxId: string | null
    dishId: string | null
    quantity: number | null
    unitPrice: number | null
    createdAt: Date | null
  }

  export type BoxItemCountAggregateOutputType = {
    id: number
    boxId: number
    dishId: number
    quantity: number
    unitPrice: number
    createdAt: number
    _all: number
  }


  export type BoxItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type BoxItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type BoxItemMinAggregateInputType = {
    id?: true
    boxId?: true
    dishId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type BoxItemMaxAggregateInputType = {
    id?: true
    boxId?: true
    dishId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
  }

  export type BoxItemCountAggregateInputType = {
    id?: true
    boxId?: true
    dishId?: true
    quantity?: true
    unitPrice?: true
    createdAt?: true
    _all?: true
  }

  export type BoxItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoxItem to aggregate.
     */
    where?: BoxItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxItems to fetch.
     */
    orderBy?: BoxItemOrderByWithRelationInput | BoxItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoxItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoxItems
    **/
    _count?: true | BoxItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoxItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoxItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoxItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoxItemMaxAggregateInputType
  }

  export type GetBoxItemAggregateType<T extends BoxItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBoxItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoxItem[P]>
      : GetScalarType<T[P], AggregateBoxItem[P]>
  }




  export type BoxItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxItemWhereInput
    orderBy?: BoxItemOrderByWithAggregationInput | BoxItemOrderByWithAggregationInput[]
    by: BoxItemScalarFieldEnum[] | BoxItemScalarFieldEnum
    having?: BoxItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoxItemCountAggregateInputType | true
    _avg?: BoxItemAvgAggregateInputType
    _sum?: BoxItemSumAggregateInputType
    _min?: BoxItemMinAggregateInputType
    _max?: BoxItemMaxAggregateInputType
  }

  export type BoxItemGroupByOutputType = {
    id: string
    boxId: string
    dishId: string
    quantity: number
    unitPrice: number
    createdAt: Date
    _count: BoxItemCountAggregateOutputType | null
    _avg: BoxItemAvgAggregateOutputType | null
    _sum: BoxItemSumAggregateOutputType | null
    _min: BoxItemMinAggregateOutputType | null
    _max: BoxItemMaxAggregateOutputType | null
  }

  type GetBoxItemGroupByPayload<T extends BoxItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoxItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoxItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoxItemGroupByOutputType[P]>
            : GetScalarType<T[P], BoxItemGroupByOutputType[P]>
        }
      >
    >


  export type BoxItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boxId?: boolean
    dishId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    box?: boolean | WeeklyBoxDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boxItem"]>

  export type BoxItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boxId?: boolean
    dishId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    box?: boolean | WeeklyBoxDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boxItem"]>

  export type BoxItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boxId?: boolean
    dishId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    box?: boolean | WeeklyBoxDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boxItem"]>

  export type BoxItemSelectScalar = {
    id?: boolean
    boxId?: boolean
    dishId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    createdAt?: boolean
  }

  export type BoxItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boxId" | "dishId" | "quantity" | "unitPrice" | "createdAt", ExtArgs["result"]["boxItem"]>
  export type BoxItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    box?: boolean | WeeklyBoxDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }
  export type BoxItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    box?: boolean | WeeklyBoxDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }
  export type BoxItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    box?: boolean | WeeklyBoxDefaultArgs<ExtArgs>
    dish?: boolean | DishDefaultArgs<ExtArgs>
  }

  export type $BoxItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoxItem"
    objects: {
      box: Prisma.$WeeklyBoxPayload<ExtArgs>
      dish: Prisma.$DishPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      boxId: string
      dishId: string
      quantity: number
      unitPrice: number
      createdAt: Date
    }, ExtArgs["result"]["boxItem"]>
    composites: {}
  }

  type BoxItemGetPayload<S extends boolean | null | undefined | BoxItemDefaultArgs> = $Result.GetResult<Prisma.$BoxItemPayload, S>

  type BoxItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoxItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoxItemCountAggregateInputType | true
    }

  export interface BoxItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoxItem'], meta: { name: 'BoxItem' } }
    /**
     * Find zero or one BoxItem that matches the filter.
     * @param {BoxItemFindUniqueArgs} args - Arguments to find a BoxItem
     * @example
     * // Get one BoxItem
     * const boxItem = await prisma.boxItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoxItemFindUniqueArgs>(args: SelectSubset<T, BoxItemFindUniqueArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoxItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoxItemFindUniqueOrThrowArgs} args - Arguments to find a BoxItem
     * @example
     * // Get one BoxItem
     * const boxItem = await prisma.boxItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoxItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BoxItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoxItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxItemFindFirstArgs} args - Arguments to find a BoxItem
     * @example
     * // Get one BoxItem
     * const boxItem = await prisma.boxItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoxItemFindFirstArgs>(args?: SelectSubset<T, BoxItemFindFirstArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoxItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxItemFindFirstOrThrowArgs} args - Arguments to find a BoxItem
     * @example
     * // Get one BoxItem
     * const boxItem = await prisma.boxItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoxItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BoxItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoxItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoxItems
     * const boxItems = await prisma.boxItem.findMany()
     * 
     * // Get first 10 BoxItems
     * const boxItems = await prisma.boxItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boxItemWithIdOnly = await prisma.boxItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoxItemFindManyArgs>(args?: SelectSubset<T, BoxItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoxItem.
     * @param {BoxItemCreateArgs} args - Arguments to create a BoxItem.
     * @example
     * // Create one BoxItem
     * const BoxItem = await prisma.boxItem.create({
     *   data: {
     *     // ... data to create a BoxItem
     *   }
     * })
     * 
     */
    create<T extends BoxItemCreateArgs>(args: SelectSubset<T, BoxItemCreateArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoxItems.
     * @param {BoxItemCreateManyArgs} args - Arguments to create many BoxItems.
     * @example
     * // Create many BoxItems
     * const boxItem = await prisma.boxItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoxItemCreateManyArgs>(args?: SelectSubset<T, BoxItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoxItems and returns the data saved in the database.
     * @param {BoxItemCreateManyAndReturnArgs} args - Arguments to create many BoxItems.
     * @example
     * // Create many BoxItems
     * const boxItem = await prisma.boxItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoxItems and only return the `id`
     * const boxItemWithIdOnly = await prisma.boxItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoxItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BoxItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BoxItem.
     * @param {BoxItemDeleteArgs} args - Arguments to delete one BoxItem.
     * @example
     * // Delete one BoxItem
     * const BoxItem = await prisma.boxItem.delete({
     *   where: {
     *     // ... filter to delete one BoxItem
     *   }
     * })
     * 
     */
    delete<T extends BoxItemDeleteArgs>(args: SelectSubset<T, BoxItemDeleteArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoxItem.
     * @param {BoxItemUpdateArgs} args - Arguments to update one BoxItem.
     * @example
     * // Update one BoxItem
     * const boxItem = await prisma.boxItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoxItemUpdateArgs>(args: SelectSubset<T, BoxItemUpdateArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoxItems.
     * @param {BoxItemDeleteManyArgs} args - Arguments to filter BoxItems to delete.
     * @example
     * // Delete a few BoxItems
     * const { count } = await prisma.boxItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoxItemDeleteManyArgs>(args?: SelectSubset<T, BoxItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoxItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoxItems
     * const boxItem = await prisma.boxItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoxItemUpdateManyArgs>(args: SelectSubset<T, BoxItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoxItems and returns the data updated in the database.
     * @param {BoxItemUpdateManyAndReturnArgs} args - Arguments to update many BoxItems.
     * @example
     * // Update many BoxItems
     * const boxItem = await prisma.boxItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BoxItems and only return the `id`
     * const boxItemWithIdOnly = await prisma.boxItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BoxItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BoxItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BoxItem.
     * @param {BoxItemUpsertArgs} args - Arguments to update or create a BoxItem.
     * @example
     * // Update or create a BoxItem
     * const boxItem = await prisma.boxItem.upsert({
     *   create: {
     *     // ... data to create a BoxItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoxItem we want to update
     *   }
     * })
     */
    upsert<T extends BoxItemUpsertArgs>(args: SelectSubset<T, BoxItemUpsertArgs<ExtArgs>>): Prisma__BoxItemClient<$Result.GetResult<Prisma.$BoxItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoxItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxItemCountArgs} args - Arguments to filter BoxItems to count.
     * @example
     * // Count the number of BoxItems
     * const count = await prisma.boxItem.count({
     *   where: {
     *     // ... the filter for the BoxItems we want to count
     *   }
     * })
    **/
    count<T extends BoxItemCountArgs>(
      args?: Subset<T, BoxItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoxItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoxItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoxItemAggregateArgs>(args: Subset<T, BoxItemAggregateArgs>): Prisma.PrismaPromise<GetBoxItemAggregateType<T>>

    /**
     * Group by BoxItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxItemGroupByArgs} args - Group by arguments.
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
      T extends BoxItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoxItemGroupByArgs['orderBy'] }
        : { orderBy?: BoxItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoxItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoxItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoxItem model
   */
  readonly fields: BoxItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoxItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoxItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    box<T extends WeeklyBoxDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeeklyBoxDefaultArgs<ExtArgs>>): Prisma__WeeklyBoxClient<$Result.GetResult<Prisma.$WeeklyBoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dish<T extends DishDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DishDefaultArgs<ExtArgs>>): Prisma__DishClient<$Result.GetResult<Prisma.$DishPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BoxItem model
   */
  interface BoxItemFieldRefs {
    readonly id: FieldRef<"BoxItem", 'String'>
    readonly boxId: FieldRef<"BoxItem", 'String'>
    readonly dishId: FieldRef<"BoxItem", 'String'>
    readonly quantity: FieldRef<"BoxItem", 'Int'>
    readonly unitPrice: FieldRef<"BoxItem", 'Float'>
    readonly createdAt: FieldRef<"BoxItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BoxItem findUnique
   */
  export type BoxItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * Filter, which BoxItem to fetch.
     */
    where: BoxItemWhereUniqueInput
  }

  /**
   * BoxItem findUniqueOrThrow
   */
  export type BoxItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * Filter, which BoxItem to fetch.
     */
    where: BoxItemWhereUniqueInput
  }

  /**
   * BoxItem findFirst
   */
  export type BoxItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * Filter, which BoxItem to fetch.
     */
    where?: BoxItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxItems to fetch.
     */
    orderBy?: BoxItemOrderByWithRelationInput | BoxItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoxItems.
     */
    cursor?: BoxItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoxItems.
     */
    distinct?: BoxItemScalarFieldEnum | BoxItemScalarFieldEnum[]
  }

  /**
   * BoxItem findFirstOrThrow
   */
  export type BoxItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * Filter, which BoxItem to fetch.
     */
    where?: BoxItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxItems to fetch.
     */
    orderBy?: BoxItemOrderByWithRelationInput | BoxItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoxItems.
     */
    cursor?: BoxItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoxItems.
     */
    distinct?: BoxItemScalarFieldEnum | BoxItemScalarFieldEnum[]
  }

  /**
   * BoxItem findMany
   */
  export type BoxItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * Filter, which BoxItems to fetch.
     */
    where?: BoxItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxItems to fetch.
     */
    orderBy?: BoxItemOrderByWithRelationInput | BoxItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoxItems.
     */
    cursor?: BoxItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoxItems.
     */
    distinct?: BoxItemScalarFieldEnum | BoxItemScalarFieldEnum[]
  }

  /**
   * BoxItem create
   */
  export type BoxItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * The data needed to create a BoxItem.
     */
    data: XOR<BoxItemCreateInput, BoxItemUncheckedCreateInput>
  }

  /**
   * BoxItem createMany
   */
  export type BoxItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoxItems.
     */
    data: BoxItemCreateManyInput | BoxItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoxItem createManyAndReturn
   */
  export type BoxItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * The data used to create many BoxItems.
     */
    data: BoxItemCreateManyInput | BoxItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoxItem update
   */
  export type BoxItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * The data needed to update a BoxItem.
     */
    data: XOR<BoxItemUpdateInput, BoxItemUncheckedUpdateInput>
    /**
     * Choose, which BoxItem to update.
     */
    where: BoxItemWhereUniqueInput
  }

  /**
   * BoxItem updateMany
   */
  export type BoxItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoxItems.
     */
    data: XOR<BoxItemUpdateManyMutationInput, BoxItemUncheckedUpdateManyInput>
    /**
     * Filter which BoxItems to update
     */
    where?: BoxItemWhereInput
    /**
     * Limit how many BoxItems to update.
     */
    limit?: number
  }

  /**
   * BoxItem updateManyAndReturn
   */
  export type BoxItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * The data used to update BoxItems.
     */
    data: XOR<BoxItemUpdateManyMutationInput, BoxItemUncheckedUpdateManyInput>
    /**
     * Filter which BoxItems to update
     */
    where?: BoxItemWhereInput
    /**
     * Limit how many BoxItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoxItem upsert
   */
  export type BoxItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * The filter to search for the BoxItem to update in case it exists.
     */
    where: BoxItemWhereUniqueInput
    /**
     * In case the BoxItem found by the `where` argument doesn't exist, create a new BoxItem with this data.
     */
    create: XOR<BoxItemCreateInput, BoxItemUncheckedCreateInput>
    /**
     * In case the BoxItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoxItemUpdateInput, BoxItemUncheckedUpdateInput>
  }

  /**
   * BoxItem delete
   */
  export type BoxItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
    /**
     * Filter which BoxItem to delete.
     */
    where: BoxItemWhereUniqueInput
  }

  /**
   * BoxItem deleteMany
   */
  export type BoxItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoxItems to delete
     */
    where?: BoxItemWhereInput
    /**
     * Limit how many BoxItems to delete.
     */
    limit?: number
  }

  /**
   * BoxItem without action
   */
  export type BoxItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxItem
     */
    select?: BoxItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoxItem
     */
    omit?: BoxItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxItemInclude<ExtArgs> | null
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
  }

  export type OrderSumAggregateOutputType = {
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    addressId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    deliveryAddress: string | null
    deliveryInstructions: string | null
    payphoneTransactionId: string | null
    deliveryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    addressId: string | null
    status: $Enums.OrderStatus | null
    total: number | null
    deliveryAddress: string | null
    deliveryInstructions: string | null
    payphoneTransactionId: string | null
    deliveryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    profileId: number
    addressId: number
    status: number
    total: number
    deliveryAddress: number
    deliveryInstructions: number
    payphoneTransactionId: number
    deliveryDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    profileId?: true
    addressId?: true
    status?: true
    total?: true
    deliveryAddress?: true
    deliveryInstructions?: true
    payphoneTransactionId?: true
    deliveryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    profileId?: true
    addressId?: true
    status?: true
    total?: true
    deliveryAddress?: true
    deliveryInstructions?: true
    payphoneTransactionId?: true
    deliveryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    profileId?: true
    addressId?: true
    status?: true
    total?: true
    deliveryAddress?: true
    deliveryInstructions?: true
    payphoneTransactionId?: true
    deliveryDate?: true
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
    addressId: string | null
    status: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions: string | null
    payphoneTransactionId: string | null
    deliveryDate: Date | null
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
    addressId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | Order$addressArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    addressId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | Order$addressArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    addressId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | Order$addressArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    profileId?: boolean
    addressId?: boolean
    status?: boolean
    total?: boolean
    deliveryAddress?: boolean
    deliveryInstructions?: boolean
    payphoneTransactionId?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "addressId" | "status" | "total" | "deliveryAddress" | "deliveryInstructions" | "payphoneTransactionId" | "deliveryDate" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | Order$addressArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | Order$addressArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    address?: boolean | Order$addressArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs> | null
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      addressId: string | null
      status: $Enums.OrderStatus
      total: number
      deliveryAddress: string
      deliveryInstructions: string | null
      payphoneTransactionId: string | null
      deliveryDate: Date | null
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
    address<T extends Order$addressArgs<ExtArgs> = {}>(args?: Subset<T, Order$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly addressId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly deliveryAddress: FieldRef<"Order", 'String'>
    readonly deliveryInstructions: FieldRef<"Order", 'String'>
    readonly payphoneTransactionId: FieldRef<"Order", 'String'>
    readonly deliveryDate: FieldRef<"Order", 'DateTime'>
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
   * Order.address
   */
  export type Order$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
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


  export const AddressScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    label: 'label',
    street: 'street',
    instructions: 'instructions',
    isDefault: 'isDefault',
    createdAt: 'createdAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const DishScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    category: 'category',
    premiumLevel: 'premiumLevel',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    allergens: 'allergens',
    weekStart: 'weekStart',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type DishScalarFieldEnum = (typeof DishScalarFieldEnum)[keyof typeof DishScalarFieldEnum]


  export const WeeklyBoxScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeeklyBoxScalarFieldEnum = (typeof WeeklyBoxScalarFieldEnum)[keyof typeof WeeklyBoxScalarFieldEnum]


  export const BoxItemScalarFieldEnum: {
    id: 'id',
    boxId: 'boxId',
    dishId: 'dishId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt'
  };

  export type BoxItemScalarFieldEnum = (typeof BoxItemScalarFieldEnum)[keyof typeof BoxItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    addressId: 'addressId',
    status: 'status',
    total: 'total',
    deliveryAddress: 'deliveryAddress',
    deliveryInstructions: 'deliveryInstructions',
    payphoneTransactionId: 'payphoneTransactionId',
    deliveryDate: 'deliveryDate',
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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DishCategory'
   */
  export type EnumDishCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishCategory'>
    


  /**
   * Reference to a field of type 'DishCategory[]'
   */
  export type ListEnumDishCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishCategory[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'DishTemplateCategory'
   */
  export type EnumDishTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishTemplateCategory'>
    


  /**
   * Reference to a field of type 'DishTemplateCategory[]'
   */
  export type ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DishTemplateCategory[]'>
    


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
    addresses?: AddressListRelationFilter
    orders?: OrderListRelationFilter
    weeklyBox?: XOR<WeeklyBoxNullableScalarRelationFilter, WeeklyBoxWhereInput> | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addresses?: AddressOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    weeklyBox?: WeeklyBoxOrderByWithRelationInput
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
    addresses?: AddressListRelationFilter
    orders?: OrderListRelationFilter
    weeklyBox?: XOR<WeeklyBoxNullableScalarRelationFilter, WeeklyBoxWhereInput> | null
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

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: UuidFilter<"Address"> | string
    profileId?: UuidFilter<"Address"> | string
    label?: StringNullableFilter<"Address"> | string | null
    street?: StringFilter<"Address"> | string
    instructions?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    orders?: OrderListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    label?: SortOrderInput | SortOrder
    street?: SortOrder
    instructions?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    profileId?: UuidFilter<"Address"> | string
    label?: StringNullableFilter<"Address"> | string | null
    street?: StringFilter<"Address"> | string
    instructions?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    label?: SortOrderInput | SortOrder
    street?: SortOrder
    instructions?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Address"> | string
    profileId?: UuidWithAggregatesFilter<"Address"> | string
    label?: StringNullableWithAggregatesFilter<"Address"> | string | null
    street?: StringWithAggregatesFilter<"Address"> | string
    instructions?: StringNullableWithAggregatesFilter<"Address"> | string | null
    isDefault?: BoolWithAggregatesFilter<"Address"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type DishWhereInput = {
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    id?: UuidFilter<"Dish"> | string
    name?: StringFilter<"Dish"> | string
    description?: StringFilter<"Dish"> | string
    image?: StringNullableFilter<"Dish"> | string | null
    category?: EnumDishCategoryFilter<"Dish"> | $Enums.DishCategory
    premiumLevel?: IntFilter<"Dish"> | number
    calories?: IntNullableFilter<"Dish"> | number | null
    protein?: FloatNullableFilter<"Dish"> | number | null
    carbs?: FloatNullableFilter<"Dish"> | number | null
    fat?: FloatNullableFilter<"Dish"> | number | null
    allergens?: StringNullableListFilter<"Dish">
    weekStart?: DateTimeFilter<"Dish"> | Date | string
    isActive?: BoolFilter<"Dish"> | boolean
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    boxItems?: BoxItemListRelationFilter
  }

  export type DishOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    premiumLevel?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    allergens?: SortOrder
    weekStart?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    boxItems?: BoxItemOrderByRelationAggregateInput
  }

  export type DishWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DishWhereInput | DishWhereInput[]
    OR?: DishWhereInput[]
    NOT?: DishWhereInput | DishWhereInput[]
    name?: StringFilter<"Dish"> | string
    description?: StringFilter<"Dish"> | string
    image?: StringNullableFilter<"Dish"> | string | null
    category?: EnumDishCategoryFilter<"Dish"> | $Enums.DishCategory
    premiumLevel?: IntFilter<"Dish"> | number
    calories?: IntNullableFilter<"Dish"> | number | null
    protein?: FloatNullableFilter<"Dish"> | number | null
    carbs?: FloatNullableFilter<"Dish"> | number | null
    fat?: FloatNullableFilter<"Dish"> | number | null
    allergens?: StringNullableListFilter<"Dish">
    weekStart?: DateTimeFilter<"Dish"> | Date | string
    isActive?: BoolFilter<"Dish"> | boolean
    createdAt?: DateTimeFilter<"Dish"> | Date | string
    boxItems?: BoxItemListRelationFilter
  }, "id">

  export type DishOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    category?: SortOrder
    premiumLevel?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    carbs?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    allergens?: SortOrder
    weekStart?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: DishCountOrderByAggregateInput
    _avg?: DishAvgOrderByAggregateInput
    _max?: DishMaxOrderByAggregateInput
    _min?: DishMinOrderByAggregateInput
    _sum?: DishSumOrderByAggregateInput
  }

  export type DishScalarWhereWithAggregatesInput = {
    AND?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    OR?: DishScalarWhereWithAggregatesInput[]
    NOT?: DishScalarWhereWithAggregatesInput | DishScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Dish"> | string
    name?: StringWithAggregatesFilter<"Dish"> | string
    description?: StringWithAggregatesFilter<"Dish"> | string
    image?: StringNullableWithAggregatesFilter<"Dish"> | string | null
    category?: EnumDishCategoryWithAggregatesFilter<"Dish"> | $Enums.DishCategory
    premiumLevel?: IntWithAggregatesFilter<"Dish"> | number
    calories?: IntNullableWithAggregatesFilter<"Dish"> | number | null
    protein?: FloatNullableWithAggregatesFilter<"Dish"> | number | null
    carbs?: FloatNullableWithAggregatesFilter<"Dish"> | number | null
    fat?: FloatNullableWithAggregatesFilter<"Dish"> | number | null
    allergens?: StringNullableListFilter<"Dish">
    weekStart?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Dish"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Dish"> | Date | string
  }

  export type WeeklyBoxWhereInput = {
    AND?: WeeklyBoxWhereInput | WeeklyBoxWhereInput[]
    OR?: WeeklyBoxWhereInput[]
    NOT?: WeeklyBoxWhereInput | WeeklyBoxWhereInput[]
    id?: UuidFilter<"WeeklyBox"> | string
    profileId?: UuidFilter<"WeeklyBox"> | string
    createdAt?: DateTimeFilter<"WeeklyBox"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyBox"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    items?: BoxItemListRelationFilter
  }

  export type WeeklyBoxOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    items?: BoxItemOrderByRelationAggregateInput
  }

  export type WeeklyBoxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: WeeklyBoxWhereInput | WeeklyBoxWhereInput[]
    OR?: WeeklyBoxWhereInput[]
    NOT?: WeeklyBoxWhereInput | WeeklyBoxWhereInput[]
    createdAt?: DateTimeFilter<"WeeklyBox"> | Date | string
    updatedAt?: DateTimeFilter<"WeeklyBox"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    items?: BoxItemListRelationFilter
  }, "id" | "profileId">

  export type WeeklyBoxOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeeklyBoxCountOrderByAggregateInput
    _max?: WeeklyBoxMaxOrderByAggregateInput
    _min?: WeeklyBoxMinOrderByAggregateInput
  }

  export type WeeklyBoxScalarWhereWithAggregatesInput = {
    AND?: WeeklyBoxScalarWhereWithAggregatesInput | WeeklyBoxScalarWhereWithAggregatesInput[]
    OR?: WeeklyBoxScalarWhereWithAggregatesInput[]
    NOT?: WeeklyBoxScalarWhereWithAggregatesInput | WeeklyBoxScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"WeeklyBox"> | string
    profileId?: UuidWithAggregatesFilter<"WeeklyBox"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyBox"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeeklyBox"> | Date | string
  }

  export type BoxItemWhereInput = {
    AND?: BoxItemWhereInput | BoxItemWhereInput[]
    OR?: BoxItemWhereInput[]
    NOT?: BoxItemWhereInput | BoxItemWhereInput[]
    id?: UuidFilter<"BoxItem"> | string
    boxId?: UuidFilter<"BoxItem"> | string
    dishId?: UuidFilter<"BoxItem"> | string
    quantity?: IntFilter<"BoxItem"> | number
    unitPrice?: FloatFilter<"BoxItem"> | number
    createdAt?: DateTimeFilter<"BoxItem"> | Date | string
    box?: XOR<WeeklyBoxScalarRelationFilter, WeeklyBoxWhereInput>
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
  }

  export type BoxItemOrderByWithRelationInput = {
    id?: SortOrder
    boxId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    box?: WeeklyBoxOrderByWithRelationInput
    dish?: DishOrderByWithRelationInput
  }

  export type BoxItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BoxItemWhereInput | BoxItemWhereInput[]
    OR?: BoxItemWhereInput[]
    NOT?: BoxItemWhereInput | BoxItemWhereInput[]
    boxId?: UuidFilter<"BoxItem"> | string
    dishId?: UuidFilter<"BoxItem"> | string
    quantity?: IntFilter<"BoxItem"> | number
    unitPrice?: FloatFilter<"BoxItem"> | number
    createdAt?: DateTimeFilter<"BoxItem"> | Date | string
    box?: XOR<WeeklyBoxScalarRelationFilter, WeeklyBoxWhereInput>
    dish?: XOR<DishScalarRelationFilter, DishWhereInput>
  }, "id">

  export type BoxItemOrderByWithAggregationInput = {
    id?: SortOrder
    boxId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    _count?: BoxItemCountOrderByAggregateInput
    _avg?: BoxItemAvgOrderByAggregateInput
    _max?: BoxItemMaxOrderByAggregateInput
    _min?: BoxItemMinOrderByAggregateInput
    _sum?: BoxItemSumOrderByAggregateInput
  }

  export type BoxItemScalarWhereWithAggregatesInput = {
    AND?: BoxItemScalarWhereWithAggregatesInput | BoxItemScalarWhereWithAggregatesInput[]
    OR?: BoxItemScalarWhereWithAggregatesInput[]
    NOT?: BoxItemScalarWhereWithAggregatesInput | BoxItemScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BoxItem"> | string
    boxId?: UuidWithAggregatesFilter<"BoxItem"> | string
    dishId?: UuidWithAggregatesFilter<"BoxItem"> | string
    quantity?: IntWithAggregatesFilter<"BoxItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"BoxItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BoxItem"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: UuidFilter<"Order"> | string
    profileId?: UuidFilter<"Order"> | string
    addressId?: UuidNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    deliveryAddress?: StringFilter<"Order"> | string
    deliveryInstructions?: StringNullableFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    addressId?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrderInput | SortOrder
    payphoneTransactionId?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    profileId?: UuidFilter<"Order"> | string
    addressId?: UuidNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    deliveryAddress?: StringFilter<"Order"> | string
    deliveryInstructions?: StringNullableFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    items?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    addressId?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrderInput | SortOrder
    payphoneTransactionId?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
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
    addressId?: UuidNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    total?: FloatWithAggregatesFilter<"Order"> | number
    deliveryAddress?: StringWithAggregatesFilter<"Order"> | string
    deliveryInstructions?: StringNullableWithAggregatesFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
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
    addresses?: AddressCreateNestedManyWithoutProfileInput
    orders?: OrderCreateNestedManyWithoutProfileInput
    weeklyBox?: WeeklyBoxCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput
    orders?: OrderUncheckedCreateNestedManyWithoutProfileInput
    weeklyBox?: WeeklyBoxUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutProfileNestedInput
    orders?: OrderUpdateManyWithoutProfileNestedInput
    weeklyBox?: WeeklyBoxUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutProfileNestedInput
    orders?: OrderUncheckedUpdateManyWithoutProfileNestedInput
    weeklyBox?: WeeklyBoxUncheckedUpdateOneWithoutProfileNestedInput
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

  export type AddressCreateInput = {
    id?: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutAddressesInput
    orders?: OrderCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    profileId: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutAddressesNestedInput
    orders?: OrderUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    profileId: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishCategory
    premiumLevel?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    allergens?: DishCreateallergensInput | string[]
    weekStart: Date | string
    isActive?: boolean
    createdAt?: Date | string
    boxItems?: BoxItemCreateNestedManyWithoutDishInput
  }

  export type DishUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishCategory
    premiumLevel?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    allergens?: DishCreateallergensInput | string[]
    weekStart: Date | string
    isActive?: boolean
    createdAt?: Date | string
    boxItems?: BoxItemUncheckedCreateNestedManyWithoutDishInput
  }

  export type DishUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    premiumLevel?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    allergens?: DishUpdateallergensInput | string[]
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boxItems?: BoxItemUpdateManyWithoutDishNestedInput
  }

  export type DishUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    premiumLevel?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    allergens?: DishUpdateallergensInput | string[]
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boxItems?: BoxItemUncheckedUpdateManyWithoutDishNestedInput
  }

  export type DishCreateManyInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishCategory
    premiumLevel?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    allergens?: DishCreateallergensInput | string[]
    weekStart: Date | string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DishUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    premiumLevel?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    allergens?: DishUpdateallergensInput | string[]
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    premiumLevel?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    allergens?: DishUpdateallergensInput | string[]
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyBoxCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutWeeklyBoxInput
    items?: BoxItemCreateNestedManyWithoutBoxInput
  }

  export type WeeklyBoxUncheckedCreateInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BoxItemUncheckedCreateNestedManyWithoutBoxInput
  }

  export type WeeklyBoxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutWeeklyBoxNestedInput
    items?: BoxItemUpdateManyWithoutBoxNestedInput
  }

  export type WeeklyBoxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BoxItemUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type WeeklyBoxCreateManyInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyBoxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyBoxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxItemCreateInput = {
    id?: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
    box: WeeklyBoxCreateNestedOneWithoutItemsInput
    dish: DishCreateNestedOneWithoutBoxItemsInput
  }

  export type BoxItemUncheckedCreateInput = {
    id?: string
    boxId: string
    dishId: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type BoxItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    box?: WeeklyBoxUpdateOneRequiredWithoutItemsNestedInput
    dish?: DishUpdateOneRequiredWithoutBoxItemsNestedInput
  }

  export type BoxItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxItemCreateManyInput = {
    id?: string
    boxId: string
    dishId: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type BoxItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxId?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrdersInput
    address?: AddressCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    profileId: string
    addressId?: string | null
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    profileId: string
    addressId?: string | null
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type WeeklyBoxNullableScalarRelationFilter = {
    is?: WeeklyBoxWhereInput | null
    isNot?: WeeklyBoxWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    label?: SortOrder
    street?: SortOrder
    instructions?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    label?: SortOrder
    street?: SortOrder
    instructions?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    label?: SortOrder
    street?: SortOrder
    instructions?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumDishCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryFilter<$PrismaModel> | $Enums.DishCategory
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

  export type BoxItemListRelationFilter = {
    every?: BoxItemWhereInput
    some?: BoxItemWhereInput
    none?: BoxItemWhereInput
  }

  export type BoxItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DishCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    premiumLevel?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    allergens?: SortOrder
    weekStart?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DishAvgOrderByAggregateInput = {
    premiumLevel?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type DishMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    premiumLevel?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weekStart?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DishMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    category?: SortOrder
    premiumLevel?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weekStart?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type DishSumOrderByAggregateInput = {
    premiumLevel?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type EnumDishCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DishCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDishCategoryFilter<$PrismaModel>
    _max?: NestedEnumDishCategoryFilter<$PrismaModel>
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

  export type WeeklyBoxCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklyBoxMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeeklyBoxMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type WeeklyBoxScalarRelationFilter = {
    is?: WeeklyBoxWhereInput
    isNot?: WeeklyBoxWhereInput
  }

  export type DishScalarRelationFilter = {
    is?: DishWhereInput
    isNot?: DishWhereInput
  }

  export type BoxItemCountOrderByAggregateInput = {
    id?: SortOrder
    boxId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type BoxItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type BoxItemMaxOrderByAggregateInput = {
    id?: SortOrder
    boxId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type BoxItemMinOrderByAggregateInput = {
    id?: SortOrder
    boxId?: SortOrder
    dishId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type BoxItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
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

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
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
    addressId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrder
    payphoneTransactionId?: SortOrder
    deliveryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    addressId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrder
    payphoneTransactionId?: SortOrder
    deliveryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    addressId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    deliveryAddress?: SortOrder
    deliveryInstructions?: SortOrder
    payphoneTransactionId?: SortOrder
    deliveryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type AddressCreateNestedManyWithoutProfileInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutProfileInput = {
    create?: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput> | OrderCreateWithoutProfileInput[] | OrderUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProfileInput | OrderCreateOrConnectWithoutProfileInput[]
    createMany?: OrderCreateManyProfileInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WeeklyBoxCreateNestedOneWithoutProfileInput = {
    create?: XOR<WeeklyBoxCreateWithoutProfileInput, WeeklyBoxUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WeeklyBoxCreateOrConnectWithoutProfileInput
    connect?: WeeklyBoxWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<OrderCreateWithoutProfileInput, OrderUncheckedCreateWithoutProfileInput> | OrderCreateWithoutProfileInput[] | OrderUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProfileInput | OrderCreateOrConnectWithoutProfileInput[]
    createMany?: OrderCreateManyProfileInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WeeklyBoxUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<WeeklyBoxCreateWithoutProfileInput, WeeklyBoxUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WeeklyBoxCreateOrConnectWithoutProfileInput
    connect?: WeeklyBoxWhereUniqueInput
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

  export type AddressUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutProfileInput | AddressUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutProfileInput | AddressUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutProfileInput | AddressUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
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

  export type WeeklyBoxUpdateOneWithoutProfileNestedInput = {
    create?: XOR<WeeklyBoxCreateWithoutProfileInput, WeeklyBoxUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WeeklyBoxCreateOrConnectWithoutProfileInput
    upsert?: WeeklyBoxUpsertWithoutProfileInput
    disconnect?: WeeklyBoxWhereInput | boolean
    delete?: WeeklyBoxWhereInput | boolean
    connect?: WeeklyBoxWhereUniqueInput
    update?: XOR<XOR<WeeklyBoxUpdateToOneWithWhereWithoutProfileInput, WeeklyBoxUpdateWithoutProfileInput>, WeeklyBoxUncheckedUpdateWithoutProfileInput>
  }

  export type AddressUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput> | AddressCreateWithoutProfileInput[] | AddressUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutProfileInput | AddressCreateOrConnectWithoutProfileInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutProfileInput | AddressUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: AddressCreateManyProfileInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutProfileInput | AddressUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutProfileInput | AddressUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
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

  export type WeeklyBoxUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<WeeklyBoxCreateWithoutProfileInput, WeeklyBoxUncheckedCreateWithoutProfileInput>
    connectOrCreate?: WeeklyBoxCreateOrConnectWithoutProfileInput
    upsert?: WeeklyBoxUpsertWithoutProfileInput
    disconnect?: WeeklyBoxWhereInput | boolean
    delete?: WeeklyBoxWhereInput | boolean
    connect?: WeeklyBoxWhereUniqueInput
    update?: XOR<XOR<WeeklyBoxUpdateToOneWithWhereWithoutProfileInput, WeeklyBoxUpdateWithoutProfileInput>, WeeklyBoxUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileCreateNestedOneWithoutAddressesInput = {
    create?: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressesInput
    connect?: ProfileWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProfileUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressesInput
    upsert?: ProfileUpsertWithoutAddressesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAddressesInput, ProfileUpdateWithoutAddressesInput>, ProfileUncheckedUpdateWithoutAddressesInput>
  }

  export type OrderUpdateManyWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAddressInput | OrderUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAddressInput | OrderUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput> | OrderCreateWithoutAddressInput[] | OrderUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput | OrderCreateOrConnectWithoutAddressInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAddressInput | OrderUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: OrderCreateManyAddressInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAddressInput | OrderUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAddressInput | OrderUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type DishCreateallergensInput = {
    set: string[]
  }

  export type BoxItemCreateNestedManyWithoutDishInput = {
    create?: XOR<BoxItemCreateWithoutDishInput, BoxItemUncheckedCreateWithoutDishInput> | BoxItemCreateWithoutDishInput[] | BoxItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutDishInput | BoxItemCreateOrConnectWithoutDishInput[]
    createMany?: BoxItemCreateManyDishInputEnvelope
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
  }

  export type BoxItemUncheckedCreateNestedManyWithoutDishInput = {
    create?: XOR<BoxItemCreateWithoutDishInput, BoxItemUncheckedCreateWithoutDishInput> | BoxItemCreateWithoutDishInput[] | BoxItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutDishInput | BoxItemCreateOrConnectWithoutDishInput[]
    createMany?: BoxItemCreateManyDishInputEnvelope
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
  }

  export type EnumDishCategoryFieldUpdateOperationsInput = {
    set?: $Enums.DishCategory
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type DishUpdateallergensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoxItemUpdateManyWithoutDishNestedInput = {
    create?: XOR<BoxItemCreateWithoutDishInput, BoxItemUncheckedCreateWithoutDishInput> | BoxItemCreateWithoutDishInput[] | BoxItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutDishInput | BoxItemCreateOrConnectWithoutDishInput[]
    upsert?: BoxItemUpsertWithWhereUniqueWithoutDishInput | BoxItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: BoxItemCreateManyDishInputEnvelope
    set?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    disconnect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    delete?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    update?: BoxItemUpdateWithWhereUniqueWithoutDishInput | BoxItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: BoxItemUpdateManyWithWhereWithoutDishInput | BoxItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: BoxItemScalarWhereInput | BoxItemScalarWhereInput[]
  }

  export type BoxItemUncheckedUpdateManyWithoutDishNestedInput = {
    create?: XOR<BoxItemCreateWithoutDishInput, BoxItemUncheckedCreateWithoutDishInput> | BoxItemCreateWithoutDishInput[] | BoxItemUncheckedCreateWithoutDishInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutDishInput | BoxItemCreateOrConnectWithoutDishInput[]
    upsert?: BoxItemUpsertWithWhereUniqueWithoutDishInput | BoxItemUpsertWithWhereUniqueWithoutDishInput[]
    createMany?: BoxItemCreateManyDishInputEnvelope
    set?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    disconnect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    delete?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    update?: BoxItemUpdateWithWhereUniqueWithoutDishInput | BoxItemUpdateWithWhereUniqueWithoutDishInput[]
    updateMany?: BoxItemUpdateManyWithWhereWithoutDishInput | BoxItemUpdateManyWithWhereWithoutDishInput[]
    deleteMany?: BoxItemScalarWhereInput | BoxItemScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutWeeklyBoxInput = {
    create?: XOR<ProfileCreateWithoutWeeklyBoxInput, ProfileUncheckedCreateWithoutWeeklyBoxInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWeeklyBoxInput
    connect?: ProfileWhereUniqueInput
  }

  export type BoxItemCreateNestedManyWithoutBoxInput = {
    create?: XOR<BoxItemCreateWithoutBoxInput, BoxItemUncheckedCreateWithoutBoxInput> | BoxItemCreateWithoutBoxInput[] | BoxItemUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutBoxInput | BoxItemCreateOrConnectWithoutBoxInput[]
    createMany?: BoxItemCreateManyBoxInputEnvelope
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
  }

  export type BoxItemUncheckedCreateNestedManyWithoutBoxInput = {
    create?: XOR<BoxItemCreateWithoutBoxInput, BoxItemUncheckedCreateWithoutBoxInput> | BoxItemCreateWithoutBoxInput[] | BoxItemUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutBoxInput | BoxItemCreateOrConnectWithoutBoxInput[]
    createMany?: BoxItemCreateManyBoxInputEnvelope
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutWeeklyBoxNestedInput = {
    create?: XOR<ProfileCreateWithoutWeeklyBoxInput, ProfileUncheckedCreateWithoutWeeklyBoxInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutWeeklyBoxInput
    upsert?: ProfileUpsertWithoutWeeklyBoxInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutWeeklyBoxInput, ProfileUpdateWithoutWeeklyBoxInput>, ProfileUncheckedUpdateWithoutWeeklyBoxInput>
  }

  export type BoxItemUpdateManyWithoutBoxNestedInput = {
    create?: XOR<BoxItemCreateWithoutBoxInput, BoxItemUncheckedCreateWithoutBoxInput> | BoxItemCreateWithoutBoxInput[] | BoxItemUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutBoxInput | BoxItemCreateOrConnectWithoutBoxInput[]
    upsert?: BoxItemUpsertWithWhereUniqueWithoutBoxInput | BoxItemUpsertWithWhereUniqueWithoutBoxInput[]
    createMany?: BoxItemCreateManyBoxInputEnvelope
    set?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    disconnect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    delete?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    update?: BoxItemUpdateWithWhereUniqueWithoutBoxInput | BoxItemUpdateWithWhereUniqueWithoutBoxInput[]
    updateMany?: BoxItemUpdateManyWithWhereWithoutBoxInput | BoxItemUpdateManyWithWhereWithoutBoxInput[]
    deleteMany?: BoxItemScalarWhereInput | BoxItemScalarWhereInput[]
  }

  export type BoxItemUncheckedUpdateManyWithoutBoxNestedInput = {
    create?: XOR<BoxItemCreateWithoutBoxInput, BoxItemUncheckedCreateWithoutBoxInput> | BoxItemCreateWithoutBoxInput[] | BoxItemUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: BoxItemCreateOrConnectWithoutBoxInput | BoxItemCreateOrConnectWithoutBoxInput[]
    upsert?: BoxItemUpsertWithWhereUniqueWithoutBoxInput | BoxItemUpsertWithWhereUniqueWithoutBoxInput[]
    createMany?: BoxItemCreateManyBoxInputEnvelope
    set?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    disconnect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    delete?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    connect?: BoxItemWhereUniqueInput | BoxItemWhereUniqueInput[]
    update?: BoxItemUpdateWithWhereUniqueWithoutBoxInput | BoxItemUpdateWithWhereUniqueWithoutBoxInput[]
    updateMany?: BoxItemUpdateManyWithWhereWithoutBoxInput | BoxItemUpdateManyWithWhereWithoutBoxInput[]
    deleteMany?: BoxItemScalarWhereInput | BoxItemScalarWhereInput[]
  }

  export type WeeklyBoxCreateNestedOneWithoutItemsInput = {
    create?: XOR<WeeklyBoxCreateWithoutItemsInput, WeeklyBoxUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WeeklyBoxCreateOrConnectWithoutItemsInput
    connect?: WeeklyBoxWhereUniqueInput
  }

  export type DishCreateNestedOneWithoutBoxItemsInput = {
    create?: XOR<DishCreateWithoutBoxItemsInput, DishUncheckedCreateWithoutBoxItemsInput>
    connectOrCreate?: DishCreateOrConnectWithoutBoxItemsInput
    connect?: DishWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeeklyBoxUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<WeeklyBoxCreateWithoutItemsInput, WeeklyBoxUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WeeklyBoxCreateOrConnectWithoutItemsInput
    upsert?: WeeklyBoxUpsertWithoutItemsInput
    connect?: WeeklyBoxWhereUniqueInput
    update?: XOR<XOR<WeeklyBoxUpdateToOneWithWhereWithoutItemsInput, WeeklyBoxUpdateWithoutItemsInput>, WeeklyBoxUncheckedUpdateWithoutItemsInput>
  }

  export type DishUpdateOneRequiredWithoutBoxItemsNestedInput = {
    create?: XOR<DishCreateWithoutBoxItemsInput, DishUncheckedCreateWithoutBoxItemsInput>
    connectOrCreate?: DishCreateOrConnectWithoutBoxItemsInput
    upsert?: DishUpsertWithoutBoxItemsInput
    connect?: DishWhereUniqueInput
    update?: XOR<XOR<DishUpdateToOneWithWhereWithoutBoxItemsInput, DishUpdateWithoutBoxItemsInput>, DishUncheckedUpdateWithoutBoxItemsInput>
  }

  export type ProfileCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProfileCreateWithoutOrdersInput, ProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrdersInput
    connect?: ProfileWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutOrdersInput = {
    create?: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput
    connect?: AddressWhereUniqueInput
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

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProfileUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProfileCreateWithoutOrdersInput, ProfileUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrdersInput
    upsert?: ProfileUpsertWithoutOrdersInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutOrdersInput, ProfileUpdateWithoutOrdersInput>, ProfileUncheckedUpdateWithoutOrdersInput>
  }

  export type AddressUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutOrdersInput
    upsert?: AddressUpsertWithoutOrdersInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutOrdersInput, AddressUpdateWithoutOrdersInput>, AddressUncheckedUpdateWithoutOrdersInput>
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

  export type DishTemplateUpdateallergensInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDishCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryFilter<$PrismaModel> | $Enums.DishCategory
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

  export type NestedEnumDishCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DishCategory | EnumDishCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishCategory[] | ListEnumDishCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishCategoryWithAggregatesFilter<$PrismaModel> | $Enums.DishCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDishCategoryFilter<$PrismaModel>
    _max?: NestedEnumDishCategoryFilter<$PrismaModel>
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumDishTemplateCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.DishTemplateCategory | EnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.DishTemplateCategory[] | ListEnumDishTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumDishTemplateCategoryFilter<$PrismaModel> | $Enums.DishTemplateCategory
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

  export type AddressCreateWithoutProfileInput = {
    id?: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutProfileInput = {
    id?: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutProfileInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput>
  }

  export type AddressCreateManyProfileInputEnvelope = {
    data: AddressCreateManyProfileInput | AddressCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutProfileInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProfileInput = {
    id?: string
    addressId?: string | null
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
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

  export type WeeklyBoxCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BoxItemCreateNestedManyWithoutBoxInput
  }

  export type WeeklyBoxUncheckedCreateWithoutProfileInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: BoxItemUncheckedCreateNestedManyWithoutBoxInput
  }

  export type WeeklyBoxCreateOrConnectWithoutProfileInput = {
    where: WeeklyBoxWhereUniqueInput
    create: XOR<WeeklyBoxCreateWithoutProfileInput, WeeklyBoxUncheckedCreateWithoutProfileInput>
  }

  export type AddressUpsertWithWhereUniqueWithoutProfileInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutProfileInput, AddressUncheckedUpdateWithoutProfileInput>
    create: XOR<AddressCreateWithoutProfileInput, AddressUncheckedCreateWithoutProfileInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutProfileInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutProfileInput, AddressUncheckedUpdateWithoutProfileInput>
  }

  export type AddressUpdateManyWithWhereWithoutProfileInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutProfileInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: UuidFilter<"Address"> | string
    profileId?: UuidFilter<"Address"> | string
    label?: StringNullableFilter<"Address"> | string | null
    street?: StringFilter<"Address"> | string
    instructions?: StringNullableFilter<"Address"> | string | null
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
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
    addressId?: UuidNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: FloatFilter<"Order"> | number
    deliveryAddress?: StringFilter<"Order"> | string
    deliveryInstructions?: StringNullableFilter<"Order"> | string | null
    payphoneTransactionId?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type WeeklyBoxUpsertWithoutProfileInput = {
    update: XOR<WeeklyBoxUpdateWithoutProfileInput, WeeklyBoxUncheckedUpdateWithoutProfileInput>
    create: XOR<WeeklyBoxCreateWithoutProfileInput, WeeklyBoxUncheckedCreateWithoutProfileInput>
    where?: WeeklyBoxWhereInput
  }

  export type WeeklyBoxUpdateToOneWithWhereWithoutProfileInput = {
    where?: WeeklyBoxWhereInput
    data: XOR<WeeklyBoxUpdateWithoutProfileInput, WeeklyBoxUncheckedUpdateWithoutProfileInput>
  }

  export type WeeklyBoxUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BoxItemUpdateManyWithoutBoxNestedInput
  }

  export type WeeklyBoxUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: BoxItemUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type ProfileCreateWithoutAddressesInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProfileInput
    weeklyBox?: WeeklyBoxCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutAddressesInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProfileInput
    weeklyBox?: WeeklyBoxUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutAddressesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
  }

  export type OrderCreateWithoutAddressInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAddressInput = {
    id?: string
    profileId: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAddressInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
  }

  export type OrderCreateManyAddressInputEnvelope = {
    data: OrderCreateManyAddressInput | OrderCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutAddressesInput = {
    update: XOR<ProfileUpdateWithoutAddressesInput, ProfileUncheckedUpdateWithoutAddressesInput>
    create: XOR<ProfileCreateWithoutAddressesInput, ProfileUncheckedCreateWithoutAddressesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAddressesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAddressesInput, ProfileUncheckedUpdateWithoutAddressesInput>
  }

  export type ProfileUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProfileNestedInput
    weeklyBox?: WeeklyBoxUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProfileNestedInput
    weeklyBox?: WeeklyBoxUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
    create: XOR<OrderCreateWithoutAddressInput, OrderUncheckedCreateWithoutAddressInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutAddressInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutAddressInput, OrderUncheckedUpdateWithoutAddressInput>
  }

  export type OrderUpdateManyWithWhereWithoutAddressInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutAddressInput>
  }

  export type BoxItemCreateWithoutDishInput = {
    id?: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
    box: WeeklyBoxCreateNestedOneWithoutItemsInput
  }

  export type BoxItemUncheckedCreateWithoutDishInput = {
    id?: string
    boxId: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type BoxItemCreateOrConnectWithoutDishInput = {
    where: BoxItemWhereUniqueInput
    create: XOR<BoxItemCreateWithoutDishInput, BoxItemUncheckedCreateWithoutDishInput>
  }

  export type BoxItemCreateManyDishInputEnvelope = {
    data: BoxItemCreateManyDishInput | BoxItemCreateManyDishInput[]
    skipDuplicates?: boolean
  }

  export type BoxItemUpsertWithWhereUniqueWithoutDishInput = {
    where: BoxItemWhereUniqueInput
    update: XOR<BoxItemUpdateWithoutDishInput, BoxItemUncheckedUpdateWithoutDishInput>
    create: XOR<BoxItemCreateWithoutDishInput, BoxItemUncheckedCreateWithoutDishInput>
  }

  export type BoxItemUpdateWithWhereUniqueWithoutDishInput = {
    where: BoxItemWhereUniqueInput
    data: XOR<BoxItemUpdateWithoutDishInput, BoxItemUncheckedUpdateWithoutDishInput>
  }

  export type BoxItemUpdateManyWithWhereWithoutDishInput = {
    where: BoxItemScalarWhereInput
    data: XOR<BoxItemUpdateManyMutationInput, BoxItemUncheckedUpdateManyWithoutDishInput>
  }

  export type BoxItemScalarWhereInput = {
    AND?: BoxItemScalarWhereInput | BoxItemScalarWhereInput[]
    OR?: BoxItemScalarWhereInput[]
    NOT?: BoxItemScalarWhereInput | BoxItemScalarWhereInput[]
    id?: UuidFilter<"BoxItem"> | string
    boxId?: UuidFilter<"BoxItem"> | string
    dishId?: UuidFilter<"BoxItem"> | string
    quantity?: IntFilter<"BoxItem"> | number
    unitPrice?: FloatFilter<"BoxItem"> | number
    createdAt?: DateTimeFilter<"BoxItem"> | Date | string
  }

  export type ProfileCreateWithoutWeeklyBoxInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutProfileInput
    orders?: OrderCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutWeeklyBoxInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput
    orders?: OrderUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutWeeklyBoxInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutWeeklyBoxInput, ProfileUncheckedCreateWithoutWeeklyBoxInput>
  }

  export type BoxItemCreateWithoutBoxInput = {
    id?: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
    dish: DishCreateNestedOneWithoutBoxItemsInput
  }

  export type BoxItemUncheckedCreateWithoutBoxInput = {
    id?: string
    dishId: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type BoxItemCreateOrConnectWithoutBoxInput = {
    where: BoxItemWhereUniqueInput
    create: XOR<BoxItemCreateWithoutBoxInput, BoxItemUncheckedCreateWithoutBoxInput>
  }

  export type BoxItemCreateManyBoxInputEnvelope = {
    data: BoxItemCreateManyBoxInput | BoxItemCreateManyBoxInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutWeeklyBoxInput = {
    update: XOR<ProfileUpdateWithoutWeeklyBoxInput, ProfileUncheckedUpdateWithoutWeeklyBoxInput>
    create: XOR<ProfileCreateWithoutWeeklyBoxInput, ProfileUncheckedCreateWithoutWeeklyBoxInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutWeeklyBoxInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutWeeklyBoxInput, ProfileUncheckedUpdateWithoutWeeklyBoxInput>
  }

  export type ProfileUpdateWithoutWeeklyBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutProfileNestedInput
    orders?: OrderUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutWeeklyBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutProfileNestedInput
    orders?: OrderUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type BoxItemUpsertWithWhereUniqueWithoutBoxInput = {
    where: BoxItemWhereUniqueInput
    update: XOR<BoxItemUpdateWithoutBoxInput, BoxItemUncheckedUpdateWithoutBoxInput>
    create: XOR<BoxItemCreateWithoutBoxInput, BoxItemUncheckedCreateWithoutBoxInput>
  }

  export type BoxItemUpdateWithWhereUniqueWithoutBoxInput = {
    where: BoxItemWhereUniqueInput
    data: XOR<BoxItemUpdateWithoutBoxInput, BoxItemUncheckedUpdateWithoutBoxInput>
  }

  export type BoxItemUpdateManyWithWhereWithoutBoxInput = {
    where: BoxItemScalarWhereInput
    data: XOR<BoxItemUpdateManyMutationInput, BoxItemUncheckedUpdateManyWithoutBoxInput>
  }

  export type WeeklyBoxCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutWeeklyBoxInput
  }

  export type WeeklyBoxUncheckedCreateWithoutItemsInput = {
    id?: string
    profileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeeklyBoxCreateOrConnectWithoutItemsInput = {
    where: WeeklyBoxWhereUniqueInput
    create: XOR<WeeklyBoxCreateWithoutItemsInput, WeeklyBoxUncheckedCreateWithoutItemsInput>
  }

  export type DishCreateWithoutBoxItemsInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishCategory
    premiumLevel?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    allergens?: DishCreateallergensInput | string[]
    weekStart: Date | string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DishUncheckedCreateWithoutBoxItemsInput = {
    id?: string
    name: string
    description: string
    image?: string | null
    category: $Enums.DishCategory
    premiumLevel?: number
    calories?: number | null
    protein?: number | null
    carbs?: number | null
    fat?: number | null
    allergens?: DishCreateallergensInput | string[]
    weekStart: Date | string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type DishCreateOrConnectWithoutBoxItemsInput = {
    where: DishWhereUniqueInput
    create: XOR<DishCreateWithoutBoxItemsInput, DishUncheckedCreateWithoutBoxItemsInput>
  }

  export type WeeklyBoxUpsertWithoutItemsInput = {
    update: XOR<WeeklyBoxUpdateWithoutItemsInput, WeeklyBoxUncheckedUpdateWithoutItemsInput>
    create: XOR<WeeklyBoxCreateWithoutItemsInput, WeeklyBoxUncheckedCreateWithoutItemsInput>
    where?: WeeklyBoxWhereInput
  }

  export type WeeklyBoxUpdateToOneWithWhereWithoutItemsInput = {
    where?: WeeklyBoxWhereInput
    data: XOR<WeeklyBoxUpdateWithoutItemsInput, WeeklyBoxUncheckedUpdateWithoutItemsInput>
  }

  export type WeeklyBoxUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutWeeklyBoxNestedInput
  }

  export type WeeklyBoxUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUpsertWithoutBoxItemsInput = {
    update: XOR<DishUpdateWithoutBoxItemsInput, DishUncheckedUpdateWithoutBoxItemsInput>
    create: XOR<DishCreateWithoutBoxItemsInput, DishUncheckedCreateWithoutBoxItemsInput>
    where?: DishWhereInput
  }

  export type DishUpdateToOneWithWhereWithoutBoxItemsInput = {
    where?: DishWhereInput
    data: XOR<DishUpdateWithoutBoxItemsInput, DishUncheckedUpdateWithoutBoxItemsInput>
  }

  export type DishUpdateWithoutBoxItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    premiumLevel?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    allergens?: DishUpdateallergensInput | string[]
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DishUncheckedUpdateWithoutBoxItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumDishCategoryFieldUpdateOperationsInput | $Enums.DishCategory
    premiumLevel?: IntFieldUpdateOperationsInput | number
    calories?: NullableIntFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    carbs?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    allergens?: DishUpdateallergensInput | string[]
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateWithoutOrdersInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutProfileInput
    weeklyBox?: WeeklyBoxCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutOrdersInput = {
    id: string
    fullName?: string | null
    whatsapp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput
    weeklyBox?: WeeklyBoxUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutOrdersInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutOrdersInput, ProfileUncheckedCreateWithoutOrdersInput>
  }

  export type AddressCreateWithoutOrdersInput = {
    id?: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    profile: ProfileCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateWithoutOrdersInput = {
    id?: string
    profileId: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutOrdersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
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
    addresses?: AddressUpdateManyWithoutProfileNestedInput
    weeklyBox?: WeeklyBoxUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutProfileNestedInput
    weeklyBox?: WeeklyBoxUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type AddressUpsertWithoutOrdersInput = {
    update: XOR<AddressUpdateWithoutOrdersInput, AddressUncheckedUpdateWithoutOrdersInput>
    create: XOR<AddressCreateWithoutOrdersInput, AddressUncheckedCreateWithoutOrdersInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutOrdersInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutOrdersInput, AddressUncheckedUpdateWithoutOrdersInput>
  }

  export type AddressUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrdersInput
    address?: AddressCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    profileId: string
    addressId?: string | null
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrdersNestedInput
    address?: AddressUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type AddressCreateManyProfileInput = {
    id?: string
    label?: string | null
    street: string
    instructions?: string | null
    isDefault?: boolean
    createdAt?: Date | string
  }

  export type OrderCreateManyProfileInput = {
    id?: string
    addressId?: string | null
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    street?: StringFieldUpdateOperationsInput | string
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyAddressInput = {
    id?: string
    profileId: string
    status?: $Enums.OrderStatus
    total: number
    deliveryAddress: string
    deliveryInstructions?: string | null
    payphoneTransactionId?: string | null
    deliveryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: FloatFieldUpdateOperationsInput | number
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    deliveryInstructions?: NullableStringFieldUpdateOperationsInput | string | null
    payphoneTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxItemCreateManyDishInput = {
    id?: string
    boxId: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type BoxItemUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    box?: WeeklyBoxUpdateOneRequiredWithoutItemsNestedInput
  }

  export type BoxItemUncheckedUpdateWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxItemUncheckedUpdateManyWithoutDishInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxItemCreateManyBoxInput = {
    id?: string
    dishId: string
    quantity?: number
    unitPrice: number
    createdAt?: Date | string
  }

  export type BoxItemUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dish?: DishUpdateOneRequiredWithoutBoxItemsNestedInput
  }

  export type BoxItemUncheckedUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxItemUncheckedUpdateManyWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    dishId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
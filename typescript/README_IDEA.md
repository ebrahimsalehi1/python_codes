# 🎓 TypeScript Teaching Tips — Patterns from a Real-World Monorepo

> A curated collection of TypeScript patterns and techniques extracted from the **Country Sales Program** codebase.
> Each pattern includes a real example, explanation, and the core TypeScript concept it demonstrates.

---

## Table of Contents

1. [`as const` Enum Alternative](#1-as-const-enum-alternative)
2. [Tuple-Based Union Extraction](#2-tuple-based-union-extraction)
3. [Global Type Augmentation (Declaration Merging)](#3-global-type-augmentation-declaration-merging)
4. [Generics with Constrained Defaults](#4-generics-with-constrained-defaults)
5. [User-Defined Type Guards](#5-user-defined-type-guards)
6. [Generic Higher-Order Methods](#6-generic-higher-order-methods)
7. [Intersection Types for Payload Wrapping](#7-intersection-types-for-payload-wrapping)
8. [Omit + Intersection for Type Reshaping](#8-omit--intersection-for-type-reshaping)
9. [Template Literal Types for Path Validation](#9-template-literal-types-for-path-validation)
10. [`Exclude` for Union Narrowing](#10-exclude-for-union-narrowing)
11. [Triple-Constrained Generics](#11-triple-constrained-generics)
12. [Functor-like `transform` on Generic Classes](#12-functor-like-transform-on-generic-classes)
13. [`ReturnType<typeof fn>` for Derived Types](#13-returntypetypeof-fn-for-derived-types)
14. [Mapped Types for Exhaustive Records](#14-mapped-types-for-exhaustive-records)
15. [NestJS Decorator Composition](#15-nestjs-decorator-composition)
16. [Type-Safe Parameter Decorators](#16-type-safe-parameter-decorators)
17. [Context + Narrowing Hook (React)](#17-context--narrowing-hook-react)
18. [Abstract Entity Hierarchy with Utility Types](#18-abstract-entity-hierarchy-with-utility-types)
19. [`OmitType` with `as const` Tuples (NestJS DTOs)](#19-omittype-with-as-const-tuples-nestjs-dtos)

---

## 1. `as const` Enum Alternative

> **Concept:** Using `as const` objects + derived union types instead of TypeScript `enum`.

This is the **most frequently used advanced pattern** in the codebase — the team's standard way of defining enumerations.

```ts
export const PrefixOperatorEnum = {
  MATCH: '+',
  NOT_MATCH: '-',
  OPTIONAL: '/',
  PROHIBIT: 'V',
  FORCE: 'Z',
} as const;

export type PrefixOperator = (typeof PrefixOperatorEnum)[keyof typeof PrefixOperatorEnum];
// Resolves to: '+' | '-' | '/' | 'V' | 'Z'
```

### Why this matters

| Aspect               | `enum`               | `as const` object        |
| -------------------- | -------------------- | ------------------------ |
| Tree-shakeable       | ❌                   | ✅                       |
| JSON-serializable    | ❌ (reverse mapping) | ✅                       |
| Iterable at runtime  | Awkward              | `Object.values()`        |
| Value/type same name | ✅ (built-in)        | ✅ (separate namespaces) |

### Key TypeScript concepts

- `as const` narrows every property to its **literal** type (not just `string`)
- `typeof` gets the object's type, `keyof typeof` gets the union of its keys
- Indexing with `[keyof typeof X]` gives the union of its **values**
- The const and type can **share the same name** — TypeScript keeps values and types in separate namespaces

---

## 2. Tuple-Based Union Extraction

> **Concept:** Deriving a union type from a `readonly` array using `[number]` indexing.

```ts
export const STATUSES = ['created', 'requesting', 'importing', 'completed', 'failed'] as const;

export type TransferRequestStateType = (typeof STATUSES)[number];
// → 'created' | 'requesting' | 'importing' | 'completed' | 'failed'
```

### Key TypeScript concepts

- `as const` turns the array into a `readonly` tuple with literal element types
- `[number]` is a numeric index signature — it extracts the union of all element types
- The array remains usable at runtime (e.g., for validation, iteration, dropdowns)

---

## 3. Global Type Augmentation (Declaration Merging)

> **Concept:** Re-opening built-in interfaces to add stronger typing.

```ts
type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

type Values<T> = [keyof T];

export {};
declare global {
  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>;
    values<T extends object>(o: T): Values<T>;
  }
}
```

### Why this matters

TypeScript's built-in `Object.entries()` returns `[string, V][]`, losing key type information.
This augmentation preserves key types — `Object.entries({ a: 1, b: 'x' })` now returns `(['a', number] | ['b', string])[]`.

### Key TypeScript concepts

- **Declaration merging**: re-opening `ObjectConstructor` to override its methods
- **Mapped type → indexed access**: maps each key `K` to a `[K, T[K]]` tuple, then collapses via `[keyof T]`
- `export {}` is required to make the file a module so `declare global` works

---

## 4. Generics with Constrained Defaults

> **Concept:** Using `extends` constraints with default type parameters for flexible yet type-safe APIs.

```ts
export type GenericTimingCheckpoint<State extends string = string> = {
  state: State;
  at: string; // ISO timestamp
};

export type GenericTimingV1<State extends string = string, Span extends string = string> = {
  version: 1;
  checkpoints: Array<GenericTimingCheckpoint<State>>;
  totalsMs: Partial<Record<State, number>>;
  totalsMsBySpan: Partial<Record<Span, number>>;
  totalMs: number;
  last: { state: State; at: string };
};

export type GenericTimingConfig<State extends string = string, Span extends string = string> = {
  stateValues: readonly State[];
  knownSpans: readonly Span[];
  spanForState: (state: State) => Span | undefined;
};
```

### Key TypeScript concepts

- `State extends string = string` — a **constrained generic with a default**
- Callers can supply a narrow union (e.g., `'idle' | 'running'`) or leave it open
- `Partial<Record<State, number>>` composes two utility types for a sparse dictionary
- `readonly` arrays in config prevent accidental mutation

---

## 5. User-Defined Type Guards

> **Concept:** Custom functions that narrow types via the `value is Type` return annotation.

```ts
const isRecord = (value: unknown): value is Record<string, unknown> => !!value && typeof value === 'object' && !Array.isArray(value);
```

### Usage

```ts
function process(input: unknown) {
  if (isRecord(input)) {
    // TypeScript now knows: input is Record<string, unknown>
    console.log(input.someProperty); // ✅ no error
  }
}
```

### Key TypeScript concepts

- The `value is Record<string, unknown>` return type is a **type predicate**
- Inside `if` blocks using the guard, TypeScript **narrows** the type automatically
- Much safer than `as` casts — the runtime check and type narrowing are coupled

---

## 6. Generic Higher-Order Methods

> **Concept:** A method-level generic that wraps an async function with cross-cutting concerns.

```ts
export class GenericCounter {
  /**
   * Convenience wrapper: execute async fn, count success or register error.
   * Returns fn() result on success, undefined on error.
   */
  async count<T>(counterType: string, metric: string, fn: () => Promise<T>): Promise<T | undefined> {
    try {
      const res = await fn();
      this.increase(counterType, metric, 1);
      return res;
    } catch (err) {
      this.increaseError(counterType, err);
      return undefined;
    }
  }
}
```

### Key TypeScript concepts

- `<T>` is scoped to the **method**, not the class — each call can have a different `T`
- Accepts a function `fn`, executes it, and wraps with counting logic (decorator pattern)
- `Promise<T | undefined>` honestly communicates that errors are swallowed
- Higher-order function pattern: behavior is injected via `fn`

---

## 7. Intersection Types for Payload Wrapping

> **Concept:** A generic intersection type that augments any type with additional fields.

```ts
export type Payload<T> = T & { api_version: string };
```

### Usage

```ts
type UserPayload = Payload<UserDto>;
// Has all UserDto properties + api_version: string
```

### Key TypeScript concepts

- `T & { api_version: string }` is an **intersection type** — the result has properties from both
- This is a **mixin pattern** at the type level — generic and reusable
- One-line utility that works with any `T`

---

## 8. Omit + Intersection for Type Reshaping

> **Concept:** Stripping unwanted fields and adding new ones in a single type expression.

```ts
export type ProductComparisonResponseFlat = Omit<ProductComparisonResponse, 'prNumberChanges' | 'ruleChanges'> & {
  changes: ProductComparisonChange[];
};
```

### Key TypeScript concepts

- `Omit<T, K>` removes specified keys from `T`
- The `&` intersection adds new fields to the result
- Common "reshape" pattern — flatten nested structures, replace fields, etc.

---

## 9. Template Literal Types for Path Validation

> **Concept:** Constraining string parameters to match a pattern at compile time.

```ts
const createFrontendStack = (name: string, pathURL: `/${string}`) =>
  new FrontendStack(this, `frontend-${name}`, {
    basePath: pathURL,
  });
```

### Usage

```ts
createFrontendStack('csp', '/csp'); // ✅ compiles
createFrontendStack('csp', 'csp'); // ❌ Type '"csp"' is not assignable to type '`/${string}`'
```

### Key TypeScript concepts

- `` `/${string}` `` is a **template literal type** — strings must start with `/`
- Zero-cost runtime validation — errors are caught at compile time
- Can be combined with unions: `` `/api/${'v1' | 'v2'}` `` → `'/api/v1' | '/api/v2'`

---

## 10. `Exclude` for Union Narrowing

> **Concept:** Removing specific members from a union type using `Exclude`.

```ts
export type StageName = keyof typeof ACCOUNTS;
// → 'cicd' | 'dev' | 'feat1' | ... | 'prod'

export interface AppStageProps extends StageProps {
  readonly stageName: Exclude<StageName, 'cicd'>;
  // → 'dev' | 'feat1' | ... | 'prod'
}
```

### Key TypeScript concepts

- `keyof typeof` derives a union type from an object's keys
- `Exclude<T, U>` removes members of `U` from `T`
- This is a **compile-time guard** — nobody can accidentally pass `'cicd'` as a stage name

---

## 11. Triple-Constrained Generics

> **Concept:** Multiple interdependent generic parameters that constrain each other.

```ts
export function lazyImport<T extends Record<K, React.ComponentType<P>>, K extends keyof T, P = React.ComponentProps<T[K]>>(
  factory: () => Promise<T>,
  name: K,
) {
  return lazy(() => factory().then((module) => ({ default: module[name] })));
}
```

### Usage

```ts
const LazyPage = lazyImport(() => import('./pages'), 'Dashboard');
// T = module type, K = 'Dashboard', P = inferred props of Dashboard
```

### Key TypeScript concepts

- `T extends Record<K, ComponentType<P>>` — `T` depends on `K`
- `K extends keyof T` — `K` depends on `T` (circular constraint)
- `P = React.ComponentProps<T[K]>` — `P` is a **conditional default**, inferred automatically
- Solves React `lazy()` limitation (default exports only) with full type safety for **named** exports

---

## 12. Functor-like `transform` on Generic Classes

> **Concept:** A method that maps the inner type while preserving the container structure.

```ts
export class Paginatable<T> {
  items: T[];
  paginationQuery: PaginationQueryDto;
  totalItems: number;

  transform<U>(mapper: (item: T) => U): Paginatable<U> {
    const transformedItems = this.items.map(mapper);
    return new Paginatable<U>(transformedItems, this.totalItems, this.paginationQuery);
  }
}
```

### Key TypeScript concepts

- `<U>` is a **method-level generic**, independent from the class's `<T>`
- This is a **Functor pattern** — maps inner type while preserving the wrapper
- Analogous to `Array.map`, `Promise.then`, or Rust's `Option::map`
- Enables chaining: `page.transform(toDto).transform(addMetadata)`

---

## 13. `ReturnType<typeof fn>` for Derived Types

> **Concept:** Extracting types from function implementations so they're always in sync.

```ts
export function setupStore(preloadedState?: Partial<AppState>) {
  return configureStore({ reducer: rootReducer, preloadedState });
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppState = ReturnType<typeof rootReducer>;
```

### Key TypeScript concepts

- `typeof` captures the function's type signature
- `ReturnType` extracts the return type from that signature
- Types are **derived from implementation** — never manually declared, always in sync
- This is the **Redux Toolkit recommended pattern** for store typing

---

## 14. Mapped Types for Exhaustive Records

> **Concept:** Using mapped types over unions to ensure every member has an entry.

```ts
export type MessagesMap = {
  [key in LanguageType]: Messages;
};
```

### Key TypeScript concepts

- `[key in UnionType]` iterates over every member of the union
- If `LanguageType` is `'en' | 'de' | 'fr'`, the result is `{ en: Messages; de: Messages; fr: Messages }`
- **Missing a key is a compile error** — ensures exhaustive coverage
- Different from `Record<LanguageType, Messages>` in readability, but equivalent in effect

---

## 15. NestJS Decorator Composition

> **Concept:** Composing multiple decorators into a single reusable decorator.

```ts
export type ResourceExtractor = (context: ExecutionContext) => string[];

export interface PermissionRequiredOptions {
  right: RightType;
  resourceExtractors?: ResourceExtractor[];
}

export const PermissionRequired = (options: PermissionRequiredOptions) => {
  return applyDecorators(
    SetMetadata(PERMISSION_REQUIRED, options),
    ApiOperation({ description: `**Required Right:** \`${options.right}\`` }),
    ApiResponse({ status: 403, description: `Forbidden: User lacks \`${options.right}\`` }),
  );
};
```

### Usage in controllers

```ts
@PermissionRequired({ right: Right.CSP_READ, resourceExtractors: [extractVehicleClassCodeFromParam] })
```

### Key TypeScript concepts

- `applyDecorators` merges multiple decorators into **one** annotation
- `ResourceExtractor` is a **function type alias** — used as a strategy pattern
- Template literals dynamically embed the right name into Swagger documentation
- Single decorator applies metadata, API docs, and error response docs simultaneously

---

## 16. Type-Safe Parameter Decorators

> **Concept:** Custom NestJS parameter decorators with generic return types.

```ts
export const CurrentUser = createParamDecorator<User>((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  return request.user;
});

export const CurrentUserId = createParamDecorator<string>((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  return request.user?.id;
});
```

### Key TypeScript concepts

- `createParamDecorator<User>` — the generic specifies the **return type**, ensuring controllers get proper inference
- `getRequest<Request>()` — inline generic to type the HTTP request
- Clean dependency injection for HTTP request data — controllers just use `@CurrentUser()`

---

## 17. Context + Narrowing Hook (React)

> **Concept:** A hook that narrows a nullable context to a defined type via a runtime check.

```ts
export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function useNotification(): NotificationContextType {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context; // TypeScript narrows: NotificationContextType (not undefined)
}
```

### Key TypeScript concepts

- Context starts as `T | undefined` (safe default)
- The `throw` acts as a **type guard by exception** — after it, TypeScript knows the value is defined
- Standard "safe context hook" pattern — context is nullable, the hook ensures it's not
- Provides both runtime safety (error message) and compile-time safety (narrowing)

---

## 18. Abstract Entity Hierarchy with Utility Types

> **Concept:** Abstract classes for DRY entity definitions with utility types for creation DTOs.

```ts
export abstract class StaticEntity {
  id!: string;
  createdAt!: Date;
  createdBy!: string;
}

export abstract class MutableEntity extends StaticEntity {
  @VersionColumn({ name: 'version' })
  version!: number;

  @BeforeUpdate()
  beforeUpdate() {
    /* optimistic locking logic */
  }

  @AfterUpdate()
  afterUpdate() {
    /* version mismatch check */
  }
}

export type LocalMutableEntity<T> = Omit<T, 'version' | 'beforeUpdate' | 'afterUpdate' | 'id' | 'createdAt' | 'updatedAt'>;
```

### Key TypeScript concepts

- **Abstract class hierarchy** — `StaticEntity` for immutable records, `MutableEntity` adds update tracking
- `LocalMutableEntity<T>` strips DB-managed fields to create a **creation DTO type** from any entity
- Combines OOP inheritance with utility-type-based type derivation
- `Reflect.defineMetadata` — runtime reflection for cross-hook communication

---

## 19. `OmitType` with `as const` Tuples (NestJS DTOs)

> **Concept:** NestJS utility that generates a new class minus specified properties, preserving Swagger metadata.

```ts
export class MessageReferenceDto extends OmitType(MessageDto, ['message'] as const) {
  // Inherits all MessageDto properties except 'message'
}
```

### Key TypeScript concepts

- `OmitType` is the **class-based** equivalent of the `Omit` utility type
- `['message'] as const` ensures the array is typed as `readonly ['message']` — not `string[]`
- The `as const` gives `OmitType` the exact keys to strip — without it, no properties would be omitted
- Works with Swagger metadata — the generated class retains API documentation for remaining fields

---

## 📊 Pattern Frequency Summary

| Pattern                                                        | Occurrences | Core Concept                     |
| -------------------------------------------------------------- | ----------- | -------------------------------- |
| `as const` + indexed access enum                               | **7+**      | Literal types, `typeof`, `keyof` |
| Utility type composition (`Pick`, `Omit`, `Partial`, `Record`) | **20+**     | Built-in utility types           |
| Generic functions/classes with constraints                     | **5+**      | `extends`, default type params   |
| `ReturnType<typeof fn>`                                        | **3+**      | Type inference from values       |
| Decorator composition                                          | **3**       | Higher-order functions, metadata |
| Template literal types                                         | **1**       | Compile-time string validation   |
| Global type augmentation                                       | **1**       | Declaration merging              |
| `Exclude` for narrowing                                        | **3**       | Conditional utility types        |

---

## 🧭 Recommended Learning Path

1. **Start with:** `as const` enums (#1, #2) — the most impactful daily-use pattern
2. **Then learn:** Utility types (#7, #8, #10) — `Omit`, `Pick`, `Exclude`, `Partial`
3. **Level up:** Generics (#4, #6, #12) — constraints, defaults, method-level generics
4. **Go deep:** Type guards (#5), template literals (#9), declaration merging (#3)
5. **Expert mode:** Triple-constrained generics (#11), derived types (#13), mapped types (#14)

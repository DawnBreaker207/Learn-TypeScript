# Core Types

| Core name |        Example        |                                  Concept                                   |
| :-------: | :-------------------: | :------------------------------------------------------------------------: |
|  Number   |    `1, 5.3, -10 `     |        : All number, no differentiation between integers or floats         |
|  String   | `` "Hi", 'Hi',`HI` `` |                              All text values                               |
|  Boolean  |    `true, false `     |           only "true" and "false", no "truthy" or "falsy" values           |
|  Object   |     `{age: 30} `      |      Any JS object, more specific types (type of object) are possible      |
|   Array   |      `[1,2,3]  `      | Any JS array, type can be flexible or strict (regarding the element types) |
|   Tuple   |        `[1,2]`        |        Added by TS: Fixed-length and type of each element in array         |
|   Enum    |  `enum {NEW, OLD} `   |     Added by TS: Automatically enumerated global constant identifiers      |
|    Any    |          \*           |               Any kind of value, no specific type assignment               |

---

### Type Inference: To understand which type in a certain variable

### Union Type: the types can allowed to be two or more possible types

- Ex:

```typescript
demo: number | string;
```

### Literal Type: the types based on core types but have a specific version of the type

- Ex:

```typescript
demo: 'as-number | as-text
```

### Type Aliases: Create a alias name for any types

- Ex:

```typescript
type Combinable = number;
type Combinable = number | string;
type Combinable = 'as-number' | 'as-text';
```

#### Return Void: a functions not return statement, not return anything

- Ex:

```typescript
const num: number = 12;
function printResult(num: number) {
  console.log(`Result:` + num);
}
```

#### Functions Types:

- The types that describe a function regarding the parameters and the return value
- Allow to describe which type of function specifically to use some where

- Ex:

```typescript
let combineValues: (a: number, b: number) => number;
```

- Callback Types
- Never Types
- Void Types
- Undefined Types

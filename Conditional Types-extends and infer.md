
# extends
## 示例
```
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}

let c = createLabel(Math.random() ? "hello" : 42);//let c: NameLabel | IdLabel
```
## 交集
```
/*the built-in `Extract` and `Exclude` utility types in TypeScript
**https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttype-union
*/
type Extract<T, U> = T extends U ? T : never
type T0 = Extract<"a" | "b" | "c", "a" | "f">;//type T0 = "a"
```
## 差集

```
//https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion
type Exclude<T, U> = T extends U ? never : T
type T0 = Exclude<"a" | "b" | "c", "a">;//type T0 = "b" | "c"
```
[https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types](url)
> When conditional types act on a generic type, they become *distributive* when given a union type

Exclude<'a' | 'b' | 'c', 'a'> 会被拆分为 'a' extends 'a'、'b' extends 'a'、'c' extends 'a'
#### Avoid distributivity

```
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;//type StrArrOrNumArr = (string | number)[]
```

```
type ToArrayNonDist<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArrayNonDist<string | number>;//type StrArrOrNumArr = string[] | number[]
```
# infer
```
type R = { a: number }

type MyType<T> = T extends infer R ? R : never; // infer R from T
type MyType2<T> = T extends R ? R : never; // compare T with R

type T1 = MyType<{b: string}> // T1 is { b: string; }
type T2 = MyType2<{b: string}> // T2 is never
```

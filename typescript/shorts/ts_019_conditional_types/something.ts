// title: Unlock advanced TypeScript with Conditional Types!
// file name: conditional_types.ts

// --- BAD CODE ---
// description:
// Without conditional types, if you want to get the type of elements inside
// an array, you have to do it manually. This pattern isn't reusable for
// different kinds of "wrapped" types (like Promises, Observables, etc.).

type ManualUnwrap = string[] | number[];
// To get the inner type, you have to manually specify it again.
type ElementType = string | number;

function processElementBad(
  element: ElementType,
) {
  console.log(
    `[Bad] Processing element: ${element}`,
  );
}

// --- GOOD CODE ---
// description:
// A conditional type acts like a ternary operator for your types.
// We can combine it with the `infer` keyword to "extract" a type from within
// another type, creating a powerful and reusable utility.

// This says: "If T is an array of some type U, then the type is U. Otherwise, the type is just T."
type Unwrap<T> = T extends (infer U)[]
  ? U
  : T;

// We can now create a generic function that works on the "unwrapped" type.
function processElementGood<T>(
  wrappedValue: T,
) {
  // `Unwrap<T>` will be `string` if T is `string[]`, `number` if T is `number[]`, etc.
  const element: Unwrap<T> =
    Array.isArray(wrappedValue)
      ? wrappedValue[0]
      : wrappedValue;
  console.log(
    `[Good] Processing element: ${element}`,
  );
}

console.log(
  '--- Processing an array of strings ---',
);
const stringArray = ['hello', 'world'];
processElementBad(stringArray[0]);
processElementGood(stringArray); // Type of `element` inside is correctly inferred as `string`

console.log(
  '\n--- Processing an array of numbers ---',
);
const numberArray = [10, 20];
processElementBad(numberArray[0]);
processElementGood(numberArray); // Type of `element` inside is correctly inferred as `number`

console.log(
  '\n--- Processing a non-array value ---',
);
const singleValue = true;
// processElementBad(singleValue); // This would be a compile-time error.
processElementGood(singleValue); // Type of `element` inside is correctly inferred as `boolean`

// title: Stop using `string` for object keys in TypeScript! Use this powerful operator.
// file name: keyof_operator.ts

// --- BAD CODE ---
// description:
// Using `string` as the type for a key is too broad. It allows you to call
// the function with a key that doesn't exist on the object, leading to
// `undefined` values and potential runtime errors. TypeScript can't help you.

function getPropertyBad(
  obj: object,
  key: string,
) {
  // The `any` cast is often a symptom of this problem.
  return (obj as any)[key];
}

// --- GOOD CODE ---
// description:
// The `keyof` operator creates a union type of all the keys of an object.
// By using `<T extends object>` and `K extends keyof T`, we create a generic
// function that knows the relationship between the object and its keys.
// This provides full type safety.

function getPropertyGood<
  T extends object,
  K extends keyof T,
>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: 'Alice',
  age: 30,
};

console.log('--- Bad Example ---');
// This works, but it's not safe.
console.log(
  `Name: ${getPropertyBad(user, 'name')}`,
);
// This will compile but return `undefined` at runtime. No error from TypeScript!
console.log(
  `Location: ${getPropertyBad(user, 'location')}`,
);

console.log('\n--- Good Example ---');
// This works and is fully type-safe.
console.log(
  `Name: ${getPropertyGood(user, 'name')}`,
);

// This line will now cause a COMPILE-TIME ERROR, which is what we want!
// getPropertyGood(user, "location");
// Argument of type '"location"' is not assignable to parameter of type '"name" | "age"'.

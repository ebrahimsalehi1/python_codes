// title: Write cleaner functions in TypeScript with overloads!
// file name: function_overloads.ts

// --- BAD CODE ---
// description:
// Using a single function signature with union types for both parameters and
// the return value is not ideal. The caller has to perform a type check on
// the result because TypeScript doesn't know which combination was used.

function combineBad(
  a: string | number,
  b: string | number,
): string | number {
  if (
    typeof a === 'number' &&
    typeof b === 'number'
  ) {
    return a + b; // Addition
  }
  return String(a) + String(b); // Concatenation
}

// --- GOOD CODE ---
// description:
// Function overloads provide multiple, specific signatures for a single function.
// TypeScript checks which overload is being called and provides the correct
// return type, giving the caller a much better and safer experience.

// Overload Signature 1: for two numbers
function combineGood(
  a: number,
  b: number,
): number;
// Overload Signature 2: for two strings
function combineGood(
  a: string,
  b: string,
): string;
// The actual implementation with a compatible, but safer, signature using `unknown`
function combineGood(
  a: unknown,
  b: unknown,
): unknown {
  // Because `a` and `b` are `unknown`, we MUST check their types before using them.
  if (
    typeof a === 'number' &&
    typeof b === 'number'
  ) {
    return a + b;
  }
  // We can be confident that if they aren't both numbers, they must be strings
  // based on our overload signatures.
  return String(a) + String(b);
}

console.log('--- Bad Example ---');
const resultBad = combineBad(5, 10);
// We can't call number-specific methods without a type check,
// because TypeScript only knows the result is `string | number`.
// resultBad.toFixed(2); // This would be a compile-time error.
console.log(
  `Result from combineBad(5, 10): ${resultBad}`,
);

console.log('\n--- Good Example ---');
const resultGood = combineGood(5, 10);
// This works perfectly! TypeScript knows `resultGood` is a `number`
// because we called the first overload signature.
console.log(
  `Result from combineGood(5, 10): ${resultGood.toFixed(2)}`,
);

const stringResult = combineGood(
  'hello',
  ' world',
);
// And here, it knows the result is a `string`.
console.log(
  `Result from combineGood("hello", " world"): ${stringResult.toUpperCase()}`,
);

// TypeScript also protects us from invalid combinations:
// combineGood(5, "hello"); // This would be a compile-time error.

// title: Your strings are not safe! Fix them with Template Literal Types.
// file name: template_literal_types.ts

// --- BAD CODE ---
// description:
// Using a generic `string` for event names is risky. A simple typo like
// 'user_create' instead of 'user:create' will go unnoticed by the compiler
// and lead to a bug that's hard to track down at runtime.

function onBad(
  eventName: string,
  callback: () => void,
) {
  console.log(
    `[Bad] Subscribed to event: ${eventName}`,
  );
  // In a real app, you'd store the callback here.
}

// --- GOOD CODE ---
// description:
// Template literal types let you build specific string patterns. TypeScript
// will validate that any variable with this type matches the pattern exactly.
// It combines union types to create a matrix of all possible valid strings.

type Domain =
  | 'user'
  | 'product'
  | 'order';
type Action =
  | 'create'
  | 'update'
  | 'delete';

// This creates a union of all possible combinations, e.g.,
// "user:create", "user:update", "product:delete", etc.
type EventName = `${Domain}:${Action}`;

function onGood(
  eventName: EventName,
  callback: () => void,
) {
  console.log(
    `[Good] Subscribed to event: ${eventName}`,
  );
  // ...
}

console.log('--- Bad Example ---');
// This works...
onBad('user:create', () => {});
// But so does this typo, which is a bug waiting to happen.
onBad('user_create', () => {});

console.log('\n--- Good Example ---');
// This works and is fully type-safe.
onGood('user:create', () => {});
onGood('product:delete', () => {});

// This line will now cause a COMPILE-TIME ERROR, which is what we want!
// onGood('user:add', () => {});
// Argument of type '"user:add"' is not assignable to parameter of type 'EventName'.

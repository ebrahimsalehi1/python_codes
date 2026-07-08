// Slide 1

// How can we use constants in TypeScript?

const a = 5;
// a = 6; // ❌ Error
// Cannot assign to 'a'
// because it is a constant.

// Slide 2 ...................

// What happens if you have an array?

const arr1 = [0, 1];
arr1 = [0, 1, 2]; // ❌ Error
// Assignment to constant variable.

arr1[2] = 2; // ✅ Correct 🫪
// You can add an item to the array.
// But you cannot assign a new array to arr1.

// Slide 3

// What happens if you have an object?

const obj1 = { att1: 100 };
obj1 = { att1: 200 }; // ❌ Error
// Cannot assign to 'obj1' because it is a constant.

obj1.att1 = 200; // ✅ Correct 🫪

// Slide 4

// There is a solution.
// Just use `as const`.

const arr2 = [0, 1] as const;
arr2[2] = 2; // ❌ Error
// Tuple type 'readonly [0, 1]' of length '2'
// has no element at index '2'.

// Slide 5

const obj2 = { att1: 100 } as const;
obj2.att1 = 200; // ❌ Error
// Cannot assign to 'att1'
// because it is a read-only property.

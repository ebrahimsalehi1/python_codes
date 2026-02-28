// title: This new TypeScript operator will change how you write objects!
// file name: satisfies_operator.ts

// A general type for a user profile.
// Properties can be a string or a number.
type UserProfile = Record<
  string,
  string | number | string[]
>;

// --- BAD CODE (The "Old Way") ---
// description:
// When we type an object directly, we lose the specific types of its properties.
// TypeScript now only knows that `userBad.name` is `string | number`, not that it's a `string`.
// This prevents us from using type-specific methods like `.toUpperCase()`.

const userBad: UserProfile = {
  name: 'Alice',
  age: 30,
  interests: ['coding', 'music'],
};

// This causes a COMPILE-TIME ERROR because TypeScript only knows `userBad.name`
// is `string | number`, and numbers don't have `.toUpperCase()`.
// userBad.name.toUpperCase();

// --- GOOD CODE (Using `satisfies`) ---
// description:
// The `satisfies` operator lets us validate that an object matches a type
// *without* changing the inferred type of the object itself. We get the best
// of both worlds: validation and specific types.

const userGood = {
  name: 'Alice',
  age: 30,
  interests: ['coding', 'music'],
} satisfies UserProfile;

// This works perfectly! TypeScript knows `userGood.name` is a `string`.
const upperCaseName =
  userGood.name.toUpperCase();

// And we still get an error if we violate the `UserProfile` type, for example:
const userInvalid = {
  name: 'Bob',
  // age: "twenty" // This would correctly cause a compile-time error.
} satisfies UserProfile;

console.log('--- Good Example ---');
console.log(
  `Username in uppercase: ${upperCaseName}`,
);
console.log(
  `User's age: ${userGood.age}`,
);

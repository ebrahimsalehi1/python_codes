// title: Stop copying types in TypeScript! Use Mapped Types instead.
// file name: mapped_types.ts

// An interface where all properties are read-only.
interface ReadonlyUser {
  readonly id: number;
  readonly name: string;
  readonly email: string;
}

// --- BAD CODE ---
// description:
// To create a mutable version of `ReadonlyUser`, we have to manually copy all
// the properties. If we add a new property to `ReadonlyUser` (e.g., `age`),
// we have to remember to add it here too. This is error-prone.

interface MutableUserBad {
  id: number;
  name: string;
  email: string;
}

function updateUserBad(
  user: MutableUserBad,
) {
  user.name = 'Alice Smith';
  console.log(
    '[Bad] Updated user:',
    user,
  );
}

// --- GOOD CODE ---
// description:
// A mapped type lets us programmatically create a new type from an existing one.
// Here, we create a generic `Mutable<T>` utility type.
// `-readonly` removes the readonly modifier from each property.
// `[P in keyof T]` iterates over every key `P` in the type `T`.
// `T[P]` gets the type of the property for that key.

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// Now we can create a mutable user type without duplicating anything.
type MutableUserGood =
  Mutable<ReadonlyUser>;

function updateUserGood(
  user: MutableUserGood,
) {
  user.name = 'Bob Brown';
  console.log(
    '[Good] Updated user:',
    user,
  );
}

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: 'Initial Name',
  email: 'test@example.com',
};

// We can't modify the original object.
// readonlyUser.name = "New Name"; // This would be a compile-time error.

console.log(
  '--- Calling both functions ---',
);

// To use our functions, we need to create mutable copies.
const userForBadUpdate: MutableUserBad = {
  ...readonlyUser,
};
updateUserBad(userForBadUpdate);

const userForGoodUpdate: MutableUserGood =
  { ...readonlyUser };
updateUserGood(userForGoodUpdate);

// The "Good" approach is far more maintainable. If `ReadonlyUser` changes,
// `MutableUserGood` automatically updates with it.

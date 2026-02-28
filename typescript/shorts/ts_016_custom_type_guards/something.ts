// title: Level up your TypeScript with custom type guards!
// file name: custom_type_guards.ts

interface User {
  type: 'user';
  name: string;
  email: string;
}

interface Admin {
  type: 'admin';
  role: string;
}

type Person = User | Admin;

// --- BAD CODE ---
// description:
// When dealing with complex objects (e.g., from an API), just using `as` is a gamble.
// You're telling TypeScript, "I swear this object has a `name` property," but if you're
// wrong, your code will crash when it tries to access it.

function processPersonBad(
  person: Person,
) {
  // This is unsafe. If the person is an Admin, it doesn't have a `name`.
  // The code will compile but crash at runtime.
  console.log(
    `[Bad] Welcome, ${(person as User).name.toUpperCase()}`,
  );
}

// --- GOOD CODE ---
// description:
// A custom type guard is a function that returns a special boolean: `value is Type`.
// If the function returns true, TypeScript narrows the variable's type to `Type`
// inside any conditional block, giving you full type safety.

function isUser(
  person: Person,
): person is User {
  return person.type === 'user';
}

function processPersonGood(
  person: Person,
) {
  // We use our custom type guard here.
  if (isUser(person)) {
    // Inside this block, TypeScript KNOWS `person` is a `User`.
    // Accessing `.name` is 100% safe.
    console.log(
      `[Good] Welcome, ${person.name.toUpperCase()}`,
    );
  } else {
    // And here, it knows `person` must be an `Admin`.
    console.log(
      `[Good] Welcome, Admin with role: ${person.role}`,
    );
  }
}

const user: Person = {
  type: 'user',
  name: 'Alice',
  email: 'alice@example.com',
};
const admin: Person = {
  type: 'admin',
  role: 'super-admin',
};

console.log('--- Processing a User ---');
processPersonBad(user); // Works, but by luck.
processPersonGood(user); // Works safely.

console.log(
  '\n--- Processing an Admin ---',
);
// This will CRASH at runtime with a TypeError: Cannot read properties of undefined (reading 'toUpperCase').
// processPersonBad(admin);
processPersonGood(admin); // Works safely and correctly.

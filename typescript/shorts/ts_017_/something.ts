// title: Stop duplicating types in TypeScript! Use this trick instead.
// file name: indexed_access_types.ts

// The main interface for a User
interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}

// --- BAD CODE ---
// description:
// Here, we manually create a separate `Address` type. If we ever add a `country`
// property to `User['address']`, we have to remember to update this `Address`
// type as well. If we forget, the types will be out of sync, leading to bugs.

interface AddressBad {
  street: string;
  city: string;
  zipCode: string;
}

function printAddressBad(
  address: AddressBad,
) {
  console.log(
    `[Bad] ${address.street}, ${address.city}, ${address.zipCode}`,
  );
}

// --- GOOD CODE ---
// description:
// An indexed access type lets us look up the type of a property on another type.
// `User['address']` creates a new type that is dynamically linked to the shape
// of the `address` property on the `User` interface. If `User['address']` changes,
// this type automatically updates.

type AddressGood = User['address'];

function printAddressGood(
  address: AddressGood,
) {
  console.log(
    `[Good] ${address.street}, ${address.city}, ${address.zipCode}`,
  );
}

const user: User = {
  id: 1,
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    zipCode: '12345',
  },
};

console.log(
  '--- Calling both functions ---',
);

// Both functions work correctly with the user's address.
printAddressBad(user.address);
printAddressGood(user.address);

// The key benefit is maintainability. The "Good" approach ensures that
// the `AddressGood` type can never be out of sync with the `User` interface.

// Stop using { [key: string]: any } in TypeScript! Use Record instead.

type UserMap = Record<number, string>;

const users: UserMap = {
  1: 'Ebrahim',
  2: 'Arash',
  //   3: 100,
  // ❌ Error: value must be string
};

console.log(users[1]);

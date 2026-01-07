type UserMap = Record<number, string>;

const users: UserMap = {
  1: 'Ebrahim',
  2: 'Arash',
  //   3: 100,
  // ❌ Error: value must be string
};

console.log(users[1]);

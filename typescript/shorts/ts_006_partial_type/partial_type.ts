interface User {
  id: number;
  name: string;
  email: string;
}

// ✅ All properties are optional
const update: Partial<User> = {
  name: 'Ebrahim',
};

console.log(update);

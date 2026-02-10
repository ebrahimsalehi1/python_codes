// ❌ Don't use delete - loses type safety
const user = { name: 'John', age: 30 };
// delete user.age; // Still typed as { name: string; age: number }

// ✅ Use destructuring with omit pattern
const { age, ...userWithoutAge } = user;
// Type: { name: string }

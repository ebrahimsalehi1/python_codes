// ❌ Risky type assertions
// const data = JSON.parse(input) as User; // No validation!

// ✅ Use type guards with validation
// function isUser(
//   obj: unknown,
// ): obj is User {
//   return (
//     typeof obj === 'object' &&
//     obj !== null &&
//     'name' in obj
//   );
// }

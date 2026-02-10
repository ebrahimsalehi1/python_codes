// ❌ Dangerous - runtime errors
// const user = users.find(
//   (u) => u.id === 5,
// )!;
// user.name; // Might crash if not found

// ✅ Handle null explicitly
// const user = users.find(
//   (u) => u.id === 5,
// );
// if (!user) throw new Error('Not found');
// user.name; // Type-safe

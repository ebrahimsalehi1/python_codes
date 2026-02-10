// ❌ Bad: 0 and '' are falsy
// const count = userInput || 10; // 0 becomes 10!

// ✅ Use nullish coalescing
// const count = userInput ?? 10; // Only null/undefined → 10

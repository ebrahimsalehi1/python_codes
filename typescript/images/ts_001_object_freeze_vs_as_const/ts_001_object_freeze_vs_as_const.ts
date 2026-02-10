// Object.freeze() -
// Prevents modification at runtime (JavaScript)
const a = {
  a1: 1,
};

Object.freeze(a);

// ❌ Runtime Error (in strict mode):
// Cannot assign to read only property 'a1'
a.a1++;

// as const - TypeScript compile-time type safety ✅
const b = {
  b1: 1,
} as const;

// ❌ Compile time: Cannot assign to 'b1'
//    because it is a read-only property
// b.b1++;

// Comparing immutability approaches:
// 1. Object.freeze() → Runtime protection
// 2. as const → Compile-time type safety (recommended for TypeScript)

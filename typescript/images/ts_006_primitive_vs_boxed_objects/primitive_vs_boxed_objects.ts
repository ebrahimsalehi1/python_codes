// ❌ Don't use Number, String, Boolean as types
// Boxed objects are rarely used correctly.
type ProductWrong = {
  id: Number;
  name: String;
  hasSent: Boolean;
};

// ✅ Use lowercase primitives instead
// Cleaner, more precise, and what you actually want
type Product = {
  id: number;
  name: string;
  hasSent: boolean;
};

// Example - the difference matters:
const product: Product = {
  id: 123, // ✅ Works
  name: 'Widget', // ✅ Works
  hasSent: false, // ✅ Works
};

// This would be awkward with Number/String/Boolean:
// const wrong: ProductWrong = {
//   id: new Number(123),     // 😱 Who does this?
//   name: new String('Widget'),
//   hasSent: new Boolean(false),
// };

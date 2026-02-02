const items = ['zero', 'one', 'two'];
// ❌ The Messy Way (no type safety)
function getFirstAny(
  items: any[],
): any | undefined {
  return items[0];
}
console.log(getFirstAny(items));

// ✅ The Clean Way (Using Generics)
function getFirst<T>(
  items: T[],
): T | undefined {
  return items[0];
}
console.log(getFirst<string>(items));

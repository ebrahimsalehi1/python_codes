// Math.max/min take separate numbers.
Math.max(12, 1, 0, 21, 5); // 21
Math.min(12, 1, 0, 21, 5); // 0

// What if values are in an array?
const list = [12, 1, 0, 21, 5];

// Math.max/min can't take array directly.
// Math.max(list); // ❌ wrong: one array arg
// Math.min(list); // ❌ wrong: one array arg

// ✅ Use `...` to spread array values.
Math.max(...list); // 21
Math.min(...list); // 0

// Rest params accept many numbers.

function getMax(
  ...values: number[] // rest parameter
): number {
  return Math.max(...values);
}

function getMin(
  ...values: number[] // rest parameter
): number {
  return Math.min(...values);
}

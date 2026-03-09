// Title: Stop Rebuilding OrderedDict in TypeScript

// Ordered map example in TypeScript.
// Implements moveToEnd to preserve and
// update key order.
// Implements popFirst to remove the
// first inserted entry.
// Useful for ordered caching patterns
//  (like LRU behavior).
// Use Map when insertion order matters.

const ordered = new Map<string, number>([
  ['a', 1],
  ['b', 0],
  ['c', 3],
]);

function moveToEnd<K, V>(
  m: Map<K, V>,
  key: K,
): void {
  if (!m.has(key)) {
    return;
  }
  const value = m.get(key) as V;
  m.delete(key);
  m.set(key, value);
}

function popFirst<K, V>(
  m: Map<K, V>,
): [K, V] | undefined {
  const firstItem = m.keys().next();
  if (firstItem.done) return undefined;
  const first = firstItem.value;
  const value = m.get(first)!;
  m.delete(first);
  return [first, value];
}

console.log(
  'Initial:',
  Array.from(ordered.entries()),
);
moveToEnd(ordered, 'b');
console.log(
  'After moveToEnd(b):',
  Array.from(ordered.entries()),
);

const result = popFirst(ordered);
console.log('popFirst:', result);

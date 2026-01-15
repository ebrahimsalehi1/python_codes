import { expect, it } from 'vitest';

const add = (x: number, y: number) =>
  x + y;

// You can use either it or test.
it('should add two numbers', () => {
  expect(add(10, 20)).toBe(30);
});

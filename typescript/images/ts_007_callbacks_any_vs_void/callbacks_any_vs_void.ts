// ❌ Don't use 'any' for callback returns you ignore
function fnBad(callback: () => any) {
  callback();
}

// ✅ Use 'void' for ignored callback returns
function fnGood(callback: () => void) {
  callback();
}

// Why? void prevents accidental misuse:
function example(callback: () => void) {
  const result = callback();
  // result.doSomething(); // ✅ Error caught!
}

// With 'any', this bug goes unnoticed:
function exampleBad(callback: () => any) {
  const result = callback();
  // result.doSomething(); // ❌ No error - runtime crash!
}

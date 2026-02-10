// ❌ Bad: using any
function printLengthAny(value: any) {
  return value.length;
}
// ✅ Better: using proper type
function printLengthString(
  value: string,
) {
  return value.length;
}
// ✅ Safer: using unknown
function printLengthUnknown(
  value: unknown,
) {
  if (typeof value === 'string') {
    return value.length;
  }
  return 0;
}

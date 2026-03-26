// ❌ Bad Code
function getPropertyBad(
  obj: object,
  key: string,
) {
  return (obj as any)[key];
}
// ✅ Clean Code
function getPropertyGood<
  T extends object,
  K extends keyof T,
>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = {
  name: 'Ebrahim',
};
// this will return undefined
// because location is not exists
console.log(
  getPropertyBad(user, 'location'),
);
// Error: location is not assignable
// to parameter of type "name"
console.log(
  getPropertyGood(user, 'location'),
);

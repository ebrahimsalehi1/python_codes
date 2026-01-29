type Product = { name: string };
function isProduct(
  value: unknown,
): boolean {
  return (
    value !== null &&
    typeof value === 'object' &&
    'name' in value &&
    typeof (value as { name: unknown })
      .name === 'string'
  );
}
function isProductGuard(
  value: unknown,
): value is Product {
  return (
    value !== null &&
    typeof value === 'object' &&
    'name' in value &&
    typeof (value as { name: unknown })
      .name === 'string'
  );
}

const data: unknown = JSON.parse(
  '{"name":"ebrahim"}',
);

if (isProductGuard(data)) {
  console.log(data.name);
}

// Stop Using any in TypeScript

type User = { name: string };

function isUser(
  value: unknown,
): value is User {
  return (
    value !== null &&
    typeof value === 'object' &&
    'name' in value &&
    typeof value.name === 'string'
  );
}

const data: unknown = JSON.parse(
  '{"name":"ebrahim"}',
);

if (isUser(data)) {
  console.log(data.name);
}

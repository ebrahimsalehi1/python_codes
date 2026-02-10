// ❌ Don't use enum
// Enums generate extra runtime code, increasing bundle size
enum StatusEnum {
  CREATED = 'created',
  DELETED = 'deleted',
  APPROVED = 'approved',
}

// ✅ Use const object with as const instead
// Tree-shakable, no runtime code, same type safety
const Status = {
  CREATED: 'created',
  DELETED: 'deleted',
  APPROVED: 'approved',
} as const;
type Status =
  (typeof Status)[keyof typeof Status];

// Usage example - both are type-safe
function handleStatus(status: Status) {
  console.log(`Processing: ${status}`);
}

handleStatus(Status.CREATED); // ✅ Works
// handleStatus('invalid');   // ❌ Type error

console.log(Status);

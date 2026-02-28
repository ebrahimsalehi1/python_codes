// Tired of runtime errors? 🤔 Use TypeScript Type Guards! 
// #LearnToCode #TypeScriptTips #Developer

// Type guards are a powerful feature in
// TypeScript that allow you to narrow down
// the type of an object within a conditional block.
// This is particularly useful when dealing with
// values of type 'unknown' or 'any', ensuring type safety
// before accessing properties of the object.
type Response = {
  status: number;
  message?: string;
};

// This is a custom type guard. It checks
// if an unknown value is a Response object.
function isResponse(
  value: unknown,
): value is Response {
  return (
    typeof value === 'object' &&
    value !== null &&
    'status' in value &&
    typeof (value as Response).status ===
      'number'
  );
}

function getResponseMessage(
  response: unknown,
): string | undefined {
  if (isResponse(response)) {
    return response.message;
  }
  return undefined;
}

console.log(
  getResponseMessage({ status: 200 }),
);
console.log(
  getResponseMessage({
    status: 401,
    message: 'Missing Authentication',
  }),
);
console.log(getResponseMessage({}));
console.log(
  getResponseMessage('not a response'),
);

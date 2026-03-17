// Title: Stop writing long if/else in TypeScript
// Header Title: Long if/else vs Object Map
// Footer Title: Cleaner, shorter, easier to scale

let statusCode = 900;
let message;

// ❌ Bad Code
if (statusCode === 200) {
  message = 'OK';
} else if (statusCode === 404) {
  message = 'Not Found';
} else {
  message = 'Unknown';
}

// ✅ Clean Code
const messages: Record<number, string> = {
  200: 'OK',
  404: 'Not Found',
};
message =
  messages[statusCode] ?? 'Unknown';

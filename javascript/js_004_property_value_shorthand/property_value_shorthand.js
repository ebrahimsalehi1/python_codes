// TITLE:
// Stop repeating yourself! 🔁
// Use Property Shorthand in JavaScript.

const userName = "Ebrahim";

// ❌ Bad Code
const user1 = {
  userName: userName,
};

// ✅ Good Code
const user2 = {
  userName,
};

console.log(user1, user2);

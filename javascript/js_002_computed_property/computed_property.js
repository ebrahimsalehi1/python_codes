// Title:
// Stop adding properties manually! 🛑
// Use Computed Property Names.
function getKey(key) {
  return `key is ${key}`;
}

// ❌ Bad
const user1 = {
  id: 1,
  name: "Ebrahim",
};
user1[getKey("isEnabled")] = true;

// ✅ Good
const user2 = {
  id: 1,
  name: "Ebrahim",
  [getKey("isEnabled")]: true,
};

console.log(JSON.stringify(user1) == JSON.stringify(user2));

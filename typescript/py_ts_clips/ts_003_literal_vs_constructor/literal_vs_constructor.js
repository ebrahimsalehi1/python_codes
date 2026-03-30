// ❌ Bad
const user1 = new Object();
user1.name = 'Ebrahim';

// ✅ Good
const user2 = { name: 'Ebrahim' };

console.log(user1, user2);

// ❌ Avoid numeric enums in TypeScript:
// They generate extra code (bigger bundle),
// and they offer weak type safety because
// numeric enums are just numbers
// (User=0, Admin=1, SuperAdmin=2)
/*enum Role {
  User,
  Admin,
  SuperAdmin,
}

function deleteUser(role: Role) {
  if (role === 1) {
    console.log('User deleted');
  }
}

// ⚠️ Passing a raw number compiles 
//    without error — no type safety!
deleteUser(1); // 😬 No error!
*/

// ✅ Use a union type of string literals !!!
// Only exact string values are accepted
type Role =
  | 'User'
  | 'Admin'
  | 'SuperAdmin';

// Now the parameter only accepts
// 'User', 'Admin', or 'SuperAdmin'
// Comparing with a string is cleaner
function deleteUser(role: Role) {
  if (role === 'Admin') {
    console.log('User deleted');
  }
}
// ✅ safe: 'Admin' is a valid Role
deleteUser('Admin');
// ❌ compile error
// 'Hacker' is not a valid Role
deleteUser('Hacker');

var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
function deleteUser(role) {
    if (role === 1) {
        console.log('User deleted');
    }
}
deleteUser(Role.User); // 😬 works?!
// type Role =
//   | 'User'
//   | 'Admin'
//   | 'SuperAdmin';
// function deleteUser(role: Role) {
//   if (role === 'Admin') {
//     console.log('User deleted');
//   }
// }
// deleteUser('Admin'); // ✅ safe
// deleteUser('Hacker'); // ❌ error

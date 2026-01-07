interface User {
  name: string;
}
interface User {
  role: string;
}
// interfaces can merge
const user: User = {
  name: 'Ebrahim',
  role: 'Dev',
};

type Admin = { name: string };
type Admin = { role: string };
// ❌ Error: Duplicate identifier


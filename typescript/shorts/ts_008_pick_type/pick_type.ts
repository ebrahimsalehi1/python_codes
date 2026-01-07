interface User {
  id: number;
  name: string;
  profileName: string;
  address: string;
}

// 🎯 Only pick name and profileName
type UserContact = Pick<
  User,
  'name' | 'profileName'
>;

const contact: UserContact = {
  name: 'Ebrahim',
  profileName: 'CodeWithEbrahim',
};

console.log(contact);

const user = {
  profile: {
    name: 'Ebrahim',
  },
};

const name1 =
  user &&
  user.profile &&
  user.profile.name
    ? user.profile.name
    : 'Guest';
console.log('Old Way:', name1);

const name2 =
  user?.profile?.name ?? 'Guest';
console.log('Modern Way:', name2);


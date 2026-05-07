// Title: Stop using Promise.resolve(...) in async function

type User = {
  username: string;
};
async function getUsers1(): Promise<User> {
  return Promise.resolve({
    username: 'ebrahim',
  });
}
async function getUsers2(): Promise<User> {
  return {
    username: 'ebrahim',
  };
}

getUsers1().then((res) =>
  console.log('USER 1', res),
);

getUsers2().then((res) =>
  console.log('USER 2', res),
);

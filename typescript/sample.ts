class User {
  username: string;

  constructor() {
    this.username = '';
  }
}

const user = new User();
user.username = undefined;

console.log(user);

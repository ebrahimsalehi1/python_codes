type MyType =
  | string
  | boolean
  | Array<string | number>;

function challenge() {
  let foo: MyType = 'Hello';
  console.log(foo);
  foo = false;
  console.log(foo);
  foo = ['test', 100];
  console.log(foo);
}

challenge();

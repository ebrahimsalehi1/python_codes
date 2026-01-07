const user = {
  name: 'Ebrahim',
  score: 0,
};

const result1 = user.score || 100;
// 0 is falsy, so it returns 100
console.log(result1);

const result2 = user.score ?? 100;
// it checks for null or undefined,
// so it returns 0
console.log(result2);

function* generateNumbers(numbers) {
  for (const number of numbers) {
    yield `Number is ${number}`;
  }
}

const numbers = [1, 2, 3, 4, 5];
const numberIterator = generateNumbers(numbers);

console.log(numberIterator.next());
// { value: 'Number is 1', done: false }
console.log(numberIterator.next());
// { value: 'Number is 2', done: false }

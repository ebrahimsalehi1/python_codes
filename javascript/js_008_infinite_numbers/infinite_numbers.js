function* infiniteNumbers() {
  let n = 0;
  while (true) {
    yield n;
    n++;
  }
}

const numbers = infiniteNumbers();
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);

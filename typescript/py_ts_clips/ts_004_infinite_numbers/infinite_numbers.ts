function* infiniteNumbers(): Generator<
  number,
  void,
  unknown
> {
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

// Generator<YieldType, ReturnType, NextType>

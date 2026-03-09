// Stop writing boilerplate constructors in TypeScript.

// ❌ Bad: extra boilerplate
// (manual property declarations + assignments)
class CarBad {
  public name: string;
  public type: string;

  constructor(
    name: string,
    type: string,
  ) {
    this.name = name;
    this.type = type;
  }
}

const car1 = new CarBad('BMW', 'normal');
console.log(car1);

// ✅ Good: parameter properties
// keep the constructor clean and short
class Car {
  constructor(
    public name: string,
    public type: string,
  ) {}
}
const car2 = new Car(
  'Volkswagen',
  'Electric',
);
console.log(car2);

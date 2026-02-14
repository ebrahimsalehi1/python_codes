// Verbose: field + constructor assignment
class PersonVerbose {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}
// Short: parameter property (auto field + assign)
class Person {
  constructor(
    private readonly name: string,
  ) {}
  getName(): string {
    return this.name;
  }
}

const p1 = new PersonVerbose('Ebrahim');
console.log(p1.getName());

const p2 = new Person('Ebrahim');
console.log(p2.getName());

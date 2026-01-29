interface Car {
  brand: string;
  year: number;
}

let keyCar: keyof Car;
keyCar = 'brand';
keyCar = 'year';
// keyCar = 'model';
// ❌ model is not assignable to type

interface Car {
  readonly brand: string;
  model: string;
}

const car: Car = {
  brand: 'Tesla',
  model: 'Model 3',
};

// ✅ it is fine
car.model = 'Model Y';

// ❌ Error: Can not assign to brand,
// because it is a read-only property
car.brand = 'BMW';

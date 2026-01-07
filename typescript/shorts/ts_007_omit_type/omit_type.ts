interface Product {
  id: string;
  name: string;
  price: number;
}

// ✂️ Remove id from NewProduct
type NewProduct = Omit<Product, 'id'>;

const item: NewProduct = {
  name: 'Camera',
  price: 500,
};

console.log(item);

import {createProduct,calcStock,products} from './product.service';

createProduct({
  name: 'Product 1',
  createAt: new Date(2003,4,9),
  stock: 12
});
createProduct({
  name: 'Product 2',
  createAt: new Date(2003,2,9),
  stock: 10,
  size: 'M'
});
products.push({
  name: 'Product 3',
  createAt: new Date(2024,2,5),
  stock: 14,
  size: 'S'
});

console.log(products);

const total = calcStock();
console.log(total);

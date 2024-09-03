(()=>{

  type Sizes = 'S' | 'M' |'XL' | 'L';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes,
  };

  const products: Product[] = [];

  const addProduct = (data: Product)=>{
    products.push(data);
  }

  addProduct({
    title: 'Product 1',
    createAt: new Date(2003,4,9),
    stock: 12
  });
  addProduct({
    title: 'Product 2',
    createAt: new Date(2003,2,9),
    stock: 10,
    size: 'M'
  });
  console.log(products);
  products.push({
    title: 'Product 3',
    createAt: new Date(2024,2,5),
    stock: 14,
    size: 'S'
  });
  console.log(products);
})();

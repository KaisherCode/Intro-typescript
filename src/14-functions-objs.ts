(()=>{
  const login = (data:{email: string, password: number})=>{
    console.log(data.email,data.password);

  }

  //login('inco@dev.com','12121212')
  login({
    email: 'kaisher@dev.com',
    password: 12121212
  });

  type Sizes = 'S' | 'M' |'XL' | 'L';
  const products: any[] = [];

  const addProduct = (data:{
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes,
  })=>{
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
})();

(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes,
  ){
    return{
      title,
      createAt,
      stock,
      size,
    }
  }

  const product1 = createProductToJson('Product demo 1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.title);
  console.log(product1.stock);

  const createProductToJson2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes,
  )=>{
    return{
      title,
      createAt,
      stock,
      size,
    }
  }

  const product2 = createProductToJson2('Product demo 2', new Date(), 10);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.stock);
})();

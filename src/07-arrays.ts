(()=>{
  let prices = [1,2,3,4,5,1,121,'hola',true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(1212);

  let products = ['hola',true];
  products.push(false)

  let mixed: (number | string | boolean | object)[]=['hola',true];
  mixed.push(12);
  mixed.push('asas');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1,2,2,1,1,212];
  numbers.map(item => item*2);
})();

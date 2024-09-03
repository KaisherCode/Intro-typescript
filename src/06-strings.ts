(()=>{
  // Se puede escribir string (tipado) o se puede dejar vacio se puede inferir
  let productTitle: string = 'My amazing product';

  /**
   * No se puede asignar diferente a un string
   * productTitle = ()=>{};
   * productTitle = 123;
   * productTitle = null;
   */
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "Es un producto de la mejor calidad y precio";
  console.log('productDescription',productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

})();

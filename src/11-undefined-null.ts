(()=>{
  /**
   * Esto no funcicona
   * let myNumber: number = undefined;
   * let myString: string = null;
   */
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'asas';

  function hi(name: string | null){
    let hello = 'Hola ';
    if (name){
      hello += name;
    } else{
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hi2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody'; // ? = optional changed
    console.log(hello);
  }

  hi('Kaisher');
  hi(null);

  hi2('Kaisher');
  hi2(null);
})();

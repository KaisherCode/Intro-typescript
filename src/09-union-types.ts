(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'asas';

  function greeting(myTex: string | number) {
    if (typeof myTex === 'string') {
      console.log(`string ${myTex.toLowerCase()}`);
    } else {
      console.log(`number ${myTex.toFixed(1)}`);
    }
  }
  greeting('Kaisher');
  greeting(12.1212);

})();

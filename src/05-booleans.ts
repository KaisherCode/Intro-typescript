(() => {
  let isEnable = true;
  /**
   * isEnable = 'as';
   * isEnable = 123123;
   *
   * Este tipo de declaraciones de variable no se puede en TS.
   * isEnable = undefined;
   * isEnable = null;
   */
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: Boolean = true;
})();

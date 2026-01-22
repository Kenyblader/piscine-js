const CompteurModule = (function () {

  let count = 0;
  function incrementer() {
    count++;
    console.log(count);
  }

  function reset() {
    count = 0;
  }

  return {
    incrementer,
    reset
  };
})();

CompteurModule.incrementer(); 
CompteurModule.incrementer(); 
CompteurModule.reset();
CompteurModule.incrementer(); 
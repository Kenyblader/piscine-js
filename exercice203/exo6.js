function memoize(fn) {
  const cache = {}; 

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Résultat depuis le cache 🚀");
      return cache[key];
    }

    console.log("Calcul réel effectué...");
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}


function additionner(a, b) {
  return a + b;
}
const additionnerMemoize = memoize(additionner);

console.log(additionnerMemoize(2, 3));
console.log(additionnerMemoize(2, 3));
console.log(additionnerMemoize(4, 5));
console.log(additionnerMemoize(4, 5));

var nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var pairs = nombres.filter(n => n % 2 === 0);
var double= nombres.map(n => n * 2);

console.log("Nombres d'origine :", nombres);
console.log("Nombres doublés :", double);
console.log("Nombres pairs :", pairs);
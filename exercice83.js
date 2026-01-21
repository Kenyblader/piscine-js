let original = [1, 2, 3];
let copie = [...original];

console.log("Original array:", original);
console.log("copie array:", copie);

let tableau1 = [1, 2, 3];
let tableau2 = [4, 5, 6];

let tableau = [...tableau1, ...tableau2];
console.log("Tableau combiné :", tableau);

let nombres = [5, 10, 15, 3, 8];

let max = Math.max(...nombres);
console.log("Le nombre maximum est :", max);
function calcul(num1, num2, operator) {
   if (operator === '+') {
       return num1 + num2;
   } else if (operator === '-') {
       return num1 - num2;
   } else if (operator === '*') {
       return num1 * num2;
   } else if (operator === '/') {
       if (num2 === 0) {
           return 'Erreur de divison par zéro';
       }
         return num1 / num2;
    } else {
        return 'Opérateur invalide';
    }   
}
console.log(calcul(10, 5, '+')); 
console.log(calcul(10, 5, '-'));

function factoriel(n) {
   resultat = 1;
   if (n < 0) {
       return undefined;
   }
    for (let i = 1; i <= n; i++) {  
        resultat = resultat * i;
    }
    return resultat;
}
console.log(factoriel(2));
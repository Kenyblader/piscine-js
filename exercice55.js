let nombres = [5, 10, 15, 20, 25];

const sommerNombres = (nombres) => {
    let somme = 0;
    nombres.forEach(nombre => {
        somme += nombre;
    });
    return somme;
}

console.log(sommerNombres(nombres));
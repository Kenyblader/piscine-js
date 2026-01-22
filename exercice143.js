
const function1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(42);
        }, 1000);
    });
}

const function2 = async (r1) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(r1 * 50);
        }, 1000);
    });
}

const function3 = async (r2) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Résultat de la fonction 3: ${r2/100}`);
        }, 1000);
    });
}


function1().then((result1) => {
    return function2(result1);
}).then((result2) => {
    return function3(result2);
}).then((finalResult) => {
    console.log(finalResult);
}).catch((error) => {
    console.error("Une erreur est survenue :", error);
});

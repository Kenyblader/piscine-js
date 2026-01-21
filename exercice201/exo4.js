//execution séquentielle
function operation(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Opération terminée après ${ms}ms`);
        }, ms);
    });
}

async function executionSequentielle() {
    const a = await operation(1000); 
    const b = await operation(1000); 
    const c = await operation(1000); 
    console.log(a);
    console.log(b);
    console.log(c);
}


executionSequentielle();

//execution parallèle
async function executionParallele() {
    const [a, b, c] = await Promise.all([
        operation(1000), // Opération 1
        operation(1000), // Opération 2
        operation(1000)  // Opération 3
    ]);
    console.log(a);
    console.log(b);
    console.log(c);
}

// Appel de la fonction pour exécution parallèle
executionParallele();
// Total: 1 s (le plus long)
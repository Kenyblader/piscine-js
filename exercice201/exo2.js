function operationAsynchrone(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Opération réussie !");
            } else {
                reject(new Error("Échec de l'opération."));
            }
        }, 2000); 
    });
}
async function maFonction() {
    try {
        const resultat = await operationAsynchrone(false); 
        console.log(resultat);
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    } finally {
        console.log('Terminé');
    }
}

maFonction();
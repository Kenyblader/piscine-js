function attendreDuree(duree) {
    return new Promise((resolve, reject) => {
        if (typeof duree !== 'number' || duree <= 0) {
            reject('La durée doit être un nombre positif.');
            return;
        }

        setTimeout(() => {
            resolve(`Résolu après ${duree} millisecondes`);
        }, duree);
    });
}


async function lancerQuiz() {
    try {
        console.log("Début du délai...");
        const resultat = await attendreDuree(2000); 
        console.log(resultat); 
    } catch (erreur) {
        console.error(erreur); 
    }
}


lancerQuiz();
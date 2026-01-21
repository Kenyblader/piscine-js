function attendreDuree(duree) {
    return new Promise ((resolve, reject) => {
        if (typeof duree !== 'number' || duree <= 0) {
            reject ('La durée doit être un nombre positif.');
            return;
        }

        setTimeout(()=> {
            resolve(`résolu après ${duree} millisecondes`);
        }, duree);
    });
}

attendreDuree (1200)
    .then(resultat => console.log(resultat))
    .catch (erreur => console.log(erreur));
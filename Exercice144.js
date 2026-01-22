// 1️⃣ Définition de la fonction tache
function tache(nom, ms, doitEchouer = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (doitEchouer) {
        reject(new Error(`${nom} a échoué`));
      } else {
        resolve(`✅ ${nom} terminé en ${ms}ms`);
      }
    }, ms);
  });
}

// 2️⃣ Création des promesses
const p1b = tache("Tâche 1", 1000);
const p2b = tache("Tâche 2", 2000, true);
const p3b = tache("Tâche 3", 1500);

// 3️⃣ Promise.all
Promise.all([p1b, p2b, p3b])
  .then((resultats) => {
    console.log("Promise.all succès :", resultats);
  })
  .catch((erreur) => {
    console.error("Promise.all a échoué :", erreur.message);
  });

// 4️⃣ Promise.race
Promise.race([p1b, p2b, p3b])
  .then((resultat) => {
    console.log("La première a fini :", resultat);
  })
  .catch((erreur) => {
    console.error("La première a échoué :", erreur.message);
  });

// 5️⃣ Promise.allSettled
Promise.allSettled([p1b, p2b, p3b]).then((resultats) => {
  console.log("Tout est terminé (même les échecs) :");
  console.log(resultats);
});




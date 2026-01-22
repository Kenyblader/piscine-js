

for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(`Message ${i} après ${i} seconde(s)`);
    }, i * 1000);
}
// Affiche "Message 1 après 1 seconde", "Message 2 après 2 secondes", ..., "Message 5 après 5 secondes"

function afficherMessageAvecDelai(message, delai) { 
    setTimeout(() => {
        console.log(message);
    }, delai);
}
afficherMessageAvecDelai("Message après 3 secondes", 3000);
// Affiche "Message après 3 secondes" après 3 secondes
afficherMessageAvecDelai("Message après 1 seconde", 1000);
// Affiche "Message après 1 seconde" après 1 seconde
afficherMessageAvecDelai("Message après 5 secondes", 5000);
// Affiche "Message après 5 secondes" après 5 secondes
// Note : Les messages avec des délais différents peuvent s'afficher dans un ordre différent selon le temps écoulé.

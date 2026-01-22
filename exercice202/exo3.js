class Animal {
    constructor(nom) {
        this.nom = nom;
    }

    parler() {
        console.log(`${this.nom} fait un bruit`);
    }
}

class Chien extends Animal {
    constructor(nom, race) {
        super(nom);
        this.race = race;
    }

    parler() {
        console.log(`${this.nom} aboie`);
    }
}

let monChien = new Chien("Rex", "Berger Allemand");
monChien.parler();  // Affiche: Rex aboie   
console.log(monChien.race);  // Affiche: Berger Allemand    
let monAnimal = new Animal("Général");
monAnimal.parler(); // Affiche: Général fait un bruit

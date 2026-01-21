class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    afficherDetails() {
        console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Année: ${this.annee}`);
    }

    estAncienne() {
        const anneeActuelle = new Date().getFullYear();
        return anneeActuelle - this.annee > 10;
    }
}

const Voiture1 = new Voiture("Toyota", "Corolla", 2005);

Voiture1.afficherDetails();
console.log(`La voiture est-elle ancienne ? ${Voiture1.estAncienne() ? 'Oui' : 'Non'}`);

const estAncienne = Voiture1.estAncienne();
console.log(estAncienne ? 'Oui' : 'Non');
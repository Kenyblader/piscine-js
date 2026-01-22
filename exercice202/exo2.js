class Personne {
    constructor(nom, age) {
        this._nom = nom;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(nouvelAge) {
        if (nouvelAge >= 0) {
            this._age = nouvelAge;
        }
    }
}

let personne1 = new Personne("Dupont", 30);
console.log(personne1.age);
personne1.age = 31;
console.log(personne1.age);
personne1.age = -5; 
console.log(personne1.age);
let personne2 = new Personne("Martin", 25);
console.log(personne2.age);
personne2.age = 26;
console.log(personne2.age);
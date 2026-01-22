
function supprimerDoublons(tableau) {
  return [...new Set(tableau)];
}

class GestionnaireUtilisateurs {
  constructor() {
    this.enLigne = new Set();
  }

  connexion(userId) {
    this.enLigne.add(userId);
  }

  deconnexion(userId) {
    this.enLigne.delete(userId);
  }

  estEnLigne(userId) {
    return this.enLigne.has(userId);
  }

  obtenirTous() {
    return [...this.enLigne];
  }
}

function union(setA, setB) {
  return new Set([...setA, ...setB]);
}

function intersection(setA, setB) {
  
  return new Set([...setA].filter((x) => setB.has(x)));
}

function difference(setA, setB) {
  
  return new Set([...setA].filter((x) => !setB.has(x)));
}


console.log(supprimerDoublons([1, 2, 2, 3, 3, 3, 4, 5, 5])); 
console.log(supprimerDoublons(["a", "b", "a", "c", "b"]));   


const manager = new GestionnaireUtilisateurs();
manager.connexion("alice");
manager.connexion("bob");
console.log(manager.estEnLigne("alice"));   
console.log(manager.estEnLigne("charlie")); 
console.log(manager.obtenirTous());         


const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

console.log(union(setA, setB));        
console.log(intersection(setA, setB)); 
console.log(difference(setA, setB));   

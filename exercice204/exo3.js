const donneesPrivees = new WeakMap();
const metadataMap = new WeakMap();
const objetsMarques = new WeakSet();


class Personne {
  constructor(nom, age) {
    donneesPrivees.set(this, {
      nom,
      age,
      secrets: []
    });
  }

  getNom() {
    return donneesPrivees.get(this).nom;
  }

  getAge() {
    return donneesPrivees.get(this).age;
  }

  ajouterSecret(secret) {
    donneesPrivees.get(this).secrets.push(secret);
  }

  getSecrets() {
    return donneesPrivees.get(this).secrets;
  }
}



function ajouterMetadata(element, meta) {
  metadataMap.set(element, meta);
}

function obtenirMetadata(element) {
  return metadataMap.get(element);
}


function marquer(obj) {
  objetsMarques.add(obj);
}

function estMarque(obj) {
  return objetsMarques.has(obj);
}

const tests = () => {
    // Données privées
    const personne = new Personne('Alice', 25);
    personne.ajouterSecret('J\'aime le chocolat');
    console.log(personne.getNom());       // 'Alice'
    console.log(personne.getSecrets());   // ['J\'aime le chocolat']
    console.log(personne.nom);            // undefined (données privées !)

    // Métadonnées
    const element = { id: 1, type: 'button' };
    ajouterMetadata(element, { clicks: 0, lastClick: null });
    console.log(obtenirMetadata(element));  // { clicks: 0, lastClick: null }

    // Marquage
    const obj = { id: 1 };
    marquer(obj);
    console.log(estMarque(obj));  // true
}

tests();


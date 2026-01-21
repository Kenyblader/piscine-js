// 1. Copier un objet
let personne = { nom: "Dupont", age: 30 };
let copiePersonne = { ...personne };
console.log(copiePersonne);

// 2. Fusionner deux objets
let infos = { nom: "Martin", age: 25 };
let contact = { email: "martin@email.com", tel: "0612345678" };
let personneComplete = { ...infos, ...contact };
console.log(personneComplete);

// 3. Modifier une propriété
let user = { nom: "Dupont", age: 30, ville: "Paris" };
let updatedUser = { ...user, age: 31 };
console.log(updatedUser);



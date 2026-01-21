// 1. Créer un nouvel élément <p>
const titre = document.getElementById('titre');
const sousTitre = document.createElement('p');
sousTitre.textContent = "Bienvenue dans ma boutique !";
sousTitre.className = "produit"; // Ajouter une classe pour le style
titre.insertAdjacentElement('afterend', sousTitre); // Insérer <p> après <h1>

// 2. Créer une liste <ul> avec plusieurs <li>
const listeProduits = document.createElement('ul');
const produits = ['Produit 1', 'Produit 2', 'Produit 3'];

produits.forEach(produit => {
    const item = document.createElement('li');
    item.textContent = produit;
    listeProduits.appendChild(item); // Ajouter chaque <li> à la liste
});

// Ajouter la liste à la <div> avec l'id "produits"
const divProduits = document.getElementById('produits');
divProduits.appendChild(listeProduits);

// 3. Créer une carte produit complète
function ajouterCarteProduit(nom, prix) {
    const carteProduit = document.createElement('div');
    carteProduit.className = 'produit';
    
    const nomProduit = document.createElement('h2');
    nomProduit.textContent = nom;

    const prixProduit = document.createElement('p');
    prixProduit.textContent = `Prix: ${prix} €`;
    prixProduit.className = 'prix';

    const supprimerBtn = document.createElement('button');
    supprimerBtn.textContent = 'Supprimer';
    supprimerBtn.onclick = () => { carteProduit.remove(); }; // Supprime la carte produit

    carteProduit.appendChild(nomProduit);
    carteProduit.appendChild(prixProduit);
    carteProduit.appendChild(supprimerBtn);

    divProduits.appendChild(carteProduit); // Ajouter la carte produit à la div
}

// Ajouter des cartes produits
ajouterCarteProduit('Produit A', 29.99);
ajouterCarteProduit('Produit B', 19.99);
ajouterCarteProduit('Produit C', 39.99);
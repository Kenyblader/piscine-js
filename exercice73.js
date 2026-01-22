
const calculerPrixTTC = (prixHT, tauxTVA) => {
    const montantTVA = prixHT * tauxTVA;
    const prixTTC = prixHT + montantTVA;
    return `Prix HT: ${prixHT}€, TVA: ${montantTVA}€, Prix TTC: ${prixTTC}€`;
}

const afficherProduit = (nom, prix, stock) => {
    if (stock > 0) {
        return `Produit: ${nom} - Prix: ${prix}€ - En stock: ${stock}`;
    } else {
        return `Produit: ${nom} - Rupture de stock`;
    }
}

console.log(calculerPrixTTC(100, 0.2)); // Prix HT: 100€, TVA: 20€, Prix TTC: 120€
console.log(afficherProduit("Ordinateur", 800, 5));

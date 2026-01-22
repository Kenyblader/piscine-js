function verifierStock() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stockDisponible = true; 
            if (stockDisponible) {
                resolve("Stock vérifié : disponible");
            } else {
                reject(new Error("Stock insuffisant"));
            }
        }, 1000);
    });
}


function traiterPaiement() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paiementAccepte = true; 
            if (paiementAccepte) {
                resolve("Paiement traité : accepté");
            } else {
                reject(new Error("Erreur de paiement"));
            }
        }, 1000); 
    });
}


function envoyerColis() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Colis envoyé avec succès");
        }, 1000); 
    });
}


async function traiterCommande() {
    try {
        const stock = await verifierStock();
        console.log(stock); 

        const paiement = await traiterPaiement();
        console.log(paiement); 

        const envoi = await envoyerColis();
        console.log(envoi); 

        console.log('Commande terminée');
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
    }
}

traiterCommande();
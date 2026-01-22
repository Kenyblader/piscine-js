const maFonction = async () => {
    try {
        const resultat = await new Promise((resolve, reject) => {
            setTimeout(() => {
              
                reject(new Error("Quelque chose s'est mal passé !"));
            }, 1000); 
        });
        
        console.log('Résultat :', resultat); 
    } catch (error) {
        console.error('Une erreur est survenue :', error.message); 
    }
};


maFonction();
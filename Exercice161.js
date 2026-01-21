const recupererDonnees = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Erreur HTTP : ' + response.status);
        }

        const data = await response.json();
        console.log('Données récupérées :', data); 
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error.message);
    }
};
recupererDonnees();
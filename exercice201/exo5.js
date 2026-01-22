// Fonction pour récupérer des données avec une requête GET
async function recupererDonnees(url){
    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Erreur HTTP: ${response.status}`)
        }
        const data = await response.json();
        return data; 
    } catch (erreur){
        console.error(`Erreur:`, erreur.message)
    }
}
// Exemple d'utilisation pour une requête GET
const urlGet = 'https://jsonplaceholder.typicode.com/posts/1'; // URL d'exemple
recupererDonnees(urlGet).then(data => console.log('Données récupérées:', data));


// Fonction pour envoyer des données avec une requête POST
async function envoyerDonnees(url, payload) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (erreur) {
        console.error(`Erreur:`, erreur.message);
    }
}
// Exemple d'utilisation pour une requête POST
const urlPost = 'https://jsonplaceholder.typicode.com/posts'; // URL d'exemple
const payload = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

envoyerDonnees(urlPost, payload).then(data => console.log('Données envoyées:', data));

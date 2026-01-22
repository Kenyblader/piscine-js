const headers = {
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer your_token_here',
    'Accept': 'application/json', 
    'Accept-Language': 'en-US'
}; 

const creer = async (url) => {
    try{
        const reponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify({
                name: 'John Doe',
                username: 'johndoe',
                email: 'john.doe@example.com'
            })
        }); 

        if (!reponse.ok) {
            throw new Error('Erreur HTTP : ' + reponse.status);
        }

        const resultat = await reponse.json();
        console.log('Utilisateur créé :', resultat);
    }catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error.message);
    }
}
creer('https://jsonplaceholder.typicode.com/users');
const recupererUtilisateur = async (id) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    console.log('Utilisateur récupéré :', data);
};

recupererUtilisateur(3);
// PUT : remplace TOUTE la ressource
fetch(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
        name: 'Nouveau',
        email: 'nouveau@mail.com',
        // ... tous les champs
    })
});

// PATCH : modifie PARTIELLEMENT
fetch(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
        email: 'nouveau@mail.com'  // juste l'email
    })
});
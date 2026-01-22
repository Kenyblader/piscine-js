
const chargerUtilisateurs = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Utilisateur1", "Utilisateur2", "Utilisateur3"]);
        }, 1000);
    });
}

const chargerPosts = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, auteur: "Utilisateur1", contenu: "Post 1" },
                { id: 2, auteur: "Utilisateur2", contenu: "Post 2" },
                { id: 3, auteur: "Utilisateur3", contenu: "Post 3" }
            ]);
        }, 1000);
    });
}

const chargerComments = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, postId: 1, auteur: "Utilisateur1", contenu: "Commentaire 1" },
                { id: 2, postId: 2, auteur: "Utilisateur2", contenu: "Commentaire 2" },
                { id: 3, postId: 3, auteur: "Utilisateur3", contenu: "Commentaire 3" }
            ]);
        }, 1000);
    });
}


const [users, posts, comments] = await Promise.all([
    chargerUtilisateurs(),
    chargerPosts(),
    chargerComments()
]);

console.log("Utilisateurs :", users);
console.log("Posts :", posts);
console.log("Commentaires :", comments);


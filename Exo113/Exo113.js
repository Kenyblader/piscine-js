const input = document.getElementById('nouveauTodo');
const liste = document.getElementById('listeTodos');
const ajouterBtn = document.getElementById('ajouter');

// Écouter le clic sur le bouton "Ajouter"
ajouterBtn.addEventListener('click', function() {
    const todoTexte = input.value.trim(); // Supprimer les espaces inutiles
    if (todoTexte !== "") { // Vérifier que le champ n'est pas vide
        const item = document.createElement('li'); // Créer un nouvel élément <li>
        item.className = 'todo-item'; // Ajouter une classe pour le style
        item.textContent = todoTexte; // Ajouter le texte de la tâche

        // Créer un bouton de suppression
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.className = 'delete-btn'; // Ajouter une classe pour le style
        deleteBtn.addEventListener('click', function() {
            liste.removeChild(item); // Supprimer l'item de la liste
        });

        item.appendChild(deleteBtn); // Ajouter le bouton à l'élément <li>
        liste.appendChild(item); // Ajouter l'élément à la liste
        input.value = ""; // Vider le champ d'entrée
    }
});

// Écouter la touche "Enter" pour ajouter une tâche
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        ajouterBtn.click(); // Simuler un clic sur le bouton "Ajouter"
    }
});
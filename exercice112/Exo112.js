const input = document.getElementById('monInput');
const resultat = document.getElementById('resultat');
const longueur = document.getElementById('longueur');

input.addEventListener('input', function() {
    resultat.textContent = input.value;
    longueur.textContent = input.value.length;

    if(input.value === "") {
        resultat.textContent = "Vous n'avez rien saisi";
        longueur.textContent = 0;
    }
});


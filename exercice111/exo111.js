const compteurDisplay = document.getElementById('compteur');
const incrementerBtn = document.getElementById('incrementer');
const decrementerBtn = document.getElementById('decrementer');
const resetBtn = document.getElementById('reset');

let compteur = 0;
compteurDisplay.textContent = compteur;
incrementerBtn.addEventListener('click', () => {
    compteur++;
    compteurDisplay.textContent = compteur;
});

decrementerBtn.addEventListener('click', () => {
    compteur--;
    compteurDisplay.textContent = compteur;
});
resetBtn.addEventListener('click', () => {
    compteur = 0;
    compteurDisplay.textContent = compteur;
});

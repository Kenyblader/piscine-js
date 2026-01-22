
const getNumber = () => Math.floor(Math.random() * 100) + 1;


var numberToGuess = getNumber();
var attempts = 0;
var bestScore = null;
const message = document.getElementById('message');
const record = document.getElementById('record');
const proposition = document.getElementById('proposition');
const tentatives = document.getElementById('tentatives');

const tryNumber = (numberToGuess, userGuess) => {
    if (userGuess < numberToGuess) {
        return "Trop bas!";
    } else if (userGuess > numberToGuess) {
        return "Trop haut!";
    } else {
        return "Correct!";
    }
};

const restartGame = () => {
    numberToGuess = getNumber();
    attempts = 0;
    tentatives.textContent = 0;
    proposition.value = '';
    message.textContent = '';
};

document.getElementById('verifier').addEventListener('click', () => {
    const userGuess = parseInt(proposition.value, 10);
    attempts++;
    const result = tryNumber(numberToGuess, userGuess);
    message.textContent = result;
if (result === "Correct!") {
        if (bestScore === null || attempts < bestScore) {
            bestScore = attempts;
            record.textContent = bestScore;
        }
    }
});

document.getElementById('nouvelle-partie').addEventListener('click', restartGame);

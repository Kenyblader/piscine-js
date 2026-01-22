import { readline } from './modules/std.js';

const getNumber = () => Math.floor(Math.random() * 100) + 1;

const game = async () => {

    
    console.log("Welcome to the Number Guessing Game!");
    
        const targetNumber = getNumber();
        let attempts = 0;
        let guessedCorrectly = false;
        while (!guessedCorrectly) {
            const guess = attempts++;
            console.log(`You guessed: ${guess}`);
            if (guess === targetNumber) {
                guessedCorrectly = true;
                console.log(`Congratulations! You've guessed the number in ${attempts} attempts.`);
            } else if (guess < targetNumber) {
                console.log("Too low! Try again.");
            } else {
                console.log("Too high! Try again.");
            }
        }
};


game();

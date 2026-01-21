import { readline } from './modules/std.js';

const getNumber = () => Math.floor(Math.random() * 100) + 1;

const game = async () => {

    
    console.log("Welcome to the Number Guessing Game!");
    
        const targetNumber = getNumber();
        console.log(`The number to guess is: ${targetNumber}`);
        let attempts = 1;
        let guessedCorrectly = false;
        while (!guessedCorrectly) {
            const guess = await readline("Guess a number between 1 and 100: ");

            attempts++;
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

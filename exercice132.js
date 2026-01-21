const readline = require('readline');

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: 0  
    },
    {
        question: "Combien font 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        reponse: 1
    }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function poserQuestion(q, callback) {
    rl.question(q.question + "\n" + q.options.map((opt, index) => `${index + 1}. ${opt}`).join("\n") + "\nVotre réponse : ", (userAnswer) => {
        callback(userAnswer);
    });
}

function quizz() {
    console.log("Bienvenue au quiz JavaScript !");
    var score = 0;
    let questionIndex = 0;

    function poseQuestion() {
        if (questionIndex < questions.length) {
            poserQuestion(questions[questionIndex], (userAnswer) => {
                if (parseInt(userAnswer) - 1 === questions[questionIndex].reponse) {
                    console.log("Bonne réponse !");
                    score++;
                } else {
                    console.log("Mauvaise réponse. La bonne réponse était : " + questions[questionIndex].options[questions[questionIndex].reponse]);
                }
                questionIndex++;
                poseQuestion(); 
            });
        } else {
            console.log("Votre score final est : " + score + " sur " + questions.length);
            rl.close(); 
        }
    }

    poseQuestion(); 
}


quizz();
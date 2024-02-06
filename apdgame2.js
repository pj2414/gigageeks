var questions = [
    "What was the name of the badman?",
    "What plans did the badman have?",
    "What program did he have on his computer?",
    "Who was the only person who could do this difficult  job?",
    "What did he jump out of?",
    "Where did his partner contact him from?",
    "What did he use to enter the badman's center"
];

function checkAnswers() {
    var userAnswers = [];

    questions.forEach(function (question) {
        var userAnswer = prompt(question);
        userAnswers.push(userAnswer);
    });

    displayResult(userAnswers);
}

function displayResult(userAnswers) {
    var correctAnswers = ["Ogma", "to take over the world", "artificial intelligence", "jake vond","plane", "operation center","underground tunnel"];

    var correctCount = 0;
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] && userAnswers[i].toLowerCase() === correctAnswers[i]) {
            correctCount++;
        }
    }

    var resultMessage = "You got " + correctCount + " out of " + questions.length + " questions correct!";
    document.getElementById('result').innerText = resultMessage;
}

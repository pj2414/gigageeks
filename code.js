const questions = [     
   
    {
        question: "Does your child often struggle to follow verbal instructions, especially in noisy environments?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child frequently ask for information to be repeated or clarified?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child seem to have particular difficulty understanding speech in loud or busy environments?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child have trouble distinguishing between similar sounds or words (e.g., cat and bat or top and pot)?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child find it difficult to focus on one speaker when there are competing noises?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child struggle to understand and remember the order of sounds, words, or directions?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Have you noticed any difficulties in your child's ability to engage in conversations or express themselves verbally?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Is there a noticeable impact on your child's academic performance, particularly in tasks that involve listening and processing spoken information?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child often ask people to repeat themselves, even in quiet settings?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child struggle with activities involving rhyming or recognizing the sound patterns in words?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child react strongly or negatively to loud or sudden noises?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Does your child sometimes appear not to hear when called or seem selectively attentive to certain sounds?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },
    {
        question: "Where there any delays or concerns in your child's early speech and language development?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No",correct: false},
        ]

    },   
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startTest() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';

    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function resetButtons() {
    Array.from(answerButtons.children).forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function handleNextButton() {
    resetButtons();
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        let userResponse=confirm("Are you sure you want to submit the questionnaire for assessment?");
        if(userResponse){
            window.location.href = "form.html";
        };
    };
}

function submitForm(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let bloodGroup = document.getElementById('bloodGroup').value;
    document.getElementById('contactForm').reset();
    showReport()
}

function showReport(){
    if(score<7){
        window.location.href = "medium.html";
        if(score<3){
            window.location.href = "low.html";
        }
    }else{
        window.location.href = "high.html";
    };
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startTest();
    }
});

startTest();
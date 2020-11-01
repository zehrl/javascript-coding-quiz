// DOM Initializing
var timeEl = document.querySelector("#time")

var startMenuEl = document.querySelector(".startMenu");
var startMenuBtn = document.querySelector("#startMenuBtn");

var questionCardEl = document.querySelector(".questionCard");
var questionEl = document.querySelector("#question");
var optionParentEl = document.querySelector("#optionParent");

var quizEndMenuEl = document.querySelector(".quizEndMenu");

var highScoreMenuEl = document.querySelector(".highScoreMenu")






// Initialize Variables
var score = 0;
var secondsRemaining;

var questions = [
    {
        question: "What's your favorite color?",
        answers: ["blue", "red", "yellow", "green"],
        correctAnswer: "blue"
    },
];

// TESTS
function startQuiz() {
    hideMenu(startMenuEl);
    showMenu(questionCardEl);
    nextQuestion();

    secondsRemaining = 30;
    timeEl.textContent = secondsRemaining;
    setInterval(function () {
        secondsRemaining--;
        timeEl.textContent = secondsRemaining;
        if (secondsRemaining <= 0) {
            hideMenu(questionCardEl);
            showMenu(quizEndMenuEl)
        }
    }, 1000);

}

function nextQuestion() {
    //select random question
    questionEl.textContent = questions[0].question;
    for (let i = 0; i < questions[0].answers.length; i++) {
        optionParentEl.children[i].textContent = questions[0].answers[i];
    }



    //remove it from the 

    //if on start menu
    //then 
    //if on questionCard then change question
}

function hideMenu(element) {
    element.style.display = "None"
}

function showMenu(element) {
    element.style.display = "inline-block"
}

// TESTS

// Fill in questions


// Display start button and wait for user to click start button

// User clicks start button, hide start menu elements

// Display question and 4 options and wait for user to click an option
// question[0]

// User clicks an answer, display "Wrong" or "Correct"
// update score if correct
// decrease time if incorrect

// Display question and 4 options and wait for user to click an option
// question [1]

// ...


// When user clicks start button, start timer "Set time -> set interval"


// ------ EVENT HANDLERS ------
startMenuBtn.addEventListener("click", startQuiz)
optionParentEl.addEventListener("click", nextQuestion)
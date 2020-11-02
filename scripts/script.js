// DOM Initializing
var timeEl = document.querySelector("#time")
var viewHighscoresEl = document.querySelector("#viewHighscores")

var startMenuEl = document.querySelector(".startMenu");
var startMenuBtn = document.querySelector("#startMenuBtn");

var questionCardEl = document.querySelector(".questionCard");
var questionEl = document.querySelector("#question");
var optionParentEl = document.querySelector("#optionParent");

var quizEndMenuEl = document.querySelector(".quizEndMenu");
var submitInitialsBtn = document.querySelector("#submitInitialsBtn");

var highScoreMenuEl = document.querySelector(".highScoreMenu");
var goBackBtn = document.querySelector("#goBackBtn");

// Initialize Variables
var score;
var secondsRemaining;
var timer;
var questions;

function initializeQuestions() {
    questions = [
        {
            question: "What's your favorite color?",
            answers: ["blue", "red", "yellow", "green"],
            correctAnswer: "blue"
        },
        {
            question: "How do you create a comment in Javascript?",
            answers: ["//", "##", "~", "-"],
            correctAnswer: "//"
        },
        {
            question: "How do you initialize a variable?",
            answers: ["var x = 1;", "set x = 1;", "dim x = 1", "by the power of the gods, x shall be 1"],
            correctAnswer: "var x = 1"
        },
        {
            question: "What year was Javascript invented?",
            answers: ["1995", "2000", "2005", "2010"],
            correctAnswer: "1995"
        },
    ];
}


function startQuiz() {
    score = 0;
    secondsRemaining = 30;
    initializeQuestions();

    changeMenu(questionCardEl);
    nextQuestion();

    timeEl.textContent = secondsRemaining;
    timer = setInterval(function () {
        secondsRemaining--;
        timeEl.textContent = secondsRemaining;
        if (secondsRemaining <= 0) {
            changeMenu(quizEndMenuEl);
            clearInterval(timer);
        }
    }, 1000);

}

function nextQuestion() {
    console.log("Fired!")
    
    // end quiz if there are no questions left
    if (questions.length <= 0) {
        clearInterval(timer);
        changeMenu(highScoreMenuEl);
        return;
    }
    
    var randIndex = Math.floor(questions.length * Math.random())
    console.log(`randIndex = ${randIndex}`);

    //select random question
    questionEl.textContent = questions[randIndex].question;
    for (let i = 0; i < questions[randIndex].answers.length; i++) {
        optionParentEl.children[i].textContent = questions[randIndex].answers[i];
    }



    //remove it from the list
    questions.splice(randIndex, 1);

}

function submitInitials() {
    //do stuff here

    // Change to highscore menu
    changeMenu(highScoreMenuEl);
}

function changeMenu(element) {
    startMenuEl.style.display = "None";
    questionCardEl.style.display = "None";
    quizEndMenuEl.style.display = "None";
    highScoreMenuEl.style.display = "None";
    element.style.display = "inline-block"
}

// ------ EVENT HANDLERS ------
startMenuBtn.addEventListener("click", startQuiz)

optionParentEl.addEventListener("click", nextQuestion)

submitInitialsBtn.addEventListener("click", submitInitials)

viewHighscoresEl.addEventListener("click", function () {
    changeMenu(highScoreMenuEl);
})

goBackBtn.addEventListener("click", function () {
    changeMenu(startMenuEl);
})
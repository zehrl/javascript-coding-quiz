// DOM Initializing
var startMenuEl = document.querySelector(".startMenu");
var questionCardEl = document.querySelector(".questionCard");
var quizEndMenuEl = document.querySelector(".quizEndMenu");
var highScoreMenu = document.querySelector(".highScoreMenu")


var startMenuBtn = document.querySelector("#startMenuBtn");
var optionParentEl = document.querySelector("#optionParent");
var timeEl = document.querySelector("#time")

// Initialize Variables
var score = 0;
var secondsRemaining;

// TESTS
function startQuiz() {
    hideMenu(startMenuEl);
    showMenu(questionCardEl);

    secondsRemaining = 3;
    timeEl.textContent = secondsRemaining;
    setInterval(function (){
        secondsRemaining--;
        timeEl.textContent = secondsRemaining;
        if (secondsRemaining <= 0) {
            hideMenu(questionCardEl);
            showMenu(quizEndMenuEl)
        }
    }, 1000);

}

function nextQuestion() {
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
var questions = [
    {question: "What's your favorite color?",
    answers: ["blue", "red", "yellow", "green"],
    correctAnswer: "blue"},
    ]; 

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
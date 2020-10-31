// DOM Initializing
var startMenuEl = document.querySelector(".startMenu");
var startMenuBtn = document.querySelector("#startMenuBtn")

// Initialize Variables
var score = 0;
var secondsRemaining = 75;


// TESTS
function startQuiz() {
    console.log("FIRED!")
    // next card

}

function nextCard() {
    
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
startMenuEl.addEventListener("click", startQuiz)
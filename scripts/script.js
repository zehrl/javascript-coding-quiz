// DOM Initializing
var timeEl = document.querySelector("#time")
var viewHighscoresEl = document.querySelector("#viewHighscores")

var startMenuEl = document.querySelector(".startMenu");
var startMenuBtn = document.querySelector("#startMenuBtn");

var questionCardEl = document.querySelector(".questionCard");
var questionEl = document.querySelector("#question");
var optionParentEl = document.querySelector("#optionParent");
var resultEl = document.querySelector("#result");
var scoreEl = document.querySelector("#score");

var quizEndMenuEl = document.querySelector(".quizEndMenu");
var submitInitialsBtn = document.querySelector("#submitInitialsBtn");
var finalScoreEl = document.querySelector("#finalScore");

var highScoreMenuEl = document.querySelector(".highScoreMenu");
var goBackBtn = document.querySelector("#goBackBtn");

// Initialize Variables
var score;
var secondsRemaining;
var timer;
var questions;
var randIndex;
var outcomeTimer;

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
            correctAnswer: "var x = 1;"
        },
        {
            question: "What year was Javascript invented?",
            answers: ["1995", "2000", "2005", "2010"],
            correctAnswer: "1995"
        }
    ];
}


function startQuiz() {
    score = 0;
    scoreEl.textContent = score;
    finalScoreEl.textContent = score;

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
    // end quiz if there are no questions left
    if (questions.length <= 0) {
        clearInterval(timer);
        changeMenu(quizEndMenuEl);
        return;
    }

    randIndex = Math.floor(questions.length * Math.random())
    console.log(`randIndex = ${randIndex}`);

    //select random question
    questionEl.textContent = questions[randIndex].question;
    for (let i = 0; i < questions[randIndex].answers.length; i++) {
        optionParentEl.children[i].textContent = questions[randIndex].answers[i];
    }

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

function gradeQuestion(event) {
    var countdown = 1; 
    
    //Check if user selected correct option
    outcome = (questions[randIndex].correctAnswer == event.target.textContent);
    console.log(`Player answer: ${event.target.textContent}, Correct Answer: ${questions[randIndex].correctAnswer}`);


    //Call resultDisplay function
    if (outcome) {
        resultEl.textContent = "Correct!";
        score++;
        scoreEl.textContent = score;
        finalScoreEl.textContent = score;
    } else {
        resultEl.textContent = "Wrong!";
        secondsRemaining -= 5;
    }
    outcomeTimer = setInterval(function(){
        

        if (countdown <= 0) {
            resultEl.textContent = "";
            clearInterval(outcomeTimer);
        }
        countdown--;
    }, 1000);

    //remove question from the list
    questions.splice(randIndex, 1);
}


// ------ EVENT HANDLERS ------
startMenuBtn.addEventListener("click", startQuiz)

optionParentEl.addEventListener("click", function () {
    resultEl.textContent = "";
    clearInterval(outcomeTimer);
    gradeQuestion(event);
    nextQuestion();

});

submitInitialsBtn.addEventListener("click", submitInitials)

viewHighscoresEl.addEventListener("click", function () {
    changeMenu(highScoreMenuEl);
})

goBackBtn.addEventListener("click", function () {
    changeMenu(startMenuEl);
})
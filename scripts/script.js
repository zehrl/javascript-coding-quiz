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
var initialsEl = document.querySelector("#initials");

var highScoreMenuEl = document.querySelector(".highScoreMenu");
var goBackBtn = document.querySelector("#goBackBtn");
var highscoreListEl = document.querySelector("#highscoreList");
var firstPlace = document.querySelector("#firstPlace");
var secondPlace = document.querySelector("#secondPlace")
var thirdPlace = document.querySelector("#thirdPlace")

// Initialize Variables
var score;
var initials;
var secondsRemaining;
var timer;
var questions;
var randIndex;
var outcomeTimer;

function updateHighscores() {
    // Set local storage highscores to temp object and "parse"
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    console.log(`highscores local storage retrieved as: ${highscores}`);

    // only perform if highscore exists
    if (highscores !== null) {
        console.log("we have highscore local storage!")
        // find top 3 scores by looping
        var topThree = [];

        // loop through highscores 3 times
        for (let i = 0; i < 3; i++) {
            // initialize max as -1
            var max = -1;

            // loop for each item
            for (let j = 0; j < highscores.length; j++) {
                // if item score is > max then set as max
                if (highscores[j].score > max) {
                    max = highscores[j].score;
                    var maxIndex = j;
                }
                
            }
            if (max !== -1) {
                
                topThree[i] = {
                    initials: highscores[maxIndex].initials,
                    score: max
                };

            } else {
                topThree[i] = {
                    initials: "N/A",
                    score: "N/A"
                };
            }
            
            // delete item from highscores object 
            highscores.splice(maxIndex, 1);

        }

        console.log("topThree = ", topThree);

        // update "top 3 highscores" elements        
        firstPlace.innerHTML = `1. ${topThree[0].initials} - ${topThree[0].score}`;
        secondPlace.innerHTML = `2. ${topThree[1].initials} - ${topThree[1].score}`;
        thirdPlace.innerHTML = `3. ${topThree[2].initials} - ${topThree[2].score}`;

        // if array index item is null, then set to "N/A"

    }
}


function initializeQuestions() {
    questions = [
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
        },
        {
            question: "What is not considered an arithmetic operator?",
            answers: ["+", "%", "++", "="],
            correctAnswer: "="
        },
        {
            question: "How do you call an object property?",
            answers: ["object/property", "object*property", "object.property", "object>property"],
            correctAnswer: "object.property"
        },
        {
            question: "What events can be used in JavaScript?",
            answers: ["double click", "mouse over", "mouse down", "All of the Above"],
            correctAnswer: "All of the Above"
        },
        {
            question: "How are strings defined?",
            answers: ["x = \"string\"", "x = \'string\'","x = \`string\`", "All of the Above"],
            correctAnswer: "All of the Above"
        },
        {
            question: "How are varibles printed with console.log?",
            answers: ["console.log(\"${variable}\")", "console.log(variable)", "console.log(*variable*)", "console.log(\"variable\")"],
            correctAnswer: "console.log(variable)"
        },
        {
            question: "How are varibles printed in console.log alongside text using tick marks?",
            answers: ["console.log(\`result = $variable\`)", "console.log(\`result = <variable>\`)", "console.log(\`result = \"variable\"\`)", "console.log(\`result = ${variable}\`)"],
            correctAnswer: "console.log(\`result = ${variable}\`)"
        },
        {
            question: "How do you reference the first index of a string?",
            answers: ["string(0)", "string(1)", "string[0]", "string[1]"],
            correctAnswer: "string[0]"
        },
        {
            question: "How would you get the value of Pi in JavaScript?",
            answers: ["Value.PI", "PI", "Math.PI", "none of the above"],
            correctAnswer: "Math.PI"
        },
        {
            question: "How would you generate a random number (0 to 1) in JavaScript?",
            answers: ["Value.Random", "Random()", "Math.random()", "set.random(0, 1)"],
            correctAnswer: "Math.random()"
        },
        {
            question: "How would you round a decimal down to the nearest integer?",
            answers: ["Math.roundDown()", "Math.round(\"down\")", "Math.floor()", "set.number.toNearestInt(\"roundDown\")"],
            correctAnswer: "Math.floor()"
        },
        {
            question: "What is a boolean?",
            answers: ["An error type associated with string methods", "A javascript data type that accepts \"true\" and \"false\"", "A cute animal", "A type of icecream"],
            correctAnswer: "A javascript data type that accepts \"true\" and \"false\""
        },
        {
            question: "What comparison operator checks if the values are equal to each other?",
            answers: ["x > y", "x $ y", "x == y", "x @ y"],
            correctAnswer: "x == y"
        },
        {
            question: "What comparison operator checks if the values are NOT equal to each other?",
            answers: ["x !$ y", "x ~= y", "x !=== y", "not(x == y)"],
            correctAnswer: "x !=== y"
        },
        {
            question: "Which piece of code is used with the \"switch\" statement to indicate the default block of code to run if none of the cases are true?",
            answers: ["default: ", "standard: ", "else: ", "this: "],
            correctAnswer: "default: "
        },
        {
            question: "Which of the following can be an object method?",
            answers: ["object.method", "object(method)", "method(object)", "object.method()"],
            correctAnswer: "object.method()"
        },
        {
            question: "How would you write a function?",
            answers: ["function(){console.log(\"hello!\")}", "function(a, b){return a+b}", "()=>{console.log(\"hello!\")}", "All of the Above"],
            correctAnswer: "All of the Above"
        },
        {
            question: "Which of the following is an integer?",
            answers: ["0.2", "zero", "1", "1/32"],
            correctAnswer: "1"
        }
    ];
}


function startQuiz() {
    score = 0;
    scoreEl.textContent = score;
    finalScoreEl.textContent = score;

    secondsRemaining = 45;
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
    var currentHighscore = {};
    var highscores = [];

    // Add score & initials to local storage
    initials = initialsEl.value;
    currentHighscore.initials = initials;
    currentHighscore.score = score;

    if (localStorage.getItem("highscores")) {
        console.log("Highscores local storage exists...")
        highscores = JSON.parse(localStorage.getItem("highscores"));
    }

    highscores.push(currentHighscore);
    console.log(`highscores object =`, highscores);

    // Set highscores in local storage
    localStorage.setItem("highscores", JSON.stringify(highscores));

    // Change to highscore menu
    changeMenu(highScoreMenuEl);
    updateHighscores();
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

    //Controls "Correct! or Wrong! text timing"
    outcomeTimer = setInterval(function () {

        if (countdown <= 0) {
            resultEl.textContent = "";
            clearInterval(outcomeTimer);
        }
        countdown--;
    }, 1000);

    //remove question from the list
    questions.splice(randIndex, 1);
}

// ------ INIT CALLS ------
updateHighscores();

// ------ EVENT HANDLERS ------
startMenuBtn.addEventListener("click", startQuiz)

optionParentEl.addEventListener("click", function () {
    resultEl.textContent = "";
    clearInterval(outcomeTimer);
    gradeQuestion(event);
    nextQuestion();

});

submitInitialsBtn.addEventListener("click", submitInitials);
initialsEl.addEventListener("submit", function (event) {
    event.preventDefault();
    submitInitials;
})

viewHighscoresEl.addEventListener("click", function () {
    changeMenu(highScoreMenuEl);
})

goBackBtn.addEventListener("click", function () {
    changeMenu(startMenuEl);
})
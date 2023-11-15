var score = 0;
var currentApple = 0;
var questions = [];

var applesClicked = new Array(questions.length).fill(false);

function displayQuestion(appleIndex) {
    var questionContainer = document.getElementById("question");
    questionContainer.innerHTML = questions[appleIndex].question + "<br>" + questions[appleIndex].options.join("<br>");
    displayOptions(appleIndex);
}

function displayOptions(appleIndex) {
    document.getElementById("options").innerHTML = "<button onclick='checkAnswer(\"A\", " + appleIndex + ")'>A</button><button onclick='checkAnswer(\"B\", " + appleIndex + ")'>B</button><button onclick='checkAnswer(\"C\", " + appleIndex + ")'>C</button><button onclick='checkAnswer(\"D\", " + appleIndex + ")'>D</button>";
}

function checkAnswer(answer, appleIndex) {
    if (!applesClicked[appleIndex]) {
        if (answer == questions[appleIndex].answer) {
            score++;
        }
        applesClicked[appleIndex] = true;
        updateScore();
    }
    currentApple++;
    if (currentApple < questions.length) {
        displayQuestion(currentApple);
    } else {
        displayFinalScore();
    }
}

function updateScore() {
    document.getElementById("score").innerHTML = "Score: " + score;
}

function createApples() {
    var apples = document.getElementById("apples");
    for (var i = 0; i < questions.length; i++) {
        var apple = document.createElement("img");
        apple.src = "apple.png"; // Make sure you have an "apple.png" image in the same directory as this HTML file
        apple.alt = "Apple";
        apple.width = "50";
        apple.height = "50";
        apple.style.position = "absolute";
        var x = 100 + Math.random() * 300; // Adjust the coordinates based on your tree size
        var y = 150 + Math.random() * 300;
        apple.style.left = x + "px";
        apple.style.top = y + "px";
        apple.onclick = (function(index) {
            return function() {
                displayQuestion(index);
            };
        })(i);
        apples.appendChild(apple);
    }
}

function displayFinalScore() {
    document.getElementById("question").innerHTML = "Game Over!";
    document.getElementById("options").innerHTML = "Final Score: " + score;
}

// Start the game
createApples();

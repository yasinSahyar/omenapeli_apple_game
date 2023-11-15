let currentQuestion = 0;

function showQuestion(questionNumber) {
    currentQuestion = questionNumber;
    document.querySelector("#question-box h2").textContent = `Question ${questionNumber + 1}`;
    document.querySelector("#question-box p").textContent = getQuestionText(questionNumber);
    document.querySelector("#question-box").classList.remove("hidden");
}

function getQuestionText(questionNumber) {
    // Add more questions here
    const questions = [
        "What color is the sky?",
        "How many continents are there on Earth?",
    ];

    return questions[questionNumber];
}

function answerQuestion(answer) {
    // Handle the user's answer here
    console.log(`User's answer to Question ${currentQuestion + 1}: ${answer}`);
    
    if (currentQuestion < 19) {
        document.querySelector("#question-box").classList.add("hidden");
    } else {
        // If it's the last question, you can calculate the total score or show a summary.
        alert("You've completed the game!");
    }
}

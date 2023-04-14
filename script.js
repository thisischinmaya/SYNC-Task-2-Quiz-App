const questions = [

    {
        question: "What does the abbreviation HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hot Mail", correct: false },
            { text: "How to Make Lasagna", correct: false },
            { text: "Hyper Text Markdown Language", correct: false },
        ]
    },
    {
        question: "Which of the following is used to read an HTML page and render it?",
        answers: [
            { text: "Web Server", correct: false },
            { text: "Web network", correct: false },
            { text: "Web Browser", correct: true },
            { text: "Web Matrix", correct: false },
        ]
    },
    {
        question: "Which of the following tag is used to embed css in html page?",
        answers: [
            { text: " Css ", correct: false },
            { text: " !DOCTYPE html ", correct: false },
            { text: " script ", correct: false },
            { text: " style ", correct: true },

        ]

    },
    {
        question: "Which of the following CSS framework is used to create a responsive design?",
        answers: [
            { text: "django", correct: false },
            { text: "rails", correct: false },
            { text: "bootstrap", correct: true },
            { text: "larawell", correct: false },

        ]
    },
    {
        question: "Which of the following CSS property sets the font size of text?",
        answers: [
            { text: "font-size", correct: true },
            { text: "text-size", correct: false },
            { text: "text", correct: false },
            { text: "size", correct: false },

        ]
    },
    {
        question: "Which of the following CSS property is used to set the background image of an element?",
        answers: [
            { text: "background-attachment", correct: false },
            { text: "background-image", correct: true },
            { text: "background-color", correct: false },
            { text: "None of the Above", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        answers: [
            { text: "a {text-decoration : underline;}", correct: false },
            { text: "a {decoration : no-underline;}", correct: false },
            { text: "a {text-decoration : none;}", correct: true },
            { text: "None of the Above", correct: false },

        ]
    },
    {
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        answers: [
            { text: "padding-left", correct: false },
            { text: "padding-right", correct: false },
            { text: "padding", correct: true },
            { text: "All of the Above", correct: false },

        ]
    },
    {
        question: `How to select the elements with the class name "example"? `,
        answers: [
            { text: "example", correct: false },
            { text: "#example", correct: false },
            { text: "#example", correct: false },
            { text: ".example", correct: true },

        ]
    },
    {
        question: "which of the method is used to get HTML element in javascript?",
        answers: [
            { text: "getElementbyId()", correct: false },
            { text: "getElementsByClassName()", correct: false },
            { text: "None of the above", correct: false },
            { text: "Both a & b", correct: true },

        ]
    }
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

let startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestions();
}

let showQuestions = () => {
    resetAll();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButtons.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

let resetAll = () => {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

let selectAnswer = (e) => {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectBtn.classList.add("correct")
        score++;
    }
    else {
        selectBtn.classList.add("Incorrect")

    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

let showScore = () => {
    resetAll();
    questionElement.innerHTML = `You Score ${score} out of ${questions.length}  !`
    nextButton.innerHTML = `Play Again`
    nextButton.style.display = "block"
}


let handleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions()
    }
    else {
        showScore();
    }
}


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();
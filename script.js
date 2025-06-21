document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button")
    const nextButton = document.getElementById("next-button")
    const restartButton = document.getElementById("restart-button")
    const questionContainer = document.getElementById("question-container")
    const questionText = document.getElementById("question-text")
    const choicesList = document.getElementById("choices-list")
    const resultContainer = document.getElementById("result-container")
    const scoreDisplay = document.getElementById("score")

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "Mars",
        },
        {
            question: "What is 5 × 6?",
            choices: ["30", "20", "25", "45"],
            answer: "30",
        },
        {
            question: "Who wrote Romeo and Juliet?",
            choices: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
            answer: "William Shakespeare",
        },
        {
            question: "Which gas do plant absorb from the atmosphere?",
            choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide",
        },
    ]

    let currentQuestionIndex = 0
    let score = 0

    startButton.addEventListener("click", () => {
        startButton.classList.add("hidden")
        questionContainer.classList.remove("hidden")
        showQuestion()
    })

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++
        if (currentQuestionIndex < questions.length) {
            showQuestion()
        } else {
            showResult()
        }
    })

    restartButton.addEventListener("click", () => {
        currentQuestionIndex = 0
        score = 0
        resultContainer.classList.add("hidden")
        questionContainer.classList.remove("hidden")
        showQuestion()
    })

    function showQuestion() {
        nextButton.classList.add("hidden")
        questionText.textContent = questions[currentQuestionIndex].question
        choicesList.innerHTML = ""
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement("li")
            li.textContent = choice
            li.addEventListener("click", () => {
                selectAnswer(choice)
            })
            choicesList.appendChild(li)
        });
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer
        if (choice === correctAnswer) {
            score++
        }
        nextButton.classList.remove("hidden")
    }

    function showResult() {
        questionContainer.classList.add("hidden")
        resultContainer.classList.remove("hidden")
        scoreDisplay.textContent = `${score}/${questions.length}`
    }
})
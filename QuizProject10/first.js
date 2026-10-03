
const quizData = [
  {
    question: "Which language is used to style a web page?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1,
  },
  {
    question: "Which tag is used to create a link in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1,
  },
  {
    question:
      "Which JavaScript keyword is used to declare a variable with block scope?",
    options: ["var", "let", "const", "define"],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Style Syntax",
      "Colorful Style Setup",
    ],
    answer: 1,
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Home Tool Markup Language",
      "Hyperlink and Text Management Language",
    ],
    answer: 0,
  },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const submitBtn = document.getElementById("submit");
const restartBtn = document.getElementById("restart");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${current.question}`;
  optionsEl.innerHTML = "";
  resultEl.textContent = "";
  scoreEl.textContent = "";
  selectedAnswer = null;
  submitBtn.disabled = false;

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;

    button.addEventListener("click", () => {
      document
        .querySelectorAll(".option-btn")
        .forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedAnswer = index;
    });

    optionsEl.appendChild(button);
  });
}

function showFinalResult() {
  questionEl.textContent = "Quiz Finished!";
  optionsEl.innerHTML = "";
  scoreEl.textContent = `Your score: ${score} / ${quizData.length}`;

  if (score === quizData.length) {
    resultEl.textContent = "Excellent! Perfect score!";
  } else if (score >= Math.ceil(quizData.length / 2)) {
    resultEl.textContent = "Good job! You did well.";
  } else {
    resultEl.textContent = "Keep practicing. You can do better!";
  }

  submitBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

submitBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    resultEl.textContent = "Please select an answer first.";
    return;
  }

  const current = quizData[currentQuestion];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === current.answer) {
      button.classList.add("correct");
    }

    if (index === selectedAnswer && index !== current.answer) {
      button.classList.add("wrong");
    }
  });

  if (selectedAnswer === current.answer) {
    score += 1;
    resultEl.textContent = "Correct!";
  } else {
    resultEl.textContent = `Wrong! Correct answer: ${current.options[current.answer]}`;
  }

  submitBtn.disabled = true;

  setTimeout(() => {
    currentQuestion += 1;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }, 1200);
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  submitBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  loadQuestion();
});

loadQuestion();

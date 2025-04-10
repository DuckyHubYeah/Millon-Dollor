const answeredQuestions = [
  {
    question: "How does the brain store memories?",
    options: [
      "By absorbing sunlight through the skull",
      "Through neurons using chemical and electrical signals",
      "By drinking lots of water",
      "With muscle reflexes"
    ],
    answer: "Through neurons using chemical and electrical signals",
    timer: 30
  },
  {
    question: "What causes déjà vu?",
    options: [
      "Eating too much sugar",
      "A temporary brain glitch making new experiences feel familiar",
      "Seeing into the future",
      "Having a photographic memory"
    ],
    answer: "A temporary brain glitch making new experiences feel familiar",
    timer: 30
  },
  {
    question: "How do plants know where to grow?",
    options: [
      "They can hear music",
      "They follow ants",
      "They use light and gravity sensors",
      "They are controlled by fungi"
    ],
    answer: "They use light and gravity sensors",
    timer: 30
  },
  {
    question: "Why does music affect emotion?",
    options: [
      "It increases blood pressure",
      "It confuses the ears",
      "It stimulates the brain’s reward system and evokes memory",
      "It has secret messages"
    ],
    answer: "It stimulates the brain’s reward system and evokes memory",
    timer: 30
  },
  {
    question: "What is quantum entanglement?",
    options: [
      "A type of magic",
      "Particles linked to each other that affect each other instantly",
      "A tangled ball of energy",
      "Atoms exploding"
    ],
    answer: "Particles linked to each other that affect each other instantly",
    timer: 30
  }
];

let currentQuestionIndex = 0;
let currentTimer = answeredQuestions[currentQuestionIndex].timer;
let timerInterval;
let isPaused = false;

function startTimer() {
  if (isPaused) return;
  timerInterval = setInterval(() => {
    if (isPaused) {
      clearInterval(timerInterval);
      return;
    }
    currentTimer--;
    document.getElementById('timer').textContent = `Time remaining: ${currentTimer}s`;

    if (currentTimer <= 0) {
      clearInterval(timerInterval);
      handleAnswer(null, answeredQuestions[currentQuestionIndex].answer);
    }
  }, 1000);
}

function showNextQuestion() {
  if (currentQuestionIndex < answeredQuestions.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    alert("Game Over! You've completed all questions.");
  }
}

function displayQuestion() {
  const question = answeredQuestions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;
  document.getElementById('options').innerHTML = '';
  document.getElementById('timer').textContent = '';

  question.options.forEach(option => {
    const button = document.createElement('button');
    button.classList.add('option');
    button.textContent = option;
    button.onclick = () => handleAnswer(option, question.answer);
    document.getElementById('options').appendChild(button);
  });

  currentTimer = question.timer;
  startTimer();
}

function handleAnswer(selectedOption, correctAnswer) {
  const allOptions = document.querySelectorAll('.option');
  clearInterval(timerInterval);

  allOptions.forEach(option => {
    option.disabled = true;

    if (option.textContent === correctAnswer) {
      option.classList.add('correct');
      const circle = document.createElement('span');
      circle.classList.add('correct-circle');
      option.appendChild(circle);
    }

    if (selectedOption && option.textContent === selectedOption && selectedOption !== correctAnswer) {
      option.classList.add('incorrect');
    }
  });

  setTimeout(showNextQuestion, 1500);
}

document.getElementById('pauseButton').onclick = () => {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(timerInterval);
    document.getElementById('pauseButton').textContent = "Resume";
  } else {
    startTimer();
    document.getElementById('pauseButton').textContent = "Pause";
  }
};

document.addEventListener('DOMContentLoaded', () => {
  displayQuestion();
});

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Dickens", "Rowling", "Tolkien"],
    answer: "Shakespeare",
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Madrid", "Paris"],
    answer: "Paris",
  },
  {
    question: "Which is the farthest planet from the Sun?",
    options: ["Earth", "Mars", "Neptune", "Saturn"],
    answer: "Neptune",
  },
];

let currentIndex = 0;
let selectedOption = null;
let score = 0;

const queCount = document.querySelector(".queCount");
const que = document.querySelector(".que");
const optionsList = document.querySelector(".optsContainer");
const btn = document.querySelector(".Btn");

function loadQuestion() {
  const currentQue = questions[currentIndex];

  queCount.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
  que.textContent = currentQue.question;

  optionsList.innerHTML = "";

  currentQue.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.className = "optionItem";

    li.addEventListener("click", () => {
      document.querySelectorAll(".optionItem").forEach((el) => {
        el.style.backgroundColor = "#7352a1";
      });

      console.log(li);

      li.style.backgroundColor = "#8465b5";
      selectedOption = option;
    });
    optionsList.append(li);
  });
  if (currentIndex === questions.length - 1) {
    btn.textContent = "Submit";
  } else {
    btn.textContent = "Next";
  }
}
btn.addEventListener("click", () => {
  if (!selectedOption) {
    currentIndex + 1 < questions.length
      ? alert("Please select an option.")
      : alert("Please select an option before submitting.");
    return;
  }
  const correctAnswer = questions[currentIndex].answer;
  if (selectedOption === correctAnswer) {
    score++;
  }

  selectedOption = null;
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.querySelector("main").innerHTML = `
          <h2 style="text-align: center;">You scored ${
            (score * 100) / questions.length
          }% 🔥.</h2>
            <button onclick="window.location.reload()">Reset Quiz</button>
          `;
  }
});

loadQuestion();

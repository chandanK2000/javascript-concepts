let currentSet = 0;
let currentQuestion = 0;
let score = 0;

const questionsDb = [
  {
    setName: "Set 1",
    questions: [
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correctAnswer: "4",
        negativeMarks: 0.25,
      },
      {
        question: "What is 2 - 2?",
        options: ["0", "4", "5", "8"],
        correctAnswer: "0",
        negativeMarks: 0.25,
      },
      {
        question: "What is 2*2?",
        options: ["0", "4", "5", "8"],
        correctAnswer: "4",
        negativeMarks: 0.25,
      },
      {
        question: "What is 82+5?",
        options: ["57", "12", "87", "8"],
        correctAnswer: "87",
        negativeMarks: 0.25,
      },

      {
        question: "What is the purpose of the 'alt' attribute in an image tag?",
        options: [
          "It changes the color of the image.",
          "It creates a border around the image.",
          "It provides alternative text for screen readers.",
          "It tells about the image in the html.",
        ],
        correctAnswer: "It provides alternative text for screen readers.",
        negativeMarks: 0.25,
      },

      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris","italy"],
        correctAnswer: "Paris",
        negativeMarks: 0.25,
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris","punjab"],
        correctAnswer: "Paris",
        negativeMarks: 0.25,
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris","none of these"],
        correctAnswer: "Paris",
        negativeMarks: 0.25,
      },
    ],
  },
  {
    setName: "Set 2",
    questions: [
      {
        question: "What is 3 x 3?",
        options: ["6", "9", "12"],
        correctAnswer: "9",
        negativeMarks: 0.25,
      },
      {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        correctAnswer: "Blue Whale",
        negativeMarks: 0.25,
      },
      // Add more questions for Set 2 as needed
    ],
  },
  {
    setName: "Set 3",
    questions: [
      {
        question: "What is 4 - 2?",
        options: ["1", "2", "3"],
        correctAnswer: "2",
        negativeMarks: 0.25,
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2"],
        correctAnswer: "H2O",
        negativeMarks: 0.25,
      },
      // Add more questions for Set 3 as needed
    ],
  },
];

let userAnswers = new Array(questionsDb[currentSet].questions.length).fill(
  null
);

function switchSet(setNumber) {
  currentSet = setNumber;
  currentQuestion = 0;
  score = 0;
  userAnswers = new Array(questionsDb[currentSet].questions.length).fill(null);
  loadQuestion(currentQuestion);

  // Update the heading with the current set name
  const setHeading = document.querySelector(".set-heading");
  setHeading.textContent = questionsDb[currentSet].setName;

  document.getElementById("set1").disabled = currentSet == 0;
  document.getElementById("set2").disabled = currentSet === 1;
  document.getElementById("set3").disabled = currentSet === 2;
}

function loadQuestion(index) {
  const questionElement = document.querySelector(".question");
  const optionElements = document.querySelectorAll(".answer");

 
  const prevButton = document.querySelector("#prev");
  const totalQuestions = questionsDb[currentSet].questions.length;
  
  

  questionElement.textContent = `(${index + 1})- ${
    questionsDb[currentSet].questions[index].question
  }`;

  const options = questionsDb[currentSet].questions[index].options;

  for (let i = 0; i < options.length; i++) {
    optionElements[i].nextElementSibling.textContent = options[i];
    optionElements[i].checked = false;
    optionElements[i].style.display = "block";
  }

  for (let i = options.length; i < optionElements.length; i++) {
    optionElements[i].style.display = "none";
  }

  if (index === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  const progressBar = document.getElementById("progress-bar");
  const progresstext = document.getElementById("progresstext");

  const progress = ((index + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
  progresstext.textContent = `${Math.round(progress)}%`;

  const userPreviousAnswer = userAnswers[index];
  if (userPreviousAnswer) {
    for (let i = 0; i < options.length; i++) {
      if (options[i] === userPreviousAnswer) {
        optionElements[i].checked = true;
      }
    }
  }
}



document.addEventListener("DOMContentLoaded", function () {
  switchSet(0); // This will load Set 1 by default
});

document.getElementById("set2").addEventListener("click", () => {
  switchSet(1);
});

document.getElementById("set3").addEventListener("click", () => {
  switchSet(2);
});

document.getElementById("next").addEventListener("click", () => {
  const selectedOption = document.querySelector(".answer:checked");

  if (selectedOption) {
    const userAnswer = selectedOption.nextElementSibling.textContent;
    const correctAnswer =
      questionsDb[currentSet].questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
      score++;
    }

    userAnswers[currentQuestion] = userAnswer;
  }
  // showRandomQuestion(currentSet);

  currentQuestion++;

  if (currentQuestion < questionsDb[currentSet].questions.length) {
    loadQuestion(currentQuestion);
  } else {
    // No more questions, handle accordingly
  }
});

document.getElementById("prev").addEventListener("click", () => {
  const selectedOption = document.querySelector(".answer:checked");

  if (selectedOption) {
    const userAnswer = selectedOption.nextElementSibling.textContent;
    const correctAnswer =
      questionsDb[currentSet].questions[currentQuestion].correctAnswer;

    if (userAnswer === correctAnswer) {
      score++;
    }

    userAnswers[currentQuestion] = userAnswer;
  }

  currentQuestion--;

  if (currentQuestion >= 0) {
    loadQuestion(currentQuestion);
  } else {
    currentQuestion = 0;
  }
});

function handleSubmit() {
  // alert("your test is submitted");
  swal(
    "Quiz Submitted!",
    "Your Quiz has been submitted successfully.",
    "success"
  );

  showScore();

  document.getElementById("next").disabled = true;
  document.getElementById("submit").disabled = true;
  document.getElementById("prev").disabled = true;
  document.querySelector(".inner_div").style.display = "none";
  document.getElementById("closebutton").style.display = "block";
  document.getElementById("viewanswers").style.display = "block";
  document.getElementById("playagain").style.display = "block";
  document.getElementById("calculates").style.display = "block";
}

document.getElementById("submit").addEventListener("click", handleSubmit);

function showScore() {
  const scoreElement = document.querySelector(".details");
  scoreElement.textContent = `You got ${score.toFixed(2)} out of ${
    questionsDb[currentSet].questions.length
  } questions correct!`;

  const totalIncorrectAnswers = userAnswers.filter(
    (answer, index) =>
      answer !== null &&
      answer !== questionsDb[currentSet].questions[index].correctAnswer
  ).length;

  const attemptedQuestions = userAnswers.filter(
    answer => answer !== null
  ).length;
  const totalQuestions = questionsDb[currentSet].questions.length;
  const correctAnswers = score;

  const negativeMarks = totalIncorrectAnswers * 0.25;
  const finalScore = score - negativeMarks;

  const resultDetails = document.createElement("div");
  resultDetails.innerHTML = `
    <p>Total Questions: ${totalQuestions}</p>
    <hr/>
    <p>Attempted Questions: ${attemptedQuestions}</p>
    <hr/>
    <p>Correct Answers: ${correctAnswers}</p>
    <hr/>
    <p>Incorrect Answers: ${totalIncorrectAnswers}</p>
    <hr/>
    <p>Negative Marks: ${negativeMarks}</p>
    <hr/>
    <p>Final Score: ${finalScore}</p>
    <hr/>
  `;

  const percentage = (finalScore * 100) / totalQuestions;
  if (percentage >= 60 && percentage <= 100) {
    resultDetails.innerHTML +=
      "<p>Congratulations! You got marks excellent!</p>";
  } else if (percentage >= 45 && percentage <= 60) {
    resultDetails.innerHTML += "<p>you got marks average %</p>";
  } else {
    resultDetails.innerHTML +=
      "<p>sorry you have failed the quiz ! keep patience and work hard</p><hr/>";
  }

  scoreElement.appendChild(resultDetails);

  document.getElementById("showscore").style.display = "block";
}

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  let timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      handleSubmit();

      clearInterval(timerInterval);
    }
  }, 1000);
}

let timeRemaining = 60;
let display = document.querySelector("#time");
startTimer(timeRemaining, display);

document.getElementById("instructions").addEventListener("click", function () {
  const modal = document.getElementById("modal");
  modal.style.display = "block";

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

document.getElementById("playagain").addEventListener("click", () => {
  window.location.reload();
});
function viewAnswers() {
  const data = {
    questions: questionsDb[currentSet].questions,
    userAnswers: userAnswers,
  };

  localStorage.setItem("quizData", JSON.stringify(data));
  window.location.href = "view_answers.html";
  // document.getElementById("playagain").style.display = "block";
}




// randomindex number

 /*  function showRandomQuestion(setNumber) {
  const randomIndex = Math.floor(
    Math.random() * questionsDb[setNumber].questions.length
  );

  // Retrieve the random question from the specified set
  const randomQuestion = questionsDb[setNumber].questions[randomIndex].question;

  console.log(randomQuestion);
  
  const questionElement = document.querySelector(".question");
  questionElement.textContent = randomQuestion;
}   */



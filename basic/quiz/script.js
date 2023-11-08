const quizdb = [
  {
    question: "Q1: what is the full form of css ?",
    a: "Cascading Style Sheet",
    b: "Cascading Script Sheet",
    c: "Caecar Style Sheet",
    d: "none of these",
    ans: "ans1",
  },
  {
    question: "Q2: what is the full form of html ?",
    a: "hello to my world",
    b: "javascript and xhtml",
    c: "hyper text markup language",
    d: "none of these",
    ans: "ans3",
  },
  {
    question: "Q3: what is the full form of HTTP? ?",
    a: "Hypertext transfer protocol",
    b: "Hypertext test protocol",
    c: "Hey transfer protocol",
    d: "HYperText Transfer protocol",
    ans: "ans4",
  },
  {
    question: "Q4: who is the father of javascript ?",
    a: "Brendan Eich",
    b: "utkarsh",
    c: "chandan",
    d: "jonarde",
    ans: "ans1",
  },
  {
    question: "Q5:JSON stands for _______. ?",
    a: "JavaScript Object Notation",
    b: "Java Object Notation",
    c: "JavaScript Object Normalization",
    d: "JavaScript Object-Oriented Notation",
    ans: "ans1",
  },

  {
    question: "Q6: The JSON syntax is a subset of the _____ syntax.?",
    a: "Ajax",
    b: "Php",
    c: "HTML",
    d: "JavaScript",
    ans: "ans4",
  },
  {
    question: "Q7: Who is the creator of JSON?",
    a: "Alvin Alexander",
    b: "Rasmus Lerdorf",
    c: "Douglas Crockford",
    d: "Jesse James Garrett",
    ans: "ans3",
  },
  {
    question: "Q8: In the JSON syntax, data is separated by _____.?",
    a: "Semicolons",
    b: "Colons",
    c: "Commas",
    d: "Hyper",
    ans: "ans3",
  },
  {
    question: "Q9:  Which is not a JSON data type? _____.?",
    a: "number",
    b: "string",
    c: "array",
    d: "date",
    ans: "ans4",
  },
  {
    question: "Q10:What is the file type for JSON files.?",
    a: " .jsn",
    b: ".js",
    c: ".json",
    d: "jso",
    ans: "ans3",
  },
  {
    question: "Q11:father of nation?",
    a: "mahatma gandhi",
    b: "utkarsh babu",
    c: "rajender prasad",
    d: "anwar",
    ans: "ans1",
  },
  {
    question: "Q12:who is the father of c?",
    a: "denish ritchie",
    b: "willam shekspeare",
    c: "albert ienstin",
    d: "James gosling",
    ans: "ans1",
  },
  {
    question: "Q12:who is the father of Java?",
    a: "denish ritchie",
    b: "willam shekspeare",
    c: "albert ienstin",
    d: "James gosling",
    ans: "ans4",
  },
];

const questions = document.querySelector(".question");

const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showscore = document.querySelector("#showscore");

const scorearea = document.querySelector(".scorearea");

const details = document.querySelector(".details");

var questioncount = 0;

let score = 0;

const loadQuestions = () => {
//   console.log(quizdb);
//   console.log(quizdb[0].question);
  const questionlist = quizdb[questioncount];

//   console.log(questionlist);
  questions.innerHTML = questionlist.question;

  option1.innerHTML = questionlist.a;
  option2.innerHTML = questionlist.b;

  option3.innerHTML = questionlist.c;
  option4.innerHTML = questionlist.d;
  //   answers.forEach(currentElement => {
  //     currentElement.checked = false; // Ensure no option is selected by default
  //   });
};
loadQuestions();

const getcheckanswer = () => {
  let answer;

  answers.forEach(currentElement => {
    if (currentElement.checked) {
      answer = currentElement.id;
    }
    // console.log(answer);
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedaanswer = getcheckanswer();
  console.log(checkedaanswer);

  if (checkedaanswer == quizdb[questioncount].ans) {
    score++;
  }

  questioncount++;
  if (questioncount < quizdb.length) {
    loadQuestions();
  } else {
    showscore.innerHTML = `
        <h3>Your Scored is ${score}/${quizdb.length} <br/>
            
        </h3>
        <button class='btn' onclick='location.reload()'>play Again</button>
        
        
        `;
    scorearea.classList.remove("scorearea");
  }
});

// function nextQuestion() {
//   if (questioncount < quizdb.length - 1) {
//     questioncount++;
//     loadQuestions();
//   }
// }

// function previousQuestion() {
//   if (questioncount > 0) {
//     questioncount--;
//     loadQuestions();
//   }
// }
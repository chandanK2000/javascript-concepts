const welcomeView = document.getElementById("welcomeView");
const quizView = document.getElementById("quizView");

const startQuizBtn = document.getElementById("startQuizBtn");

startQuizBtn.addEventListener("click", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    // User is not logged in, show the login modal
    $("#loginModal").modal("show");
  } else {
    window.location.href = "quiz/quiz.html";
    // alert("lfklskjfd");
  }
});

const loginFromRegisterLink = document.getElementById("loginFromRegister");
loginFromRegisterLink.addEventListener("click", function (e) {
  e.preventDefault();

  $("#registerModal").modal("hide");
  $("#loginModal").modal("show");
});

// for the scroll button up

/* let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 */
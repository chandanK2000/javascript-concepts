const loginForm = document.querySelector("#loginForm");
const loginEmailInput = document.querySelector("#loginEmail");
const loginPasswordInput = document.querySelector("#loginPassword");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get the user's login data
  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  // Retrieve the user array from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];



  // Check if the user exists and the entered email and password match
  const user = users.find(u => u.email === email && u.password === password);

if (user !== undefined) {
  // Login successful
  // alert("Login successful! Redirecting to the app...");
    swal(
      "login Submitted!",
      "Your login has been submitted successfully.",
      "success"
    );
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userName", user.name); // Set the user's name
  location.reload(); // Refresh the page to update the UI


  // Redirect the user to the main app page or display the appropriate content
} 
 else {
    // alert("Invalid email or password. Please try again.");
        swal(
          "Invalid Credentials",
          "Please try again with correct email and password.",
          "error"
        );

  }

  // Clear the login form
  loginForm.reset();
});



//after close the windows its should be logout automaticlaly

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    // The user is logged in, perform any necessary actions
  } else {
    // The user is not logged in, perform any necessary actions (e.g., redirect to login page)
  }
}


window.addEventListener("load", checkLoginStatus);



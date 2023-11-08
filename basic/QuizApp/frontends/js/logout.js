const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const userName = localStorage.getItem("userName");


// Check if the username is set
if (userName) {
  // The username is set in local storage
  console.log("Username is set:", userName);
} else {
  // The username is not set in local storage
  console.log("Username is not set");
}


const userNameLink = document.getElementById("userNameLink");
const logoutLink = document.getElementById("logoutLink");
const loginLink = document.getElementById("loginLink");

// Initialize the UI based on login status
if (isLoggedIn) {
  userNameLink.textContent = userName; // Display the user's name
  userNameLink.style.display = "block"; // Show the user's name
  logoutLink.style.display = "block"; // Show the logout button
  loginLink.style.display = "none"; // Hide the login button
} else {
  userNameLink.style.display = "none";
  logoutLink.style.display = "none";
  loginLink.style.display = "block"; // Show the login button
}

logoutLink.addEventListener("click", function () {
  localStorage.setItem("isLoggedIn", "false"); // Set isLoggedIn to false
  localStorage.removeItem("user");

  logoutLink.style.display = "none";
  loginLink.style.display = "block";

  userNameLink.textContent = "";
    // window.location.href = "../index.html";
    window.location.href =
      "file:///C:/Users/Admin/Documents/javascript%20programs/basic/QuizApp/frontends/index.html";



});


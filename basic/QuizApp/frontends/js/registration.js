// Select the registration form elements
const registerForm = document.querySelector("#registerForm");
const registerNameInput = document.querySelector("#registerName");
const registerEmailInput = document.querySelector("#registerEmail");
const registerPasswordInput = document.querySelector("#registerPassword");

// Add an event listener for form submission
registerForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Get the user's registration data
  const name = registerNameInput.value;
  const email = registerEmailInput.value;
  const password = registerPasswordInput.value;

  // Retrieve the user array from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email is already registered
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert("Email already registered. Please use another email.");
    return; // Do not proceed with registration
  }

  // Register the user
  const newUser = { name, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Clear the registration form
  registerForm.reset();

  // Show a success message to the user
  // alert(
  //   "Registration successful! You will now be redirected to the login modal."
  // );

  // Close the registration modal
  $("#registerModal").modal("hide");

  // Show the login modal
  $("#loginModal").modal("show");
});

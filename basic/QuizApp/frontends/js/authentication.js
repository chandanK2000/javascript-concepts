function login(username) {
  localStorage.setItem("loggedInUser", username);
}

function logout() {
  localStorage.removeItem("loggedInUser");
}

function isLoggedIn() {
  return !!localStorage.getItem("loggedInUser");
}

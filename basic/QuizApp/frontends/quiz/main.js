/* // main.js

// An array of subject names
const subjects = ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap"];

// Function to create subject buttons dynamically
function createSubjectButtons() {
  const subjectList = document.getElementById("subjectList");

  subjects.forEach(subject => {
    const button = document.createElement("button");
    button.textContent = subject;
    button.classList.add("btn", "btn-primary", "m-2");

    // Add an event listener to handle button clicks
    button.addEventListener("click", () => {
      // Redirect to the quiz page for the selected subject
      window.location.href = `quiz/${subject.toLowerCase()}/index.html`;
    }); 

    subjectList.appendChild(button);
  });
}

// Call the function to create subject buttons
createSubjectButtons();
 */
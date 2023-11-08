// JavaScript code to toggle the table visibility
const table = document.getElementById("studentTable");
const toggleButton = document.getElementById("toggleTableButton");
let tableVisible = true;

function toggleTable() {
  var table = document.getElementById("studentTable");
  if (table.style.display === "none" || table.style.display === "") {
    // Gradually show the table with a smooth transition
    table.style.transition = "display 0.5s"; // Adjust the transition duration as needed
    table.style.display = "table";
  } else {
    // Gradually hide the table with a smooth transition
    table.style.transition = "display 0.5s"; // Adjust the transition duration as needed
    table.style.display = "none";
  }
}


const editIndexInput = document.getElementById("editIndex");

function saveDetails() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let address = document.getElementById("address").value;

  

  // Validate the name field
  if (name.trim() === "") {
    // Display an error message or take any other appropriate action
    swal("Name cannot be empty!");
    return; // Exit the function if the name is empty
  }

  const newStudent = {
    name: name,
    email: email,
    address: address,
    dob: dob,
    password: password,
  };

  studentDetails.push(newStudent);
  getproduct();
  swal(name + " Save successfully", "Success");

  console.log(studentDetails);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("address").value = "";
   document.getElementById(
     "totallength"
   ).innerHTML = `Total Length is :-${studentDetails.length}`;
 
}


const getproduct = () => {
  let data = "";
    let found = false; 
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();

  studentDetails.forEach((studentinfo, index) => {
    if (
      studentinfo.name.toLowerCase().includes(searchInput) ||
      studentinfo.email.toLowerCase().includes(searchInput) ||
      studentinfo.dob.toLowerCase().includes(searchInput) ||
      studentinfo.address.toLowerCase().includes(searchInput)
    ) {
      data += "<tr>";
      data += "<td>" + index + "</td>";
      data +=
        "<td><a href='#' onclick='openStudentDetails(\"" +
        studentinfo.name +
        '", "' +
        studentinfo.email +
        '", "' +
        studentinfo.address +
        '", "' +
        studentinfo.dob +
        '", "' +
        studentinfo.password +
        "\")'>" +
        studentinfo.name +
        "</a></td>";

      data += "<td>" + studentinfo.email + "</td>";
      data += "<td>" + studentinfo.dob + "</td>";
      data += "<td>" + studentinfo.password + "</td>";
      data += "<td>" + studentinfo.address + "</td>";
      data +=
        "<td><button class='btn btn-info btn-sm' onclick='editStudent(" +
        index +
        ")'>Edit</button></td>";
      data +=
        "<td><button   class='btn btn-warning btn-sm' onclick='deleteStudent(" +
        index +
        ")'>Delete</button></td>";

      data +=
        "<td><button class='btn btn-primary btn-sm' onclick='downloadStudentDetails(" +
        index +
        ")'>Download</button></td>";

      data += "</tr>";
        // let found = false; 
    }
  });
 

  document.getElementById("tabledata").innerHTML = data;
    const notFoundMessage = document.getElementById("notFoundMessage");

    // Display or hide the Not Found message based on search results
    if (data === "") {
      notFoundMessage.style.display = "block"; // Show the message
    } else {
      notFoundMessage.style.display = "none"; // Hide the message
    }

};

const searchInputField = document.getElementById("searchInput");
searchInputField.addEventListener("input", getproduct);

function editStudent(index) {
  const student = studentDetails[index];
  document.getElementById("name").value = student.name;
  document.getElementById("email").value = student.email;
  document.getElementById("password").value = student.password;
  document.getElementById("dob").value = student.dob;
  document.getElementById("address").value = student.address;
  editIndexInput.value = index;
}

// this is for the editing functionality
function saveEdit() {
  const index = editIndexInput.value;
  if (index !== "") {
    studentDetails[index].name = document.getElementById("name").value;
    studentDetails[index].email = document.getElementById("email").value;
    studentDetails[index].password = document.getElementById("password").value;
    studentDetails[index].dob = document.getElementById("dob").value;
    studentDetails[index].address = document.getElementById("address").value;
    getproduct();
    clearForm();
    swal(" Edit successfully", "Success");
  }
}

// this is for clearing the form
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("address").value = "";
  editIndexInput.value = "";
}

// this is for deleting students
function deleteStudent(index) {
  studentDetails.splice(index, 1);
  getproduct();
  swal("deleted successfully", "Success");
}

// this is for the details of the students

function openStudentDetails(name, email, address, dob, password) {
  console.log("Opening details for student: " + name);
  const url = `student_details.html?name=${encodeURIComponent(
    name
  )}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(
    address
  )}&dob=${encodeURIComponent(dob)}&password=${encodeURIComponent(password)}`;
  window.open(url, "_blank");
}

// this is for the download

function downloadStudentDetails(index) {
  const student = studentDetails[index];

  // Create a text string containing the student details
  const studentDetailsText = `
Name: ${student.name}
Email: ${student.email}
Address: ${student.address}
Date of Birth: ${student.dob}
Password: ${student.password}
    `;

  // Set the text in the hidden textarea
  const downloadTextArea = document.getElementById("downloadTextArea");
  downloadTextArea.value = studentDetailsText;

  // Create a Blob from the textarea content
  const blob = new Blob([downloadTextArea.value], { type: "text/plain" });

  // Create a URL for the Blob
  const url = window.URL.createObjectURL(blob);

  // Create a temporary anchor element for downloading
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = `${student.name}_details.txt`; // Set the filename

  // Trigger a click event on the anchor element to initiate the download
  document.body.appendChild(a);
  a.click();

  // Clean up
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}

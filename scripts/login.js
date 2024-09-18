// Get form element by id
const registerForm = document.querySelector("#login");
// handle form submit event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // collect form data
  const formdata = new FormData(registerForm);
  // send data to backend
  // display success message
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Login Suceessful!";
});

// write fullName function
function fullName(firstName, lastName) {
  // return firstName + lastName;
  return `${firstName} ${lastName}`;
}

const myName = fullName("Joyce", "Inkoom");
console.log(myName);

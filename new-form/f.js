let form = document.createElement("form");

// Create form inputs
let inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "userName";
inputName.placeholder = "Name";

let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "userEmail";
inputEmail.placeholder = "Email";

// Create submit button
let buttonSubmit = document.createElement("input");
buttonSubmit.type = "submit";
buttonSubmit.value = "Submit";

// Add elements to form
form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(buttonSubmit);

// Append form to the DOM
document.body.appendChild(form);

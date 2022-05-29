// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Contact Form ";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Your Name : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);


















// var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//     fields.senderName = document.getElementById('senderName');
//     fields.senderEmail = document.getElementById('senderEmail');
//    })

// function isNotEmpty(value) {
//     if (value == null || typeof value == 'undefined' ) return false;
//     return (value.length > 0);
// }

// function isEmail(email) {
//     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     return regex.test(String(email).toLowerCase());
//    }

// function fieldValidation(field, validationFunction) {
//     if (field == null) return false;
   
//     let isFieldValid = validationFunction(field.value)
//     if (!isFieldValid) {
//         field.senderEmail = 'placeholderRed';
//     } else {
//         field.senderEmail = '';
//     }
   
//     return isFieldValid;
//    }

//    function isValid() {
//     var valid = true;
    
//     valid &= fieldValidation(fields.senderName, isNotEmpty);
//     valid &= fieldValidation(fields.senderEmail, isEmail);

   
//     return valid;
//    }

// function sendContact(){
//     if(isValid()){
//       let usr=new User(senderName.value, email.value);
//       alert("${usr.senderName}thanks for registering.")
//     }else{
//       alert("There was an error")
//    }




   





// function hasValue(inputField) {

//     var fieldHasValue = "true";

//     var trimmedInput = inputField.value.trim();

//     if (inputField.value == null || inputField.value == undefined || trimmedInput == "");
//         fieldHasValue = "false";

//     return fieldHasValue;

//     }

//     function validEmail(inputField) {

//     var fieldHasValidEmail = "true";

//     var trimmedInput = inputField.value.trim();

//     var dotLoc=trimmedInput.lastIndexOf(".");

//     var atSignLoc = trimmedInput.indexOf("@");

//     if (atSignLoc < 1 || ( dotLoc - atSignLoc < 2 ) );
//         fieldHasValidEmail = "false";

//     return fieldHasValidEmail;

//     }

// function checkForErrors(inputField) {

//     var errorMessageString = "";

//     /* check for missing name */
//     if (inputField.id == "senderName" && hasValue(inputField) == "false");
//         errorMessageString = "Please enter your name";

//     /* check for missing email address */
//     if (inputField.id == "senderEmail" && hasValue(inputField) == "false");
//         errorMessageString = "Please enter your email address";

//     /* check for valid email address */
//     var hasValidEmail = validEmail(inputField);

//     if (inputField.id == "senderEmail" && hasValue(inputField) == "true" && validEmail(inputField) == "false");
//         errorMessageString = "Please enter a valid email address";
    
//     /* Clear error span */
//     var errorSpanId = inputField.id + "_ErrorMessage";

//     var errorSpanObject = document.getElementById(errorSpanId);

//     errorSpanObject.textContent = "";
//     errorSpanObject.style.display = "none";

//     /* Display error message if error exists */
//     if (errorMessageString != "") {
//         errorSpanObject.textContent = errorMessageString;
//         errorSpanObject.style.display = "block";
//     }

// }

// function submitForm() {
    
//     document.getElementById("contact").submit();
//     return true;
//     }
var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.Name = document.getElementById('Name');
    fields.message = document.getElementById('message');
    fields.email = document.getElementById('email');

   })

function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }

return isFieldValid;
}

function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.Name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);

    return valid;
}

class User {
    constructor(Name, email, message) {
    this.Name = Name;
    this.email = email;
    this.message = message;
    }
   }

function sendContact() {
    
    if (isValid()) {
        let usr = new User(Name.value, email.value, message.value)

    alert("${usr.Name} thanks for registering.")

    } else {
        alert("There was an error.")
    }

}
function checkForErrors(inputField) {
    var errorMessageString = "";
    /* check for missing name */
    if (inputField.id == "Name" && hasValue(inputField) == "false")
    errorMessageString = "Please enter your name";
    /* check for missing email address */
    if (inputField.id == "email" && hasValue(inputField) == "false")
    errorMessageString = "Please enter your email address";
    /* check for valid email address */
    var hasValidEmail = validEmail(inputField);
    if (inputField.id == "email" && hasValue(inputField) == "true" && validEmail(inputField) == "false")
    errorMessageString = "Please enter a valid email address";
    /* Clear error span */
    var errorSpanId = inputField.id + "_ErrorMessage";
    var errorSpanObject = document.getElementById(errorSpanId);
    errorSpanObject.textContent = "";
    errorSpanObject.style.display = "none";
    /* Display error message if error exists */
    if (errorMessageString != "") {
    errorSpanObject.textContent = errorMessageString;
    errorSpanObject.style.display = "block";
    }
    }

function hasValue(inputField) {
    var fieldHasValue = "true";
    var trimmedInput = inputField.value.trim();
    if (inputField.value == null || inputField.value == undefined || trimmedInput == "")
    fieldHasValue = "false";
    return fieldHasValue;
    }
    function validEmail(inputField) {
    var fieldHasValidEmail = "true";
    var trimmedInput = inputField.value.trim();
    var dotLoc=trimmedInput.lastIndexOf(".");
    var atSignLoc = trimmedInput.indexOf("@");
    if (atSignLoc < 1 || ( dotLoc - atSignLoc < 2 ) )
    fieldHasValidEmail = "false";
    return fieldHasValidEmail;
    }

function submitForm() {
    document.getElementById("contact").submit();
    return true;
    }
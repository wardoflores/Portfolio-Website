<script lang='ts'>
    // Fetching HTML Elements in Variables by ID.
// var x:String = document.getElementById("form_sample");
// var createform = document.createElement('form'); // Create New Element Form
// createform.setAttribute("action", ""); // Setting Action Attribute on Form
// createform.setAttribute("method", "post"); // Setting Method Attribute on Form
// x.appendChild(createform);

// var heading = document.createElement('h2'); // Heading of Form
// heading.innerHTML = "Contact Form ";
// createform.appendChild(heading);

// var line = document.createElement('hr'); // Giving Horizontal Row After Heading
// createform.appendChild(line);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var namelabel = document.createElement('label'); // Create Label for Name Field
// namelabel.innerHTML = "Your Name : "; // Set Field Labels
// createform.appendChild(namelabel);

// var inputelement = document.createElement('input'); // Create Input Field for Name
// inputelement.setAttribute("type", "text");
// inputelement.setAttribute("name", "dname");
// createform.appendChild(inputelement);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var emaillabel = document.createElement('label'); // Create Label for E-mail Field
// emaillabel.innerHTML = "Your Email : ";
// createform.appendChild(emaillabel);

// var emailelement = document.createElement('input'); // Create Input Field for E-mail
// emailelement.setAttribute("type", "text");
// emailelement.setAttribute("name", "demail");
// createform.appendChild(emailelement);

// var emailbreak = document.createElement('br');
// createform.appendChild(emailbreak);

// var messagelabel = document.createElement('label'); // Append Textarea
// messagelabel.innerHTML = "Your Message : ";
// createform.appendChild(messagelabel);

// var texareaelement = document.createElement('textarea');
// texareaelement.setAttribute("name", "dmessage");
// createform.appendChild(texareaelement);

// var messagebreak = document.createElement('br');
// createform.appendChild(messagebreak);

// var submitelement = document.createElement('input'); // Append Submit Button
// submitelement.setAttribute("type", "submit");
// submitelement.setAttribute("name", "dsubmit");
// submitelement.setAttribute("value", "Submit");
// createform.appendChild(submitelement);

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
</script>

<div class="container">
    
    <label class="hide" for="contact">&nbsp;</label>

    <form 
    class="inputField" 
    method="POST" 
    action="https://mailto:eduardojoeyflores@gmail.com" 
    target="_top">
    
    <!--  onsubmit="return false" -->

        <label for="Name" class="noselect">Name</label> 

        <br>

        <input 
        type="text"  
        id="senderName" 
        class="contactforms" 
        required/>  <!--onblur="checkForErrors(this)"-->
        
        <span id="Name_ErrorMessage" class="errorMessage"> </span>
        
        <br>
        
        <label for="email" class="noselect">E-mail</label> 
        
        <br>
        
        <input 
        type="email" 
        id="senderEmail" 
        class="contactforms" 
        required /> <!--onblur="checkForErrors(this)"-->
        
        <span id="email_ErrorMessage" class="errorMessage"> </span>
       
        <br>
        
        <label for="message" class="noselect">Message</label> 
        
        <br>
        
        <textarea 
        id="message" 
        class="contactforms" 
        maxlength="128"
        style="background-color:rgba(35, 43, 50, 0.4);"
        required ></textarea> <br>
        
        <br>
        
        <label class="hide" for="submit">&nbsp;</label>
        
        <input 
        type="submit" 
        id="submit" 
        class="ripple" 
        value="submit" 
        required /> <!-- onClick="submitForm()" -->
    
    </form>

</div>

<style>

input {
    align-items: center;
    justify-content: center;
    text-align: center;
}

.container {
    justify-content:center;
    align-items:center;
    place-items: center;
}

form { 
margin: 0 auto; 
width:250px;
}

    /* .inputField {
    margin-top: 0px;

} */

/* .contactforms { */
    /* color: #C8C3BC; */
    /* background-color:  */
    /* offset-x offset-y blur-radius spread-radius color */ /* 0 8px 8px 0 for raised */
    /* box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
} */
/* 
.errorMessage {
    color: #CF6679; display:none;

} */
/* 
label {
    float:left;
    font-size:16px

} */

/* input {
    align-items: center;
    justify-content: center;
    text-align: center; */
    /* width:50%; */
    /* height:35px; */
    /* margin-top: 5%;
    margin-bottom: 5%;
    padding:2.5%;
    border:1.5px solid #03DAC6;
    background-color:rgba(35, 43, 50, 0.4); /* 4th Layer */
/* }  */

/* #A03DC6 */
/*     
textarea {
    width:75%;
    border:1.5px solid #03DAC6;
    height:100px;
    resize:none;

}

input[type="submit"]{


} */

/* @media only screen and (max-width: 480px) {

    #Contactdiv {
        justify-content:center;
        align-items:center;
        padding: 1%;
        margin: auto;
        
    }

    .contactforms {
        border-radius: 9px;
        padding: 1%;
        place-items: center;
        word-spacing: 1%;
        
    }    

} */

/* @media only screen and (min-width: 481px) { */

    /* #Contactdiv {
        justify-content:center;
        align-items:center;
        padding: 1%; */
        /* offset-x offset-y blur-radius spread-radius color */ /* 0 2px 2px 0 for resting */
        /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
        border-radius: 24px;
        margin-top: 5%;
        margin-right: 25%;
        margin-bottom: 5%;
        margin-left: 25%;
        
    } */

    /* .contactforms {
        border-radius: 9px;
        padding: 1%;
        place-items: center;
        word-spacing: 1%;
        
    }
    
} */

/* button */

/* #submit {
    /* background */
    /* background-color: rgb(122, 166, 212, .6); 4th Layer */
    /* color: #fff; */
    /* offset-x offset-y blur-radius spread-radius color */ /* 0 2px 2px 0 for resting */
    /* box-shadow: 0 2px 2px 0 rgba(38, 50, 56, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); */
    /* border-style: outset; */
    /* border-color: rgb(122, 166, 212, 1);
    height: 50px;
    width: 100px;
    text-shadow: none;
    margin-top: -30px;
    position: relative;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    -webkit-transition: background 400ms;
    transition: background 400ms; */

/* } */ 

/* #submit:hover {
    /* background */
    /* background-color: rgb(122, 166, 212, .4); /* 4th Layer */
    /* offset-x offset-y blur-radius spread-radius color */ /* 0 8px 8px 0 for raised */
    /* box-shadow: 0 8px 8px 0 rgba(38, 50, 56, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    transition-duration: 0.2s; */
/* } */ 

/* #submit:active {
    /* offset-x offset-y blur-radius spread-radius color */ /* 0 2px 2px 0 for resting */
    /* box-shadow: 0 2px 2px 0 rgba(38, 50, 56, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    transform: translateY(4px);
    transition-duration: .1s; */
/* }  */

/* .ripple {
    background-position: center;
    -webkit-transition: background 0.8s;
    transition: background 0.8s;
  } */
/* .ripple:hover {
    background: rgb(122, 166, 212, .4) radial-gradient(circle, transparent 1%, rgb(122, 166, 212, .4) 1%) center/15000%;
} */
/* .ripple:active {
    background-color: #cfb2f9;
    background-size: 100%;
    -webkit-transition: background 0s;
    transition: background 0s;
} */

/* .button {
    background-color: lightcoral;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    color: #C8C3BC;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    padding: 15px 32px;
    font-size: 16px;
    width: 50%;
    border-radius: 6px;

    offset-x offset-y blur-radius spread-radius color 
    0 2px 2px 0 for resting

}

.button:active {
    background-color: lightcoral;
    box-shadow: 0 5px #999;
    transform: translateY(4px);
    transition-duration: 1s;

}

.button:hover {
    color: #C8C3BC;
    background-color: lightcoral;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
    transition-duration: 0.2s;

    /* offset-x offset-y blur-radius spread-radius color */ /* 0 8px 8px 0 for raised 

} */

</style>
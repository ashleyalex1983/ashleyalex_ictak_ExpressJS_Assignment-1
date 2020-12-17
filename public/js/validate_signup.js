const form          = document.getElementById("form");
const firstname     = document.getElementById("first-name");
const lastname      = document.getElementById("last-name");
const email         = document.getElementById("email");
const username      = document.getElementById("username");
const password      = document.getElementById("password");
const password2     = document.getElementById("password2");

// let show = document.querySelector(".show-pass");

let passwordStrength = document.getElementById("password-strength");
let lowerUpperCase = document.querySelector(".low-upper-case");
let number = document.querySelector(".one-number");
let specialChar = document.querySelector(".one-special-char");
let eightChar = document.querySelector(".eight-character");

// let lowerUpperCase = document.querySelector(".low-upper-case i");
// let number = document.querySelector(".one-number i");
// let specialChar = document.querySelector(".one-special-char i");
// let eightChar = document.querySelector(".eight-character i");

console.log('hi');

//Event Listener for validating inputs on submit of signup
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     checkInputs();
// });

function validate_signup(){  
    //get input values
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim(); 
    const emailValue = email.value.trim();    
    const usernameValue = username.value.trim();     
    const passwordValue = password.value.trim(); 
    const password2Value = password2.value.trim();

    var inputError =false;

    if(firstnameValue ==="")
    {   
        inputError =true;
        setErrorFor(firstname, "First Name cannot be blank");
    } else{
        inputError =false;
        setSuccessFor(firstname);
    }

    if(lastnameValue ==="")
    {
        inputError =true;
        setErrorFor(lastname, "Last Name cannot be blank");
    } else{
        inputError =false;
        setSuccessFor(lastname);
    }

    if(emailValue ==="")
    {
        inputError =true;
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmailValid(emailValue)){
        inputError =true;
        setErrorFor(email, "Email is not valid");
    } else {
        inputError =false;
        setSuccessFor(email);
    }

    if(usernameValue ==="")
    {
        inputError =true;
        setErrorFor(username, "Username cannot be blank");
    } else if (!isUsernameValid(usernameValue)){
        inputError =true;
        setErrorFor(username, "Must be atleast 8 characters with atleast 1 letter & 1 number");
    } else{
        inputError =false;
        setSuccessFor(username);
    }

    if(passwordValue ==="")
    {
        inputError =true;
        setErrorFor(password, "Password cannot be blank");
    } else if(!isPasswordValid(passwordValue)){
        inputError =true;
        setErrorFor(password, "Password is not valid");
    } else{
        inputError =false;
        setSuccessFor(password);
    }

    if(password2Value ==="")
    {
        inputError =true;
        setErrorFor(password2, "Password should be retyped");
    } else if(passwordValue !== password2Value){
        inputError =true;
        setErrorFor(password2, "Passwords does not match");
    } else{
        inputError =false;
        setSuccessFor(password2);
    }

    // if(inputError===false){
    //     alert("SIGNUP PAGE - Validation Success");
    // }

    return inputError;
}

function setErrorFor(input, message){
    // console.log(input);
    const formControl = input.parentElement; //form_control
    const ptag = formControl.querySelector("p");

    //add error msg in p tag
    ptag.innerText = message;

    //add error class
    formControl.className = "form_control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className="form_control success";
}


function isEmailValid(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isUsernameValid(username){
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(username);
}

function isPasswordValid(password)
{
       return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(password);
    // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

// //Event listener for password strength checking
// password.addEventListener('keyup',(e)=>{
//     e.preventDefault();
//     let pass = password.value;
//     checkStrength(pass);
// });

function checkStrength(){

    let password_check  = document.getElementById("password");
    let password = password_check.value;
    let strength=0;

    const result =document.querySelector(".popover-password p");

// console.log(result);

    //if contains lower and upper case
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1;
        lowerUpperCase.style.color="#ffad00";
    }else{
        lowerUpperCase.style.color="white";
    }

    //if password has a number
    if(password.match(/([0-9])/)){
        strength += 1;
        number.style.color="#ffad00";
    }else{
        number.style.color="white";
    }

    //if password has one special character
    if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
        strength += 1;
        specialChar.style.color="#ffad00";
    }else{
        specialChar.style.color="white";
    }
        

    if(password.length > 7){
        strength += 1;
        eightChar.style.color="#ffad00";
    }else{
        eightChar.style.color="white";
    }
    

    if(strength == 0){
        passwordStrength.style ='width:0%';
        result.innerText="very poor";
        result.style.color="#e3e7f1";
    }
    else if(strength == 2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style ='width:10%';
        result.innerText="poor";
        result.style.color="#e90f10";
    }
    else if(strength == 3){
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.style ='width:60%';
        result.innerText="medium";
        result.style.color="#ffad00";
    }
    else if(strength == 4){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.style ='width:100%';
        result.innerText="strong";
        result.style.color="#02b502";
    }


}



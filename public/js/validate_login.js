const loginform     = document.getElementById("loginform");
const loginpassword = document.getElementById("password");
const loginusername = document.getElementById("username");


//Event Listener for validating inputs on submit of login
loginform.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkLoginInputs();
    // return;
    
});

function checkLoginInputs(){
    const usernameValue = loginusername.value.trim();    
    const loginpasswordValue = loginpassword.value.trim(); 

    var loginInputError =false;

    if(usernameValue ==="")
    {
        loginInputError =true;
        setErrorFor(loginusername, "Username cannot be blank");
    }  else {
        loginInputError =false;
        setSuccessFor(loginusername);
    }

    if(loginpasswordValue ==="")
    {
        loginInputError =true;
        setErrorFor(loginpassword, "Password cannot be blank");
    } 
    else{
        loginInputError =false;
        setSuccessFor(loginpassword);
    }

    // if(loginInputError===false){
    //     alert("LOGIN PAGE - Validation Success");
    // }
    return ;
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
    //add success class
    formControl.className="form_control success";
}
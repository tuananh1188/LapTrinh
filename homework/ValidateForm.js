var username = document.querySelector("#username");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirm-password");
var form = document.querySelector("form");

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector("small")
    parent.classList.add("error")
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector("small")
    parent.classList.remove("error")
    small.innerText = ""
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();

        if(!input.value){
            isEmptyError = true;
            showError(input,"Khong duoc de trong");
        }else{
            showSuccess(input);
        } 
    });
    return isEmptyError;
}

function checkEmailError(input){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)){
        showSuccess(input);
    }else{
        showError(input, "Email invalid");
    }
    return isEmailError;
}

function checkLengthError(input,min,max){
    input.value = input.value.trim();

    if(input.value.length < min){
        showError(input,`khong duoc it hon ${min} ky tu`);
        return true;
    }else if(input.value.length > max){
        showError(input,`khong duoc qua ${max} ky tu`);
        return true;
    }else{
        showSuccess(input);
        return false;
    }
}

function checkMathPasswordError(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput,"Mat khau khong trung khop")
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault()

   let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
   let isEmailError = checkEmailError(email);
   let isUsernameLengthError = checkLengthError(username, 3, 10);
   let isPasswordLengthError = checkLengthError(password, 3, 10);
   let isMathError = checkMathPasswordError(password, confirmPassword);

   if(isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMathError){
       // do nothing
   }else{
    // logic, call API....
   }
})

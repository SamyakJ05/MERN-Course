const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("c-password");
const submit = document.getElementById("btn")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim();
    const cPasswordValue = cpassword.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is Required');
    }
    else{
        setSuccess(username);
    }
    if(passwordValue === ''){
        setError(password, 'Password is Required');
    }
    else if(passwordValue.length < 8){
        setError(password, 'Password must be >8 characters.');
    }
    else{
        setSuccess(password);
    }
    if(cPasswordValue === ''){
        setError(cpassword, 'Please confirm your Password');
    }
    else if(cPasswordValue !== passwordValue){
        setError(password, 'Password does not match');
    }
    else{
        setSuccess(cPassword);
    }
    if(emailValue === ''){
        setError(email, 'Email is Required');
    }
    else if(!isValiEmail(emailValue)){
        setError(email, 'Provide a Valid Email Address');
    }
    else{
        setSuccess(email);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innertext = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');
    errorDisplay.innertext = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

function isValidEmail(e){
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}
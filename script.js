// variables for password inputs and errors
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const error = document.getElementById('error')
const submitBtn = document.querySelector('button')

// Initalized two variables to store the password inputs
let firstPassword = null;
let secondPassword = null;
submitBtn.disabled = false;

// Assigned a evnetlistener for when user clicks off the input
password.addEventListener('blur', () => {
    // Assigned the firstPassword to the password.value when user clicks off the input
    firstPassword = password.value
})

// Added an evenetlistener on the confirmPassword
confirmPassword.addEventListener('input', () => {
    // Assigned the secondPassword to the confirm password value
    secondPassword = confirmPassword.value

    // Checks if passwords do not match
    if(firstPassword !== secondPassword){
        console.log('Passwords do not match!');
        // Displays this message to the DOM and does not let user click the submitBtn
        error.textContent = 'Password does not match!'
        submitBtn.disabled = true
    } else {
        // Resets the error message to an empty string and allows the button to be pressed
        console.log('Passwords Match!');
        error.textContent = ''
        submitBtn.disabled = false
    }
})
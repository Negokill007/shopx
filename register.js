let pass = document.querySelector('#password');
let confirmPas = document.querySelector('#confirmpassword');
let eye = document.querySelector('#passwordEye');
let confirmEye = document.querySelector('#confirmpasswordEye');
let doSomething = true;
let my = true
let strength = 0;
let info = document.querySelector('#info')
let valid = document.querySelector('#valid');
let form = document.querySelector('form');
let success = document.querySelector('#successful');
let Fname = document.querySelector('#Fname')
let Uname = document.querySelector('#Uname')
let Pnumber = document.querySelector('#Pnumber')


eye.addEventListener('click', (e) => {
    if (doSomething === true) {
        pass.type = 'text';
        eye.classList.replace('fa-eye', 'fa-eye-slash');
        doSomething = false;
    }

    else {
        pass.type = 'password';
        eye.classList.replace('fa-eye-slash', 'fa-eye');
        doSomething = true;
    }
});

confirmEye.addEventListener('click', (e) => {
    if (my === true) {
        confirmPas.type = 'text';
        confirmEye.classList.replace('fa-eye', 'fa-eye-slash');
        my = false;
    }

    else {
        confirmPas.type = 'password';
        confirmEye.classList.replace('fa-eye-slash', 'fa-eye');
        my = true;
    }
});

confirmPas.addEventListener('input', (e) => {

    if (pass.value === confirmPas.value) {

        info.innerHTML = '';
        confirmPas.style.color = 'white';

    } else {

        info.innerHTML = 'Password and confirm password do not match';
        confirmPas.style.color = 'red';

    }
});

form.addEventListener('submit', (e) => {

    if (pass.value !== confirmPas.value) {

        e.preventDefault();

        info.innerHTML = 'Password and confirm password do not match';
        confirmPas.style.color = 'red';
        return false;
    }

    if (strength !== 3) {

        e.preventDefault();

    }

    else {
        e.preventDefault();
        success.style.display = 'block';
        success.scrollIntoView({ behavior: 'smooth' });
        localStorage.setItem('fullname', Fname.value)
        localStorage.setItem('username',Uname.value)
        localStorage.setItem('phoneNumber',Pnumber.value)
        setTimeout(()=>{
            window.location.href = 'login-in.html'
        },2000)
    }


});

pass.addEventListener('input', (e) => {

    let hasLowercase = /[a-z]/.test(pass.value);
    let hasUppercase = /[A-Z]/.test(pass.value);
    let hasNumber = /[0-9]/.test(pass.value);


    strength = 0;

    // Check lowercase
    if (hasLowercase) {
        strength++;
    }

    // Check uppercase
    if (hasUppercase) {
        strength++;
    }

    // Check number
    if (hasNumber) {
        strength++;
    }


    // Empty password
    if (pass.value === '') {
        valid.style.display = 'none';
        return;
    }


    // Weak
    if (strength <= 1) {
        valid.style.display = 'block';
        valid.innerHTML = 'Password Weak';
        valid.style.color = 'red';
    }

    // Medium
    else if (strength === 2) {
        valid.style.display = 'block';
        valid.innerHTML = 'Password Medium';
        valid.style.color = 'yellow';
    }

    // Strong
    else if (strength === 3) {
        valid.style.display = 'block';
        valid.innerHTML = 'Password Strong';
        valid.style.color = 'green';
    }

    if (pass.value === confirmPas.value) {
        confirmPas.style.color = 'white'
        info.style.display = 'none'
    }
});



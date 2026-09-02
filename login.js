let eye = document.querySelector('#eyetoggle')
let pass = document.querySelector('#password')
let lock = document.querySelector('#lock')
let doSomething = true
let input = document.querySelectorAll('input')
let email = input[0]
let check = input[2]
let form = document.querySelector('form')
let emailPattern;
let incorrectEmail = document.querySelector('.incorrectEmail')
let InvalidPass = document.getElementById('invalidPass')


eye.addEventListener('click', () => {
    if (doSomething === true) {
        pass.type = "text"
        eye.classList.replace('fa-eye', ('fa-eye-slash'))
        doSomething = false
        lock.classList.replace('fa-lock', 'fa-unlock')
        console.log(doSomething)
    }

    else {
        pass.type = 'password'
        eye.classList.replace('fa-eye-slash', 'fa-eye')
        lock.classList.replace('fa-unlock', 'fa-lock')
        doSomething = true
    }
})

email.addEventListener('input', function () {

    if (email.value === '') {
        incorrectEmail.style.display = 'none'
    }

    emailPattern = /@gmail\.com/.test(email.value);
    if (emailPattern) {
        incorrectEmail.style.display = 'none'
    }
    else {
        incorrectEmail.style.display = 'block'
    }
});

form.addEventListener('submit', (e) => {

    e.preventDefault()

    if (emailPattern !== true) {
        e.preventDefault();
        incorrectEmail.style.display = 'block'
    }

    if (pass.value === '') {
        e.preventDefault()
        InvalidPass.style.display = 'block'
        InvalidPass.textContent = 'Please enter your password.'
    }
    else {
        InvalidPass.style.display = 'none'
    }

    if (check.checked) {
        localStorage.setItem('email', email.value)
    }

    console.log(emailPattern)
    console.log(pass.value)

    if (emailPattern === true && pass.value !== '') {

        localStorage.setItem('login', true)
        window.location.href = 'index.html'
    }
});

window.addEventListener('load', function () {

    let savedEmail = localStorage.getItem('email')

    if (savedEmail !== null) {
        email.value = savedEmail
    }

})

pass.addEventListener('input', (e) => {
    if (pass.value !== '') {
        InvalidPass.style.display = 'none'
    }
})

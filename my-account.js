let aside = document.querySelector('aside')
let openBtn = document.querySelector('.bar')
let closeBtn = document.querySelector('.close-btn')
let loginStatus = localStorage.getItem('login')
let email = document.querySelector('.card-email')
let Fname = document.querySelector('.Fname')
let Uname = document.querySelector('.Uname')
let emailStatus = localStorage.getItem('email')
let Fullname = localStorage.getItem('fullname')
let username = localStorage.getItem('username')
console.log(email)


openBtn.addEventListener('click', (e)=>{
    aside.style.display = 'block'
})

closeBtn.addEventListener('click',(e)=>{
    aside.style.display = 'none'
})

if (loginStatus !== 'true') {
    window.location.href = 'login-in.html'
}

email.textContent = emailStatus
Fname.textContent = Fullname
Uname.textContent = `${username}!`
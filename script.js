let closebt = document.querySelector('.close')
let bar = document.querySelector('.bar')
let aside = document.querySelector('aside')
let loginStatus = localStorage.getItem('login')
let loginLinks = document.querySelectorAll('.link')
let loginRequired = document.querySelectorAll('.loginRequired')
console.log(loginStatus)



closebt.addEventListener('click', function () {
    aside.style.display = 'none'
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        aside.style.display = 'none'
    }, 500)
})

bar.addEventListener('click', function () {
    aside.style.display = 'block'
    document.body.style.overflow = 'hidden';
})

if (loginStatus === 'true') {
    loginLinks.forEach(function (link) {
        link.textContent = 'LogOut'
    })
}

loginRequired.forEach(function (required) {
    required.addEventListener('click', (e) => {
        let loginStatus = localStorage.getItem('login')
        if (loginStatus !== 'true') {
            e.preventDefault()
            window.location.href = 'login-in.html'
        }
    })
})

loginLinks.forEach(function (link) {
    link.addEventListener('click', (e) => {
        if (link.textContent === 'LogOut') {
            e.preventDefault()
            localStorage.removeItem('login')
            loginLinks.forEach(function (link) {
                link.textContent = 'Login'
            })
        }
    })
})
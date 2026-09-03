let form = document.querySelector('form')
let Fname = document.querySelector('#Fname')
let lname = document.querySelector('#lname')
let email = document.querySelector('#email')
console.log(Fname)

form.addEventListener('submit', (e)=>{
    // e.preventDefault()
    if(Fname.value === ''){
        e.preventDefault()
        Fname.value = 'welcome'
    }
})
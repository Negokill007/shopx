let aside = document.querySelector('aside')
let openBtn = document.querySelector('.bar')
let closeBtn = document.querySelector('.close-btn')


openBtn.addEventListener('click', (e)=>{
    aside.style.display = 'block'
})

closeBtn.addEventListener('click',(e)=>{
    aside.style.display = 'none'
})

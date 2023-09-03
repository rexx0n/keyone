import './scss/style.scss'
let burger = document.querySelector('.header__burger')
let svgBurger = document.querySelector('.header__burger > svg')
let navBurger = document.querySelector('.header__nav')
let navCross = document.querySelector('.header__nav-cross')
svgBurger.addEventListener('click', ()=> {
    svgBurger.classList.add('header__none')
    navBurger.classList.remove('header__nav--none')
})
navCross.addEventListener('click', ()=> {
    svgBurger.classList.remove('header__none')
    navBurger.classList.add('header__nav--none')
})
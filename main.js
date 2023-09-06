import './scss/style.scss'
//burger
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

//carousel
let sliderLine = document.querySelector('.exhibition__line')
let btnLeft = document.querySelector('.exhibition__btn-left')
let btnRight = document.querySelector('.exhibition__btn-right')
let images = document.querySelectorAll('.exhibition__line > div > img')
let translate = -314
let count = 2
let width

function init() {
    images.forEach(item => {
        item.style.width = width + 'px'
    })
    rollSlider()
}

window.addEventListener('resize', init)

init()

btnLeft.addEventListener('click', ()=> {
    count--
    if (count <= 0) {
        count = images.length ;
        console.log(images.length)
        translate = translate + 624;
        console.log(count)
    } else {
        translate = translate + -314;
        console.log('asdas')
        console.log(`count ${count}`)
    }
    rollSlider()
})

btnRight.addEventListener('click', ()=> {
    count++
    if(count >= images.length) {
        count = 0
    }
    rollSlider()
})

function rollSlider() {
    sliderLine.style.transform = 'translate(-'+translate+'px)'
}
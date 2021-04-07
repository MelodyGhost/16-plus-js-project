const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.left-arrow')
const rightBtn = document.querySelector('.right-arrow')

let activeSlide = 0
rightBtn.addEventListener('click', () => {
    activeSlide++ 
    activeSlide = activeSlide % slides.length

    changeSlide()
    changeBackground()
})

leftBtn.addEventListener('click', () => {
    activeSlide = activeSlide || slides.length
    activeSlide--

    changeSlide()
    changeBackground()

})

function changeSlide() {
    document.querySelector('.active').classList.remove('active')
    slides[activeSlide].classList.add('active')
}

function changeBackground() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
const imageContainer = document.querySelector('.image')
const counterSpan = document.querySelector('.count')

let counter = 0

imageContainer.addEventListener('dblclick', (e) => {
    const x = e.offsetX
    const y = e.offsetY

    const i = document.createElement('i')
    i.classList.add('fas', 'fa-heart', 'effect')

    i.style.top = y + 'px'
    i.style.left = x + 'px'

    imageContainer.appendChild(i)
    counterSpan.innerText = ++counter

    setTimeout(() => {
        i.remove()
    }, 700)
})

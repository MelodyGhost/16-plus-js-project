const counter = document.querySelector('.count-down')
const finalWindow = document.querySelector('.final')
const counts = document.querySelectorAll('.count-down span')
const replay = document.querySelector('.replay')

// Start animation when first load
animateCount()

function animateCount() {
    counts.forEach(count => {
        count.addEventListener('animationend', (e) => {
            // Start 'out' animation after 'in' animation
            if (e.animationName === 'in') {
                count.classList.add('out')
            }
            // After 'out' animation add 'in' class to next sibling
             else if (e.animationName === 'out' && count.nextElementSibling) {
                count.nextElementSibling.classList.add('in')
            } // if there is no sibling, hide the counter and show the final msg
             else {
                counter.classList.add('hide')
                finalWindow.classList.add('show')
                confetti.start(1000)
            }
        })
    })
}




replay.addEventListener('click', () => {
    // hide final window
    finalWindow.classList.remove('show')

    // Remove all classes from number
    counts.forEach(count => {
        count.classList.value = ''
    })
    // Add 'in' class to first number
    counts[0].classList.add('in')

    // show the counter window
    counter.classList.remove('hide')

    // and animate
    animateCount()
})


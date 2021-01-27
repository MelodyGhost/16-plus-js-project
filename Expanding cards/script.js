panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panels.forEach(element => {
            element.classList.remove('active')
        })
        panel.classList.add('active')
        addBackGroundImg(panel)
    })
});

function addBackGroundImg(panel) {
    const body = document.querySelector('.bg')
    body.style.backgroundImage = `${panel.style.backgroundImage}`
}

console.log(panels[0].click())
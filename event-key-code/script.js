const container = document.querySelector('.container')

window.addEventListener('keydown', e => {
    container.innerHTML = `
    <button>
    ${e.key ===" "? "Space": e.key}
    <small>event.key</small>
    </button>

    <button>
        ${e.keyCode}
        <small>event.keyCode</small>
    </button>

    <button>
        ${e.code}
        <small>event.code</small>
    </button>
    `
})
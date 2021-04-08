const dark_light_toggle = document.querySelector('.toggle')
const hour_container = document.querySelector('.hour')
const minute_container = document.querySelector('.minute')
const second_container = document.querySelector('.second')
const digital_clock = document.querySelector('.time')
const date_container = document.querySelector('.date')


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Toggle between Dark and light mode
dark_light_toggle.addEventListener('click', () => {
    const html = document.querySelector('html');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        dark_light_toggle.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        dark_light_toggle.innerHTML = 'Light Mode'
    }
})

function setTime() {
    const time = new Date()
    
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()


    second_rotation = (360 / 60 * second ) || 360
    minute_rotation = 360 / 60 * (minute || 60)
    hour_rotation = 0.5 * (hour % 12 * 60 + minute)
    // console.log(second_rotation)
    second_container.style.transform = ` translate(-50%, -100%) rotate(${second_rotation}deg)`
    minute_container.style.transform = ` translate(-50%, -100%) rotate(${minute_rotation}deg)`
    hour_container.style.transform = ` translate(-50%, -100%) rotate(${hour_rotation}deg)`
    
    // rotateClock()
    setInterval(() => {

        second_rotation += 360/60
        if (second_rotation % 360 === 0) {
            minute_rotation += 6
            hour_rotation += 0.5
        } 
        second_container.style.transform = ` translate(-50%, -100%) rotate(${second_rotation}deg)`
        minute_container.style.transform = ` translate(-50%, -100%) rotate(${minute_rotation}deg)`
        hour_container.style.transform = ` translate(-50%, -100%) rotate(${hour_rotation}deg)`



        const time_now = new Date()
        hour = time_now.getHours()
        minute = time_now.getMinutes()
        
        // const time_now = new Date()
        digital_clock.innerHTML = hour % 12 + ':' + (minute < 10 ? '0' + minute: minute) + (hour > 11 ? ' PM': ' AM')
        
        const month = time_now.getMonth()
        const day = time_now.getDay()
        const date = time_now.getDate()

        date_container.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
    }, 1000)

}

setTime()

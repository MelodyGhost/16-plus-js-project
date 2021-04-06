// All the neccessary API (source)
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

// Get HTML Dom element
const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Initial Load
getMovies(API_URL)

// Get movies from API (using async/await)
async function getMovies(url) {

    const res = await fetch(url)
    const data = await res.json()

   showMovies(data.results)
}

// Add movies to html Dom element
function showMovies(results) {
    main.innerText = ''

    results.forEach(result => {
        const {title, poster_path, vote_average, overview} = result

        const element = document.createElement('div')
        element.classList.add('movie')

        element.innerHTML = 
        `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            
            <h3 class="title">${title}</h3>
            <span class="${vote_average <= 5 ? 'red': vote_average <= 8? 'orange': ''}">
            ${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
    `

    main.appendChild(element)
    })

}

// When search for a movies
form.addEventListener('submit', e => {
    e.preventDefault()

    const query = search.value
    
    search.value = ''
    if (query && query !== '') {
        getMovies(SEARCH_API + query)
    } else {
        window.location.reload()
    }
})
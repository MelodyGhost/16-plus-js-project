const joke = document.getElementById('joke');
const getAnother = document.getElementById('jokebtn');

function getJoke() {
  const config = {
    headers: {
      accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    });
}

// Load first joke
getJoke();

getAnother.addEventListener('click', getJoke);

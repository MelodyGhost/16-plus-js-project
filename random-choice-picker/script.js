const tagContainer = document.querySelector('.tags');
const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', (e) => {
  creatTag(e.target.value);
  if (e.key === 'Enter') {
    e.target.value = '';
    randomSelect();
  }
});

// Creat tag(s) for every keyup
function creatTag(value) {
  // split each choices by comma
  // ignore if no choices given
  // trim space before and after the choice
  const choices = value
    .split(',')
    .filter((x) => x.trim(' ') !== '')
    .map((x) => x.trim());

  // clear all tag
  tagContainer.innerHTML = '';

  // For each choice create a tag and append
  choices.forEach((choice) => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.innerText = choice;

    tagContainer.appendChild(tag);
  });
}

function randomSelect() {
  // Get all the tag(s)
  const tags = document.querySelectorAll('.tag');

  // for only one choice
  if (tags.length === 1) {
    selectTag(tags[0]);
    return;
  }

  const times = 30;

  // Keep picking random tag within some time interval
  let interval = setInterval(() => {
    const randomTag = pickRandom(tags);
    // Select and deselect for effect
    selectTag(randomTag);
    setTimeout(() => {
      unselectTag(randomTag);
    }, 100);
  }, 100);

  // After some time, stop the interval[effect]
  setTimeout(() => {
    clearInterval(interval);
    // Select random tag [final result]
    setTimeout(() => {
      selectTag(pickRandom(tags));
    }, 100);
  }, times * 100);
}

// Pick random tag from an array[tags]
function pickRandom(tags) {
  return tags[Math.floor(Math.random() * tags.length)];
}

// Add a class to highlight the element
function selectTag(tag) {
  tag.classList.add('select');
}

// Remove class to the element [for flickering effect]
function unselectTag(tag) {
  tag.classList.remove('select');
}

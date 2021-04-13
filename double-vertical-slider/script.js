const leftSlide = document.querySelector('.left-slide');
const rightSlide = document.querySelector('.right-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slidesCount = rightSlide.childElementCount;

let currentSlideIndex = 0;
leftSlide.style.top = `-${(slidesCount - 1) * 100}vh`;

function changeSlide(dir) {
  if (dir === 'up') {
    currentSlideIndex++;
    currentSlideIndex %= slidesCount;
  } else if (dir === 'down') {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = slidesCount - 1;
    }
  }
  leftSlide.style.transform = `translateY(${currentSlideIndex * 100}vh)`;
  rightSlide.style.transform = `translateY(-${currentSlideIndex * 100}vh)`;
}

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

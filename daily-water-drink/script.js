const smallCups = document.querySelectorAll('.small-cup');
const liters = document.getElementById('liters');
const percentage = document.querySelector('.percentage');
const remained = document.getElementById('remained');

// Add click event listener to all small cups
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => fillCups(idx));
});

// Fill the cups when clicked
function fillCups(idx) {
  const totalCups = smallCups.length;

  // Empty cup if it is already full
  if (smallCups[idx].classList.contains('full')) {
    // Empty all cups after the clicked cup
    if (
      idx + 1 !== totalCups &&
      smallCups[idx + 1].classList.contains('full')
    ) {
      smallCups.forEach((cup, i) => {
        if (i < totalCups && i > idx) {
          cup.classList.remove('full');
        }
      });
    } else {
      // Just empty current cup (There is no other cups after it)
      smallCups[idx].classList.remove('full');
    }
  } else {
    // Fill the cup and all others before it (already empty)
    smallCups.forEach((cup, i) => {
      if (i <= idx) {
        cup.classList.add('full');
      }
    });
  }

  // update the large cup
  updateLargeCup();
}

// Update the empty and filled section of big cups
function updateLargeCup() {
  const fullCups = document.querySelectorAll('.full').length;
  const totalCups = smallCups.length;

  // if the number of full cups(small) is empty
  if (fullCups === 0) {
    // Make it invisible
    percentage.style.height = 0;
    percentage.style.opacity = 0;
  } else {
    // Make it visible, set inner text and height
    percentage.style.opacity = 1;
    percentage.style.height = (fullCups / totalCups) * 330 + 'px';
    percentage.innerText = (fullCups / totalCups) * 100 + '%';
  }

  // if all the small cups are filled
  if (fullCups === totalCups) {
    // hide the empty section
    remained.style.height = 0;
  } else {
    // else keep it visible, set the amount
    liters.innerText = 0.25 * totalCups - 0.25 * fullCups + 'L';
  }
}

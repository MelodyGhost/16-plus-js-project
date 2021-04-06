const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const target = +counter.getAttribute('data-target');
  const increment = target / 300;
  const update = () => {
    const c = +counter.innerText;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(update, 1);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

const header = document.getElementById('header');
const title = document.querySelector('.card-title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_elements = document.querySelectorAll('.animated-bg');
const animated_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
  header.innerHTML = `
        <img src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="computer" class="card-img">

    `;
  title.innerText = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore blanditiis illum tenetur!';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Profile picture">';
  name.innerText = 'John Doe';
  date.innerText = 'Jan 08, 2020';

  animated_elements.forEach((element) =>
    element.classList.remove('animated-bg')
  );
  animated_texts.forEach((text) => text.classList.remove('animated-bg-text'));
}

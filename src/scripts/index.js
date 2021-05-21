import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../scripts/components/navbar.js';
import '../scripts/components/hero.js';
import '../scripts/components/content.js';
import '../scripts/components/footer.js';
import data from '../DATA.json';

// nav button in mobile 
const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');
const hero = document.querySelector('.hero');

menu.addEventListener('click', function(event){
  drawer.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', function(){
  drawer.classList.remove('open');
});

hero.addEventListener('click', function(){
  drawer.classList.remove('open');
});

// Render Data

const getData = (data) => {
  const posts = document.querySelector('#posts');
  posts.innerHTML="";

  data.restaurants.forEach((resto) => {
    posts.innerHTML +=
    /*html*/
    `
    <div class="card">
      <a href="#">
        <div class="card__img">
          <img class="card__thumbnail" src="${resto.pictureId}" alt="${resto.name}">
          <div class="card__rating">${resto.rating}</div>
          <div class="card__title">${resto.name} - ${resto.city}</div>
        </div>
        <div class="card__content">
          <p class="card__content__title">Description</p>
          <p class="card__content__desc">${resto.description}</p>
        </div>
      </a>
    </div>
    `;
  })
}
getData(data);


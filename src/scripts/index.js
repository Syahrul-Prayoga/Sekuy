/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import '../scripts/components/navbar.js';
import '../scripts/components/hero.js';
import '../scripts/components/footer.js';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
  hero: document.querySelector('.hero'),

});

// event ketika url hash diubah
window.addEventListener('hashchange', () => {
  app.renderPage();
});

// event ketika halaman dimuat
window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

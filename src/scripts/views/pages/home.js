import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return /* html */ ` 
      <div class="restaurant">
      <h1 tabindex="0" class="restaurant__label">Tempat Kumpul-Kumpul</h1>
      <section id="posts" class="list__restaurant">

      </section>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.home();
    const postRestaurant = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      postRestaurant.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;

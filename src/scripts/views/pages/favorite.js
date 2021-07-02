import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="restaurant">
    <h1 tabindex="0" class="restaurant__label">Tempat Favorit</h1>
    <section id="posts" class="list__restaurant">

    </section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const postRestaurant = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      postRestaurant.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;

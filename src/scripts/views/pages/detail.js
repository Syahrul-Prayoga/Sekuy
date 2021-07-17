import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div class="restaurant">
    <h1 tabindex="0" class="restaurant__label">DetailKuy</h1>
    <section id="detail-restaurant">

    </section>
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

    LikeButtonPresenter.init({
      LikeButtonContainer: document.querySelector('#likeButtonContainer'),
      data,
    });
  },
};

export default Detail;

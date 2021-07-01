import RestaurantSource from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import { createLikeButtonTemplate, createRestaurantDetailTemplate } from "../templates/template-creator";

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
    console.log(data);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(data.restaurant);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};
 
export default Detail;
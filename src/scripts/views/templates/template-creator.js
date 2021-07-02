import CONFIG from '../../globals/config';

// perbaiki dengan halaman detail restaurant
const createRestaurantDetailTemplate = (restaurant) => /* html */ `
<div class="detail">
  <div class="detail-info" >
    <div>
      <img class="detail-poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0" />
    </div>
    <ul>
    <li tabindex="0"><span><img src="icons/home-alt.svg" alt="Name Icon" class="detail-icon"></span>${restaurant.name}</li>
    <li tabindex="0"><span><img src="icons/map.svg" alt="Location Icon" class="detail-icon"></span>${restaurant.address}, ${restaurant.city}</li>
    <li tabindex="0"><span><img src="icons/star.svg" alt="Rating Icon" class="detail-icon"></span>${restaurant.rating}</li>
    <li tabindex="0"><span style="font-weight:bold">Description:</span> ${restaurant.description}</li>
    <li tabindex="0">${restaurant.categories
    .map(
      (category) => `
        <span class="category">${category.name}</span>
        `,
    )
    .join('')}
        </li>
    </ul>
  </div>
<h3 tabindex="0">Menu</h3>
<div class="detail-menu">
  <div class="detail-food">
  <h4 tabindex="0">Food</h4>
  <ul>
  ${restaurant.menus.foods
    .map(
      (food) => `
      <li tabindex="0" >${food.name}</li>
            `,
    )
    .join('')
}
        </ul>
        </div>
  <div class="detail-drink">
  <h4 tabindex="0">Drink</h4>
  <ul>
        ${restaurant.menus.drinks
    .map(
      (drink) => `
              <li tabindex="0">${drink.name}</li>
            `,
    )
    .join('')
}
    </ul>
  </div>
</div>
<h3 tabindex="0">Reviews</h3>
  <div class="detail-review">
    ${restaurant.customerReviews
    .map(
      (review) => `
        <div class="card">
          <p class="review-name" tabindex="0">${review.name}</p>
          <p class="review-body" tabindex="0">${review.review}</p>
          <p class="review-date" tabindex="0">${review.date}</p>
        </div>
      `,
    )
    .join('')
}
    
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
  <a href="#/detail/${restaurant.id}">
    <div class="card__img">
      <img class="card__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="card__rating">${restaurant.rating}</div>
      <div class="card__title">${restaurant.name} - ${restaurant.city}</div>
    </div>
    <div class="card__content">
      <p class="card__content__title">Description</p>
      <p class="card__content__desc">${restaurant.description}</p>
    </div>
  </a>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

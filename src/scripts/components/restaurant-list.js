import $ from 'jquery';
import CONFIG from '../globals/config';

const renderRestaurant = (restaurantList) => {
  restaurantList.forEach((restaurant) => {
    $('#restaurantList').append(`
      <article class="restaurant">
        <label class="restaurant__rating">${restaurant.rating}</label>
        <img class="restaurant__img" src="${CONFIG.BASE_IMG_URL}/${restaurant.pictureId}" alt="Foto ${restaurant.name}">
        <div class="card__info">
          <a class="info__nama" href="/#/detail/${restaurant.id}">
            ${restaurant.name}
          </a>
          <p class="info__kota">${restaurant.city}</p>
          <p class="info__detail">${restaurant.description}</p>
        </div>
      </article>
    `);
  });
};

export default renderRestaurant;

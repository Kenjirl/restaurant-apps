import $ from 'jquery';
import CONFIG from '../globals/config';

const renderDetailRestaurant = (restaurant) => {
  const { foods, drinks } = restaurant.menus;
  foods.sort((a, b) => (a.name > b.name ? 1 : -1));
  drinks.sort((a, b) => (a.name > b.name ? 1 : -1));

  const { customerReviews } = restaurant;

  $('#restaurantDetail').append(`
    <section class="detail-card">
      <img class="detail-img" src="${CONFIG.BASE_IMG_URL}/${restaurant.pictureId}" alt="Foto ${restaurant.name}">
      <h3 class="detail-nama">${restaurant.name}</h3>
      <p class="detail-alamat">${restaurant.address}, ${restaurant.city}</p>
      <span class="detail-rating">Rating: ⭐${restaurant.rating}</span>
      <p class="detail-deskripsi">${restaurant.description}</p>
    </section>

    <section class="restaurant-menu">
      <h3>Daftar Menu</h3>
      <div>
        <h4>Makanan <i class="fa-solid fa-bowl-food"></i></h4>
        <ul id="listFoods" class="list-foods"></ul>
      </div>

      <div>
        <h4>Minuman <i class="fa-solid fa-glass-water"></i></h4>
        <ul id="listDrinks" class="list-drinks"></ul>
      </div>
    </section>

    <section class="reviews">
      <h3>Ulasan</h3>
      <div id="customerReviews" class="reviews-list">
      </div>
    </section>
  `);

  foods.forEach((food) => {
    $('#listFoods').append(`
      <li>${food.name}</li>
    `);
  });

  drinks.forEach((drink) => {
    $('#listDrinks').append(`
      <li>${drink.name}</li>
    `);
  });

  customerReviews.forEach((customer) => {
    $('#customerReviews').append(`
      <div class="review">
        <span class="review-name">${customer.name}</span>
        <p class="review-detail">${customer.review}</p>
      </div>
    `);
  });
};

export default renderDetailRestaurant;

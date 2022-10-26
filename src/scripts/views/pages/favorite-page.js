import $ from 'jquery';
import renderRestaurant from '../../components/restaurant-list';
import RestaurantIdb from '../../data/restaurant-idb';
import SkipToContent from '../../utils/skip-to-content';

const FavoritePage = {
  async render() {
    return `
      <button tabindex="1" id="favoriteSkipBtn" class="skip-to-main">Skip to main content</button>

      <div id="favoriteMainContent" tabindex="-1">
        <section id="restaurant">
          <div class="main__inner">
            <h2 class="main__title">Restoran Favorit</h2>
          </div>

          <div id="restaurantList" class="restaurant-list"></div>
        </section>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantIdb.getAllRestaurant();
    if (restaurants.length) {
      renderRestaurant(restaurants);
    } else {
      $('#favoriteMainContent').append(`
        <div class="restaurant-not-found">
          <h3>Anda belum memilih restaurant favorit Anda</h3>
        </div>
      `);
    }
    SkipToContent();
  },
};

export default FavoritePage;

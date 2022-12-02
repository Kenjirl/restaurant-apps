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
    renderRestaurant(restaurants);
    const restaurantContainer = document.querySelector('#favoriteMainContent');

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = 'you are not liking any restaurant';
    }
    SkipToContent();
  },
};

export default FavoritePage;

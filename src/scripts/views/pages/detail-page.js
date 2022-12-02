import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-api';
import renderDetailRestaurant from '../../components/restaurant-detail';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import SkipToContent from '../../utils/skip-to-content';

const DetailPage = {
  async render() {
    return `
      <button tabindex="1" id="detailSkipBtn" class="skip-to-main">Skip to main content</button>

      <div id="detailMainContent" tabindex="-1">
        <div class="main__inner">
          <h2 class="main__title">Detail Restoran</h2>
        </div>
        <article id="restaurantDetail" class="restaurant-detail" tabindex="0"></article>
        <div id="likeButtonContainer"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantRespond = await RestaurantSource.detailRestaurant(url.id);
    const { restaurant } = restaurantRespond;

    renderDetailRestaurant(restaurant);
    SkipToContent();
    LikeButtonInitiator.init({
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        menus: restaurant.menus,
        customerReviews: restaurant.customerReviews,
      },
    });
  },
};

export default DetailPage;

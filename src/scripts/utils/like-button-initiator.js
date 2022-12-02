import $ from 'jquery';
import {renderLikeButton, renderLikedButton} from '../components/like-button';
import RestaurantIdb from '../data/restaurant-idb';

const LikeButtonInitiator = {
  async init({restaurant}) {
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    renderLikeButton();

    $('#likeButton').click(async () => {
      await RestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    renderLikedButton();

    $('#likeButton').click(async () => {
      await RestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

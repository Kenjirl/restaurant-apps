/* eslint-disable max-len */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import RestaurantIdb from '../src/scripts/data/restaurant-idb';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await RestaurantIdb.putRestaurant({id: 1});
  });

  afterEach(async () => {
    await RestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(
        document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(
        document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    document
        .querySelector('[aria-label="unlike this restaurant"]')
        .dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    await RestaurantIdb.deleteRestaurant(1);

    document
        .querySelector('[aria-label="unlike this restaurant"]')
        .dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});


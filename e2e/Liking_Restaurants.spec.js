const assert = require('assert');
/* eslint-disable new-cap */
Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorite-restaurant');
});

const emptyTextFavoriteRestaurant = 'you are not liking any restaurant';

Scenario('showing empty liked movies', ({I}) => {
  I.seeElement('#favoriteMainContent');
  I.see(emptyTextFavoriteRestaurant, '#favoriteMainContent');
});

Scenario('Liking Restaurant', async ({I}) => {
  I.see(emptyTextFavoriteRestaurant, '#favoriteMainContent');

  I.amOnPage('/');

  I.waitForElement('.card__info .info__nama');

  const firstRestaurant = locate('.card__info .info__nama').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');
  I.seeElement('.restaurant');

  const favoriteRestaurantTitle = await I.grabTextFrom(
      '.card__info .info__nama',
  );
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

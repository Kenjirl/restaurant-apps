/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const assert = require('assert');
const {features} = require('process');
const {async} = require('regenerator-runtime');

Feature('Unliking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite-restaurant');
});

const emptyTextFavoriteRestaurant = 'you are not liking any restaurant';

Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('#favoriteMainContent');
  I.see(emptyTextFavoriteRestaurant, '#favoriteMainContent');
});

Scenario('Unliking Restaurant', async ({I}) => {
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

  I.seeElement('.card__info');
  const likedRestaurantTitle = await I.grabTextFrom(
      '.card__info .info__nama',
  );
  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite-restaurant');

  I.waitForElement('#favoriteMainContent');
  I.dontSeeElement('.restaurant');
});

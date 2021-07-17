const assert = require('assert');

/* eslint-disable no-undef */
Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#posts');
  I.see('Restaurant Favorite tidak ditemukan', '#posts');
});

Scenario('Liking a Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card a');
  const firstCard = locate('.card a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card a');
  const likedCardTitle = await I.grabTextFrom('.card a');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('Unlike a Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.card a');
  const firstCard = locate('.card a').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card a');
  const likedCardTitle = await I.grabTextFrom('.card a');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click('.card a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#posts');
  I.see('Restaurant Favorite tidak ditemukan', '#posts');
});

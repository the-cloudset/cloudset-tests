Feature: Favorite
  In order to add products to Favorite
  As a website user
  I need to be able to search for a word

  Scenario: Adding a product to Favorite
   Given I am on "/product/krasnoe-platye-so-spushtennimi-plechami-3007"
   Then I click on css selector ".product__info .js-actionFavorite"
   Then I should see ".product__info .js-actionFavorite.-active"
   Then I am on "/favorite/"
   Then I should see "красное платье со спущенными плечами"
   Then I should not see "В избранном пока пусто"

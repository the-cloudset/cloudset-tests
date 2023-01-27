Feature: Favorite
  In order to add products to Favorite
  As a website user
  I need to be able to search for a word

  Scenario: Adding a product to Favorite
   Given I am on "/product/goluboe-platye-na-bretelyah-3027"
   Then I click on css selector ".product__info .js-actionFavorite"
   Then I wait element ".product__info .js-actionFavorite.-active" appear
   Then I am on "/favorite/"
   Then I should see "Голубое платье"
   Then I should not see "избранном пока пусто"

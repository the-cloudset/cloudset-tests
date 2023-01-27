Feature: Check heart icon
  In order to check heart icon appearing when adding products to Favorite
  As a website user
  I need to be able to see icon

  Scenario: Checking heart icon
   Given I am on "/product/goluboe-platye-na-bretelyah-3027"
   Then I click on css selector ".product__info .js-actionFavorite"
   Then I wait element ".js-favoriteCounter" appear
   Then ".js-favoriteCounter" should be = 1
Feature: Check heart icon
  In order to check heart icon appearing when adding products to Favorite
  As a website user
  I need to be able to see icon

  Scenario: Checking heart icon
   Given I am on "/product/chernaya-bluza-assimetrichnogo-kroya-4475"
   Then I click on css selector ".product__info .js-actionFavorite"
   Then I wait element ".js-favoriteCounter" appear
   Then ".js-favoriteCounter" should be = 1
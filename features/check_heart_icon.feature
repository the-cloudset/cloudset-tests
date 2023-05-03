Feature: Check heart icon
  In order to check heart icon appearing when adding products to Favorite
  As a website user
  I need to be able to see icon

  Scenario: Checking heart icon
   Given I am on "/product/belie-shirokie-bryuki-5150"
   Then I save screenshot to "favorite.png"
   Then I click on css selector ".js-actionFavorite"
   Then I wait element ".js-favoriteCounter" appear
   Then ".js-favoriteCounter" should be = 1
Feature: Adding to cart
  In order to check pop-up and count icon appearing when adding products to Cart
  As a website user
  I need to be able to see pop-up and count icon

  Scenario: Adding to cart
   Given I am on "/product/golubaya-sumka-na-plecho-le-bambino-long-4467/"
   Then I click on css selector ".js-cartButton"
   Then I wait element ".js-cartModalOpen" appear
   Then I wait element ".js-cartCounter" appear
   Then ".js-cartCounter" should be = 1
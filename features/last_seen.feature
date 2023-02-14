Feature: Check last seen products
  In order to see last seen products
  As a website user
  I need to be able to search for a word

  Scenario: Searching for a last seen product
    Given I am on "/product/sinee-barhatnoe-platye-5169"
    Then I am on "/product/zelenoe-platye-2120"
    Then I search for "бархатное платье" in element ".js-productCarousel"
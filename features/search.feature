Feature: Search
  In order to search products
  As a website user
  I need to be able to search for a word

  Scenario: Searching for a product that does exist
    Given I am on "/product/sinee-platye-s-tsvetochnim-uzorom-1901"
    Then I click on element with class "js-searchFormOpen"
    Then I fill in "query" with "сапоги"
    Then I should see "Поиск: сапоги" 
    Then I should not see "Ничего не найдено"


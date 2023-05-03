Feature: Search
  In order to search products
  As a website user
  I need to be able to search for a word

  Scenario: Searching for a product that does exist
    Given I am on "/product/golubaya-sumka-na-plecho-le-bambino-long-4467/"
    Then I click on css selector ".js-searchFormOpen"
    Then I fill in "query" with "сапоги"
    Then I submit "query"
    Then I should see "Поиск: сапоги"
    Then I should not see "Ничего не найдено"


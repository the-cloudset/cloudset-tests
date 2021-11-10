Feature: Search
  In order to search products
  As a website user
  I need to be able to search for a word

  Scenario: Searching for a product that does exist
    Given I am on "/"
    When I follow "Поиск"
    Then I fill in "pattern" with "Платье"
    And I press "Найти"
    Then I should see "результаты поиска: платье"

Feature: Order History
  In order to view my order history
  As a website user
  I need to be able to go to support page

  Background:
    Given I am logged in as Client

  Scenario: Go to history from profile menu
    Given I am on "/profile/"
    When I follow "заказы"
    Then I should see "мои заказы"

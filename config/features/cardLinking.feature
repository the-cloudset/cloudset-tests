Feature: Manage bank cards
  In order to manage my bank cards
  As a website user
  I need to be able add, view and delete bank cards

  Background:
    Given I am logged in as Client

  Scenario: Go to history from profile menu
    Given I am on "/profile/"
    When I follow "заказы"
    Then I should see "мои заказы"

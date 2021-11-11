Feature: Edit profile info
  In order to keep my profile info up to date
  As a website user
  I need to be able to edit profile info

  Background:
    Given I am logged in as "client"
    Given I am on "/profile/"
    Then I follow "редактировать профиль"

  Scenario: Change name
    Given I fill in "profile[firstname]" with "ТестовоеИмя"
    And I press "Сохранить"
    Then I should see "ТестовоеИмя" in the "profile menu"

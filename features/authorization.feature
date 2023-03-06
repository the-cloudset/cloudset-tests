Feature: Authorization of a user
  In order to check the authorization process 
  As a website user
  I need to be able to see pop-up and count icon

  Scenario: Authorization of a user
   Given I am on "/"
   Then I click on css selector ".js-userSignin"
   Then I wait element ".js-phoneInput" appear
   Then I fill in "username" with "9638155809"
   Then I wait element ".js-codeInput" appear
   Then I click on the ".js-formCode" with the text "Подтвердить"
   Then I am on "/profile/"
   Then I should see "Мои данные"
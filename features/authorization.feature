Feature: Authorization of a user
  In order to check the authorization process
  As a website user
  I need to be able to see pop-up and count icon

  Scenario: Authorization of a user
   Given I am on "/"
   Then I click on css selector ".js-userSignin"
   Then I wait element ".js-phoneInput" appear
   Then I save screenshot to "overlay.png"
   Then I fill in "username" with "+79638155809"
   Then I save screenshot to "username.png"
   Then I submit "username"
   Then I save screenshot to "submit.png"
   Then I click on the ".js-formCode" with the text "Submit"
   Then I save screenshot to "confirm.png"
   Then I wait element ".js-userMenuContent .c-nav" appear
   Then I am on "/profile/"
   Then I should see "Мои данные"

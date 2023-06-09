Feature: Cards
  In order to pay for order
  As a website user
  I need to be able to setup bank card payments

  Background: Background name: Authorization of a user
   Given I am on "/"
   Then I click on css selector ".js-userSignin"
   Then I wait element ".js-phoneInput" appear
   Then I fill in "username" with "+79638155809"
   Then I submit "username"
   Then I click on the ".js-formCode" with the text "Submit"
   Then I wait element ".js-userMenuContent .c-nav" appear

  Scenario: Add bank card to profile
    Given I am on '/profile/cards/add/'
    Then I wait element ".js-stripeLinkAuthenticationElement iframe" appear
    Then I wait element ".js-stripeSubmit" appear
    Then I fill in "email" with "panovskiy@thecloudset.com" in iframe ".js-stripeLinkAuthenticationElement iframe"
    Then I save screenshot to "email.png"
    Then I fill in "number" with "4242 4242 4242 4242" in iframe ".js-stripePaymentElement iframe"
    Then I fill in "expiry" with "12/31" in iframe ".js-stripePaymentElement iframe"
    Then I fill in "cvc" with "123" in iframe ".js-stripePaymentElement iframe"
    Then I save screenshot to "card_info.png"
    Then I click on the ".js-stripeSubmit" with the text "Confirm"
    Then I save screenshot to "card_confirm.png"
    Then I wait text "Привязанные карты" appear
    Then I save screenshot to "card_success.png"

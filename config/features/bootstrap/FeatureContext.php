<?php

use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext
{
    private $login;
    private $password;

    public function __construct()
    {
        $this->login = $_ENV['BEHAT_USER_LOGIN'];
        $this->password = $_ENV['BEHAT_USER_PASSWORD'];
    }

    /**
     * @Given /^(?:|I )am logged in as Client$/
     */
    public function iAmLoggedInAsClient()
    {
        $this->visit('/login');
        $this->fillField('username', $this->login);
        $this->fillField('password', $this->password);
        $this->pressButton('войти');
    }

    /**
     * @When I follow :link in the :element element
     */
    public function iFollowInTheElement($link, $element)
    {
        $link = $this->fixStepArgument($link);
        $element = $this->fixStepArgument($element);

        $this->getSession()->getPage()->find('css', $element)->clickLink($link);
    }
}

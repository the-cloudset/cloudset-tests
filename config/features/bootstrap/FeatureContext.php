<?php

use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext
{
    /**
     * @Given /^(?:|I )am logged in as Client$/
     */
    public function iAmLoggedInAsClient()
    {
        $this->visit('/login');
        $this->fillField('username', 'panovskiy@thecloudset.com');
        $this->fillField('password', 'cloudset22dog');
        $this->pressButton('войти');
    }
}

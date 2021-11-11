<?php

use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext
{
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

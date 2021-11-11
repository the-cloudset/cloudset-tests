<?php

use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext
{
    private const BLOCKS_SELECTORS = [
        'profile menu' => '.userpage-aside__menu',
    ];

    /**
     * @When I follow :link in the :blockName
     */
    public function iFollowInTheBlock($link, $blockName)
    {
        $link = $this->fixStepArgument($link);
        $blockName = $this->fixStepArgument($blockName);
        $blockSelector = self::BLOCKS_SELECTORS[$blockName] ?? null;
        if ($blockSelector === null) {
            throw new InvalidArgumentException('Unknown block name: ' . $blockName);
        }

        $this->getSession()->getPage()->find('css', $blockSelector)->clickLink($link);
    }
}

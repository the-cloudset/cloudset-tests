<?php

use Behat\MinkExtension\Context\MinkContext;

/**
 * Defines application features from the specific context.
 */
class FeatureContext extends MinkContext
{
    private const BLOCKS_SELECTORS = [
        'profile menu' => '.userpage__aside',
    ];

    /**
     * @When I follow :link in the :blockName
     */
    public function iFollowInTheBlock($link, $blockName)
    {
        $link = $this->fixStepArgument($link);
        $blockSelector = $this->getBlockSelector($blockName);

        $this->getSession()->getPage()->find('css', $blockSelector)->clickLink($link);
    }

    /**
     * @Then I should see :text in the :blockName
     */
    public function iShouldSeeInTheBlock($text, $blockName)
    {
        $text = $this->fixStepArgument($text);
        $blockSelector = $this->getBlockSelector($blockName);

        $this->assertSession()->elementTextContains('css', $blockSelector, $text);
    }

    /**
     * Get block selector based on name of block
     *
     * @return string
     *
     * @throws InvalidArgumentException
     */
    private function getBlockSelector(string $blockName): string
    {
        $blockSelector = self::BLOCKS_SELECTORS[$blockName] ?? null;
        if ($blockSelector === null) {
            throw new InvalidArgumentException('Unknown block name: ' . $blockName);
        }

        return $blockSelector;
    }
}

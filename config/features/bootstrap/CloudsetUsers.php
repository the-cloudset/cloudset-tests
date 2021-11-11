<?php

use Behat\MinkExtension\Context\RawMinkContext;

/**
 * Defines application users login info using environment variables
 *
 * Define configuration using json format.
 * Example:
 * ```CLOUDSET_USERS={"user1":{"login":"login1", "password":"pas1"}, "user2":{"login":"login2", "password":"pas2"}} ```
 */
class CloudsetUsers extends RawMinkContext
{
    private $users;

    public function __construct()
    {
        $this->users = json_decode($_ENV['CLOUDSET_USERS'] ?? '[]', true, 512);

        if ($this->users === null) {
            throw new InvalidArgumentException('$_ENV["CLOUDSET_USERS"] must be in json format');
        }
    }

    /**
     * @Given I am logged in as :user
     */
    public function iAmLoggedInAsClient($user)
    {
        $user = $this->users[$user] ?? null;
        if ($user === null) {
            throw new InvalidArgumentException('Unknown user. Set users info using CLOUDSET_USERS environment variable');
        }

        $this->getSession()->visit($this->locatePath('/login'));

        $this->getSession()->getPage()->fillField('username', $user['login'] ?? '');
        $this->getSession()->getPage()->fillField('password', $user['password'] ?? '');
        $this->getSession()->getPage()->pressButton('войти');
    }
}

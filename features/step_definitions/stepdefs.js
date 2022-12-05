const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, WebDriver, Capability } = require('selenium-webdriver');

let driver = new Builder()
    .usingServer('http://selenium-hub:4444/wd/hub')
    .forBrowser('chrome')
    .build();

Given('I am on {string}', async function (url) {
    await driver.get('http://www.google.com/ncr');
});

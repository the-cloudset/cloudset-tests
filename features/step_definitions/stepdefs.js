const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, WebDriver, Capability, Key } = require('selenium-webdriver');
const {After, Before} = require('@cucumber/cucumber');
let driver;
// Asynchronous Promise
Before(function () {
    // Assuming this.driver is a selenium webdriver
    driver = new Builder()
        .usingServer('http://selenium-hub:4444/wd/hub')
        .forBrowser('chrome')
        .build();

    driver.manage().window().setRect({width: 1920, height: 1080});
});

Given('I am on {string}', {timeout: 60 * 1000}, async function (url) {
    await driver.get('https://thecloudset.com' + url);
});

Then('I click on element with class {string}', async function (jsclass) {
    await driver.findElement(By.className(jsclass)).click();
});

Then('I click on css selector {string}', async function (cssSelector) {
    await driver.findElement(By.css(cssSelector)).click();
});

Then('I fill in {string} with {string}', {timeout: 60 * 1000}, function (inputName, text) {
    return driver.findElement(By.name(inputName)).sendKeys(text, Key.RETURN);
});

Then('I wait element {string} appear', async function (cssSelector) {
    await driver.wait(until.elementLocated(By.css(cssSelector)));
});

Then('{string} should be = {int}', function (cssSelector, value) {
    return driver.findElement(By.css(cssSelector)).getText().then(function (selectorText) {
        assert.equal(selectorText, value);
    });
});

Then('I should see {string}', function (text) {
    return driver.findElement(By.css('body')).getText().then(function (pageText) {
        assert.match(pageText, new RegExp(text));
    });
});

Then('I should not see {string}', function (text) {
    return driver.findElement(By.css('body')).getText().then(function (pageText) {
        assert.doesNotMatch(pageText, new RegExp(text));
    });
});

// Asynchronous Promise
After(function () {
  driver.actions({ async: true }).clear();
  // Assuming this.driver is a selenium webdriver
  return driver.quit();
});

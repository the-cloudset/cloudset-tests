const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, WebDriver, Capability, Key } = require('selenium-webdriver');
const {After, Before} = require('@cucumber/cucumber');
const { type } = require('os');
let driver;
// Asynchronous Promise
Before(function () {
    // Assuming this.driver is a selenium webdriver
    driver = new Builder()
        .usingServer('http://selenium-hub:4444/wd/hub')
        .forBrowser('chrome')
        .build();

    driver.manage().window().setRect({width: 1920, height: 1080});
    driver.manage().deleteAllCookies();
});

Given('I am on {string}', {timeout: 60 * 1000}, async function (url) {
    await driver.get('https://test01.thecloudset.com' + url);
});

Then('I click on element with class {string}', async function (jsclass) {
    await driver.findElement(By.className(jsclass)).click();
});

Then('I click on css selector {string}', async function (cssSelector) {
    await driver.findElement(By.css(cssSelector)).click();
});

Then('I fill in {string} with {string}', {timeout: 60 * 1000}, async function (inputName, text) {
    let input = await driver.findElement(By.name(inputName));
    await input.click();
    await input.sendKeys(text);
});

Then('I submit {string}', {timeout: 60 * 1000}, async function (inputName) {
    let input = await driver.findElement(By.name(inputName));
    await input.sendKeys(Key.ENTER);
});

Then('I wait element {string} appear', {timeout: 60 * 1000},  async function (cssSelector) {
    await driver.wait(until.elementLocated(By.css(cssSelector)));
});

Then('{string} should be = {int}', function (cssSelector, value) {
    return driver.findElement(By.css(cssSelector)).getText().then(function (selectorText) {
        assert.equal(selectorText, value);
    });
});

Then('I should see {string} in element {string}' , function (text, cssSelector) {
    return driver.findElement(By.css(cssSelector)).getText().then(function (pageText) {
        assert.match(pageText, new RegExp(text));
    });
});

Then('I should see {string} in {string}' , function (text, parentClass) {
    return driver.findElement(By.css(`${parentClass}`)).getText().then(function (pageText) {
        assert.match(pageText, new RegExp(text));
    });
});

Then('I click on the {string} with the text {string}', {timeout: 60 * 1000}, async function (parentClass, buttonText) {
    parent = await driver.findElement(By.css(`${parentClass}`));
    button = await parent.findElement(By.xpath(`.//*[text()='${buttonText}']`));
    await driver.wait(until.elementIsVisible(button));
    await button.click();
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

Then('I save screenshot to {string}', async function (filename) {
    await driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile(`/tmp/${filename}`, image, 'base64', function(err) {});
        }
    );
})

// Asynchronous Promise
After(function () {
  driver.actions({ async: true }).clear();
  // Assuming this.driver is a selenium webdriver
  return driver.quit();
});

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, WebDriver, Capability, Key } = require('selenium-webdriver');
const {After, Before} = require('@cucumber/cucumber');
const { type } = require('os');
let driver;
// Asynchronous Promise
Before(async function () {
    // Assuming this.driver is a selenium webdriver
    driver = new Builder()
        .usingServer('http://selenium-hub:4444/wd/hub')
        .forBrowser('chrome')
        .build();

    driver.manage().window().setRect({width: 1920, height: 1080});
    await driver.manage().deleteAllCookies();
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

Then('I fill in {string} with {string} in iframe {string}', {timeout: 60 * 1000}, async function (inputName, text, iframeSelector) {
    let iframe = await driver.findElement(By.css(iframeSelector));
    await driver.switchTo().frame(iframe);
    let input = await driver.findElement(By.name(inputName));
    await input.click();
    await input.sendKeys(text);
    await driver.switchTo().defaultContent();
});

Then('I submit {string}', {timeout: 60 * 1000}, async function (inputName) {
    let input = await driver.findElement(By.name(inputName));
    await input.sendKeys(Key.ENTER);
});

Then('I wait element {string} appear', {timeout: 60 * 1000},  async function (cssSelector) {
    await driver.wait(until.elementLocated(By.css(cssSelector)));
});

Then('I wait for element with class {string} to be visible', {timeout: 60 * 1000},  async function (className) {
    await driver.wait(until.elementIsVisible(driver.findElement(By.className(className))));
});

Then ('I wait for {string} to be visible', {timeout: 60 * 1000},  async function (cssSelector) {
    await driver.wait(until.elementIsVisible(driver.findElement(By.css(cssSelector))));
});


Then('{string} should be = {int}', async function (cssSelector, value) {
    await driver.findElement(By.css(cssSelector)).getText().then(async function (selectorText) {
        await assert.equal(selectorText, value);
    });
});

Then('I should see {string} in element {string}', async function (text, cssSelector) {
    await driver.findElement(By.css(cssSelector)).getText().then(async function (pageText) {
        await assert.match(pageText, new RegExp(text));
    });
});

Then('I should see {string} in {string}' , function (text, parentClass) {
    return driver.findElement(By.css(`${parentClass}`)).getText().then(async function (pageText) {
        await assert.match(pageText, new RegExp(text));
    });
});

Then('I should see {string} in element with class {string}' , function (text, className) {
    return driver.findElement(By.className(className)).getText().then(async function (pageText) {
        await assert.match(pageText, new RegExp(text));
    });
});
Then('I click on the {string} with the text {string}', {timeout: 60 * 1000}, async function (parentClass, buttonText) {
    parent = await driver.findElement(By.css(`${parentClass}`));
    button = await parent.findElement(By.xpath(`.//*[text()='${buttonText}']`));
    await driver.wait(until.elementIsVisible(button));
    await button.click();
});

Then ('I wait {int} seconds', {timeout: 60 * 1000}, async function (seconds) {
    await driver.sleep(seconds * 1000);
});

Then ('I wait text {string} appear', {timeout: 60 * 1000}, async function (elementText) {
    await driver.wait(until.elementLocated(By.xpath(`//*[contains(text(),'${elementText}')]`)));
});

Then('I should see {string}', async function (text) {
    await driver.findElement(By.css('body')).getText().then(async function (pageText) {
        await assert.match(pageText, new RegExp(text));
    });
});

Then('I should not see {string}', async function (text) {
    await driver.findElement(By.css('body')).getText().then(async function (pageText) {
        await assert.doesNotMatch(pageText, new RegExp(text));
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
After(async function () {
    try {
        await driver.actions({ async: true }).clear();
    } catch(e) {

    }
    // Assuming this.driver is a selenium webdriver
    await driver.quit();
});

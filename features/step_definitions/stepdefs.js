const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, WebDriver, Capability } = require('selenium-webdriver');
const {After, Before} = require('@cucumber/cucumber');

let driver = new Builder()
    .usingServer('http://selenium-hub:4444/wd/hub')
    .forBrowser('chrome')
    .build();

Given('I am on {string}', async function (url) {
    await driver.get('https://thecloudset.com' + url);
});

When('I follow {string}', function (string) {
    this.driver.findElement({ id: 'searchText' }).click();
});

// Asynchronous Promise
After(function () {
  // Assuming this.driver is a selenium webdriver
  return driver.quit();
});

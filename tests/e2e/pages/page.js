/* global by, browser */

var Page = function () {
    var appTitle = element(by.xpath('//a[@id=\'app-title\']'));
    var appFooter = element(by.xpath('//app-about'));
    var formPageLink = element(by.xpath('//a[@id=\'form-page-link\']'));
    var jsonPageLink = element(by.xpath('//a[@id=\'json-page-link\']'));
    var mountainsListPageLink = element(by.xpath('//a[@id=\'mountains-list-page-link\']'));
    var todosListPageLink = element(by.xpath('//a[@id=\'todos-list-page-link\']'));

    this.clickAppTitle = function () {
        appTitle.click();
    };

    this.clickFormPageLink = function () {
        formPageLink.click();
    };

    this.clickJsonPageLink = function () {
        jsonPageLink.click();
    };

    this.clickMountainsListPageLink = function () {
        mountainsListPageLink.click();
    };

    this.clickTodosPageLink = function () {
        todosListPageLink.click();
    };

    this.getAppTitle = function () {
        return appTitle.getText();
    };

    this.getAppFooter = function () {
        return appFooter.getText();
    };

    this.getHomepage = function () {
        browser.get('index.html');
    };

    this.getLocation = function () {
        return browser.getLocationAbsUrl();
    };
};

module.exports = new Page();

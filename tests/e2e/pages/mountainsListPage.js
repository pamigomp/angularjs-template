/* global by, browser */

var MountainsListPage = function () {
    var panelTitle = element(by.css('.panel-title'));
    var rowName = '//a//span[text()=\'%s\']';
    var mountainLink = rowName + '/..';

    this.clickMountainLink = function (mountainName) {
        var xpath = mountainLink.replace('%s', mountainName);
        var row = element(by.xpath(xpath));
        row.click();
    };

    this.getMountainsListPage = function () {
        browser.get('index.html#/mountains/list');
    };

    this.getPanelTitle = function () {
        return panelTitle.getText();
    };

    this.isMountainPresent = function (mountainName) {
        var xpath = rowName.replace('%s', mountainName);
        var mountain = element(by.xpath(xpath));
        return mountain.isPresent();
    };
};

module.exports = new MountainsListPage();


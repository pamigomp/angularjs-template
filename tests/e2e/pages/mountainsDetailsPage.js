/* global by, browser */

var MountainsDetailsPage = function () {
    var backButton = element(by.xpath('//button[@id=\'back-btn\']'));
    var deleteButton = element(by.xpath('//button[@id=\'delete-btn\']'));
    var panelTitle = element(by.xpath('//a[@id=\'title\']'));

    this.clickBackButton = function () {
        backButton.click();
    };

    this.clickDeleteButton = function () {
        deleteButton.click();
    };

    this.getMountainsDetailsPage = function (mountainId) {
        browser.get('index.html#/mountains/' + mountainId + '/details');
    };

    this.getPanelTitle = function () {
        return panelTitle.getText();
    };
};

module.exports = new MountainsDetailsPage();


/* global by, browser */

var JsonPage = function () {
    var panelTitle = element(by.css('.panel-title'));
    var preText = element(by.id('json'));

    this.getPanelTitle = function () {
        return panelTitle.getText();
    };

    this.getJsonPage = function () {
        browser.get('index.html#/json');
    };

    this.isTextPresent = function () {
        return preText.isPresent();
    };
};

module.exports = new JsonPage();


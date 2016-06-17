/* global by, browser */

var TodosListPage = function () {
    var addButton = element(by.xpath('//button[@id=\'add-btn\']'));
    var deleteButton = element(by.xpath('//button[@id=\'delete-btn\']'));
    var panelTitle = element(by.css('.panel-title'));
    var rowName = '//tr//span[text()=\'%s\']';
    var rowCheckboxForName = rowName + '//..//..//td[6]//input';
    var searchField = element(by.xpath('//input[@id=\'search\']'));

    this.clickAddButton = function () {
        addButton.click();
    };

    this.clickDeleteButton = function () {
        deleteButton.click();
    };

    this.getPanelTitle = function () {
        return panelTitle.getText();
    };

    this.getTodosListPage = function () {
        browser.get('index.html#/todos/list');
    };

    this.isRowForNamePresent = function (name) {
        var xpath = rowName.replace('%s', name);
        var row = element(by.xpath(xpath));
        return row.isPresent();
    };

    this.markRowsAsCompleted = function (name) {
        var xpath = rowCheckboxForName.replace('%s', name);
        var row = element(by.xpath(xpath));
        row.click();
    };

    this.searchText = function (textToSearch) {
        searchField.clear();
        searchField.sendKeys(textToSearch);
    };
};

module.exports = new TodosListPage();


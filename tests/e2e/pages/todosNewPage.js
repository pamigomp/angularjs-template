/* global by, browser */

var TodosNewPage = function () {
    var addButton = element(by.xpath('//button[@id=\'add-btn\']'));
    var dateField = element(by.xpath('//input[@id=\'todo-date\']'));
    var estimatedTimeField = '//select[@id=\'todo-estimated-time\']//option[normalize-space(text())=\'%s\']';
    var nameField = element(by.xpath('//input[@id=\'todo-name\']'));
    var panelTitle = element(by.css('.panel-title'));
    var typeField = '//select[@id=\'todo-type\']//option[normalize-space(text())=\'%s\']';

    this.clickAddButton = function () {
        addButton.click();
    };

    this.isAddButtonEnabled = function () {
        return addButton.isEnabled();
    };

    this.getTodosNewPage = function () {
        browser.get('index.html#/todos/new');
    };

    this.getPanelTitle = function () {
        return panelTitle.getText();
    };

    this.typeName = function (todoName) {
        nameField.clear();
        nameField.sendKeys(todoName);
    };

    this.selectType = function (todoType) {
        var xpath = typeField.replace('%s', todoType);
        var option = element(by.xpath(xpath));
        option.click();
    };

    this.selectEstimatedTime = function (todoEstimatedTime) {
        var xpath = estimatedTimeField.replace('%s', todoEstimatedTime);
        var option = element(by.xpath(xpath));
        option.click();
    };

    this.selectDate = function (todoDate) {
        dateField.clear();
        dateField.sendKeys(todoDate);
        nameField.click();
    };
};

module.exports = new TodosNewPage();


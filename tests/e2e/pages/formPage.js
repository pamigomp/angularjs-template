/* global by, browser */

var FormPage = function () {
    var ageField = element(by.xpath('//input[@id=\'age\']'));
    var contactForm = element(by.xpath('//pre[@id=\'contactForm\']'));
    var emailField = element(by.xpath('//input[@id=\'email\']'));
    var femaleField = element(by.xpath('//input[@id=\'female\']'));
    var maleField = element(by.xpath('//input[@id=\'male\']'));
    var nameField = element(by.xpath('//input[@id=\'firstName\']'));
    var noteField = element(by.xpath('//textarea[@id=\'info\']'));
    var panelTitle = element(by.css('.panel-title'));
    var saveButton = element(by.xpath('//button[@id=\'save-btn\']'));
    var surnameField = element(by.xpath('//input[@id=\'lastName\']'));

    this.clickSaveButton = function () {
        saveButton.click();
    };

    this.getPanelTitle = function () {
        return panelTitle.getText();
    };

    this.getFormPage = function () {
        browser.get('index.html#/form');
    };

    this.isSaveButtonEnabled = function () {
        return saveButton.isEnabled();
    };

    this.getSavedContactForm = function () {
        return contactForm.getText();
    };

    this.typeName = function (name) {
        nameField.clear();
        nameField.sendKeys(name);
    };

    this.typeSurname = function (surname) {
        surnameField.clear();
        surnameField.sendKeys(surname);
    };

    this.typeEmail = function (email) {
        emailField.clear();
        emailField.sendKeys(email);
    };

    this.selectMaleGender = function () {
        maleField.click();
    };

    this.selectFemaleGender = function () {
        femaleField.click();
    };

    this.typeAge = function (age) {
        ageField.clear();
        ageField.sendKeys(age);
    };

    this.typeNote = function (note) {
        noteField.clear();
        noteField.sendKeys(note);
    };
};

module.exports = new FormPage();


/* global browser, expect, by, element */

'use strict';

describe('AngularJS Template', function () {

    it('should automatically redirect to /todos/list when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toEqual('/todos/list');
    });

    it('should automatically redirect to /todos/list when user click on app title', function () {
        browser.get('index.html#/json');
        var appTitle = element(by.xpath('//a[@id=\'app-title\']'));
        appTitle.click();
        expect(browser.getLocationAbsUrl()).toEqual('/todos/list');
    });

    describe('todos list', function () {
        beforeEach(function () {
            browser.get('index.html#/todos/list');
        });

        it('should render todos list when user navigates to /todos/list', function () {
            var panelTitle = element.all(by.css('.panel-title')).first().getText();
            expect(panelTitle).toEqual('To-do list');
        });

        it('should render add task when user click on \'Add todo\' button', function () {
            var addBtn = element(by.xpath('//button[@id=\'add-btn\']'));
            addBtn.click();
            var panelTitle = element.all(by.css('.panel-title')).first().getText();
            expect(panelTitle).toEqual('Add todo');
        });
    });

    describe('json', function () {
        beforeEach(function () {
            browser.get('index.html#/json');
        });

        it('should render json view when user navigates to /json', function () {
            expect(element(by.id('json')).isDisplayed()).toBeTruthy();
        });
    });

    describe('mountains\' list', function () {
        beforeEach(function () {
            browser.get('index.html#/mountains/list');
        });

        it('should render mounatins\' list when user navigates to /mountains/list', function () {
            var panelTitle = element.all(by.css('.panel-title')).first().getText();
            expect(panelTitle).toEqual('List of mountains');
        });

        it('should render details of mountain when user click on mountain', function () {
            var firstMountainLink = element(by.xpath('//p[1]/a'));
            var mountain = element(by.xpath('//p[1]/a/span[1]'));
            mountain.getText().then(function (name) {
                firstMountainLink.click();
                var panelTitle = element.all(by.css('.list-group-item')).first().getText();
                expect(panelTitle).toEqual('Details of ' + name);
            });
        });
    });

    describe('form', function () {
        beforeEach(function () {
            browser.get('index.html#/form');
        });

        it('should render form when user navigates to /form', function () {
            var panelTitle = element.all(by.css('.panel-title')).first().getText();
            expect(panelTitle).toEqual('Form');
        });
    });
});

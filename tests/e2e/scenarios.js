/* global browser, expect */

'use strict';

describe('AngularJS Template', function () {
    var page = require('./pages/page.js');

    it('should automatically redirect to /todos/list when location hash/fragment is empty', function () {
        page.getHomepage();
        expect(page.getLocation()).toEqual('/todos/list');
    });

    it('should display name, version and author of app in footer ', function () {
        page.getHomepage();
        expect(page.getAppFooter()).toEqual('AngularJS Template app v0.0.4 by Michal Pietrzak');
    });

    describe('todos list', function () {
        var todosListPage = require('./pages/todosListPage.js');

        beforeEach(function () {
            todosListPage.getTodosListPage();
        });

        it('should render todos list when user navigates to /todos/list', function () {
            expect(todosListPage.getPanelTitle()).toEqual('To-do list');
        });

        it('should delete completed todos', function () {
            expect(todosListPage.isRowForNamePresent('Date')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Gym')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Homework')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Meeting')).toBeTruthy();

            todosListPage.markRowsAsCompleted('Date');
            todosListPage.markRowsAsCompleted('Meeting');
            todosListPage.clickDeleteButton();

            expect(todosListPage.isRowForNamePresent('Date')).toBeFalsy();
            expect(todosListPage.isRowForNamePresent('Gym')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Homework')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Meeting')).toBeFalsy();
        });

        it('should filter tasks when user type text into search field', function () {
            var textToSearch = 'Homework';

            todosListPage.searchText(textToSearch);
            expect(todosListPage.isRowForNamePresent('Date')).toBeFalsy();
            expect(todosListPage.isRowForNamePresent('Gym')).toBeFalsy();
            expect(todosListPage.isRowForNamePresent('Homework')).toBeTruthy();
            expect(todosListPage.isRowForNamePresent('Meeting')).toBeFalsy();
        });

        it('should render add task when user click on \'Add todo\' button', function () {
            todosListPage.clickAddButton();
            expect(todosListPage.getPanelTitle()).toEqual('Add todo');
        });
    });

    describe('new todo', function () {
        var todosNewPage = require('./pages/todosNewPage.js');

        beforeEach(function () {
            todosNewPage.getTodosNewPage();
        });

        it('should render mountain\'a details when user navigates to /todos/new', function () {
            expect(todosNewPage.getPanelTitle()).toEqual('Add todo');
        });

        it('should add new todo when user click on add button', function () {
            var todoName = 'Programming!';
            var todoType = 'Science';
            var todoEstimatedTime = '6 h';
            var todoDate = '23/05/2016';

            todosNewPage.typeName(todoName);
            todosNewPage.selectType(todoType);
            todosNewPage.selectEstimatedTime(todoEstimatedTime);
            todosNewPage.selectDate(todoDate);

            expect(todosNewPage.isAddButtonEnabled()).toBeTruthy();

            todosNewPage.clickAddButton();

            var todosListPage = require('./pages/todosListPage.js');

            expect(todosListPage.isRowForNamePresent(todoName)).toBeTruthy();
        });
    });

    describe('json', function () {
        var jsonPage = require('./pages/jsonPage.js');

        beforeEach(function () {
            jsonPage.getJsonPage();
        });

        it('should render json view when user navigates to /json', function () {
            expect(jsonPage.isTextPresent()).toBeTruthy();
        });

        it('should automatically redirect to /todos/list when user click on app title', function () {
            page.clickAppTitle();
            expect(page.getLocation()).toEqual('/todos/list');
        });
    });

    describe('mountains\' list', function () {
        var mountainsListPage = require('./pages/mountainsListPage.js');

        beforeEach(function () {
            mountainsListPage.getMountainsListPage();
        });

        it('should render mounatins\' list when user navigates to /mountains/list', function () {
            expect(mountainsListPage.getPanelTitle()).toEqual('List of mountains');
        });

        it('should render details of mountain when user click on mountain', function () {
            var mountainName = 'Annapurna';

            mountainsListPage.clickMountainLink(mountainName);

            var mountainsDetailsPage = require('./pages/mountainsDetailsPage.js');

            expect(mountainsDetailsPage.getPanelTitle()).toEqual('Details of ' + mountainName);
        });
    });

    describe('mountain\'s details', function () {
        var mountainsDetailsPage = require('./pages/mountainsDetailsPage.js');
        var mountainId = 10;
        var mountainName = 'Annapurna';

        beforeEach(function () {
            mountainsDetailsPage.getMountainsDetailsPage(mountainId);
        });

        it('should render mountain\'a details when user navigates to /mountains/10/details', function () {
            expect(mountainsDetailsPage.getPanelTitle()).toEqual('Details of ' + mountainName);
        });

        it('should delete mountain from mountains\' list when user click on delete button', function () {
            mountainsDetailsPage.clickDeleteButton();

            var mountainsListPage = require('./pages/mountainsListPage.js');

            expect(mountainsListPage.isMountainPresent(mountainName)).toBeFalsy();
        });

        it('should back to mountains\' list when user click on back button', function () {
            mountainsDetailsPage.clickBackButton();

            expect(page.getLocation()).toEqual('/mountains/list');
        });
    });

    describe('form', function () {
        var formPage = require('./pages/formPage.js');

        beforeEach(function () {
            formPage.getFormPage();
        });

        it('should render form when user navigates to /form', function () {
            expect(formPage.getPanelTitle()).toEqual('Form');
        });

        it('should save form when user click on save button', function () {
            var name = 'Michal';
            var surname = 'Pietrzak';
            var email = 'm.pietrzak93@yahoo.com';
            var age = '22';
            var note = 'It is an awesome angular template!';

            formPage.typeName(name);
            formPage.typeSurname(surname);
            formPage.typeEmail(email);
            formPage.selectMaleGender();
            formPage.typeAge(age);
            formPage.typeNote(note);

            expect(formPage.isSaveButtonEnabled()).toBeTruthy();

            formPage.clickSaveButton();

            expect(formPage.getSavedContactForm()).toContain(note);
        });
    });
});

/* global expect */

"use strict";

describe("TodosListController", function () {
    var scope, controller, vm;

    beforeEach(module("app.todos.list"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        scope.IC = {};
        scope.IC.todos = [
            {
                "title": "Date",
                "done": false,
                "type": {
                    "name": "Personal",
                    "gico": "heart"
                },
                "estimates": 3,
                "date": "11/11/2015"
            },
            {
                "title": "Gym",
                "done": false,
                "type": {
                    "name": "Health",
                    "gico": "tint"
                },
                "estimates": 2,
                "date": "12/11/2015"
            },
            {
                "title": "Homework",
                "done": false,
                "type": {
                    "name": "Science",
                    "gico": "book"
                },
                "estimates": 4,
                "date": "14/11/2015"
            },
            {
                "title": "Meeting",
                "done": false,
                "type": {
                    "name": "Business",
                    "gico": "usd"
                },
                "estimates": 1,
                "date": "15/11/2015"
            }
        ];
        controller = $controller("TodosListController", {$scope: scope});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should delete element from todos list", function () {
        scope.IC.todos[0].done = true;

        vm.deleteCompleted();

        expect(scope.IC.todos).toEqual([
            {
                "title": "Gym",
                "done": false,
                "type": {
                    "name": "Health",
                    "gico": "tint"
                },
                "estimates": 2,
                "date": "12/11/2015"
            },
            {
                "title": "Homework",
                "done": false,
                "type": {
                    "name": "Science",
                    "gico": "book"
                },
                "estimates": 4,
                "date": "14/11/2015"
            },
            {
                "title": "Meeting",
                "done": false,
                "type": {
                    "name": "Business",
                    "gico": "usd"
                },
                "estimates": 1,
                "date": "15/11/2015"
            }
        ]);
    });
});

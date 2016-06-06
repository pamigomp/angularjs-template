"use strict";

describe("IndexController", function () {
    var log, location, todosService, controller, httpBackend, vm;

    beforeEach(module("app.index"));
    beforeEach(module("app.todosService"));

    beforeEach(inject(function ($controller, $httpBackend, _todosService_, $log, $location) {
        location = $location;
        log = $log;
        todosService = _todosService_;
        httpBackend = $httpBackend;
        controller = $controller("IndexController", {});
        vm = controller;
    })); 

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should contain todos list - HTTP 200", function () {
        httpBackend.expectGET("assets/data/todos.json").respond([
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
        ]);
        httpBackend.flush();

        expect(vm.todos).toEqual([
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
        ]);
    });

    it("should not contain todos array - HTTP 404", function () {
        httpBackend.expectGET("assets/data/todos.json").respond(404);
        httpBackend.flush();

        expect(vm.todos).toEqual([]);
    });
});

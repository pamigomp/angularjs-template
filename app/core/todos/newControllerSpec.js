/* global expect */

"use strict";

describe("TodosNewController", function () {
    var scope, log, state, categoriesService, controller, httpBackend, vm;

    beforeEach(module("app.todos.new"));

    beforeEach(inject(function ($controller, $rootScope, $httpBackend, _categoriesService_, $log, $state) {
        state = $state;
        log = $log;
        categoriesService = _categoriesService_;
        httpBackend = $httpBackend;
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
        controller = $controller("TodosNewController", {$scope: scope, $state: state});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should contain categories array - HTTP 200", function () {
        httpBackend.expectGET("assets/data/categories.json").respond([
            {
                "name": "Personal",
                "gico": "heart"
            },
            {
                "name": "Health",
                "gico": "tint"
            },
            {
                "name": "Science",
                "gico": "book"
            },
            {
                "name": "Business",
                "gico": "usd"
            },
            {
                "name": "Home",
                "gico": "home"
            },
            {
                "name": "Other",
                "gico": "paperclip"
            }
        ]);
        httpBackend.flush();

        expect(vm.categories).toEqual(
                [
                    {
                        "name": "Personal",
                        "gico": "heart"
                    },
                    {
                        "name": "Health",
                        "gico": "tint"
                    },
                    {
                        "name": "Science",
                        "gico": "book"
                    },
                    {
                        "name": "Business",
                        "gico": "usd"
                    },
                    {
                        "name": "Home",
                        "gico": "home"
                    },
                    {
                        "name": "Other",
                        "gico": "paperclip"
                    }
                ]
                );
    });

    it("should not contain categories array - HTTP 404", function () {
        httpBackend.expectGET("assets/data/categories.json").respond(404);
        httpBackend.flush();

        expect(vm.categories).toEqual([]);
    });

    it("should add new todo and redirect to todos list view", function () {
        vm.formData.newTodo = "New todo";
        vm.formData.type = {name: "Health", gico: "tint"};
        vm.formData.estimates = 2;
        vm.formData.date = "01/06/2016";

        spyOn(state, "go");
        vm.addTodo();

        expect(scope.IC.todos).toEqual([
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
            },
            {
                "title": "New todo",
                "done": false,
                "type": {
                    "name": "Health",
                    "gico": "tint"
                },
                "estimates": 2,
                "date": "01/06/2016"
            }
        ]);
        expect(vm.formData.newTodo).toEqual("");
        expect(state.go).toHaveBeenCalledWith("root.todos.list");
    });
});

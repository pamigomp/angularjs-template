/* global expect */

"use strict";

describe("MenuController", function () {
    var scope, state, controller, vm;

    beforeEach(module("app.nav.menu"));

    beforeEach(inject(function ($controller, $rootScope, $state) {
        state = $state;
        scope = $rootScope.$new();
        state.current.name = "root.todos.list";
        controller = $controller("MenuController", {$scope: scope, $state: state});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should set active class to current path", function () {
        expect(vm.getClass("root.todos.list")).toEqual("active");
    });

    it("should not set active class to other paths", function () {
        expect(vm.getClass("root.json")).toEqual("");
    });
});

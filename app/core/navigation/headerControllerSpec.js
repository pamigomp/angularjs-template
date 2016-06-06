/* global expect */

"use strict";

describe("HeaderController", function () {
    var controller, vm;

    beforeEach(module("app.nav.header"));

    beforeEach(inject(function ($controller) {
        controller = $controller("HeaderController", {});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });
});

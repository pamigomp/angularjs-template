/* global expect */

"use strict";

describe("FooterController", function () {
    var controller, vm;

    beforeEach(module("app.nav.footer"));

    beforeEach(inject(function ($controller) {
        controller = $controller("FooterController", {});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });
});

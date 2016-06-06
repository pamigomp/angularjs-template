/* global expect */

"use strict";

describe("BreadcrumbsController", function () {
    var controller, vm;

    beforeEach(module("app.nav.breadcrumbs"));

    beforeEach(inject(function ($controller) {
        controller = $controller("BreadcrumbsController", {});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });
});

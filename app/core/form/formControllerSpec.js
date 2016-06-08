/* global expect */

"use strict";

describe("FormController", function () {
    var date, controller, vm;

    beforeEach(module("app.form"));

    beforeEach(inject(function ($controller) {
        controller = $controller("FormController");
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should update contact form", function () {
        date = new Date();
        expect(vm.contactForm).toEqual({date: date});

        var contact = {
            "firstname": "Michal",
            "surname": "Pietrzak",
            "email": "angular@angular.com",
            "info": "This is an awesome template!",
            "gender": "male",
            "age": "22"
        };

        vm.update(contact);
        expect(vm.contactForm).toEqual({
            "firstname": "Michal",
            "surname": "Pietrzak",
            "email": "angular@angular.com",
            "info": "This is an awesome template!",
            "gender": "male", "age": "22"}
        );
    });
});


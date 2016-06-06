/* global expect */

"use strict";

describe("MountainsDetailsController", function () {
    var stateParams, state, mountainsService, controller, vm;

    beforeEach(module("app.mountains.details"));

    beforeEach(inject(function ($controller, _mountainsService_, $state) {
        state = $state;
        mountainsService = _mountainsService_;
        stateParams = {mountainId: "1"};
        controller = $controller("MountainsDetailsController", {$stateParams: stateParams, $state: state});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

    it("should get mountain with given id", function () {
        expect(vm.mountain).toEqual({id: "1", mountain: "Mount Everest", metres: 8850, country: "Nepal-China"});
    });

    it("should delete element from mountains\" list and redirect to mountain\"s list view", function () {
        spyOn(state, "go");
        vm.delete(stateParams.mountainId);
        expect(state.go).toHaveBeenCalledWith("root.mountains.list");
    });
});

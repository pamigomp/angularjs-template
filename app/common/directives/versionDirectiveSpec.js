/* global expect */

"use strict";

describe("Version directive", function () {
    var elm, scope;

    beforeEach(module("app.version-directive"));

    it("should return current version", inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        elm = angular.element('<span app-version></span>');
        $compile(elm)(scope);
        expect(elm.text()).toEqual("0.0.1");
    }));
});

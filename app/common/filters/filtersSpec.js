/* global expect */

"use strict";

describe("Filter", function () {
    beforeEach(module("app.filters"));

    it("has a rangeTime filter", inject(function ($filter) {
        expect($filter("rangeTime")).not.toBeNull();
    }));

    it("rangeTime should return array of numbers with fractions", inject(function (rangeTimeFilter) {
        expect(rangeTimeFilter([], 5, true)).toEqual([0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]);
    }));

    it("rangeTime should return array of numbers without fractions", inject(function (rangeTimeFilter) {
        expect(rangeTimeFilter([], 5, false)).toEqual([1, 2, 3, 4]);
    }));
});

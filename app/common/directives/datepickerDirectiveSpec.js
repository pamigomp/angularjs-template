/* global expect */

"use strict";

describe("Datepicker directive", function () {
    var date, elm, scope;

    beforeEach(module("app.directives.datepicker"));

    it('should put the date in the model', function () {
        return inject(function ($compile, $rootScope) {
            scope = $rootScope.$new();
            date = new Date('2016-05-23T00:00:00.000Z');
            elm = angular.element('<input data-ng-date-picker=\'\' data-ng-model=\'x\'></input>');
            $compile(elm)(scope);
            elm.datepicker('setDate', date);
            $.datepicker._selectDate(elm);
            expect(scope.x).toEqual('23/05/2016');
        });
    });
});

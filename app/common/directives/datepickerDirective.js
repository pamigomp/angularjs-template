(function () {
    'use strict';

    angular.module('app.directives.datepicker', [])

            .directive('ngDatePicker', ngDatePicker);

    ngDatePicker.$inject = [];

    function ngDatePicker() {
        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attrs, ctrl) {
            element.datepicker({
                changeYear: true,
                changeMonth: true,
                showWeek: false,
                firstDay: 1,
                dayNames: 'en',
                dateFormat: 'dd/mm/yy',
                onSelect: onSelectFunc
            });

            function onSelectFunc(date) {
                ctrl.$setViewValue(date);
                scope.$apply();
            }
        }
    }
})();

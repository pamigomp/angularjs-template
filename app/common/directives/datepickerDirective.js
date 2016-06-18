(function () {
    'use strict';

    angular.module('app.directives.datepicker', [])

            .directive('ngDatePicker', function () {
                return {
                    restrict: 'A',
                    require: 'ngModel',
                    link: function (scope, element, attrs, ctrl) {
                        element.datepicker({
                            changeYear: true,
                            changeMonth: true,
                            showWeek: false,
                            firstDay: 1,
                            dayNames: 'en',
                            dateFormat: 'dd/mm/yy',
                            onSelect: function (date) {
                                ctrl.$setViewValue(date);
                                scope.$apply();
                            }
                        });
                    }
                };
            });
})();

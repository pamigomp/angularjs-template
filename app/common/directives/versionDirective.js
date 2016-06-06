'use strict';

angular.module('app.version-directive', ['app'])

        .directive('appVersion', ['APP_VERSION', function (APP_VERSION) {
                return function (scope, elm, attrs) {
                    elm.text(APP_VERSION);
                };
            }]);

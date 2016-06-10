'use strict';

angular.module('app.directives.about', ['app'])

        .directive('appAbout', ['APP_NAME', 'APP_VERSION', 'APP_AUTHOR', function (APP_NAME, APP_VERSION, APP_AUTHOR) {
                return function (scope, elm, attrs) {
                    elm.text(APP_NAME + ' app v' + APP_VERSION + ' by ' + APP_AUTHOR);
                };
            }]);

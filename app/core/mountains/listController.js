'use strict';

angular.module('app.mountains.list', ['app.mountainsService'])

        .controller('MountainsListController', ['mountainsService', function (mountainsService) {
                var vm = this;

                vm.mountains = mountainsService.getAll();
            }]);

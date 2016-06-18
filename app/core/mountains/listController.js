(function () {
    'use strict';

    angular.module('app.mountains.list', ['app.mountainsService'])

            .controller('MountainsListController', MountainsListController);

    MountainsListController.$inject = ['mountainsService'];

    function MountainsListController(mountainsService) {
        var vm = this;

        vm.mountains = mountainsService.getAll();
    }
})();

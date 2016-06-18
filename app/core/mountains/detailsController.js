(function () {
    'use strict';

    angular.module('app.mountains.details', ['ui.router', 'app.mountainsService'])

            .controller('MountainsDetailsController', MountainsDetailsController);

    MountainsDetailsController.$inject = ['$stateParams', '$state', 'mountainsService'];

    function MountainsDetailsController($stateParams, $state, mountainsService) {
        var vm = this;

        vm.delete = deleteById;
        vm.mountain = mountainsService.getById($stateParams.mountainId);

        function deleteById(mountainId) {
            mountainsService.deleteById(mountainId);
            $state.go('root.mountains.list');
        }
    }
})();

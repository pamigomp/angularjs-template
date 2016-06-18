(function () {
    'use strict';

    angular.module('app.mountains.details', ['ui.router', 'app.mountainsService'])

            .controller('MountainsDetailsController', ['$stateParams', '$state', 'mountainsService', function ($stateParams, $state, mountainsService) {
                    var vm = this;

                    vm.delete = deleteById;
                    vm.mountain = mountainsService.getById($stateParams.mountainId);

                    function deleteById(mountainId) {
                        mountainsService.deleteById(mountainId);
                        $state.go('root.mountains.list');
                    }
                }]);
})();

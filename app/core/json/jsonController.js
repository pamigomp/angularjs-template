(function () {
    'use strict';

    angular.module('app.json', ['app.jsonService'])

            .controller('JsonController', JsonController);

    JsonController.$inject = ['$log', 'jsonService'];

    function JsonController($log, jsonService) {
        var vm = this;

        vm.json = [];

        retrieve();

        function retrieve() {
            return getJson().then(function () {
                $log.info('Retrieved Json');
            });
        }

        function getJson() {
            return jsonService.getData().then(function (data) {
                vm.json = data;
                return vm.json;
            });
        }
    }
})();

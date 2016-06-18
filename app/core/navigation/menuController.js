(function () {
    'use strict';

    angular.module('app.nav.menu', ['ui.router'])

            .controller('MenuController', MenuController);

    MenuController.$inject = ['$state'];

    function MenuController($state) {
        var vm = this;

        vm.getClass = getClass;

        function getClass(path) {
            if ($state.current.name.substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }
    }
})();

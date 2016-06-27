(function () {
    'use strict';

    angular.module('app.todos.list', ['ngAnimate'])

            .controller('TodosListController', TodosListController);

    TodosListController.$inject = ['$scope'];

    function TodosListController($scope) {
        var vm = this;

        vm.deleteCompleted = deleteCompleted;

        function deleteCompleted() {
            $scope.IC.todos = $scope.IC.todos.filter(function (item) {
                return !item.done;
            });
        }
    }
})();

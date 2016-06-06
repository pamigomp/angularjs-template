'use strict';

angular.module('app.index', ['app.todosService'])

        .controller('IndexController', ['$log', 'todosService', function ($log, todosService) {
                var vm = this;
                vm.todos = [];

                retrieve();

                function retrieve() {
                    return getTodos().then(function () {
                        $log.info('Retrieved Todos');
                    });
                }

                function getTodos() {
                    return todosService.getTodos()
                            .then(function (data) {
                                vm.todos = data;
                                return vm.todos;
                            });
                }
            }]);

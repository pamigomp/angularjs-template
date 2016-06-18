(function () {
    'use strict';

    angular.module('app.todosService', [])

            .factory('todosService', todosService);

    todosService.$inject = ['$http', '$log', '$q'];

    function todosService($http, $log, $q) {
        return {
            getTodos: getTodos
        };

        function getTodos() {
            return $http.get('assets/data/todos.json')
                    .then(getTodosComplete)
                    .catch(getTodosFailed);

            function getTodosComplete(response) {
                return response.data;
            }

            function getTodosFailed(e) {
                var newMessage = 'XHR Failed for getTodos.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();

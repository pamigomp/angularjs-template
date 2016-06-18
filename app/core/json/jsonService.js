(function () {
    'use strict';

    angular.module('app.jsonService', [])

            .factory('jsonService', jsonService);

    jsonService.$inject = ['$http', '$log', '$q'];

    function jsonService($http, $log, $q) {
        return {
            getData: getData
        };

        function getData() {
            return $http.get('assets/data/data.json')
                    .then(getDataComplete)
                    .catch(getDataFailed);

            function getDataComplete(response) {
                return response.data;
            }

            function getDataFailed(e) {
                var newMessage = 'XHR Failed for getData.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
    }
})();

(function () {
    'use strict';

    angular.module('app.categoriesService', [])

            .factory('categoriesService', ['$http', '$log', '$q', function ($http, $log, $q) {
                    return {
                        getCategories: getCategories
                    };

                    function getCategories() {
                        return $http.get('assets/data/categories.json')
                                .then(getCategoriesComplete)
                                .catch(getCategoriesFailed);

                        function getCategoriesComplete(response) {
                            return response.data;
                        }

                        function getCategoriesFailed(e) {
                            var newMessage = 'XHR Failed for getCategories.';
                            $log.error(newMessage);
                            return $q.reject(e);
                        }
                    }
                }]);
})();

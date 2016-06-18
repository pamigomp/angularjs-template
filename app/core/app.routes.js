(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/todos/list');
        $urlRouterProvider.when('/', '/todos/list');
        $urlRouterProvider.when('/todos', '/todos/list');
        $urlRouterProvider.when('/todos/', '/todos/list');
        $urlRouterProvider.when('/mountains', '/mountains/list');
        $urlRouterProvider.when('/mountains/', '/mountains/list');
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('root', {
                    abstract: true,
                    url: '/',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'header': {
                            templateUrl: 'core/navigation/headerView.html',
                            controller: 'HeaderController',
                            controllerAs: 'HC'
                        },
                        'menu': {
                            templateUrl: 'core/navigation/menuView.html',
                            controller: 'MenuController',
                            controllerAs: 'MC'
                        },
                        'breadcrumbs': {
                            templateUrl: 'core/navigation/breadcrumbsView.html',
                            controller: 'BreadcrumbsController',
                            controllerAs: 'BC'
                        },
                        'content': {
                            template: 'Choose option from menu...'
                        },
                        'footer': {
                            templateUrl: 'core/navigation/footerView.html',
                            controller: 'FooterController',
                            controllerAs: 'FC'
                        }
                    }
                })
                .state('root.todos', {
                    abstract: true,
                    url: 'todos',
                    data: {
                        title: 'Todos',
                        breadcrumb: 'Todos'
                    }
                })
                .state('root.todos.list', {
                    url: '/list',
                    data: {
                        title: 'To-do list',
                        breadcrumb: 'List'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/todos/listView.html',
                            controller: 'TodosListController',
                            controllerAs: 'TLC'
                        }
                    }
                })
                .state('root.todos.new', {
                    url: '/new',
                    data: {
                        title: 'New todo',
                        breadcrumb: 'New'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/todos/newView.html',
                            controller: 'TodosNewController',
                            controllerAs: 'TNC'
                        }
                    }
                })
                .state('root.json', {
                    url: 'json',
                    data: {
                        title: 'Json',
                        breadcrumb: 'Json'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/json/jsonView.html',
                            controller: 'JsonController',
                            controllerAs: 'JC'
                        }
                    }
                })
                .state('root.mountains', {
                    abstract: true,
                    url: 'mountains',
                    data: {
                        title: 'Mountains',
                        breadcrumb: 'Mountains'
                    }
                })
                .state('root.mountains.list', {
                    url: '/list',
                    data: {
                        title: 'List of mountains',
                        breadcrumb: 'List'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/mountains/listView.html',
                            controller: 'MountainsListController',
                            controllerAs: 'MLC'
                        }
                    }
                })
                .state('root.mountains.mountain', {
                    abstract: true,
                    url: '/:mountainId',
                    data: {
                        title: '[Mountain name]',
                        breadcrumb: '[Mountain name]'
                    }
                })
                .state('root.mountains.mountain.details', {
                    url: '/details',
                    data: {
                        title: 'Mountain details',
                        breadcrumb: 'Details'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/mountains/detailsView.html',
                            controller: 'MountainsDetailsController',
                            controllerAs: 'MDC'
                        }
                    }
                })
                .state('root.form', {
                    url: 'form',
                    data: {
                        title: 'Form',
                        breadcrumb: 'Form'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/form/formView.html',
                            controller: 'FormController',
                            controllerAs: 'FC'
                        }
                    }
                });
    }
})();

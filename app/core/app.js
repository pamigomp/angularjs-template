(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
        'app.form',
        'app.json',
        'app.mountains.details',
        'app.mountains.list',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.todos.new',
        'app.todos.list',
        'app.directives.datepicker',
        'app.directives.about',
        'app.filters'
    ]);
})();

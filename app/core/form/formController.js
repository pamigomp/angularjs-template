(function () {
    'use strict';

    angular.module('app.form', [])

            .controller('FormController', function () {
                var vm = this;

                var date = new Date();
                vm.contactForm = {date: date};
                vm.update = update;

                function update(contact) {
                    vm.contactForm = angular.copy(contact);
                }
            });
})();

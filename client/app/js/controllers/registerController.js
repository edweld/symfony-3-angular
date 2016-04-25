(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('RegisterController', RegisterController);
 
    RegisterController.$inject = ['UserService', '$location', '$rootScope', '$timeout'];
    function RegisterController(UserService, $location, $rootScope, $timeout) {
        var vm = this;
 
        vm.register = register;
        vm.hide = true;
 
	(function initController() {
            $timeout(function () { vm.hide = false;},1000);
        })();

 
        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        $location.path('/login');
                    } else {
                        vm.dataLoading = false;
                    }
                });
        }
    }
 
})();

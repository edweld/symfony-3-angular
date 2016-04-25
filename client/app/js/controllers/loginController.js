(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('LoginController', LoginController);
 
    LoginController.$inject = ['$location', '$timeout','AuthenticationService'];

    function LoginController($location,$timeout, AuthenticationService) {
        var vm = this;
 
        vm.login = login;
        vm.hide = true;
	vm.error = false;
 
        (function initController() {
            $timeout(function () { vm.hide = false;},1000);
            // reset login status
            AuthenticationService.ClearCredentials();
        })();
 
        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.email, vm.pin, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.email, vm.pin);
                    vm.dataLoading = false;
                    $location.path('/dashboard');
                } else {
		    vm.error = true;
                    vm.dataLoading = false;
                }
            });
        };
    }
 
})();

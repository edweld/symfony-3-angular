(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$rootScope','UserService','$location'];

    function DashboardController($rootScope,UserService,$location) {
        var vm = this;
	
        UserService.GetByEmail($rootScope.globals.currentUser.email).then(function(user){
	    vm.user = user;
	});
    }
})();


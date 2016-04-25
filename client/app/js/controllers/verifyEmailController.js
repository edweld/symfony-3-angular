(function () {
    'use strict';
 
    angular
        .module('app')
        .controller('VerifyEmailController', VerifyEmailController);
 
    VerifyEmailController.$inject = ['$location', 'UserService','$timeout','$templateCache'];
    function VerifyEmailController($location, UserService, $timeout,$templateCache) {
        var vm = this;
 
        vm.verifyemail = verify;
        vm.hide = true;

        (function initController() {
            $timeout(function () { vm.hide = false;},1000);
	    //clean email data
	    vm.email = $location.search().email ? $location.search().email : '';
        })();

 
        function verify() {
            vm.dataLoading = true;
            UserService.VerifyEmail(vm.email).then(function (response) { 
		if(response.success){
            	    $location.path('verifyemailsent').search({email:vm.email}); 
		}else{
			
		}
	    }); 
	/** DO SOME VERIFYING **/
            console.log(vm);
        };
    }
 
})();

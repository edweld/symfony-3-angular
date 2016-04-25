(function () {
    'use strict';
 
    angular
        .module('app', ['ngRoute', 'ngCookies','ngAnimate'])
        .config(config)
        .run(run);
 
    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
	var partials = 'bundles/framework/partials';
        $routeProvider
            .when('/login', {
                controller: 'LoginController',
                templateUrl: partials+'/login.html',
                controllerAs: 'vm'
            })
 
            .when('/register', {
                controller: 'RegisterController',
                templateUrl: partials+'/register.html',
                controllerAs: 'vm'
            })
            .when('/dashboard',{
                controller: 'DashboardController',
                templateUrl: partials+'/dashboard.html',
                controllerAs: 'vm'
	    })
            .when('/verifyemail',{
                controller: 'VerifyEmailController',
                templateUrl: partials+'/verifyemail.html',
                controllerAs: 'vm'
            })
            .when('/verifyemailsent',{
                controller: 'VerifyEmailController',
                templateUrl: partials+'/verifyemailsent.html',
                controllerAs: 'vm'
        }) 
        .otherwise({ redirectTo: '/login' });
    }
 
    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            //var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var restrictedPage = (['/login','/register','/verifyemail','/verifyemailsent'].indexOf($location.path()) === -1);
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }
 
})();

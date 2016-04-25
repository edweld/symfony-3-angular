'use strict';

//http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).config(function($routeProvider, $locationProvider){
	$routeProvider.when('/login',{
	    controller:'Login',
	    templateUrl:'partials/login.html'
	}).when('/register',{
	    controller: 'Register',
	    templateUrl: 'partials/register.html'
	}).when('/verifyemail',{
	    controller: 'VerifyEmail',
	    templateUrl: 'partials/verifyemail.html'
	}).when('/verifyemailsent',{
	    controller: 'VerifyEmail',
	    templateUrl: 'partials/verifyemailsent.html'
	}).otherwise({redirectTo:'/login'});
	//$locationProvider.html5Mode(true); //activate HTML5 Mode
});


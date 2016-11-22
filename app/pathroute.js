
	var app=angular.module('BillApp',['ngRoute','ngResource']);
	app.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'app/views/bill.html',
			controller:'PersonCtrl'
		})
		.when("/login",{
			templateUrl:'app/views/login.html',
			controller:"PersonCtrl"
		})
		/*.when("/person/:personId",{
			templateUrl:'app/views/persondetail.html',
			controller:"PersonCtrl"
		})*/
		.otherwise({redirectTo:'/'})
	})

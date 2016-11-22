


	var BillApp=angular.module('BillApp',['ngRoute','ngResource']);

	var PersonCtrl= function($scope,$http)
	{
		$scope.working='Angular is Working';

		var onError=function(error){
			$scope.error=error.data;
		};

		var onAddPersonCompleted= function(response){
			$scope.person=response.data;
			console.log(response.data);
			
		};

		$scope.addPerson=function(person){
			
			$http.post('/addPerson',person)
				.then(onAddPersonCompleted,onError);
			console.log(person);
		};

		$scope.searchPerson= function(email){
			$http.get('/person'+email)
				.then(onGetByIdCompleted,onError);
			console.log(id);
		};

		var onGetByIdCompleted=function(response){
			$scope.person=response.data;
			console.log(response.data);
		}

	}



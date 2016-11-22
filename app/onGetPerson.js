var onPersonGetCompleted=function(response){
	$scope.persons=response.data;
	console.log($scope.persons);
}

var refresh=function(){
	$http.get('/')
	.then(onPersonsGetCompleted,onError);
console.log('Response Received');
}
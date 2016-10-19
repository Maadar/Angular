(function()	{
	var app = angular.module('main', []);
	
	app.controller('ctrl', ['$scope', '$http', '$log', function($scope, $http, $log){
		$http.get('https://jsonplaceholder.typicode.com/users')
			.success(function(data, id) {
	
				$scope.users=data;
	
			})
			.error(function(data, status){
	
				$log.error('Unexpected error number: '+status+'');
	
			});
			$scope.removeFromCart = function(id) {
				$scope.users.splice(id, 1);
			};
	}]);
})();
angular.module('appRoutes1', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {


	$routeProvider


		// home page
		
		.when('/home', {
			templateUrl: 'views/home.html'	
		})
		.when('/sample', {
			templateUrl: 'views/sample.html'	
		});


	$locationProvider.html5Mode(true);


}]);


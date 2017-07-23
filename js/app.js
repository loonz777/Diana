angular.module('DianaWeb', ['ngRoute','RouteControllers', 'UserService', 'angular-storage']);

angular.module('DianaWeb').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
  		.when('/aboutMe', {
			templateUrl:'templates/aboutme.html',
	})
		.when('/photos', {
			templateUrl:'templates/photos.html',
	})
		.when('/login', {
			templateUrl: 'templates/login.html',
	})
		.when('/buy', {
			templateUrl: 'templates/buy.html'
	})
		.when('/video', {
			templateUrl: 'templates/videos.html'
	})
		.when('/register', {
			templateUrl:'templates/register.html',
			controller: 'RegisterController'
	});
});
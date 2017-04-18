var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider.when('/friends',{
		templateUrl: 'partials/friends.html',
		controller:  'friends_cxr'
	})
	$routeProvider.when('/friends/new',{
		templateUrl: 'partials/friends_new.html',
		controller:  'friends_cxr'
	})
	$routeProvider.when('/friends/edit/:id',{
		templateUrl: 'partials/friends_edit.html',
		controller:  'friends_cxr'
	})
	$routeProvider.when('/friends/show/:id',{
		templateUrl: 'partials/friends_show.html',
		controller:  'friends_cxr'
	})
	$routeProvider.otherwise({
		redirectTo: '/friends'
	})
})
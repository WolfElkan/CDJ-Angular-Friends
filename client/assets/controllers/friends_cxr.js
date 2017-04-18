app.controller('friends_cxr',['$scope','FriendFactory','$routeParams',function( $scope , FriendFactory , $routeParams ) {
	if ($routeParams.id) {
		$scope.id = $routeParams.id
	}
	$scope.friend = FriendFactory.find($routeParams.id)
	$scope.Friend = FriendFactory
}])

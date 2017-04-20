app.controller('friends_cxr',['$scope','FriendFactory','$routeParams','$location',function( $scope , FriendFactory , $routeParams , $location ) {
	if ($routeParams.id) {
		var id = $routeParams.id
		if (FriendFactory.findex(id)+1) {
			$scope.id = id
			$scope.friend = FriendFactory.find(id)
			$scope.friend.birthday_str = pretty($scope.friend.birthday)
		} else {
			$location.url('/friends')
		}
	}
	$scope.Friend = FriendFactory
	$scope.new_friend = {}
	$scope.create = function() {
		FriendFactory.create($scope.new_friend,function(data) {
			$scope.new_friend = {}
		})

	}
}])

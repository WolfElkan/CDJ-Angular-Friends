app.controller('friends_cxr',['$scope','FriendFactory','$routeParams','$location',function( $scope , FriendFactory , $routeParams , $location ) {
	if ($routeParams.id) {
		var id = $routeParams.id
		if (FriendFactory.findex(id)+1) {
			$scope.id = id
			var friend = FriendFactory.find(id)
			$scope.friend = friend
			console.log($scope.friend)
			$scope.friend.unix_birthday = unix(friend.birthday)
			$scope.friend.pretty_birthday = pretty(unix(friend.birthday))
			// $scope.friend.birthday_str = 'his birthday'
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

app.controller('friends_cxr',['$scope','FriendFactory','$routeParams','$location',function( $scope , FriendFactory , $routeParams , $location ) {
	console.log('cxr')
	if ($routeParams.id) {
		var _id = $routeParams.id
		// console.log(_id)
		if (FriendFactory.findex(_id)+1) {
			$scope._id = _id
			var friend = FriendFactory.find(_id)
			$scope.friend = friend
			$scope.friend.unix_birthday = unix(friend.birthday)
			$scope.friend.pretty_birthday = pretty(unix(friend.birthday))
			console.log('current friend:')
			console.log($scope.friend.first_name,$scope.friend.last_name)
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

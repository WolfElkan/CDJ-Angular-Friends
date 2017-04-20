app.factory('FriendFactory',['$location','$http',function( $location , $http ) {
	var factory = {}
	var content = []
	$http.get('/friends/index').then(function(returned) {
		var friends = returned.data.friends
		for (var i = 0; i < friends.length; i++) {
			friends[i].id = i+1
			content.push(friends[i])
		}
	})
	factory.new = {}

	factory.all = function() {
		return content
	}

	factory.findex = function(id) {
		for (var i = 0; i < content.length; i++) {
			if (content[i].id == id) {
				return i
			}
		}
	}

	factory.find = function(id) {
		var index = factory.findex(id)
		return content[index]
	}

	function valid(thing) {
		return true
	}

	factory.create = function(new_friend,callback) {
		content.push(new_friend)
		$http.post('/friends/create',new_friend)
		.then(function(returned) {
		// 	if (typof(callback) == 'function') {
		// 		callback(returned.data)
		// 	}
			console.log(returned)
		})
		new_friend = {}
		$location.url('/friends')
	}

	factory.update = function(id, patch) {
		var index = factory.findex(id)
		if (valid(patch)) {
			content[index] = patch
			$http.post('/friends/update',patch)
		}
		$location.url('/friends')
	}

	factory.delete = function(id) {
		var index = factory.findex(id)
		for (var i = index; i < content.length; i++) {
			$http.post('/friends/delete',{'local_id':id})
			content[i] = content[i+1]
		}
		content.pop()
	}

	factory.print = function() {
		console.log(content
		)
	}

	return factory
}])
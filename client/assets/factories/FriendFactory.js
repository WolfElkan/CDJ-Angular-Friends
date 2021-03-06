app.factory('FriendFactory',['$location','$http',function( $location , $http ) {
	var factory = {}
	var content = []
	$http.get('/friends/index').then(function(returned) {
		var friends = returned.data.friends
		for (var i = 0; i < friends.length; i++) {
			// friends[i].id = i+1
			content.push(friends[i])
		}
	})
	factory.new = {}

	factory.all = function() {
		return content
	}

	factory.findex = function(id,key='_id') {
		for (var i = 0; i < content.length; i++) {
			if (content[i][key] == id) {
				return i
			}
		}
	}

	factory.find = function(id,key='_id') {
		var index = factory.findex(id,key)
		return content[index]
	}

	function valid(friend) {
		return true
	}

	factory.create = function(new_friend,callback) {
		if (valid(new_friend)) {
			var next_temp_id = 0
			for (var i = 0; i < content.length; i++) {
				if (next_temp_id <= content[i].temp_id) {
					next_temp_id =  content[i].temp_id + 1
				}
			}
			new_friend.temp_id = next_temp_id++
			content.push(new_friend)
			$http.post('/friends/create',new_friend).then(function(returned) {
			// 	if (typof(callback) == 'function') {
			// 		callback(returned.data)
			// 	}
				console.log(returned.data)
				var temp_id = returned.data.temp_id
				var _id = returned.data._id
				var index = factory.findex(temp_id,'temp_id')
				content[index]._id = _id
				console.log(index,content[index]._id)
				$location.url('/friends')
			})
			new_friend = {}
		} else {
			// display errors
		}
	}

	factory.update = function(friend) {
		var _id = friend._id
		var patch = {
			'first_name' : friend_first_name,
			'last_name'  : friend_last_name,
			'birthday'   : friend_birthday,
		}
		patch._id = undefined
		var index = factory.findex(_id)
		if (valid(patch)) {
			content[index] = patch
			$http.post('/friends/update',{'query':{'_id':_id},'patch':patch})
		}
		$location.url('/friends')
	}

	factory.delete = function(_id) {
		var index = factory.findex(_id)
		$http.post('/friends/delete',{'_id':_id})
		for (var i = index; i < content.length; i++) {
			content[i] = content[i+1]
		}
		content.pop()
	}

	factory.print = function() {
		console.log(content)
	}

	return factory
	
}])
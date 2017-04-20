app.factory('FriendFactory',['$location','$http',function( $location , $http ) {
	var factory = {}
	// var content = [{'id':1,'first_name':'Wolf','last_name':'Elkan','birthday':new Date(729080820000)}]
	var content = []
	factory.new = {}
	var next_id = 2

	factory.all = function() {
		return content
	}

	factory.get = function(callback) {
		return callback(content)
	}

	factory.findex = function(id) {
		// console.log(null)
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
		new_friend.id = next_id++
		content.push(new_friend)
		$http.post('/friends/create',new_friend)
		// .then(function(returned_data) {
		// 	if (typof(callback) == 'function') {
		// 		callback(returned_data.data)
		// 	}
		// })
		new_friend = {}
		$location.url('/friends')
	}

	factory.update = function(id, patch) {
		var index = factory.findex(id)
		if (valid(patch)) {
			content[index] = patch
		}
		$location.url('/friends')
	}

	factory.delete = function(id) {
		var index = factory.findex(id)
		for (var i = index; i < content.length; i++) {
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
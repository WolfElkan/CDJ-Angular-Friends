app.factory('FriendFactory',['$location',function( $location ) {
	var factory = {}
	var content = []
	factory.new = {}
	var next_id = 1

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

	factory.create = function() {
		factory.new.id = next_id++
		content.push(factory.new)
		factory.new = {}
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
var Friend = require('../models/Friend.js')

module.exports = function(app) {

	app.post('/friends/create', function(request,response) {
		console.log(202)
		// console.log(Friend.Promise)
		new_friend = new Friend({
			first_name : request.body.first_name,
			last_name  : request.body.last_name,
			birthday   : request.body.birthday,
			local_id   : request.body.id,
		})
		new_friend.save(function(error) {
			if (error) {
				console.log(500)
				console.log(error)
			} else {
				console.log(201)
			}
		})
	})

}
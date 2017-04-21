var Friend = require('../models/Friend.js')

module.exports = function(app) {

	app.post('/friends/create', function(request,response) {
		new_friend = new Friend({
			first_name : request.body.first_name,
			last_name  : request.body.last_name,
			birthday   : request.body.birthday,
		})
		new_friend.save(function(error) {
			if (error) {
				console.log(500)
				console.log(error)
			} else {
				console.log(201)
				console.log(new_friend)
			}
		})
	})

	app.get('/friends/index', function(request, response) {
		response.json({'friends':[{'first_name':'Wolf','last_name':'Elkan','birthday':new Date(729080820000)}]})
		// var mongoose = require('../config/mongoose.js');
		// console.log(mongoose)
	})

	app.post('/friends/update', function(request, response) {

	})

	app.post('/friends/delete', function(request, response) {

	})

}
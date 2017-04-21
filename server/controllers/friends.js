var Friend = require('../models/friends.js')

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
				console.log(201.0)
				console.log(new_friend)
			}
		})
	})

	app.get('/friends/index', function(request, response) {
		// response.json({'friends':[{'first_name':'Wolf','last_name':'Elkan','birthday':new Date(729080820000)}]})
		// var mongoose = require('../config/mongoose.js');
		// console.log(mongoose)
		Friend.find({},function(error,result) {
			response.json({'friends':result})
		})

	})

	app.post('/friends/update', function(request, response) {
		var query = request.body.query
		var patch = request.body.patch
		console.log(patch)
		Friend.update(query,patch,function(error) {
			if (error) {
				console.log(500,error)
			} else {
				console.log(201.5)
			}
		})
	})

	app.post('/friends/delete', function(request, response) {
		Friend.remove({'_id':request.body._id},function(error) {
			if (error) {
				console.log(500,error)
			} else {
				console.log(201.9)
			}
		})
	})

}
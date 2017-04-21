var Friend = require('../models/friends.js')

module.exports = function(app) {

	app.post('/friends/create', function(request,response) {
		new_friend = new Friend({
			first_name : request.body.first_name,
			last_name  : request.body.last_name,
			birthday   : request.body.birthday,
			temp_id    : request.body.temp_id,
		})
		new_friend.save(function(error,result) {
			if (error) {
				console.log(500)
				console.log(error)
			} else {
				console.log(201.0)
				console.log(result)
				response.json(result)
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
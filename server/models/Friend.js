var mongoose = require('mongoose')

var next_id = 1

var FriendSchema = new mongoose.Schema({
	first_name: String,
	last_name:  String,
	birthday:   Date,
	// id:         7,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
mongoose.model('Friend',FriendSchema);
module.exports = mongoose.model('Friend');
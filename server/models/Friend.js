var mongoose = require('mongoose')

var FriendSchema = new mongoose.Schema({
	first_name: String,
	last_name:  String,
	birthday:   Date,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
mongoose.model('Friend',FriendSchema);
module.exports = mongoose.model('Friend');
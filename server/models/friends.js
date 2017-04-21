var mongoose = require('mongoose')

var FriendSchema = new mongoose.Schema({
	first_name: String,
	last_name:  String,
	birthday:   Date,
	temp_id:    Number,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
mongoose.model('friends',FriendSchema);
module.exports = mongoose.model('friends');
var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends420');
module.exports = mongoose;
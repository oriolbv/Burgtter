/* 
// In localhost
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function() {
	console.log('mongodb connected')
})
module.exports = mongoose
*/

var mongoose = require('mongoose')
var url = 'mongodb://heroku_8jfn3cff:2b3umeaunll5vehlesai6sblh0@ds055515.mongolab.com:55515/heroku_8jfn3cff' || 'mongodb://localhost/social'
mongoose.connect(url)
module.exports = mongoose
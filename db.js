/* 
// In localhost
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function() {
	console.log('mongodb connected')
})
module.exports = mongoose
*/

var mongoose = require('mongoose')
var url = process.env.MONGOLAB_URI || 'mongodb://localhost/social'
mongoose.connect(url)
module.exports = mongoose
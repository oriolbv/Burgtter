var db = require('../db')
var user = db.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, select: false}     // select is for don't send it down to the client
})

module.exports = db.model('User', user)
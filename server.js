var express = require('express')
var jwt = require('jwt-simple')
var app = express()
app.use(require('body-parser').json())

var secretKey = 'supersecretkey'

app.use('/api/posts', require('./controllers/api/posts'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))
app.use(require('./controllers/static'))	// equivalent to: app.use('/', require('./controllers/static'))

app.listen(3000, function() {
    console.log('Server listening on', 3000)
})

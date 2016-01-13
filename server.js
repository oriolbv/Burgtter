var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res) {
	Post.find()
		.sort('-date')
		.exec(function(err, posts) {
		if (err) { return err }
		res.json(posts)
	})
})

var Post = require('./models/post')
app.post('/api/posts', function (req, res) {
	console.log('post received!')
	console.log(req.body.username)
	console.log(req.body.body)
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	})
	post.save(function (err, post) {
		// return next(err) doesn't work
		if (err) { return err }
		res.json(201, post)
		res.send()
	})
})

app.get('/', function(req, res) {
	res.sendfile('layouts/posts.html')
})

app.listen(3000, function() {
	console.log('Server listening on', 3000)
})

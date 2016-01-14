var Post = require('../../models/post')
var router = require('express').Router();

router.get('/', function (req, res, next) {
	Post.find()
		.sort('-date')
		.exec(function(err, posts) {
		if (err) { return next(err) }
		res.json(posts)
	})
})


router.post('/', function (req, res, next) {
	console.log('post received!')
	console.log(req.body.username)
	console.log(req.body.body)
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	})
	post.save(function (err, post) {
		// return next(err) doesn't work
		if (err) { return next(err) }
		res.json(201, post)
		res.send()
	})
})

module.exports = router
var express = require('express')
var router = express.Router()

// Serve up the static assets
// __dirname is a special Node variable that points to the current file's dirctory (/controllers in this case)
// You could use process.cwd() instead of __dirname
router.use(express.static(__dirname + '/../assets'))

router.get('/', function(req, res) {
	res.sendfile('layouts/posts.html')
})

module.exports = router;
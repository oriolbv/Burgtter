# Node.js
http://nodejs.org/download

Version 4.		(I will use Ionic in this computer)


## Express
In the command-line : npm install express

# MongoDB
Example of register:
```json
{
	"_id" : ObjectId("538c997dac697631f0dfebce"),	
	"email" : "jeff@dickey.xxx",	
	"roles" : [ "admin", "operations" ]		
}
```

## playground DB

> $ use playground



## Inserting Documents
> $ db.users.insert({name: 'Oriol Burgaya', email: 'oriol@gmail.com', roles: ['admin', 'operations']})

> WriteResult({ "nInserted" : 1 })

> $_

## Querying Documents
> $ db.users.find()


> $ db.users.find(ObjectId("5693ee6ce9a29f0a2f540adb"))


> $ db.users.find({email: 'oriol@gmail.com'})

> $ db.users.find({roles: 'admin'})

# Basic HTML Posts.html

```html
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
</head>
<body ng-app='app'>
	<div ng-controller='PostsCtrl' class='container'>
		<h1>Recent Posts</h1>
		<button ng-click="addPost()" class="btn btn-default">Add Post</button>
		<ul class='list-group'>
			<li ng-repeat='post in posts' class='list-group-item'>
				<strong>@{{ post.username }}</strong>
				<span>{{ post.body }}</span>
			</li>
		</ul>
	</div>
	<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular.js'></script>
	<script>
		var app = angular.module('app', [])
		app.controller('PostsCtrl', function ($scope) {
			$scope.posts = [
				{
					username: 'oriolbv',
					body: 'Node rules!'
				},
				{
					username: 'queralew',
					body: 'Ereh tu? pueh fijate tu!'
				}
			]
			$scope.addPost = function() {
				$scope.posts.unshift({
					username : 'pecheringas',
					body : 'Number 8 never win the race!'
				})
			}
		})
	</script>
</body>
</html>
```

> unshifts is a JavaScript method on arrays that pushes a new element to the beginning of the array.

# Building a Node.js API

Create a file called "package.json" inside a new folder:

```json
{
	"name": "socialapp"	
}
```

> In the command line:

> $ cd <path-to-project-folder>

> $ npm install --save express

> $ npm install --save body-parser

Create a new file called server.js, and code:

```javascript
var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/api/posts', function (req, res){
	res.json([
		{
			username: 'gatIgos',
			body: '- Hola gat! - Hola gos!'
		}
	])
})

app.listen(3000, function() {
	console.log('Server listening on', 3000)
})
```
Then we can add this post:

```javascript
app.post('/api/posts', function (req, res) {
	console.log('post received!')
	console.log(req.body.username)
	console.log(req.body.body)
	res.send(201)
})
```

# MongoDB Models with Mongoose

> $ npm install --save mongoose

Create a new file called db.js with some of the base database connection logic:

```javascript
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function() {
	console.log('mongodb connected')
})
module.exports = mongoose
```

Then, create the new model post in models/post.js:

```javascript
var db = require('../db')
var Post = db.model('Post', {
	username: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, required: true, default: Date.now }
})
module.exports = Post
```

Now, in server.js, we can change the post function:

```javascript
var Post = require('./models/post')
app.post('/api/posts', function (req, res) {
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	})
	post.save(function (err, post) {
		if (err) { return next(err) }
		res.json(201, post)
	})
})
```

And then the get function:

```javascript
app.get('/api/posts', function (req, res) {
	Post.find(function(err, posts) {
		if (err) { return err }
		res.json(posts)
	})
})
```

# Integrating Node with Angular

To perform HTTP calls in Angular, you'll use its built-in HTTP client: $http.

First of all we have to serve the posts.html file from the API server. To do that, move the file into a folder called layouts, then write in server.js this code:

```javascript
app.get('/', function(req, res) {
	res.sendfile('layouts/posts.html')
})
```
Then in posts.html file:
```javascript
var app = angular.module('app', [])
	app.controller('PostsCtrl', function ($scope, $http) {
		$http.get('/api/posts').success(function (posts) {
			$scope.posts = posts
		})
		$scope.addPost = function() {
		// In $scope.postBody we can found the value of the input (ng-model="postBody")
			if ($scope.postBody) {
				$http.post('/api/posts', {
					username: 'orioloo',
					body: $scope.postBody
				}).success(function(post) {
					$scope.posts.unshift(post)
					// Clean the postBody in the model and view
					$scope.postBody = null		
				})
			}
		}
	})
```



## TO NOT RESTART SERVER ALL THE TIME
> $ npm install --global nodemon
> $ nodemon server.js


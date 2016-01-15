var app = angular.module('app', [])
app.controller('PostsCtrl', function ($scope, PostsSvc) {
    $scope.addPost = function() {
    // In $scope.postBody we can found the value of the input (ng-model="postBody")
        if ($scope.postBody) {
            PostsSvc.create({
                username: 'orioloo',
                body: $scope.postBody
            }).success(function(post) {
                $scope.posts.unshift(post)
                // Clean the postBody in the model and view
                $scope.postBody = null		
            })
        }
    }
    PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts
    })
})

app.service('PostsSvc', function($http) {
    this.fetch = function() {
        return $http.get('/api/posts')
    }
    this.create = function(post) {
        return $http.post('/api/posts', post)
    }
})
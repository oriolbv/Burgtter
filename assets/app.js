angular.module("app",["ngRoute"]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,e){t.login=function(t,o){e.login(t,o).then(function(t){console.log(t)})}}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(e){return t.post("/api/posts",e)}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"dickeyxxx",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},e.login=function(o,n){return t.post("/api/sessions",{username:o,password:n}).then(function(t){return e.token=t.data,e.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImxvZ2luLmN0cmwuanMiLCJwb3N0LnN2Yy5qcyIsInBvc3RzLmN0cmwuanMiLCJyb3V0ZXMuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlVzZXJTdmMiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0aGVuIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZmV0Y2giLCJnZXQiLCJjcmVhdGUiLCJwb3N0IiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJib2R5Iiwic3VjY2VzcyIsInBvc3RzIiwidW5zaGlmdCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIiwic3ZjIiwiZ2V0VXNlciIsImhlYWRlcnMiLCJYLUF1dGgiLCJ0b2tlbiIsInZhbCIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFBQyxPQUFBLE9BQ0EsWUNEQUQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxVQUFBLFNBQUFDLEVBQUFDLEdBQ0FELEVBQUFFLE1BQUEsU0FBQUMsRUFBQUMsR0FDQUgsRUFBQUMsTUFBQUMsRUFBQUMsR0FDQUMsS0FBQSxTQUFBQyxHQUNBQyxRQUFBQyxJQUFBRixTQ0xBVCxRQUFBQyxPQUFBLE9BQ0FXLFFBQUEsWUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFDLE1BQUEsV0FDQSxNQUFBRixHQUFBRyxJQUFBLGVBRUFGLEtBQUFHLE9BQUEsU0FBQUMsR0FDQSxNQUFBTCxHQUFBSyxLQUFBLGFBQUFBLE9DTkFsQixRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsYUFBQSxTQUFBLFdBQUEsU0FBQUMsRUFBQWdCLEdBQ0FoQixFQUFBaUIsUUFBQSxXQUNBakIsRUFBQWtCLFVBQ0FGLEVBQUFGLFFBQ0FYLFNBQUEsWUFDQWdCLEtBQUFuQixFQUFBa0IsV0FDQUUsUUFBQSxTQUFBTCxHQUNBZixFQUFBcUIsTUFBQUMsUUFBQVAsR0FDQWYsRUFBQWtCLFNBQUEsUUFLQUYsRUFBQUosUUFBQVEsUUFBQSxTQUFBQyxHQUNBckIsRUFBQXFCLE1BQUFBLE9DZkF4QixRQUFBQyxPQUFBLE9BQ0F5QixRQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsS0FBQTFCLFdBQUEsWUFBQTJCLFlBQUEsZUFDQUQsS0FBQSxhQUFBMUIsV0FBQSxlQUFBMkIsWUFBQSxrQkFDQUQsS0FBQSxVQUFBMUIsV0FBQSxZQUFBMkIsWUFBQSxrQkNMQTdCLFFBQUFDLE9BQUEsT0FDQVcsUUFBQSxXQUFBLFFBQUEsU0FBQUMsR0FDQSxHQUFBaUIsR0FBQWhCLElBQ0FnQixHQUFBQyxRQUFBLFdBQ0EsTUFBQWxCLEdBQUFHLElBQUEsY0FDQWdCLFNBQUFDLFNBQUFuQixLQUFBb0IsVUFHQUosRUFBQXpCLE1BQUEsU0FBQUMsRUFBQUMsR0FDQSxNQUFBTSxHQUFBSyxLQUFBLGlCQUNBWixTQUFBQSxFQUFBQyxTQUFBQSxJQUNBQyxLQUFBLFNBQUEyQixHQUVBLE1BREFMLEdBQUFJLE1BQUFDLEVBQUFDLEtBQ0FOLEVBQUFDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgJ25nUm91dGUnXHJcbl0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBVc2VyU3ZjKSB7XHJcbsKgwqAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuwqDCoMKgwqAgICAgVXNlclN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXHJcbsKgwqDCoMKgICAgIC50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XHJcbsKgwqDCoMKgwqDCoCAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbsKgwqDCoMKgICAgIH0pXHJcbsKgwqAgIH1cclxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgICB0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG7CoMKgwqDCoCAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJylcclxuwqDCoCAgfVxyXG7CoMKgICB0aGlzLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbsKgwqDCoMKgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcclxuwqDCoCAgfVxyXG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgUG9zdHNTdmMpIHtcclxuwqDCoCAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbsKgwqDCoMKgICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuwqDCoMKgwqDCoMKgICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgIMKgwqDCoMKgwqDCoMKgwqAgICAgdXNlcm5hbWU6ICdkaWNrZXl4eHgnLFxyXG4gICAgwqDCoMKgwqDCoMKgwqDCoCAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgIMKgwqDCoMKgwqDCoCAgfSkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgwqDCoMKgwqDCoMKgwqDCoCAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxyXG4gICAgwqDCoMKgwqDCoMKgwqDCoCAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsXHJcbiAgICDCoMKgwqDCoMKgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUG9zdHNTdmMuZmV0Y2goKS5zdWNjZXNzKGZ1bmN0aW9uIChwb3N0cykge1xyXG4gICAgICAgICRzY29wZS5wb3N0cyA9IHBvc3RzXHJcbiAgICB9KVxyXG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xyXG4gICAgJHJvdXRlUHJvdmlkZXJcclxuwqDCoCAgLndoZW4oJy8nLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnIH0pXHJcbsKgwqAgIC53aGVuKCcvcmVnaXN0ZXInLCB7IGNvbnRyb2xsZXI6ICdSZWdpc3RlckN0cmwnLCB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnIH0pXHJcbsKgwqAgIC53aGVuKCcvbG9naW4nLCB7IGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLCB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnIH0pXHJcbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdVc2VyU3ZjJywgZnVuY3Rpb24gKCRodHRwKSB7XHJcbsKgwqAgIHZhciBzdmMgPSB0aGlzXHJcbsKgwqAgIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG7CoMKgwqDCoCAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJywge1xyXG7CoMKgwqDCoMKgwqAgICAgICBoZWFkZXJzOiB7ICdYLUF1dGgnOiB0aGlzLnRva2VuIH1cclxuwqDCoMKgwqAgICAgfSlcclxuwqDCoCAgfVxyXG7CoMKgICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbsKgwqDCoMKgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xyXG7CoMKgwqDCoMKgwqAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZFxyXG7CoMKgwqDCoCAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcclxuwqDCoMKgwqDCoMKgICAgICAgc3ZjLnRva2VuID0gdmFsLmRhdGFcclxuwqDCoMKgwqDCoMKgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKClcclxuwqDCoMKgwqAgICAgfSlcclxuwqDCoCAgfVxyXG59KSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

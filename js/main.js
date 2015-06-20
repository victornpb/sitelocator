/**
 * AngularJS  
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp', [

]);

/**
 * Configure the Routes
 */
 /*
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

*/


app.controller('SearchCtrl', function ($scope, $http /* $scope, $location, $http */) {

	$scope.loading = false;


  $scope.performSearch = function() {

  	  $scope.loading = true;
      
      var hostName = $scope.hostName;
      
      //TODO: validate hostName

      //TODO: add user feedback

      //TODO: add error handling

      var requestUrl = "http://freegeoip.net/json/"+hostName;

      $http.get(requestUrl).then(function(response) {
            console.log(response);

            var point = {
            	lat: response.data.latitude,
            	lon: response.data.longitude
            }


            var location = mapController.position(point.lat, point.lon);
            mapController.createMarkerWithInfoWindow(hostName, location, "DETAILS TEMPLATE", {"autoOpen":true});

            $scope.loading = false;
	  });

  };

   
});


app.controller('MenuCtrl', function ($scope, $http /* $scope, $location, $http */) {
  
  $scope.loading = false;

  $scope.myLocation = function() {

  	$scope.loading = true;
      
      var ip;
      var requestUrl = "https://api.ipify.org?format=json";

      $http.get(requestUrl).then(function(response) {
            console.log(response);

            ip = response.data.ip;

           
	  }).then(function(){

	  		var requestUrl = "http://freegeoip.net/json/"+ip;

	      $http.get(requestUrl).then(function(response) {
	      		$scope.loading = false;

	            console.log(response);

	            var point = {
	            	lat: response.data.latitude,
	            	lon: response.data.longitude
	            }

	            var location = mapController.position(point.lat, point.lon);
	            mapController.createMarkerWithInfoWindow("Your location", location, "YOUR LOCATION. DETAILS TEMPLATE", {"icon":"arrow", "autoOpen":true});
		  });

	  });

  };

  $scope.clear = function() {
      
     mapController.clearMarkers();

  };

   
});





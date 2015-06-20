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


app.controller('SearchCtrl', function ($scope, $http, $rootScope, $compile, $timeout  /* $scope, $location, $http */) {

	$scope.loading = false;

	$http.get('markerDetails.html').then(function(response) {
        $scope.infoWindowTemplate = response.data;
    });


  $scope.performSearch = function() {

  	  $scope.loading = true;
      
      var hostName = $scope.hostName;
      var json;
      
      //TODO: validate hostName

      //TODO: add user feedback

      //TODO: add error handling

      var requestUrl = "http://freegeoip.net/json/"+hostName;

      $http.get(requestUrl).then(function(response) {
      		$scope.loading = false;

            json = response.data;

            var point = {
            	lat: json.latitude,
            	lon: json.longitude
            }

            //Template infoWindow
			var $scope1 = $rootScope.$new();
			
			$scope1.hostName = hostName;
			$scope1.ip = json.ip;
			$scope1.country_name = json.country_name;
			$scope1.country_code = json.country_code;
			$scope1.region_name = json.region_name;
			$scope1.region_code = json.region_code;
			$scope1.city = json.city;
			$scope1.zipcode = json.zipcode;
			$scope1.latitude = json.latitude;
			$scope1.longitude = json.longitude;
			$scope1.metro_code = json.metro_code;
			$scope1.area_code = json.area_code;
			
			$el = $compile($scope.infoWindowTemplate)($scope1);
			$scope1.$apply();
			var compiledHTML = $el.html();

			console.log(compiledHTML);

			debugger;;

            var location = mapController.position(point.lat, point.lon);
            mapController.createMarkerWithInfoWindow(hostName, location, compiledHTML, {"autoOpen":true});
			

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





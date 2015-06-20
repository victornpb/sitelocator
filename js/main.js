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


app.controller('SearchCtrl', function($scope, $http, $rootScope, $compile, $timeout /* $scope, $location, $http */ ) {

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

        var requestUrl = "http://freegeoip.net/json/" + hostName;

        $http.get(requestUrl).then(function(response) {
            $scope.loading = false;

            json = response.data;

            //Template infoWindow
            var $infoScope = $rootScope.$new();

            $infoScope.geo = json;
            $infoScope.geo.hostName = hostName;

            $el = $compile($scope.infoWindowTemplate)($infoScope);
            $infoScope.$apply();
            var compiledHTML = $el.html();

            var location = mapController.position(json.latitude, json.longitude);
            mapController.createMarkerWithInfoWindow(hostName, location, compiledHTML, {
                "autoOpen": true
            });


        });

    };


});


app.controller('MenuCtrl', function($scope, $http, $rootScope, $compile, $timeout /* $scope, $location, $http */ ) {

    $scope.loading = false;

    $http.get('markerDetailsMyLocation.html').then(function(response) {
        $scope.infoWindowTemplate = response.data;
    });

    $scope.myLocation = function() {

        $scope.loading = true;

        var requestUrl = "http://ip-api.com/json/";

        $http.get(requestUrl).then(function(response) {
            $scope.loading = false;

            var json = response.data;

            //Template infoWindow
            var $infoScope = $rootScope.$new();

            $infoScope.hostName = "Your aproximated location";
            $infoScope.geo = json;

            $el = $compile($scope.infoWindowTemplate)($infoScope);
            $infoScope.$apply();
            var compiledHTML = $el.html();

            var location = mapController.position(json.lat, json.lon);
            mapController.createMarkerWithInfoWindow("Your location", location, compiledHTML, {
                "icon": "arrow",
                "autoOpen": true
            });


        });

    };

    $scope.clear = function() {

        mapController.clearMarkers();

    };


});
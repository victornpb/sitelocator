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

/**
 * Controls the Blog
 */
app.controller('SearchCtrl', function ($scope /* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");

  $scope.performSearch = function() {
         
          console.log($scope.hostName);
          

  };

   
});


/**
 * AngularJS  
 * @author 
 */
/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp', []);

//Search field controller
app.controller('SearchCtrl', function($scope, $http, $rootScope, $compile, $timeout /* $scope, $location, $http */ ) {

    $scope.loading = false;

    $scope.performSearch = function() {

        $scope.loading = true;

        var hostName = $scope.hostName;
        var json;

        $scope.hostName = ""; //clear form

        hostName = validateHostName(hostName);
        //console.log(hostName);

        if(!hostName){
            $scope.loading = false;
            $("#invalidHostAlert").modal("show");
            return;
        }

        var requestUrl = "http://freegeoip.net/json/"+hostName;

        $http.get(requestUrl)
        .then(function(response) {
            $scope.loading = false;

            json = response.data;
            json.hostName = hostName;

            //Template infoWindow
            var infoContent = markerDetails(json);

            var location = mapController.position(json.latitude, json.longitude);
            mapController.createMarkerWithInfoWindow(hostName, location, infoContent, {
                "autoOpen": true
            });

        })
        .catch(function(data, status){
            $scope.loading = false;
            $("#error404Alert").modal("show");
        });

    };


});

//Menu controller
app.controller('MenuCtrl', function($scope, $http, $rootScope, $compile, $timeout /* $scope, $location, $http */ ) {

    $scope.showingMyLocation = false;
    $scope.loading = false;

    $scope.myLocation = function() {

        $scope.loading = true;

        var requestUrl = "http://ip-api.com/json/";

        $http.get(requestUrl)
        .then(function(response) {
            $scope.showingMyLocation = true;
            $scope.loading = false;

            var json = response.data;

            //Template infoWindow
            var infoContent = markerDetailsMyLocation(json);

            var location = mapController.position(json.lat, json.lon);
            mapController.createMarkerWithInfoWindow("Your location", location, infoContent, {
                "icon": "arrow",
                "autoOpen": true
            });
        })
        .catch(function(data, status){
            $scope.showingMyLocation = false;
            $scope.loading = false;
            $("#errorMyLocationAlert").modal("show");
        });

    };

    /* clear mylocation marker */
    $scope.myLocationReset = function() {
        $scope.showingMyLocation = false;
        mapController.removeMarker("Your location");

    };

    /** clear all markers */
    $scope.clear = function() {
        $scope.showingMyLocation = false;
        mapController.clearMarkers();
    };


});



/**
* Validate hostnames
* it removes the http://
* returns empty string in fail cases
*/
function validateHostName(hostName){
    var myregexp = /^(?:https?:\/\/)?([^\/?#\s]{2,}\.[^\/?#\s]{2,})/;
    var match = myregexp.exec(hostName);
    if (match != null) {
        result = match[1];
    } else {
        result = "";
    }
    return result;
}
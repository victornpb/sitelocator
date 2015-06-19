var mapController = new function ClassMapController(){
	
	//private
	var self = this;
	var markerBounds = new google.maps.LatLngBounds();

	//public
	this.element = null;
	this.map = null;
	this.markers = [];

	this.initialize = function(){
		var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };

        self.element = document.getElementById('map-canvas');

        self.map = new google.maps.Map(self.element, mapOptions);
	}

	/** returns a position object of the given coordinates */
	this.position = function(lat, lon){
		return new google.maps.LatLng(lat, lon);
	}

	/** create a marker on the map */
	this.createMarker = function(title, position){
		var marker = new google.maps.Marker({
		      position: position,
		      map: self.map,
		      title: title,
		      animation: google.maps.Animation.DROP
		});

		// Extend markerBounds with each random point.
    	markerBounds.extend(position);

		return marker;
	}

	/** create a marker on the map with a info window */
	this.createMarkerWithInfoWindow = function(title, position, infoWindowHtml){
		var marker = self.createMarker(title, position);

		if(infoWindowHtml){
		    var infowindow = new google.maps.InfoWindow({
		        content: infoWindowHtml
		    });

		    google.maps.event.addListener(marker, 'click', function() {
		      infowindow.open(self.map, marker);
		    });
		}

		return marker;
	}

	/** clear all markers of the map */
	this.clearMarkers = function(){
		for (var i = 0; i < self.markers.length; i++) {
			self.markers[i].setMap(null);
		}
		self.markers = [];

		//clear markerBounds
		markerBounds = new google.maps.LatLngBounds();
	}

	/** adjust the map zoom and levelto fit all markers on the screen */
	this.centerMapToBounds = function(){
		self.map.fitBounds(markerBounds);
	}




}
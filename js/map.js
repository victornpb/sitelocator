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

        self.centerMapToBounds();
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

    	self.markers.push(marker);
    	self.centerMapToBounds();

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

		self.centerMapToBounds(); //will show the entire world
	}

	/** adjust the map zoom and levelto fit all markers on the screen */
	this.centerMapToBounds = function(){

		if(self.markers.length>0){
			console.log("centering to bounds")
			self.map.fitBounds(markerBounds);
			
			//zoom for single marker
			if(self.markers.length<2){
				self.map.setZoom(3); console.log("setting zoom for single marker");
			}

		}
		else{//no markers
			//world wide zoom
			self.map.setCenter(self.position(0,0));
			self.map.setZoom(2);
			console.log("no markers, show whole world");
		}
	}

}




var washington = new google.maps.LatLng(47.6062,-122.3321);
var berlin = new google.maps.LatLng(52.520816, 13.410186);

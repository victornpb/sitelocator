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

	this.clearMarkers = function(){
		for (var i = 0; i < self.markers.length; i++) {
			self.markers[i].setMap(null);
		}
		self.markers = [];

		//clear markerBounds
		markerBounds = new google.maps.LatLngBounds();
	}

	this.centerMapToBounds = function(){
		self.map.fitBounds(markerBounds);
	}




}
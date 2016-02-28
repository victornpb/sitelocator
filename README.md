
	To run this WebApp you just need to extract it to a folder and execute index.html

	This project uses Angular.js and Twitter Bootstrap for presentation.

	Most part of this app goes around the maps API, so I decided to built a simplification layer to provide a clean API that only provides the features need.
	This way it can be just used, and it behaves like it should, for things like automatically center to the world wide view when there's no marker or they have been removed. Automatically keep then on-screen as they are added, and other minor behavior.

	I decided to not go to the tradicional webpage, and use this oportunity to make a fullscreen rich page. The markers are being kept on the map as the user search for domains, and you can clear all markers any time they want.

	As the readme specifies there's a button that shows your current location, which is represented with a green arrow, different from hosts that are presented with a red icon.

	I implemented a reset location button as requested that only clear your location and leave the other hosts locations on the map.
	
	I ran into a issue with the google maps API that expects a HTMLstring as the infoWindow (the popovers that open above the markers), and the issue that the Angular templates are not rendered. It works on safari with errors on the console when I used $compile and $apply, but it doesn't render on chrome. I could go with the simpler route and use a custom view on the side/bottom/top aroud the map to display the info, and only show the markers on the map. But I though that this UI represents much better the kind of app this should be, so I embeded the html template and turned it into a function for string templating. Not the best solution, but with more investigation and believe that there's a better solution to this.
	
	http://victornpb.github.io/sitelocator/
	
	

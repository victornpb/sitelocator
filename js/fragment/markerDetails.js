
function markerDetails(geo){
	return ('<div>'+
	'<h4>'+geo.hostName+'</h4>'+
	'<table class="table table-condensed">'+
	'	<tbody>'+
	'		<tr>'+
	'			<th>IP</th><td colspan="2">'+geo.ip+'</td>'+
	'		</tr>'+
	'		<tr>'+
	'			<th>Country</th><td>'+geo.country_name+'</td><td>'+geo.country_code+'</td>'+
	'		</tr>'+
	'		'+
	'		<tr>'+
	'			<th>Region</th><td>'+geo.region_name+'</td><td>'+geo.region_code+'</td>'+
	'		</tr>'+
	'		<tr>'+
	'			<th>City</th><td colspan="2">'+geo.city+'</td>'+
	'		</tr>'+
	'		<tr>'+
	'			<th>Zip</th><td colspan="2">'+geo.zipcode+'</td>'+
	'		</tr>'+
	'		<tr>'+
	'			<th>Coordinates</th><td>'+geo.latitude+'</td><td>'+geo.longitude+'</td>'+
	'		</tr>'+
	'		<tr>'+
	'			<th>Metro code</th><td colspan="2">'+geo.metro_code+'</td>'+
	'		</tr>'+
	'		<tr>'+
	'			<th>Area code</th><td colspan="2">'+geo.area_code+'</td>'+
	'		</tr>'+
	'	</tbody>'+
	'</table>'+
	'</div>');
}
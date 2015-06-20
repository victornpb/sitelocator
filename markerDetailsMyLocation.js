function markerDetailsMyLocation(geo){

return('<div>'+
'<h4>Your aproximated location</h4>'+
'<table class="table table-condensed">'+
'	<tbody>'+
'		<tr>'+
'			<th>IP</th><td colspan="2">'+geo.query+'</td>'+
'		</tr>'+
'		<tr>'+
'			<th>Country</th><td>'+geo.country+'</td><td>'+geo.countryCode+'</td>'+
'		</tr>'+
'		'+
'		<tr>'+
'			<th>Region</th><td>'+geo.regionName+'</td><td>'+geo.region+'</td>'+
'		</tr>'+
'		<tr>'+
'			<th>City</th><td colspan="2">'+geo.city+'</td>'+
'		</tr>'+
'		<tr>'+
'			<th>Zip</th><td colspan="2">'+geo.zipcode+'</td>'+
'		</tr>'+
'		<tr>'+
'			<th>Location</th><td>'+geo.lat+'</td><td>'+geo.lon+'</td>'+
'		</tr>'+
'		<tr>'+
'			<th>Timezone</th><td colspan="2">'+geo.timezone+'</td>'+
'		</tr>'+
''+
''+
'		<tr>'+
'			<th>ISP</th><td colspan="2">'+geo.isp+'</td>'+
'		</tr>'+
'		<tr>'+
'			<th>Organization</th><td colspan="2">'+geo.org+'</td>'+
'		</tr>'+
'		<tr>'+
'			<th>AS</th><td colspan="2">'+geo.as+'</td>'+
'		</tr>'+
'	</tbody>'+
'</table>'+
'</div');
}
/*
	http://freegeoip.net/json/:host
*/

function geoIp(host, loading, callback){

	var webservice = "http://freegeoip.net/json/"+host;

	//var loading = function(){}
	var completed = function(responseText){
		if(responseText){
			var obj = JSON.parse(responseText);
			if(obj){
				callback(obj);
			}
		}
	}

	ajaxLoad(webservice, "", loading, completed);
}

function ajaxLoad(url, parameters, onLoading, onCompleted){
	if(typeof element=="string") element=document.querySelector(element);
		
	var Ajax=(function(){
		try{return new XMLHttpRequest()}
		catch(e){try{return new ActiveXObject("Msxml2.XMLHTTP")}
		catch(e){try {return new ActiveXObject("Microsoft.XMLHTTP")}
		catch(e){ return null; }}}
	})();
	if(Ajax){	
		Ajax.onreadystatechange=function(){
			if(Ajax.readyState<4){
				if(onLoading){ onLoading(Ajax.readyState); }
			}
			else{
				onCompleted(Ajax.responseText);
			}
		}
		Ajax.open('GET',url,true);
		Ajax.send(parameters);
	}else{
		console.log("Could not load dynamic content!");
	}
}

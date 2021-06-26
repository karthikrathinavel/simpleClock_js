var myVar = setInterval(function(){
		myTimer();
},500);

function myTimer(){
	var d = new Date();
	document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
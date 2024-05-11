document.onmousemove = function(e){
	var x = e.pageX;
	var y = e.pageY;
	document.getElementById("mouse-follower").style.left = x + "px";
	document.getElementById("mouse-follower").style.top = y + "px";
}

window.onscroll = function(){
	var scrollX = window.pageXOffset;
	var scrollY = window.pageYOffset;
	document.getElementById("mouse-follower").style.left = scrollX + "px";
	document.getElementById("mouse-follower").style.top = scrollY + "px";
}

// Optional JavaScript code for additional functionality

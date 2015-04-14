$( document ).ready(function() {
    

    $('#menu').slicknav({
		prependTo:'nav'
	});

	 smoothScroll.init();

    $(function () {
	  $.scrollUp({
	    scrollName: 'scrollUp', 
	    topDistance: '400', 
	    topSpeed: 300, 
	    animation: 'fade', 
	    animationInSpeed: 200, 
	    animationOutSpeed: 200, 
	    scrollText: 'Scroll to top', 
	    activeOverlay: false, 
	  });
	});

    var button = document.getElementById("button");
	button.addEventListener("mouseover" , swap , false);
	button.addEventListener("mouseout" , swapBack , false);

	function swap (){
		console.log("swaped");
		button.src = "img/button-hover.png";
	}

	function swapBack (){
		console.log("back");
		button.src = "img/button.png";
	}
	

});
$( document ).ready(function() {
    
    $('#menu').slicknav({
		prependTo:'nav'
	});

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

});
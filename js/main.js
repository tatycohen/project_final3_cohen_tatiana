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


    


	// Call Gridder
	    $('.gridder').gridderExpander({
	        scroll: true,
	        scrollOffset: 30,
	        scrollTo: "panel", // panel or listitem
	        animationSpeed: 400,
	        animationEasing: "easeInOutExpo",
	        onStart: function(){
	            console.log("Gridder Inititialized");
	        },
	        onContent: function(){
	            console.log("Gridder Content Loaded");
	        },
	        onClosed: function(){
	            console.log("Gridder Closed");
	        }
	    });

	$('.button').hover(
          function(){this.src = this.src.replace("button","button-hover");},
          function(){this.src = this.src.replace("button-hover","button");
     });
	
	

});
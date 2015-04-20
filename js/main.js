$(document).ready(function(){

	var $main = $('#c3xgm-about-module-technology');
	
	// $(".main").onepage_scroll({
	$main.onepage_scroll({
	   sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 900, // AnimationTime let you define how long each section takes to animate
	   pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	});
	// $(".main").bind_scroll();

	function getScrollTop($element) {
		var winTop = $(window).scrollTop(),
			winHeight = $(window).height(),
			elementTop = $element.offset().top;

			// console.log('This is winTop: '+ winTop);
			// console.log('This is $element: '+ $element);
			// console.dir($element);
			

			console.log('This is winTop: '+ winTop);
			console.log('This is elementTop: '+ elementTop);

		if(elementTop <= winTop) {
			$element.bind_scroll();			
		} else if(elementTop > winTop) {
			$element.unbind_scroll();	
		} else if( winTop > (elementTop + winHeight * 3) ) {
			$element.unbind_scroll();		
		}
	}

	
	var scrollTimeout;  // global for any pending scrollTimeout
	var techMod = $('#c3xgm-about-module-technology');
	$(window).scroll(function () {
		if (scrollTimeout) {
			// clear the timeout, if one is pending
			clearTimeout(scrollTimeout);
			scrollTimeout = null;
		}
		scrollTimeout = setTimeout(scrollHandler, 60/1000);
	});
	scrollHandler = function () {
		// Check your page position and then
		// Load in more results
		// outerPane.html();
		getScrollTop($main);
	};
	
});


function init() {
	
	// start up after 2sec no matter what
    // window.setTimeout(function(){
        start();
    // }, 2000);
}

// fade in experience
function start() {
	
	$('body').removeClass("loading").addClass('loaded');
	
}

$(window).load(function() {
	
	// fade in page
	init();
	
});

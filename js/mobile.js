jQuery(document).ready(function($) {
	console.log('Hey FROM MOBILE JS!');

	// $('body').

	// REPLACE GIFS WITH SVGS
	$('img[src$=".gif"]').each(function(index,element) {
        element.src = element.src.replace('.gif','.svg');
    });



	// var mobScrollTimeout,
	// 	mobScrollHandler;
 //    // S C R O L L 
 //    window.addEventListener('scroll', function() {
 //        if (mobScrollTimeout) {
 //            // clear the timeout, if one is pending
 //            clearTimeout(mobScrollTimeout);
 //            mobScrollTimeout = null;
 //        }
 //        mobScrollTimeout = setTimeout(mobScrollHandler, 2000);
 //    }, false);

 //    mobScrollHandler = function() P{
 //    	$('.c3xgm-about-nav-hover-title').css('opacity', 0);
 //    }


    // MAKE FLAGS ANIMATE
    $('#animate-flag-line').addClass('animate-flag-line');


});
// CAR JS MODULE 'OUR BRANDS'
jQuery(document).ready(function($) {

	var carLinks = $('.c3xgm-about-module-car-logo'),
		techContainers = $('.c3xgm-about-module-technology .c3xgm-about-module'),
		foundationLinks = $('.c3xgm-about-module-foundation-logo'),
		techBullets = $('.c3xgm-about-module-nav-bullet');

	// CARS
	carLinks.on('click touchstart', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('.c3xgm-about-module-car .active').removeClass('active');
		$(this).addClass('active');

		$('.c3xgm-about-module-car .show-module').removeClass('show-module').addClass('hide-module');
		$(target).removeClass('hide-module').addClass('show-module');
	});


	// FOUNDATION
	foundationLinks.on('click touchstart', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		$('.c3xgm-about-module-foundation .active').removeClass('active');
		$(this).addClass('active');

		$('.c3xgm-about-module-foundation .show-module').removeClass('show-module').addClass('hide-module');
		$(target).removeClass('hide-module').addClass('show-module');
	});



	// RESIZE TECH MODULES
	// R E S I Z E 
	var resizeTimeout,
		resizeHandler,
		maxHeight;


    $(window).resize(function() {
        if (resizeTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(resizeTimeout);
            resizeTimeout = null;
        }
        resizeTimeout = setTimeout(resizeHandler, 60/1000);
    });

    resizeHandler = function() {
        // techContainers.map(function () {
        //     $(this).height('auto');
        // });
        maxHeight = Math.max.apply(null, techContainers.map(function () {
        	console.log( 'This is height: ' + $(this).height());
            return $(this).height();
        }).get());
        console.log('This is maxHeight: ' + maxHeight);
        techContainers.each(function() {
        	// $(this).style('paddingBottom', 0);
        	// console.log(this);
         //    $(this).height(maxHeight);
        });
    }
   	resizeHandler();
    // E N D    R E S I Z E

	// SHOW ONLY ONE TECH MODULE, HIDE THE OTHERS

	// $(techContainers.get(1)).addClass('hide-module');
	// $(techContainers.get(2)).addClass('hide-module');
	// TECHNOLOGY
	techBullets.on('click touchstart', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');

		// SHOW CURRENT CAR - HIDE OLD CAR
		$('.c3xgm-about-module-technology .show-module').removeClass('show-module').addClass('hide-module');
		// $('.show-module').addClass('hide-module').removeClass('show-module');
		$(target).removeClass('hide-module').addClass('show-module');

		// UPDATE BULLETS
		$('.c3xgm-about-module-technology .c3xgm-about-module-nav-bullet-active').removeClass('c3xgm-about-module-nav-bullet-active');
		$(this).addClass('c3xgm-about-module-nav-bullet-active');
	});


});
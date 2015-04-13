// CAR JS MODULE 'OUR BRANDS'
jQuery(document).ready(function($) {

	var carLinks = $('.c3xgm-about-module-car-logo'),
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


	// SHOW ONLY ONE TECH MODULE, HIDE THE OTHERS
	// TECHNOLOGY
	techBullets.on('click touchstart', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');

		// SHOW CURRENT CAR - HIDE OLD CAR
		$('.c3xgm-about-module-technology .show-module').removeClass('show-module').addClass('hide-module');
		$(target).removeClass('hide-module').addClass('show-module');

		// UPDATE BULLETS
		$('.c3xgm-about-module-technology .c3xgm-about-module-nav-bullet-active').removeClass('c3xgm-about-module-nav-bullet-active');
		$(this).addClass('c3xgm-about-module-nav-bullet-active');
	});



	// DISCLAIMER BOX OPEN CLOSE
	var $discLink = $('#c3xgm-about-disclaimer-link'),
		$discBox = $('#c3xgm-about-disclaimer-box'),
		discBoxHeight = $discBox.height();

	// HIDE DISC BOX HEIGHT
	$discLink.click(function(event) {
		event.preventDefault();
		$discBox.toggleClass('c3xgm-about-show-disclaimer');
	});

});
// CAR JS MODULE 'OUR BRANDS'
jQuery(document).ready(function($) {

	var carLinks = $('.c3xgm-about-module-car-logo'),
		carSlides = $('#c3xgm-about-module-car .c3xgm-about-slide'),
		foundationLinks = $('.c3xgm-about-module-foundation-logo'),
		foundationSlides = $('#c3xgm-about-module-foundation .c3xgm-about-slide');


	// console.log('Here are your foundationLinks: ' + foundationLinks);
	// console.dir(foundationLinks);
	// console.log('Here are your foundationSlides: ' + foundationSlides);
	// console.dir(foundationSlides);


	// CARS ---------------------------------------------------------------------------------------------------------
	// MOVE ALL SLIDES TO RIGHT 100%;
	carSlides.addClass('hide-module');
	// MAKE CHEVY DEFALUT 
	$('#c3xgm-about-car-chevrolet').removeClass('hide-module').addClass('show-module-slide-in');
		
	// CARS LINKS
	carLinks.on('click touchstart', function(e) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');
		//  ADD ACRIVE CLASS
		$('.c3xgm-about-module-car .active').removeClass('active');
		$(this).addClass('active');

		// GET CUR SLIDE
		var curSlide = $('.c3xgm-about-module-car .show-module-slide-in');

		// MODULE SLIDE-OUT
		curSlide.removeClass('show-module-slide-in').addClass('hide-module-slide-out');
		setTimeout(function() {
				$(curSlide).addClass('hide-module');
			}, 700);
		// MODULE SLIDE-IN
		setTimeout(function() {
			$(target).removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
		}, 700);
	});




	// FOUNDATION ---------------------------------------------------------------------------------------------------------
	// MOVE ALL SLIDES TO RIGHT 100%;
	foundationSlides.addClass('hide-module');
	// MAKE GM FOUNDATION DEFALUT 
	$('#c3xgm-about-foundation-gm-foundation').removeClass('hide-module').addClass('show-module-slide-in');
		
	// FOUNDATION
	foundationLinks.on('click touchstart', function(e) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');
		//  ADD ACRIVE CLASS
		$('.c3xgm-about-module-foundation .active').removeClass('active');
		$(this).addClass('active');

		// GET CUR SLIDE
		var curSlide = $('.c3xgm-about-module-foundation .show-module-slide-in');

		// MODULE SLIDE-OUT
		curSlide.removeClass('show-module-slide-in').addClass('hide-module-slide-out');
		setTimeout(function() {
				$(curSlide).addClass('hide-module');
			}, 300);
		// MODULE SLIDE-IN
		setTimeout(function() {
			$(target).removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
		}, 300);
	});



	// DISCLAIMER ---------------------------------------------------------------------------------------------------------
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
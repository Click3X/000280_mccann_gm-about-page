// CAR JS MODULE 'OUR BRANDS'
jQuery(document).ready(function($) {

	var carLinks = $('.c3xgm-about-module-car-logo'),
		carSlides = $('#c3xgm-about-module-car .c3xgm-about-slide'),
		carContainer = $('.c3xgm-about-module-65').get(0),
		foundationContainer = $('.c3xgm-about-module-foundation .c3xgm-about-module-20').get(0),
		foundationLinks = $('.c3xgm-about-module-foundation-logo'),
		foundationSlides = $('#c3xgm-about-module-foundation .c3xgm-about-slide'),
		techSlides = $('.c3xgm-about-module-technology .c3xgm-about-module'),
		techLinks = $('#c3xgm-about-page-technology .c3xgm-about-module-nav li a');


	// CARS ---------------------------------------------------------------------------------------------------------
	
	// MOVE ALL SLIDES TO RIGHT 100%;
	carLinks.addClass('active');
	carSlides.addClass('hide-module').addClass('hide-module-slide-out');

	// ON HOVER ADD TRANSPARENCY TO LINKS
	carLinks.hover(function(e) {
		carLinks.not(this).removeClass('active').addClass('c3xgm-about-module-logo-unactive');
	});

	// CARS LINKS
	carLinks.on('click touchstart', function(e) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');
		//  ADD ACRIVE CLASS
		$('.c3xgm-about-module-car .active').removeClass('active');
		$(this).addClass('active');

		// ADD TRANSPARENCY TO OTHER NAV ITEMS
		carLinks.not(this).addClass('c3xgm-about-module-logo-unactive');

		// GET CUR SLIDE
		var curSlide = $('.c3xgm-about-module-car .show-module-slide-in');

		// MODULE SLIDE-OUT
		curSlide.removeClass('show-module-slide-in').addClass('hide-module-slide-out');
		setTimeout(function() {
				$(curSlide).addClass('hide-module');
			}, 200);
		// MODULE SLIDE-IN
		setTimeout(function() {
			$(target).removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
		}, 200);
	});




	// FOUNDATION ---------------------------------------------------------------------------------------------------------
	// MOVE ALL SLIDES TO RIGHT 100%;
	foundationSlides.addClass('hide-module');

	// ON HOVER ADD TRANSPARENCY TO LINKS
	foundationLinks.hover(function(e) {
		foundationLinks.not(this).removeClass('active').addClass('c3xgm-about-module-logo-unactive');
	});

	// SHOW FIRST SLIDE
	// setTimeout(function() {
	// 	$('#c3xgm-about-foundation-gm-foundation').removeClass('hide-module hide-module-slide-out').addClass('show-module-slide-in');
	// }, 3000);
	
	// FOUNDATION
	foundationLinks.on('click touchstart', function(e) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');
		//  ADD ACRIVE CLASS
		$('.c3xgm-about-module-foundation .active').removeClass('active');
		$(this).addClass('active');

		// ADD TRANSPARENCY TO OTHER NAV ITEMS
		foundationLinks.not(this).addClass('c3xgm-about-module-logo-unactive');

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




	// TECH ---------------------------------------------------------------------------------------------------------
	// MOVE ALL SLIDES TO RIGHT 100%;
	techSlides.addClass('hide-module');
	// MAKE GM TECH DEFALUT 
	$('#c3xgm-about-page-technology-4g-lte').removeClass('hide-module').addClass('show-module-slide-in');

	// SHOW FIRST SLIDE
	// setTimeout(function() {
	// 	$('#c3xgm-about-technology-4g-lte').removeClass('hide-module hide-module-slide-out').addClass('show-module-slide-in');
	// }, 0);
		
	// TECH
	techLinks.on('click touchstart', function(e) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');
		//  ADD ACRIVE CLASS
		$('#c3xgm-about-page-technology .c3xgm-about-module-nav li a.c3xgm-about-module-nav-bullet-active').removeClass('c3xgm-about-module-nav-bullet-active');
		$(this).addClass('c3xgm-about-module-nav-bullet-active');

		// GET CUR SLIDE
		var curSlide = $('.c3xgm-about-module-technology .show-module-slide-in');

		// MODULE SLIDE-OUT
		curSlide.removeClass('show-module-slide-in').addClass('hide-module-slide-out');
		setTimeout(function() {
				$(curSlide).removeClass('hide-module-slide-out').addClass('hide-module');
			}, 500);
		// MODULE SLIDE-IN
		setTimeout(function() {
			$(target).removeClass('hide-module hide-module-slide-out').addClass('show-module-slide-in');
		}, 500);
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
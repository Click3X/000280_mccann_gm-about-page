// CAR JS MODULE 'OUR BRANDS'
jQuery(document).ready(function($) {

	var carLinks = $('.c3xgm-about-module-car-logo'),
		carSlides = $('#c3xgm-about-module-car .c3xgm-about-slide'),
		carContainer = $('.c3xgm-about-module-65').get(0),
		foundationContainer = $('.c3xgm-about-module-foundation .c3xgm-about-module-20').get(0),
		foundationLinks = $('.c3xgm-about-module-foundation-logo'),
		foundationSlides = $('#c3xgm-about-module-foundation .c3xgm-about-slide'),
		techSlides = $('.c3xgm-about-module-technology .c3xgm-about-module'),
		techLinks = $('#c3xgm-about-technology .c3xgm-about-module-nav li a');


	// console.log('Here are your foundationLinks: ' + foundationLinks);
	// console.dir(foundationLinks);
	// console.log('Here are your foundationSlides: ' + foundationSlides);
	// console.dir(foundationSlides);
	// console.log('Here are your carLinks: ' + carLinks);
	// console.dir(carLinks);
	// console.log('Here are your carContainer: ' + carContainer);
	// console.dir(carContainer);

	// CARS ---------------------------------------------------------------------------------------------------------
	
	// MOVE ALL SLIDES TO RIGHT 100%;
	carLinks.addClass('active');
	carSlides.addClass('hide-module').addClass('hide-module-slide-out');

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
			}, 700);
		// MODULE SLIDE-IN
		setTimeout(function() {
			$(target).removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
		}, 700);
	});




	// FOUNDATION ---------------------------------------------------------------------------------------------------------
	// $(foundationContainer).append(animLines);
	// ANIMIATE LINES AFTER 1200 MS
	// setTimeout(function() {
	// 	$(foundationContainer).find('.c3xgm-about-gray-line').removeClass('invisible').addClass('animated');

	// 	setTimeout(function() {
	// 		$(foundationContainer).find('.c3xgm-about-yellow-line').removeClass('invisible').addClass('animated');
	// 	}, 600);

	// }, 1200);
	// MOVE ALL SLIDES TO RIGHT 100%;
	foundationSlides.addClass('hide-module');
	// MAKE GM FOUNDATION DEFALUT 
	// $('#c3xgm-about-foundation-gm-foundation').removeClass('hide-module').addClass('show-module-slide-in');
	// $('#c3xgm-about-foundation-gm-foundation').removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');

	// 3200 MS WAIT FOR LOGOS TO LOAD
	// setTimeout(function() {
	// 	$('#c3xgm-about-foundation-gm-foundation').removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
	// }, 1200);

		
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
			}, 700);
		// MODULE SLIDE-IN
		setTimeout(function() {
			$(target).removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
		}, 700);
	});




	// TECH ---------------------------------------------------------------------------------------------------------
	// MOVE ALL SLIDES TO RIGHT 100%;
	techSlides.addClass('hide-module');
	// MAKE GM TECH DEFALUT 
	$('#c3xgm-about-technology-4g-lte').removeClass('hide-module').addClass('show-module-slide-in');
		
	// TECH
	techLinks.on('click touchstart', function(e) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');
		//  ADD ACRIVE CLASS
		$('#c3xgm-about-technology .c3xgm-about-module-nav li a.c3xgm-about-module-nav-bullet-active').removeClass('c3xgm-about-module-nav-bullet-active');
		$(this).addClass('c3xgm-about-module-nav-bullet-active');

		// GET CUR SLIDE
		var curSlide = $('.c3xgm-about-module-technology .show-module-slide-in');

		// MODULE SLIDE-OUT
		curSlide.removeClass('show-module-slide-in').addClass('hide-module-slide-out');
		// setTimeout(function() {
		// 		$(curSlide).addClass('hide-module');
		// 	}, 300);
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
// CAR JS MODULE 'OUR BRANDS'

var aboutSlideInterval, carLinks, currentAboutSlide = 0;
var techSlideInterval, techLinks, currentTechSlide = 0;
var foundationSlideInterval, foundationLinks, currentFoundationSlide = 0;

jQuery(document).ready(function($) {
	carLinks = $('.c3xgm-about-module-car-logo');
	techLinks = $('#c3xgm-about-page-technology .c3xgm-about-module-nav li a');
	foundationLinks = $('.c3xgm-about-module-foundation-logo');

	var carSlides = $('#c3xgm-about-module-car .c3xgm-about-slide'),
		carContainer = $('.c3xgm-about-module-65').get(0),
		foundationContainer = $('.c3xgm-about-module-foundation .c3xgm-about-module-20').get(0),
		foundationSlides = $('#c3xgm-about-module-foundation .c3xgm-about-slide'),
		techSlides = $('.c3xgm-about-module-technology .c3xgm-about-module');

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

	// ON HOVER ADD TRANSPARENCY TO LINKS
	carLinks.hover(function(e) {
		carLinks.not(this).removeClass('active').addClass('c3xgm-about-module-logo-unactive');
	});

	// CARS LINKS
	carLinks.on('click touchstart', function(e, auto_rotate) {
		e.preventDefault();

		console.log("ABOUT LINK CLICKED", $(this).parent().index() );

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

		if(!auto_rotate){
			killAutoRotateAboutSlider();

			currentAboutSlide = $(this).parent().index();
		}
	});

	// FOUNDATION ---------------------------------------------------------------------------------------------------------
	// MOVE ALL SLIDES TO RIGHT 100%;
	foundationSlides.addClass('hide-module');

	// ON HOVER ADD TRANSPARENCY TO LINKS
	foundationLinks.hover(function(e) {
		foundationLinks.not(this).removeClass('active').addClass('c3xgm-about-module-logo-unactive');
	});

	// SHOW FIRST SLIDE
	setTimeout(function() {
		$('#c3xgm-about-foundation-gm-foundation').removeClass('hide-module hide-module-slide-out').addClass('show-module-slide-in');
	}, 3000);
	
	// FOUNDATION
	foundationLinks.on('click touchstart', function(e, auto_rotate) {
		e.preventDefault();

		console.log("FOUNDATION LINK CLICKED", $(this).parent().index() );

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

		if(!auto_rotate){
			killAutoRotateFoundationSlider();

			currentFoundationSlide = $(this).parent().index();
		}
	});

	// TECH ---------------------------------------------------------------------------------------------------------
	// // MOVE ALL SLIDES TO RIGHT 100%;
	// techSlides.addClass('hide-module');
	// // MAKE GM TECH DEFALUT 
	// $('#c3xgm-about-page-technology-4g-lte').removeClass('hide-module').addClass('show-module-slide-in');
		
	// // TECH
	// techLinks.on('click touchstart', function(e, auto_rotate) {
	// 	e.preventDefault();

	// 	console.log("TECH LINK CLICKED", $(this).parent().index() );

	// 	// GET LINKS
	// 	var target = $(this).attr('href');
	// 	//  ADD ACRIVE CLASS
	// 	$('#c3xgm-about-page-technology .c3xgm-about-module-nav li a.c3xgm-about-module-nav-bullet-active').removeClass('c3xgm-about-module-nav-bullet-active');
	// 	$(this).addClass('c3xgm-about-module-nav-bullet-active');

	// 	// GET CUR SLIDE
	// 	var curSlide = $('.c3xgm-about-module-technology .show-module-slide-in');

	// 	// MODULE SLIDE-OUT
	// 	curSlide.removeClass('show-module-slide-in').addClass('hide-module-slide-out');
	// 	setTimeout(function() {
	// 			$(curSlide).addClass('hide-module');
	// 			$(curSlide).removeClass('hide-module-slide-out');
	// 		}, 700);
	// 	// MODULE SLIDE-IN
	// 	setTimeout(function() {
	// 		$(target).removeClass('hide-module hide-module-slide-out').addClass('show-module-slide-in');
	// 	}, 700);

	// 	if(!auto_rotate){
	// 		killAutoRotateTechSlider();

	// 		currentTechSlide = $(this).parent().index();
	// 	}
	// });



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
	techLinks.on('click touchstart', function(e, auto_rotate) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');
		//  ADD ACRIVE CLASS
		$('#c3xgm-about-page-technology .c3xgm-about-module-nav li a.c3xgm-about-module-nav-bullet-active').removeClass('c3xgm-about-module-nav-bullet-active');
		$(this).addClass('c3xgm-about-module-nav-bullet-active');

		// GET CUR SLIDE
		var curSlide = $('.c3xgm-about-module-technology .show-module-slide-in');

		// MODULE SLIDE-OUT
		$(curSlide).removeClass('show-module-slide-in').addClass('hide-module-slide-out');
		setTimeout(function() {
			$('.c3xgm-about-module-technology .show-module-slide-in').removeClass('show-module-slide-in').addClass('hide-module-slide-out');
		}, 0);

		setTimeout(function() {
				$(curSlide).removeClass('hide-module-slide-out').addClass('hide-module');
			}, 500);
		// MODULE SLIDE-IN
		setTimeout(function() {
			$(target).removeClass('hide-module hide-module-slide-out').addClass('show-module-slide-in');
		}, 500);

		if(!auto_rotate){
			killAutoRotateTechSlider();

			currentTechSlide = $(this).parent().index();
		}
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


//AUTO ROTATE ABOUT SLIDER
function autorotateAboutSlider(){
   console.log("autorotateAboutSlider");

    if(!aboutSlideInterval){
        aboutSlideInterval = setInterval(function(){
            currentAboutSlide++; if(currentAboutSlide > carLinks.length-1) currentAboutSlide = 0;

            $(carLinks[currentAboutSlide]).eq(0).trigger("click", true);
        }, 5000);
    }
}
function killAutoRotateAboutSlider(){
	console.log("killAutoRotateAboutSlider");

    clearInterval(aboutSlideInterval);
    aboutSlideInterval = null;
}

//AUTO ROTATE TECH SLIDER
function autorotateTechSlider(){
	console.log("autorotateTechSlider");

    if(!techSlideInterval){
        techSlideInterval = setInterval(function(){
            currentTechSlide++; if(currentTechSlide > techLinks.length-1) currentTechSlide = 0;

            $( techLinks[currentTechSlide] ).eq(0).trigger("click", true);
        }, 5000);
    }
}
function killAutoRotateTechSlider(){
	console.log("killAutoRotateTechSlider");

    clearInterval(techSlideInterval);
    techSlideInterval = null;
}

//AUTO ROTATE FOUNDATION SLIDER
function autorotateFoundationSlider(){
	console.log("autorotateFoundationSlider");

    if(!foundationSlideInterval){
        foundationSlideInterval = setInterval(function(){
            currentFoundationSlide++; if(currentFoundationSlide > foundationLinks.length-1) currentFoundationSlide = 0;

            $( foundationLinks[currentFoundationSlide] ).eq(0).trigger("click", true);
        }, 5000);
    }
}
function killAutoRotateFoundationSlider(){
	console.log("killAutoRotateFoundationSlider");

    clearInterval(foundationSlideInterval);
    foundationSlideInterval = null;
}
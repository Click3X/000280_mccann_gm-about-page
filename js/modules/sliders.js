// CAR JS MODULE 'OUR BRANDS'

var aboutSlideInterval, carLinks, currentAboutSlide = 0;
var techSlideInterval, techLinks, currentTechSlide = 0;
var foundationSlideInterval, foundationLinks, currentFoundationSlide = 0;
var techLeftRight;

jQuery(document).ready(function($) {
	carLinks = $('.c3xgm-about-module-car-logo');
	techLinks = $('#c3xgm-about-page-technology .c3xgm-about-module-nav li a');
	foundationLinks = $('.c3xgm-about-module-foundation-logo');
	techLeftRight = $('#c3xgm-about-technology-right, #c3xgm-about-technology-left');

	var carSlides = $('#c3xgm-about-module-car .c3xgm-about-slide'),
		carContainer = $('.c3xgm-about-module-65').get(0),
		foundationContainer = $('.c3xgm-about-module-foundation .c3xgm-about-module-20').get(0),
		foundationSlides = $('#c3xgm-about-module-foundation .c3xgm-about-slide'),
		techSlides = $('.c3xgm-about-module-technology .c3xgm-about-module');

	// CARS ---------------------------------------------------------------------------------------------------------
	
	// MOVE ALL SLIDES TO RIGHT 100%;
	carLinks.addClass('active');
	carSlides.addClass('hide-module').addClass('hide-module-slide-out');

	// CARS LINKS
	carLinks.on('click touchstart', function(e, auto_rotate) {
		e.preventDefault();

		// console.log("ABOUT LINK CLICKED", $(this).parent().index() );

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
	
	// FOUNDATION
	foundationLinks.on('click touchstart', function(e, auto_rotate) {
		e.preventDefault();

		// console.log("FOUNDATION LINK CLICKED", $(this).parent().index() );

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
	// MOVE ALL SLIDES TO RIGHT 100%;
	techSlides.addClass('hide-module');
	// MAKE GM TECH DEFALUT 
	$('#c3xgm-about-page-technology-4g-lte').removeClass('hide-module').addClass('show-module-slide-in');

	// TECH
	techLinks.on('click touchstart', function(e, auto_rotate) {
		e.preventDefault();

		// GET LINKS
		var target = $(this).attr('href');

		currentTechSlide = $(this).parent().index();
		// console.log("Current Tech slide is: ", currentTechSlide );
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


	// TECH LEFT RIGHT LINKS
	techLeftRight.on('click touchstart', function(e) {
		e.preventDefault();

		// GET HREF OF CLICKED LINK,
		// DECLARE OTHER VARS WERE GONNA USE
		var href = $(this).attr('href'), 
			target,
			clickIndex;

		// TEST IF LEFT - RIGHT - ASSIGN CLICKINDEX APPROPRIATELY
		if(href == '#right') {
			if (currentTechSlide + 1 < techSlides.length) {
				clickIndex = currentTechSlide +1;
			} else {
				clickIndex = 0;
			}
		} else if(href == '#left') {
			if (currentTechSlide - 1 < 0) {
				clickIndex = techSlides.length - 1;
			} else {
				clickIndex = currentTechSlide - 1;
			}
		} 

		// console.log('This is clickIndex: ' + clickIndex);

		// TRIGGER CLICK ON INDEX
		$(techLinks[clickIndex]).trigger('click');
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

function autorotateAboutSliderOnce(){
	  $(carLinks[currentAboutSlide]).eq(0).trigger("click", true);
}

function killAutoRotateAboutSlider(){
	console.log("killAutoRotateAboutSlider");

    clearInterval(aboutSlideInterval);
    aboutSlideInterval = null;
}

//AUTO ROTATE TECH SLIDER
function autorotateTechSlider(){
	// console.log("autorotateTechSlider");

    if(!techSlideInterval){
        techSlideInterval = setInterval(function(){
            currentTechSlide++; if(currentTechSlide > techLinks.length-1) currentTechSlide = 0;

            $( techLinks[currentTechSlide] ).eq(0).trigger("click", true);
        }, 5000);
    }
}

function autorotateTechSliderOnce(){
	 $( techLinks[currentTechSlide] ).eq(0).trigger("click", true);
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
function autorotateFoundationSliderOnce(){
	  $( foundationLinks[currentFoundationSlide] ).eq(0).trigger("click", true);
}
function killAutoRotateFoundationSlider(){
	console.log("killAutoRotateFoundationSlider");

    clearInterval(foundationSlideInterval);
    foundationSlideInterval = null;
}
// GIVE IN  
// DECLARE VARS
var currentPage = 0;

jQuery(document).ready(function($) { 
    console.log('This is from give in:');

    // // DECLARE VARS
    // var currentPage = 0;

    // GET NAME OF BLOCK
    function getName(block) {
    	var name = block.className.split(" ")[2];
    	if(name == undefined) {
    		name = block.id;
    	}
    	return name;
    }

    // PAGES FOR HEADING ANINATIONS
    // BLOCKS FOR BLOCK IN VIEW ANIMATIONS
    // var pages = $('.c3xgm-about-page').not('#c3xgm-about-end-nav'),
   	var pages = $('#c3xgm-about-page-container > .c3xgm-about-page'),
    	blocks = $('.c3xgm-about-block').not('.c3xgm-about-solar-panels-animation, .c3xgm-about-test-facility'),
    	sliders = $('.c3xgm-about-module-foundation, .c3xgm-about-module-technology, .c3xgm-about-module-car'),
    	triggers = $('#animate-flag-line, #c3xgm-about-solar-road-list');

    console.log('These are your pages:');
    console.dir(pages);
    console.log('These are your blocks:');
    console.dir(blocks);
    console.log('These are your sliders:');
    console.dir(sliders);
    console.log('These are your triggers:');
    console.dir(triggers);



    // PAGE
    // BIND NAV UPDATE TO PAGES WHEN IN VIEW
    $(pages).bind('inview', function (event, visible) {
    	var name = getName(this), 
    		id = '#'+name;

		if (visible == true) {
			currentPage = $(pages).index( $(this) );

			console.log('PAGE in view!: ' + name);
			console.log('This is currentPage: ' + currentPage);
			console.dir(this);
			
			// HIGHLIGHT NAV BULLET
			$("a[href='" + id + "']").addClass("c3xgm-about-nav-bullet-active");

			// ADD PAGE IN VIEW CLASS
			// $(this).addClass('c3xgm-about-page-in-view'); 

		} else {
			$("a[href='" + id + "']").removeClass("c3xgm-about-nav-bullet-active");
			console.log('PAGE out of view!: ' + name);
			console.dir(this);
		}
	});

    // TRIGGERS -- ANIMATING FLAG LINE
    $(triggers).bind('inview', function (event, visible) {
    	var name = getName(this);
		if (visible == true) {
			console.log('TRIGGER in view!: ' + name);
			$(this).addClass('animate-flag-line');
		} else {
			console.log('TRIGGER out of view!: ' + name);
			$(this).removeClass('animate-flag-line');
		}
	});


    // SLIDERS
	$(sliders).bind('inview', function (event, visible) {
    	var name = this.className.split(" ")[1];
		if (visible == true) {
			console.log('SLIDER in view!: ' + name);
			if(name == 'c3xgm-about-module-car') {
				setTimeout(function() {
                    autorotateAboutSliderOnce();
                }, 2000);
                setTimeout(function() {
					autorotateAboutSlider();
				}, 1000);
			} else if(name == 'c3xgm-about-module-technology') {
				setTimeout(function() {
                    autorotateTechSliderOnce();
                }, 900);
                setTimeout(function() {
					autorotateTechSlider();
				}, 1000);	
			} else if (name == 'c3xgm-about-module-foundation') {
				setTimeout(function() {
                    autorotateFoundationSliderOnce();
                }, 2100);
                setTimeout(function() {
					autorotateFoundationSlider();
				}, 1000);
			}
		} else {
			console.log('SLIDER out of view!: ' + name);
			if(name == 'c3xgm-about-module-car') {
				killAutoRotateAboutSlider();
			} else if(name == 'c3xgm-about-module-technology') {
				killAutoRotateTechSlider();
			} else if (name == 'c3xgm-about-module-foundation') {
				killAutoRotateFoundationSlider();
			}
		}
	});



    // TRIGGER FUNCTION ON WINDOW AT DOCUMENT READY
	$(window).trigger('scroll');

});
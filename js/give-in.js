// GIVE IN  
jQuery(document).ready(function($) { 
    console.log('This is from give in:');

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
    var pages = $('.c3xgm-about-page'),
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


    // ELEMENT IN VIEW PLUG IN
    $(triggers).bind('inview', function (event, visible) {
    	var name = getName(this);
		if (visible == true) {
			console.log('Im in view!: ' + name);
			$(this).addClass('animate-flag-line');
		} else {
			console.log('Im out of view!: ' + name);
			$(this).removeClass('animate-flag-line');
		}
	});


    // SLIDERS
	$(sliders).bind('inview', function (event, visible) {
    	var name = this.className.split(" ")[1];
		if (visible == true) {
			console.log('Im in view!: ' + name);
			if(name == 'c3xgm-about-module-car') {
				autorotateAboutSlider();
			} else if(name == 'c3xgm-about-module-technology') {
				autorotateTechSlider();
			} else if (name == 'c3xgm-about-module-foundation') {
				autorotateFoundationSlider();
			}
		} else {
			console.log('Im out of view!: ' + name);
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
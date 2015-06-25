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
    	triggers = $('#animate-flag-line, #c3xgm-about-solar-road-list');

    console.log('These are your blocks:');
    console.dir(blocks);
    console.log('These are your pages:');
    console.dir(pages);
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


	$(window).trigger('scroll');

});
/*======= GLOBAL PROPERTIES ========
===================================*/

var sections = [], didscroll = false, didresize = true, laststeptime = 0, inviewpadding = 60;

var resizeSliders = true;

/*========== INITIALIZE ============
===================================*/

function init(){
	updateSectionSizes();
	updateSections();

	window.requestAnimationFrame( step );
}

/*======== ANIMATION LOOP ==========
===================================*/

function step( time ){
	// if( time-laststeptime > 300 ){
	if( time-laststeptime > 100 ){
		if( didscroll || didresize ){
			updateSectionSizes();
			updateSections();

			didscroll = didresize 	= false; 
		} else if(resizeSliders) {

			// SLIDE RESIZE FUNCTIONS ON WINDOW RESIZE
			// equalizeSlides(carContainer, carSlides);
			// equalizeSlides(foundationContainer, foundationSlides);
			// resizeTechModules(techQuotes, techPics, techContainer);

			resizeSliders = false;
		}

		laststeptime = time;
	}

	window.requestAnimationFrame(step);
}

/*======== WORKER METHODS ==========
===================================*/
// FOR RESIZING FUNCTION - PUT HERE ...
function updateSectionSizes(){
	console.log( "-- updateSectionSizes --" );

	for( var i = 0; i < sections.length; i++ ){
		var section 			= sections[ i ];

		section.top = Math.round( section.$el.offset().top );
		section.height = Math.round( section.$el.height() );
	}
}

function updateSections(){
	console.log( "-- updateSections --" );

	var scrolltop 		= $( window ).scrollTop(),
	windowheight 		= Math.round( window.innerHeight ),
	// bodyheight 			= Math.round( $( ".sections-container" ).height() );
	bodyheight 			= Math.round( $( "#c3xgm-about-page-container" ).height() );
	

	console.log( scrolltop, windowheight, bodyheight );

	for(var i = 0; i<sections.length; i++){
		var section 	= sections[ i ],
		offsettop 		= Math.round( section.top - scrolltop ),
		offsetbottom 	= Math.round( windowheight - offsettop ),
		offsetmiddle	= ( windowheight * .8 ) - offsettop;

		var inview 		= ( offsettop+section.height >= 0 ) && ( offsetbottom >= 0 ),
		fullyvisible 	= ( offsettop >= -25 ) && ( windowheight - ( offsettop+section.height ) ) >= -25,
		active 			= inview && ( offsetmiddle >= 0 || f\

		if( section.inview != inview ){
			section.$el.toggleClass( "inview" );
			section.inview = !section.inview;
		}

		if( section.active != active ){
			section.$el.toggleClass( "active" );			
			section.active = !section.active;

			if( section.active ){
				sectionToActiveState( section );
			} else {
				sectionToInActiveState( section );
			}
		}

		console.log( i + 1, offsettop, offsetmiddle, offsetbottom );
	}
}

function sectionToActiveState( _section ){
	console.log( "-- sectionToActiveState " + _section + " --" );
	console.dir( _section);

	if( (_section.blockType == "page") || (_section.blockType == "section") ) {
		_section.$el.removeClass("invisible").addClass( "c3xgm-about-page-in-view" );
	} else if(_section.blockType == "block") {
		_section.$el.removeClass("invisible").addClass( "element-in-view" );
	} else if(_section.blockType == "slider") {
		var trigger = _section.$el.eq(0).attr('data-trigger');
		// AUTO ROTATE SLIDER
		triggerSlider(trigger);
	} else if(_section.blockType == "loop") {
		_section.$el.addClass( "animate-flag-line" );
	}

}

// INACTIVE STATE
function sectionToInActiveState( _section ){
	console.log( "-- sectionToInActiveState " + _section + " --" );

	// KILL SLIDDERS
	if(_section.blockType == "slider") {
		var trigger = _section.$el.eq(0).attr('data-trigger');
		// KILL AUTO ROTATE SLIDER
		killSlider(trigger);
	} else if(_section.blockType == "loop") {
		_section.$el.removeClass( "animate-flag-line" );
	}
}


// SLIDER HELPERS
function triggerSlider(trigger) {
	if(trigger == "car") {
		autorotateAboutSliderOnce();
		autorotateAboutSlider();
	} else if(trigger == "tech") {
		autorotateTechSliderOnce();
		autorotateTechSlider();
	} else if(trigger == "foundation") {
		autorotateFoundationSliderOnce();
		autorotateFoundationSlider();
	}
}

function killSlider(trigger) {
	if(trigger == "car") {
		killAutoRotateAboutSlider();
	} else if(trigger == "tech") {
		killAutoRotateTechSlider();
	} else if(trigger == "foundation") {
		killAutoRotateFoundationSlider();
	}
}

/*======== EVENT HANDLERS ==========
===================================*/

function onScroll( _e ){
	console.log("-- onScroll --");
	
	didscroll = true;
}

function onResize( _e ){
	console.log("-- onResize --");

	didresize = true;
	
	resizeSliders = true;	
}

/*======== DOCUMENT READY ==========
===================================*/

$(function() {
	console.log( "-- jQuery Ready --" );

	console.log( "-- only inview --" );

	// $( ".section" ).each( function(){
	// BLOCKS
	$( ".c3xgm-about-block" ).each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'block';

		// ADD INVISIBLE CLASS TO ANIMATE ELEMENTS IN
		obj.$el.addClass('invisible');

		sections.push( obj );
	});

	// PAGES
	$( "#c3xgm-about-page-container > .c3xgm-about-page" ).each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'page';

		// ADD INVISIBLE CLASS TO ANIMATE ELEMENTS IN
		obj.$el.addClass('invisible');

		sections.push( obj );
	});


	// SECTIONS ( IN OUR COMMITMENT PAGE ) AND END NAV
	$( "#c3xgm-about-page-our-commitment > .c3xgm-about-page, #c3xgm-about-end-nav" ).each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'section';

		// ADD INVISIBLE CLASS TO ANIMATE ELEMENTS IN
		obj.$el.addClass('invisible');

		sections.push( obj );
	});

	// SLIDDERS - TRIGGER ON OFF
	$('.c3xgm-about-module-foundation, .c3xgm-about-module-technology, .c3xgm-about-module-car').each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'slider';


		sections.push( obj );
	});

	// loop animations - TRIGGER ON OFF
	if(mobile){
		$('#c3xgm-about-flag-line-grey-car, #c3xgm-about-solar-road-grey-car, #c3xgm-about-grey-van, #c3xgm-about-red-car').each( function(){
			var obj = {}, t = $( this );

			obj.el 		= t;
			obj.$el 	= $( t );
			obj.inbiew 	= true;
			obj.active 	= false;
			// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
			obj.blockType  = 'loop';


			sections.push( obj );
		});
	}

	window.addEventListener( "scroll", onScroll );
	window.addEventListener( "resize", onResize );

	init();
});

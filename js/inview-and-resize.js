/*======= GLOBAL PROPERTIES ========
===================================*/

var sections = [], didscroll = false, didresize = true, laststeptime = 0, inviewpadding = 60;

var carSlides,
	carContainer,
	foundationSlides,
	foundationContainer,
	techQuotes,
	techPics,
	techContainer;

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
	if( time-laststeptime > 300 ){
		if( didscroll || didresize ){
			updateSectionSizes();
			updateSections();

			didscroll = didresize 	= false; 
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
		offsetmiddle	= ( windowheight * .5 ) - offsettop;

		var inview 		= ( offsettop+section.height >= 0 ) && ( offsetbottom >= 0 ),
		fullyvisible 	= ( offsettop >= -25 ) && ( windowheight - ( offsettop+section.height ) ) >= -25,
		active 			= inview && ( offsetmiddle >= 0 || fullyvisible ),
		blockType		= section.blockType;

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

	if(_section.blockType == "page") {
		_section.$el.removeClass("invisible").addClass( "c3xgm-about-page-in-view" );
	} else if(_section.blockType == "block") {
		_section.$el.removeClass("invisible").addClass( "element-in-view" );
	}

}

// INACTIVE STATE
function sectionToInActiveState( _section ){
	console.log( "-- sectionToInActiveState " + _section + " --" );
}


// SLIDER RESIZE FUNCTIONS
function resizeTechModules(techQuotes, techPics, techContainer ) {
    $(techQuotes).height('auto');
    $(techPics).height('auto');
    $(this).parent().height('auto');
    
    var quotesMaxHeight = Math.max.apply(null, techQuotes.map(function () {
        return $(this).height();
    }).get());        
    $(techQuotes).height(quotesMaxHeight);

    var picsMaxHeight = Math.max.apply(null, techPics.map(function () {
        return $(this).height();
    }).get());        
    $(techPics).height(picsMaxHeight);

    var parentHeight = quotesMaxHeight + picsMaxHeight;

    $(parent).height(parentHeight);
}

function equalizeSlides(container, slides) {
    $(container).height('auto');
    $(slides).height('auto');
    

    var maxSlideHeight = Math.max.apply(null, $(slides).map(function () {
        return $(this).height();
    }).get());

    console.log('This is var maxSlideHeight: ' + maxSlideHeight);
    $(container).height(maxSlideHeight);
    $(slides).height(maxSlideHeight);
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


	// SLIDE RESIZE FUNCTIONS ON WINDOW RESIZE
	equalizeSlides(carContainer, carSlides);
	equalizeSlides(foundationContainer, foundationSlides);
	resizeTechModules(techQuotes, techPics, techContainer);
	
}

/*======== DOCUMENT READY ==========
===================================*/

$(function() {
	console.log( "-- jQuery Ready --" );

	// SLIDER VARS
	carSlides = $('#c3xgm-about-module-car .c3xgm-about-slide'),
	carContainer = $('div.c3xgm-about-clearfix.c3xgm-about-module-car > div.c3xgm-about-clearfix.c3xgm-about-module-65 > div').get(0),
	foundationSlides = $('.c3xgm-about-module-foundation .c3xgm-about-module'),
    foundationContainer = $('.c3xgm-about-clearfix.c3xgm-about-module-foundation > div.c3xgm-about-clearfix.c3xgm-about-module-80 > div').get(0),
    techQuotes = $('.c3xgm-about-module-technology .c3xgm-about-module .c3xgm-about-blockquote-container'),
    techPics = $('.c3xgm-about-module-technology .c3xgm-about-module .c3xgm-about-block-image'),
    techContainer = $('#c3xgm-about-module-technology');

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

	window.addEventListener( "scroll", onScroll );
	window.addEventListener( "resize", onResize );

	init();
});

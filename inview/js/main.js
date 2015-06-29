/*======= GLOBAL PROPERTIES ========
===================================*/

var sections = [], didscroll = false, didresize = true, laststeptime = 0, inviewpadding = 60;

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
	if( didresize && time - laststeptime > 300 ){
		updateSectionSizes();

		laststeptime 	= time;
		didresize 		= false;
	}

	if( ( didscroll || didresize ) && time - laststeptime > 300 ){
		updateSections();

		laststeptime 			= time;
		didscroll = didresize 	= false; 
	}

	window.requestAnimationFrame( step );
}

/*======== WORKER METHODS ==========
===================================*/

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
	bodyheight 			= Math.round( $( ".sections-container" ).height() );

	console.log( scrolltop, windowheight, bodyheight );

	for(var i = 0; i<sections.length; i++){
		var section 	= sections[ i ],
		offsettop 		= Math.round( section.top - scrolltop ),
		offsetbottom 	= Math.round( windowheight - offsettop ),
		offsetmiddle	= ( windowheight * .5 ) - offsettop;

		var inview 		= ( offsettop+section.height >= 0 ) && ( offsetbottom >= 0 ),
		fullyvisible 	= ( offsettop >= -25 ) && ( windowheight - ( offsettop+section.height ) ) >= -25,
		active 			= inview && ( offsetmiddle >= 0 || fullyvisible );

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
}

function sectionToInActiveState( _section ){
	console.log( "-- sectionToInActiveState " + _section + " --" );
}

/*======== EVENT HANDLERS ==========
===================================*/

function onScroll( _e ){
	didscroll = true;
}

function onResize( _e ){
	didresize = true;
}

/*======== DOCUMENT READY ==========
===================================*/

$(function() {
	console.log( "-- jQuery Ready --" );

	$( ".section" ).each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;

		sections.push( obj );
	});

	window.addEventListener( "scroll", onScroll );
	window.addEventListener( "resize", onResize );

	init();
});

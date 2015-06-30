/*======= GLOBAL PROPERTIES ========
===================================*/

var sections = [], didscroll = false, didresize = true, laststeptime = 0, inviewpadding = 60;
var mobile = false, static_x = false, browser = {};

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
	if( time-laststeptime > 30 ){
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

		if(inview && section.scroll_progress){
			var percent_scroll = (offsettop/windowheight),
			xrange = section.$el.width()-section.scroll_progress.width();
			direction = parseInt( section.scroll_progress.attr("data-direction") );

			if(direction == -1) percent_scroll = 1-percent_scroll;

			section.scroll_progress.css( "transform", "translate3d(" + percent_scroll*xrange + "px,0,0)" );
		}

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
				sectionToInactiveState( section );
			}
		}
	}
}

function sectionToActiveState( _section ){
	console.log( "-- sectionToActiveState " + _section + " --" );
}

function sectionToInactiveState( _section ){
	console.log( "-- sectionToInactiveState " + _section + " --" );
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

		var scrollprogress = $( t ).find(".scroll-progress");

		if( scrollprogress && scrollprogress.length > 0 ){
			obj.scroll_progress = scrollprogress.eq(0);
		}

		sections.push( obj );
	});

	window.addEventListener( "scroll", onScroll );
	window.addEventListener( "resize", onResize );

	useragent = navigator.userAgent;

	//GET IS MOBILE
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(useragent) ) mobile = true;

	//GET BROWSER NAME
	if( /Mozilla/i.test(useragent) ) 		browser.name 		= "Firefox";
	if( /Safari/i.test(useragent) ) 		browser.name 		= "Safari";
	if( /Chrome/i.test(useragent) ) 		browser.name 		= "Chrome";
	if( /Android/i.test(useragent) ) 		browser.name 		= "Android";
	if( /MSIE|Trident/i.test(useragent) ) 	browser.name 		= "IE";

	//GET BROWSER VERSION
	var start_i = 0, dot_i = 0, v_search_str = null;

	switch( browser.name ){
		case "Firefox": v_search_str = "Firefox/";
		break;
		case "Safari": 	v_search_str = "Version/";
		break;
		case "Chrome": 	v_search_str = "Chrome/";
		break;
		case "Android": v_search_str = "Android ";
		break;
		case "IE": if( /MSIE/i.test(useragent) ) v_search_str = "MSIE "; else browser.version = "11.0";
		break;
	}

	if( v_search_str ){
		start_i 			= useragent.indexOf(v_search_str);
		dot_i 				= useragent.indexOf(".", start_i );
		browser.version 	= useragent.substring( start_i+v_search_str.length, dot_i + 2 );
	}

	//STATIC EXPERIENCE DETECTION
	if( mobile ){
		if( ( browser.name == "Android" && browser.version < 4 ) 	||
			( browser.name == "Safari" && browser.version < 7 ) ){
				static_x = true;
		}
	} else {
		if( ( browser.name == "Safari" && browser.version < 8 ) 	||
			( browser.name == "Firefox" && browser.version < 38 ) 	||
			( browser.name == "Chrome" && browser.version < 43 ) 	||
			( browser.name == "IE" && browser.version < 9 ) ){
				static_x = true;
		}
	}

	console.log(useragent);
	console.log(browser);
	console.log("static experience: ", static_x);

	init();
});

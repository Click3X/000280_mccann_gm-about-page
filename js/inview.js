// NUMBER ANIMATIONS
    // CHECK IF ANIMATED EMPLOYEES IN ON SCREEN
    var current_frame, total_frames, path, length, handle;

    var initDraw = function() {
      current_frame = 0;
      total_frames = 480;
      path = new Array();
      length = new Array();

      // ITERATE THROUGH PATHS
      for(var i=0; i< 12 ;i++){
        // GET PATH
        path[i] = document.getElementById('i'+i);

        // GET PATH LENGTH
        l = path[i].getTotalLength();
        // ADD TO LENGTH ARRAY
        length[i] = l;

        // CSS PROPERTIES THAT WE ARE ANIMATING
        path[i].style.strokeDasharray = l + ' ' + l; 
        path[i].style.strokeDashoffset = l;
      }
      handle = 0;
    }
     
     
    var draw = function() {
       var progress = current_frame/total_frames;
       if (progress > 1) {

            // window.cancelAnimationFrame(handle);
            clearTimeout(handle);

       } else {
         current_frame++;
         for(var j=0; j<path.length;j++){
             path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
         }
         
         // handle = window.requestAnimationFrame(draw);

         handle = setTimeout(function(){
            draw();
         }, 60/1000);

       }
    };
    
var animateEmployees = false;
function fireAnimatedEmployees() {
      if(animateEmployees === false) {
        // EMPTY TEXT
        $('#c3xgm-about-emp-num').text('');
        // TRIGGER NUMBER ANIMATION
        $('#c3xgm-about-emp-num').jQuerySimpleCounter({end: 216000,duration: 2500});
        // TRIGGER PEOPLE ANIMATION
        $('#c3xgm-about-employees-img div').each(addAnimation);

        // MAKE SURE NUMBER REACHES 216000
        setTimeout(function(){ 
            $('#c3xgm-about-emp-num').text(formatNumber(216000));
        }, 2600);

        animateEmployees = true;
    }
}


var animate6 = false;
function fireAnimate6() {          
      if(animate6 === false) {
        // EMPTY TEXT
        $('#c3xgm-about-number-6').text('');
      // // TRIGGER NUMBER ANIMATION
        setTimeout(function(){ 
            initDraw();
            draw();
            $('#c3xgm-about-number-6').jQuerySimpleCounter({start:0, end: 6,duration: 1000});

            setTimeout(function(){ 
	            $('#c3xgm-about-number-6').text(formatNumber(6));
	        }, 1100);

            animate6 = true;
        }, 800);
    }
}

var animate23 = false;
function fireAnimate23() {
      if(animate23 === false) {
        // EMPTY TEXT
        $('#c3xgm-about-number-23').text('');
      // // TRIGGER NUMBER ANIMATION
        setTimeout(function(){ 
            $('#c3xgm-about-number-23').jQuerySimpleCounter({start:0, end: 23,duration: 1200});

            setTimeout(function(){ 
	            $('#c3xgm-about-number-23').text(formatNumber(23));
	        }, 1300);

            animate23 = true;
        }, 600);
    }
}

var animate70 = false;
function fireAnimate70() {
      if(animate70 === false) {
        // EMPTY TEXT
        $('#c3xgm-about-number-70').text('');
      // // TRIGGER NUMBER ANIMATION
        setTimeout(function(){ 
            $('#c3xgm-about-number-70').jQuerySimpleCounter({start:0, end: 70,duration: 1200});

            setTimeout(function(){ 
	            $('#c3xgm-about-number-70').text(formatNumber(70));
	        }, 1300);

            animate70 = true;
        }, 600);
    }
}

var animate63 = false;
function fireAnimate63() {
      if(animate63 === false) {
        // EMPTY TEXT
        $('#c3xgm-about-number-63').text('');
      // // TRIGGER NUMBER ANIMATION
        setTimeout(function(){ 
            $('#c3xgm-about-number-63').jQuerySimpleCounter({start:40, end: 63,duration: 1400});
            
            setTimeout(function(){ 
	            $('#c3xgm-about-number-63').text(formatNumber(63));
	        }, 1500);

            animate63 = true;
        }, 1400);
    }
}

// CRASH TEST DUMMIES
var triggerCTD = false;
$('#c3xgm-about-crash-test-dummies').addClass('invisible');
function fireCTD() {
	setTimeout(function() {
        if(triggerCTD == false) {
            triggerGif( document.getElementById('c3xgm-about-crash-test-dummies') );
            $('#c3xgm-about-crash-test-dummies').removeClass('invisible');
            triggerCTD = true;    
        }
	}, 200);	
}


/*======= GLOBAL PROPERTIES ========
===================================*/

var sections = [], didscroll = false, didresize = true, laststeptime = 0, inviewpadding = 60;
var currentPage = 0, currentSection = 0, navLinks, subNavLink;

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
	if( time-laststeptime > 100 ){
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
	// console.log( "-- updateSectionSizes --" );

	for( var i = 0; i < sections.length; i++ ){
		var section 			= sections[ i ];

		section.top = Math.round( section.$el.offset().top );
		section.height = Math.round( section.$el.height() );
	}
}

function updateSections(){
	// console.log( "-- updateSections --" );

	var scrolltop 		= $( window ).scrollTop(),
	windowheight 		= Math.round( window.innerHeight ),
	bodyheight 			= Math.round( $( "#c3xgm-about-page-container" ).height() );
	

	// console.log( scrolltop, windowheight, bodyheight );

	for(var i = 0; i<sections.length; i++){
		var section 	= sections[ i ],
		offsettop 		= Math.round( section.top - scrolltop ),
		offsetbottom 	= Math.round( windowheight - offsettop ),
		offsetmiddle	= ( windowheight * .8 ) - offsettop;

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

		// console.log( i + 1, offsettop, offsetmiddle, offsetbottom );
	}
}


function sectionToActiveState( _section ){
	// console.log( "-- sectionToActiveState " + _section + " --" );
	// console.dir( _section);

	if( (_section.blockType == "page") || (_section.blockType == "section") ) {
		_section.$el.removeClass("invisible").addClass( "c3xgm-about-page-in-view" );

		var id = '#' + _section.pageId;
    	
    	if(_section.blockType == "page") {
    		// GET INDEX OF CURRENT PAGE
    		currentPage = $( "#c3xgm-about-page-container > .c3xgm-about-page").index( _section.$el ); 
    		// UNHIGHTLIGHT CURRENT NAV BULLET
	        $(".c3xgm-about-main-nav > li > a.c3xgm-about-nav-bullet-active").removeClass("c3xgm-about-nav-bullet-active");
	        // HIGHLIGHT NAV BULLET
	        $(navLinks.eq(currentPage)).addClass("c3xgm-about-nav-bullet-active");

	        // OUR PEOPLE TRIGGERS
	        var time;
	        if( _section.pageId && (_section.pageId == "c3xgm-about-page-our-people") ) {

	        	var page =  $(_section.$el.get(0)),
	        		blocks = $(page).find('.c3xgm-about-block');

	        	$.each(blocks, function(i, val) {
                    var animateNum = $(this).find('.c3xgm-about-animate-number');
                    setTimeout(function() {
                        time = 1200 * i;
                        setTimeout(function() {
                        	$(val).removeClass('invisible').addClass('element-in-view');
                            if(animateNum.length > 0) {
                                if(i == 0 ) {
                                    fireAnimatedEmployees();
                                } else if(i==1) {
                                    fireAnimate6();
                                } else if(i==3) {
                                    fireAnimate23();
                                } else if(i==4) {
                                    fireAnimate70();
                                }
                            }
                        }, time);
                    }, 2000);
                });
	        }
    	} 
    	else if(_section.blockType == "section") {
    		currentSection = $( "#c3xgm-about-page-our-commitment > .c3xgm-about-page").index( _section.$el );
    		// UNHIGHTLIGHT CURRENT SUB NAV BULLET
			$(".c3xgm-about-main-nav-sub .c3xgm-about-nav-bullet-active").removeClass("c3xgm-about-nav-bullet-active");
			// HIGHLIGHT SUB NAV BULLET
			subNavLink = $('a[href="'+id+'"]');
			$(subNavLink).eq(0).addClass("c3xgm-about-nav-bullet-active");
    	}

	} else if( _section.blockType == "end-nav" ) {
		_section.$el.removeClass("invisible").addClass( "c3xgm-about-page-in-view" );
	} else if(_section.blockType == "block") {
		_section.$el.removeClass("invisible").addClass( "element-in-view" );

		// TRIGGERS FOR SPECIFIC BLOCKS
		if( _section.pageId && (_section.pageId == "c3xgm-about-safety-score") ) {
			fireAnimate63();
		} else if ( _section.pageId && (_section.pageId == "c3xgm-about-crash-test-dummies-block") ) {
			fireCTD();
		}

	} else if(_section.blockType == "slider") {
		var trigger = _section.$el.eq(0).attr('data-trigger');
		if( (trigger == 'car') || (trigger == 'foundation') ) {
			setTimeout(function(){
            	// AUTO ROTATE SLIDER
				triggerSlider(trigger);
			}, 1250);
		} else {
			if( trigger == 'tech' ) {
				setTimeout(function(){
	            	// AUTO ROTATE SLIDER
					triggerSlider(trigger);
				}, 500);
			}
		}

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
	// console.log("-- onScroll --");
	didscroll = true;
}

function onResize( _e ){
	// console.log("-- onResize --");
	didresize = true;
}

/*======== DOCUMENT READY ==========
===================================*/

$(function() {
	console.log( "-- jQuery Ready --" );

	navLinks = $('.c3xgm-about-main-nav > li a');

	// BLOCKS
	$( ".c3xgm-about-block" ).not("#c3xgm-about-page-our-people .c3xgm-about-block").each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD ID PROPERTY IF BLOCK HAS ONE
		if( $( t ).attr('id') ) { obj.pageId = $( t ).attr('id'); }
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'block';

		// ADD INVISIBLE CLASS TO ANIMATE ELEMENTS IN
		obj.$el.addClass('invisible');

		sections.push( obj );
	});

	// OUR PEOPLE BLOCKS
	$('#c3xgm-about-page-our-people .c3xgm-about-block').each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD ID PROPERTY IF BLOCK HAS ONE
		if( $( t ).attr('id') ) { obj.pageId = $( t ).attr('id'); }
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'our-people';

		// ADD INVISIBLE CLASS TO ANIMATE ELEMENTS IN
		obj.$el.addClass('invisible');

		sections.push( obj );
	});

	// PAGES
	$( "#c3xgm-about-page-container > .c3xgm-about-page" ).each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.pageId 	= $( t ).attr('id');
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'page';

		// ADD INVISIBLE CLASS TO ANIMATE ELEMENTS IN
		obj.$el.addClass('invisible');

		sections.push( obj );
	});


	// SECTIONS ( IN OUR COMMITMENT PAGE ) AND END NAV
	$( "#c3xgm-about-page-our-commitment > .c3xgm-about-page" ).each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.pageId 	= $( t ).attr('id');
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'section';

		// ADD INVISIBLE CLASS TO ANIMATE ELEMENTS IN
		obj.$el.addClass('invisible');

		sections.push( obj );
	});

	// END NAV
	$( "#c3xgm-about-end-nav").each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'end-nav';

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
		// ADD ID PROPERTY IF BLOCK HAS ONE
		if( $( t ).attr('id') ) { obj.pageId = $( t ).attr('id'); }


		sections.push( obj );
	});


	// BLOCKS FOR LOOPING FLAGLINE AND SOLAR ROAD
	$('#animate-flag-line, #c3xgm-about-solar-road-list').each( function(){
		var obj = {}, t = $( this );

		obj.el 		= t;
		obj.$el 	= $( t );
		obj.inbiew 	= true;
		obj.active 	= false;
		// ADD BLOCK TYPE PROPERTY TO DIFFERENTIAGE BETWEEN PAGES AND BLOCKS
		obj.blockType  = 'loop';


		sections.push( obj );
	});

	// loop animations - TRIGGER ON OFF
	if(mobile){
		$('#c3xgm-about-grey-van, #c3xgm-about-red-car').each( function(){
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

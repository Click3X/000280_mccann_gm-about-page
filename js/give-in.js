// GIVE IN  
// OUR PEOPLE VARS
// DECLARE VARS
var currentPage = 0,
	currentSection = 0;

// NUMBER ANIMATIONS
var current_frame, total_frames, path, length, handle;

var init = function() {
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

jQuery(document).ready(function($) { 
    
    var animateEmployees = false;
    function fireAnimatedEmployees() {
          if(animateEmployees === false) {
            // EMPTY TEXT
            $('#c3xgm-about-emp-num').text('');
            // TRIGGER NUMBER ANIMATION
            $('#c3xgm-about-emp-num').jQuerySimpleCounter({end: 216000,duration: 2500});
            // MAKE SURE NUMBER REACHES 216000
            setTimeout(function(){ 
                $('#c3xgm-about-emp-num').text(formatNumber(216000));
            }, 2500);
            // TRIGGER PEOPLE ANIMATION
            $('#c3xgm-about-employees-img div').each(addAnimation);
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
                init();
                draw();
                $('#c3xgm-about-number-6').jQuerySimpleCounter({start:0, end: 6,duration: 1000});
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
                $('#c3xgm-about-number-63').jQuerySimpleCounter({start:40, end: 63,duration: 900});
                animate63 = true;
            }, 800);
        }
    }


    fireOurPeopleAnimations = function(page) {
    	var time;
        $.each(ourPeopleBlocks, function(i, val) {
            setTimeout(function() {
                time = 1200 * i;
                setTimeout(function() {
                    $(val).removeClass('invisible').addClass('element-in-view');
                        // console.log('This is index: ' + i);
                    if(i == 0 ) {
                        fireAnimatedEmployees();
                    } else if(i==1) {
                        fireAnimate6();
                    } else if(i==3) {
                        fireAnimate23();
                    } else if(i==4) {
                        fireAnimate70();
                    }
                }, time);
            }, 2000);
        });
	}

    console.log('This is from give in:');

    // // DECLARE VARS
    var currentPage = 0,
    	navLinks = $('.c3xgm-about-main-nav > li a');

    // console.log('This is your navLinks:');
    // console.dir(navLinks);

    // GET NAME OF BLOCK
    function getName(block) {
    	var name = block.className.split(" ")[2];
    	if(name == undefined) {
    		name = block.id;
    	}
    	return name;
    }

    // PAGES FOR HEADING ANINATIONS
   	var pages = $('#c3xgm-about-page-container > .c3xgm-about-page'),
   		sections = $('#c3xgm-about-page-our-commitment > .c3xgm-about-page'),	
   		endNav = $('#c3xgm-about-end-nav'),
    	blocks = $('.c3xgm-about-block').not('.c3xgm-about-solar-panels-animation, .c3xgm-about-test-facility, #c3xgm-about-page-our-people .c3xgm-about-block'),
    	sliders = $('.c3xgm-about-module-foundation, .c3xgm-about-module-technology, .c3xgm-about-module-car'),
    	triggers = $('#animate-flag-line, #c3xgm-about-solar-road-list'),
    	ourPeopleBlocks = $('#c3xgm-about-page-our-people .c3xgm-about-block');
    	allAnimatedElements = [pages, sections, endNav, blocks, ourPeopleBlocks];

    // HIDE ANIMATED ELEMENTS
    // $(pages).addClass('invisible');

    $.each(allAnimatedElements, function(i,elem) {
    	$(this).addClass('invisible');
    });



    // console.log('These are your pages:');
    // console.dir(pages);
    // console.log('These are your blocks:');
    // console.dir(blocks);
    // console.log('These are your sliders:');
    // console.dir(sliders);
    // console.log('These are your triggers:');
    // console.dir(triggers);

    // ADD BLOCKS TO pages objectsd

    // BIND NAV UPDATE TO PAGES WHEN IN VIEW
    // PAGE AND NAV FUNCTIONALITY
    $(pages).bind('inview', function (event, visible) {
    	var name = getName(this), 
    		id = '#'+name;

		if (visible == true) {
			// UPDATE CURRENT PAGE
			currentPage = $(pages).index( $(this) );

			console.log('PAGE in view!: ' + name);
			console.log('This is currentPage: ' + currentPage);
			console.dir(this);

			// IF CURRENT PAGE == OUR PEOPLE (1) - THEN FIRE OFF ANIMATIONS
			if(currentPage == 1) {
				fireOurPeopleAnimations();
			}
			
			// UNHIGHTLIGHT CURRENT NAV BULLET
			$(".c3xgm-about-main-nav > li > a.c3xgm-about-nav-bullet-active").removeClass("c3xgm-about-nav-bullet-active");
			// HIGHLIGHT NAV BULLET
			$(navLinks.eq(currentPage)).addClass("c3xgm-about-nav-bullet-active");

			// ADD PAGE IN VIEW CLASS
			$(this).removeClass('invisible').addClass('c3xgm-about-page-in-view'); 

		} else {
			console.log('PAGE out of view!: ' + name);
			console.dir(this);
		}
	});

    // SECTIONS
	$(sections).bind('inview', function (event, visible) {
    	var name = getName(this), 
    		id = '#'+name;

		if (visible == true) {
			// UPDATE CURRENT SECTION
			currentSection = $(sections).index( $(this) );

			console.log('Section in view!: ' + name);
			console.log('This is currentSection: ' + currentSection);
			console.dir(this);
			
			// UNHIGHTLIGHT CURRENT SUB NAV BULLET
			$(".c3xgm-about-main-nav-sub .c3xgm-about-nav-bullet-active").removeClass("c3xgm-about-nav-bullet-active");
			
			// HIGHLIGHT SUB NAV BULLET
			var subNavLink = $('a[href="'+id+'"]');
			console.log('This is subNavLink: ' + subNavLink);
			console.dir(subNavLink);

			$(subNavLink).eq(0).addClass("c3xgm-about-nav-bullet-active");
			
			// ADD SECTION IN VIEW CLASS
			$(this).removeClass('invisible').addClass('c3xgm-about-page-in-view');

		} else {
			console.log('SECTION out of view!: ' + name);
			console.dir(this);
		}
	});

    // TRIGGERS -- ANIMATING FLAG LINE - SOLAR ROAD
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


	// BLOCKS
    $(blocks).bind('inview', function (event, visible) {
    	var name = getName(this);
		if (visible == true) {
			console.log('BLOCK in view!: ' + name);
			$(this).removeClass('invisible').addClass('element-in-view');
		} else {
			console.log('BLOCK out of view!: ' + name);
		}
	});


	// END NAV
    $(endNav).bind('inview', function (event, visible) {
    	var name = getName(this);
		if (visible == true) {
			console.log('endNav in view!: ' + name);
			$(this).removeClass('invisible').addClass('c3xgm-about-page-in-view');
		} else {
			console.log('endNav out of view!: ' + name);
		}
	});



    // TRIGGER FUNCTION ON WINDOW AT DOCUMENT READY
	$(window).trigger('scroll');

});
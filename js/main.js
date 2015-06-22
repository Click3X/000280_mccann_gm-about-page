// PAGE JS FOR PAGES
jQuery(document).ready(function($) { 
	// console.log('This is page js!');

    // TEST IF PAGE IS animation
    var altAnim = $('body').hasClass('c3xgm-about-alt-anim');
    // console.log('This is altAnim: ' + altAnim);

	// DECLARE VARIABLES FOR LATER USE
	var css3dtransforms = true,
		currentScroll,
		scrollTimeout,
		resizeTimeout,
		scrollHandler,
		resizeHandler,
		viewDimensions,
		currentPage = 0,
		newPage,
		recentPage = "";

	// TEST FOR 3D TRANSFORMS - for IE
	if( $('html').hasClass('no-csstransforms3d') ) {
	    css3dtransforms = false;
        console.log('We havre no transfrom!');
	}

	/** MAIN NAV JS --- HIGH LIGHT NAV, ATTACH CLASSES */
    var aChildren = $(".c3xgm-about-main-nav li a"),
        aArray = [];
    
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i],
            ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } 

    // HIGHTLIGHT NAV
    function updateNav() {
        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i],
                divPos = Pages[i].elementTop;
                divHeight = Pages[i].elementHeight;

            // UPDATE NAV BASED ON WINDOW POSITION AND PAGE HEIGHT
            if (viewDimensions.scrollTop >= (divPos - 100) && viewDimensions.scrollTop < ((divPos) + (divHeight-100) )) {
                $("a[href='" + theID + "']").addClass("c3xgm-about-nav-bullet-active");
            } else {
                $("a[href='" + theID + "']").removeClass("c3xgm-about-nav-bullet-active");
            }

            var endNavHeight = Number( $('#c3xgm-about-end-nav').height() );
            var endSec = Number( $('#c3xgm-about-page-our-global-community').height() );
            var endHeight = endNavHeight + endSec;
            console.log("This is endNavHeight: " + endHeight);

            // IF BOTTOM OF DOC IS REACHED, HIGHLIGHT LAST BULLET
            // if ( viewDimensions.scrollTop + viewDimensions.windowHeight == viewDimensions.docHeight) {
            var curScroll = viewDimensions.scrollTop + viewDimensions.windowHeight;
            var endDim = viewDimensions.docHeight - endHeight;
            // var endDim = viewDimensions.docHeight - endHeight - 108;

            // console.log('This is curScroll:' + curScroll);
            // console.log('This is endDim:' + endDim);

            if ( viewDimensions.scrollTop + viewDimensions.windowHeight > viewDimensions.docHeight - endHeight ) {

                var lastPage = aArray[aArray.length - 1];
                // $("a[href='#c3xgm-about-page-environment']").removeClass("c3xgm-about-nav-bullet-active");
                $('c3xgm-about-main-nav > li a.c3xgm-about-nav-bullet-active').removeClass('c3xgm-about-nav-bullet-active');
                $("a[href='" + lastPage + "']").addClass("c3xgm-about-nav-bullet-active");
            }
        }
    }

    // SMOOTH SCROLL TO LINKS
    $('.c3xgm-about-main-nav a[href*=#]:not([href=#]), a.c3xgm-about-down-arrow-link, .c3xgm-about-end-nav a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log('This is the target: ' + this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

	// UPDATE VIEW PORT DIMENSIONS
	function updateviewDimensions() {
		viewDimensions = {
			windowHeight : jQuery(window).height(),
		    windowWidth : jQuery(window).width(),
		    scrollTop : jQuery(window).scrollTop(),
		    scrollBottom : jQuery(window).scrollTop() + jQuery(window).height(),
		    docHeight : jQuery(document).height(),
            left : jQuery(window).scrollLeft(),
            right : jQuery(window).scrollLeft() + jQuery(window).height()
		}

		return viewDimensions;
	}

	// CHECK UPDATE - VIEWPORT ON RESIZE
	window.addEventListener('resize', function() {
		setTimeout(function() {
			updateviewDimensions();
		}, 320);
	} , false);


	// S C R O L L 
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 120/1000);
    }, false);



    // NUMBER ANIMATIONS
    // CHECK IF ANIMATED EMPLOYEES IN ON SCREEN
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
                $('#c3xgm-about-number-63').jQuerySimpleCounter({start:55, end: 63,duration: 800});
                animate63 = true;
            }, 1100);
        }
    }

    var carHasRotated = false;
      // ROTATE CAR
    function rotateCar() {
        if(carHasRotated === false) {
            setTimeout(function(){ 
                $('#safety-truck').css('opacity', 1);
                setTimeout(function(){ 
                    $('#truck-line-container').addClass('carAnimation-slide');                
                    $('#truck-parent').addClass('carAnimation-rotate');
                    $('#line-parent').addClass('carAnimation-lineFadeIn');
                    $('.c3xgm-about-circle-lines').addClass('carAnimation-lineRotate');
                    carHasRotated = true;
                }, 800);
            }, 2400);
        }
    }

    // CHECK FOR PAGES ON SCREEN
    function checkPages() {
    	$.each(Pages, function(i, val) {
            var _t = this;
    		// if( _t.isInView() && (_t.hasViewClass == false) ){

            // DONT SHOW ANIMATIONS FOR IE9 AND BELOW
            if(!css3dtransforms) {
                _t.addInViewClass();

                // ADD IN VIEW CLASS TO ALL PAGE BLOCKS
                $.each(_t.animBlocks, function(i, val) {
                    val.addInViewClass();
                });

            } else {

                if( _t.isInView() && ( $(this.$element).hasClass('invisible') ) ){
                // if( _t.isInView() && ( $(this.$element).hasClass('invisible') ) ){
                    // ADD IN VIEW CLASS
        			_t.addInViewClass();
        			// console.log('PAGE: ' + _t.elementName);
        			// SET CURRENT PAGE TO PAGE INDEX
        			currentPage = i;
        			// SET PAGE VIEW STATE
        			_t.hasViewClass = true;
                }

                // IF CURRENT PAGE IS OUR PEOPLE, SEQUENTIALLY FADE IN ANIMATIONS
                if(currentPage == 1) {
                    var time;
                    $.each(_t.animBlocks, function(i, val) {
                        var animateNum = $(this.$element ).find('.c3xgm-about-animate-number');
                        setTimeout(function() {
                            time = 1200 * i;
                            setTimeout(function() {
                                val.addInViewClass();
                                if(animateNum.length > 0) {
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
                                }
                            }, time);
                        }, 2000);
                    });
                }

                // IF CURRENT PAGE IS OUR BRANDS, FADE IN FIRST SLIDE
                if(currentPage == 2) {
                    // SHOW FIRST SLIDE
                    setTimeout(function() {
                        autorotateAboutSliderOnce();
                    }, 2000);
                    // START AUTO SLIDER
                    setTimeout(function() {
                            autorotateAboutSlider();
                    }, 1000);
                }

                // TRIGGER TECH MODULE
                if( _t.elementName == "c3xgm-about-page-technology" ) {
                    // SHOW FIRST SLIDE
                    setTimeout(function() {
                        autorotateTechSliderOnce();
                    }, 1500);
                    // START AUTO SLIDER
                    setTimeout(function() {
                        autorotateTechSlider();
                    }, 1000);
                } 
                
                if( _t.elementName == "c3xgm-about-page-our-global-community" ) {
                    // SHOW FIRST SLIDE
                    setTimeout(function() {
                        autorotateFoundationSliderOnce();
                    }, 2200);
                    // START AUTO SLIDER
                    setTimeout(function() {
                        autorotateFoundationSlider();
                    }, 1000);
                } 

            }
    	}); 
    }

    var triggerCTD = false;

    // CHECK FOR BLOCKS
    function checkBlocks(currentPage) {
        // console.log('Thsi is currentPage: ' + currentPage);
        // console.dir(currentPage);
        
    	var blocks = Pages[currentPage].animBlocks;

        if(currentPage != 1) {
            $.each(blocks, function(i, val) {
                // if( this.isAtEighth() && (this.hasViewClass == false) ){
                // if( this.isAtEighth() && ( $(this.$element).hasClass('invisible') ) ){


                if( this.isAtEighth() ){
                    // ADD IN VIEW CLASS
                    this.addInViewClass();
                    // console.log('Im in view: ' + this.elementName);
                    // SET PAGE VIEW STATE
                    this.hasViewClass = true;
                    // IF TEST FACILITY - TRIGGER ROLLOVER
                    if(this.elementName == "c3xgm-about-test-facility") {
                        rotateCar();
                        // ANIMATE FLAG WHEN ELEMENT IS IN VIEW - ONLY ON ALT ANIMATION PAGE
                    } else if( (this.elementName == "c3xgm-about-dealers") && (altAnim == false) ) {
                        $('#animate-flag-line').addClass('animate-flag-line');
                    } else if( (this.elementName == "c3xgm-about-solar-panels-animation") && (altAnim == false) ) {
                        $('#c3xgm-about-solar-road-list').addClass('animate-flag-line');
                    }
                     else if( this.elementName == "c3xgm-about-safety-score" ) {
                        fireAnimate63();
                    } else if( this.elementName == "c3xgm-about-crash-test-dummies") {
                        setTimeout(function() {
                            if(triggerCTD == false) {
                                triggerGif( document.getElementById('c3xgm-about-crash-test-dummies') );
                                $('#c3xgm-about-crash-test-dummies').removeClass('invisible');
                                triggerCTD = true;    
                            }
                            
                        }, 800);
                    }
                }
            });
        }
    }

	// PAGE OBJECT
	function AmimatedElement(elem, defaults) {
		// DECLARE ELEM, DEFAULTS, THIS, OFFSET, CALLBACK - OPTIONAL USE
		var elem = elem,
            defaults = defaults || {},
            _t = this,
            offset = defaults.offset || 100,
            callbackFunction = defaults.callbackFunction || function(elem){};

         // P R O P E R T I E S
        // CHECK IF INSTANCE IS JQUERY OBJECT
        if(elem instanceof jQuery) { this.$element = elem; } 
            else { this.$element = $(elem); }

        // ELEMENT DIMENSIONS
        if(defaults.blocktype == 'page') {
        	this.elementName = this.$element.attr('id');
        } else {
        	this.elementName = this.$element.attr("class").split(" ")[2];
        }
        
        this.elementWidth = Number( this.$element.css("width").replace('px', '') );
        this.elementHeight = Number( this.$element.css("height").replace('px', '') );
        this.elementPaddingBottom = Number( this.$element.css("paddingBottom").replace('px', '') );
        this.elementTop = this.$element.offset().top;
        this.elementLeft = this.$element.offset().left;
        this.elementRight = this.$element.offset().left + Number( this.$element.css("width").replace('px', '') );
        this.elementBottom = this.elementHeight + this.elementTop;

        // ELEMENT STATE - PAGE VIEW
        this.hasViewClass = false;

        // PAGE BLOCKS - BLOCKS ARE INDIVIDUAL 'PAGE OBJECTS'
        this.aboutBlocks = this.$element.find('.c3xgm-about-block');
        // READY ANIM BLOCKS ARRAY
        this.animBlocks = []; 

        // BUILD ANIM BLOCKS
        if(this.aboutBlocks.length > 0){
            $.each(this.aboutBlocks, function(i, val) {
    	        // BUILD EACH PAGE
    	        var elem = $(this).get(0),
    	        	defaults = {
			        	'blocktype':'block'
			        };

    	        elem = new AmimatedElement(val, defaults);
    	        _t.animBlocks.push(elem);
    	    });
        }


        this.getElementPosition = function() {
            this.elementRight = this.$element.offset().left + Number( this.$element.css("width").replace('px', '') );
            this.elementBottom = this.elementHeight + this.$element.offset().top;
        }

        this.getScrollAmt = function() {
            return Math.round( viewDimensions.scrollBottom - this.elementTop );
        }

        // IN VIEW
        this.isInView = function() {
        	return ( (this.elementTop <= viewDimensions.scrollBottom) && (this.elementBottom >= viewDimensions.scrollTop) );
        }

        // IS AT EIGHTH
        this.isAtEighth = function() {
            return ( (this.elementTop <= viewDimensions.scrollBottom - viewDimensions.windowHeight/8) );
        }

        // ADD IN VIEW CLASS
        this.addInViewClass = function() {
        	if( defaults.blocktype == 'page' ) {
                this.$element.removeClass('invisible');  
        		this.$element.addClass('c3xgm-about-page-in-view');	
        	} else {
                this.$element.removeClass('invisible');  
        		this.$element.addClass('element-in-view');	
        	}
        }
	
	} // END OBJECT


    // SCROLL HANDLER --------------------------------------------
    if(mobile) {
        scrollHandler = function () {
            // UPDATE VIEW PORT
            updateviewDimensions();
            // CHECK PAGES
            checkPages();
            // CHECK BLOCKS FOR CURRENT PAGES
            checkBlocks(currentPage);
            // UPDATE NAV
            updateNav();
        }

    } else {
        scrollHandler = function () {
            // UPDATE VIEW PORT
            updateviewDimensions();
            // CHECK PAGES
            checkPages();
            // CHECK BLOCKS FOR CURRENT PAGES
            checkBlocks(currentPage);
            // UPDATE NAV
            updateNav();
        }
    }


	// NOW THAT WE HAVE PREPPED OUR ENVIRONMENT -------------------------------------------------------------------------------
	// GET ALL PAGES
    var pages = $('.c3xgm-about-page'),
        Pages = [];

    // INIT PAGES OBJECTS
    $.each(pages, function(i, val) {
        // BUILD EACH PAGE
        var defaults = {
        	'blocktype':'page'
        }
        Pages[i] = new AmimatedElement(val, defaults);
        console.log(Pages[i]);
    });

    console.dir(Pages);

    // HIDE ALL ANIMATABLE ELEMENTS AND PAGES ---------------------------------------------------
    $.each(Pages, function(i, val) {
        // HIDE PAGES]
        // ADD CONDITRIONAL TO SKIP  FIRST PAGE, OUR COMPANY
        if(i != 0) {
            this.$element.removeClass("c3xgm-about-page-in-view").addClass("invisible");    
        }
        
        // LOOP PAGE BLOCKS IF PAGE HAS THEM
        if(val.aboutBlocks.length > 0) {
            // HIDE PAGE BLOCKS
            $.each(val.aboutBlocks, function(i, val) {
                // HIDE BLOCK
                $(val).addClass('invisible');
            });
        }
    });

    // CRASH TEST DUMMIES GIGS, AND IE 0
    if(css3dtransforms) {
        $('#c3xgm-about-crash-test-dummies').addClass('invisible');
    } else {
        // REPLACE .GIF WITH .SVG FOR IE 9
        $('#c3xgm-about-crash-test-dummies').each(function(index,element) {
            element.src = element.src.replace('.gif','.svg');
        });
    }

    // UPDATE VIEWPORT DIMENSIONS
    updateviewDimensions();
    // UPDATE NAV ON PAGE LOAD
    updateNav();
    // NOW THAT WE HAVE OUR PAGE OBJECTS - SEE WHICH ONES ON SCREEN
    checkPages();
    // CHECK IF THERE ARE BLOCKS ON CURRENT PAGE
    checkBlocks(currentPage);

});
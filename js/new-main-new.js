var currentPage = 0,
    currentSection = 0;
// PAGE JS FOR PAGES
jQuery(document).ready(function($) { 
    console.log('This is new main');

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


    // // DECLARE VARS
    var navLinks = $('.c3xgm-about-main-nav > li a');

    console.log('This is your navLinks:');
    console.dir(navLinks);

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
        blocks = $('.c3xgm-about-block').not('.c3xgm-about-solar-panels-animation, .c3xgm-about-test-facility'),
        sliders = $('.c3xgm-about-module-foundation, .c3xgm-about-module-technology, .c3xgm-about-module-car'),
        triggers = $('#animate-flag-line, #c3xgm-about-solar-road-list');

    // console.log('These are your pages:');
    // console.dir(pages);
    // console.log('These are your blocks:');
    // console.dir(blocks);
    // console.log('These are your sliders:');
    // console.dir(sliders);
    // console.log('These are your triggers:');
    // console.dir(triggers);


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
            
            // UNHIGHTLIGHT CURRENT NAV BULLET
            $(".c3xgm-about-nav-bullet-active").removeClass("c3xgm-about-nav-bullet-active");
            // HIGHLIGHT NAV BULLET
            $(navLinks.eq(currentPage)).addClass("c3xgm-about-nav-bullet-active");
            // ADD PAGE IN VIEW CLASS
            $(this).addClass('c3xgm-about-page-in-view'); 

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
            var subNavHighlight = currentSection + 4;
            // $(navLinks.eq(subNavHighlight)).addClass("c3xgm-about-nav-bullet-active");

            console.log('This is subNavHighlight: '+ subNavHighlight);
            console.dir($(navLinks.eq(subNavHighlight)));
            // ADD SECTION IN VIEW CLASS
            $(this).addClass('c3xgm-about-page-in-view'); 

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



    // TRIGGER FUNCTION ON WINDOW AT DOCUMENT READY
    $(window).trigger('scroll');

    // TEST IF PAGE IS animation
    var altAnim = $('body').hasClass('c3xgm-about-alt-anim');
    console.log('This is altAnim: ' + altAnim);

    // DECLARE VARIABLES FOR LATER USE
    var css3dtransforms = true,
        currentScroll,
        scrollTimeout,
        resizeTimeout,
        scrollHandler,
        resizeHandler,
        viewDimensions;

    // TEST FOR 3D TRANSFORMS - for IE
    if( $('html').hasClass('no-csstransforms3d') ) {
        css3dtransforms = false;
    }

    // UPDATE VIEW PORT DIMENSIONS
    function updateviewDimensions() {
        viewDimensions = {
            windowHeight : jQuery(window).height(),
            windowWidth : jQuery(window).width(),
            scrollTop : jQuery(window).scrollTop(),
            scrollBottom : jQuery(window).scrollTop() + jQuery(window).height()
        }
        return viewDimensions;
    }

    // CHECK FOR PAGES ON SCREEN
    function checkPages() {
        $.each(Pages, function(i, val) {
            var _t = this;
            // if( _t.isInView() && (_t.hasViewClass == false) ){
            if( _t.isInView() && ( $(this.$element).hasClass('invisible') ) ){
                // ADD IN VIEW CLASS
                _t.addInViewClass();
                // console.log('PAGE: ' + _t.elementName);
                // SET CURRENT PAGE TO PAGE INDEX
                currentPage = i;

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

                // // TRIGGER TECH MODULE
                if( _t.elementName == "c3xgm-about-page-technology" ) {
                    // SHOW FIRST SLIDE
                    setTimeout(function() {
                        autorotateTechSliderOnce();
                    }, 1000);
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
        console.log('This is currentPage: ' + Pages[currentPage].elementName);        
        var blocks = Pages[currentPage].animBlocks;

        if( (currentPage != 1) && (blocks.length > 0) ) {
            $.each(blocks, function(i, val) {
                if( this.isAtSixteen() ){
                    this.addInViewClass();
                    console.log('Im in view: ' + this.elementName);

                    if( this.elementName == "c3xgm-about-safety-score" ) {
                        fireAnimate63();
                    } else if( this.elementName == "c3xgm-about-crash-test-dummies") {
                        if(triggerCTD == false) {
                            setTimeout(function() {
                                triggerGif( document.getElementById('c3xgm-about-crash-test-dummies') );
                                $('#c3xgm-about-crash-test-dummies').removeClass('invisible');
                                triggerCTD = true;    
                            }, 200);
                        }
                    }
                }
            });
        }
    }

    // CHECK FOR BLOCKS
    function reCheckBlocks(currentPage) {
        console.log('Thsi is currentPage: ' + Pages[currentPage].elementName);        
        var blocks = Pages[currentPage].animBlocks;

        if( (currentPage != 1) && (blocks.length > 0) ) {
            $.each(blocks, function(i, val) {
                if( this.isInView() ){
                    this.addInViewClass();
                    console.log('Im in view: ' + this.elementName);

                    if( this.elementName == "c3xgm-about-safety-score" ) {
                        fireAnimate63();
                    } else if( this.elementName == "c3xgm-about-crash-test-dummies") {
                        if(triggerCTD == false) {
                            setTimeout(function() {
                                triggerGif( document.getElementById('c3xgm-about-crash-test-dummies') );
                                $('#c3xgm-about-crash-test-dummies').removeClass('invisible');
                                triggerCTD = true;    
                            }, 200);
                        }
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
            offset = defaults.offset || 100;

         // P R O P E R T I E S
        // CHECK IF INSTANCE IS JQUERY OBJECT
        if(elem instanceof jQuery) { this.$element = elem; } 
            else { this.$element = $(elem); }

        // ELEMENT NAME
        if(defaults.blocktype == 'page') {
            this.elementName = this.$element.attr('id');
        } else {
            if(this.$element.attr("class").split(" ")[2]) {
                this.elementName = this.$element.attr("class").split(" ")[2];
            } else {
                this.elementName = 'c3xgm-about-no-name';
            }
        }
        
        // ELEMENT DIMENSIONS
        this.elementWidth = Number( this.$element.css("width").replace('px', '') );
        this.elementHeight = Number( this.$element.css("height").replace('px', '') );

        // ELEMENT COORDS
        this.elementTop = this.$element.offset().top;
        this.elementBottom = this.elementHeight + this.elementTop;

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
                // MAKE NEW ANIMATED ELEMENT FROM PAGE BLOCK
                elem = new AmimatedElement(val, defaults);
                // PUSH INTO ARRAY HOLDER
                _t.animBlocks.push(elem);
            });
        }

        // IN VIEW
        this.isInView = function() {
            return ( (this.elementTop <= viewDimensions.scrollBottom) && (this.elementBottom >= viewDimensions.scrollTop) );
        }

        // IS AT EIGHTH
        this.isAtEighth = function() {
            return ( (this.elementTop <= viewDimensions.scrollBottom - viewDimensions.windowHeight/8) );
        }

        // IS AT SIXTEENTH
        this.isAtSixteen = function() {
            return ( (this.elementTop <= viewDimensions.scrollBottom - viewDimensions.windowHeight/16) );
        }

        // ADD IN VIEW CLASS
        this.addInViewClass = function() {
            if( defaults.blocktype == 'page' ) {
                this.$element.removeClass('invisible');  
                this.$element.addClass('c3xgm-about-page-in-view'); 
            } else if( defaults.blocktype == 'block' ) {
                this.$element.removeClass('invisible');  
                this.$element.addClass('element-in-view');  
            }
        }  

    } 
    // END ANIMATED OBJECT


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

        // CREATE NEW ANIMATED ELEMENT FROM PAGE
        Pages[i] = new AmimatedElement(val, defaults);

        // HIDE PAGE IF NOT 'OUR COMPANY' (FIRST PAGE)
        if(i != 0) {
            Pages[i].$element.removeClass("c3xgm-about-page-in-view").addClass("invisible");    
        }
        // LOOP PAGE BLOCKS IF PAGE HAS THEM
        if(Pages[i].aboutBlocks.length > 0) {
            // HIDE PAGE BLOCKS
            $.each(Pages[i].aboutBlocks, function(i, pBlock) {
                $(pBlock).addClass('invisible');
            });
        }
    });


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


    // SCROLL HANDLER
    scrollHandler = function () {
        // UPDATE VIEW PORT
        updateviewDimensions();
        // CHECK PAGES
        checkPages();
        // CHECKBLOCKS FOR CURRENT PAGE
        checkBlocks(currentPage);
    }


    $(window).load(function() {
        // TRIGGER SCROLL HANDLER BY TRIGGERING SCROLL ON WINDOW
        $(window).trigger('scroll');
    });


    // SET INTERVAL TO SEE IF THERE ARE ANY INVISIBLE ELEMENTS ON THE PAGE
    // setInterval(function() {
    //     // CHECK IF THERE ARE BLOCKS ON CURRENT PAGE
    //     console.log('I am currentPage: ' + currentPage);
    //     console.log(Pages[currentPage].elementName);
        
    // }, 5000);

});
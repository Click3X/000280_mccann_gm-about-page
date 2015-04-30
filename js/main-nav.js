jQuery(document).ready(function($) { 
    // WINDOW VARS
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        scrollTop = $(window).scrollTop(),
        scrollBottom = scrollTop + windowHeight,
        docHeight = $(document).height(),
        halfWindowHeight = windowHeight/2,
        quarterWindowHeight = windowHeight/4,
        eighthWindowHeight = windowHeight/8,
        css3dtransforms = true,
        currentScroll,
        scrollTimeout,
        resizeTimeout,
        scrollHandler,
        resizeHandler,
        notViewed = $('.c3xgm-about-not-viewed');

    // GET WINDOW SPECS UTIL FUNCITON
    function updateWindowSpecs() {
            windowWidth = $(window).width();
            windowHeight = $(window).height();
            scrollTop = $(window).scrollTop();
            scrollBottom = scrollTop + windowHeight;
            docHeight = $(document).height();
            halfWindowHeight = windowHeight/2;
            quarterWindowHeight = windowHeight/4;
            eighthWindowHeight = windowHeight/8;
    }

    // TEST FOR 3D TRANSFORMS - for IE
    if( $('html').hasClass('no-csstransforms3d') ) {
        css3dtransforms = false;
    }

    // DISABLE HOVER ON SCROLL SCROLL
    var body = document.body,
    timer;

    window.addEventListener('scroll', function() {
        clearTimeout(timer);
        if(!body.classList.contains('disable-hover')) {
            body.classList.add('disable-hover')
        }

        timer = setTimeout(function(){
            body.classList.remove('disable-hover')
        }, 90);
    }, false);


    // NUMBER TICKER
    $.fn.jQuerySimpleCounter = function( options ) {
        var settings = $.extend({
            start:  200000,
            end:    216000,
            easing: 'swing',
            duration: 2500,
            complete: ''
        }, options );

        var thisElement = $(this);

        $({count: settings.start}).animate({count: settings.end}, {
            duration: settings.duration,
            easing: settings.easing,
            step: function() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(formatNumber(mathCount));
            },
            complete: settings.complete
        });
    };

    function addAnimation(index) {
        var item = $(this);
        setTimeout(function () {
          item.addClass('people-animate');
        }, index * 250);
    }

    function formatNumber (num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }


    // O B J E C T    A N I M A T E
    function AnimatedElement(elem, defaults) {
        var elem = elem,
            defaults = defaults || {},
            _t = this,
            offset = defaults.offset || 100,
            callbackFunction = defaults.callbackFunction || function(elem){},
            move,
            num,
            newNum;

        // P R O P E R T I E S
        // CHECK IF INSTANCE IS JQUERY OBJECT
        if(elem instanceof jQuery) { this.$element = elem; } 
            else { this.$element = $(elem); }

        this.name = this.$element.attr('id');
        
        this.elementWidth = Number( this.$element.css("width").replace('px', '') );
        this.elementHeight = Number( this.$element.css("height").replace('px', '') );
        this.elementPaddingBottom = Number( this.$element.css("paddingBottom").replace('px', '') );
        this.elementTop = this.$element.offset().top;
        this.elementBottom = this.elementHeight + this.elementTop;
        

        // M E T H O D S
        this.getScrollTop = function() {
            return scrollTop;
        }

        this.getWinWidth = function() {
            return windowWidth;
        }

        this.getWinHeight = function() {
            return windowHeight;
        }

        this.getScrollAmt = function() {
            return Math.round(scrollBottom - this.elementTop);
        }

        // IN VIEW
        this.isInView = function() {
            return ( (this.elementTop <= scrollBottom) && (this.elementBottom >= scrollTop) );
        }

        // IS AT HALF
        this.isAtHalf = function() {
            return ( (this.elementTop <= scrollBottom - halfWindowHeight) );
        }

        // IS AT QUARTER
        this.isAtQuarter = function() {
            return ( (this.elementTop <= scrollBottom - quarterWindowHeight) );
        }

        // IS AT EIGHTH
        this.isAtEighth = function() {
            return ( (this.elementTop <= scrollBottom - eighthWindowHeight) );
        }

        // AT TOP
        this.isAtTop = function() {
            return ( (this.elementTop <= scrollTop) );
        }

        this.addInViewClass = function() {
            this.$element.addClass('element-in-view');
        }

        // ANIMATE FUNCTION - TEST FOR CSS3 TRANSFORMS
        if(css3dtransforms) {
            this.moveRight = function() {
                move = this.getScrollAmt();
                // console.log('THSI IS MOVE: ' + move);
                // if( move > windowWidth ) {
                //     return false;
                // } else {
                    this.$element.css("transform", "translate3d("+ move +"px, 0, 10px)");
                // }
            }


            this.moveLeft = function() {
                move = this.getScrollAmt();
                // if( move > windowWidth ) {
                //     console.log('THSI IS MOVE: ' + move);
                //     return false;
                // } else {
                    // console.log('THSI IS MOVE: ' + move);
                    this.$element.css("transform", "translate3d(-"+ move +"px, 0, 10px)");
                // }
            }

        } else {
            this.elementPosition = this.$element.position();

            this.moveRight = function() {
                move = this.getScrollAmt();
                // if( move > windowWidth ) {
                //     return false;
                // } else {
                    this.$element.css("left", move + "px");
                // }
            }

            this.moveLeft = function() {
                move = this.getScrollAmt();
                // if( move > windowWidth ) {
                //     return false;
                // } else {
                    this.$element.css("transform", "translate3d(-"+ move +"px, 0, 10px)");
                // }
            }
        }   
    } // END OBJECT ANIMATE


    // LIST VARS
    var GreyVan,
        RedCar,
        GreySide = $('#c3xgm-about-solar-grey-car'),
        GreyCarFlags = $('#c3xgm-about-flag-line-grey-car'),
        $blocks = $('.c3xgm-about-block, .c3xgm-about-solar-panels'),
        animBlocks = [],
        Employees,
        Num6, Num23, Num70, Num63,
        EmpNum,
        CrashTestDummies;

    // ANIMATABLE OBJECTS
    GreyVan = new AnimatedElement('#c3xgm-about-grey-van');
    RedCar = new AnimatedElement('#c3xgm-about-red-car');
    Employees = new AnimatedElement('#c3xgm-about-employees');
    GreySide = new AnimatedElement(GreySide);
    GreyCarFlags = new AnimatedElement(GreyCarFlags);
    Num6 = new AnimatedElement('#c3xgm-about-number-6');
    Num23 = new AnimatedElement('#c3xgm-about-number-23');
    Num70 = new AnimatedElement('#c3xgm-about-number-70');
    Num63 = new AnimatedElement('#c3xgm-about-number-63');
    CrashTestDummies = new AnimatedElement('#c3xgm-about-crash-test-dummies');


    // MAKE ABOUT BLOCKS ANIMATED WHEN COME INTO VIEW
    $.each($blocks, function(i, val) {
        animBlocks[i] = new AnimatedElement(this);
    });

    console.dir(animBlocks);

    // MAIN NAV
    // SMOOTH SCROLL TO LINKS
    $('.c3xgm-about-main-nav a[href*=#]:not([href=#]), a.c3xgm-about-down-arrow-link').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    /** MAIN NAV JS --- HIGH LIGHT NAV, ATTACH CLASSES */
    var aChildren = $(".c3xgm-about-main-nav li a"),
        aArray = [];
    
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i],
            ahref = $(aChild).attr('href');
  
        aArray.push(ahref);
    } 

    // SAVE STATE OF PAGES IN VIEW
    var brandsInView = false,
        globalCommunityInView = false;

    function checkPageInView() {
        updateWindowSpecs();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i],
                divPos = $(theID).offset().top,
                divHeight = $(theID).height();

            // UPDATE NAV BASED ON WINDOW POSITION AND PAGE HEIGHT
            if (scrollTop >= (divPos - 10) && scrollTop < ((divPos - 10) + divHeight)) {
                $("a[href='" + theID + "']").addClass("c3xgm-about-nav-bullet-active");
            } else {
                $("a[href='" + theID + "']").removeClass("c3xgm-about-nav-bullet-active");
            }

            // IF BOTTOM OF DOC IS REACHED, HIGHLIGHT LAST BULLET
            if ( scrollTop + windowHeight == docHeight ) {
                var lastPage = aArray[aArray.length - 1];
                $("a[href='#c3xgm-about-environment']").removeClass("c3xgm-about-nav-bullet-active");
                $("a[href='" + lastPage + "']").addClass("c3xgm-about-nav-bullet-active");
            }

            // CHECK IF PAGE IS BREAKING VIEW
            if ( (divPos <= scrollBottom) && (divPos + divHeight > scrollTop) )  {
                $(theID).removeClass("invisible").addClass("c3xgm-about-page-in-view");
                
                // IF PAGE IS OUR BRANDS, OR GLOBAL THEN SHOW FIRST SLIDE
                if( (theID == "#c3xgm-about-our-brands") && (brandsInView == false) ) {
                    brandsInView = true;
                    // 3200 MS WAIT FOR LOGOS TO LOAD & LOAD CHEVY
                    setTimeout(function() {
                     // REMOVE CLASS ON CHEVY SLIDE
                        $('#c3xgm-about-car-chevrolet').removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
                    }, 3200);
                } else if( (theID == "#c3xgm-about-our-global-community") && (globalCommunityInView == false) ) {
                    globalCommunityInView = true;
                    setTimeout(function() {
                        $('#c3xgm-about-foundation-gm-foundation').removeClass('hide-module').removeClass('hide-module-slide-out').addClass('show-module-slide-in');
                    }, 2800);
                }
            } else {  
                // HERE YOU CAN REVERSE ELEMENT REVEAL EFFECTS WHEN SCROLLED UP
                // $(theID).removeClass("c3xgm-about-page-in-view").addClass("invisible");
            }
        }
    }


    // GET WIN VARS ON SCREEN RESIZE
    resizeHandler = function() {
        // UPDATE WINDOW ON RESIZE
        updateWindowSpecs();
    }
    // CALL FUNCTION ON PAGE LOAD
    resizeHandler();

    // R E S I Z E 
    $(window).resize(function() {
        if (resizeTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(resizeTimeout);
            resizeTimeout = null;
        }
        resizeTimeout = setTimeout(resizeHandler, 60/1000);
    });
    // E N D    R E S I Z E


    // S C R O L L 
    $(window).scroll(function () {
        if (scrollTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 60/1000);

    });


    // CHECK IF ANIMATED EMPLOYEES IN ON SCREEN
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


    function triggerGif(gif){
        return gif.src= gif.src.split('?')[0]+'?='+(+new Date());
    }

    // TRIGGER GIFS
    var animateCrashTestDummies = false;
    $('#c3xgm-about-crash-test-dummies').addClass('invisible');
    function fireAnimatedCrashTestDummies() {
         if(animateCrashTestDummies === false) {
            // TRIGGER ANIMATED GIF WHEN SCROLLED TO
            setTimeout(function() {
                $('#c3xgm-about-crash-test-dummies').removeClass('invisible');
                triggerGif(document.getElementById('c3xgm-about-crash-test-dummies'));
                animateCrashTestDummies = true;
            } , 600);
        }
    }

    // RUN CHECK PAGE VIEW
    scrollHandler = function () {
        // UPDATE WINDOW SCROLL VARIABLE
        checkPageInView();

        // SCROLL - TIED ANIMATIONS
        // GREY VAN
        if( GreyVan.isInView() ) {
            GreyVan.moveRight();
        }
        // RED CAR
        if( RedCar.isInView() ) {
            RedCar.moveLeft();
        }
        // GREY SIDE
        if(GreySide.isInView() ) {
            GreySide.moveRight();
        }
        // GREY CAR
        if(GreyCarFlags.isInView() ) {
            GreyCarFlags.moveRight();
        }

        // EMPLOYEES
        if(Employees.isAtEighth() ) {
             // TRIGGER NUMBER ANIMATION
            fireAnimatedEmployees();
        }

        // Num6
        if(Num6.isAtEighth() ) {
             // TRIGGER NUMBER ANIMATION
             fireAnimate6();
        }

        // Num23
        if(Num23.isAtEighth() ) {
             // TRIGGER NUMBER ANIMATION
             fireAnimate23();
        }

        // Num70
        if(Num70.isAtEighth() ) {
             // TRIGGER NUMBER ANIMATION
             fireAnimate70();
        }

        // Num63
        if(Num63.isAtEighth() ) {
             // TRIGGER NUMBER ANIMATION
             fireAnimate63();
        }

        // CrashTestDummies
        if(CrashTestDummies.isAtEighth() ) {
             // TRIGGER NUMBER ANIMATION
            fireAnimatedCrashTestDummies();
        }

        // SCROLL - CLASS ADDED ANIMATIONS
        $.each(animBlocks, function(i, val) {
            if( this.isAtEighth() ){
                this.$element.removeClass('invisible');
                this.addInViewClass();      
            }
        });

    }
    // E N D    S C R O L L

    // HIDE  ELEMENTS TO BE UNCOVERED ON SCROLL
    $.each(animBlocks, function(i, val) {
        this.$element.addClass('invisible');
    });

    // HIDE PAGES FOR ADDING 'IN-VIEW' CLASS
    for (var i=0; i < aArray.length; i++) {
        var theID = aArray[i];
        $(theID).removeClass("c3xgm-about-page-in-view").addClass("invisible");
    }

    // CHECK NAV ON PAGE LOAD
    checkPageInView();
});
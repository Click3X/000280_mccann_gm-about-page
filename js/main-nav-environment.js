jQuery(document).ready(function($) { 
    // WINDOW VARS
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        scrollTop = $(window).scrollTop(),
        scrollBottom = scrollTop + windowHeight,
        docHeight = $(document).height(),
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
    }

    // TEST FOR 3D TRANSFORMS - for IE
    if( $('html').hasClass('no-csstransforms3d') ) {
        css3dtransforms = false;
    }


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

        // AT TOP
        this.isAtTop = function() {
            return ( (this.elementTop <= scrollTop) );
        }

        this.addInViewClass = function() {
            this.$element.addClass('animate-me-now');
        }

        // ANIMATE FUNCTION - TEST FOR CSS3 TRANSFORMS
        if(css3dtransforms) {
            this.moveRight = function() {
                move = this.getScrollAmt();
                if( move > windowWidth ) {
                    return false;
                } else {
                    this.$element.css("transform", "translate3d("+ move +"px, 0, 10px)");
                }
            }


            this.moveLeft = function() {
                move = this.getScrollAmt();
                if( move > windowWidth ) {
                    return false;
                } else {
                    this.$element.css("transform", "translate3d(-"+ move +"px, 0, 10px)");
                }
            }

        } else {
            this.elementPosition = this.$element.position();

            this.moveRight = function() {
                move = this.getScrollAmt();
                if( move > windowWidth ) {
                    return false;
                } else {
                    this.$element.css("left", move + "px");
                }
            }

            this.moveLeft = function() {
                move = this.getScrollAmt();
                if( move > windowWidth ) {
                    return false;
                } else {
                    this.$element.css("transform", "translate3d(-"+ move +"px, 0, 10px)");
                }
            }
        }   

    } // END OBJECT ANIMATE


        // LIST VARS
    var GreyVan,
        RedCar,
        $blocks = $('.c3xgm-about-block'),
        Employees,
        EmpNum,
        animBlocks = [];

    // ANIMATABLE OBJECTS
    GreyVan = new AnimatedElement('#c3xgm-about-grey-van');
    RedCar = new AnimatedElement('#c3xgm-about-red-car');
    Employees = new AnimatedElement('#c3xgm-about-employees');


    $.each($blocks, function(i, val) {
        animBlocks[i] = new AnimatedElement(this);
    });


     /**
     * MAIN NAV JS
     */
    // SMOOTH SCROLL TO LINKS
        $('.c3xgm-about-main-nav a[href*=#]:not([href=#])').click(function() {
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
    
     /*
     * MAIN NAV JS
     HIGH LIGHT NAV, ATTACH CLASSES

     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $(".c3xgm-about-main-nav li").children('a'),
        aArray = []; // create the empty aArray
    
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i],
            ahref = $(aChild).attr('href');
        
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    function checkPageInView() {
        updateWindowSpecs();

        // console.dir(aArray);

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i],
                divPos = $(theID).offset().top,
                divHeight = $(theID).height(); // get the height of the div in question

            // UPDATE NAV BASED ON WINDOW POSITION AND PAGE HEIGHT
            if (scrollTop >= (divPos - 10) && scrollTop < ((divPos - 10) + divHeight)) {
                $("a[href='" + theID + "']").addClass("c3xgm-about-nav-bullet-active");
            } else {
                $("a[href='" + theID + "']").removeClass("c3xgm-about-nav-bullet-active");
            }

            // CHECK IF PAGE IS BREAKING VIEW
            if ( (divPos <= scrollBottom + 50) && (divPos + divHeight > scrollTop + 50) )  {
                $(theID).addClass("c3xgm-about-page-in-view");
            } else {
                $(theID).removeClass("c3xgm-about-page-in-view");
            }

        }
    }


    function isInView(elem) {
        var elTop = $(elem).offset().top,
            elHeight = $(elem).height(),
            elBottom = elHeight + elTop,
            elText = $(elem).text();

        return ( (elTop <= scrollBottom) && (elBottom >= scrollTop) );
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
          // // TRIGGER NUMBER ANIMATION
            console.log('Firing animated employeees!');
            $('#c3xgm-about-emp-num').jQuerySimpleCounter({end: 216000,duration: 2500});
            $('#number-6').jQuerySimpleCounter({start:0, end: 6,duration: 2000});
            $('#number-23').jQuerySimpleCounter({start:0, end: 23,duration: 2000});
            $('#number-70').jQuerySimpleCounter({start:0, end: 70,duration: 2000});

            // TRIGGER PEOPLE ANIMATION
            $('#c3xgm-about-employees-img div').each(addAnimation);
            animateEmployees = true;
        }
    }

    // CHECK IF EMPLOYEES IS IN VIEW
    // if(Employees.isInView) {
    //     fireAnimatedEmployees();
    // }


    // RUN CHECK PAGE VIEW
    scrollHandler = function () {
        // UPDATE WINDOW SCROLL VARIABLE
        checkPageInView();

        // SCROLL - TIED ANIMATIONS
        if( GreyVan.isInView() ) {
            // console.log('Gray Van in view!');
            GreyVan.moveRight();
        }

        if( RedCar.isInView() ) {
            RedCar.moveLeft();
        }

        // EMPLOYEES
        if(Employees.isInView) {
             // TRIGGER NUMBER ANIMATION
            fireAnimatedEmployees();
        }

    }
    // E N D    S C R O L L

    // CHECK NAV ON PAGE LOAD
    checkPageInView();
});
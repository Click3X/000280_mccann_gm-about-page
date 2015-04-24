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
    var $blocks = $('.c3xgm-about-block'),
        animBlocks = [];

    // ANIMATABLE OBJECT
    $.each($blocks, function(i, val) {
        animBlocks[i] = new AnimatedElement(this);
    });


    function isInView(elem) {
        var elTop = $(elem).offset().top,
            elHeight = $(elem).height(),
            elBottom = elHeight + elTop;

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



    // RUN CHECK PAGE VIEW
    scrollHandler = function () {
        $.each(animBlocks, function(i, val) {
            console.dir(this);
            if(this.isInView()) {
                console.log('I am in view!');
                this.addInViewClass();
            }
        });

    }
    // E N D    S C R O L L

});
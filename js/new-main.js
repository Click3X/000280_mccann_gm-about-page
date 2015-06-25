// PAGE JS FOR PAGES
jQuery(document).ready(function($) { 
    console.log('This is new main');

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
            if( _t.isInView() && ( $(this.$element).hasClass('invisible') ) ){
                // ADD IN VIEW CLASS
                _t.addInViewClass();
                console.log('ADDED PAGE IN VIEW CLASS: ' + _t.elementName);
            } 
        }); 
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
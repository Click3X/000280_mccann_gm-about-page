// PAGE JS FOR PAGES
jQuery(document).ready(function($) { 
	console.log('This is page js!');

	// DECLARE VARIABLES FOR LATER USE
	var css3dtransforms = true,
		currentScroll,
		scrollTimeout,
		resizeTimeout,
		scrollHandler,
		resizeHandler,
		viewDimensions,
		currentPage,
		newPage,
		recentPage = "";

	// TEST FOR 3D TRANSFORMS - for IE
	if( $('html').hasClass('no-csstransforms3d') ) {
	    css3dtransforms = false;
	}

	/** MAIN NAV JS --- HIGH LIGHT NAV, ATTACH CLASSES */
    var aChildren = $(".c3xgm-about-main-nav li a"),
        aArray = [];
    
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i],
            ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } 

    // NEED TO FINISH THIS

	// UPDATE VIEW PORT DIMENSIONS
	function updateviewDimensions() {
		viewDimensions = {
			windowHeight : jQuery(window).height(),
		    windowWidth : jQuery(window).width(),
		    scrollTop : jQuery(window).scrollTop(),
		    scrollBottom : jQuery(window).scrollTop() + jQuery(window).height(),
		    docHeight : jQuery(document).height(),
		}

		return viewDimensions;
	}

	// CHECK UPDATE - VIEWPORT ON RESIZE
	window.addEventListener('resize', function() {
		setTimeout(function() {
			updateviewDimensions();
		}, 200);
	} , false);


	// S C R O L L 
    $(window).scroll(function () {
        if (scrollTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 120/1000);
    });

    function checkPages() {
    	$.each(Pages, function(i, val) {
    		if( this.isInView() && (this.hasViewClass == false) ){
    			// ADD IN VIEW CLASS
    			this.addInViewClass();
    			console.log('PAGE: ' + this.elementName);
    			// SET CURRENT PAGE TO PAGE INDEX
    			currentPage = i;
    			console.log(currentPage);
    			// SET PAGE VIEW STATE
    			this.hasViewClass = true;
    		} 
    	}); 
    }

    function checkBlocks(currentPage) {
    	var blocks = Pages[currentPage].animBlocks;
    	$.each(blocks, function(i, val) {
    		if( this.isInView() && (this.hasViewClass == false) ){
    			// ADD IN VIEW CLASS
    			this.addInViewClass();
    			console.log('Im in view: ' + this.elementName);
    			// SET PAGE VIEW STATE
    			this.hasViewClass = true;
    		}
    	});
    }

    // SCROLL HANDLER
    scrollHandler = function () {
    	// UPDATE VIEW PORT
    	updateviewDimensions();
    	// CHECK PAGES
    	checkPages();
    	// CHECK BLOCKS FOR CURRENT PAGES
    	checkBlocks(currentPage);
    }

	// PAGE OBJECT
	function Page(elem, defaults) {
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
        	this.elementName = this.$element.get(0).classList[2];	
        }
        
        this.elementWidth = Number( this.$element.css("width").replace('px', '') );
        this.elementHeight = Number( this.$element.css("height").replace('px', '') );
        this.elementPaddingBottom = Number( this.$element.css("paddingBottom").replace('px', '') );
        this.elementTop = this.$element.offset().top;
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

    	        elem = new Page(val, defaults);
    	        _t.animBlocks.push(elem);
    	    });
        }

        // IN VIEW
        this.isInView = function() {
        	return ( (this.elementTop <= viewDimensions.scrollBottom) && (this.elementBottom >= viewDimensions.scrollTop) );
        }

        // OUT OF VIEW
        // this.outofView = function() {
        // 	return ( (this.elementTop <= viewDimensions.scrollBottom) && (this.elementBottom >= viewDimensions.scrollTop) );
        // }

        // TEST ISINVIEW AND SET INVIEW
        this.setInView = function() {
        	this.inView = this.isInView();
        }

        // // ADD IN VIEW CLASS
        this.addInViewClass = function() {
        	if( defaults.blocktype == 'page' ) {
        		this.$element.addClass('c3xgm-about-page-in-view');	
        	} else {
        		this.$element.addClass('element-in-view');	
        	}
        }

	}



	// NOW THAT WE HAVE PREPPED OUR ENVIRONMENT -------------------------------------------------------------------------------
	// GET ALL PAGES
    var pages = $('.c3xgm-about-page'),
        Pages = [];

    // UPDATE VIEWPORT DIMENSIONS
	updateviewDimensions();

    // INIT PAGES OBJECTS
    $.each(pages, function(i, val) {
        // BUILD EACH PAGE
        var defaults = {
        	'blocktype':'page'
        }
        Pages[i] = new Page(val, defaults);
        console.log(Pages[i]);
    });

    // NOW THAT WE HAVE OUR PAGE OBJECTS - SEE WHICH ONES ON SCREEN
    checkPages();
    // CHECK IF THERE ARE BLOCKS ON CURRENT PAGE
    checkBlocks(currentPage);

});
// DOCUMENT READY
jQuery(document).ready(function($) {

	// WINDOW VARS
	var windowHeight = $(window).height(),
	    windowWidth = $(window).width(),
	    scrollTop = $(window).scrollTop(),
	    scrollBottom = scrollTop + windowHeight,
	    halfWindowHeight = windowHeight/2,
	    css3dtransforms = true,
	    currentScroll,
	    scrollTimeout,
	    resizeTimeout,
	    scrollHandler,
	    resizeHandler,
	    pagesArray = ['#c3xgm-about-our-company, #c3xgm-about-our-people, #c3xgm-about-our-brands, #c3xgm-about-our-commitment'],
	    PageObjects = [];

	// GET WINDOW SPECS UTIL FUNCITON
	function updateWindowSpecs() {
			windowWidth = $(window).width();
			windowHeight = $(window).height();
			scrollTop = $(window).scrollTop();
			scrollBottom = scrollTop + windowHeight;
			halfWindowHeight = windowHeight/2;
	}

	// TEST FOR 3D TRANSFORMS
	if( $('html').hasClass('no-csstransforms3d') ) {
		css3dtransforms = false;
	}

	// O B J E C T    A N I M A T E
	function AnimatedElement(elem, defaults) {
		var elem = elem,
			defaults = defaults || {},
			_t = this,
			move,
			num,
			newNum;

		// P R O P E R T I E S
		this.$element = $(elem);
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
	} // END OBJECT ANIMATE


	// LIST VARS
	// $.each(pagesArray, function(i, elem) {
	// 	// PageObjects = AnimatedElement(this);
	// 	var p = new AnimatedElement(elem);
	// 	// console.dir(PageObjects[i]);
	// 	console.log(elem);
	// 	console.dir(p);
	// });

var p = new AnimatedElement('#c3xgm-about-our-company');
console.log('This is p');
console.dir(p);
	


	// W I N D O W    E V E N T S
		// R E S I Z E 
		$(window).resize(function() {
			if (resizeTimeout) {
				// clear the timeout, if one is pending
				clearTimeout(resizeTimeout);
				resizeTimeout = null;
			}
			resizeTimeout = setTimeout(resizeHandler, 60/1000);
		});

		resizeHandler = function(argument) {	
			updateWindowSpecs();
		}
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


		scrollHandler = function () {
			// UPDATE WINDOW SCROLL VARIABLE
			updateWindowSpecs();

		}
		// E N D    S C R O L L
		// E N D   W I N D O W   E V E N T S 
	
});
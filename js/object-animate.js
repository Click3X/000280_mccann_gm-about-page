// DOCUMENT READY
jQuery(document).ready(function($) {

	// WINDOW VARS
	var windowHeight = $(window).height(),
	    windowWidth = $(window).width(),
	    docViewTop = $(window).scrollTop(),
	    docViewBottom = docViewTop + windowHeight,
	    css3dtransforms = true,
	    currentScroll,
	    scrollTimeout,
	    resizeTimeout,
	    scrollHandler,
	    resizeHandler;

	// GET WINDOW SPECS UTIL FUNCITON
	function updateWindowSpecs() {
			windowWidth = $(window).width();
			windowHeight = $(window).height();
			docViewTop = $(window).scrollTop();
			docViewBottom = docViewTop + windowHeight;
	}

	// TEST FOR 3D TRANSFORMS
	if( $('html').hasClass('no-csstransforms3d') ) {
		css3dtransforms = false;
	}

	// O B J E C T    A N I M A T E
	function AnimatedElement(elem, defaults) {
		var elem = elem,
			defaults = defaults || {},
			_t = this;

		// P R O P E R T I E S
		this.$element = $(elem);
		this.name = this.$element.attr('id');
		
		this.elementWidth = Number( this.$element.css("width").replace('px', '') );
		this.elementHeight = Number( this.$element.css("paddingBottom").replace('px', '') );
		this.elementTop = this.$element.offset().top;
		this.elementBottom = this.elementHeight + this.elementTop;

		// DEFAULTS
		this.animStart = defaults.animStart || 0;
		this.animEnd = defaults.animEnd || windowWidth;

		// ANIMATE PROPERTIES
		this.animateProperty = this.$element.data("animate-prop") || "";
		this.animateHorizontal = this.$element.data("animate-horizontal") || "";
		this.animateVertical = this.$element.data("animate-vertical") || "";
		

		// M E T H O D S
		this.getScrollTop = function() {
			return docViewTop;
		}

		this.getWinWidth = function() {
			return windowWidth;
		}

		this.getWinHeight = function() {
			return windowHeight;
		}


		// IN VIEW FOR #GREY-CAR
		this.isInView = function() {
			return ( (this.elementTop <= docViewBottom) && (this.elementBottom >= docViewTop) );
		}

		// IN VIEW FOR #RED-CAR
		this.redCarInView = function() {
			// if(docViewTop-this.elementWidth-this.elementHeight > this.elementBottom) {
			if(docViewTop-this.elementHeight > this.elementBottom) {
				console.log('OUT OF View');
			 	return false;
			} else {
				console.log('In View');
				return true;
			}
		}

		// ANIMATE FUNCTION - TEST FOR CSS3 TRANSFORMS
		if(css3dtransforms) {
			this.animateGreyVan = function() {
				var right = Math.round(docViewBottom - this.elementTop);
				if( right > windowWidth ) {
					return false;
				} else {
					this.$element.css("transform", "translate3d("+ right +"px, 0, 10px)");
				}
			}


			this.animateCar = function() {
				var right = Math.round(docViewBottom - this.elementTop);
				if( right > windowWidth ) {
					return false;
				} else {
					this.$element.css("transform", "translate3d(-"+ right +"px, 0, 10px)");
				}
			}


			this.animateRedCar = function() {
				this.$element.css("transform", "translate3d(-"+ Math.round(docViewTop) +"px, 0, 10px)");
				// this.$element.css("transform", "translate3d(-"+ Math.round(docViewTop) +"px, "+ ( Math.cos(33.45) * (Math.round(docViewTop)) * -1 ) +"px, 0)");
			}
		} else {
			this.elementPosition = this.$element.position();

			this.animateGreyVan = function() {
				var right = Math.round(docViewBottom - this.elementTop);
				if( right > windowWidth ) {
					return false;
				} else {
					this.$element.css("left", right + "px");
				}
			}

			this.animateCar = function() {
				var right = Math.round(docViewBottom - this.elementTop);
				if( right > windowWidth ) {
					return false;
				} else {
					this.$element.css("transform", "translate3d(-"+ right +"px, 0, 10px)");
				}
			}


			this.animateRedCar = function() {
				this.$element.css({
		        	"right" : Math.round(docViewTop) +"px",
		        	// "top" :  this.elementPosition.top + ( Math.cos(33.45) * (Math.round(docViewTop)) * -1 ) +"px"
		        });
			}
		}		
	} // END OBJECT ANIMATE


	// LIST VARS
	var GreyVan,
		RedCar;

	// ANIMATABLE OBJECTS
	GreyVan = new AnimatedElement('#c3xgm-about-grey-van');
	RedCar = new AnimatedElement('#c3xgm-about-red-car');

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
			
			// CHECK FOR GREY VAN IN VIEW
			if(GreyVan.isInView() ) {
				GreyVan.animateGreyVan();
			}

			// CHECK FOR RED CAR IN VIEW
			if( RedCar.isInView() ) {
				RedCar.animateCar();
			}

		}
		// E N D    S C R O L L
	// E N D   W I N D O W   E V E N T S 
	
});
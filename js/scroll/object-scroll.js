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
	    resizeHandler;

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

		this.elementText = this.$element.text();


		// DEFAULTS
		this.animStart = defaults.animStart || 0;
		this.animEnd = defaults.animEnd || windowWidth;

		// STATE
		this.animated = false;
		

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

		this.setText = function(text) {
			this.$element.text(text);
		}

		// IN VIEW
		this.isInView = function() {
			return ( (this.elementTop <= scrollBottom) && (this.elementBottom >= scrollTop) );
		}

		// AT TOP
		this.atTop = function() {
			return ( (this.elementTop <= scrollTop) );
		}


		// ANIMATE NUMBER
		this.resetNumber = function(num) {
			num = Number(this.elementText);
			newNum = num - halfWindowHeight;
			this.setText(newNum);
		}

		this.animateNumber = function(num) {
			move = this.getScrollAmt();
			num = Number(this.elementText);
			move = move;
			if( ((move + 215500) <= 216000) && (this.animated == false) ){
				this.setText(move + 215500);
			} else {
				this.setText(216000);
				this.animated = true;
			}
		}

		this.pageIsTop = function() {
			if( (this.animated == false) && ( this.getScrollTop = scrollTop ) ) {
				this.animated =true;
				return true;
			} else {
				return false;
			}
			// return ( this.getScrollTop <= scrollTop );
		}


		// ANIMATE FUNCTION - TEST FOR CSS3 TRANSFORMS
		if(css3dtransforms) {
			this.animateGreyVan = function() {
				move = this.getScrollAmt();
				if( move > windowWidth ) {
					return false;
				} else {
					this.$element.css("transform", "translate3d("+ move +"px, 0, 10px)");
				}
			}


			this.animateCar = function() {
				move = this.getScrollAmt();
				if( move > windowWidth ) {
					return false;
				} else {
					this.$element.css("transform", "translate3d(-"+ move +"px, 0, 10px)");
				}
			}


			this.animateRedCar = function() {
				this.$element.css("transform", "translate3d(-"+ Math.round(scrollTop) +"px, 0, 10px)");
			}
		} else {
			this.elementPosition = this.$element.position();

			this.animateGreyVan = function() {
				move = this.getScrollAmt();
				if( move > windowWidth ) {
					return false;
				} else {
					this.$element.css("left", move + "px");
				}
			}

			this.animateCar = function() {
				move = this.getScrollAmt();
				if( move > windowWidth ) {
					return false;
				} else {
					this.$element.css("transform", "translate3d(-"+ move +"px, 0, 10px)");
				}
			}


			this.animateRedCar = function() {
				this.$element.css({
		        	"right" : Math.round(scrollTop) +"px",
		        });
			}
		}		
	} // END OBJECT ANIMATE


	// LIST VARS
	var GreyVan,
		RedCar,
		EmpNumber,
		Pages,
		PageArray = [];

	// ANIMATABLE OBJECTS
	GreyVan = new AnimatedElement('#c3xgm-about-grey-van');
	RedCar = new AnimatedElement('#c3xgm-about-red-car');
	EmpNumber = new AnimatedElement('#c3xgm-about-emp-num');
	Pages = $('#c3xgm-about-page-container > .c3xgm-about-page');

	$.each(Pages, function(i, val) {
		 PageArray[i] = new AnimatedElement(val);
	});

	console.dir(Pages);
	// console.dir(EmpNumber);
	// console.log(EmpNumber.elementText);
	// console.log('RedCar height: ' + RedCar.elementHeight);
	// console.log('GreyVan height: ' + GreyVan.elementHeight);

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


		// RESET EMPLOYEE NUMBER TEXT FOR ANIMIATION
		EmpNumber.resetNumber();

		// S C R O L L 
		$(window).scroll(function () {
			if (scrollTimeout) {
				// clear the timeout, if one is pending
				clearTimeout(scrollTimeout);
				scrollTimeout = null;
			}
			scrollTimeout = setTimeout(scrollHandler, 60/1000);
		});

		var scrollElems = [GreyVan, RedCar, EmpNumber];

		scrollHandler = function () {
			// UPDATE WINDOW SCROLL VARIABLE
			updateWindowSpecs();

			$.each(scrollElems, function(i, val) {
				if( this.isInView() ){
					// console.log('This is in view: ');
					// console.log(this.name);
					if(this.name == 'c3xgm-about-emp-num') {
						this.animateNumber();
					}

					if(this.name == 'c3xgm-about-red-car') {
						this.animateCar();
					}

					if(this.name == 'c3xgm-about-grey-van') {
						this.animateGreyVan();
					}
				}
			});

			$.each(PageArray, function(i, val) {
				if( this.atTop() ){
					console.log('This page is at the top! ' + this.name);
				}
			});

		}
		// E N D    S C R O L L
		// E N D   W I N D O W   E V E N T S 
	
});
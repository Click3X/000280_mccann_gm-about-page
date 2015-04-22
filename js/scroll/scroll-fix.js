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

		this.setText = function(text) {
			this.$element.text(text);
		}

		// NUMBER
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
	// EmpNum = new AnimatedElement('#c3xgm-about-emp-num');

	// console.log('THis is EmpNum: ' + EmpNum);
	// console.dir(EmpNum);

	$.each($blocks, function(i, val) {
		animBlocks[i] = new AnimatedElement(this);
	});

	// console.log('This is animBlocks: ' + animBlocks);
	// console.dir(animBlocks);

	// ONE TIME EMPLOYEES ANIMATION FUNCTION
	var animateEmp = false;

	$('#c3xgm-about-employees-img > div').addClass('invisible');

	function numberWithCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function setNumber(num) {
		num = numberWithCommas(parseInt(num + 6.4));
		return num 
	}

	function animateEmployees() {
		animateEmp = true;
		console.log('Employees Function!!');

		$('#c3xgm-about-employees').addClass('animate-me-now');

		var empNum = $('#c3xgm-about-emp-num');
		var num = empNum.text();


		// console.log('This is empNum: ' + empNum);
		// console.dir(empNum);
		



		var empImages = $('#c3xgm-about-employees-img');
		console.log('This is empImages: ' + empImages);
		console.dir(empImages);
		
		var children = empImages.children('.c3xgm-about-boy, .c3xgm-about-girl');
		children.removeClass('invisible');
		// $.each(children, function() {

		// });
		
	}

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


	var scrollElems = [GreyVan, RedCar];

	scrollHandler = function () {
		// UPDATE WINDOW SCROLL VARIABLE
		updateWindowSpecs();

		// SCROLL - TIED ANIMATIONS
		$.each(scrollElems, function(i, val) {
			if( this.isInView() ){

				if(this.name == 'c3xgm-about-red-car') {
					this.moveLeft();
				}

				if(this.name == 'c3xgm-about-grey-van') {
					this.moveRight();
				}
			}
		});

		// SCROLL - CLASS ADDED ANIMATIONS
		$.each(animBlocks, function(i, val) {
			if( this.isInView() ){
				this.$element.removeClass('invisible');
				this.addInViewClass();		
			}
		});

		// if(Employees.isInView) {
		// 	// Employees.animateNumber();
		// 	animateEmployees();
		// }

	}
	// E N D    S C R O L L
	// E N D   W I N D O W   E V E N T S 

	// HIDE  ELEMENTS TO BE UNCOVERED ON SCROLL
	$.each(animBlocks, function(i, val) {
		this.$element.addClass('invisible');
	});

});
// inspiration:  http://community.saucony.com/kinvara3/
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($) {
    $.fn.touchwipe = function(settings) {
        var config = {
            min_move_x: 20,
            min_move_y: 200,
            wipeLeft: function() {},
            wipeRight: function() {},
            wipeUp: function() {},
            wipeDown: function() {},
            preventDefaultEvents: true
        };
        if (settings) $.extend(config, settings);
        this.each(function() {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }

            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }

            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }
            if ('ontouchstart' in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);


function inViewport(el) {

    var r, html;
    if (!el || 1 !== el.nodeType) {
        return false;
    }
    html = document.documentElement;
    r = el.getBoundingClientRect();

    return (!!r && r.bottom >= 0

        && r.top <= html.clientHeight

    );

}


var distance = $('.wrapper').offset().top - 80,
    $window = $(window);


// quick bit of easing first
jQuery.extend(jQuery.easing, {
    easeInOutExpo: function(a, b, c, d, e) {
        if (b == 0) {
            return c
        }
        if (b == e) {
            return c + d
        }
        if ((b /= e / 2) < 1) {
            return d / 2 * Math.pow(2, 10 * (b - 1)) + c
        }
        return d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    }
});


var currentScreen = 1,
    scrollReady = true,
    panelAnimateTime = 500,
    screens = [1, 2, 3, 4];


function setupScrollHandler() {
  
    var options = {
      mousewheel: {
            debounce: true,
            throttle: true

        }
    }
    
    $(".wrapper").on("mousewheel", options, function(delta, aS, aQ, deltaY) {

        if (deltaY > 0) {
          	// going UP
            // if we're on the first one, lets scroll up naturally
            if (currentScreen <= 1 && scrollReady) {
                return true;
            } else {
                scrollPrev();
            }

        } else {
          // going DOWN

           
            // if the screen is not at the top, dont start the scroll jacking yet, just scroll naturally
            if ($window.scrollTop() <= distance) {
                //console.log('too early');
                return true;
            } else if (currentScreen >= screens.length && scrollReady) {
                // were' on the the last screen, let scroll naturally
                return true;
            } else {
              	scrollNext();
            }

            
        }
        return false;
    });
}

function scrollNext() {
  
    if (scrollReady) {
      currentScreen++;
      performScroll();
    }

}

function scrollPrev() {

    if (scrollReady) {
        currentScreen--;
        performScroll();
    }
}

function performScroll() {
  // first make sure the scroll screen is at the top of the page
  $("html, body").animate({
    	scrollTop: distance
    }, 
		panelAnimateTime, 
		'easeInOutExpo');
  
    scrollReady = false;
    var newYPos = $('#' + currentScreen)[0].offsetTop;
  
		// then scroll the panel
    $(".wrapper").animate({
            scrollTop: newYPos
        }, panelAnimateTime,
        'easeInOutExpo',
        function() {
            

            // handle active classes of nav items
            $('.fixed a').removeClass();
            $('.fixed a').eq(currentScreen - 1).addClass('active');

            $('.wrapper > div').removeClass('visible');
            $('#' + currentScreen).addClass('visible');
      
      			scrollReady = true;

        }
    );
}


// Binds Key Up / Key Down for Scrolling
function setupKeyScrollHandler() {
    $(document).on("keyup", function(event) {
        if (event.keyCode == 40 || event.keyCode == 38) {
            event.preventDefault();
            if (event.keyCode == 40) {
                if (scrollReady == true) {
                    scrollNext();
                }
            } else {
                if (event.keyCode == 38) {
                    if (scrollReady == true) {
                        scrollPrev();
                    }
                }
            }
        }
    });

    $(document).on("keydown", function(e) {
        if (e.keyCode == 40 || e.keyCode == 38) {
            e.preventDefault()
        }
    });

}

function setupSwipeHandler() {

    $('.wrapper').touchwipe({
        wipeUp: function() {
            scrollPrev();
        },
        wipeDown: function() {
            scrollNext();
        },
        min_move_x: 20,
        min_move_y: 200,
        preventDefaultEvents: true
    });

}

// Initiate

setupScrollHandler();
setupKeyScrollHandler();
setupSwipeHandler();



// anchor links
$('.fixed').find('a').on('click', function(e) {
    e.preventDefault();
  
  $("html, body").animate({
                scrollTop: distance
            }, panelAnimateTime,
            'easeInOutExpo');

    //console.log(this.hash.slice(1))

    // get hash number without the #
    currentScreen = this.hash.slice(1);
    performScroll();
});
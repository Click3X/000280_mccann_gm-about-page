// HELPERS JS
console.log('This is helpers js!');

// CONSOLE HELPER FUNCTION FOR QUICK DEBUGGING
function cd(myVar) {
    console.log('THis is ' + myVar + ': ');
    console.log('THis is ' + myVar + ': ' + typeof(myVar) );
    console.dir(myVar);
}

var mobile = false;
// CHECK FOR MOBILE DEVICE
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    mobile = true;

    jQuery('body').addClass('c3xgm-about-mobile-device');
}

console.log('This is mobile: ' + mobile);
// IF MOBILE - ADD MOBILE STYLESHEET
if(mobile) {

    // REPLACE GIFS WITH SVGS
    $('img[src$=".gif"]').each(function(index,element) {
        // NO CHINA FLAG GIF FOR MOBILE, BUT IF SCREEN IS IPAD OR LARGER, SHOW GIF
        if( (element.src != 'chinaflag.gif') && ( $(window).width < 768 )) {
            element.src = element.src.replace('.gif','.svg');
        }
    });

     // MAKE FLAGS ANIMATE
    $('#animate-flag-line').addClass('animate-flag-line');
}


// FORMAT NUMBER
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// TRIGGER GIF
function triggerGif(gif){
    return gif.src= gif.src.split('?')[0]+'?='+(+new Date());
}

// NUMBER TICKER
jQuery.fn.jQuerySimpleCounter = function( options ) {
    var settings = jQuery.extend({
        start:  200000,
        end:    216000,
        easing: 'swing',
        duration: 2500,
        complete: ''
    }, options );

    var thisElement = jQuery(this);

    jQuery({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(formatNumber(mathCount));
        },
        complete: settings.complete
    });
};

// PEOPLE ANIMATION - EMPLOYEES
function addAnimation(index) {
    var item = jQuery(this);
    setTimeout(function () {
      item.addClass('people-animate');
    }, index * 250);
}



// DISABLE HOVER ON SCROLL FOR SMOOTHER PERFORMANCE
var body = document.body,
timer;

window.addEventListener('scroll', function() {
    clearTimeout(timer);

    if(! $('body').hasClass('disable-hover')) {
        $('body').addClass('disable-hover');
    }

    timer = setTimeout(function(){
        $('body').removeClass('disable-hover');
    }, 90);
}, false);
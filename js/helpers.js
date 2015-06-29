// HELPERS JS
// console.log('This is helpers js!');

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
} else {
    jQuery('body').addClass('c3xgm-about-desktop-device');
}

console.log('This is mobile: ' + mobile);

var gifImgs = jQuery('img[src$=".gif"]').not(jQuery('img[src$="wheel.gif"]'));
    // console.dir(gifImgs);

// IF MOBILE - ADD MOBILE STYLESHEET
if(mobile) {

    // REPLACE GIFS WITH SVGS
    jQuery('img[src$=".gif"]').each(function(index,element) {
        // NO CHINA FLAG GIF FOR MOBILE, BUT IF SCREEN IS IPAD OR LARGER, SHOW GIF
        // console.log('This is element Src: ' + element.src);
        // console.log('This is window Width: ' + $(window).width() );

        if( (element.src != 'chinaflag.gif') && ($(window).width() < 768) ) {
            element.src = element.src.replace('.gif','.svg');
        } 

    });
}

// FORMAT NUMBER
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// TRIGGER GIF
function triggerGif(gif){
    if(!mobile) {
        return gif.src= gif.src.split('?')[0]+'?='+(+new Date());
    }
}

// UNLOADIMG
function unLoadImgSrc(img){
    return img.src = '';
}

// UNLOADIMG
function loadImgSrc(img, src){
    return img.src = src;
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

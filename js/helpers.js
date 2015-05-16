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
}

console.log('This is mobile: ' + mobile);
// IF MOBILE - ADD MOBILE STYLESHEET
if(mobile) {

    // REPLACE GIFS WITH SVGS
    $('img[src$=".gif"]').each(function(index,element) {
        var fname = element.src.substring(element.src.lastIndexOf('/')+1, element.src.lastIndexOf('.'));
        console.log(fname);
        // IF CHINA FLAG ON TABLET DEVICE, HIDE GIF AND GET APPORPRIATE SVG

        if(fname == "flag") {
            $('img[src$="pole.svg"]').each(function(index, element) {
                element.src = element.src.replace('pole.svg','flag.svg');
            });
            $('img[src$="flag.gif"]').hide();
        } else if(fname == "crash-test-dummies") {
            var elemSrc = element.src.replace('.gif','.svg');
            // GET PARENT TO ATTACH NEW ELEMENT
            var parent = $(element).parent();
            // DELETE HTML ELEMENT W/ JQUERY
            $(element).remove();
            // CREATE NEW HTML ELEMENT & ADD TO PARENT
            jQuery('<img/>', {
                src: elemSrc
            }).addClass('c3xgm-about-crash-svg').appendTo(parent);

        } else {
            // REPLACE ELEMENT SRC
            element.src = element.src.replace('.gif','.svg');
        }
    });

    // MAKE FLAGS ANIMATE
    $('#animate-flag-line').addClass('animate-flag-line');

    // ADD MOBILE CLASS
    jQuery('body').addClass('c3xgm-about-mobile-device');
} else {
    // ADD DESKTOP CLASS
    jQuery('body').addClass('c3xgm-about-desktop-device');
}


// FORMAT NUMBER
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// TRIGGER GIF
function triggerGif(gif){
    if(mobile) {
        // DONT TRIGGER GIF IF MOBILE
        return false;
    } else {
        return gif.src= gif.src.split('?')[0]+'?='+(+new Date());
    }
}

// NUMBER TICKER
jQuery.fn.jQuerySimpleCounter = function( options ) {
    var settings = jQuery.extend({
        start:  200000,
        end:    216000,
        easing: 'linear',
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
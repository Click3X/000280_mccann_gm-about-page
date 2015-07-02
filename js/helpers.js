// HELPERS JS
// console.log('This is helpers js!');

// CONSOLE HELPER FUNCTION FOR QUICK DEBUGGING
function cd(myVar) {
    console.log('THis is ' + myVar + ': ');
    console.log('THis is ' + myVar + ': ' + typeof(myVar) );
    console.dir(myVar);
}

var mobile = false, static_experience = false, browser = {};
var gifImgs = jQuery('img[src$=".gif"]').not(jQuery('img[src$="wheel.gif"]'));
var useragent = navigator.userAgent;

//GET IS MOBILE
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(useragent) ) 
    mobile = true;

//GET BROWSER NAME
if( /Mozilla/i.test(useragent) )        browser.name        = "Firefox";
if( /Safari/i.test(useragent) )         browser.name        = "Safari";
if( /Chrome/i.test(useragent) )         browser.name        = "Chrome";
if( /Android/i.test(useragent) )        browser.name        = "Android";
if( /MSIE|Trident/i.test(useragent) )   browser.name        = "IE";

//GET BROWSER VERSION
var start_i = 0, dot_i = 0, v_search_str = null;

switch( browser.name ){
    case "Firefox": v_search_str = "Firefox/";
    break;
    case "Safari":  v_search_str = "Version/";
    break;
    case "Android": v_search_str = "Android ";
    break;
    case "Chrome":  v_search_str = "Chrome/";
    break;
    case "IE": if( /MSIE/i.test(useragent) ) v_search_str = "MSIE "; else browser.version = "11.0";
    break;
}

// GET GIF IMAGES THAT AREN'T THE WHEEL
var gifImgs = jQuery('img[src$=".gif"]');///.not(jQuery('img[src$="wheel.gif"]'));

// IF MOBILE - ADD MOBILE STYLESHEET
if( v_search_str ){
    start_i             = useragent.indexOf(v_search_str);
    dot_i               = useragent.indexOf(".", start_i );
    browser.version     = useragent.substring( start_i+v_search_str.length, dot_i + 2 );
}

//STATIC EXPERIENCE DETECTION
if( mobile ){
    jQuery('body').addClass('c3xgm-about-mobile-device');

    jQuery('img[src$=".gif"]').each(function(index,element) {
        element.src = element.src.replace('.gif','.svg');
    });

    if( browser.name == "Android" ||
        ( browser.name == "Safari" && browser.version < 7 ) ){
            static_experience = true;
    }
} else {
    jQuery('body').addClass('c3xgm-about-desktop-device');

    if( ( browser.name == "Safari" && browser.version < 8 )     ||
        ( browser.name == "Firefox" && browser.version < 38 )   ||
        ( browser.name == "Chrome" && browser.version < 43 )    ||
        ( browser.name == "IE" && browser.version < 10 ) ){
            static_experience = true;
    }
}


if(static_experience){
    jQuery('body').addClass('c3xgm-about-static-experience');

    $('img[src$=".svg"]').each(function(index,element) {
        element.src = element.src.replace('.svg','.png');
    });
}

console.log(useragent);
console.log(browser);
console.log("Static experience: ", static_experience);
console.log('This is mobile: ' + mobile);

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

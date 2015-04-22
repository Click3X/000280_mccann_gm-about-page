$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  200000,
        end:    216000,
        easing: 'swing',
        duration: 2500,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
		duration: settings.duration,
		easing: settings.easing,
		step: function() {
			var mathCount = Math.ceil(this.count);
			thisElement.text(formatNumber(mathCount));
		},
		complete: settings.complete
	});
};


// TRIGGER NUMBER ANIMATION
$('#c3xgm-about-emp-num').jQuerySimpleCounter({end: 216000,duration: 2500});
$('#number-6').jQuerySimpleCounter({start:0, end: 6,duration: 2000});
$('#number-23').jQuerySimpleCounter({start:0, end: 23,duration: 2000});
$('#number-70').jQuerySimpleCounter({start:0, end: 70,duration: 2000});

// TRIGGER PEOPLE ANIMATION
$('#c3xgm-about-employees-img div').each(addAnimation);

function addAnimation(index) {
	var item = $(this);
	setTimeout(function () {
	  item.addClass('people-animate');
	}, index * 250);
}

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}




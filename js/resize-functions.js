jQuery(document).ready(function($) { 
	// RESIZE TECH MODULES
	// R E S I Z E 
	var resizeTimeout,
		resizeHandler,
		carMaxHeight,
		techMaxHeight,
		foundationMaxHeight,
		carContainers = $('.c3xgm-about-module-car .c3xgm-about-module'),
		carModContainer = $('div.c3xgm-about-clearfix.c3xgm-about-module-car > div.c3xgm-about-clearfix.c3xgm-about-module-65 > div').get(0),
		techContainers = $('.c3xgm-about-module-technology .c3xgm-about-module'),
		techModContainer = $('.c3xgm-about-module-technology .c3xgm-about-module-container').get(0),
		foundationContainers = $('.c3xgm-about-module-foundation .c3xgm-about-module'),
		foundationModContainer = $('.c3xgm-about-clearfix.c3xgm-about-module-foundation > div.c3xgm-about-clearfix.c3xgm-about-module-80 > div').get(0);

		// console.dir(techModContainer);

    $(window).resize(function() {
        if (resizeTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(resizeTimeout);
            resizeTimeout = null;
        }
        resizeTimeout = setTimeout(resizeHandler, 60/1000);
    });

    resizeHandler = function() {
    	// CAR HANDLER
        carMaxHeight = Math.max.apply(null, carContainers.map(function () {
            return $(this).height();
        }).get());
        $(carModContainer).height(carMaxHeight);

        // tech HANDLER
        techMaxHeight = Math.max.apply(null, techContainers.map(function () {
            return $(this).height();
        }).get());
        $(techModContainer).height(techMaxHeight + 25);

        // foundation HANDLER
        foundationMaxHeight = Math.max.apply(null, foundationContainers.map(function () {
            return $(this).height();
        }).get());
        $(foundationModContainer).height(foundationMaxHeight);
    }

    // CALL FUNCTION ON PAGE LOAD
   	resizeHandler();
    // E N D    R E S I Z E
});
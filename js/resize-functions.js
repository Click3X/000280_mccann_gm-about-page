jQuery(document).ready(function($) { 
    console.log('RESIZE FUNCTIONS HERE BABT!');
    // RESIZE TECH MODULES
    // R E S I Z E 
    var resizeTimeout,
        resizeHandler,

        carContainers = $('#c3xgm-about-module-car .c3xgm-about-slide'),
        carModContainer = $('div.c3xgm-about-clearfix.c3xgm-about-module-car > div.c3xgm-about-clearfix.c3xgm-about-module-65 > div').get(0),
        
        techQuotes = $('.c3xgm-about-module-technology .c3xgm-about-module .c3xgm-about-blockquote-container'),
        techPics = $('.c3xgm-about-module-technology .c3xgm-about-module .c3xgm-about-block-image'),
        
        foundationContainers = $('.c3xgm-about-module-foundation .c3xgm-about-module'),
        foundationModContainer = $('.c3xgm-about-clearfix.c3xgm-about-module-foundation > div.c3xgm-about-clearfix.c3xgm-about-module-80 > div').get(0);


    function resizeTechModules(techQuotes, techPics ) {
        $(techQuotes).height('auto');
        $(techPics).height('auto');
        $(this).parent().height('auto');
        
        var quotesMaxHeight = Math.max.apply(null, techQuotes.map(function () {
            return $(this).height();
        }).get());        
        $(techQuotes).height(quotesMaxHeight);

        var picsMaxHeight = Math.max.apply(null, techPics.map(function () {
            return $(this).height();
        }).get());        
        $(techPics).height(picsMaxHeight);

        var parentHeight = quotesMaxHeight + picsMaxHeight;

        $('#c3xgm-about-module-technology').height(parentHeight);
    }

    function equalizeSlides(container, slides) {
        $(container).height('auto');
        $(slides).height('auto');
        

        var maxSlideHeight = Math.max.apply(null, $(slides).map(function () {
            return $(this).height();
        }).get());

        console.log('This is var maxSlideHeight: ' + maxSlideHeight);
        $(container).height(maxSlideHeight);
        $(slides).height(maxSlideHeight);
    }


    resizeHandler = function() {
        // CAR HANDLER
        equalizeSlides(carModContainer, carContainers);

        // TECH HANDLER
        resizeTechModules(techQuotes, techPics);

        // FOUNDATION HANDLER
        equalizeSlides(foundationModContainer, foundationContainers);
    }


    // BIND FUNCTION TO RESIZE EVENT
    $(window).resize(function() {
        if (resizeTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(resizeTimeout);
            resizeTimeout = null;
        }
        resizeTimeout = setTimeout(resizeHandler, 60/1000);
    });


    // CALL FUNCTION ON PAGE LOAD
    resizeHandler();

    $(window).load(function() {
        // console.log('Resizing Tech Modules from Window Load');
        resizeHandler();
    });
    
});
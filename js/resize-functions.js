jQuery(document).ready(function($) { 
    // console.log('document is ready!');
    // RESIZE TECH MODULES
    // R E S I Z E 
    var resizeTimeout,
        resizeHandler,
        carMaxHeight,
        foundationMaxHeight,

        carContainers = $('#c3xgm-about-module-car .c3xgm-about-slide'),
        carModContainer = $('div.c3xgm-about-clearfix.c3xgm-about-module-car > div.c3xgm-about-clearfix.c3xgm-about-module-65 > div').get(0),
        
        techQuotes = $('.c3xgm-about-module-technology .c3xgm-about-module .c3xgm-about-blockquote-container'),
        techPics = $('.c3xgm-about-module-technology .c3xgm-about-module .c3xgm-about-block-image'),
        
        foundationContainers = $('.c3xgm-about-module-foundation .c3xgm-about-module'),
        foundationModContainer = $('.c3xgm-about-clearfix.c3xgm-about-module-foundation > div.c3xgm-about-clearfix.c3xgm-about-module-80 > div').get(0);


    $(window).resize(function() {
        if (resizeTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(resizeTimeout);
            resizeTimeout = null;
        }
        resizeTimeout = setTimeout(resizeHandler, 60/1000);
    });

    function resizeTechModules(techQuotes, techPics ) {
        $(techQuotes).height('auto');
        $(techPics).height('auto');
        $(this).parent().height('auto');
        
        var quotesMaxHeight = Math.max.apply(null, techQuotes.map(function () {
            // console.log('This is ID: ' + $(this).parent().attr('id'));
            // console.log('This is quotesMaxHeigh: ' + $(this).height());
            return $(this).height();
        }).get());        
        $(techQuotes).height(quotesMaxHeight);

        var picsMaxHeight = Math.max.apply(null, techPics.map(function () {
            // console.log('This is ID: ' + $(this).parent().attr('id'));
            // console.log('This is picMaxHeigh: ' + $(this).height());
            return $(this).height();
        }).get());        
        $(techPics).height(picsMaxHeight);

        var parentHeight = quotesMaxHeight + picsMaxHeight;
        // console.log('This is parentHeight: ' + parentHeight);

        // var parent = $(this).parent().attr('id');
        // console.log(parent);
        $('#c3xgm-about-module-technology').height(parentHeight);
        // parent.height( parentHeight );

    }

    resizeHandler = function() {
        // CAR HANDLER
        // DEFAULT HEIGHT TO ORIGINAL SIZE ON RESIZE 
        $(carContainers).height('auto');
        $(carModContainer).height('auto');
        // GET TALLEST DIV
        carMaxHeight = Math.max.apply(null, carContainers.map(function () {
            return $(this).height();
        }).get());

        // console.log('This is carMaxHeight: ' + carMaxHeight);
        $(carModContainer).height(carMaxHeight);
        $(carContainers).height(carMaxHeight);


        

        // TECH HANDLER
        resizeTechModules(techQuotes, techPics);

        // FOUNDATION HANDLER
        // DEFAULT HEIGHT TO ORIGINAL SIZE ON RESIZE 
        $(foundationContainers).height('auto');
        $(foundationModContainer).height('auto');
        // GET TALLEST DIV
        foundationMaxHeight = Math.max.apply(null, foundationContainers.map(function () {
            return $(this).height();
        }).get());
        $(foundationModContainer).height(foundationMaxHeight);
    }

    // CALL FUNCTION ON PAGE LOAD
    resizeHandler();

     $(carContainers).height('auto');
    $(carModContainer).height('auto');
    // GET TALLEST DIV
    carMaxHeight = Math.max.apply(null, carContainers.map(function () {
        return $(this).height();
    }).get());

    // console.log('This is carMaxHeight: ' + carMaxHeight);
    $(carModContainer).height(carMaxHeight);
    $(carContainers).height(carMaxHeight);


    // DEFAULT HEIGHT TO ORIGINAL SIZE ON RESIZE 
        $(foundationContainers).height('auto');
        $(foundationModContainer).height('auto');
        // GET TALLEST DIV
        foundationMaxHeight = Math.max.apply(null, foundationContainers.map(function () {
            return $(this).height();
        }).get());
        $(foundationModContainer).height(foundationMaxHeight);



    // setTimeout(function() {
        $(window).load(function() {
            console.log('Resizing Tech Modules from Window Load');
            resizeTechModules(techQuotes, techPics);
        });
        // console.log('Fron ST: resize!');
        // resizeTechModules(techQuotes, techPics);
    // }, 100);
    
    
});
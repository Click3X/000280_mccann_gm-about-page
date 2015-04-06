// RESIZE
    // ON WINDOW RESIZE ADJUST HEIGHTS
    var owlItems = $('.owl-item > .item-service-slide'),
        maxHeight,
        resizeTimeout,
        resizeHandler;

    maxHeight = Math.max.apply(null, owlItems.map(function () {
        return $(this).height();
    }).get());

    owlItems.each(function() {
        $(this).height(maxHeight);
    })

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
        owlItems.map(function () {
            $(this).height('auto');
        });
        maxHeight = Math.max.apply(null, owlItems.map(function () {
            return $(this).height();
        }).get());

        owlItems.each(function() {
            $(this).height(maxHeight);
        })
    }
    // E N D    R E S I Z E

    
jQuery(document).ready(function($) { 
	
});
jQuery(document).ready(function($) { 
    // WINDOW VARS
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        windowPos = $(window).scrollTop(),
        docViewBottom = windowPos + windowHeight,
        docHeight = $(document).height(),
        css3dtransforms = true,
        currentScroll,
        scrollTimeout,
        resizeTimeout,
        scrollHandler,
        resizeHandler,
        notViewed = $('.c3xgm-about-not-viewed');

    var headers = $('h1.c3xgm-about-h');

    // GET WINDOW SPECS UTIL FUNCITON
    function updateWindowSpecs() {
            windowWidth = $(window).width();
            windowHeight = $(window).height();
            windowPos = $(window).scrollTop();
            docViewBottom = windowPos + windowHeight;
            docHeight = $(document).height();
    }

    // TEST FOR 3D TRANSFORMS - for IE
    if( $('html').hasClass('no-csstransforms3d') ) {
        css3dtransforms = false;
    }

     /**
     * MAIN NAV JS
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $(".c3xgm-about-main-nav li").children('a'),
        aArray = []; // create the empty aArray
    
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i],
            ahref = $(aChild).attr('href');
        
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    function checkNav() {
        updateWindowSpecs();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i],
                divPos = $(theID).offset().top,
                divHeight = $(theID).height(); // get the height of the div in question

            var section = $(theID);
                // console.log('This is the div: ');
                // console.dir(section);

            if (windowPos >= (divPos - 10) && windowPos < ((divPos - 10) + divHeight)) {
                $("a[href='" + theID + "']").addClass("c3xgm-about-nav-bullet-active");
                $(section).addClass("c3xgm-about-page-in-view");
            } else {
                $("a[href='" + theID + "']").removeClass("c3xgm-about-nav-bullet-active");
                $(section).removeClass("c3xgm-about-page-in-view");
            }

        }
    }


    function isInView(elem) {
        var elTop = $(elem).offset().top,
            elHeight = $(elem).height(),
            elBottom = elHeight + elTop,
            elText = $(elem).text();

        return ( (elTop <= docViewBottom) && (elBottom >= windowPos) );
    }

    
    function checkElemeView(notViewed) {
        $.each(notViewed, function(i, elem) {
            var inView = isInView($(this));
            // console.log('InView: ' + inView);
            if(inView) {
                $(this).removeClass('c3xgm-about-not-viewed').addClass('c3xgm-about-viewed');
            } else {
                $(this).removeClass('c3xgm-about-viewed').addClass('c3xgm-about-not-viewed');
            }
        });
    }


    // GET WIN VARS ON SCREEN RESIZE
    resizeHandler = function() {
        // UPDATE WINDOW ON RESIZE
        updateWindowSpecs();
    }
    // CALL FUNCTION ON PAGE LOAD
    resizeHandler();


    // R E S I Z E 
    $(window).resize(function() {
        if (resizeTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(resizeTimeout);
            resizeTimeout = null;
        }
        resizeTimeout = setTimeout(resizeHandler, 60/1000);
    });
    // E N D    R E S I Z E


    // S C R O L L 
    $(window).scroll(function () {
        if (scrollTimeout) {
            // clear the timeout, if one is pending
            clearTimeout(scrollTimeout);
            scrollTimeout = null;
        }
        scrollTimeout = setTimeout(scrollHandler, 60/1000);

    });

    // CALL ON PAGE LOAD
    checkElemeView(notViewed);

    // RUN CHECK NAV
    scrollHandler = function () {
        // UPDATE WINDOW SCROLL VARIABLE
        checkNav();
        checkElemeView(notViewed);
    }
    // E N D    S C R O L L

});
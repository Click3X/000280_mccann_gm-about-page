jQuery(document).ready(function($) {
	var $blocks = $('.c3xgm-about-block');
    
    // $blocks.addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
    //     offset: 100    
    // }); 

    var $pages = $('#c3xgm-about-page-container > .c3xgm-about-page');
    console.dir($pages);

    $pages.addClass("hidden").viewportChecker({
        // classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        offset: 100    
    }); 

});     

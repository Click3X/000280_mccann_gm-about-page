jQuery(document).ready(function($) {
	var $blocks = $('.c3xgm-about-block'),
		$headers = $('c3xgm-about-h');
    
    $blocks.addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        offset: 100    
    }); 

    // $headers.addClass("hidden").viewportChecker({
    //     classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
    //     offset: 100    
    // }); 

});     

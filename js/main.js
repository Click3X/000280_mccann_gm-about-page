jQuery(document).ready(function($) { 
    // console.log('This is main js!');

    // GET ALL PAGES
    var pages = [
            '#c3xgm-about-page-our-company',
            '#c3xgm-about-page-our-people',
            '#c3xgm-about-page-our-brands',
            '#c3xgm-about-page-our-commitment'
        ],
        Pages = []  

    // TURN pages into PAGE OBJECTS
    $.each(pages, function(i, val) {
        // BUILD EACH PAGE
        Pages[i] = new Page.Build(this);
        console.log(Pages[i]);
    });



});
jQuery(document).ready(function($) {
    
    var $secNav = $('.c3xgm-about-main-nav-sub'),
        // $navBullets = $('.nav-bullet'),
        $navHoverTitle = $('.c3xgm-about-nav-hover-title');


    // $('#page-nav a[href*=#]:not([href=#])').on('click touchstart', function() {
    $('.c3xgm-about-main-nav a[href*=#]:not([href=#]), a.c3xgm-about-down-arrow-link, .c3xgm-about-end-nav a[href*=#]:not([href=#])').on('click touchstart', function() {
        

        // ADD ACTIVE CLASS
        // $navBullets.removeClass('active');
        // $(this).addClass('active');
        // IF SUB NAV IS CLICKED - SHOW IT
        if($(this).parent().parent().hasClass('section-nav') ) {
            if( !$secNav.hasClass('show-nav') ) {
                $secNav.addClass('show-nav');   
            }
        } else {
            if( $secNav.hasClass('show-nav') ) {
                $secNav.removeClass('show-nav');    
            }
        }

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 1000, (function() {
                    $navHoverTitle.fadeOut();
                }));
                return false;
            }
        }
    });

});
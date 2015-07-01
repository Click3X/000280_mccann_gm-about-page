// SMOOTH SCROLL
jQuery(document).ready(function($) {
    
    $('.c3xgm-about-main-nav a[href*=#]:not([href=#]), a.c3xgm-about-down-arrow-link, .c3xgm-about-end-nav a[href*=#]:not([href=#])').on('click touchstart', function() {
        var _t = this;

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 1000, (function() {

                }));
                return false;
            }

        }
    });

});
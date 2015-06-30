jQuery(document).ready(function($) {
    
    var $secNav = $('.c3xgm-about-main-nav-sub'),
        $navBullets = $('.c3xgm-about-nav-bullet'),
        $navHoverTitle = $('.c3xgm-about-nav-hover-title');


    $('.c3xgm-about-main-nav a[href*=#]:not([href=#]), a.c3xgm-about-down-arrow-link, .c3xgm-about-end-nav a[href*=#]:not([href=#])').on('click touchstart', function() {
        var _t = this;

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            console.log('THis is target: ' + target);
            console.dir(target);

            var tId = '#' + target.get(0).id;

            console.log('THis is tId: ' + tId);
            console.dir(tId);

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
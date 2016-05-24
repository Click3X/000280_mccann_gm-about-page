jQuery(document).ready(function($) {
    jQuery('head').append('<style>#outline {position:fixed;z-index:1000;bottom:50px;right:50px;width:30px;} .outlines {outline:1px solid rgba(255, 0, 0, 0.3);}</style>');
    jQuery('body').append('<input id=\"outline\" type=\"button\">');

    jQuery('#outline').click(function() {
        jQuery('*').toggleClass('outlines');
    });
});
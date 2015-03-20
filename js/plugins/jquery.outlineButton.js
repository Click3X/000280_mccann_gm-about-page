/*

jQuery Plugin: Outline Button
author: Charles Davis
purpose: To provide a debugger button that when clicked will toggle a red outline of all html elements

*/

(function($) {
    // APPEND STYLES TO HEAD
    $('head').append('<style>#outline {position:fixed;z-index:1000;bottom:50px;right:50px; width:20px; height:20px; } .outlines {outline:1px solid rgba(255, 0, 0, 0.3); }</style>');
    // APPEND DEBUGGER BUTTON TO BODY
    $('body').append('<input id=\"outline\" type=\"button\">');
    // CLICK EVENT HANDLER
    $('#outline').click(function() {
        $('*').toggleClass('outlines');
    });
    
})(jQuery);
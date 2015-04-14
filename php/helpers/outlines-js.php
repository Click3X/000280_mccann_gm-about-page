<?php
    // CONDITIONALLY LOAD OUTLINE SCRIPT
    $server = $_SERVER['REMOTE_ADDR'];
    // IF SERVER IS LOCAL, ADD OUTLINE BUTTON
    if($server == '127.0.0.1') {
        echo "<script>
            jQuery('head').append('<style>#outline {position:fixed;z-index:1000;bottom:50px;right:50px;} .outlines {outline:1px solid rgba(255, 0, 0, 0.3);}</style>');
            jQuery('body').append('<input id=\"outline\" type=\"button\">');

            jQuery('#outline').click(function() {
                jQuery('*').toggleClass('outlines');
           });
        </script>";
    }
?>
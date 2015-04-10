<?php include('php/helpers/functions.php'); ?>
<?php include('php/helpers/functions-layout.php'); ?>
<?php include('php/helpers/data.php'); ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        
        <title>General Motors | About</title>
        <script src="//use.typekit.net/aod8wgv.js"></script>
        <script>try{Typekit.load();}catch(e){}</script>

        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
        <!--[if IE]>
          <link href="stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

    </head>
    <body>
        <!-- TEMP MENU FOR DISPLAY PUPOSES
        DELETE AFTER PRODUCTION -->
        <div class="c3xgm-about-temp-menu"></div>

        <div id="temp-foundation" class="temp temp-foundation hidden"></div>
        <!-- <embed id="gm-pdf" width="100%" height="15000px" style="opacity: 0.5; position: absolute; top: -58px;" name="plugin" src="templates/gm-mobile.pdf" type="application/pdf"> -->
        <!-- MAIN PAGE CONTAINER -->
        <div id="c3xgm-about-page-container" class="c3xgm-about-page-container c3xgm-about-clearfix">

            <?php 
                // TECH MODULE
                include('php/modules/foundation.php');
            ?>

        </div>
        <button id="bg-change" class="bg-change">Bg Change</button>
        
        
        <script src="js/vendor/jquery-1.11.1.min.js"></script>
        
        <!--[if lt IE 9 ]>
        <script>
        var is_ie_lt9 = true;
        console.log('THis is IE 8');
        $('img[src$=".svg"]').each(function(index,element) {
            element.src = element.src.replace('.svg','.png');
        });
        </script>
        <![endif]--> 




        <!--
        <script src="js/ios-orient-fix.js"></script>
        <script src="js/font-changer.js"></script>
        -->


        <script src="js/plugins/jquery.outlineButton.js"></script>
        
        
        <script src="js/modules/all-modules.js"></script>

        <script>
            jQuery(document).ready(function($) {
                // CHECK FOR SVG SUPPORT
                if(!$('html').hasClass('svg')) {
                    console.log('No svg support');
                    $('img[src$=".svg"]').each(function(index,element) {
                        element.src = element.src.replace('.svg','.png');
                    });
                } else {
                    console.log('svg BABY!');
                }

                // CHECK FOR RETINA 
                if (window.devicePixelRatio >= 2) {
                    // retina display
                    console.log('We have Retina!');
                    $('img[rel]').each(function(index,element) {
                        element.src = $(this).attr('rel');
                    });
                } else {
                    // standard display
                    console.log('Standard Display');
                }

            });
        </script>

        <script>
        jQuery(document).ready(function($) {
            // TEMPORARY BG-IMG TOGGLE HIDE
            // DELETE BEFORE PRODUCTION
            $('#bg-change').click(function(){
                $(".temp").toggleClass('hidden');
                // $("#gm-pdf").toggleClass('hidden');
            });
        });
        </script>

        <!--
        <script src="js/resize-functions.js"></script>
        -->
    </body>
</html>

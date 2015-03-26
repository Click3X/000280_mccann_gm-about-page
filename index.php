<?php include('php/functions.php'); ?>
<?php include('php/functions-layout.php'); ?>
<?php include('php/data.php'); ?>
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
        <style>
            .bg-change {
                position: fixed; bottom: 80px; right:80px;
                z-index: 100;
                width: 80px; height: 20px;
            }
            .hide-bg {
                display: none;
            }
        </style>
    </head>
    <body>
        <div id="c3xgm-about-page-container" class="c3xgm-about-page-container c3xgm-about-clearfix">

            <!-- TEMPLATE FOR CODING -->
            <!-- <div id="our-comp-temp" class="temp our-comp-temp hide-bg"></div> -->
            <div id="our-peop-temp" class="temp our-peop-temp hide-bg"></div>

            <?php 
                // ITERATE THROUGH PAGEES ARRAY
                foreach ($pages as $key => $page) {
                    echo '<div class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
                        // helper($page);
                        
                        // PAGE HEADER
                        pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

                        // BLOCKS
                        if($page['blocks']) {
                            foreach ($page['blocks'] as $key => $block) {
                                // helper($block);
                                printBlock($block);
                            }
                        }


                        // SECTIONS
                        if($page['sections']) {
                            foreach ($page['sections'] as $key => $section) {
                                
                                // SECTION HEADER
                                subSectionHeader($section['title'], $section['tagline']);

                                // SECTION BLOCKS
                                if($section['blocks']) {
                                    foreach ($section['blocks'] as $key => $block) {
                                        // helper($block);
                                        printBlock($block);
                                    }
                                }
                            }
                        }
                        // END SECTION CONTAINER

                    echo '</div>'; 
                    // END PAGE CONTAINER
                }
            ?>


        </div>
        <button id="bg-change" class="bg-change">Bg Change</button>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>
        <script src="js/plugins/jquery.outlineButton.js"></script>

        <script>
            jQuery(document).ready(function($) {
                $('#bg-change').click(function(){
                    $(".temp").toggleClass('hide-bg');
                });
            });
        </script>
    </body>
</html>

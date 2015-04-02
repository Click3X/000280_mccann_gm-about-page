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

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

    </head>
    <body>
        <!-- TEMP MENU FOR DISPLAY PUPOSES
        DELETE AFTER PRODUCTION -->
        <div class="c3xgm-about-temp-menu"></div>

        <!-- MAIN PAGE CONTAINER -->
        <div id="c3xgm-about-page-container" class="c3xgm-about-page-container c3xgm-about-clearfix">

            <!-- TEMPLATE FOR CODING -->
            <!-- <div id="our-comp-temp" class="temp our-comp-temp hidden"></div> -->
            <!-- <div id="our-peop-temp" class="temp our-peop-temp hidden"></div>
            <div id="our-brands-temp" class="temp our-brands-temp hidden"></div>
            <div id="our-commitment-temp" class="temp our-commitment-temp hidden"></div> -->

            <?php 
                // ITERATE THROUGH PAGEES ARRAY
                foreach ($pages as $key => $page) {
                    echo '<div class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
                        // helper($page);
                        
                        // PAGE HEADER
                        if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
                        if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
                        if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

                        pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

                        // MODULES
                        if( isset($page['module']) ) {
                            printModule($page['module']);
                        }

                        // BLOCKS
                        if( isset($page['blocks']) ) {
                            foreach ($page['blocks'] as $key => $block) {
                                if( isset($block['type']) && ($block['type'] == "decorative") ) {
                                    // DECORATIVE
                                    printDecorative($block);

                                } else {
                                    printBlock($block);
                                }
                            }
                        }

                        // SECTIONS
                        if( isset($page['sections']) ) {
                            foreach ($page['sections'] as $key => $section) {
                                
                                // SECTION HEADER
                                subSectionHeader($section['title'], $section['tagline']);

                                 // MODULES
                                if( isset($section['module']) ) {
                                    printModule($section['module']);
                                }

                                // SECTION BLOCKS
                                if( isset($section['blocks']) ) {
                                    foreach ($section['blocks'] as $key => $block) {
                                        
                                        if( isset($block['type']) && ($block['type'] == "decorative") ) {
                                        
                                            // DECORATIVE
                                            printDecorative($block);

                                        } else {
                                            printBlock($block);
                                        }
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
        <!-- <button id="bg-change" class="bg-change">Bg Change</button> -->
        
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>
        
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
                        var file_name_array = element.src.split("."),
                            file_extension = file_name_array[file_name_array.length - 1],
                            file_name = element.src.substr(0, element.src.lastIndexOf('.'));

                        file_name = file_name + '@2x.' + file_extension;
                        element.src = file_name;
                    });
                } else {
                    // standard display
                    console.log('Standard Display');
                }


                // TEMPORARY BG-IMG TOGGLE HIDE
                // DELETE BEFORE PRODUCTION
                $('#bg-change').click(function(){
                    $(".temp").toggleClass('hidden');
                });

            });
        </script>
    </body>
</html>

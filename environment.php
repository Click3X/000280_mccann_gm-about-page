<?php include('php/header.php'); ?>
        <!-- MAIN NAVIGATION -->
        <?php  include('php/main-navigation.php'); ?>

        <!-- MAIN PAGE CONTAINER -->
        <div id="c3xgm-about-page-container" class="c3xgm-about-page-container c3xgm-about-clearfix">
            <?php 
                //  our environment
                include('php/sections/environment.php');
            ?>
        </div>

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
    
        <script src="js/about-block-in-view.js"></script>

        <?php include('php/helpers/outlines-js.php'); ?>

    </body>
</html>
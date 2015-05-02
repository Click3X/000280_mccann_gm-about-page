<?php include('php/header.php'); ?>
        <!-- MAIN NAVIGATION -->
        <?php include('php/main-navigation.php'); ?>

        <!-- MAIN PAGE CONTAINER -->
        <div id="c3xgm-about-page-container" class="c3xgm-about-page-container c3xgm-about-clearfix">
             <?php 
                // OUR COMPANY
                include('php/our-company.php');
                // OUR PEOPLE
                include('php/our-people.php');
                // OUR BRANDS
                include('php/our-brands.php');
                // OUR COMMITMENT
                include('php/our-commitment.php');
            ?>
        </div>

        <!-- JQUERY OF COURSE -->
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

        <!-- RESIZE FUNCTIONS FOR SLIDERS WITH VARIABLE HEIGHT
        <script src="js/resize-functions.js"></script>
         -->    
            
        <!-- // SLIDER FILES FOR ALL SLIDERS, NOT JUST CAR 
        <script src="js/modules/car-slider.js"></script>
        -->

        <!-- MAIN JS -->
        <script src="js/helpers.js"></script>
        <script src="js/page.js"></script>
        
        <!--
        <script src="js/main.js"></script>
        -->

        <!-- OUTLINE HELPER W/ LOCAL SERVER CONDITIONAL -->
        <?php include('php/helpers/outlines-js.php'); ?>

    </body>
</html>
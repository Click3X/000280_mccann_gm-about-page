<?php include('php/header.php'); ?>

        <!-- MAIN PAGE CONTAINER -->
        <div id="c3xgm-about-page-container" class="c3xgm-about-page-container c3xgm-about-clearfix">
            
            <h1>Sandbox</h1>
            <?php 
                foreach ($pages as $key => $page) {

                    pageHeader($page['title'], $page['icon@2x'], $page['tagline']);

                }
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

        <!-- OUTLINE HELPER W/ LOCAL SERVER CONDITIONAL -->
        <?php include('php/helpers/outlines-js.php'); ?>

    </body>
</html>
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
    
        <script src="js/resize-functions.js"></script>
            
        <!-- // SLIDER FILES FOR ALL SLIDERS, NOT JUST CAR -->
        <script src="js/modules/car-slider.js"></script>

        <!--
            NAVIGATION HIGHLIGHTING & PAGE-CLASS IS ADDED WHEN IN VIEW TO TRIGGER ANIMATIONS
            WHEN PAGES ARE IN VIEW
        -->
        <script src="js/main-nav.js"></script>

        <!-- NEW ANIMATIONS -->
        <script src="js/scroll/animate-me.js"></script>
        
        <!--
        SCROLL FIX HAS CAR ANIMATIONS ON SCROLL
        <script src="js/scroll/scroll-fix.js"></script>
        -->
        
        <?php include('php/helpers/outlines-js.php'); ?>

    </body>
</html>
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
        <script src="js/modules/car-slider.js"></script>
        <!--
        <script src="js/modules/all-modules.js"></script>
        <script src="js/main-nav.js"></script>
        -->
        <?php include('php/helpers/outlines-js.php'); ?>

    </body>
</html>
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
        <script src="js/main-nav.js"></script>
        <script src="js/modules/car-slider.js"></script>
        <script src="js/scroll/scroll-fix.js"></script>

        <script src="js/count-num.js"></script>

        <script>
            // jQuery(function ($) {
            // // custom formatting example
            // $('#c3xgm-about-emp-num').data('countToOptions', {
            //     formatter: function (value, options) {
            //         return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            //     }
            // });

            // // start all the timers
            // $('.timer').each(count);  

            // function count(options) {
            //     var $this = $(this);
            //     options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            //     $this.countTo(options);
            //     }
            // });
        </script>
        
        <!--
        <script src="js/modules/all-modules.js"></script>
        -->
        <?php include('php/helpers/outlines-js.php'); ?>

    </body>
</html>
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
        <title>Demo - One Page Scroll with Animations</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <!-- <link rel="stylesheet" href="demos/one-page/css/normalize.css">
        <link rel="stylesheet" href="demos/one-page/css/main.css"> -->

        <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <link href="stylesheets/print.css" media="print" rel="stylesheet" type="text/css" />
        <!--[if IE]>
          <link href="stylesheets/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
        <![endif]-->

        <script src="demos/one-page/js/vendor/modernizr-2.6.2.min.js"></script>
    
    </head>
    <body class="loading">
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->
        
        <div class="main">
         
            <section id="c3xgm-about-our-company">
                <div class="section-content">
                    <?php include('php/our-company.php'); ?>
                </div>
            </section>

            <section id="c3xgm-about-our-people">
                <div class="section-content">
                    <?php include('php/our-people.php'); ?>
                </div>
            </section>

            <section id="c3xgm-about-our-brands">
                <div class="section-content">
                    <?php include('php/our-brands.php'); ?>
                </div>
            </section>

            <section id="c3xgm-about-our-commitment">
                <div class="section-content">
                    <?php include('php/our-commitment.php'); ?>
                </div>
            </section>
            
        </div>

        <script src="demos/one-page/js/vendor/jquery-1.9.1.min.js"></script>
        <script type="text/javascript" src="demos/one-page/js/onepagescroll/jquery.onepage-scroll.js"></script>
        <link href='demos/one-page/js/onepagescroll/onepage-scroll.css' rel='stylesheet' type='text/css'>
        <script src="demos/one-page/js/main.js"></script>
        <?php include('php/helpers/outlines-js.php'); ?>
     
    </body>
</html>

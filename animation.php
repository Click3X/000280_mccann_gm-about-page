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
        
<link href="demos/scroll-effects/assets/demo.css" media="screen, projection" rel="stylesheet" type="text/css" />
<link href="demos/scroll-effects/assets/animate.css" media="screen, projection" rel="stylesheet" type="text/css" />

<script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>

<body>

<div id="c3xgm-about-page-container" class="c3xgm-about-page-container c3xgm-about-clearfix c3xgm-about-animate-css">
    
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

<script src="js/vendor/jquery-1.11.1.min.js"></script>
<script src="js/vendor/viewportchecker.js"></script>
<script src="js/add-animation-class.js"></script>
<script src="js/resize-functions.js"></script>

<script src="js/object-animate.js"></script>

<?php include('php/helpers/outlines-js.php'); ?>

</body>
</html>
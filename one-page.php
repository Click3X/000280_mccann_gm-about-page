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

        <link href='js/onepagescroll/onepage-scroll.css' rel='stylesheet' type='text/css'>

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

    </head>

    <body class="loading">
<header class="entry-header">
            <div class="inner">
                <nav class="back-link">
                    <span class="nav-previous"><a href="http://ihatetomatoes.net/squarespace-com-website-deconstructed/" rel="prev"><span class="meta-nav">&larr;</span> Back to article</a></span>
                </nav><!-- .nav-single -->
        
                <h1 class="entry-title">Demo - One Page Scroll with Animations</h1>
            </div>
        </header>
        
        <div class="main">
         
            <section id="fadeInAnim">
                <div class="section-content">
                    <div class="copy-container">
                        <h2>Fade in animation</h2>
<pre><code>section {
  transition: opacity .6s;
  transition-delay:.2s;
}
.loaded section {
  opacity: 1;
}   
</code></pre>
                    </div>
                    <img src="img/img_hero-iphone.jpg" alt="iPhone" />
                </div>
            </section>
            <section id="revealAnim">
                <div class="section-content">
                    <div class="copy-container">
                        <h2>Reveal animation</h2>
<pre><code>#revealAnim img {
  transition: transform .6s .9s;
}
.back {
  transform:translate3d(-40%, 0, 0);
}
.front {
  transform:translate3d(61.6%, 0, 0);
}
.side {
  transform:translate3d(-338%, 0, 0);
}
.viewing-page-2 #revealAnim img {
  transform: translate3d(0, 0, 0);
}   
</code></pre>
                    </div>
                    <div class="images-container">
                        <img class="front" src="img/img_iphone_front.png" alt="iPhone" />
                        <img class="back" src="img/img_iphone_back.png" alt="iPhone" />
                        <img class="side" src="img/img_iphone_side.png" alt="iPhone" />
                    </div>
                </div>
            </section>
            <section id="betweenSlidesAnimStart">
                <div class="section-content">
                    <div class="copy-container">
                        <h2>Animation without a delay</h2>
                        <p>Reveal animation started with a 0.9s delay (after slide animation) but all animations on this slide are happening straight away.</p>
                    </div>
                    <div class="images-container">
                        <img class="yellow" src="img/img_iphone_back_yellow.png" alt="iPhone" />
                        <img class="pink" src="img/img_iphone_pink.png" alt="iPhone" />
                        <img class="blue" src="img/img_iphone_front_blue.png" alt="iPhone" />
                    </div>
                </div>
            </section>
            <section id="betweenSlidesAnimEnd">
                <div class="fake-content">
                    <div class="images-container">
                        <img class="green" src="img/img_iphone_front_green.png" alt="iPhone" />
                    </div>
                </div>
                <div class="section-content">
                    <div class="copy-container">
                        <h2>Overlapping elements</h2>
                        <p>You can select an element which you would like to overlap between two slides. Use <strong>viewing-page-X</strong> class to achieve this effect.</p>
                    </div>
                    <div class="images-container">
                        <img class="front2" src="img/img_iphone_front_2.png" alt="iPhone" />
                    </div>
                </div>
            </section>
            
        </div>

        <script src="js/vendor/jquery-1.11.1.min.js"></script>
        <script src="js/vendor/one-page.js"></script>
        <script type="text/javascript" src="js/onepagescroll/jquery.onepage-scroll.js"></script>
        
        <script src="js/main.js"></script>

        
        
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
        <script src="js/modules/all-modules.js"></script>
        <script src="js/resize-functions.js"></script>
        <script src="js/main-nav.js"></script>
        -->
        <?php include('php/helpers/outlines-js.php'); ?>

    </body>
</html>
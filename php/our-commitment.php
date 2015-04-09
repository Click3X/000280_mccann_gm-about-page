<?php
    // OUR CONMMITMENT
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {

        echo '<div class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            // helper($page);
            
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);
        }

    }
    // SAFETY
    include('sections/safety.php');
    // ENVIRONMENT
    include('sections/environment.php');
    // TECH
    include('modules/tech.php');
    // FOUNDATION
    include('modules/foundation.php');

    echo '</div>';
?>
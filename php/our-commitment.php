<?php
    // OUR CONMMITMENT
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {
        if( isset($page['id']) ) { $href = cleanString($page['id']); } else { $href = ""; }
        echo '<div id="c3xgm-about-page-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);
        }

    }
    // SAFETY
    include('sections/safety.php');
    // TECH
    include('modules/tech.php');
    // ENVIRONMENT
    include('sections/environment.php');
    // FOUNDATION
    include('modules/foundation.php');

    echo '</div>';
?>
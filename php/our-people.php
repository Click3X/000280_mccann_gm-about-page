<?php
// OUR PEOPLE
// echo '<div id="our-peop-temp" class="temp our-peop-temp hidden"></div>';
// echo '<div id="our-peop-temp-mobile" class="temp our-peop-temp-mobile hidden"></div>';

// ITERATE THROUGH PAGEES ARRAY
foreach ($pages as $key => $page) {
    if($page['title'] == "Our People") {

        echo '<div class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            // helper($page);
            
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

            // BLOCKS
            if( isset($page['blocks']) ) {
                foreach ($page['blocks'] as $key => $block) {
                    $block_title = $block['title'];
                    if($block_title == "continents" || $block_title == "timezones" ) { echo '<div class="c3xgm-about-clearfix c3xgm-about-module-50 c3xgm-about-employee-container">';}
                    printBlock($block);
                    if($block_title == "global-headquarters" || $block_title == "languages" ) { echo '</div>';}
                }
            }

        echo '</div>'; 
        // END PAGE CONTAINER
    } // TEMP OUR BRANDS PAGE ONLY
}

?>
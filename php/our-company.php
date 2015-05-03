<?php
// OUR COMPANY
// echo '<div id="our-comp-temp" class="temp our-comp-temp hidden"></div>';
// ITERATE THROUGH PAGEES ARRAY
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Company") {
        if( isset($page['id']) ) { $href = cleanString($page['id']); } else { $href = ""; }
        echo '<div id="c3xgm-about-page-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).' c3xgm-about-animate">';
            // helper($page);
            
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

            // BLOCKS
            if( isset($page['blocks']) ) {
                foreach ($page['blocks'] as $key => $block) {
                    printBlock($block);
                }
            }

            // DOWNWARD ARROW
            echo '<a href="#c3xgm-about-page-our-people" class="c3xgm-about-down-arrow-link"><img src="img/pages/company/down-arrow.svg" alt="Scroll to read more about General Motors"  class="c3xgm-about-down-arrow"></a>';

        echo '</div>'; 
        // END PAGE CONTAINER
    } // TEMP OUR BRANDS PAGE ONLY
}

?>
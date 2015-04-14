<?php
// TECH MODULE
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {
        $href = $page['sections'][2]['id'];
        if( isset($href) && $href != "") { $href = $page['sections'][2]['id']; } else { $href = ""; }
            echo '<div id="c3xgm-about-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            
            // SECTIONS
            if( isset($page['sections']) ) {
                foreach ($page['sections'] as $key => $section) {
                    
                    if($section['title'] == "Technology") {
                        // SECTION HEADER
                       subSectionHeader($section['title'], $section['tagline']);
                    }
                
                     // MODULES
                    if( isset($section['module']) ) {
                        if($section['module']['name'] == "technology") {
                            printModule($section['module']);
                        }
                    }
                }
            }
        echo '</div>';
        // END SECTION CONTAINER
    } // TEMP OUR BRANDS PAGE ONLY
}
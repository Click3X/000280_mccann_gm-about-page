<?php
// TECH MODULE
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {

        echo '<div class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';

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
            // END SECTION CONTAINER

        echo '</div>'; 
        // END PAGE CONTAINER
    } // TEMP OUR BRANDS PAGE ONLY
}
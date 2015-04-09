<?php
// FOUNDATION MODULE
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {

        echo '<div class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            // helper($page);
            
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            // pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

            // SECTIONS
            if( isset($page['sections']) ) {
                foreach ($page['sections'] as $key => $section) {
                    
                    if($section['title'] == "Our Global Community") {
                        // SECTION HEADER
                        subSectionHeader($section['title'], $section['tagline']);
                    }
                

                     // MODULES
                    if( isset($section['module']) ) {
                        if($section['module']['name'] == "foundation") {
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
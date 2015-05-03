<?php
// FOUNDATION MODULE
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {
            // helper($page);
            
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            $href = $page['sections'][3]['id'];
            if( isset($href) && $href != "") { $href = $page['sections'][3]['id']; } else { $href = ""; }
            echo '<div id="c3xgm-about-page-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';

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
    } // TEMP OUR BRANDS PAGE ONLY
}
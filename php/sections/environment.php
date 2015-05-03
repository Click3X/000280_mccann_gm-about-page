<?php
// ENVIRONMENT SECTION
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {

        if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
        if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
        if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            // SECTIONS
            if( isset($page['sections']) ) {
                foreach ($page['sections'] as $key => $section) {
                    
                    if($section['title'] == "Environment") {
                        if( isset($section['id']) ) { $href = cleanString($section['id']); } else { $href = ""; }
                        echo '<div id="c3xgm-about-page-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.$href.'">';
                        // SECTION HEADER
                       subSectionHeader($section['title'], $section['tagline']);

                         // SECTION BLOCKS
                        if( isset($section['blocks']) ) {
                            foreach ($section['blocks'] as $key => $block) {
                                
                                if( isset($block['type']) && ($block['type'] == "decorative") ) {
                                
                                    // DECORATIVE
                                    // IF SOLAR PANELS - GET STATIC HTML FILE
                                    if($block['title'] == "Solar Panels") {
                                        include('clean-energy.php');
                                    } else {
                                        printDecorative($block);
                                    }
                                } else {
                                    printBlock($block);
                                }
                            }
                        }
                        // END SECTION CONTAINER

                        echo '</div>'; 
                    }
                }
            }
        // END PAGE CONTAINER
    } // TEMP OUR BRANDS PAGE ONLY
}

?>
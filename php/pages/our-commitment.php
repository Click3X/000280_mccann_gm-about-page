<?php
// OUR CONMMITMENT
// echo ' <div id="our-commitment-temp" class="temp our-commitment-temp hidden"></div>';
// ITERATE THROUGH PAGEES ARRAY
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {

        echo '<div class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            // helper($page);
            
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

            // MODULES
            if( isset($page['module']) ) {
                printModule($page['module']);
            }

            // BLOCKS
            if( isset($page['blocks']) ) {
                foreach ($page['blocks'] as $key => $block) {
                    if( isset($block['type']) && ($block['type'] == "decorative") ) {
                        // DECORATIVE
                        printDecorative($block);

                    } else {
                        printBlock($block);
                    }
                }
            }

            // SECTIONS
            if( isset($page['sections']) ) {
                foreach ($page['sections'] as $key => $section) {
                    
                    // SECTION HEADER
                    subSectionHeader($section['title'], $section['tagline']);

                     // MODULES
                    if( isset($section['module']) ) {
                        printModule($section['module']);
                    }

                    // SECTION BLOCKS
                    if( isset($section['blocks']) ) {
                        foreach ($section['blocks'] as $key => $block) {
                            
                            if( isset($block['type']) && ($block['type'] == "decorative") ) {
                            
                                // DECORATIVE
                                printDecorative($block);

                            } else {
                                printBlock($block);
                            }
                        }
                    }
                }
            }
            // END SECTION CONTAINER

        echo '</div>'; 
        // END PAGE CONTAINER
    } // TEMP OUR BRANDS PAGE ONLY
}

?>
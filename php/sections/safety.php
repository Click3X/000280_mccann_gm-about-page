<?php
// SAFETY SECTION
foreach ($pages as $key => $page) {
    if($page['title'] == "Our Commitment") {

        if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
        if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
        if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

        // SECTIONS
        if( isset($page['sections']) ) {
            if( isset($page['id']) ) { $href = cleanString($page['id']); } else { $href = ""; }

            foreach ($page['sections'] as $key => $section) {
                if($section['title'] == "Safety &amp; Quality") {
                    if( isset($section['id']) ) { $href = cleanString($section['id']); } else { $href = ""; }
                    echo '<div id="c3xgm-about-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
                    // SECTION HEADER
                   subSectionHeader($section['title'], $section['tagline']);

                     // SECTION BLOCKS
                    if( isset($section['blocks']) ) {
                        foreach ($section['blocks'] as $key => $block) {
                            
                            if( isset($block['type']) && ($block['type'] == "decorative") ) {
                            
                                // DECORATIVE
                                printDecorative($block);

                            } else {
                                if( ( isset($block['title']) ) && ( $block['title'] == "Safety Score" ) ) {
                                    include('safety-score.php');
                                } else{
                                    printBlock($block);
                                }
                            }
                        }
                    }
                    echo '</div>';
                }
            }
        }
        // END PAGE CONTAINER
    } // TEMP OUR BRANDS PAGE ONLY
}

?>
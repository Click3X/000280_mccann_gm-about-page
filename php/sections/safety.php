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
                    echo '<div id="c3xgm-about-page-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.$href.'">';
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
                                } 
                                else if( ( isset($block['title']) ) && ( $block['title'] == "Test Facility" ) ) {
                                    echo ' <div class="c3xgm-about-block c3xgm-about-clearfix c3xgm-about-test-facility">
                                               <div id="truck-line-container" class="c3xgm-about-block-image">
                                                  <div id="truck-parent">
                                                    <img src="img/pages/commitment/truck-front.png" class=" " id="safety-truck" alt="Test Facility">
                                                  </div>
                                                  <div id="line-parent">
                                                     <img src="img/pages/commitment/circle-lines.svg" class="c3xgm-about-circle-lines" alt="Rollover Test Facility">
                                                  </div>
                                               </div>
                                               <p class="c3xgm-about-blockquote"><span class="c3xgm-about-dark-blue c3xgm-about-thin">The first North American <br>auto manufacturer</span><span class="c3xgm-about-gray">to build a</span><span class="c3xgm-about-light-blue"><span class="c3xgm-about-sep">Rollover</span><span class="c3xgm-about-sep">Test Facility</span></span></p>
                                            </div>';
                                } 
                                else{
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
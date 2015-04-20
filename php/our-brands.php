<?php
// OUR BRANDS
// STORE BRANDS PAGE IN VAR
$page = $pages[2];
        if( isset($page['id']) ) { $href = cleanString($page['id']); } else { $href = ""; }
    echo '<div id="c3xgm-about-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            
            // PAGE HEADER
            if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
            if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
            if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}

            pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

            // MODULES
            include('php/modules/car.php');

            // BLOCKS
            if( isset($page['blocks']) ) {
                foreach ($page['blocks'] as $key => $block) {
                    if( isset($block['type']) && ($block['type'] == "decorative") ) {
                        // DECORATIVE
                        printDecorative($block);

                        // DECORATIVE
                        // if( $block['title'] == "Flag Line" ) {
                        //     echo '<div id="flag-line-container" class="clearfix">
                        //             <ul id="animate-flag-line" class="animate-flag-line">
                        //                 <li class="flag-line"><img src="img/decorative/landscape/flag-line.svg"></li>
                        //                 <li class="flag-line"><img src="img/decorative/landscape/flag-line.svg"></li>
                        //             </ul>
                        //         </div>';
                        // } else {
                        //     printDecorative($block);
                        // }


                    } else {
                        printBlock($block);
                    }
                }
            }

    echo '</div>';
?>
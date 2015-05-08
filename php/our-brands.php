<?php
// OUR BRANDS
// STORE BRANDS PAGE IN VAR
$page = $pages[2];
        if( isset($page['id']) ) { $href = cleanString($page['id']); } else { $href = ""; }
    echo '<div id="c3xgm-about-page-'.$href.'" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-'.cleanString($page['title']).'">';
            
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
                        if( $block['title'] == "Flag Line" ) {
                            echo '<div class="c3xgm-about-flag-line-container c3xgm-about-clearfix">
                                    <div id="c3xgm-about-flag-line-grey-car" class="grey-car c3xgm-about-clearfix c3xgm-about-flag-line-grey-car">
                                        <div class="wheel back-wheel animate-tires"></div>
                                        <div class="wheel front-wheel animate-tires"></div>
                                    </div>
                                    <div id="flag-line-container" class="c3xgm-about-clearfix">
                                        <ul id="animate-flag-line" class="animate-flag-line-js c3xgm-about-clearfix">
                                            <li class="flag-line"><img src="img/decorative/landscape/flag-line.svg"></li>
                                            <li class="flag-line"><img src="img/decorative/landscape/flag-line.svg"></li>
                                        </ul>
                                    </div>
                                    <div class="c3xgm-about-grey-white-gradient c3xgm-about-clearfix"></div>
                                </div>';
                        } else {
                            printDecorative($block);
                        }

                    } else {
                        if( $block['title'] == "Dealers" ) {
                            echo '<div class="c3xgm-about-block c3xgm-about-clearfix c3xgm-about-dealers text-right">
                                    <p class="c3xgm-about-blockquote">
                                        <span class="c3xgm-about-sep c3xgm-about-clearfix">
                                            <span class="c3xgm-about-dark-blue c3xgm-about-thin">There are over <strong >20,000</strong>
                                                <br>
                                                <span>Dealers in</span>
                                            </span>
                                        </span>
                                        <span class="c3xgm-about-sep c3xgm-about-clearfix">
                                            <span class="c3xgm-about-light-blue number">140</span>
                                            <span class="c3xgm-about-gray">Countries</span>
                                        </span>
                                    </p>
                                </div>';
                        } else { printBlock($block); }
                    }
                }
            }

    echo '</div>';
?>
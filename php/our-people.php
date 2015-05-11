<?php
// OUR PEOPLE from WEN'S HTML
echo '<div id="c3xgm-about-page-our-people" class="c3xgm-about-page c3xgm-about-clearfix c3xgm-about-page-our-people">';

$page = $pages[1];
 // PAGE HEADER
if(isset($page['tagline'])) { $page['tagline'] = $page['tagline']; } else { $page['tagline'] = "";}
if(isset($page['icon@2x'])) { $page['icon@2x'] = $page['icon@2x']; } else { $page['icon@2x'] = "";}
if(isset($page['image'])) { $page['image'] = $page['image']; } else { $page['image'] = "";}
pageHeader($page['title'], $page['icon@2x'], $page['tagline'], $page['image']);

echo '<div id="c3xgm-about-employees" class="c3xgm-about-block c3xgm-about-clearfix c3xgm-about-employees">
        
        <p class="c3xgm-about-blockquote">
            <span class="c3xgm-about-span-container">
                <span class="c3xgm-about-light-blue number">
                    <span id="c3xgm-about-emp-num" class="c3xgm-about-animate-number">200,000</span>
                </span>
                <span class="c3xgm-about-gray">Employees</span>
            </span>
        </p>
        
        <div id="c3xgm-about-employees-img" class="c3xgm-about-block-image c3xgm-about-clearfix c3xgm-about-employees-img">
            <div class="c3xgm-about-girl"></div>
            <div class="c3xgm-about-boy"></div>
            <div class="c3xgm-about-girl"></div>
            <div class="c3xgm-about-boy"></div>
            <div class="c3xgm-about-girl"></div>
            <div class="c3xgm-about-boy"></div>
            <div class="c3xgm-about-girl"></div>
            <div class="c3xgm-about-boy"></div>
            <div class="c3xgm-about-girl"></div>
        </div>
    </div>
    
    <div class="c3xgm-about-clearfix c3xgm-about-module-50">
        
        <div class="c3xgm-about-block c3xgm-about-clearfix c3xgm-about-continents text-right">
            
            <p class="c3xgm-about-blockquote">
                <span class="c3xgm-about-separator">
                    <span class="c3xgm-about-dark-blue c3xgm-about-thin">We Serve</span>
                    <span class="c3xgm-about-gray">Continents</span>
                    <span class="c3xgm-about-gray-line"></span><span class="c3xgm-about-yellow-line"></span>
                </span>
                <span class="c3xgm-about-light-blue number c3xgm-about-animate-number" id="c3xgm-about-number-6">6</span>
            </p>
            <div class="c3xgm-about-marker-holder c3xgm-about-clearfix">
                <!-- MARKER SVG -->
                <img src="img/pages/people/pin.svg" id="map-marker" class="map-marker">
            </div>
            <div id="myobj" class="c3xgm-about-block-image">';
                // <img src="img/pages/people/map.svg" alt="continents">
                include('svgs/map.php');

            echo '</div>

        </div>
        
        <div class="c3xgm-about-block c3xgm-about-clearfix c3xgm-about-headquarters clear-left">
            <p class="c3xgm-about-blockquote">
                <span class="c3xgm-about-light-blue">Global headquarters</span>
                <span class="c3xgm-about-gray">
                    <span>Detroit</span>
                </span>
                <span class="c3xgm-about-gray c3xgm-about-gray-2">Michigan, USA</span>
            </p>
        </div>

    </div> 
    <div class="c3xgm-about-clearfix c3xgm-about-module-50">
        
        <div class="c3xgm-about-block c3xgm-about-clearfix c3xgm-about-timezones text-right">
            
            <p class="c3xgm-about-blockquote">
                <span class="c3xgm-about-separator">
                    <span class="c3xgm-about-dark-blue c3xgm-about-thin">Across</span>
                    <span class="c3xgm-about-gray">Timezones</span>
                    <span class="c3xgm-about-gray-line"></span><span class="c3xgm-about-yellow-line"></span>
                </span>
                <span class="c3xgm-about-light-blue number c3xgm-about-animate-number" id="c3xgm-about-number-23">23</span>
            </p>

            <div class="c3xgm-about-block-image">';
                // <img src="img/pages/people/time-zones.svg" alt="timezones">
                include('svgs/time-zone.php');
            echo '</div>

        </div>

        <div class="c3xgm-about-block c3xgm-about-clearfix c3xgm-about-languages text-right">
            
            <p class="c3xgm-about-blockquote">
                <span class="c3xgm-about-separator">
                    <span class="c3xgm-about-dark-blue c3xgm-about-thin">And we speak</span>
                    <span class="c3xgm-about-gray">Languages</span>
                    <span class="c3xgm-about-gray-line"></span><span class="c3xgm-about-yellow-line"></span>
                </span>
                <span class="c3xgm-about-light-blue number c3xgm-about-animate-number" id="c3xgm-about-number-70">70</span>
            </p>
            
            <div class="c3xgm-about-block-image">
                <img src="img/pages/people/language.svg" alt="languages">
            </div>

        </div>

    </div> 

</div>';

?>
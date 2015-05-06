<?php // FUNCTIONS - NEW

// SECTION HEADER
function newPageHeader($title, $icon, $tagline) {
	$title = $title; $icon = $icon; $tagline = $tagline;

	$titleSpan = str_replace('Our','<span class=\'c3xgm-about-thin\'>Our</span>', $title);
	
	echo '<div class="c3xgm-about-section c3xgm-about-clearfix '.cleanString($title).'">
		    <div class="c3xgm-about-section-header c3xgm-about-clearfix">
			    <div class="c3xgm-about-section-header-inner c3xgm-about-clearfix">
			        <img id="c3xgm-about-'.cleanString($title).'-icon" class="c3xgm-about-section-icon" src="'.$icon.'" alt="'.$title.'">
			        <div class="c3xgm-about-header-holder c3xgm-about-clearfix"><h1 class="c3xgm-about-h">'.$titleSpan.'</h1></div>
			    </div>
				<hr>
			</div>';

			// if($image) { 
			// 	$size = getimagesize($image);
			// 	echo '<div class="c3xgm-about-header-image" style="max-width:'.$size[0].'px; max-height:'.$size[1].'px;"><img src="'.$image.'" alt="'.$title.'"></div>';
			// }

			if($tagline) { 
				echo '<p class="c3xgm-about-p c3xgm-about-header-p">'.$tagline.'</p>'; 
			}

	echo '</div>';
}


?>
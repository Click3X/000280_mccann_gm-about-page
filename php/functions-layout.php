<?php // FUNCTIONS

// PRINT SECTION HEADER HEADER
function sectionHeader($title, $image) {
	$title = $title;
	$title = str_replace('Our','<span class=\'c3xgm-about-thin\'>Our</span>', $title);
	// $title = $title."hey";
	$image = $image;
	echo '<!-- SECTION START -->
		<div class="c3xgm-about-section c3xgm-about-clearfix">
		    <div class="c3xgm-about-section-header c3xgm-about-clearfix">
		    <div class="c3xgm-about-section-header-inner">
		        <img class="c3xgm-about-section-icon" src="'.$image.'">
		        <h1 class="c3xgm-about-h">'.$title.'</h1>
		    </div>
			<hr>
			</div>
		</div>';
}

?>
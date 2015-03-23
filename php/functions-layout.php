<?php // FUNCTIONS

// SECTION HEADER
function pageHeader($title, $image, $tagline) {
	$title = $title;
	$titleSpan = str_replace('Our','<span class=\'c3xgm-about-thin\'>Our</span>', $title);
	$image = $image;
	$tagline = $tagline;
	echo '<!-- SECTION START -->
		<div class="c3xgm-about-section c3xgm-about-clearfix '.cleanString($title).'">
		    <div class="c3xgm-about-section-header c3xgm-about-clearfix">
		    <div class="c3xgm-about-section-header-inner">
		        <img class="c3xgm-about-section-icon" src="'.$image.'">
		        <h1 class="c3xgm-about-h">'.$titleSpan.'</h1>
		    </div>
			<hr>
			</div>';

			if($tagline) {
				echo '<p class="c3xgm-about-p">'.$tagline.'</p>';
			}

	echo '</div>';
}

// SUB SECTION HEADER
function subSectionHeader($title, $copy) {
	$title = $title;
	$copy = $copy;
	echo '<!-- SUB SECTION START -->
		<div class="c3xgm-about-subsection c3xgm-about-clearfix">
			<h2 class="c3xgm-about-h c3xgm-about-blue">'.$title.'</h2>
		    <div class="c3xgm-about-yellow-bar-left-wrapper">
                <p class="c3xgm-about-p">'.$copy.'</p>
            </div>
		</div>';
}

// BLOCK
function printBlock($block) {
	$block = $block;
	// helper($block);
	if($block['class']) {$class = " c3xgm-about-".$block['class']; } else { $class = "";}
	echo '<div class="c3xgm-about-block c3xgm-about-clearfix'.$class.'">';
			if($block['image@2x']) { echo '<div class="c3xgm-about-block-image"><img src="'.$block['image@2x'].'"></div>';}
			echo '<div class="c3xgm-about-yellow-bar-left-wrapper">';
			// if($block['image@2x']) { echo '<div class="c3xgm-about-block-image"><img src="'.$block['image@2x'].'"></div>';}
			if($block['title']) { echo '<h3 class="c3xgm-about-block-title c3xgm-about-h">'.$block['title'].'</h3>';}
	echo '</div>
	</div>';
}

?>
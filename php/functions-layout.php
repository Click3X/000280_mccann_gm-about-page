<?php // FUNCTIONS

// SECTION HEADER
function pageHeader($title, $icon, $tagline, $image) {
	$title = $title; $icon = $icon; $tagline = $tagline; $image = $image;

	$titleSpan = str_replace('Our','<span class=\'c3xgm-about-thin\'>Our</span>', $title);
	
	echo '<div class="c3xgm-about-section c3xgm-about-clearfix '.cleanString($title).'">
		    <div class="c3xgm-about-section-header c3xgm-about-clearfix">
			    <div class="c3xgm-about-section-header-inner">
			        <img class="c3xgm-about-section-icon" src="'.$icon.'" alt="'.$title.'">
			        <h1 class="c3xgm-about-h">'.$titleSpan.'</h1>
			    </div>
				<hr>
			</div>';

			if($image) { 
				$size = getimagesize($image);
				echo '<div class="c3xgm-about-header-image" style="max-width:'.$size[0].'px; max-height:'.$size[1].'px;"><img src="'.$image.'" alt="'.$title.'"></div>';
			}

			if($tagline) { 
				echo '<p class="c3xgm-about-p c3xgm-about-header-p">'.$tagline.'</p>'; 
			}

	echo '</div>';
}


// SUB SECTION HEADER
function subSectionHeader($title, $copy) {
	$title = $title; $copy = $copy;

	echo '<div class="c3xgm-about-subsection c3xgm-about-clearfix">
			<h2 class="c3xgm-about-h c3xgm-about-blue">'.$title.'</h2>
		    <div class="c3xgm-about-yellow-bar-left-wrapper">
                <p class="c3xgm-about-p">'.$copy.'</p>
            </div>
		</div>';
}


// BLOCK
function printBlock($block) {
	$block = $block;

	if($block['class']) {
		$class = " c3xgm-about-".$block['class']; 
	} else { 
		$class = "";
	}

	echo '<div class="c3xgm-about-block c3xgm-about-clearfix'.$class.'">';
		
		// TAGLINE
		if( isset($block['tagline']) ) {
			echo '<div class="c3xgm-about-yellow-bar-left-wrapper">';
				echo '<h3 class="c3xgm-about-block-tagline c3xgm-about-h">'.$block['tagline'].'</h3>';
			echo '</div>';
		}

		// COPY
		if( isset($block['copy']) ) {
			if( is_array($block['copy']) ) {
				$class="";
				// OUR PEOPLE SPECIFIC
				$our_people =  array("continents", "timezones", "languages");
				// CHECK FOR MULTI-LINE COPY
				echo '<p class="c3xgm-about-blockquote">';
				$isOurPeople = false;
				if( in_array($block['title'], $our_people) ) {
					$isOurPeople = true;
					echo '<span class="c3xgm-about-separator">';
				}
				foreach ($block['copy'] as $key => $line) {
					if( isAssoc($block['copy']) ) { $class = $key; }
					// IF VALUE IS A NUMBER, FORMAT IT
					if( is_numeric($line) ) { 
						if( $isOurPeople ) { echo '</span>';}
						$line = number_format($line);
					}
					echo '<span class="'.$class.'">'.$line.'</span>';
				}
				echo '</p>';

			} else {
				echo '<p class="c3xgm-about-p">'.$block['copy'].'</p>';	
			}
		}

		// IMAGE
		if( isset($block['image@2x']) ) { 
			if( isset($block['image']) && ($block['image'] != "") ) { 
				$size = getimagesize($block['image']); 
				echo '<div class="c3xgm-about-block-image"><img src="'.$block['image@2x'].'" alt="'.$block['title'].'"></div>';
			}
		}
	echo '</div>';
}




// MODULE
function printModule($module) {
	$module = $module;
	$class = "";
	$color = "";
	$module_name = $module['name'];
	
	// CHECK MODULE NAME AND MAKE MODULE BASE CLASS
	if( isset($module['name']) ) { 
		$class = ' c3xgm-about-module-'.cleanString($module['name']); 
		$color = ' c3xgm-about-light-blue';
	}
	// MODULE SECITON CONTAINER
	echo '<div class="c3xgm-about-clearfix'.$class.'">';
	
	if( isset($module['blocks']) ) {

		// CARS MODULE
		if($module_name == 'car') {
			// LOGO HOLDER
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-40">';
				echo '<ul class="c3xgm-about-clearfix c3xgm-about-module-car-logo-container">';
					foreach ($module['blocks'] as $key => $block) {
						if( isset($block['logo']) ) {
							$link = cleanString($block['title']);
							echo '<li><a href="#c3xgm-about-'.$link.'" class="c3xgm-about-module-car-logo"><img src="'.$block['logo'].'" alt="'.$block['title'].'"></a></li>';
						}
					}
				echo '</ul>';
			echo '</div>';

			// OPEN DIV CONTAINER FOR CAR DESCRIPTIONS
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-60">';
		
		} elseif($module_name == 'foundation') {

			// LOGO HOLDER
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-25">';
				echo '<ul class="c3xgm-about-clearfix c3xgm-about-module-foundation-logo-container">';
					foreach ($module['blocks'] as $key => $block) {
						if( isset($block['logo']) ) {
							$link = cleanString($block['title']);
							echo '<li><a href="#c3xgm-about-'.$link.'" class="c3xgm-about-module-foundation-logo"><img src="'.$block['logo'].'" alt="'.$block['title'].'"></a></li>';
						}
					}
				echo '</ul>';
			echo '</div>';

			// OPEN DIV CONTAINER FOR CAR DESCRIPTIONS
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-75">';
		}

		// MODULE CONTAINER
		echo '<div class="c3xgm-about-clearfix c3xgm-about-module-container">';

	 	foreach ($module['blocks'] as $key => $block) {
	 		$href = cleanString($block['title']);
	 		echo '<div id="c3xgm-about-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module c3xgm-about-'.$href.'">';
	 			// PRINT TITLE IF NOT TECH MODULE
	 			if( (isset( $block['title']) ) && ($module_name != 'technology') ){ echo '<h3 class="c3xgm-about-h'.$color.'">'.$block['title'].'</h3>'; }
	 			// COPY
	 			if(isset( $block['copy']) ) { 
	 				if( is_array($block['copy']) ) {
						$class="";
						// CHECK FOR MULTI-LINE COPY
						echo '<p class="c3xgm-about-blockquote">';
						foreach ($block['copy'] as $key => $line) {
							if( isAssoc($block['copy']) ) { $class = $key; }
							// IF VALUE IS A NUMBER, FORMAT IT
							if( is_numeric($line) ) { $line = number_format($line); }
							// PRINT LINE
							echo '<span class="'.$class.'">'.$line.'</span>';
						}
						echo '</p>';
					} else {
						// ECHO COPY
						echo '<p class="c3xgm-about-p">'.$block['copy'].'</p>';	
					}
	 			}

	 			// LINK
	 			if( (isset($block['link']) )  && ($block['link'] != "") ) {
	 				$link_snippet = str_replace('http://www.', '', $block['link']);
	 				$link_text ="Learn more at ".$link_snippet;
	 				echo '<a class="c3xgm-about-link" href="'.$block['link'].'">'.$link_text.'</a>'; 
	 			}
	 			
	 			// ICON
	 			if( (isset($block['icon']) )  && ($block['icon'] != "") ) {
	 				echo '<div class="c3xgm-about-clearfix c3xgm-about-block-icon">';
	 					echo '<img src="'.$block['icon'].'" alt="'.$block['title'].'">';
	 				echo '</div>';
	 			}

	 			// IMAGE
	 			if($module_name == 'car') {
		 			if( (isset($block['image']) )  && ($block['image'] != "") ) {
		 				echo '<div class="c3xgm-about-clearfix c3xgm-about-block-image">';
		 					echo '<img src="'.$block['image'].'" alt="'.$block['title'].'">';
		 				echo '</div>';
		 			}
		 		} elseif ($module_name == 'technology') {
		 			echo '<div class="c3xgm-about-clearfix c3xgm-about-block-image">';
		 				echo '<img src="'.$block['image'].'" alt="'.$block['title'].'">';
		 			echo '</div>';
		 		}	 			
	 		echo '</div>'; // END MODULE BLOCK
	 	}
	 	echo '</div>'; // END MODULE CONTAINER

	 	// CLOSE OUT HALF DIV IF CAR MODULE
	 	if($module_name == 'car' || $module_name == 'foundation') { echo '</div>'; }
	}
	echo '</div>'; // END MODULE
}

?>
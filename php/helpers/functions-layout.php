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
			<h2 class="c3xgm-about-h c3xgm-about-dark-blue">'.$title.'</h2>
		    <div class="c3xgm-about-yellow-bar-left-wrapper">
                <p class="c3xgm-about-p">'.$copy.'</p>
            </div>
		</div>';
}


// DECORATIVE
function printDecorative($block) {
	$block = $block;
	if($block['class']) { $class = " c3xgm-about-".$block['class']; } 
		else { $class = ""; }

	if($block['title'] == "Red Car Road" || $block['title'] == "Five Stars") { $deco_class = " c3xgm-about-gradient c3xgm-about-grey-gradient"; } 
		else { $deco_class = ""; }

	echo '<div class="c3xgm-about-block c3xgm-about-decorative c3xgm-about-clearfix'.$class.''.$deco_class.'">';
			if( isset($block['assets']) ) {
				if($block['title'] == "Five Stars") { echo '<div class="c3xgm-about-checker"></div>';}
				foreach ($block['assets'] as $key => $asset) {
					if($key == "checker") { 
						echo ""; 
					} else {
						// helper($asset);
						$class = cleanString($key);
						if( isset($asset['image@2x']) ) { $rel = 'rel="'.$asset['image@2x'].'"'; } else { $rel = ''; }
						echo '<div class="c3xgm-about-'.$class.'">';
							echo '<img src="'.$asset['image'].'" '.$rel.'>';
						echo '</div>';
					}
				}
				if($block['title'] == "Five Stars") { echo '<div class="c3xgm-about-checker"></div>';}
				if($block['title'] == "Solar Panels" || $block['title'] == "Flag Line") { echo '<div class="c3xgm-about-gradient c3xgm-about-grey-gradient c3xgm-about-solar-road"></div>';}
			}
	echo '</div>';
}


// BLOCK
function printBlock($block) {
	$block = $block;
	if($block['class']) { $class = " c3xgm-about-".$block['class']; } 
		else { $class = ""; }

	echo '<div class="c3xgm-about-block c3xgm-about-clearfix'.$class.'">';

		// OUR PEOPLE BLOCKS WE DONT WANT TO SPIT IMAGE OUT FIRST
		$people_blocks = array("employees", "continents", "timezones", "global-headquarters", "languages");
		if( isset($block['title']) && in_array( $block['title'], $people_blocks ) ) {

		} else {
			// IMAGE
			if( isset($block['image@2x']) ) { 
				if( isset($block['image']) && ($block['image'] != "") ) { 
					$size = getimagesize($block['image']); 
					// IF CHINA, SET DESKTOP CLASS
					if($block['title'] == "China") { $desk_class="c3xgm-about-desktop";} else {$desk_class="";}
					echo '<div class="c3xgm-about-block-image"><img src="'.$block['image@2x'].'" alt="'.$block['title'].'" class="'.$desk_class.'">';
					// IF BLOCK IS TEST FACILITY - ADD IN NEW DIV FOR ANIMATION
					if($block['title'] == "Test Facility") {
						echo '<img src="img/pages/commitment/circle-lines.svg" class="c3xgm-about-circle-lines" alt="Rollover Test Facility">';
					} 
					// IF BLOCK IS CHINA, GET MOBIL PICS
					if( isset($block['image-mobile']) && $block['image-mobile'] != "" ) {
						echo '<img src="'.$block['image-mobile@2x'].'" class="c3xgm-about-block-image-mobile" alt="'.$block['title'].'">';	
					}
					echo '</div>';
				}
			}
		}
		
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
				// SPECIAL SPAN HOLDER IF EMPLOUYEE BLOCK
				if($block['title'] == "employees") { echo '<span class="c3xgm-about-span-container">';}
				foreach ($block['copy'] as $key => $line) {
					if( isAssoc($block['copy']) ) { $class = $key; }
					// IF VALUE IS A NUMBER, FORMAT IT
					if( is_numeric($line) ) { 
						if( $isOurPeople ) { echo '</span>';}
						$line = number_format($line);
					}
					echo '<span class="'.$class.'">'.$line.'</span>';
				}
				// CLOSE SPAN HOLDER
				if($block['title'] == "employees") { echo '</span>';}
				echo '</p>';

			} else {
				echo '<p class="c3xgm-about-p">'.$block['copy'].'</p>';	
			}
		}

		// SPIT OUT IMAGE FOR OUR PEOPLE
		if( isset($block['title']) && in_array( $block['title'], $people_blocks ) ) {
			// // IMAGE
			if( isset($block['image@2x']) ) { 
				if( isset($block['image']) && ($block['image'] != "") ) { 
					$size = getimagesize($block['image']); 
					echo '<div class="c3xgm-about-block-image"><img src="'.$block['image@2x'].'" alt="'.$block['title'].'"></div>';
				}
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
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-35">';
				echo '<ul class="c3xgm-about-clearfix c3xgm-about-module-car-logo-container">';
					foreach ($module['blocks'] as $key => $block) {
						if($key == 0) { $active = " active"; } else { $active = ""; }
						if( isset($block['logo']) ) {
							if(isset($block['logo@2x'])) { $rel = 'rel="'.$block['logo@2x'].'"'; } else { $rel = ''; }
							$link = cleanString($block['title']);
							echo '<li><a href="#c3xgm-about-'.$module_name.'-'.$link.'" class="c3xgm-about-module-car-logo'.$active.'"><img src="'.$block['logo'].'" alt="'.$block['title'].'" '.$rel.'></a></li>';
						}
					}
				echo '</ul>';
			echo '</div>';

			// OPEN DIV CONTAINER FOR CAR DESCRIPTIONS
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-65">';
		
		} elseif($module_name == 'foundation') {

			// LOGO HOLDER
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-20">';
				echo '<ul class="c3xgm-about-clearfix c3xgm-about-module-foundation-logo-container">';
					foreach ($module['blocks'] as $key => $block) {
						// helper($block);
						if($key == 0) { $active = " active"; } else { $active = ""; }
						if( isset($block['logo']) ) {
							$link = cleanString($block['title']);
							echo '<li><a href="#c3xgm-about-'.$module_name.'-'.$link.'" class="c3xgm-about-module-foundation-logo'.$active.'"><img src="'.$block['logo'].'" alt="'.$block['title'].'"></a></li>';
						}
					}
				echo '</ul>';
			echo '</div>';

			// OPEN DIV CONTAINER FOR CAR DESCRIPTIONS
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-80">';
		}

		// MODULE CONTAINER
		echo '<div class="c3xgm-about-clearfix c3xgm-about-module-container">';

	 	foreach ($module['blocks'] as $key => $block) {
	 		$href = cleanString($block['title']);
	 		
	 		// SHOW FIRST CAR MODULE ON LIST - HIDE THE REST
	 		if($key == 0 ) {$hide_show = "show-module";} else {$hide_show = "hide-module";}

	 		if($module_name == 'technology') {
	 			echo '<div id="c3xgm-about-'.$module_name.'-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module c3xgm-about-'.$href.' '.$hide_show.'">';
	 		} else {
	 			echo '<div id="c3xgm-about-'.$module_name.'-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module c3xgm-about-'.$href.' '.$hide_show.'">';	
	 		}
	 		
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
	 					echo '<img src="'.$block['icon@2x'].'" alt="'.$block['title'].'" rel="'.$block['icon@2x'].'">';
	 				echo '</div>';
	 			}

	 			// IMAGE
	 			if($module_name == 'car') {
		 			if( (isset($block['image']) )  && ($block['image'] != "") ) {
		 				// BUILD REL ATTRIBUTE FOR RETINA DISPLAYS
		 				if(isset($block['image@2x'])) { $rel = 'rel="'.$block['image@2x'].'"'; } else { $rel = ''; }

		 				echo '<div class="c3xgm-about-clearfix c3xgm-about-block-image">';
		 					echo '<img src="'.$block['image'].'" alt="'.$block['title'].'" '.$rel.'>';
		 				echo '</div>';
		 			}
		 			if( isset($block['vehicle-copy']) ) {
		 				echo '<span class="c3xgm-about-vehicle-copy">'.$block['vehicle-copy'].'</span>';
		 			}
		 		} elseif ($module_name == 'technology') {
		 			// TECHNOLOGY
		 			echo '<div class="c3xgm-about-clearfix c3xgm-about-block-image">';
		 				echo '<img src="'.$block['image'].'" alt="'.$block['title'].'">';
		 			echo '</div>';
		 		}	 			
	 		echo '</div>'; // END MODULE BLOCK
	 	}
	 	echo '</div>'; // END MODULE CONTAINER

	 	// CLOSE OUT HALF DIV IF CAR MODULE
	 	if($module_name == 'car' || $module_name == 'foundation') { 
	 		echo '</div>'; 
	 	} elseif($module_name == 'technology') {
	 		// PRINT NAV BULLETS 
	 		echo '<ul class="c3xgm-about-clearfix c3xgm-about-module-nav">';
	 			foreach ($module['blocks'] as $key => $block) {
	 				$href = cleanString($block['title']);
	 				// FIRST NAV BULLET IS ACTIVE BY DEFAULT
	 				if($key == 0) { $active_state = 'c3xgm-about-module-nav-bullet c3xgm-about-module-nav-bullet-active'; } else { $active_state = 'c3xgm-about-module-nav-bullet';}
	 				echo '<li><a href="#c3xgm-about-'.$module_name.'-'.$href.'" class="'.$active_state.'"></a></li>';
	 			}
	 		echo '</ul>';

	 	}
	}
	echo '</div>'; // END MODULE
}

?>
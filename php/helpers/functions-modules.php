<?php
function printTechModule($blocks) {

	// MODULE SECITON CONTAINER
	echo '<div class="c3xgm-about-clearfix-technology">';

		// MODULE CONTAINER
		echo '<div id="c3xgm-about-slider" class="c3xgm-about-clearfix c3xgm-about-module-container">';

		 	foreach ($module['blocks'] as $key => $block) {
		 		$href = cleanString($block['title']);
		 		
		 		// SHOW FIRST CAR MODULE ON LIST - HIDE THE REST
		 		// if($key == 0 ) {$hide_show = "show-module";} else {$hide_show = "hide-module";}
		 		// echo '<div id="c3xgm-about-'.$module_name.'-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module c3xgm-about-'.$href.' '.$hide_show.'">';

		 		echo '<div id="c3xgm-about-'.$module_name.'-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module c3xgm-about-'.$href.' c3xgm-about-slide">';
		
	 			// COPY
	 			if(isset( $block['copy']) ) { 
						$class="";
						// CHECK FOR MULTI-LINE COPY
						echo '<p class="c3xgm-about-blockquote">';
						foreach ($block['copy'] as $key => $line) {
							if( isAssoc($block['copy']) ) { $class = $key; }
							// PRINT LINE
							echo '<span class="'.$class.'">'.$line.'</span>';
						}
						echo '</p>';
					}
	 			}

	 			
	 			// ICON
	 			if( (isset($block['icon']) )  && ($block['icon'] != "") ) {
	 				echo '<div class="c3xgm-about-clearfix c3xgm-about-block-icon c3xgm-about-img">';
	 					echo '<img src="'.$block['icon@2x'].'" alt="'.$block['title'].'" rel="'.$block['icon@2x'].'">';
	 				echo '</div>';
	 			}

	 			// TECHNOLOGY
	 			echo '<div class="c3xgm-about-clearfix c3xgm-about-block-image">';
	 				echo '<img src="'.$block['image'].'" alt="'.$block['title'].'">';
	 			echo '</div>';
	 		echo '</div>'; // END MODULE BLOCK

	 		echo '<nav class="c3xgm-about-arrows">
				<span class="c3xgm-about-arrows-prev"></span>
				<span class="c3xgm-about-arrows-next"></span>
			</nav>';
	 	}
 		echo '</div>'; // END MODULE CONTAINER

	echo '</div>'; // END MODULE
}


// MODULE
function printTechModule($blocks) {

 	foreach ($blocks as $key => $block) {
 		$href = cleanString($block['title']);

 		echo '<section id="c3xgm-about-technology-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module display-inline-center c3xgm-about-'.$href.'">';
	 		// echo '<div class="section-content">';
 			echo '<div class="c3xgm-about-clearfix c3xgm-about-new-tech-container">';
		 			// COPY
		 			if(isset( $block['copy']) ) { 
						$class="";
						// CHECK FOR MULTI-LINE COPY
						echo '<p class="c3xgm-about-blockquote">';
						foreach ($block['copy'] as $key => $line) {
							if( isAssoc($block['copy']) ) { $class = $key; }
							// PRINT LINE
							echo '<span class="'.$class.'">'.$line.'</span>';
						}
						echo '</p>';
		 			}
		 			
		 			// ICON
		 			if( (isset($block['icon']) )  && ($block['icon'] != "") ) {
		 				echo '<div class="c3xgm-about-clearfix c3xgm-about-block-icon">';
		 					echo '<img src="'.$block['icon@2x'].'" alt="'.$block['title'].'" rel="'.$block['icon@2x'].'">';
		 				echo '</div>';
		 			}

		 			// IMAGE
		 			echo '<div class="c3xgm-about-clearfix c3xgm-about-block-image">';
		 				echo '<img src="'.$block['image'].'" alt="'.$block['title'].'">';
		 			echo '</div>';

	 		echo '</div>';
 		echo '</section>'; // END MODULE BLOCK
 	}
}





// MODULE
function printCarModule($module) {
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

		// LOGO HOLDER
		echo '<div class="c3xgm-about-clearfix c3xgm-about-module-35">';
			echo '<ul class="c3xgm-about-clearfix c3xgm-about-module-car-logo-container">';
				foreach ($module['blocks'] as $key => $block) {
					// if($key == 0) { $active = " active"; } else { $active = ""; }
					if( isset($block['logo']) ) {
						if(isset($block['logo@2x'])) { $rel = 'rel="'.$block['logo@2x'].'"'; } else { $rel = ''; }
						$link = cleanString($block['title']);
						// echo '<li><a href="#c3xgm-about-'.$module_name.'-'.$link.'" class="c3xgm-about-module-car-logo'.$active.'"><img src="'.$block['logo'].'" alt="'.$block['title'].'" '.$rel.'></a></li>';
						echo '<li><a href="#c3xgm-about-'.$module_name.'-'.$link.'" class="c3xgm-about-module-car-logo"><img src="'.$block['logo'].'" alt="'.$block['title'].'" '.$rel.'></a></li>';
					}
				}
			echo '</ul>';
		echo '</div>';

		// OPEN DIV CONTAINER FOR CAR DESCRIPTIONS
		echo '<div class="c3xgm-about-clearfix c3xgm-about-module-65">';

			// MODULE CONTAINER
			echo '<div class="c3xgm-about-clearfix c3xgm-about-module-container">';

		 	foreach ($module['blocks'] as $key => $block) {
		 		$href = cleanString($block['title']);
		 		
		 		// SHOW FIRST CAR MODULE ON LIST - HIDE THE REST
		 		// if($key == 0 ) {$hide_show = "show-module";} else {$hide_show = "hide-module";}
		 		// echo '<div id="c3xgm-about-'.$module_name.'-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module c3xgm-about-'.$href.' '.$hide_show.'">';	
		 		echo '<div id="c3xgm-about-'.$module_name.'-'.$href.'" class="c3xgm-about-clearfix c3xgm-about-module c3xgm-about-'.$href.'">';	
		 			// PRINT TITLE IF NOT TECH MODULE
		 			if( isset( $block['title']) ){ echo '<h3 class="c3xgm-about-h'.$color.'">'.$block['title'].'</h3>'; }
		 			// COPY
		 			if(isset( $block['copy']) ) { echo '<p class="c3xgm-about-p">'.$block['copy'].'</p>';}

		 			// LINK
		 			if( (isset($block['link']) )  && ($block['link'] != "") ) {
		 				$link_snippet = str_replace('http://www.', '', $block['link']);
		 				$link_text ="Learn more at ".$link_snippet;
		 				echo '<a class="c3xgm-about-link" href="'.$block['link'].'">'.$link_text.'</a>'; 
		 			}

		 			// IMAGE
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
		 		echo '</div>'; // END MODULE BLOCK
		 		}
		 	echo '</div>'; // END MODULE CONTAINER

		 // CLOSE OUT HALF DIV 
		 echo '</div>'; 
		}
	echo '</div>'; // END MODULE
	}

<?php
// MAIN NAVIGAIOTN
?>
<div class="c3xgm-about-clearfix c3xgm-about-main-nav-container">
	<ul class="c3xgm-about-clearfix c3xgm-about-main-nav">
	<?php
		// PRINT NAV BULLETS 
		foreach ($pages as $key => $page) {
			if(isset($page['id'])) { $href = $page['id']; } else {$href = cleanString($page['title']); }
			// FIRST NAV BULLET IS ACTIVE BY DEFAULT
			if($key == 0) { $active_state = 'c3xgm-about-nav-bullet c3xgm-about-nav-bullet-active'; } else { $active_state = 'c3xgm-about-nav-bullet';}
			echo '<li><a href="#c3xgm-about-page-'.$href.'" class="'.$active_state.'"></a>';
				if( isset($page['sections']) ) {
					echo '<ul class="c3xgm-about-clearfix c3xgm-about-main-nav-sub">';
						foreach ($page['sections'] as $key => $section) {
							if(isset( $section['id'])) { $href =  $section['id']; } else {$href = cleanString( $section['title']); }
							if($key == 0) { $active_state = 'c3xgm-about-nav-bullet c3xgm-about-nav-bullet-active'; } else { $active_state = 'c3xgm-about-nav-bullet';}
						echo '<li><a href="#c3xgm-about-page-'.$href.'" class="'.$active_state.'"></a>';
						}
					echo '</ul>';
				}
			echo '</li>';
		}
	?>
	</ul>
</div>
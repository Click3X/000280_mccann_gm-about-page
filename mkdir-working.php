<?php include('php/functions.php'); ?>
<?php include('php/functions-layout.php'); ?>
<?php include('php/data.php'); ?>
<?php 

// PAGE VARS
$doc_width = 905;
$ab_center = "position: absolute; top:0; left:0; right:0; bottom:0; margin: auto;";

$cdir = getcwd();
// ITERATE THROUGH PAGEES ARRAY
mkdir($cdir."/php-styles", 0777, true);

foreach ($pages as $key => $page) {
    
        // helper($page);
        $dir_name = $cdir."/php-styles/".cleanString($page['title'])."/blocks";
        mkdir($dir_name, 0777, true);
        
        // BLOCKS
        if( isset($page['blocks']) ) {
            foreach ($page['blocks'] as $key => $block) {
                $class = classPrefix( cleanString($block['class']) );
                // $file_name =$dir_name."/_".cleanString($block['title']) .".scss";
                $file_name =$dir_name."/_".cleanString($block['title']) .".scss";
                
                $file_handle = fopen($file_name, "w");
                // print('Wrote new file: '.$file_name);

                $stringData = $class." {\n";
                    if( isset($block['image']) && ($block['image'] != "") ) {
                        // GET IMAGE DIMENSIONS
                        list($width, $height, $type, $attr) = getimagesize($block['image']);
                        $padding_bottom = ($height/$width)* 100;;
                        $width = ($width/$doc_width) * 100;
                        // PRINT CLASS DATA
                        $stringData = $stringData ."\t.c3xgm-about-block-image {
                            width:".$width."%;
                            padding-bottom:".$padding_bottom."%;
                            position: relative;
                            img {".$ab_center."} 
                        }\n";
                     }
                    
                $stringData = $stringData ."}\n\n";

                fwrite($file_handle, $stringData);
                fclose($file_handle);
                // if( isset($block['type']) && ($block['type'] == "decorative") ) {
                //     // DECORATIVE
                //     // printDecorative($block);

                // } else {
                //     // printBlock($block);
                // }
            }

            
        }

        // SECTIONS
        if( isset($page['sections']) ) {
            foreach ($page['sections'] as $key => $section) {
                
                // SECTION HEADER
                // subSectionHeader($section['title'], $section['tagline']);

                 // MODULES
                if( isset($section['module']) ) {
                    // printModule($section['module']);
                }

                // SECTION BLOCKS
                if( isset($section['blocks']) ) {
                    foreach ($section['blocks'] as $key => $block) {
                        
                        if( isset($block['type']) && ($block['type'] == "decorative") ) {
                        
                            // DECORATIVE
                            // printDecorative($block);

                        } else {
                            // printBlock($block);
                        }
                    }
                }
            }
        }
        // END SECTION CONTAINER

    // END PAGE CONTAINER
}
?>
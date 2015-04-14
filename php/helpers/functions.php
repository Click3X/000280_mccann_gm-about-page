<?php // FUNCTIONS

// CHARLES HELPER FUNCTIONS
function helper($var) {
	$type = gettype ( $var );
	echo '<h2>Var is type: '.$type.'.</h2>';

	if($type == 'array') {
	echo '<pre>'.print_r($var).'</pre>';  
	} elseif($type == 'object') {
	echo '<pre>'.var_dump($var).'</pre>';  
	} elseif( ($type == "string") || ($type == "integer") ) {
	echo '<h2>'.$var.'</h2>';
	}
}


// FORMAT STRING FOR CLASS AND ID HOOKS
function cleanString($string){
	$search = '/[^[:alpha:]]/';
	$space = array("?","!",",",";", " ");
	$replace = '-';
	$newString = str_replace($search, $replace, $string);
	$newString = strtolower($newString);
	$newString = str_replace($space, $replace, $newString);
	$newString = str_replace('&amp;', '', $newString);
	$newString = str_replace('&', '', $newString);

	return $newString;
}


// TEST FOR ASSOCIATIVE ARRAY
function isAssoc($arr) {
    return array_keys($arr) !== range(0, count($arr) - 1);
}

// CLASS PREFIX	
function classPrefix($class) {
	return ".c3xgm-about-".$class;
}

?>
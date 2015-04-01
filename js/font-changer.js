// GET VIEWPORT
jQuery(document).ready(function($) { 
	var fonts = [12.9088582992554, 4.03401830544375, 36.5199],
	    // rat = 0.11046075,
	    // ptRat = 1.5185;
	    rat = 0.11046075,
	    // ptRat = 1.70165975;
	    // ptRat = 0.81252592;
	    // ptRat = 0.48630705;
	    ptRat = 1.144393834;

	$.each(fonts, function(i) {
	    // console.log('This is px: '+ fonts[i] * ptRat* 0.81  + ', and px: ' + fonts[i]*ptRat * rat * 0.81 );
	    console.log('This is px: '+ fonts[i] * ptRat);
	});
});
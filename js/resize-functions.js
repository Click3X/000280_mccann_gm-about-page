//RESIZE FUNCITONS
function resizeCarModules($carModules) {
	var $carModules = $carModules,
		maxHeight;

	console.dir($carModules);

	$.each($carModules, function() {
		var imgWidth, imgHeight, imgE;
		var img = $(this).find('img');
		if(img) {
			imgE = $(this).find('img').get(0);
			if(imgE) {
				// console.dir(imgE);
				imgWidth = imgE.width;
				imgHeight = imgE.height;

			}
		}
		
	});

	// maxHeight = Math.max.apply(null,$carModules.map(function () {
	// 	console.log('Here is height: ' + $(this).height() );
 //        return $(this).height();
 //    }).get());

 //   $carModules.each(function() {
 //        $(this).height(maxHeight);
 //    })

}

jQuery(document).ready(function($) { 
	var $carModules = $('.c3xgm-about-module-car .c3xgm-about-module');



	resizeCarModules($carModules);
	

});
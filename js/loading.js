$(document).ready(function(){

	// var Pages = $('#c3xgm-about-page-container > .c3xgm-about-page, .c3xgm-about-animated-box span, .c3xgm-about-animated-box img');
	var Pages = $('#c3xgm-about-page-container > .c3xgm-about-page, .c3xgm-about-animated-box');
		// Blocks = $('.c3xgm-about-block');
	
	// ourPeople.addClass('invisible');
	Pages.addClass('invisible');
	// Blocks.addClass('invisible');

	Pages.viewportChecker({
	// ourPeople.viewportChecker({
        // classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        classToAdd: 'visible animated', // Class to add to the elements when they are visible
        offset: 100
    }); 
	
});

// function init() {
	
// 	// start up after 2sec no matter what
//     window.setTimeout(function(){
//         start();
//     }, 2000);
// }

// // fade in experience
// function start() {
	
// 	$('body').removeClass("loading").addClass('loaded');
	
// }

// $(window).load(function() {
	
// 	// fade in page
// 	init();

	
// });
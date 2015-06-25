// OUR PEOPLE ANIMATIONS
jQuery(document).ready(function($) { 
	console.log('This is OUR PEOPLE NUMBER ANIMATIONS js!');

    // CHECK IF ANIMATED EMPLOYEES IN ON SCREEN
    var current_frame, total_frames, path, length, handle;

    var init = function() {
      current_frame = 0;
      total_frames = 480;
      path = new Array();
      length = new Array();

      // ITERATE THROUGH PATHS
      for(var i=0; i< 12 ;i++){
        // GET PATH
        path[i] = document.getElementById('i'+i);

        // GET PATH LENGTH
        l = path[i].getTotalLength();
        // ADD TO LENGTH ARRAY
        length[i] = l;

        // CSS PROPERTIES THAT WE ARE ANIMATING
        path[i].style.strokeDasharray = l + ' ' + l; 
        path[i].style.strokeDashoffset = l;
      }
      handle = 0;
    }
     
     
    var draw = function() {
       var progress = current_frame/total_frames;
       if (progress > 1) {

            // window.cancelAnimationFrame(handle);
            clearTimeout(handle);

       } else {
         current_frame++;
         for(var j=0; j<path.length;j++){
             path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
         }
         
         // handle = window.requestAnimationFrame(draw);

         handle = setTimeout(function(){
            draw();
         }, 60/1000);

       }
    };
    
    var animateEmployees = false;
    function fireAnimatedEmployees() {
          if(animateEmployees === false) {
            // EMPTY TEXT
            $('#c3xgm-about-emp-num').text('');

            // TRIGGER NUMBER ANIMATION
            $('#c3xgm-about-emp-num').jQuerySimpleCounter({end: 216000,duration: 2500});

            // MAKE SURE NUMBER REACHES 216000
            setTimeout(function(){ 
                $('#c3xgm-about-emp-num').text(formatNumber(216000));
            }, 2500);

            // TRIGGER PEOPLE ANIMATION
            $('#c3xgm-about-employees-img div').each(addAnimation);
            animateEmployees = true;
        }
    }


    var animate6 = false;
    function fireAnimate6() {          
          if(animate6 === false) {
            // EMPTY TEXT
            $('#c3xgm-about-number-6').text('');
          // // TRIGGER NUMBER ANIMATION
            setTimeout(function(){ 
                init();
                draw();
                $('#c3xgm-about-number-6').jQuerySimpleCounter({start:0, end: 6,duration: 1000});
                animate6 = true;
            }, 800);
        }
    }

    var animate23 = false;
    function fireAnimate23() {
          if(animate23 === false) {
            // EMPTY TEXT
            $('#c3xgm-about-number-23').text('');
          // // TRIGGER NUMBER ANIMATION
            setTimeout(function(){ 
                $('#c3xgm-about-number-23').jQuerySimpleCounter({start:0, end: 23,duration: 1200});
                animate23 = true;
            }, 600);
        }
    }

    var animate70 = false;
    function fireAnimate70() {
          if(animate70 === false) {
            // EMPTY TEXT
            $('#c3xgm-about-number-70').text('');
          // // TRIGGER NUMBER ANIMATION
            setTimeout(function(){ 
                $('#c3xgm-about-number-70').jQuerySimpleCounter({start:0, end: 70,duration: 1200});
                animate70 = true;
            }, 600);
        }
    }

    var animate63 = false;
    function fireAnimate63() {
          if(animate63 === false) {
            // EMPTY TEXT
            $('#c3xgm-about-number-63').text('');
          // // TRIGGER NUMBER ANIMATION
            setTimeout(function(){ 
                $('#c3xgm-about-number-63').jQuerySimpleCounter({start:40, end: 63,duration: 900});
                animate63 = true;
            }, 800);
        }
    }
});
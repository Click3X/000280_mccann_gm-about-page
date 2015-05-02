// HELPERS JS
console.log('This is helpers js!');

// CONSOLE HELPER FUNCTION FOR QUICK DEBUGGING
function cd(myVar) {
    console.log('THis is ' + myVar + ': ');
    console.log('THis is ' + myVar + ': ' + typeof(myVar) );
    console.dir(myVar);
}

// FORMAT NUMBER
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}


// DISABLE HOVER ON SCROLL SCROLL
var body = document.body,
timer;

window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
    }

    timer = setTimeout(function(){
        body.classList.remove('disable-hover')
    }, 90);
}, false);
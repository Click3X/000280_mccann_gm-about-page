/*------------------------------------------
------------- GLOBAL VARIABLES ------------- 
------------------------------------------*/
var c3xgm_about = {};

c3xgm_about.padding					= 0;
c3xgm_about.sections 				= [];
c3xgm_about.currentsectionindex 	= 0;
c3xgm_about.currentDeltaY 			= 0;
c3xgm_about.isscrolling				= false;
c3xgm_about.touch 					= ('ontouchstart' in document.documentElement);
c3xgm_about.scroll_delay 			= c3xgm_about.touch ? 300 : 900;

/*------------------------------------------
----------------- CLASSES ------------------ 
------------------------------------------*/
SubNavigationButton = function(_id){
	var t = this;
	t.id = _id;
}

NavigationButton = function(_id, _labelval){
	var t = this;
	t.id = _id;
	t.labelval = _labelval;
	t.subnavbuttons = [];

	t.el = document.createElement( "li" );
	t.el.setAttribute( "data-id", _id );

	if(c3xgm_about.touch) $(t.el).addClass( "touch" );

	var label = document.createElement( "label" ),
	labelinner = document.createElement("span"),
	txt = document.createTextNode( _labelval );

	t.subnavul = document.createElement("ul");
	t.subnavul.className = " c3xgm-about-subnav";

	labelinner.appendChild(txt);
	label.appendChild(labelinner);
	t.el.appendChild(label);
	t.el.appendChild(t.subnavul);

	t.addsubsectionbutton = function(_id){
		var button = new NavigationButton( _id, "test" );

		t.subnavbuttons.push( button );
		t.subnavul.appendChild( button.el );

		button.click(function(){
			$( t.el ).trigger( "buttonclicked", this );
		});
	}

	t.activate = function(){
		if( !$(t.el).hasClass( "active" ) )
			$(t.el).addClass( "active" );
	}

	t.deactivate = function(){
		$(t.el).removeClass( "active" );
	}

	t.click = function(_callback){
		if( c3xgm_about.touch )
			t.el.addEventListener( "touchstart", _callback, true );
		else
			$(t.el).click( _callback ); 
	}
}

Navigation = function(_el){
	var t 		= this;
	t.el 		= _el;
	t.buttons 	= [];

	t.addsectionbutton = function(_id, _labelval){
		var button = new NavigationButton( _id, _labelval );

		t.buttons.push( button );
		t.el.appendChild( button.el );

		t.updateheight();

		button.click(function(){
			$( t.el ).trigger( "buttonclicked", this );
		});
	}

	t.addsubsectionbutton = function(_sectionid, _id){
		t.buttons[_sectionid].addsubsectionbutton(_id);
	}

	t.deacivateall = function(){
		$.each(t.buttons, function(k,v){
			v.deactivate();
		});
	}

	t.activatebutton = function(_index){
		t.deacivateall();

		t.buttons[_index].activate();
	}

	t.onbuttonclicked = function(_callback){
		$(t.el).on("buttonclicked", _callback);
	}

	t.updateheight = function(){
		t.el.style.marginTop = "-" + ( t.el.offsetHeight*.5 )+ "px";
	}
}

Section = function(_id, _el, _height, _navigation){
	var t = this;

	t.id 							= _id;
	t.currentsubsection 			= 0;
	t.el 							= _el;
	t.subsection_ul 				= $(t.el).children("ul")[0];
	t.subsections 					= $(t.subsection_ul).children("li.c3xgm-about-subsection");

	t.el.style.height = _height;

	_navigation.addsectionbutton( t.id, t.el.getAttribute("data-navigation-label") );

	t.subsection_ul.style.width = (t.subsections.length*100) + "%";
	for(var i = 0; i<t.subsections.length; i++){
		t.subsections[i].style.width = (100/t.subsections.length) + "%";

		_navigation.addsubsectionbutton(_id,i);
	}

	t.islastsubsection = function(){
		return t.currentsubsection == t.subsections.length-1;
	}

	t.gotosubsection = function(_index){
		t.subsection_ul.style.left = "-" + (t.currentsubsection*100) + "%";
	}

	t.nextsubsection = function(){
		if( t.islastsubsection() ){
			return false;
		} else {
			t.currentsubsection++
			t.gotosubsection( t.currentsubsection );
		}
	}

	t.previoussubsection = function(){
		if(t.currentsubsection == 0){
			return false;
		} else {
			t.currentsubsection--;
			t.gotosubsection( t.currentsubsection );
		}
	}
}

/*------------------------------------------
----------------- DOM READY ------------------ 
------------------------------------------*/
$(function(){
    c3xgm_about.inner 					= $("#c3xgm-about-inner")[0];
    c3xgm_about.container 				= $("#c3xgm-about-content")[0];
    c3xgm_about.navigation 				= new Navigation( $("#c3xgm-about-nav")[0] );

    var section_els 					= c3xgm_about.inner.querySelectorAll(".c3xgm-about-section");

    c3xgm_about.inner.style.height = (section_els.length*100) + "%";

    for(var i = 0; i<section_els.length; i++){
    	c3xgm_about.sections.push( new Section( i, section_els[i], (100/section_els.length) + "%",c3xgm_about.navigation ) );
    }

    c3xgm_about.currentsection	= c3xgm_about.sections[c3xgm_about.currentsectionindex];

    if(c3xgm_about.container.addEventListener) {
        c3xgm_about.container.addEventListener("mousewheel", onmousewheel, false);
        c3xgm_about.container.addEventListener("DOMMouseScroll", onmousewheel, false);
    } else c3xgm_about.container.attachEvent("onmousewheel", onmousewheel);

    c3xgm_about.navigation.onbuttonclicked( navbuttonclicked );

    if(c3xgm_about.touch){
	    document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false);

	    c3xgm_about.container.addEventListener("touchstart", ontouchstart, false);
	    c3xgm_about.container.addEventListener("touchend", ontouchend, false);
	}

	scrolltosection(0);
});

/*------------------------------------------
------------- EVENT HANDLERS --------------- 
------------------------------------------*/
function navbuttonclicked(e, li){
	scrolltosection( parseInt( li.getAttribute("data-id") ) );
}

function onmousewheel(e) {
	if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();

    var e = window.event || e;
    var delta = e.wheelDeltaY || -e.detail || e.wheelDelta;
    var dir = delta > 0 ? 1 : -1;
    var dist = delta;

    if(e.detail) dist = dist*2;
    if(e.wheelDelta) dist = dist*.3;

    if(!c3xgm_about.isscrolling && Math.abs(dist) > 10){
	    doscroll(dir);
	}

    return false;
}

function ontouchstart(e){
	if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();

	c3xgm_about.touchstarty = e.changedTouches[0].clientY;
}

function ontouchend(e){
	if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();

	var delta = e.changedTouches[0].clientY - c3xgm_about.touchstarty;
	var dir = delta > 0 ? 1 : -1;

	doscroll(dir);

	return false;
}

/*------------------------------------------
------------- SECTION FUNCTIONS ------------- 
------------------------------------------*/
function doscroll(_direction){
	c3xgm_about.isscrolling = true;

	if(_direction < 0){
		if( c3xgm_about.currentsection.nextsubsection() == false ){
			nextsection();
		} else {
			initendscroll();
		}
	} else {
		if( c3xgm_about.currentsection.previoussubsection() == false ){
			previoussection();
		} else {
			initendscroll();
		}
	}
}

function nextsection(){
	if(c3xgm_about.currentsectionindex < c3xgm_about.sections.length-1){
		c3xgm_about.currentsectionindex++;

		scrolltosection(c3xgm_about.currentsectionindex);
	} else {
		endscroll();
	}
}

function previoussection(){
	if(c3xgm_about.currentsectionindex > 0){
		c3xgm_about.currentsectionindex--;

		scrolltosection( c3xgm_about.currentsectionindex );
	} else {
		endscroll();
	}
}

function scrolltosection(_index){
	c3xgm_about.currentsectionindex = _index;
	c3xgm_about.currentsection = c3xgm_about.sections[c3xgm_about.currentsectionindex];

	c3xgm_about.inner.style.top = "-" + (c3xgm_about.currentsectionindex*100) + "%";

	c3xgm_about.navigation.activatebutton(_index);

	initendscroll();
}

function initendscroll(){
	clearTimeout(c3xgm_about.endto);
	c3xgm_about.endto = setTimeout(endscroll, c3xgm_about.scroll_delay );
}

function endscroll(){
	c3xgm_about.isscrolling = false;
}

/*------------------------------------------
------------------- TOOLS ------------------ 
------------------------------------------*/

/*-----add console log if needed----- */
if( typeof console == "undefined" ) {
    window.console = { log:function(){} };
}
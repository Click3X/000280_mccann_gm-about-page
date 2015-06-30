// BACK STREET BOYS DEMO INSPRIRED SCROLL SCRIPTS
// TEST FOR 3D TRANSFORMS - for IE
  var css3dtransforms;
  
  if( $('html').hasClass('no-csstransforms3d') ) {
      css3dtransforms = false;
  }

  // var _containerHeight = 4000;
  var _containerHeight = $(document).height();
  var _width = window.innerWidth;

  var _height, _scrollHeight;
  var _movingElements = [];
  var _scrollPercent = 0;
  var pre = prefix();
  var _jsPrefix  = pre.lowercase;
  if(_jsPrefix == 'moz') _jsPrefix = 'Moz'
  var _cssPrefix = pre.css;
  var _positions = [
    {
      name: 'c3xgm-about-red-car', 
      start: {
        percent: getElemOffest('#c3xgm-about-red-car') - 0.1,
        x: 1, 
        y:0
      },
      end: {
        percent: getElemOffest('#c3xgm-about-red-car') + 0.05, 
        x: -1, 
        y:0
      }
    },
    {
      name: 'c3xgm-about-flag-line-grey-car',
      start: {
        percent: getElemOffest('#c3xgm-about-flag-line-grey-car') - 0.05, 
        x: -0.17, 
        y:0
      },
      end: {
        percent: getElemOffest('#c3xgm-about-flag-line-grey-car') + 0.05, 
        x: 1.1, 
        y:0
      }
    },
    {
      name: 'c3xgm-about-grey-top',
      start: {
        percent: getElemOffest('#c3xgm-about-grey-van') - 0.028,
        x:-0.2, 
        y:0
      },
      end: {
        percent: getElemOffest('#c3xgm-about-grey-van') + 0.085,
        x: 1.1, 
        y:0
      }
    },
    {
      name: 'c3xgm-about-solar-road-grey-car',
      start: {
        percent: getElemOffest('#c3xgm-about-solar-road-grey-car') + 0.01, 
        // x:-0.12, 
        x:-0.2, 
        y:0
      },
      end: {
        percent: getElemOffest('#c3xgm-about-solar-road-grey-car') + 0.09,
        x:1.17, 
        y:0
      }
    }
  ];

  function getElemOffest(elemId) {
    return jQuery(elemId).offset().top / _containerHeight;
  }


  function initMovingElements() {
    for (var i = 0; i < _positions.length; i++) {
      _positions[i].diff = {
        percent: _positions[i].end.percent - _positions[i].start.percent,
        x: _positions[i].end.x - _positions[i].start.x,
        y: _positions[i].end.y - _positions[i].start.y,
      }
      _positions[i].target = {};
      _positions[i].current = {};
      var el = document.getElementsByClassName(_positions[i].name)[0];
      _movingElements.push(el);
    }
  }

  function resetWidth() {
    _containerHeight = $(document).height();
  }

  function resize() {
    _width = window.innerWidth;
    _height = window.innerHeight;
    resetWidth();
    _scrollHeight = _containerHeight-_height;
  }

  function updateElements() {
    for (var i = 0; i < _movingElements.length; i++) {
      var p = _positions[i];

      // console.log('This is _scrollPercent' + _scrollPercent);
      // console.log('This is _scrollOffset' + _scrollOffset);
      // console.log('This is _scrollHeight' + _scrollHeight);
       

      if(_scrollPercent <= p.start.percent) {
        p.target.x = p.start.x*_width;
        p.target.y = p.start.y*_containerHeight;
      } else if(_scrollPercent >= p.end.percent) {
        p.target.x = p.end.x*_width;
        p.target.y = p.end.y*_containerHeight;
      } else {
        p.target.x = p.start.x*_width + (p.diff.x*(_scrollPercent-p.start.percent)/p.diff.percent*_width);
        p.target.y = p.start.y*_containerHeight + (p.diff.y*(_scrollPercent-p.start.percent)/p.diff.percent*_containerHeight);
      }
      
      // lerp
      if(!p.current.x) {
        p.current.x = p.target.x;
        p.current.y = p.target.y;
      } else {
        p.current.x = p.current.x + (p.target.x - p.current.x)*0.3;
        p.current.y = p.current.y + (p.target.y - p.current.y)*0.3;
      }
      _movingElements[i].style[_jsPrefix+'Transform'] = 'translate3d('+p.current.x+'px, '+
          p.current.y+'px, 0px)';
    }
  }



  function loop() {
    _scrollOffset = window.pageYOffset || window.scrollTop;
    _scrollPercent = _scrollOffset/_scrollHeight || 0;
    updateElements();
    
    requestAnimationFrame(loop);
  }


  window.addEventListener('resize', resize);

  /* prefix detection http://davidwalsh.name/vendor-prefix */

  function prefix() {
    var styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('') 
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    };
  }



if(mobile) {
  // console.log('We have mobile from B s boys script AND WE AINT GIVIN NO SCROLL TIED ANIMATIONS');
} else {
  // console.log('NO MOHILE from B s boys script');
  // ONLY SCROLL ANIMATIONS FOR DESKTOP

  resetWidth();
  resize();
  initMovingElements();

  loop();

}
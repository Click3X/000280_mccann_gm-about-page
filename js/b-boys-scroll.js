// BACK STREET BOYS DEMO INSPRIRED SCROLL SCRIPTS
var _containerHeight = 4000,
  _width = window.innerWidth,
  _height, _scrollHeight,
  _movingElements = [],
  _scrollPercent = 0,
  pre = prefix(),
  _jsPrefix  = pre.lowercase,
  _cssPrefix = pre.css;

if(_jsPrefix == 'moz') _jsPrefix = 'Moz';

var _positions = [
  {
    name: 'c3xgm-about-red-car', 
    start: {
      // percent: 0.7, 
      percent: getElemOffest('#c3xgm-about-red-car') * 0.88, 
      x: 1.2, 
      y:0
    },
    end: {
      percent: getElemOffest('#c3xgm-about-red-car') + 0.3, 
      x: -0.5, 
      y:0
    }
  },
  {
    name: 'c3xgm-about-flag-line-grey-car',
    start: {
      percent: getElemOffest('#c3xgm-about-flag-line-grey-car'), 
      x: 0.1, 
      y:0
    },
    end: {
      percent: getElemOffest('#c3xgm-about-flag-line-grey-car') + 0.4, 
      x: 0.9, 
      y:0
    }
  },
  {
    name: 'animate-flag-line-js',
    start: {
      percent: getElemOffest('#animate-flag-line'), 
      x: -0.5, 
      y:0
    },
    end: {
      percent: getElemOffest('#animate-flag-line') + 0.6,
      x: -1.2, 
      y:0
    }
  },
  {
    name: 'c3xgm-about-grey-top',
    start: {
      percent: getElemOffest('#c3xgm-about-grey-top') * 1.1, 
      x:0.1, 
      y:0
    },
    end: {
      percent: getElemOffest('#c3xgm-about-grey-top') * 1.1 + 0.29,
      x: 1.1, 
      y:0
    }
  },
  {
    name: 'c3xgm-about-solar-grey-car',
    start: {
      percent: getElemOffest('#c3xgm-about-solar-grey-car') * 1.17, 
      x:0.1, 
      y:0
    },
    end: {
      percent: getElemOffest('#c3xgm-about-solar-grey-car') * 1.17 + 0.3,
      x:0.75, 
      y:0
    }
  }
];

resetWidth();
resize();
initMovingElements();

function getElemOffest(elemId) {
  return jQuery(elemId).offset().top / _containerHeight;
}

function resetWidth() {
  if(_width > 906) {
    _containerHeight = 4000;
  } else {
    _containerHeight = window.innerWidth * 4.415;
  }
}

function resize() {
  _width = window.innerWidth;
  _height = window.innerHeight;
  resetWidth();
  _scrollHeight = _containerHeight-_height;
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

function updateElements() {
  for (var i = 0; i < _movingElements.length; i++) {
    var p = _positions[i];
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

loop();

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

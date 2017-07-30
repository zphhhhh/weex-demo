
console.log('START WEEX VUE RENDER: 0.11.57, Build 2017-07-14 11:11.');
window._jslib_init_start = window.performance && window.performance.now && window.performance.now() || +new Date();


(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.WeexVueRender = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
  return returnValue;
}
__$styleInject(".weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role=\"button\"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n\n/* show no scroll bar. */\n::-webkit-scrollbar {\n  display: none;\n}\n",undefined);

__$styleInject(".weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.weex-ct {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\nbody > .weex-list,\nbody > .weex-scroller,\nbody > .weex-waterfall {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper,\n.weex-waterfall-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper,\n.weex-waterfall-wrapper {\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n}\n\n.weex-list-inner,\n.weex-scroller-inner,\n.weex-waterfall-inner {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-waterfall-inner-columns {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.weex-ios-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.weex-fixed {\n  position: fixed;\n  z-index: 1;\n}\n\n.weex-sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n",undefined);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, false, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      // fire click, not tap.
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function(it){
  if(!isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject       = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive    = _toPrimitive;
var dP$1             = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var dP         = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global    = _global
  , hide      = _hide
  , has       = _has
  , SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ has(val, 'name') || hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var global$1    = _global;
var core      = _core;
var hide      = _hide;
var redefine  = _redefine;
var ctx       = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target){ redefine(target, key, out, type & $export$1.U); }
    // export
    if(exports[key] != out){ hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function(it){
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function(it){
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength  = _toLength;
var toIndex   = _toIndex;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$1($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var global$2 = _global;
var SHARED = '__core-js_shared__';
var store  = global$2[SHARED] || (global$2[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var shared = _shared('keys');
var uid    = _uid;
var _sharedKey = function(key){
  return shared[key] || (shared[key] = uid(key));
};

var has          = _has;
var toIObject    = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function(it){
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = _objectKeys;
var gOPS     = _objectGops;
var pIE      = _objectPie;
var toObject = _toObject;
var IObject  = _iobject;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments$1[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', {assign: _objectAssign});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , uid        = _uid
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
var ARG = cof$1(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2   = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$2(that))
      , i = toInteger$2(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = false;

var _iterators = {};

var dP$2       = _objectDp;
var anObject$2 = _anObject;
var getKeys$1  = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$2(O);
  var keys   = getKeys$1(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1    = _anObject;
var dPs         = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$2 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$2(it = stat ? it : it.prototype, TAG$1)){ def(it, TAG$1, {configurable: true, value: tag}); }
};

var create$1         = _objectCreate;
var descriptor     = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create$1(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$3         = _has;
var toObject$1    = _toObject;
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$3(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY        = _library;
var $export$2        = _export;
var redefine$1       = _redefine;
var hide$1           = _hide;
var has$1            = _has;
var Iterators      = _iterators;
var $iterCreate    = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has$1(IteratorPrototype, ITERATOR)){ hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto  = Array.prototype;
if(ArrayProto[UNSCOPABLES] == undefined){ _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

var addToUnscopables = _addToUnscopables;
var step             = _iterStep;
var Iterators$2        = _iterators;
var toIObject$2        = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  ){ return step(0, index); }
  if(kind == 'values'){ return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators    = es6_array_iterator;
var redefine$2      = _redefine;
var global$3        = _global;
var hide$2          = _hide;
var Iterators$1     = _iterators;
var wks           = _wks;
var ITERATOR$1      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators$1.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global$3[NAME]
    , proto      = Collection && Collection.prototype
    , key;
  if(proto){
    if(!proto[ITERATOR$1]){ hide$2(proto, ITERATOR$1, ArrayValues); }
    if(!proto[TO_STRING_TAG]){ hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    for(key in $iterators){ if(!proto[key]){ redefine$2(proto, key, $iterators[key], true); } }
  }
}

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3  = _iterators;
var ITERATOR$2   = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2   = _classof;
var ITERATOR$3  = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx         = _ctx
  , call        = _iterCall
  , isArrayIter = _isArrayIter
  , anObject    = _anObject
  , toLength    = _toLength
  , getIterFn   = core_getIteratorMethod
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn)){ for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4  = _anObject;
var aFunction$2 = _aFunction;
var SPECIES   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject$4(O).constructor, S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var ctx$2                = _ctx;
var invoke             = _invoke;
var html               = _html;
var cel                = _domCreate;
var global$5             = _global;
var process$1            = global$5.process;
var setTask            = global$5.setImmediate;
var clearTask          = global$5.clearImmediate;
var MessageChannel     = global$5.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$1) == 'process'){
    defer = function(id){
      process$1.nextTick(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$5.addEventListener && typeof postMessage == 'function' && !global$5.importScripts){
    defer = function(id){
      global$5.postMessage(id + '', '*');
    };
    global$5.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var global$6    = _global;
var macrotask = _task.set;
var Observer  = global$6.MutationObserver || global$6.WebKitMutationObserver;
var process$2   = global$6.process;
var Promise$1   = global$6.Promise;
var isNode$1    = _cof(process$2) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$2.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$6, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var redefine$3 = _redefine;
var _redefineAll = function(target, src, safe){
  for(var key in src){ redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7      = _global;
var dP$3          = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = global$7[KEY];
  if(DESCRIPTORS && C && !C[SPECIES$1]){ dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

var ITERATOR$4     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$4]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$4] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

var LIBRARY$1            = _library;
var global$4             = _global;
var ctx$1                = _ctx;
var classof$1            = _classof;
var $export$3            = _export;
var isObject$3           = _isObject;
var aFunction$1          = _aFunction;
var anInstance         = _anInstance;
var forOf              = _forOf;
var speciesConstructor = _speciesConstructor;
var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = global$4.TypeError;
var process            = global$4.process;
var $Promise           = global$4[PROMISE];
var process            = global$4.process;
var isNode             = classof$1(process) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$1(resolve);
  this.reject  = aFunction$1(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(global$4, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global$4.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$4.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$4, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global$4.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject  = ctx$1($reject, promise, 1);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var event$1 = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url;
  }

};

var meta = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var event$2 = {
  init: function (Weex) {
    Weex.registerApiModule('event', event$1, meta);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch (watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    else {
      console.warn(errorMsg);
    }
  }
};

var meta$1 = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var geolocation$1 = {
  init: function init (Weex) {
    Weex.registerApiModule('geolocation', geolocation, meta$1);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var pageInfo = {

  setTitle: function (title) {
    title = title || 'Weex HTML5';
    try {
      title = decodeURIComponent(title);
    }
    catch (e) {}
    document.title = title;
  }
};

var meta$2 = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var pageInfo$1 = {
  init: function (Weex) {
    Weex.registerApiModule('pageInfo', pageInfo, meta$2);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* global localStorage */

var supportLocalStorage = typeof localStorage !== 'undefined';
var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value
   * @param {function} callbackId
   */
  setItem: function (key, value, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key || !value) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    }
    catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      sender.performCallback(callbackId, {
        result: FAILED,
        data: UNDEFINED
      });
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    var val = localStorage.getItem(key);
    sender.performCallback(callbackId, {
      result: val ? SUCCESS : FAILED,
      data: val || UNDEFINED
    });
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    localStorage.removeItem(key);
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: UNDEFINED
    });
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var len = localStorage.length;
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: len
    });
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var _arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      _arr.push(localStorage.key(i));
    }
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: _arr
    });
  }
};

var meta$3 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var storage$1 = {
  init: function (Weex) {
    Weex.registerApiModule('storage', storage, meta$3);
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"");},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname;},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));

var index$2 = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$4 = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject$2(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var strictUriEncode = index$2;
var objectAssign = index$4;

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);

				key = key.replace(/\[\]$/, '');

				if (!result || accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function (str) {
	return str.split('?')[1] || '';
};

var parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var index$1 = {
	extract: extract,
	parse: parse,
	stringify: stringify
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils;

var jsonpCnt = 0;
var ERROR_STATE = -1;

function _jsonp (config, callback, progressCallback) {
  var cbName = 'jsonp_' + (++jsonpCnt);
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = (function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    }
  })(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  }
  catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
      + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = (function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    }
  })(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr (config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n')
        .reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj
        }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n')
          .reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj
          }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body || null);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function (param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      }
      catch (e) {
        return
      }
    }
    if (typeof param !== 'object' || !param.url) {
      return console.error(
        '[h5-render] invalid config or invalid config.url for sendHttp API')
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error)
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function (options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to '
        + 'default value \'' + config.method + '\'');
    }
    else if (methodOptions.indexOf((config.method + '')
        .toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \''
        + config.method
        + '\' for \'fetch\' API should be one of '
        + methodOptions + '.')
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.')
    }

    // validate body content for method 'GET'.
    if (config.method.toUpperCase() === 'GET') {
      var body = config.body;
      if (utils.isPlainObject(body)) {
        body = index$1.stringify(body);
      }
      var url = config.url;
      var hashIdx = url.indexOf('#');
      hashIdx <= -1 && (hashIdx = url.length);
      var hash = url.substr(hashIdx);
      hash && (hash = '#' + hash);
      url = url.substring(0, hashIdx);
      url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body + hash;
      config.url = url;
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    }
    else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \''
        + config.mode
        + '\' for \'fetch\' API should be one of '
        + modeOptions + '.')
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to '
        + 'default value \'' + config.type + '\'.');
    }
    else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \''
          + config.type
          + '\' for \'fetch\' API should be one of '
          + typeOptions + '.')
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object')
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    }
    else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$4 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var stream$1 = {
  init: function (Weex) {
    utils = Weex.utils;
    Weex.registerApiModule('stream', stream, meta$4);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

var clipboard = {

  getString: function (callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function (text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    }
    else {
      console.log('only support string input now');
    }
  }

};

function element () {
  var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
  if (!tempInput) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput
}

var meta$5 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var clipboard$1 = {
  init: function (Weex) {
    Weex.registerApiModule('clipboard', clipboard, meta$5);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

var toString$2 = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

var ARRAY_STRING = '[object Array]';
function isArray (arr) {
  return toString$2.call(arr) === ARRAY_STRING
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

/**
 * Mix properties into target object.
 * the rightest object's value has the highest priority.
 */
function extend (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}

/**
 * Mix truthy or '' property values into target object.
 * mostly for merging styles. (that's why '' is falsy but still should be counted in.)
 * the rightest object's value has the highest priority.
 */
function extendTruthy (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    var i;
    for (var key in from) {
      if (((i = from[key]) || i === '' || i === 0) && i !== 'undefined') {
        to[key] = i;
      }
    }
  });
  return to
}

/**
 * Mix specified properties into target object.
 */
function extendKeys (to, from, keys) {
  if ( from === void 0 ) from = {};

  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
  });
  return to
}

/**
 * Extract specified properties from src to target object.
 */
function extractKeys (to, from, keys) {
  if ( from === void 0 ) from = {};

  if (!from) { return to }
  (keys || []).forEach(function (key) {
    from && (to[key] = from[key]);
    from && (delete from[key]);
  });
  return to
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

/**
 * Only call the func the last time before it's not that frequently called.
 */
function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func the first time before a series frequently function calls happen.
 */
function depress (func, wait) {
  var timerId;
  function later () {
    timerId = null;
  }
  return function () {
    if (!timerId) {
      func.apply();
    }
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

/**
 * Only call the func every time after a wait milliseconds if it's too frequently called.
 */
function throttle (func, wait, callLastTime) {
  var last = 0;
  var lastTimer = null;
  var lastTimeDuration = wait + (wait > 25 ? wait : 25);  // plus half wait time.
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      if (callLastTime) {
        lastTimer && clearTimeout(lastTimer);
        lastTimer = setTimeout(function () {
          lastTimer = null;
          func.apply(context, args);
        }, lastTimeDuration);
      }
      func.apply(context, args);
      last = time;
    }
  }
}

// direction: 'l' | 'r', default is 'r'
// num: how many times to loop, should be a positive integer
function loopArray (arr, num, direction) {
  if (!isArray(arr)) {
    return
  }
  var isLeft = (direction + '').toLowerCase() === 'l';
  var len = arr.length;
  num = num % len;
  if (num < 0) {
    num = -num;
    isLeft = !isLeft;
  }
  if (num === 0) {
    return arr
  }
  var lp, rp;
  if (isLeft) {
    lp = arr.slice(0, num);
    rp = arr.slice(num);
  }
  else {
    lp = arr.slice(0, len - num);
    rp = arr.slice(len - num);
  }
  return rp.concat(lp)
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function extend$1 (to) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  if (!args || args.length <= 0) { return to }
  args.forEach(function (from) {
    if (typeof from !== 'object') { return }
    for (var key in from) {
      to[key] = from[key];
    }
  });
  return to
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createEvent (target, type, props) {
  var event = new Event(type, { bubbles: false });
  // event.preventDefault()
  // event.stopPropagation()

  extend$1(event, props);

  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  }
  catch (err) {
    return extend$1({}, event, { target: target || null })
  }

  return event
}

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
function createCustomEvent (target, type, props) {
  // compatibility: http://caniuse.com/#search=customevent
  // const event = new CustomEvent(type)
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(type, false, true, {});
  // event.preventDefault()
  // event.stopPropagation()

  extend$1(event, props);

  // event.target is readonly
  try {
    Object.defineProperty(event, 'target', {
      enumerable: true,
      value: target || null
    });
  }
  catch (err) {
    return extend$1({}, event, { target: target || null })
  }

  return event
}

/**
 * dispatch a event on a dom element.
 * @param  {HTMLElement} dom
 * @param  {Event} event
 */
function dispatchEvent (dom, event) {
  dom.dispatchEvent(event);
}

function mapFormEvents (context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var config = {
  scrollableTypes: ['scroller', 'list', 'waterfall']
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getParentScroller (vm) {
  if (!vm) { return null }
  if (vm._parentScroller) {
    return vm._parentScroller
  }
  function _getParentScroller (parent) {
    if (!parent) { return }
    if (config.scrollableTypes.indexOf(parent.weexType) > -1) {
      vm._parentScroller = parent;
      return parent
    }
    return _getParentScroller(parent.$parent)
  }
  return _getParentScroller(vm.$parent)
}

function hasIntersection (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

/**
 * isElementVisible
 * @param  {HTMLElement}  el    a dom element.
 * @param  {HTMLElement}  container  optional, the container of this el.
 */
function isElementVisible (el, container) {
  if (!el.getBoundingClientRect) { return false }
  var bodyRect = {
    top: 0,
    left: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
  };
  var ctRect = (container === document.body)
    ? bodyRect : container
    ? container.getBoundingClientRect() : bodyRect;
  return hasIntersection(
    el.getBoundingClientRect(),
    ctRect)
}

function isComponentVisible (component) {
  if (component.$el) {
    var scroller = getParentScroller(component);
    if (scroller && scroller.$el) {
      return hasIntersection(
        component.$el.getBoundingClientRect(),
        scroller.$el.getBoundingClientRect()
      )
    }
    else {
      return isElementVisible(component.$el)
    }
  }
  return false
}

// to trigger the appear/disappear event.
function triggerEvent (elm, handlers, isShow, dir) {
  var evt = isShow ? 'appear' : 'disappear';
  var listener = handlers[evt];
  if (listener && listener.fn) {
    listener = listener.fn;
  }
  if (listener) {
    listener(createEvent(elm, evt, {
      direction: dir
    }));
  }
}

/**
 * get all event listeners. including bound handlers in all parent vnodes.
 */
function getEventHandlers (context) {
  var vnode = context.$vnode;
  var handlers = {};
  var attachedVnodes = [];
  while (vnode) {
    attachedVnodes.push(vnode);
    vnode = vnode.parent;
  }
  attachedVnodes.forEach(function (vnode) {
    var parentListeners = vnode.componentOptions && vnode.componentOptions.listeners;
    var dataOn = vnode.data && vnode.data.on;
    extend(handlers, parentListeners, dataOn);
  });
  return handlers
}

/**
 * Watch element's visibility to tell whether should trigger a appear/disappear
 * event in scroll handler.
 */
function watchAppear (context) {
  var el = context && context.$el;
  if (!el) { return }

  var handlers = getEventHandlers(context);
  if (!handlers.appear && !handlers.disappear) {
    return
  }

  var isWindow = false;
  var container = window;
  var scroller = getParentScroller(context);
  if (scroller && scroller.$el) {
    container = scroller.$el;
  }
  else {
    isWindow = true;
  }

  // add current vm to the container's appear watch list.
  if (!container._watchAppearList) {
    container._watchAppearList = [];
  }
  container._watchAppearList.push(context);
  if (container._scrollWatched) { return }

  /**
   * Code below will only exec once for binding scroll handler for parent container.
   */
  container._scrollWatched = true;
  var scrollHandler = throttle(function (event) {
    /**
     * detect scrolling direction.
     * direction only support up & down yet.
     * TODO: direction support left & right.
     */
    var scrollTop = isWindow ? window.pageYOffset : container.scrollTop;
    var preTop = container._lastScrollTop;
    container._lastScrollTop = scrollTop;
    var dir = scrollTop < preTop
      ? 'down' : scrollTop > preTop
      ? 'up' : null;

    var watchAppearList = container._watchAppearList || [];
    var len = watchAppearList.length;
    for (var i = 0; i < len; i++) {
      var vm = watchAppearList[i];
      var visible = isElementVisible(vm.$el, isWindow ? document.body : container);
      detectAppear(vm, visible, dir);
    }
  }, 25, true);
  container.addEventListener('scroll', scrollHandler, false);
}

/**
 * trigger a appear event.
 */
function triggerAppear (context, visible) {
  if (!context || !context.$el) { return }
  if (!visible) {
    var container = document.body;
    var scroller = getParentScroller(context);
    if (scroller && scroller.$el) {
      container = scroller.$el;
    }
    visible = isElementVisible(context.$el, container);
  }
  return detectAppear(context, visible)
}

/**
 * trigger a disappear event.
 */
function triggerDisappear (context) {
  return detectAppear(context, false)
}

/**
 * decide whether to trigger a appear/disappear event.
 * @param {VueComponent} context
 * @param {boolean} visible
 * @param {string} dir
 */
function detectAppear (context, visible, dir) {
  if ( dir === void 0 ) dir = null;

  var el = context && context.$el;
  if (!el) { return }
  var handlers = getEventHandlers(context);
  if (!handlers[visible ? 'appear' : 'disappear']) { return }
  /**
   * if the component hasn't appeared for once yet, then it shouldn't trigger
   * a disappear event at all.
   */
  if (!visible && !context._appearedOnce) { return }
  if (!context._visible === visible) {
    if (!context._appearedOnce) {
      context._appearedOnce = true;
    }
    context._visible = visible;
    triggerEvent(el, handlers, visible, dir);
  }
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 
/**
 * @fileOverview: perf data recorder.
 */

// performance tracker for weex.
var perf = window._weex_perf = {
  earliestBeforeCreates: [],
  latestMounts: [],
  earliestBeforeUpdates: [],
  latestUpdates: [],
  latestRenderFinishes: [],
  createTime: [],
  updateTime: [],
  renderTime: [],
  entries: [],
  time: {},
  firstAllMountedTime: null,
  stat: {
    // info stat.
    connectionType: '',
    requestType: '',
    pageName: '',
    templateUrl: '',
    WXSDKVersion: '',
    bizType: '',
    JSLibVersion: '',
    // performance stat.
    screenRenderTime: 0,
    JSTemplateSize: 0,
    componentCount: 0,
    networkTime: 0,
    JSLibInitTime: 0,
    totalTime: 0
  }
};

var tmp = {};

var IMG_REC_INDENT = 500;  // record loading events after 500ms towards last recording.
var REGEXP_IMG_TYPE = /(.png|.jpg|.jpeg|.webp|.gif)$/;  // image file type regexp.

var earliestBeforeUpdateTime = 0;
var earliestBeforeCreateTime = 0;

var statCollected = false;
function collectStat () {
  if (statCollected) {
    return
  }
  statCollected = true;
  var version = window.weex.config.env.weexVersion;
  var protocol = location.protocol;
  extend(perf.stat, {
    connectionType: protocol.substring(0, protocol.length - 1),
    requestType: 'network',
    pageName: location.href,
    WXSDKVersion: version,
    bizType: 'weex',
    JSLibVersion: version
  });
  var performance = window.performance;
  // get templateUrl && JSTemplateSize
  var entries = performance && performance.getEntries && performance.getEntries();
  if (entries) {
    var params = window.lib.httpurl(location.href).params;
    var bundle = params.page || params._wx_tpl;
    if (bundle) {
      var len = entries.length;
      var i = 0;
      while (i < len) {
        var entry = entries[i];
        if (entry.entryType === 'resource'
          && entry.name.indexOf(bundle.replace(/^[./]+/, '')) > -1) {
          var res = extend({}, entry);
          extend(perf.stat, {
            templateUrl: res.name,
            JSTemplateSize: (res.transferSize / 1024).toFixed(2),
            networkTime: parseInt(res.duration)
          });
          break
        }
        i++;
      }
    }
  }
}

function collectStatPerf (name, val) {
  if (!name) { return }
  perf.stat[name] = val;
}

function getNow () {
  var performance = window.performance;
  return performance && performance.now ? performance.now() : new Date().getTime()
}

function getEntries () {
  var performance = window.performance;
  return performance && performance.getEntries
    ? performance.getEntries()
      .filter(function (entry) {
        return REGEXP_IMG_TYPE.test(entry.name)
      })
    : [{ responseEnd: getNow() - IMG_REC_INDENT }]
}

function _d (func, wait) {
  var timerId;
  var now;
  function later (now) {
    timerId = null;
    func(now);
  }
  return function () {
    now = getNow();
    clearTimeout(timerId);
    timerId = setTimeout(later.bind(null, now), wait);
  }
}

function tagFirstScreen (time) {
  if (!time) {
    time = getNow();
  }
  perf.latestRenderFinishes.push(time);
  var start = Math.max(earliestBeforeCreateTime, earliestBeforeUpdateTime);
  perf.renderTime.push({
    start: start,
    end: time,
    duration: time - start
  });

  var num = perf.renderTime.length;
  perf[("screenTime" + num)] = time;

  if (!window._first_screen_detected) {
    window._first_screen_detected = true;
    collectStat();
    extend(perf.stat, {
      screenRenderTime: parseInt(time),
      componentCount: window._component_count
    });
    window.weex.emit('firstscreenfinish', time);
  }

  {
    console.log(("screenTime[" + num + "]: " + time + " ms."));
    console.log('_weex_perf:', window._weex_perf);
  }

  window.weex.emit('renderfinish', time);
}

/**
 * get first screen time.
 */
var debouncedTagImg = debounce(function () {
  var entries = getEntries();
  var len = entries.length;
  if (!len) {
    /**
     * no image loaded. This probably happened because of the disabling of images' loading
     * events. So just tag now as the first screen time.
     */
    return tagFirstScreen()
  }
  var i = 0;
  var end = 0;
  while (i < len) {
    var responseEnd = entries[i].responseEnd;
    end = end < responseEnd ? responseEnd : end;
    perf.entries.push({
      requestStart: entries[i].requestStart,
      responseEnd: responseEnd
    });
    i++;
  }
  tagFirstScreen(end);
}, IMG_REC_INDENT);

function tagImg () {
  debouncedTagImg();
}

/**
 * recording the earliest 'beforeCreate' time.
 */
var depressedTagBeforeCreate = depress(function () {
  var now = getNow();
  earliestBeforeCreateTime = now;
  perf.earliestBeforeCreates.push(now);
}, 25);

function tagBeforeCreate () {
  depressedTagBeforeCreate();
}

function tagRootMounted () {
  var now = getNow();
  perf.latestMounts.push(now);
  if (!perf.firstAllMountedTime) {
    perf.firstAllMountedTime = now;
    {
      console.log(("first all mounted time: " + now + " ms."));
    }
  }
  collectStatPerf('totalTime', parseInt(now));
}



/**
 * recording the earliest 'beforeUpdate' time.
 */
var depressedTagBeforeUpdate = depress(function () {
  var now = getNow();
  earliestBeforeUpdateTime = now;
  perf.earliestBeforeUpdates.push(now);
}, 25);

function tagBeforeUpdate () {
  depressedTagBeforeUpdate();
}

/**
 * recording the latest 'updated' time.
 */
var debouncedTagUpdated = _d(function (now) {
  perf.latestUpdates.push(now);
  perf.updateTime.push({
    start: earliestBeforeUpdateTime,
    end: now,
    duration: now - earliestBeforeUpdateTime
  });
}, 25);

function tagUpdated () {
  debouncedTagUpdated();
}

function tagBegin (name) {
  tmp[name] = getNow();
}

function tagEnd (name) {
  var pre = perf.time[name];
  if (!pre) {
    pre = 0;
  }
  perf.time[name] = pre + getNow() - tmp[name];
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

var SCREEN_REC_LIMIT = 3;  // just record the first 3 times for screen-render finishing.
var doRecord = true;

function preLoadImg (src,
    loadCallback,
    errorCallback) {
  var img = new Image();
  img.onload = loadCallback ? loadCallback.bind(img) : null;
  img.onerror = errorCallback ? errorCallback.bind(img) : null;
  img.src = src;
}

function applySrc (item, src, placeholderSrc) {
  if (!src) { return }
  function finallCb () {
    delete item._src_loading;
    if (doRecord) {
      if (window._weex_perf.renderTime.length < SCREEN_REC_LIMIT) {
        tagImg(); // tag lastest img onload time.
      }
      else {
        doRecord = false;
      }
    }
  }
  /**
   * 1. apply src immediately in case javscript blocks the image loading
   *  before next tick.
   */
  item.style.backgroundImage = "url(" + (src || '') + ")";
  item.removeAttribute('img-src');
  /**
   * 2. then load the img src with Image constructor (but would not post
   *  a request again), just to trigger the load event.
   */
  if (item._src_loading) {
    return
  }
  item._src_loading = true;
  preLoadImg(src, function (evt) {
    item.style.backgroundImage = "url(" + (src || '') + ")";
    var ref = this;
    var naturalWidth = ref.width;
    var naturalHeight = ref.height;
    var params = {
      success: true,
      size: { naturalWidth: naturalWidth, naturalHeight: naturalHeight }
    };
    dispatchEvent(item, createEvent(item, 'load', params));
    finallCb();
  }, function (evt) {
    var params = {
      success: false,
      size: { naturalWidth: 0, naturalHeight: 0 }
    };
    dispatchEvent(item, createEvent(item, 'load', params));
    if (placeholderSrc) {
      preLoadImg(placeholderSrc, function () {
        item.style.backgroundImage = "url(" + (placeholderSrc || '') + ")";
      });
    }
    finallCb();
  });
}

function fireLazyload (el, ignoreVisibility) {
  if (Array.isArray(el)) {
    return el.forEach(function (ct) { return fireLazyload(ct); })
  }
  el = el || document.body;
  if (!el) { return }
  var imgs = (el || document.body).querySelectorAll('[img-src]');
  if (el.getAttribute('img-src')) { imgs = [el]; }
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (typeof ignoreVisibility === 'boolean' && ignoreVisibility) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    else if (isElementVisible(img, el)) {
      applySrc(img, img.getAttribute('img-src'), img.getAttribute('img-placeholder'));
    }
    // In somecases there are images out of the screen in x-axis. There
    // should not be a break point in these cases.
    // else {
    //   // alreay out of view, no need to compare any more.
    //   break
    // }
  }
}

/**
 * cache a throttle lazyload function for every container element
 * once for different wait times separate.
 *   the architecture of this cache:
 *      cache: {
 *        el.id: {
 *          wait: throttledFunction () { ... }
 *        }
 *      }
 */
var cache = {};
var _uid$2 = 1;
function getThrottleLazyload (wait, el) {
  if ( wait === void 0 ) wait = 16;
  if ( el === void 0 ) el = document.body;

  var id = +(el && el.dataset.throttleId);
  if (isNaN(id) || id <= 0) {
    id = _uid$2++;
    el && el.setAttribute('data-throttle-id', id + '');
  }

  !cache[id] && (cache[id] = {});
  var throttled = cache[id][wait] ||
    (cache[id][wait] = throttle(
      fireLazyload.bind(this, el),
      parseFloat(wait),
      // true for callLastTime.
      // to trigger once more time after the last throttled function called with a little more delay.
      true)
    );
  return throttled
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// 

/**
 * viewport priority:
 *
 * 1. meta weex-viewport (developer custom)
 * 2. setViewport(config) := config.width (private code) @deprecated
 * 3. 750 (buid time)
 *
 */
var isInited = false;
var DEFAULT_VIEWPORT_WIDTH = 750;

/**
 * get viewport width from weex-viewport meta.
 */
var envViewportWidth = parseInt(750);
var width = !isNaN(envViewportWidth) && envViewportWidth > 0
  ? envViewportWidth
  : DEFAULT_VIEWPORT_WIDTH;

var wxViewportMeta = document.querySelector('meta[name="weex-viewport"]');
var metaWidth = wxViewportMeta && parseInt(wxViewportMeta.getAttribute('content'));
if (metaWidth && !isNaN(metaWidth) && metaWidth > 0) {
  width = metaWidth;
}

var dpr = 0;
var screenWidth = 0;
var screenHeight = 0;

var info = {
  dpr: dpr,
  scale: 0,
  rem: 0,
  deviceWidth: 0,
  deviceHeight: 0
};

/**
 * set root font-size for rem units. If already been set, just skip this.
 */
function setRootFont (width) {
  var doc = window.document;
  var rem = width / 10;
  if (!doc.documentElement) { return }
  var rootFontSize = doc.documentElement.style.fontSize;
  if (!rootFontSize) {
    doc.documentElement.style.fontSize = rem + 'px';
    info.rem = rem;
  }
}

function setMetaViewport (width) {
  if (!wxViewportMeta) {
    wxViewportMeta = document.createElement('meta');
    wxViewportMeta.setAttribute('name', 'weex-viewport');
  }
  else {
    var metaWidth = parseInt(wxViewportMeta.getAttribute('content'));
    if (metaWidth === width) {
      return
    }
  }
  wxViewportMeta.setAttribute('content', width + '');
}

/**
 * export viewport info.
 */
function init$2 (viewportWidth) {
  if ( viewportWidth === void 0 ) viewportWidth = width;

  if (!isInited) {
    isInited = true;

    var doc = window.document;
    if (!doc) {
      console.error('[vue-render] window.document is undfined.');
      return
    }
    if (!doc.documentElement) {
      console.error('[vue-render] document.documentElement is undfined.');
      return
    }

    dpr = info.dpr = window.devicePixelRatio;
    screenWidth = doc.documentElement.clientWidth;
    screenHeight = doc.documentElement.clientHeight;

    // set root font for rem.
    setRootFont(screenWidth);
    setMetaViewport(viewportWidth);

    /**
     * why not to use window.screen.width to get screenWidth ? Because in some
     * old webkit browser on android system it get the device pixel width, which
     * is the screenWidth multiply by the device pixel ratio.
     * e.g. ip6 -> get 375 for virtual screen width.
     */
    var scale = screenWidth / viewportWidth;
    /**
     * 1. if set initial/maximum/mimimum-scale some how the page will have a bounce
     * effect when user drag the page towards horizontal axis.
     * 2. Due to compatibility reasons, not to use viewport meta anymore. Just bring
     * a parameter scale into the style value processing.
     */

    // const contents = [
    //   `width=${viewportWidth}`,
    //   `initial-scale=${scale}`,
    //   `maximum-scale=${scale}`,
    //   `minimum-scale=${scale}`,
    //   `user-scalable=no`
    // ]

    // let meta = doc.querySelector('meta[name="viewport"]')
    // if (!meta) {
    //   meta = doc.createElement('meta')
    //   meta.setAttribute('name', 'viewport')
    //   document.querySelector('head').appendChild(meta)
    // }
    // meta.setAttribute('content', contents.join(','))

    extend(info, {
      scale: scale,
      deviceWidth: screenWidth * dpr,
      deviceHeight: screenHeight * dpr
    });
  }

  return info
}

/**
 * reset viewport width and scale.
 * @return new scale.
 */


function getViewportInfo () {
  return info
}

var capitalizeString_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];
});

var prefixProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var requiredPrefixes = prefixProperties[property];
    for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
      style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
    }
  }
}
module.exports = exports['default'];
});

var prefixValue_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];
});

var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];
});

var isObject_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];
});

var createPrefixer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = prefixProperty_1;

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = prefixValue_1;

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = addNewValuesOnly_1;

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = isObject_1;

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];
});

var staticData = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugins: [],
  prefixMap: { "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit"], "textDecorationSkip": ["Webkit"], "textDecorationLine": ["Webkit"], "textDecorationColor": ["Webkit"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transform": ["Webkit"], "transformOrigin": ["Webkit"], "transformOriginX": ["Webkit"], "transformOriginY": ["Webkit"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "fontKerning": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"] }
};
module.exports = exports["default"];
});

var cursor_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;

var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];
});

var crossFade_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];
});

var filter_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];
});

var flex_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: true,
  'inline-flex': true
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value];
  }
}
module.exports = exports['default'];
});

var flexboxOld_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];
});

var gradient_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var imageSet_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];
});

var position_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];
});

var sizing_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];
});

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$1 = {};

function hyphenateStyleName(string) {
    return string in cache$1
    ? cache$1[string]
    : cache$1[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

var index$7 = hyphenateStyleName;

var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = index$7;

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];
});

var transition_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = hyphenateProperty_1;

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = isPrefixedValue_1;

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = capitalizeString_1;

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];
});

var index$6 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPrefixer = createPrefixer_1;

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _staticData = staticData;

var _staticData2 = _interopRequireDefault(_staticData);

var _cursor = cursor_1;

var _cursor2 = _interopRequireDefault(_cursor);

var _crossFade = crossFade_1;

var _crossFade2 = _interopRequireDefault(_crossFade);

var _filter = filter_1;

var _filter2 = _interopRequireDefault(_filter);

var _flex = flex_1;

var _flex2 = _interopRequireDefault(_flex);

var _flexboxOld = flexboxOld_1;

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = gradient_1;

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = imageSet_1;

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = position_1;

var _position2 = _interopRequireDefault(_position);

var _sizing = sizing_1;

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = transition_1;

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugins = [_crossFade2.default, _cursor2.default, _filter2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default, _flex2.default];

exports.default = (0, _createPrefixer2.default)({
  prefixMap: _staticData2.default.prefixMap,
  plugins: plugins
});
module.exports = exports['default'];
});

var addPrefix = unwrapExports(index$6);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

var noUnitsNumberKeys = [
  'flex',
  'opacity',
  'zIndex',
  'fontWeight',
  'lines'
];

// whether to support using 0.5px to paint 1px width border.
var _supportHairlines;
function supportHairlines () {
  if (typeof _supportHairlines === 'undefined') {
    var dpr = window.devicePixelRatio;
    if (dpr && dpr >= 2 && document.documentElement) {
      var docElm = document.documentElement;
      var testElm = document.createElement('div');
      var fakeBody = document.createElement('body');
      var beforeNode = docElm.firstElementChild || docElm.firstChild;
      testElm.style.border = '0.5px solid transparent';
      fakeBody.appendChild(testElm);
      docElm.insertBefore(fakeBody, beforeNode);
      _supportHairlines = testElm.offsetHeight === 1;
      docElm.removeChild(fakeBody);
    }
    else {
      _supportHairlines = false;
    }
  }
  return _supportHairlines
}

/**
 * remove comments from a cssText.
 */
function trimComment (cssText) {
  return cssText.replace(/(?:\/\*)[\s\S]*?\*\//g, '')
}

var support = null;

function supportSticky () {
  if (support !== null) {
    return support
  }
  var element = window.document.createElement('div');
  var elementStyle = element.style;
  elementStyle.cssText = 'position:-webkit-sticky;position:sticky;';
  support = elementStyle.position.indexOf('sticky') !== -1;
  return support
}

var regPercentage = /^[+-]?\d+(\.\d+)?%$/;
function isPercentage (val) {
  return regPercentage.test(val)
}

var regUnitsNum = /^([+-]?\d+(?:\.\d+)?)([p,w]x)?$/; // support units: px, wx.
function normalizeUnitsNum (val) {
  var match = val.match(regUnitsNum);
  if (!match) { return '' }
  var unit = 'px'; // px by default.
  if (match[2]) {
    unit = match[2];
  }
  return parseScale(parseFloat(match[1]), unit)
}

function getUnitScaleMap () {
  var ref = getViewportInfo();
  var scale = ref.scale;
  var dpr = ref.dpr;
  return {
    px: scale,
    wx: scale * dpr
  }
}

function limitScale (val, limit) {
  limit = limit || 1;
  var sign = val === 0 ? 0 : val > 0 ? 1 : -1;
  var newVal = Math.abs(val) > limit ? val : sign * limit;
  // support 1px device width.
  if (newVal === 1 && val < 1 && supportHairlines()) {
    newVal = 0.5;
  }
  return newVal
}

function parseScale (val, unit) {
  var unitScaleMap = getUnitScaleMap();
  return limitScale(val * unitScaleMap[unit]) + 'px'
}

function normalizeString (styleKey, styleVal) {
  if (isPercentage(styleVal)) {
    return styleVal
  }

  /**
   * 1. test if is a regular scale css. e.g. `width: 100px;`
   *  this should be a standalone number value with or without unit, otherwise
   *  it shouldn't be changed.
   */
  var unitsNum = normalizeUnitsNum(styleVal);
  if (unitsNum) { return unitsNum }

  /**
   * 2. if a string contains multiple px values, than they should be all normalized.
   *  values should have wx or px units, otherwise they should be left unchanged.
   *  e.g.
   *    transform: translate(10px, 6px, 0)
   *    border: 2px solid red
   */
  var numReg = /([+-]?[\d.]+)([p,w]x)/ig;
  if (numReg.test(styleVal)) {
    var unitScaleMap = getUnitScaleMap();
    var val = styleVal.replace(numReg, function (m, $0, $1) {
      var res = parseFloat($0) * unitScaleMap[$1];
      return limitScale(res) + 'px'
    });
    return val
  }

  // otherwise
  return styleVal
}

function autoPrefix (style) {
  var prefixed = addPrefix(style);
  // flex only added WebkitFlex. Should add WebkitBoxFlex also.
  var flex = prefixed.flex;
  if (flex) {
    prefixed.WebkitBoxFlex = flex;
  }
  return prefixed
}

function normalizeNumber (styleKey, styleVal) {
  var ref = getViewportInfo();
  var scale = ref.scale;
  return styleVal * scale + 'px'
}

/**
 * normalize style to adapte to current viewport by multiply current scale.
 * @param  {object} style: should be camelCase.
 */
function normalizeStyle (style) {
  var res = {};
  for (var key in style) {
    var val = style[key];
    if (noUnitsNumberKeys.indexOf(key) > -1) {
      res[key] = val;
      continue
    }
    switch (typeof val) {
      case 'string':
        res[key] = normalizeString(key, val);
        break
      case 'number':
        res[key] = normalizeNumber(key, val);
        break
      default:
        res[key] = val;
        break
    }
  }
  return res
}

/**
 * get transformObj
 */
function getTransformObj (elm) {
  var styleObj = {};
  if (!elm) { return styleObj }
  var transformStr = elm.style.webkitTransform || elm.style.transform;
  if (transformStr && transformStr.match(/(?: *(?:translate|rotate|scale)[^(]*\([^(]+\))+/i)) {
    styleObj = transformStr.trim().replace(/, +/g, ',').split(' ').reduce(function (pre, str) {
      ['translate', 'scale', 'rotate'].forEach(function (name) {
        if (new RegExp(name, 'i').test(str)) {
          pre[name] = str;
        }
      });
      return pre
    }, {});
  }
  return styleObj
}

/**
 * translate a transform string from a transformObj.
 */
function getTransformStr (obj) {
  return Object.keys(obj).reduce(function (pre, key) {
    return pre + obj[key] + ' '
  }, '')
}

/**
 * add transform style to element.
 * @param {HTMLElement} elm
 * @param {object} style: transform object, format is like this:
 *   {
 *     translate: 'translate3d(2px, 2px, 2px)',
 *     scale: 'scale(0.2)',
 *     rotate: 'rotate(30deg)'
 *   }
 * @param {boolean} replace: whether to replace all transform properties.
 */
function addTransform (elm, style, replace) {
  if (!style) { return }
  var styleObj = {};
  if (!replace) {
    styleObj = getTransformObj(elm);
  }
  for (var key in style) {
    var val = style[key];
    if (val) {
      styleObj[key] = val;
    }
  }
  var resStr = getTransformStr(styleObj);
  elm.style.webkitTransform = resStr;
  elm.style.transform = resStr;
}

/**
 * add translate X to the element.
 */
function addTranslateX (elm, toAdd) {
  if (!toAdd) { return }
  var styleObj = getTransformObj(elm);
  if (!styleObj.translate) {
    styleObj.translate = 'translate3d(0px, 0px, 0px)';
  }
  styleObj.translate = styleObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
    return (parseFloat($0) + toAdd) + 'px'
  });
  var resStr = getTransformStr(styleObj);
  elm.style.webkitTransform = resStr;
  elm.style.transform = resStr;
}

/**
 * copy a transform behaviour from one element to another.
 * key could be: 'translate' | 'scale' | 'rotate'
 */
function copyTransform (from, to, key) {
  var str;
  if (!key) {
    str = from.style.webkitTransform || from.style.transform;
  }
  else {
    var fromObj = getTransformObj(from);
    if (!fromObj[key]) { return }
    var toObj = getTransformObj(to);
    toObj[key] = fromObj[key];
    str = getTransformStr(toObj);
  }
  to.style.webkitTransform = str;
  to.style.transform = str;
}

/**
 * get color's r, g, b value.
 * @param {string} color support all kinds of value of color.
 */
function getRgb (color) {
  var haxReg = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/;
  var rgbReg = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
  var span = document.createElement('span');
  var body = document.body;
  span.style.cssText = "color: " + color + "; width: 0px; height: 0px;";
  body && body.appendChild(span);
  color = window.getComputedStyle(span).color + '';
  body && body.removeChild(span);

  var match;
  match = color.match(haxReg);
  if (match) {
    return {
      r: parseInt(match[1], 16),
      g: parseInt(match[2], 16),
      b: parseInt(match[3], 16)
    }
  }
  match = color.match(rgbReg);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    }
  }
}

/**
 * get style sheet with owner node's id
 * @param {string} id owner node id.
 */
function getStyleSheetById (id) {
  if (!id) { return }
  var styleSheets = document.styleSheets;
  var len = styleSheets.length;
  for (var i = 0; i < len; i++) {
    var styleSheet = styleSheets[i];
    if (styleSheet.ownerNode.id === id) {
      return styleSheet
    }
  }
}

function getChildrenTotalWidth (children) {
  var len = children.length;
  var total = 0;
  for (var i = 0; i < len; i++) {
    total += children[i].getBoundingClientRect().width;
  }
  return total
}
/**
 * get total content width of the element.
 * @param {HTMLElement} elm
 */
function getRangeWidth (elm) {
  var children = elm.children;
  if (!children) {
    return elm.getBoundingClientRect().width
  }
  if (!Range) {
    return getChildrenTotalWidth(children)
  }
  var range = document.createRange();
  if (!range.selectNodeContents) {
    return getChildrenTotalWidth(children)
  }
  range.selectNodeContents(elm);
  return range.getBoundingClientRect().width
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});

function camelizeKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[camelize(key)] = obj[key];
  }
  return res
}

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

function hyphenateKeys (obj) {
  var res = {};
  for (var key in obj) {
    res[hyphenate(key)] = obj[key];
  }
  return res
}

var vendorsReg = /webkit-|moz-|o-|ms-/;
function hyphenateStyleKeys (obj) {
  var res = {};
  for (var key in obj) {
    var hk = hyphenate(key).replace(vendorsReg, function ($0) {
      return '-' + $0
    });
    res[hk] = obj[key];
  }
  return res
}

function camelToKebab (name) {
  if (!name) { return '' }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}

function appendCss (css, cssId, replace) {
  var style = document.getElementById(cssId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    cssId && (style.id = cssId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}

function nextFrame (callback) {
  var runner = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || (function (cb) { return setTimeout(cb, 16); });
  runner(callback);
}

function toCSSText (object) {
  if (!object) { return }
  var obj = hyphenateStyleKeys(object);
  var cssText = '';
  for (var key in obj) {
    cssText += key + ":" + (obj[key]) + ";";
  }
  return cssText
}


var utils$1 = Object.freeze({
	cached: cached,
	camelize: camelize,
	camelizeKeys: camelizeKeys,
	capitalize: capitalize,
	hyphenate: hyphenate,
	hyphenateKeys: hyphenateKeys,
	hyphenateStyleKeys: hyphenateStyleKeys,
	camelToKebab: camelToKebab,
	appendCss: appendCss,
	nextFrame: nextFrame,
	toCSSText: toCSSText,
	extend: extend,
	extendTruthy: extendTruthy,
	extendKeys: extendKeys,
	extractKeys: extractKeys,
	bind: bind,
	debounce: debounce,
	depress: depress,
	throttle: throttle,
	loopArray: loopArray,
	createEvent: createEvent,
	createCustomEvent: createCustomEvent,
	dispatchEvent: dispatchEvent,
	mapFormEvents: mapFormEvents,
	getParentScroller: getParentScroller,
	hasIntersection: hasIntersection,
	isElementVisible: isElementVisible,
	isComponentVisible: isComponentVisible,
	getEventHandlers: getEventHandlers,
	watchAppear: watchAppear,
	triggerAppear: triggerAppear,
	triggerDisappear: triggerDisappear,
	detectAppear: detectAppear,
	applySrc: applySrc,
	fireLazyload: fireLazyload,
	getThrottleLazyload: getThrottleLazyload,
	supportHairlines: supportHairlines,
	trimComment: trimComment,
	supportSticky: supportSticky,
	isPercentage: isPercentage,
	normalizeUnitsNum: normalizeUnitsNum,
	normalizeString: normalizeString,
	autoPrefix: autoPrefix,
	normalizeNumber: normalizeNumber,
	normalizeStyle: normalizeStyle,
	getTransformObj: getTransformObj,
	getTransformStr: getTransformStr,
	addTransform: addTransform,
	addTranslateX: addTranslateX,
	copyTransform: copyTransform,
	getRgb: getRgb,
	getStyleSheetById: getStyleSheetById,
	getRangeWidth: getRangeWidth,
	isPlainObject: isPlainObject,
	isArray: isArray
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function transitionOnce (vnode, config, callback) {
  if (isArray(vnode)) {
    {
      console.warn('[vue-render] the ref passed to animation.transitionOnce is a array.');
    }
    vnode = vnode[0];
  }

  var duration = config.duration || 0; // ms
  var timing = config.timingFunction || 'linear';
  var delay = config.delay || 0;  // ms

  // TODO: parse transition properties
  var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

  var dom = vnode.$el;
  // trigger image lazyloading by force.
  dom && weex.utils.fireLazyload(dom, true);

  var transitionEndHandler = function (event) {
    event.stopPropagation();
    dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
    dom.removeEventListener('transitionend', transitionEndHandler);
    dom.style.transition = '';
    dom.style.webkitTransition = '';
    callback();
  };

  dom.style.transition = transitionValue;
  dom.style.webkitTransition = transitionValue;
  dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
  dom.addEventListener('transitionend', transitionEndHandler);

  nextFrame(function () {
    dom.style.cssText
      += toCSSText(autoPrefix(normalizeStyle(camelizeKeys(config.styles))) || {});
  });
}

var animation = {
  /**
   * transition
   * @param  {String} vnode
   * @param  {Object} config
   * @param  {String} callback
   */
  transition: function transition (vnode, config, callback) {
    if (!config.styles) { return }
    return transitionOnce(vnode, config, function () {
      callback && callback();
    })
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function getParentScroller$1 (vnode) {
  if (!vnode) { return null }
  var vm = vnode.$el
    ? vnode : vnode.elm
    ? vnode.componentInstance || vnode.context : null;
  if (!vm) { return null }
  var type = vm.$el && vm.$el.getAttribute('weex-type');
  if (config.scrollableTypes.indexOf(type) > -1) {
    return vm
  }
  return getParentScroller$1(vm.$parent)
}

function now () {
  var now = window.performance && window.performance.now
      ? window.performance.now.bind(window.performance) : Date.now;
  return now()
}

function scrollElement (dSuffix, position) {
  this[("scroll" + dSuffix)] = position;
}

/**
 * self invoked function that, given a context, steps through scrolling
 * @method step
 * @param {Object} context
 */
function step$1 (context) {
  // call method again on next available frame
  context.frame = window.requestAnimationFrame(step$1.bind(window, context));

  var time = now();
  var elapsed = (time - context.startTime) / 468;

  // avoid elapsed times higher than one
  elapsed = elapsed > 1 ? 1 : elapsed;

  // apply easing to elapsed time
  var value = ease(elapsed);

  var currentPosition = context.startPosition + (context.position - context.startPosition) * value;

  context.method.call(context.scrollable, context.dSuffix, currentPosition);

  // return when end points have been reached
  /**
   * NOTE: should use ~~ to parse position number into integer. Otherwise
   * this two float numbers maybe have a slicely little difference, which
   * will cause this function never to stop.
   */
  if (~~currentPosition === ~~context.position) {
    window.cancelAnimationFrame(context.frame);
    return
  }
}

/**
 * returns result of applying ease math function to a number
 * @method ease
 * @param {Number} k
 * @returns {Number}
 */
function ease (k) {
  return 0.5 * (1 - Math.cos(Math.PI * k))
}

var dom = {
  /**
   * scrollToElement
   * @param  {Vnode | VComponent} vnode
   * @param  {Object} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function (vnode, options) {
    if (isArray(vnode)) {
      {
        console.warn('[vue-render] the ref passed to animation.transitionOnce is a array.');
      }
      vnode = vnode[0];
    }

    var scroller = getParentScroller$1(vnode);
    var scrollDirection = scroller && scroller.scrollDirection || 'vertical';

    var isWindow = !scroller;
    var ct = isWindow ? document.body : scroller.$el;
    var el = vnode.$el || vnode.elm;

    if (ct && el) {
      // if it's a list, then the listVnode.scrollDirection is undefined. just
      // assum it is the default value 'vertical'.
      var dSuffix = ({
        horizontal: 'Left',
        vertical: 'Top'
      })[scrollDirection];

      var ctRect = ct.getBoundingClientRect();
      var elRect = el.getBoundingClientRect();

      /**
       * if it's a waterfall, and you want to scroll to a header, then just
       * scroll to the top.
       */
      if (scroller
        && scroller.weexType === 'waterfall'
        && scroller._headers
        && scroller._headers.indexOf(vnode.$vnode || vnode) > -1) {
        // it's in waterfall. just scroll to the top.
        elRect = ct.firstElementChild.getBoundingClientRect();
      }

      var dir = dSuffix.toLowerCase();
      var offset = (isWindow ? 0 : ct[("scroll" + dSuffix)]) + elRect[dir] - ctRect[dir];

      if (options) {
        offset += options.offset && options.offset * weex.config.env.scale || 0;
        // offset *= weex.config.env.scale /* adapt offset to different screen scales. */
      }
      else {
        console.warn('[Vue Render] The second parameter of "scrollToElement" is required, '
          + 'otherwise it may not works well on native.');
      }

      if (options && options.animated === false) {
        return scrollElement.call(ct, dSuffix, offset)
      }

      step$1({
        scrollable: ct,
        startTime: now(),
        frame: null,
        startPosition: ct[("scroll" + dSuffix)],
        position: offset,
        method: scrollElement,
        dSuffix: dSuffix
      });
    }
  },

  /**
   * getComponentRect
   * @param {String} vnode
   * @param {Function} callback
   */
  getComponentRect: function (vnode, callback) {
    if (isArray(vnode)) {
      {
        console.warn('[vue-render] the ref passed to animation.transitionOnce is a array.');
      }
      vnode = vnode[0];
    }

    var scale = window.weex.config.env.scale;
    var info = { result: false };
    var rectKeys = ['width', 'height', 'top', 'bottom', 'left', 'right'];

    function recalc (rect) {
      var res = {};
      rectKeys.forEach(function (key) {
        res[key] = rect[key] / scale;
      });
      return res
    }

    if (vnode && vnode === 'viewport') {
      info.result = true;
      info.size = recalc({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      });
    }
    else if (vnode && vnode.$el) {
      info.result = true;
      info.size = recalc(vnode.$el.getBoundingClientRect());
    }

    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };

    callback && callback(message);
    return message
  },

  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function (key, styles) {
    key = camelToKebab(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendCss(styleText, 'dom-added-rules');
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * globalEvent API:
 * @doc http://weex.apache.org/cn/references/modules/globalevent.html
 */
// track varies kinds of events and listeners.
var handlerTraker = {};

var globalEvent = {
  /**
   * addEventListener
   * NOTE: one callback can only be bound to the same event once. Bind a callback twice doesn't
   *  mean it will be called twice when the event fired once.
   * @param {string} evt - the event name to add a listener on.
   */
  addEventListener: function addEventListener (evt, callback) {
    if (!callback) {
      {
        console.error("[vue-render] missing callback arg in globalEvent.addEventListener.");
      }
      return
    }
    var handlers = handlerTraker[evt];
    if (!handlers) {
      handlers = handlerTraker[evt] = [];
    }
    var len = handlers.length;
    for (var i = 0; i < len; i++) {
      if (handlers[i] === callback) {
        // this callback is already bound. no need to bind it again.
        return
      }
    }
    handlers.push(callback);
    document.addEventListener(evt, callback);
  },

  /**
   * removeEventListener
   * NOTE: remove all the event handlers for the specified event type.
   * @param {string} evt - the event name to remove a listener from.
   */
  removeEventListener: function removeEventListener (evt) {
    var handlers = handlerTraker[evt];
    if (!handlers) {
      // evt handlers has been already removed.
      return
    }
    handlers.forEach(function (cb) { return document.removeEventListener(evt, cb); });
    delete handlerTraker[evt];
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var queue$1 = [];
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'weex-toast';

var DEFAULT_DURATION = 0.8;

function showToastWindow (msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME);
    toastWin.classList.add('hide');
    document.body.appendChild(toastWin);
  }
  toastWin.textContent = msg;
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.remove('hide');
  }, 0);
}

function hideToastWindow (callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.add('hide');
  }, 0);
}

var toast = {
  push: function (msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function () {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      setTimeout(function () {
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'weex-modal-wrap';
var MODAL_NODE_CLASS = 'weex-modal-node';

function Modal () {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal.prototype = {

  show: function () {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function () {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function () {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function () {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function () {
    this.node.innerHTML = '';
  },

  createNodeContent: function () {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function () {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal.call(this);
  this.node.classList.add('weex-alert');
}

Alert.prototype = Object.create(Modal.prototype);

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-confirm');
}

Confirm.prototype = Object.create(Modal.prototype);

Confirm.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt (config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-prompt');
}

Prompt.prototype = Object.create(Modal.prototype);

Prompt.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _css = "\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.7;\n  -webkit-transition: all 0.4s ease-in-out;\n          transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.weex-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n";

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// TODO: rewrite the modal styles
var modal = {

  // duration: default is 0.8 seconds.
  toast: function (config) {
    toast.push(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function (config, callback) {
    config.callback = function () {
      callback && callback();
    };
    new Alert(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Confirm(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Prompt(config).show();
  }
};

var modal$1 = {
  init: function (Weex) {
    Weex.utils.appendCss(_css, 'weex-mud-modal');
    Weex.registerModule('modal', modal);
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Navigator module
 */

// TODO: config.animated
var navigator$1 = {
  push: function (config, callback) {
    window.location.href = config.url;
    callback && callback();
  },

  pop: function (config, callback) {
    window.history.back();
    callback && callback();
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * Webview module
 */
var webview = {
  goBack: function goBack (vnode) {
    if (isArray(vnode)) {
      {
        console.warn('[vue-render] the ref passed to animation.transitionOnce is a array.');
      }
      vnode = vnode[0];
    }
    if (vnode && typeof vnode.goBack === 'function') {
      vnode.goBack();
    }
  },
  goForward: function goForward (vnode) {
    if (isArray(vnode)) {
      {
        console.warn('[vue-render] the ref passed to animation.transitionOnce is a array.');
      }
      vnode = vnode[0];
    }
    if (vnode && typeof vnode.goForward === 'function') {
      vnode.goForward();
    }
  },
  reload: function reload (vnode) {
    if (isArray(vnode)) {
      {
        console.warn('[vue-render] the ref passed to animation.transitionOnce is a array.');
      }
      vnode = vnode[0];
    }
    if (vnode && typeof vnode.reload === 'function') {
      vnode.reload();
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * websocket module
 */
var websocket$1 = (function () {
  var registerListeners = ['onopen', 'onmessage', 'onerror', 'onclose'];
  var ws = {
    INSTANCE: null,
    WebSocket: function (url, protocol) {
      if (!url) {
        ws.INSTANCE = null;
        return
      }
      if (!protocol) {
        ws.INSTANCE = new WebSocket(url);
      }
      else {
        ws.INSTANCE = new WebSocket(url, protocol);
      }
      return ws.INSTANCE
    },
    send: function (messages) {
      ws.INSTANCE && ws.INSTANCE.send(messages);
    },
    close: function () {
      ws.INSTANCE && ws.INSTANCE.close();
    }
  };
  var loop = function ( i ) {
    if (registerListeners.hasOwnProperty(i)) {
      Object.defineProperty(ws, registerListeners[i], {
        get: function () {
          return ws.INSTANCE && ws.INSTANCE[registerListeners[i]]
        },
        set: function (fn) {
          if (ws.INSTANCE) {
            ws.INSTANCE[registerListeners[i]] = fn;
          }
        }
      });
    }
  };

  for (var i in registerListeners) loop( i );
  return ws
})();

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// TODO: rewrite the module meta
var websocket = {
  init: function (Weex) {
    Weex.registerModule('webSocket', websocket$1, { mountType: 'full' });
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// modules from render/browesr

// custom modules
var legacyModules = {
  event: event$2,
  geolocation: geolocation$1,
  pageInfo: pageInfo$1,
  storage: storage$1,
  stream: stream$1,
  clipboard: clipboard$1
};

var modules = {
  animation: animation,
  dom: dom,
  globalEvent: globalEvent,
  navigator: navigator$1,
  webview: webview
};

var modules$1 = {
  init: function init (weex) {
    for (var k in legacyModules) {
      weex.install(legacyModules[k]);
    }
    weex.install(modal$1);
    weex.install(websocket);
    for (var k$1 in modules) {
      weex.registerModule(k$1, modules[k$1]);
    }
  }
};

var lib$2 = window.lib || (window.lib = {});

/**
 * Version class.
 * @class lib.env~Version
 * @param {String} v - version number.
 */
function Version (v) {
  Object.defineProperty(this, 'val', {
    value: v.toString(),
    enumerable: true
  });

  /**
   * larger than
   * @method gt
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.gt = function (v) {
    return Version.compare(this, v) > 0
  };

  /**
   * larger than or equal to.
   * @method gte
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.gte = function (v) {
    return Version.compare(this, v) >= 0
  };

  /**
   * less than.
   * @method lt
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.lt = function (v) {
    return Version.compare(this, v) < 0
  };

  /**
   * less than or equal to.
   * @method lte
   * @param {String} v - version
   * @return {Boolean} result
   * @instance
   * @memberof Version
   */
  this.lte = function (v) {
    return Version.compare(this, v) <= 0
  };

  /**
   * equal to.
   * @method eq
   * @param {String} v - version
   * @return {Boolean} equal to
   * @instance
   * @memberof Version
   */
  this.eq = function (v) {
    return Version.compare(this, v) === 0
  };
}

/**
 * version number string.
 * @method toString
 * @return {String} current version number string.
 * @instance
 * @memberof Version
 */
Version.prototype.toString = function () {
  return this.val
};

/**
 * return current version number.
 * @method valueOf
 * @return {Boolean} version number
 * @instance
 * @memberof Version
 */
Version.prototype.valueOf = function () {
  var v = this.val.split('.');
  var r = [];
  for (var i = 0; i < v.length; i++) {
    var n = parseInt(v[i], 10);
    if (isNaN(n)) {
      n = 0;
    }
    var s = n.toString();
    if (s.length < 5) {
      s = Array(6 - s.length).join('0') + s;
    }
    r.push(s);
    if (r.length === 1) {
      r.push('.');
    }
  }
  return parseFloat(r.join(''))
};

/**
 * compare two versions.
 * @method compare
 * @param {String} v1 - version1
 * @param {String} v2 - version2
 * @return {Number} 0 for equality，-1 for less than，1 for larger than.
 * @memberof Version
 */
Version.compare = function (v1, v2) {
  v1 = v1.toString().split('.');
  v2 = v2.toString().split('.');
  for (var i = 0; i < v1.length || i < v2.length; i++) {
    var n1 = parseInt(v1[i], 10);
    var n2 = parseInt(v2[i], 10);
    if (window.isNaN(n1)) {
      n1 = 0;
    }
    if (window.isNaN(n2)) {
      n2 = 0;
    }
    if (n1 < n2) {
      return -1
    }
    else if (n1 > n2) {
      return 1
    }
  }
  return 0
};

/**
 * 解析和操作版本号
 * @method version
 * @param {string} v - 需要解析的版本号
 * @return {lib.env~Version} Verson实例
 * @memberof lib
 */
lib$2.version = function (v) {
  return new Version(v)
};

var lib$3 = window.lib || (window.lib = {});
var env$1 = lib$3.env || (lib$3.env = {});

var search = window.location.search.replace(/^\?/, '');
env$1.params = {};
if (search) {
  var params = search.split('&');
  for (var i$1 = 0; i$1 < params.length; i$1++) {
    params[i$1] = params[i$1].split('=');
    try {
      env$1.params[params[i$1][0]] = decodeURIComponent(params[i$1][1]);
    }
    catch (e) {
      env$1.params[params[i$1][0]] = params[i$1][1];
    }
  }
}

var lib$1 = window.lib || (window.lib = {});
var env = lib$1.env || (lib$1.env = {});

var ua = window.navigator.userAgent;
var match;

/**
 * os
 */

match = ua.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/);
if (match) {
  /**
   * @type {Object}
   * @memberof lib.env
   * @property {String} name - os name, e.g. Android/AndroidPad/iPhone/iPod/iPad/Windows Phone/unknown, etc.
   * @property {lib.env~Version} version - os version.
   * @property {Boolean} isWindowsPhone
   * @property {Boolean} isIPhone - is iPhone/iTouch
   * @property {Boolean} isIPad
   * @property {Boolean} isIOS
   * @property {Boolean} isAndroid
   * @property {Boolean} isAndroidPad
   */
  env.os = {
    name: 'Windows Phone',
    isWindowsPhone: true,
    version: match[1]
  };
}
else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
  env.os = {
    version: match[1]
  };

  if ((ua.match(/Mobile\s+Safari/))) {
    env.os.name = 'Android';
    env.os.isAndroid = true;
  }
  else {
    env.os.name = 'AndroidPad';
    env.os.isAndroidPad = true;
  }
}
else if ((match = ua.match(/(iPhone|iPad|iPod)/))) {
  var name = match[1];

  match = ua.match(/OS ([\d_.]+) like Mac OS X/);

  env.os = {
    name: name,
    isIPhone: (name === 'iPhone' || name === 'iPod'),
    isIPad: name === 'iPad',
    isIOS: true,
    version: match[1].split('_').join('.')
  };
}
else {
  env.os = {
    name: 'unknown',
    version: '0.0.0'
  };
}

if (lib$1.version) {
  env.os.version = lib$1.version(env.os.version);
}

/**
 * browser
 */

match = ua.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/);

if (match) {
  /**
   * @type {Object}
   * @memberof env
   * @property {String} name - browser name，e.g. UC/QQ/Firefox/Chrome/Android/Safari/iOS Webview/Chrome Webview/IE/IEMobile/unknown, etc.
   * @property {env~Version} version - browser version.
   * @property {Boolean} isUC
   * @property {Boolean} isQQ
   * @property {Boolean} isIE
   * @property {Boolean} isIEMobile
   * @property {Boolean} isIELikeWebkit
   * @property {Boolean} isChrome
   * @property {Boolean} isAndroid
   * @property {Boolean} isSafari
   * @property {Boolean} isWebview
   */
  env.browser = {
    name: 'UC',
    isUC: true,
    version: match[1]
  };
}
else if ((match = ua.match(/MQQBrowser\/([\d.]+)/))) {
  env.browser = {
    name: 'QQ',
    isQQ: true,
    version: match[1]
  };
}
else if ((match = ua.match(/Firefox\/([\d.]+)/))) {
  env.browser = {
    name: 'Firefox',
    isFirefox: true,
    version: match[1]
  };
}
else if ((match = ua.match(/MSIE\s([\d.]+)/))
  || (match = ua.match(/IEMobile\/([\d.]+)/))) {
  env.browser = {
    version: match[1]
  };

  if (ua.match(/IEMobile/)) {
    env.browser.name = 'IEMobile';
    env.browser.isIEMobile = true;
  }
  else {
    env.browser.name = 'IE';
    env.browser.isIE = true;
  }

  if (ua.match(/Android|iPhone/)) {
    env.browser.isIELikeWebkit = true;
  }
}
else if ((match = ua.match(/(?:Chrome|CriOS)\/([\d.]+)/))) {
  env.browser = {
    name: 'Chrome',
    isChrome: true,
    version: match[1]
  };

  if (ua.match(/Version\/[\d+.]+\s*Chrome/)) {
    env.browser.name = 'Chrome Webview';
    env.browser.isWebview = true;
  }
}
else if (!!ua.match(/Safari/) && (match = ua.match(/Android[\s/]([\d.]+)/))) {
  env.browser = {
    name: 'Android',
    isAndroid: true,
    version: match[1]
  };
}
else if (ua.match(/iPhone|iPad|iPod/)) {
  if (ua.match(/Safari/)) {
    match = ua.match(/Version\/([\d.]+)/);
    env.browser = {
      name: 'Safari',
      isSafari: true,
      version: match[1]
    };
  }
  else {
    match = ua.match(/OS ([\d_.]+) like Mac OS X/);
    env.browser = {
      name: 'iOS Webview',
      isWebview: true,
      version: match[1].replace(/_/g, '.')
    };
  }
}
else {
  env.browser = {
    name: 'unknown',
    version: '0.0.0'
  };
}

if (lib$1.version) {
  env.browser.version = lib$1.version(env.browser.version);
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * get WXEnvironment info.
 * @param  {object} viewportInfo: info about viewport.
 * @param  {object} envInfo: info parsed from lib.env.
 */
function initEnv (viewportInfo, envInfo) {
  var browserName = envInfo.browser ? envInfo.browser.name : navigator.appName;
  var browserVersion = envInfo.browser ? envInfo.browser.version.val : null;
  var osName = envInfo.os.name;
  if (osName.match(/(iPhone|iPad|iPod)/i)) {
    osName = 'iOS';
  }
  else if (osName.match(/Android/i)) {
    osName = 'android';
  }
  var osVersion = envInfo.os.version.val;
  var env = {
    platform: 'Web',
    weexVersion: '0.11.57',
    userAgent: navigator.userAgent,
    appName: browserName,
    appVersion: browserVersion,
    osName: osName,
    osVersion: osVersion,
    deviceModel: envInfo.os.name || null
  };
  /**
   * viewportInfo: scale, deviceWidth, deviceHeight. dpr
   */
  return extend(env, viewportInfo)
}

// const viewportInfo = initViewport()

// 750 by default currently
// const scale = viewportInfo.scale

// const units = {
//   REM: 12 * scale,
//   VW: viewportInfo.deviceWidth / 100,
//   VH: viewportInfo.deviceHeight / 100,
//   VMIN: Math.min(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   VMAX: Math.max(viewportInfo.deviceWidth, viewportInfo.deviceHeight) / 100,
//   CM: 96 / 2.54 * scale,
//   MM: 96 / 25.4 * scale,
//   Q: 96 / 25.4 / 4 * scale,
//   IN: 96 * scale,
//   PT: 96 / 72 * scale,
//   PC: 96 / 6 * scale,
//   PX: scale
// }

// Object.freeze(units)
// Object.freeze(env)

// window.CSS_UNIT = units
window.WXEnvironment = initEnv(init$2(), window.lib.env);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* global Vue */

var weexModules = {};
var _roots = [];

var weex$3 = {
  __vue__: null,
  utils: utils$1,
  // units: window.CSS_UNIT,
  config: {
    env: window.WXEnvironment,
    bundleUrl: location.href
  },

  _components: {},

  document: {
    body: {}
  },

  requireModule: function requireModule (moduleName) {
    return weexModules[moduleName]
  },

  registerModule: function registerModule () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return (ref = this).registerApiModule.apply(ref, args)
    var ref;
  },

  /**
   * Register a new vue instance in this weex instance. Put its root element into weex.document.body.children, so
   * that user can use weex.document.body to walk through all dom structures in all vue instances in the page.
   */
  registerVueInstance: function registerVueInstance (instance) {
    if (!instance instanceof Vue) {
      {
        console.error("[vue-render] registerVueInstance: invalid instance, not a vue instance.");
      }
      return
    }
    var root = instance.$root;
    if (!root || !root.$el) {
      {
        console.error("[vue-render] registerVueInstance: instance has no root.");
      }
      return
    }
    this.document.body.children.push(root.$el);
  },

  // @deprecated
  require: function require () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule (name, module, meta) {
    var this$1 = this;

    if (!weexModules[name]) {
      weexModules[name] = {};
    }
    if (!!meta && meta.mountType === 'full') {
      weexModules[name] = module;
    }
    for (var key in module) {
      if (module.hasOwnProperty(key)) {
        weexModules[name][key] = bind(module[key], this$1);
      }
    }
  },

  registerComponent: function registerComponent (name, component) {
    if (!this.__vue__) {
      return console.log('[Vue Render] Vue is not found. Please import Vue.js before register a component.')
    }
    this._components[name] = 1;
    if (component._css) {
      var css = component._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (m) {
        return parseFloat(m) * 75 * weex$3.config.env.scale + 'px'
      });
      appendCss(css, ("weex-cmp-" + name));
      delete component._css;
    }
    this.__vue__.component(name, component);
  },

  // @deprecated
  getRoot: function getRoot () {},

  // @deprecated
  sender: {
    performCallback: function performCallback (callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data)
      }
      return null
    }
  },

  // @deprecated
  install: function install (module) {
    module.init(this);
  }
};

Object.defineProperty(weex$3.document.body, 'children', {
  get: function get () { return _roots }
})

; ['on', 'once', 'off', 'emit'].forEach(function (method) {
  weex$3[method] = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (!this._vue) {
      this._vue = new this.__vue__();
    }
    return (ref = this._vue)[("$" + method)].apply(ref, args)
    var ref;
  };
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/* istanbul ignore next */

var pseudoId = 0;
/**
 * get scoped class style map from stylesheets in <head>.
 */
function getHeadStyleMap () {
  {
    tagBegin('getHeadStyleMap');
  }
  var needToRemoveStyleSheetNodes = [];
  var styleSheetsArr = Array.from(document.styleSheets || []).filter(function (styleSheet) {
    return styleSheet.ownerNode.getAttribute('weex-scanned') !== '1'
  });

  var res = Array.from(styleSheetsArr)
    .reduce(function (pre, styleSheet) {
      styleSheet.ownerNode.setAttribute('weex-scanned', 1);
      /**
       * why not using styleSheet.rules || styleSheet.cssRules to get css rules ?
       * because weex's components defined non-standard style attributes, which is
       * auto ignored when access rule.cssText.
       * another reason not to use cssRules directy:
       * @issue: https://stackoverflow.com/questions/21642277/security-error-the-operation-is-insecure-in-firefox-document-stylesheets
       */
      if (
        // css in a link. just ignore this. probably a link stylesheet.
        (styleSheet.ownerNode.tagName.toLowerCase() === 'link')
        || !styleSheet.ownerNode.textContent
        // pseudo class styleSheet node is generated by weex. just ignore it.
        || styleSheet.ownerNode.id.match(/weex-pseudo-\d+/)) {
        return pre
      }
      /**
       * start to analyze it's content.
       */
      var strArr = trimComment(styleSheet.ownerNode.textContent.trim()).split(/}/);
      var len = strArr.length;
      var rules = [];
      for (var i = 0; i < len; i++) {
        var str = strArr[i];
        if (!str || str.match(/^\s*$/)) {
          continue
        }
        /**
         * should match these cases:
         * .a[data-v-xxx] { color: red; }
         * .a[data-v-xxx]:active { color: green; }
         * .a[data-v-xxx], .b[data-v-xxx] { color: red; }
         *
         * should not match these cases:
         * .a { color: red; }
         * etc.
         */
        var match = str.match(/((?:,?\s*\.[\w-]+\[data-v-\w+\](?::\w+)?)+)\s*({[^}]+)/);
        if (!match) {
          // not the vue static class styles map. so acquire no rules for this styleSheet.
          // just jump through this styleSheet and go to analyzing next.
          return pre
        }
        var clsNms = match[1].split(',').map(function (n) { return n.trim(); });
        var cssText = match[2].replace(/[{}]/g, '').trim();
        var clsNmsIdx = 0;
        var clsNmsLen = clsNms.length;
        while (clsNmsIdx < clsNmsLen) {
          rules.push({
            selectorText: clsNms[clsNmsIdx],
            cssText: cssText
          });
          clsNmsIdx++;
        }
      }
      Array.from(rules).forEach(function (rule) {
        var selector = rule.selectorText || '';
        var isPseudo = false;
        if (selector.match(/:(?:active|focus|enabled|disabled)/)) {
          isPseudo = true;
        }
        var styleObj = trimComment(rule.cssText).split(';')
          .reduce(function (styleObj, statement) {
            statement = statement.trim();
            if (statement && statement.indexOf('/*') <= -1) {
              var resArr = statement.split(':').map(function (part) { return part.trim(); });
              styleObj[resArr[0]] = resArr[1];
            }
            return styleObj
          }, {});
        if (isPseudo) {
          var txt = Object.keys(styleObj).reduce(function (pre, cur) {
            return pre + cur + ":" + (styleObj[cur]) + "!important;"
          }, '');
          appendCss((selector + "{" + txt + "}"), ("weex-pseudo-" + (pseudoId++)));
        }
        var objMap = !isPseudo ? pre : pre.pseudo;
        var res = objMap[selector];
        if (!res) {
          objMap[selector] = styleObj;
        }
        else {
          extend(objMap[selector], styleObj);
        }
      });
      /**
       * remove this styleSheet node since it's in the styleMap already. And this style
       * should only be fetched and used from styleMap to generate the final combined
       * component style, not from the stylesheet itself.
       */
      needToRemoveStyleSheetNodes.push(styleSheet.ownerNode);
      return pre
    }, { pseudo: {}});
  if (!window._no_remove_style_sheets) {
    needToRemoveStyleSheetNodes.forEach(function (node) {
      node.parentNode.removeChild(node);
    });
  }
  else {
    console.warn("[vue-render] you've defined '_no_remove_style_sheets' and the v-data-xx stylesheets will not be removed.");
  }
  {
    tagEnd('getHeadStyleMap');
  }
  return res
}

// export function getScopeIds (context) {
//   const arr = []
//   let ctx = context
//   let scopeId
//   while (ctx) {
//     scopeId = ctx.$options._scopeId
//     scopeId && arr.push(scopeId)
//     ctx = ctx.$options.parent
//   }
//   return arr
// }

function getScopeId (vnode) {
  return vnode.context.$options._scopeId
}

/**
 * get style in <style scoped> tags for this component.
 */
function getScopeStyle (vnode, classNames) {
  var scopeId = getScopeId(vnode);
  var style = {};
  var styleMap = weex._styleMap || {};
  var clsNmsIdx = 0;
  var clsNmsLen = classNames.length;
  while (clsNmsIdx < clsNmsLen) {
    var cls = "." + (classNames[clsNmsIdx]) + "[" + scopeId + "]";
    var map = styleMap[cls];
    map && extendTruthy(style, map);
    clsNmsIdx++;
  }
  return camelizeKeys(style)
}

function getStyle (vnode, extract) {
  var data = vnode.data || {};
  var staticClassNames = (typeof data.staticClass === 'string') ? data.staticClass.split(' ') : (data.staticClass || []);
  var classNames = (typeof data.class === 'string') ? data.class.split(' ') : (data.class || []);
  var clsNms = staticClassNames.concat(classNames);
  var style = normalizeStyle(getScopeStyle(vnode, clsNms));
  /**
   * cache static style and bind style.
   * cached staticStyle (including style and staticStyle) has already been normalized
   * in $processStyle. So there's no need to normalize it again.
   */
  if (!data.cached) {
    // cache staticStyle once in the beginning.
    data.cached = extendTruthy({}, data.staticStyle);
  }
  // cache binding style every time since the binding style is variable.
  extendTruthy(data.cached, data.style);
  extend(style, data.cached);
  data.staticStyle = style;
  if (extract) {
    delete data.staticStyle;
    delete data.style;
  }
  return style
}

/**
 * get style merged with static styles, binding styles, and scoped class styles,
 * with keys in camelcase.
 */
function getComponentStyle (context, extract) {
  if (!context.$vnode) {
    {
      return console.error('[vue-render] getComponentStyle failed: no $vnode in context.')
    }
    return {}
  }
  var style = {};
  var vnode = context.$vnode;
  while (vnode) {
    extend(style, getStyle(vnode, extract));
    vnode = vnode.parent;
  }
  style = autoPrefix(style);
  /**
   * when prefixed value is a array, it should be applied to element
   * during the next tick.
   * e.g.
   *  background-image:  linear-gradient(to top,#f5fefd,#ffffff);
   *  will generate:
   *  {
   *    backgroundImage: [
   *      "-webkit-linear-gradient(to top,#f5fefd,#ffffff)",
   *      "-moz-linear-gradient(to top,#f5fefd,#ffffff)",
   *      "linear-gradient(to top,#f5fefd,#ffffff)"]
   *  }
   */
  var loop = function ( k ) {
    if (Array.isArray(style[k])) {
      var vals = style[k];
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          for (var i = 0; i < vals.length; i++) {
            el.style[k] = vals[i];
          }
        }
      });
      if (k !== 'position') { delete style[k]; }
    }
  };

  for (var k in style) loop( k );

  /**
   * If position is 'sticky', then add it to the stickyChildren of the parent scroller.
   */
  var pos = style.position;
  var reg = /sticky$/;
  if (pos === 'fixed') {
    context.$nextTick(function () {
      var el = context.$el;
      if (el) {
        el.classList.add('weex-fixed');
      }
    });
  }
  else if (isArray(pos) && pos[0].match(reg) || (pos + '').match(reg)) {
    delete style.position;
    // use native sticky.
    if (supportSticky()) {
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          el.classList.add('weex-ios-sticky');
        }
      });
    }
    // use re-implementation of sticky.
    else if (!context._stickyAdded) {
      var uid = context._uid;
      var scroller = getParentScroller(context);
      if (scroller) {
        context._stickyAdded = true;
        if (!scroller._stickyChildren) {
          scroller._stickyChildren = {};
        }
        scroller._stickyChildren[uid] = context;
      }
      context.$nextTick(function () {
        var el = context.$el;
        if (el) {
          context._initOffsetTop = el.offsetTop;
        }
      });
    }
  }

  return style
}

function extractComponentStyle (context) {
  return getComponentStyle(context, true)
}

/**
 * process sticky children in scrollable components.
 * current only support list and vertical scroller.
 */
function processSticky (context) {
  /**
   * current browser support 'sticky' or '-webkit-sticky', so there's no need
   * to do further more.
   */
  if (supportSticky()) {
    return
  }
  // current only support list and vertical scroller.
  if (context.scrollDirection === 'horizontal') {
    return
  }
  var stickyChildren = context._stickyChildren;
  var len = stickyChildren && stickyChildren.length || 0;
  if (len <= 0) { return }

  var container = context.$el;
  if (!container) { return }
  var scrollTop = container.scrollTop;

  var stickyChild;
  for (var i = 0; i < len; i++) {
    stickyChild = stickyChildren[i];
    if (stickyChild._initOffsetTop < scrollTop) {
      stickyChild._addSticky();
    }
    else {
      stickyChild._removeSticky();
    }
  }
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * remove text nodes in the nodes array.
 * @param  {Array} nodes
 * @return {Array} nodes without text nodes.
 */
function trimTextVNodes (vnodes) {
  if (isArray(vnodes)) {
    return vnodes.filter(function (vnode) { return !!vnode.tag; })
  }
  return vnodes
}

/**
 * get listeners from on config and v-on binding.
 * v-on binding has a priority over on config.
 * @param {vnode} vnode
 * @param {String} evt: event name.
 */
function getListeners (vnode, evt) {
  var handlers = [];
  while (vnode) {
    if (vnode.data && vnode.data.on) {
      var handler = vnode.data.on[evt];
      handler && handlers.push(handler);
    }
    if (vnode.componentOptions && vnode.componentOptions.listeners) {
      var handler$1 = vnode.componentOptions.listeners[evt];
      handler$1 && handlers.push(handler$1);
    }
    vnode = vnode.parent;
  }
  return handlers
}

var supportedEvents = [
  'longpress', 'appear', 'disappear',
  'touchstart', 'touchmove', 'touchend',
  'panstart', 'panmove', 'panend', 'swipe', 'longpress'
];

/**
 * is a element in a '<a>' tag?
 * @param {HTMLElement} el
 */
function isInANode (el) {
  var parent = el.parentNode;
  while (parent && parent !== document.body) {
    if (parent.tagName.toLowerCase() === 'a') {
      return true
    }
    parent = parent.parentNode;
  }
}

/**
 * emit native events to enable v-on.
 * @param {VComponent} context: which one to emit a event on.
 * @param {array | object} extras: extra events. You can pass in multiple arguments here.
 */
function createEventMap (context) {
  var extras = [], len$1 = arguments.length - 1;
  while ( len$1-- > 0 ) extras[ len$1 ] = arguments[ len$1 + 1 ];

  var eventMap = {};
  /**
   * Bind some original type event to your specified type event handler.
   * e.g. bind 'tap' event to 'click' event listener: bindFunc('tap')('click').
   * Or bind certian event with your specified handler: bindFunc('click', someFunction)
   */
  var bindFunc = function (originalType) {
    return function (listenTo) {
      var handler;
      var evtName = originalType || listenTo;
      if (typeof listenTo === 'function') {
        handler = listenTo;
      }
      else if (typeof listenTo === 'string') {
        handler = function (e) {
          /**
           * allow original bubbling.
           * use '_triggered' to control actural bubbling.
           */
          if (e._triggered) {
            return
          }
          // but should trigger the closest parent which has bound the
          // event handler.
          var vm = context;
          while (vm) {
            var ons = getListeners(vm.$vnode, listenTo);
            var len = ons.length;
            if (len > 0) {
              var idx = 0;
              while (idx < len) {
                var on = ons[idx];
                if (on && on.fn) {
                  on = on.fn;
                }
                var evt = e;
                if (originalType && evtName !== listenTo) {
                  evt = extend({}, { type: listenTo });
                  // weex didn't provide these two methods for event object.
                  delete event.preventDefault;
                  delete event.stopPropagation;
                }
                on && on.call(vm, evt);
                idx++;
              }
              // once a parent node (or self node) has triggered the handler, then
              // it stops bubbling immediately, and a '_triggered' object is set.
              e._triggered = {
                el: vm.$el
              };
              return
            }
            vm = vm.$parent;
          }
        };
      }
      if (!eventMap[evtName]) {
        eventMap[evtName] = [];
      }
      eventMap[evtName].push(handler);
    }
  };

  /**
   * 1. Dispatch default supported events directly to user's event listeners. These
   * listeners will be triggered before extras event handlers.
   */
  supportedEvents.forEach(bindFunc());

  /**
   * 2. component's extra event bindings. This is mostly for the needs of component's
   * own special behaviours. These handlers will be processed after the user's
   * corresponding event handlers.
   */
  if (extras) {
    var len = extras.length;
    for (var i = 0; i < len; i++) {
      var extra = extras[i];
      if (isArray(extra)) {
        extra.forEach(bindFunc());
      }
      else if (typeof extra === 'object') {
        for (var key in extra) {
          bindFunc(key)(extra[key]);
        }
      }
    }
  }

  /**
   * 3. special binding for click event, which should be a fastclick event without
   * 300ms latency.
   */
  bindFunc('tap')('click');
  /**
   * Special treatment for click event:
   * we already use tap to trigger click event, so the click event should:
   * 1. trigger none of any vm's click listeners.
   * 2. prevent default behaviour for a `<a>` element.
   * This means the click event should always be swallowed in silence.
   */
  bindFunc('click')(function (e) {
    if (e._triggered) {
      return
    }
    var vm = context;
    while (vm) {
      var ons = getListeners(vm.$vnode, 'click');
      var len = ons.length;
      if (len > 0 && vm.$el && isInANode(vm.$el)) {
        e.preventDefault();
        e._triggered = { el: vm.$el };
        return
      }
      vm = vm.$parent;
    }
  });

  return eventMap
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var core$1 = Object.freeze({
	getHeadStyleMap: getHeadStyleMap,
	getScopeId: getScopeId,
	getScopeStyle: getScopeStyle,
	getComponentStyle: getComponentStyle,
	extractComponentStyle: extractComponentStyle,
	processSticky: processSticky,
	trimTextVNodes: trimTextVNodes,
	createEventMap: createEventMap
});

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
window.global = window;
window.weex = weex$3;

weex$3._styleMap = {}

; ['getComponentStyle',
  'extractComponentStyle',
  'createEventMap',
  'trimTextVNodes'].forEach(function (method) {
    weex$3[method] = core$1[method].bind(weex$3);
  });

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import '../../browser/render/gesture'
// register built-in modules.
global.weex.install(modules$1);

function setVue (vue) {
  if (!vue) {
    throw new Error('[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.')
  }
  global.weex.__vue__ = vue;
  console.log(("[Vue Render] install Vue " + (vue.version) + "."));
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../validator'
var _css$1 = "\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n";

var _switch = {
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data () {
    return {
      isChecked: (this.checked !== 'false' && this.checked !== false),
      isDisabled: (this.disabled !== 'false' && this.disabled !== false)
    }
  },
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-switch'];
      this.isChecked && classArray.push('weex-switch-checked');
      this.isDisabled && classArray.push('weex-switch-disabled');
      return classArray.join(' ')
    }
  },
  methods: {
    toggle: function toggle () {
      // TODO: handle the events
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('change', { value: this.isChecked });
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this._renderHook();
    return createElement('span', {
      attrs: { 'weex-type': 'switch' },
      on: {
        click: function (event) {
          this$1.$emit('click', event);
          this$1.toggle();
        }
      },
      staticClass: this.wrapperClass,
      staticStyle: extractComponentStyle(this)
    }, [createElement('small', { staticClass: 'weex-switch-inner' })])
  },
  _css: _css$1
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../validator'

var _css$2 = "\n.weex-a {\n  text-decoration: none;\n}\n";
var cnt = 0;

var a = {
  name: 'weex-a',
  props: {
    href: String
  },
  mounted: function mounted () {
    var $el = this.$el;
    var id = $el.id;

    /**
     * if there is a child component already triggered a click handler, then
     * this link jumping should be prevented.
     */
    $el.addEventListener('click', function (e) {
      var el = e._triggered && e._triggered.el;
      if (el && (el !== $el) && !el.querySelector(("#" + id))) {
        e.preventDefault();
      }
    });
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this._renderHook();
    var id = cnt++;
    return createElement('html:a', {
      attrs: {
        'weex-type': 'a',
        'id': ("weex-a-" + id),
        href: this.href
      },
      on: createEventMap(this),
      staticClass: 'weex-a weex-ct',
      staticStyle: extractComponentStyle(this)
    }, trimTextVNodes(this.$slots.default))
  },
  _css: _css$2
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../validator'
var _css$3 = "\nbody > .weex-div {\n  min-height: 100%;\n}\n";

var div = {
  name: 'weex-div',
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this._renderHook();
    return createElement('html:div', {
      attrs: { 'weex-type': 'div' },
      on: createEventMap(this),
      staticClass: 'weex-div weex-ct',
      staticStyle: extractComponentStyle(this)
    }, trimTextVNodes(this.$slots.default))
  },
  _css: _css$3
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var _css$4 = "\n.weex-image, .weex-img {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n";
/**
 * get resize (stetch|cover|contain) related styles.
 */
function getResizeStyle (context) {
  var stretch = '100% 100%';
  var resize = context.resize || stretch;
  var bgSize = ['cover', 'contain', stretch].indexOf(resize) > -1 ? resize : stretch;
  // compatibility: http://caniuse.com/#search=background-size
  return { 'background-size': bgSize }
}

function preProcessSrc (context, url, mergedStyle) {
  // somehow the merged style in _prerender hook is gone.
  // just return the original src.
  if (!mergedStyle || !mergedStyle.width || !mergedStyle.height) {
    return url
  }
  var width = mergedStyle.width;
  var height = mergedStyle.height;
  return context.processImgSrc && context.processImgSrc(url, {
    width: parseFloat(width),
    height: parseFloat(height),
    quality: context.quality,
    sharpen: context.sharpen,
    original: context.original
  }) || url
}

var image = {
  props: {
    src: String,
    placeholder: String,
    resize: String,
    quality: String,
    sharpen: String,
    original: [String, Boolean]
  },

  updated: function updated () {
    this._fireLazyload();
  },

  mounted: function mounted () {
    this._fireLazyload();
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('image', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    // const style = this._normalizeInlineStyles(this.$vnode.data)
    var resizeStyle = getResizeStyle(this);
    var style = extractComponentStyle(this);
    this._renderHook();
    return createElement('figure', {
      attrs: {
        'weex-type': 'image',
        'img-src': preProcessSrc(this, this.src, style),
        'img-placeholder': preProcessSrc(this, this.placeholder, style)
      },
      on: createEventMap(this, ['load', 'error']),
      staticClass: 'weex-image weex-el',
      staticStyle: extend(style, resizeStyle)
    })
  },
  _css: _css$4
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { extractComponentStyle } from '../core'

// import config from '../config'

var lazyloadWatched = false;
function watchLazyload () {
  lazyloadWatched = true
  ; [
    'scroll' ].forEach(function (evt) {
    window.addEventListener(evt, getThrottleLazyload(25, document.body));
  });
}

var warned = false;
var notePage = 'https://gist.github.com/MrRaindrop/5a805a067146609e5cfd4d64d775d693#file-weex-vue-render-config-for-vue-loader-js';
function warnProcessStyle () {
  if (!warned) {
    warned = true;
    var page = window._process_style_note_page || notePage;
    console.warn("[vue-render]: you should add vue-loader config with $processStyle to enable inline styles's "
      + "normalization. see " + page + " If you already did this, please ignore this message.");
  }
}

var base$1 = {
  beforeCreate: function beforeCreate () {
    if (!lazyloadWatched) {
      watchLazyload();
    }
    {
      tagBeforeCreate();
    }
  },

  mounted: function mounted () {
    if (this.$options._componentTag === 'image') {
      window._has_image_in_first_screen = true;
    }
    if (this === this.$root) {
      tagRootMounted();
      if (!window._has_image_in_first_screen) {
        tagFirstScreen();
      }
    }
    if (!weex._root) {
      weex._root = this.$root.$el;
      weex._root.classList.add('weex-root');
    }

    // give warning for not using $processStyle in vue-loader config.
    if (!warned && !window._style_processing_added) {
      warnProcessStyle();
    }

    // bind attrs to $el.
    var i, j;
    if (this.$el && (i = j = this.$vnode) && (i = i.data) && (j = j.componentOptions)) {
      this.$el.attrs = extend({}, i.attrs, j.propsData);
    }
    triggerAppear(this);
    watchAppear(this);
  },

  beforeUpdate: function beforeUpdate () {
    {
      tagBeforeUpdate();
    }
  },

  updated: function updated () {
    {
      tagUpdated();
    }
  },

  destroyed: function destroyed () {
    triggerDisappear(this);
  },

  methods: {
    _renderHook: function _renderHook () {
      if (!window._first_screen_detected) {
        window._component_count++;
      }
    },

    _getScopeIds: function _getScopeIds () {
      var arr = [];
      var ctx = this;
      var scopeId;
      while (ctx) {
        scopeId = ctx.$options._scopeId;
        scopeId && arr.push(scopeId);
        ctx = ctx.$options.parent;
      }
      return arr
    },

    // _getParentScroller () {
    //   let parent = this
    //   while (parent && config.scrollableTypes.indexOf(parent.$options._componentTag) <= -1) {
    //     parent = parent.$options.parent
    //   }
    //   return parent
    // },

    _fireLazyload: function _fireLazyload (el) {
      {
        tagBegin('base._fireLazyload');
      }
      getThrottleLazyload(25)();
      {
        tagEnd('base._fireLazyload');
      }
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * get a beforeCreate hook, which has a mark to identify the hook function itself.
 */
function getIdentifiedBeforeCreate () {
  var disposed = {}; // disposed components. Already scanned.
  function beforeCreate () {
    /**
     * get static class style map from document's styleSheets.
     * Weex.on will create a Vue instance. In this case we'll ignore it, since
     * it's not sure whether the scoped style has already attached to head or not.
     */
    var tagName = this.$options && this.$options._componentTag;
    /**
     * For vue-loader ^11.3.x, there's no injectStyle function. The styleSheet
     * is already injected into the head. Just scan it.
     */
    // async component.
    if ((this.$vnode && this.$vnode.data && this.$vnode.data.tag === 'component')
      || (this === this.$root && this.$options && !this._firstScanned)) {
      this._firstScanned = true;
      extend(weex._styleMap, getHeadStyleMap());
    }
    /**
     * For vue-loader ^12.0, the injectStyle function is hooked. We should scan
     * style map after the injectStyle hook called.
     */
    if (((this === this.$root && this.$options)
      || (tagName
      && !weex._components[tagName]
      && !disposed[tagName]))
      && !this._secondScanned) {
      disposed[tagName] = 1;
      this._secondScanned = true;
      var hooks = this.$options.beforeCreate;
      var len = hooks.length;
      var thisHookIdx = 0; // index of this hook in the hooks array.
      for (; thisHookIdx < len; thisHookIdx++) {
        if (hooks[thisHookIdx]._styleMixin) { break }
      }
      var loop = function ( i ) {
        var func = hooks[i];
        if (func.name === 'injectStyle') {
          hooks[i] = function () {
            // call the original injectStyle hook.
            func.call(this);
            // scan the new appended styleSheet.
            extend(weex._styleMap, getHeadStyleMap());
            hooks[i] = func;
          };
        }
      };

      for (var i = thisHookIdx + 1; i < len; i++) loop( i );
    }
  }
  beforeCreate._styleMixin = true;
  return beforeCreate
}

var style = {
  beforeCreate: getIdentifiedBeforeCreate(),

  methods: {
    $processStyle: function $processStyle (style) {
      window._style_processing_added = true;
      if (!style) {
        return
      }
      return normalizeStyle(camelizeKeys(style))
    },

    _extractComponentStyle: function _extractComponentStyle () {
      return extractComponentStyle(this)
    },

    /**
     * get style from class, staticClass, style and staticStyle.
     * merge styles priority: high -> low
     *  1. data.style (bound style).
     *  2. data.staticStyle (inline styles).
     *  3. data.class style (bound class names).
     *  4. data.staticClass style (scoped styles or static classes).
     */
    _getComponentStyle: function _getComponentStyle (data) {
      return getComponentStyle(this)
    },

    _getParentRect: function _getParentRect () {
      var parentElm = this.$options._parentElm;
      return parentElm && parentElm.getBoundingClientRect()
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var DEFAULT_OFFSET_ACCURACY = 10;
var DEFAULT_LOADMORE_OFFSET = 0;

function getThrottledScroll (context) {
  var scale = weex.config.env.scale;
  if (!context._throttleScroll) {
    var wrapper = context.$refs.wrapper;
    var inner = context.$refs.inner;
    var preOffset = (context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop)
      || 0;
    context._throttleScroll = throttle(function (evt) {
      var offset = context.scrollDirection === 'horizontal'
        ? wrapper.scrollLeft
        : wrapper.scrollTop;
      var indent = parseInt(context.offsetAccuracy) * scale;
      function triggerScroll () {
        var rect = inner.getBoundingClientRect();
        evt.contentSize = { width: rect.width, height: rect.height };
        evt.contentOffset = {
          x: wrapper.scrollLeft,
          /**
           * positive direciton for y-axis is down.
           * so should use negative operation on scrollTop.
           *
           *  (0,0)---------------> x
           *       |
           *       |
           *       |
           *       |
           *       v y
           *
           */
          y: -wrapper.scrollTop
        };
        context.$emit('scroll', evt);
      }
      if (Math.abs(offset - preOffset) >= indent) {
        triggerScroll();
        preOffset = offset;
      }
    }, 16, true);
  }
  return context._throttleScroll
}

var scrollable = {
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: DEFAULT_LOADMORE_OFFSET,
      validator: function validator (value) {
        var val = parseInt(value);
        return !isNaN(val) && val >= DEFAULT_LOADMORE_OFFSET
      }
    },

    offsetAccuracy: {
      type: [Number, String],
      default: DEFAULT_OFFSET_ACCURACY,
      validator: function validator$1 (value) {
        var val = parseInt(value);
        return !isNaN(val) && val >= DEFAULT_OFFSET_ACCURACY
      }
    }
  },

  created: function created () {
    // should call resetLoadmore() to enable loadmore event.
    this._loadmoreReset = true;
  },

  methods: {
    updateLayout: function updateLayout () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this._wrapperWidth = rect.width;
        this._wrapperHeight = rect.height;
      }
      var inner = this.$refs.inner;
      var children = inner && inner.children;
      if (inner) {
        var rect$1 = inner.getBoundingClientRect();
        this._innerWidth = rect$1.width;
        this._innerHeight = rect$1.height;
      }
      var loadingEl = this._loading && this._loading.$el;
      var refreshEl = this._refresh && this._refresh.$el;
      if (loadingEl) {
        this._innerHeight -= loadingEl.getBoundingClientRect().height;
      }
      if (refreshEl) {
        this._innerHeight -= refreshEl.getBoundingClientRect().height;
      }
      // inner width is always the viewport width somehow in horizontal
      // scoller, therefore the inner width should be reclaculated.
      if (this.scrollDirection === 'horizontal' && children) {
        this._innerWidth = getRangeWidth(inner);
      }
    },

    resetLoadmore: function resetLoadmore () {
      this._loadmoreReset = true;
    },

    handleScroll: function handleScroll (event) {
      getThrottleLazyload(25, this.$el, 'scroll')();
      getThrottledScroll(this)(event);

      processSticky(this);

      // fire loadmore event.
      var inner = this.$refs.inner;
      if (inner) {
        var innerLength = this.scrollDirection === 'horizontal'
          ? this._innerWidth
          : this._innerHeight;
        if (!this._innerLength) {
          this._innerLength = innerLength;
        }
        if (this._innerLength !== innerLength) {
          this._innerLength = innerLength;
          this._loadmoreReset = true;
        }
        if (this._loadmoreReset && this.reachBottom(this.loadmoreoffset)) {
          this._loadmoreReset = false;
          this.$emit('loadmore', event);
        }
      }
    },

    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },

    reachBottom: function reachBottom (offset) {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      offset = parseInt(offset || 0) * weex.config.env.scale;

      if (wrapper && inner) {
        var key = this.scrollDirection === 'horizontal'
          ? 'width'
          : 'height';
        var innerLength = this[("_inner" + (key[0].toUpperCase()) + (key.substr(1)))];
        var wrapperLength = this[("_wrapper" + (key[0].toUpperCase()) + (key.substr(1)))];
        var scrollOffset = this.scrollDirection === 'horizontal'
          ? wrapper.scrollLeft
          : wrapper.scrollTop;
        return scrollOffset >= innerLength - wrapperLength - offset
      }
      return false
    },

    handleTouchStart: function handleTouchStart (event) {
      // event.preventDefault()
      // event.stopPropagation()
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove (event) {
      // event.preventDefault()
      // event.stopPropagation()
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          this._touchParams.offsetY = offsetY;
          if (reachTop && this._refresh) {
            this._refresh.pullingDown(offsetY);
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingUp(-offsetY);
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      // event.preventDefault()
      // event.stopPropagation()
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner) {
          if (reachTop && this._refresh) {
            this._refresh.pullingEnd();
          }
          else if (reachBottom && this._loading) {
            this._loading.pullingEnd();
          }
        }
      }
      delete this._touchParams;
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// 

// input and textare has some common api and event
var findEnterKeyType = function (key) {
  var keys = ['default', 'go', 'next', 'search', 'send'];
  if (keys.indexOf(key) > -1) {
    return key
  }
  return 'done'
};

var inputCommon = {
  methods: {
    focus: function focus () {
      this.$el && this.$el.focus();
    },
    blur: function blur () {
      this.$el && this.$el.blur();
    },
    // support enter key event
    createKeyboardEvent: function createKeyboardEvent (events) {
      var customKeyType = this.returnKeyType;
      var self = this;
      if (this._events['return']) {
        var keyboardEvents = {
          'keyup': function (ev) {
            var code = ev.keyCode;
            var key = ev.key;
            if (code === 13) {
              if (key.toLowerCase() === 'tab') {
                key = 'next';
              }
              var rightKeyType = findEnterKeyType(customKeyType);
              ev.returnKeyType = rightKeyType;
              ev.value = ev.target.value;
              self.$emit('return', ev);
            }
          }
        };
        events = extend(events, keyboardEvents);
      }
      return events
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var sticky = {
  destroyed: function destroyed () {
    if (!this._stickyAdded) { return }
    var scroller = getParentScroller(this);
    if (!scroller) { return }
    delete scroller._stickyChildren[this._uid];
  },

  methods: {
    _addSticky: function _addSticky () {
      var el = this.$el;
      if (!el || el.nodeType === 1) {
        {
          console.error("[vue-render] $el doesn't exist to add sticky.");
        }
        return
      }
      el.classList.add('sticky');
      if (!this._placeholder) {
        this._placeholder = el.cloneNode(true);
      }
      this._placeholder.style.display = 'block';
      this._placeholder.style.width = this.$el.offsetWidth + 'px';
      this._placeholder.style.height = this.$el.offsetHeight + 'px';
      el.parentNode.insertBefore(this._placeholder, this.$el);
    },

    _removeSticky: function _removeSticky () {
      var el = this.$el;
      if (!el || el.nodeType === 1) {
        {
          console.error("[vue-render] $el doesn't exist to remove sticky.");
        }
        return
      }
      el.classList.remove('sticky');
      if (this._placeholder) {
        this._placeholder.parentNode.removeChild(this._placeholder);
      }
      this._placeholder = null;
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview Input component.
 * Support v-model only if vue version is large than 2.2.0
 */
// import { validateStyles } from '../validator'

var ID_PREFIX_PLACEHOLDER_COLOR = 'wipt_plc_';
var ID_PREFIX_INPUT = 'wipt_';
var idCount = 0;

var _css$5 = "\n.weex-input, .weex-textarea {\n  font-size: 0.426667rem;\n}\n.weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n";

function setPlaceholderColor (inputVm, placeholderColor) {
  if (!placeholderColor) {
    return
  }
  var vendors = [
    '::-webkit-input-placeholder',
    ':-moz-placeholder',
    '::-moz-placeholder',
    ':-ms-input-placeholder',
    ':placeholder-shown'
  ];
  var id = inputVm._id;
  appendCss(
    vendors.map(function (vendor, idx) {
      return ("#" + ID_PREFIX_INPUT + id + (vendors[idx]) + "{color:" + placeholderColor + ";}")
    }).join(''),
    ("" + ID_PREFIX_PLACEHOLDER_COLOR + id),
    true);
}

function processStyle (vm) {
  var styles = extractComponentStyle(vm);
  var phColor = styles.placeholderColor;
  if (phColor) {
    setPlaceholderColor(vm, phColor);
  }
  return styles
}

var input = {
  mixins: [inputCommon],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator (value) {
        return [
          'email', 'number', 'password', 'search', 'tel', 'text', 'url', 'date',
          'datetime', 'time' ].indexOf(value) !== -1
      }
    },
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    maxlength: [String, Number],
    returnKeyType: String
  },

  render: function render (createElement) {
    if (!this._id) {
      this._id = idCount++;
    }
    var events = extend(createEventMap(this), mapFormEvents(this));
    this._renderHook();
    return createElement('html:input', {
      attrs: {
        'weex-type': 'input',
        id: ("" + ID_PREFIX_INPUT + (this._id)),
        type: this.type,
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        maxlength: this.maxlength,
        'returnKeyType': this.returnKeyType
      },
      domProps: {
        value: this.value
      },
      on: this.createKeyboardEvent(events),
      staticClass: 'weex-input weex-el',
      staticStyle: processStyle(this)
    })
  },
  _css: _css$5
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var header = {
  data: function data () {
    return {
      sticky: false,
      initTop: 0,
      placeholder: null,
      supportSticky: supportSticky()
    }
  },

  mounted: function mounted () {
    this.initTop = this.$el.offsetTop;
    this.placeholder = window.document.createElement('div');
  },

  updated: function updated () {
    if (!this.sticky) {
      this.initTop = this.$el.offsetTop;
    }
  },

  methods: {
    addSticky: function addSticky () {
      this.sticky = true;
      this.placeholder.style.display = 'block';
      this.placeholder.style.width = this.$el.offsetWidth + 'px';
      this.placeholder.style.height = this.$el.offsetHeight + 'px';
      this.$el.parentNode.insertBefore(this.placeholder, this.$el);
    },

    removeSticky: function removeSticky () {
      this.sticky = false;
      try {
        this.$el.parentNode.removeChild(this.placeholder);
      }
      catch (e) {
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('header', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this._renderHook();
    return createElement('html:header', {
      attrs: { 'weex-type': 'header' },
      on: createEventMap(this),
      ref: 'header',
      staticClass: 'weex-header weex-ct',
      class: { 'weex-sticky': this.sticky, 'weex-ios-sticky': this.supportSticky },
      staticStyle: extractComponentStyle(this)
    }, this.$slots.default)
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var listMixin = {
  methods: {
    handleListScroll: function handleListScroll (event) {
      this.handleScroll(event);

      if (supportSticky()) {
        return
      }

      var scrollTop = this.$el.scrollTop;
      var h = this.$children.filter(function (vm) { return vm.$refs.header; });

      if (h.length <= 0) {
        return
      }

      for (var i = 0; i < h.length; i++) {
        if (h[i].initTop < scrollTop) {
          h[i].addSticky();
        }
        else {
          h[i].removeSticky();
        }
      }
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../../../validator'
var list = {
  name: 'list',
  mixins: [scrollable, listMixin],
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-list', 'weex-list-wrapper', 'weex-ct'];
      this._refresh && classArray.push('with-refresh');
      this._loading && classArray.push('with-loading');
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        return true
      });
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-list-inner weex-ct'
        }, this._cells)
      ]
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'list';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    this._renderHook();
    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'list' },
      staticClass: this.wrapperClass,
      on: createEventMap(this, {
        scroll: this.handleListScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      }),
      staticStyle: extractComponentStyle(this)
    }, this.createChildren(createElement))
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND,  either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileoverview waterfall
 * NOTE: only support full screen width waterfall.
 */
var NORMAL_GAP_SIZE = 32;
var DEFAULT_COLUMN_COUNT = 1;

var waterfall = {
  mixins: [scrollable],
  props: {
    /**
     * specified gap size.
     * value can be number or 'normal'. 'normal' (32px) by default.
     */
    columnGap: {
      type: [String, Number],
      default: 'normal',
      validator: function validator (val) {
        if (!val || val === 'normal') {
          return true
        }
        val = parseInt(val);
        return !isNaN(val) && val > 0
      }
    },
    /**
     * the maximum column counts.
     * value can be number or 'auto'. 1 by default.
     */
    columnCount: {
      type: [String, Number],
      default: DEFAULT_COLUMN_COUNT,
      validator: function validator$1 (val) {
        val = parseInt(val);
        return !isNaN(val) && val > 0
      }
    },
    /**
     * the mimimum column width.
     * value can be number or 'auto'. 'auto' by default.
     */
    columnWidth: {
      type: [String, Number],
      default: 'auto',
      validator: function validator$2 (val) {
        if (!val || val === 'auto') {
          return true
        }
        val = parseInt(val);
        return !isNaN(val) && val > 0
      }
    }
  },

  mounted: function mounted () {
    this._nextTick();
  },

  updated: function updated () {
    this.$nextTick(this._nextTick());
  },

  methods: {
    _createChildren: function _createChildren (h, rootStyle) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      this._headers = [];
      this._others = [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        var tag = vnode.componentOptions.tag;
        if (tag === 'refresh' || tag === 'loading') {
          this$1[("_" + tag)] = vnode;
          return false
        }
        if (tag === 'header') {
          this$1._headers.push(vnode);
          return false
        }
        if (tag !== 'cell') {
          this$1._others.push(vnode);
          return false
        }
        return true
      });
      this._reCalc(rootStyle);
      this._genColumns(h);
      var children = [];
      this._refresh && children.push(this._refresh);
      children = children
        .concat(this._headers)
        .concat(this._others);
      children.push(h('html:div', {
        ref: 'columns',
        staticClass: 'weex-waterfall-inner-columns weex-ct'
      }, this._columns));
      this._loading && children.push(this._loading);
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-waterfall-inner weex-ct'
        }, children)
      ]
    },

    _reCalc: function _reCalc (rootStyle) {
      /**
       * NOTE: columnGap and columnWidth can't both be auto.
       * NOTE: the formula:
       *  totalWidth = n * w + (n - 1) * gap
       * 1. if columnCount = n then calc w
       * 2. if columnWidth = w then calc n
       * 3. if columnWidth = w and columnCount = n then calc totalWidth
       *    3.1 if totalWidth < ctWidth then increase columnWidth
       *    3.2 if totalWidth > ctWidth then decrease columnCount
       */
      var width, gap, cnt, ctWidth;
      var scale = weex.config.env.scale;
      var el = this.$el;
      function getCtWidth (width, style$$1) {
        var padding = style$$1.padding
          ? parseInt(style$$1.padding) * 2
          : parseInt(style$$1.paddingLeft || 0) + parseInt(style$$1.paddingRight || 0);
        return width - padding
      }
      if (el && el.nodeType === 1) {  // already mounted
        var cstyle = window.getComputedStyle(el);
        ctWidth = getCtWidth(el.getBoundingClientRect().width, cstyle);
      }
      else {  // not mounted.
        // only support full screen width for waterfall component.
        ctWidth = getCtWidth(document.documentElement.clientWidth, rootStyle);
      }

      gap = this.columnGap;
      if (gap && gap !== 'normal') {
        gap = parseInt(gap);
      }
      else {
        gap = NORMAL_GAP_SIZE;
      }
      gap = gap * scale;

      width = this.columnWidth;
      cnt = this.columnCount;
      if (width && width !== 'auto') {
        width = parseInt(width) * scale;
      }
      if (cnt && cnt !== 'auto') {
        cnt = parseInt(cnt);
      }

      // 0. if !columnCount && !columnWidth
      if (cnt === 'auto' && width === 'auto') {
        {
          console.warn("[vue-render] waterfall's columnWidth and columnCount shouldn't"
          + " both be auto at the same time.");
          cnt = DEFAULT_COLUMN_COUNT;
          width = ctWidth;
        }
      }
      // 1. if columnCount = n then calc w.
      else if (cnt !== 'auto' && width === 'auto') {
        width = (ctWidth - (cnt - 1) * gap) / cnt;
      }
      // 2. if columnWidth = w then calc n.
      else if (cnt === 'auto' && width !== 'auto') {
        cnt = (ctWidth + gap) / (width + gap);
      }
      // 3. if columnWidth = w and columnCount = n then calc totalWidth
      else if (cnt !== 'auto' && width !== 'auto') {
        var totalWidth;
        var adjustCountAndWidth = function () {
          totalWidth = cnt * width + (cnt - 1) * gap;
          if (totalWidth < ctWidth) {
            width += (ctWidth - totalWidth) / cnt;
          }
          else if (totalWidth > ctWidth && cnt > 1) {
            cnt--;
            adjustCountAndWidth();
          }
          else if (totalWidth > ctWidth) {  // cnt === 1
            width = ctWidth;
          }
        };
        adjustCountAndWidth();
      }
      this._columnCount = cnt;
      this._columnWidth = width;
      this._columnGap = gap;
    },

    _genColumns: function _genColumns (createElement) {
      var this$1 = this;

      this._columns = [];
      var cells = this._cells;
      var columnCnt = this._columnCount;
      var len = cells.length;
      var columnCells = this._columnCells = Array(columnCnt).join('.').split('.').map(function () { return [] });
      // spread cells to the columns using simpole polling algorithm.
      for (var i = 0; i < len; i++) {
        (cells[i].data.attrs || (cells[i].data.attrs = {}))['data-cell'] = i;
        columnCells[i % columnCnt].push(cells[i]);
      }
      for (var i$1 = 0; i$1 < columnCnt; i$1++) {
        this$1._columns.push(createElement('html:div', {
          ref: ("column" + i$1),
          attrs: {
            'data-column': i$1
          },
          staticClass: 'weex-ct',
          staticStyle: {
            width: this$1._columnWidth + 'px',
            marginLeft: i$1 === 0 ? 0 : this$1._columnGap + 'px'
          }
        }, columnCells[i$1]));
      }
    },

    _nextTick: function _nextTick () {
      this._reLayoutChildren();
    },

    _reLayoutChildren: function _reLayoutChildren () {
      var this$1 = this;

      /**
       * treat the shortest column bottom as the match standard.
       * whichever cell exceeded it would be rearranged.
       * 1. m = shortest column bottom.
       * 2. get all cell ids who is below m.
       * 3. calculate which cell should be in which column.
       */
      var columnCnt = this._columnCount;
      var columnDoms = [];
      var columnAppendFragments = [];
      var columnBottoms = [];
      var minBottom = Number.MAX_SAFE_INTEGER;
      var minBottomColumnIndex = 0;

      // 1. find the shortest column bottom.
      for (var i = 0; i < columnCnt; i++) {
        var columnDom = this$1._columns[i].elm;
        var lastChild = columnDom.lastElementChild;
        var bottom = lastChild ? lastChild.getBoundingClientRect().bottom : 0;
        columnDoms.push(columnDom);
        columnBottoms[i] = bottom;
        columnAppendFragments.push(document.createDocumentFragment());
        if (bottom < minBottom) {
          minBottom = bottom;
          minBottomColumnIndex = i;
        }
      }

      // 2. get all cell ids who is below m.
      var belowCellIds = [];
      var belowCells = {};
      for (var i$1 = 0; i$1 < columnCnt; i$1++) {
        if (i$1 === minBottomColumnIndex) {
          continue
        }
        var columnDom$1 = columnDoms[i$1];
        var cellsInColumn = columnDom$1.querySelectorAll('section.weex-cell');
        var len = cellsInColumn.length;
        for (var j = len - 1; j >= 0; j--) {
          var cellDom = cellsInColumn[j];
          var cellRect = cellDom.getBoundingClientRect();
          if (cellRect.top > minBottom) {
            var id = ~~cellDom.getAttribute('data-cell');
            belowCellIds.push(id);
            belowCells[id] = { elm: cellDom, height: cellRect.height };
            columnBottoms[i$1] -= cellRect.height;
          }
        }
      }

      // 3. calculate which cell should be in which column and rearrange them
      //  in the dom tree.
      belowCellIds.sort(function (a, b) { return a > b });
      var cellIdsLen = belowCellIds.length;
      function addToShortestColumn (belowCell) {
        // find shortest bottom.
        minBottom = Math.min.apply(Math, columnBottoms);
        minBottomColumnIndex = columnBottoms.indexOf(minBottom);
        var cellElm = belowCell.elm;
        var cellHeight = belowCell.height;
        columnAppendFragments[minBottomColumnIndex].appendChild(cellElm);
        columnBottoms[minBottomColumnIndex] += cellHeight;
      }
      for (var i$2 = 0; i$2 < cellIdsLen; i$2++) {
        addToShortestColumn(belowCells[belowCellIds[i$2]]);
      }
      for (var i$3 = 0; i$3 < columnCnt; i$3++) {
        columnDoms[i$3].appendChild(columnAppendFragments[i$3]);
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'waterfall';
    this._cells = this.$slots.default || [];
    this.$nextTick(function () {
      this$1.updateLayout();
    });
    this._renderHook();
    var mergedStyle = extractComponentStyle(this);
    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'waterfall' },
      on: createEventMap(this, {
        scroll: this.handleScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      }),
      staticClass: 'weex-waterfall weex-waterfall-wrapper weex-ct',
      staticStyle: mergedStyle
    }, this._createChildren(createElement, mergedStyle))
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../../../validator'
var cell = {
  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    this._renderHook();
    return createElement('section', {
      attrs: { 'weex-type': 'cell' },
      on: createEventMap(this),
      staticClass: 'weex-cell weex-ct',
      staticStyle: extractComponentStyle(this)
    }, this.$slots.default)
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../../validator'
var scroller = {
  mixins: [scrollable, listMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator: function validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-scroller', 'weex-scroller-wrapper', 'weex-ct'];
      if (this.scrollDirection === 'horizontal') {
        classArray.push('weex-scroller-horizontal');
      }
      else {
        classArray.push('weex-scroller-vertical');
      }
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        return true
      });
      return [
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-scroller-inner weex-ct'
        }, this._cells)
      ]
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'scroller';

    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    this._cells = this.$slots.default || [];
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    this._renderHook();
    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'scroller' },
      on: createEventMap(this, {
        scroll: this.handleScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      }),
      staticClass: this.wrapperClass,
      staticStyle: extractComponentStyle(this)
    }, this.createChildren(createElement))
  }
};

__$styleInject(".weex-slider-wrapper {\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.weex-slider-inner {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-slider-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent !important;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.neighbor-cell {\n  overflow: visible !important;\n}",undefined);

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var TRANSITION_TIME = 400;
var NEIGHBOR_SCALE_TIME = 100;
var MAIN_SLIDE_OPACITY = 1;
var THROTTLE_SCROLL_TIME = 25;
var INTERVAL_MINIMUM = 200;

var slideMixin = {
  created: function created () {
    this._clones = [];
    this.innerOffset = 0;
    this._indicator = null;
  },

  beforeUpdate: function beforeUpdate () {
    this._getWrapperSize();
  },

  updated: function updated () {
    var children = this.$children;
    var len = children && children.length;
    if (children && len > 0) {
      for (var i = 0; i < len; i++) {
        var vm = children[i];
        if (vm.$options._componentTag === 'indicator'
          || vm.$vnode.data.ref === 'indicator') {
          vm._watcher.get();
          break
        }
      }
    }
    fireLazyload(this.$el, true);
    if (this._preIndex !== this.currentIndex) {
      this._slideTo(this.currentIndex);
    }
  },

  mounted: function mounted () {
    this._getWrapperSize();
    this._slideTo(this.currentIndex);
    fireLazyload(this.$el, true);
  },

  methods: {
    _getWrapperSize: function _getWrapperSize () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this._wrapperWidth = rect.width;
        this._wrapperHeight = rect.height;
      }
    },

    _formatChildren: function _formatChildren (createElement) {
      var this$1 = this;

      var children = this.$slots.default || [];
      var indicatorVnode;
      var cells = children.filter(function (vnode) {
        if (!vnode.tag) { return false }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          indicatorVnode = vnode;
          return false
        }
        return true
      }).map(function (vnode) {
        return createElement('li', {
          ref: 'cells',
          staticClass: ("weex-slider-cell weex-ct" + (this$1.isNeighbor ? ' neighbor-cell' : ''))
        }, [vnode])
      });
      if (indicatorVnode) {
        indicatorVnode.data.attrs = indicatorVnode.data.attrs || {};
        indicatorVnode.data.attrs.count = cells.length;
        indicatorVnode.data.attrs.active = this.currentIndex;
        this._indicator = indicatorVnode;
      }
      return cells
    },

    _renderSlides: function _renderSlides (createElement) {
      this._cells = this._formatChildren(createElement);
      this.frameCount = this._cells.length;
      this._renderHook();
      return createElement(
        'nav',
        {
          ref: 'wrapper',
          attrs: { 'weex-type': this.isNeighbor ? 'slider-neighbor' : 'slider' },
          on: createEventMap(
            this,
            ['scroll', 'scrollstart', 'scrollend'],
            {
              touchstart: this._handleTouchStart,
              touchmove: throttle(bind(this._handleTouchMove, this), 25),
              touchend: this._handleTouchEnd,
              touchcancel: this._handleTouchCancel
            }
          ),
          staticClass: 'weex-slider weex-slider-wrapper weex-ct',
          staticStyle: extractComponentStyle(this)
        },
        [
          createElement('ul', {
            ref: 'inner',
            staticClass: 'weex-slider-inner weex-ct'
          }, this._cells),
          this._indicator
        ]
      )
    },

    // get standard index
    _normalizeIndex: function _normalizeIndex (index) {
      var newIndex = (index + this.frameCount) % this.frameCount;
      return Math.min(Math.max(newIndex, 0), this.frameCount - 1)
    },

    _startAutoPlay: function _startAutoPlay () {
      if (!this.autoPlay || this.autoPlay === 'false') {
        return
      }
      if (this._autoPlayTimer) {
        clearTimeout(this._autoPlayTimer);
        this._autoPlayTimer = null;
      }
      var interval = parseInt(this.interval - TRANSITION_TIME - NEIGHBOR_SCALE_TIME);
      interval = interval > INTERVAL_MINIMUM ? interval : INTERVAL_MINIMUM;
      this._autoPlayTimer = setTimeout(bind(this._next, this), interval);
    },

    _stopAutoPlay: function _stopAutoPlay () {
      if (this._autoPlayTimer) {
        clearTimeout(this._autoPlayTimer);
        this._autoPlayTimer = null;
      }
    },

    _slideTo: function _slideTo (index, isTouchScroll) {
      var this$1 = this;

      if (this.frameCount <= 0) {
        return
      }
      if (!this.infinite || this.infinite === 'false') {
        if (index === -1 || index > (this.frameCount - 1)) {
          this._slideTo(this.currentIndex);
          return
        }
      }

      if (!this._preIndex && this._preIndex !== 0) {
        if (this._showNodes && this._showNodes[0]) {
          this._preIndex = this._showNodes[0].index;
        }
        else {
          this._preIndex = this.currentIndex;
        }
      }

      if (this._sliding) {
        return
      }
      this._sliding = true;

      var newIndex = this._normalizeIndex(index);
      var inner = this.$refs.inner;
      var step = this._step = this.frameCount <= 1 ? 0 : this._preIndex - index;

      if (inner) {
        this._prepareNodes();
        var translate = getTransformObj(inner).translate;
        var match = translate && translate.match(/translate[^(]+\(([+-\d.]+)/);
        var innerX = match && match[1] || 0;
        var dist = innerX - this.innerOffset;
        this.innerOffset += step * this._wrapperWidth;
        // transform the whole slides group.
        inner.style.webkitTransition = "-webkit-transform " + (TRANSITION_TIME / 1000) + "s ease-in-out";
        inner.style.transition = "transform " + (TRANSITION_TIME / 1000) + "s ease-in-out";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        inner.style.transform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";

        // emit scroll events.
        if (!isTouchScroll) {
          this._emitScrollEvent('scrollstart');
        }
        setTimeout(function () {
          this$1._throttleEmitScroll(dist, function () {
            this$1._emitScrollEvent('scrollend');
          });
        }, THROTTLE_SCROLL_TIME);

        this._loopShowNodes(step);

        setTimeout(function () {
          if (this$1.isNeighbor) {
            this$1._setNeighbors();
          }

          setTimeout(function () {
            inner.style.webkitTransition = '';
            inner.style.transition = '';
            for (var i = this$1._showStartIdx; i <= this$1._showEndIdx; i++) {
              var node = this$1._showNodes[i];
              if (!node) { continue }
              var elm = node.firstElementChild;
              elm.style.webkitTransition = '';
              elm.style.transition = '';
            }
            // clean cloned nodes and rearrange slide cells.
            this$1._rearrangeNodes(newIndex);
          }, NEIGHBOR_SCALE_TIME);
        }, TRANSITION_TIME);
      }

      if (newIndex !== this._preIndex) {
        this.$emit('change', createEvent(this.$el, 'change', {
          index: newIndex
        }));
      }
    },

    _clearNodesOffset: function _clearNodesOffset () {
      var this$1 = this;

      var end = this._showEndIdx;
      for (var i = this._showStartIdx; i <= end; i++) {
        var node = this$1._showNodes[i];
        node = node && node.firstElementChild;
        if (!node) { continue }
        addTransform(this$1._showNodes[i].firstElementChild, {
          translate: 'translate3d(0px, 0px, 0px)'
        });
      }
    },

    _loopShowNodes: function _loopShowNodes (step) {
      var this$1 = this;

      if (!step || this.frameCount <= 1) {
        return
      }
      var sign = step > 0 ? 1 : -1;
      var i = step <= 0 ? this._showStartIdx : this._showEndIdx;
      var end = step <= 0 ? this._showEndIdx : this._showStartIdx;
      for (; i !== end - sign; i -= sign) {
        var nextIdx = i + step;
        this$1._showNodes[nextIdx] = this$1._showNodes[i];
        this$1._showNodes[nextIdx]._showIndex = nextIdx;
        delete this$1._showNodes[i];
      }
      this._showStartIdx += step;
      this._showEndIdx += step;
    },

    _prepareNodes: function _prepareNodes () {
      // test if the next slide towards the direction exists.
      // e.g. currentIndex 0 -> 1: should prepare 4 slides: -1, 0, 1, 2
      // if not, translate a node to here, or just clone it.
      var step = this._step;
      if (!this._inited) {
        this._initNodes();
        this._inited = true;
        this._showNodes = {};
      }
      if (this.frameCount <= 1) {
        this._showStartIdx = this._showEndIdx = 0;
        var node = this._cells[0].elm;
        node.style.opacity = 1;
        node.style.zIndex = 99;
        node.index = 0;
        this._showNodes[0] = node;
        node._inShow = true;
        node._showIndex = 0;
        return
      }
      var showCount = this._showCount = Math.abs(step) + 3;
      this._showStartIdx = step <= 0 ? -1 : 2 - showCount;
      this._showEndIdx = step <= 0 ? showCount - 2 : 1;
      this._clearNodesOffset();
      this._positionNodes(this._showStartIdx, this._showEndIdx, step);
    },

    _initNodes: function _initNodes () {
      var total = this.frameCount;
      var cells = this._cells;
      for (var i = 0; i < total; i++) {
        var node = cells[i].elm;
        node.index = i;
        node._inShow = false;
        node.style.zIndex = 0;
        node.style.opacity = 0;
      }
    },

    _positionNodes: function _positionNodes (begin, end, step, anim) {
      var this$1 = this;

      var cells = this._cells;
      var start = step <= 0 ? begin : end;
      var stop = step <= 0 ? end : begin;
      var sign = step <= 0 ? -1 : 1;
      var cellIndex = this._preIndex + sign;
      for (var i = start; i !== stop - sign; i = i - sign) {
        var node = cells[this$1._normalizeIndex(cellIndex)].elm;
        cellIndex = cellIndex - sign;
        this$1._positionNode(node, i);
      }
    },

    /**
     * index: position index in the showing cells' view.
     */
    _positionNode: function _positionNode (node, index) {
      var holder = this._showNodes[index];
      if (node._inShow && holder !== node) {
        if (holder) { this._removeClone(holder); }
        node = this._getClone(node.index);
      }
      else if (node._inShow) {
        return
      }

      node._inShow = true;
      var translateX = index * this._wrapperWidth - this.innerOffset;
      addTransform(node, {
        translate: ("translate3d(" + translateX + "px, 0px, 0px)")
      });
      node.style.zIndex = 99 - Math.abs(index);
      node.style.opacity = 1;
      node._showIndex = index;
      this._showNodes[index] = node;
    },

    _getClone: function _getClone (index) {
      var arr = this._clones[index];
      if (!arr) {
        this._clones[index] = arr = [];
      }
      if (arr.length <= 0) {
        var origNode = this._cells[index].elm;
        var clone = origNode.cloneNode(true);
        clone._isClone = true;
        clone._inShow = origNode._inShow;
        clone.index = origNode.index;
        clone.style.opacity = 0;
        clone.style.zIndex = 0;
        var ct = this.$refs.inner;
        ct.appendChild(clone);
        arr.push(clone);
      }
      return arr.pop()
    },

    _removeClone: function _removeClone (node) {
      var idx = node.index;
      this._hideNode(node);
      var arr = this._clones[idx];
      arr.push(node);
    },

    _hideNode: function _hideNode (node) {
      node._inShow = false;
      node.style.opacity = 0;
      node.style.zIndex = 0;
    },

    /**
     * hide nodes from begin to end in showArray.
     * if it is clone node, just move the clone node to the buffer.
     */
    _clearNodes: function _clearNodes (begin, end) {
      var this$1 = this;

      for (var i = begin; i <= end; i++) {
        var node = this$1._showNodes[i];
        if (!node) { return }
        if (node._isClone) {
          this$1._removeClone(node);
        }
        else if (!node._inShow) {
          this$1._hideNode(node);
        }
        delete this$1._showNodes[i];
      }
    },

    /**
     * copy node style props (opacity and zIndex) and transform status from
     * one element to another.
     */
    _copyStyle: function _copyStyle (from, to, styles, transformExtra) {
      if ( styles === void 0 ) styles = ['opacity', 'zIndex'];
      if ( transformExtra === void 0 ) transformExtra = {};

      extendKeys(to.style, from.style, styles);
      var transObj = getTransformObj(from);
      for (var k in transformExtra) {
        transObj[k] = transformExtra[k];
      }
      addTransform(to, transObj);
      var fromInner = from.firstElementChild;
      var toInner = to.firstElementChild;
      toInner.style.opacity = fromInner.style.opacity;
      copyTransform(fromInner, toInner);
    },

    /**
     * replace a clone node with the original node if it's not in use.
     */
    _replaceClone: function _replaceClone (clone, pos) {
      var this$1 = this;

      var origNode = this._cells[clone.index].elm;
      if (origNode._inShow) {
        return
      }
      var origShowIndex = origNode._showIndex;
      var styleProps = ['opacity', 'zIndex'];
      var cl;
      if (Math.abs(origShowIndex) <= 1) {
        // leave a clone to replace the origNode in the show zone(-1 ~ 1).
        cl = this._getClone(origNode.index);
        this._copyStyle(origNode, cl);
        this._showNodes[origShowIndex] = cl;
      }
      origNode._inShow = true;
      var transObj = getTransformObj(clone);
      transObj.translate = transObj.translate.replace(/[+-\d.]+[pw]x/, function ($0) {
        return pos * this$1._wrapperWidth - this$1.innerOffset + 'px'
      });
      this._copyStyle(clone, origNode, styleProps, transObj);
      this._removeClone(clone);
      if (!cl) {
        delete this._showNodes[origShowIndex];
      }
      this._showNodes[pos] = origNode;
      origNode._showIndex = pos;
    },

    _rearrangeNodes: function _rearrangeNodes (newIndex) {
      var this$1 = this;

      if (this.frameCount <= 1) {
        this._sliding = false;
        this.currentIndex = 0;
        return
      }

      // clear autoPlay timer (and restart after updated hook).
      this._startAutoPlay();

      /**
       * clean nodes. replace current node with non-cloned node.
       * set current index to the new index.
       */
      var shows = this._showNodes;
      for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
        shows[i]._inShow = false;
      }
      for (var i$1 = -1; i$1 <= 1; i$1++) {
        var node = shows[i$1];
        if (!node._isClone) {
          node._inShow = true;
        }
        else {
          this$1._replaceClone(node, i$1);
        }
      }

      this._clearNodes(this._showStartIdx, -2);
      this._showStartIdx = -1;
      this._clearNodes(2, this._showEndIdx);
      this._showEndIdx = 1;
      this._sliding = false;

      // set current index to the new index.
      this.currentIndex = newIndex;
      this._preIndex = newIndex;
    },

    /**
     * according to the attrs: neighborScale, neighborAlpha, neighborSpace.
     * 1. apply the main cell transform effects.
     * 2. set the previous cell and the next cell's positon, scale and alpha.
     * 3. set other cells' scale and alpha.
     */
    _setNeighbors: function _setNeighbors () {
      var this$1 = this;

      for (var i = this._showStartIdx; i <= this._showEndIdx; i++) {
        var elm = this$1._showNodes[i].firstElementChild;
        elm.style.webkitTransition = "all " + (NEIGHBOR_SCALE_TIME / 1000) + "s ease";
        elm.style.transition = "all " + (NEIGHBOR_SCALE_TIME / 1000) + "s ease";
        var transObj = {
          scale: ("scale(" + (i === 0 ? this$1.currentItemScale : this$1.neighborScale) + ")")
        };
        var translateX = (void 0);
        if (!this$1._neighborWidth) {
          this$1._neighborWidth = parseFloat(elm.style.width) || elm.getBoundingClientRect().width;
        }
        // calculate position offsets according to neighbor scales.
        if (Math.abs(i) === 1) {
          var dist = ((this$1._wrapperWidth - this$1._neighborWidth * this$1.neighborScale) / 2
            + this$1.neighborSpace * weex.config.env.scale) / this$1.neighborScale;
          translateX = -i * dist;
        }
        else {
          // clear position offsets.
          translateX = 0;
        }
        transObj.translate = "translate3d(" + translateX + "px, 0px, 0px)";
        addTransform(elm, transObj);
        elm.style.opacity = i === 0 ? MAIN_SLIDE_OPACITY : this$1.neighborAlpha;
      }
    },

    _next: function _next () {
      var next = this.currentIndex + 1;
      if (this.frameCount <= 1) {
        next--;
      }
      this._slideTo(next);
    },

    _prev: function _prev () {
      var prev = this.currentIndex - 1;
      if (this.frameCount <= 1) {
        prev++;
      }
      this._slideTo(prev);
    },

    _handleTouchStart: function _handleTouchStart (event) {
      var touch = event.changedTouches[0];
      this._stopAutoPlay();
      this._touchParams = {
        originalTransform: this.$refs.inner.style.webkitTransform || this.$refs.inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    _handleTouchMove: function _handleTouchMove (event) {
      var tp = this._touchParams;
      if (!tp) { return }
      if (this._sliding) {
        {
          console.warn("[vue-render] warn: can't scroll the slider during sliding.");
        }
        return
      }
      var ref = this._touchParams;
      var startX = ref.startX;
      var startY = ref.startY;
      var touch = event.changedTouches[0];
      var offsetX = touch.pageX - startX;
      var offsetY = touch.pageY - startY;
      tp.offsetX = offsetX;
      tp.offsetY = offsetY;
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        isV = tp.isVertical = Math.abs(offsetX) < Math.abs(offsetY);
        if (!isV) {
          this._emitScrollEvent('scrollstart');
        }
      }
      // vertical scroll. just ignore it.
      if (isV) {
        return
      }
      // horizontal scroll. trigger scroll event.
      event.preventDefault();
      var inner = this.$refs.inner;
      if (inner && offsetX) {
        if (!this._nodesOffsetCleared) {
          this._nodesOffsetCleared = true;
          this._clearNodesOffset();
        }
        this._emitScrollEvent('scroll', {
          offsetXRatio: offsetX / this._wrapperWidth
        });
        inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        inner.style.webkitTransform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
      }
    },

    _handleTouchEnd: function _handleTouchEnd (event) {
      this._startAutoPlay();
      var tp = this._touchParams;
      if (!tp) { return }
      var isV = tp.isVertical;
      if (typeof isV === 'undefined') {
        return
      }
      var inner = this.$refs.inner;
      var offsetX = tp.offsetX;
      if (inner) {
        this._nodesOffsetCleared = false;
        // TODO: test the velocity if it's less than 0.2.
        var reset = Math.abs(offsetX / this._wrapperWidth) < 0.2;
        var direction = offsetX > 0 ? 1 : -1;
        var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);
        this._slideTo(newIndex, true);
      }
      delete this._touchParams;
    },

    _handleTouchCancel: function _handleTouchCancel (event) {
      return this._handleTouchEnd(event)
    },

    _emitScrollEvent: function _emitScrollEvent (type, data) {
      if ( data === void 0 ) data = {};

      this.$emit(type, createEvent(this.$el, type, data));
    },

    _throttleEmitScroll: function _throttleEmitScroll (offset, callback) {
      var this$1 = this;

      var i = 0;
      var throttleTime = THROTTLE_SCROLL_TIME;
      var cnt = parseInt(TRANSITION_TIME / throttleTime) - 1;
      var sign = offset > 0 ? 1 : -1;
      var r = Math.abs(offset / this._wrapperWidth);
      var throttledScroll = function () {
        if (++i > cnt) {
          return callback && callback.call(this$1)
        }
        var ratio = this$1._step === 0
          ? sign * r * (1 - i / cnt)
          : sign * (r + (1 - r) * i / cnt);
        this$1._emitScrollEvent('scroll', {
          offsetXRatio: ratio
        });
        setTimeout(throttledScroll, THROTTLE_SCROLL_TIME);
      };
      throttledScroll();
    }
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../../validator'
// import indicator from './indicator'
var slider = {
  mixins: [slideMixin],
  props: {
    index: {
      type: [String, Number],
      default: 0
    },
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    },
    infinite: {
      type: [String, Boolean],
      default: true
    }
  },

  watch: {
    index: function index () {
      this.currentIndex = this._normalizeIndex(this.index);
    }
  },

  data: function data () {
    return {
      frameCount: 0,
      currentIndex: this.index
    }
  },

  beforeCreate: function beforeCreate () {
    this.weexType = 'slider';
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return this._renderSlides(createElement)
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var DEFAULT_NEIGHBOR_SPACE = 20;
var DEFAULT_NEIGHBOR_ALPHA = 0.6;
var DEFAULT_NEIGHBOR_SCALE = 0.8;
var DEFAULT_CURRENT_ITEM_SCALE = 0.9;

var neighbor = {
  mixins: [slideMixin],
  props: {
    index: {
      type: [String, Number],
      default: 0
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    },
    infinite: {
      type: [String, Boolean],
      default: true
    },
    neighborSpace: {
      type: [String, Number],
      validator: function (val) {
        val = parseFloat(val);
        return !isNaN(val) && val > 0
      },
      default: DEFAULT_NEIGHBOR_SPACE
    },
    neighborAlpha: {
      type: [String, Number],
      validator: function (val) {
        val = parseFloat(val);
        return !isNaN(val) && val >= 0 && val <= 1
      },
      default: DEFAULT_NEIGHBOR_ALPHA
    },
    neighborScale: {
      type: [String, Number],
      validator: function (val) {
        val = parseFloat(val);
        return !isNaN(val) && val >= 0 && val <= 1
      },
      default: DEFAULT_NEIGHBOR_SCALE
    },
    currentItemScale: {
      type: [String, Number],
      validator: function (val) {
        val = parseFloat(val);
        return !isNaN(val) && val >= 0 && val <= 1
      },
      default: DEFAULT_CURRENT_ITEM_SCALE
    }
  },

  watch: {
    index: function index () {
      this.currentIndex = this._normalizeIndex(this.index);
    }
  },

  data: function data () {
    return {
      currentIndex: this.index,
      frameCount: 0
    }
  },

  beforeCreate: function beforeCreate () {
    this.isNeighbor = true;
    this.weexType = 'slider-neighbor';
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    return this._renderSlides(createElement)
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _css$6 = "\n.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n";

function getIndicatorItemStyle (spec, isActive) {
  var style = {};
  style['background-color'] = spec[isActive ? 'itemSelectedColor' : 'itemColor'];
  style['width'] = style['height'] = spec['itemSize'];
  return style
}

function _render (context, h) {
  var children = [];
  var mergedStyle = extractComponentStyle(context);
  var indicatorSpecStyle = extendKeys(
      {},
      mergedStyle,
      ['itemColor', 'itemSelectedColor', 'itemSize']
    );
  for (var i = 0; i < Number(context.count); ++i) {
    var classNames = ['weex-indicator-item weex-el'];
    var isActive = false;
    if (i === Number(context.active)) {
      classNames.push('weex-indicator-item-active');
      isActive = true;
    }
    children.push(h('mark', {
      staticClass: classNames.join(' '),
      staticStyle: getIndicatorItemStyle(indicatorSpecStyle, isActive)
    }));
  }
  context.$nextTick(function () {
    _reLayout(this, _getVirtualRect(this, mergedStyle), _getLtbr(this, mergedStyle));
  });
  return h('nav', {
    attrs: { 'weex-type': 'indicator' },
    staticClass: 'weex-indicator weex-ct',
    staticStyle: mergedStyle
  }, children)
}

/**
 * get indicator's virtual rect (width, height), which is the .
 */
function _getVirtualRect (context, mergedStyle) {
  var ct = context._getParentRect();
  var rect = ['width', 'height'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    pre[key] = msv ? parseFloat(msv) : ct[key];
    return pre
  }, {});
  return rect
}

/**
 * get indicator's ltbr values (without units).
 */
function _getLtbr (context, mergedStyle) {
  return ['left', 'top', 'bottom', 'right'].reduce(function (pre, key) {
    var msv = mergedStyle && mergedStyle[key];
    if (!msv && msv !== 0) { return pre }
    pre[key] = parseFloat(msv);
    return pre
  }, {})
}

/**
 * get indicator's rect (width, height).
 */
function _getIndicatorRect (el) {
  var width, height;
  if (el.children.length === 1) {
    width = height = window.getComputedStyle(el.children[0]);
  }
  else {
    var itemComputedStyle = window.getComputedStyle(el.children[1]);
    var padding = parseFloat(itemComputedStyle.marginLeft);
    height = parseFloat(itemComputedStyle.height);
    width = el.children.length * (height + padding) - padding;
  }
  return { width: width, height: height }
}

/**
 * calculate and reset indicator's width, height, and ltbr.
 * @param {object} virtualRect. width and height of indicator's virtual rect box.
 * @param {object} ltbr. the user specified left, top, bottom, right pixels (without units).
 */
function _reLayout (context, virtualRect, ltbr) {
  var el = context.$el;
  var rect = _getIndicatorRect(el);
  var rectWithPx = Object.keys(rect).reduce(function (pre, key) {
    pre[key] = rect[key] + 'px';
    return pre
  }, {});
  extend(el.style, rectWithPx);
  var axisMap = [{
    dir: ltbr.left || ltbr.left === 0
      ? 'left' : ltbr.right || ltbr.right === 0
      ? 'right' : 'left',
    scale: 'width'
  }, {
    dir: ltbr.top || ltbr.top === 0
      ? 'top' : ltbr.bottom || ltbr.bottom === 0
      ? 'bottom' : 'top',
    scale: 'height'
  }];
  Object.keys(axisMap).forEach(function (key) {
    var ref = axisMap[key];
    var dir = ref.dir;
    var scale = ref.scale;
    el.style[dir] = (ltbr[dir] || 0) + virtualRect[scale] / 2 - rect[scale] / 2 + 'px';
  });
}

var indicator = {
  name: 'indicator',
  methods: {
    show: function () {
      this.$el.style.visibility = 'visible';
    }
  },
  data: function data () {
    return {
      count: 0,
      active: 0
    }
  },
  render: function render (createElement) {
    var ref = this.$vnode.data.attrs || {};
    var count = ref.count;
    var active = ref.active;
    this.count = count;
    this.active = active;
    if (!this.count) { return }
    this._renderHook();
    return _render(this, createElement)
  },
  _css: _css$6
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var _css$7 = "\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1rem !important;\n  height: 1rem !important;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 0.5em;\n  height: 0.5em;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n";

function getStyleSheet (spinnerVm) {
  if (spinnerVm._styleSheet) {
    return
  }
  spinnerVm._styleSheet = getStyleSheetById('weex-cmp-loading-indicator');
}

function setKeyframeColor (spinnerVm, val) {
  getStyleSheet(spinnerVm);
  var keyframeRules = computeKeyFrameRules(val);
  var rules = spinnerVm._styleSheet.rules || spinnerVm._styleSheet.cssRules;
  for (var i = 0, l = rules.length; i < l; i++) {
    var item = rules.item(i);
    if ((item.type === CSSRule.KEYFRAMES_RULE
          || item.type === CSSRule.WEBKIT_KEYFRAMES_RULE)
        && item.name === 'weex-spinner') {
      var cssRules = item.cssRules;
      for (var j = 0, m = cssRules.length; j < m; j++) {
        var keyframe = cssRules[j];
        if (keyframe.type === CSSRule.KEYFRAME_RULE
          || keyframe.type === CSSRule.WEBKIT_KEYFRAME_RULE) {
          keyframe.style.boxShadow = keyframeRules[j];
        }
      }
    }
  }
}

function computeKeyFrameRules (rgb) {
  if (!rgb) {
    return
  }
  var scaleArr = [
    '0em -1.3em 0em 0em',
    '0.9em -0.9em 0 0em',
    '1.25em 0em 0 0em',
    '0.875em 0.875em 0 0em',
    '0em 1.25em 0 0em',
    '-0.9em 0.9em 0 0em',
    '-1.3em 0em 0 0em',
    '-0.9em -0.9em 0 0em'];
  var colorArr = [
    '1',
    '0.2',
    '0.2',
    '0.2',
    '0.2',
    '0.2',
    '0.5',
    '0.7'].map(function (e) {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + e + ')'
    });
  var rules = [];
  var loop = function ( i ) {
    var tmpColorArr = loopArray(colorArr, i, 'r');
    rules.push(scaleArr.map(function (scaleStr, i) {
      return scaleStr + ' ' + tmpColorArr[i]
    }).join(', '));
  };

  for (var i = 0; i < scaleArr.length; i++) loop( i );
  return rules
}

function processStyle$1 (vm) {
  var style = extractComponentStyle(vm);
  var color = style.color;
  var rgb = color && getRgb(color);
  if (rgb) {
    setKeyframeColor(vm, rgb);
  }
  return style
}

var LoadingIndicator = {
  render: function render (createElement) {
    this.weexType = 'loading-indicator';
    this._renderHook();
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator weex-ct',
      staticStyle: processStyle$1(this)
    })
  },
  _css: _css$7
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var refresh = {
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      lastDy: 0,
      viewHeight: 0,
      height: -1
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val + "px";
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
      this.$emit('pullingdown', createEvent(this, 'pullingdown', {
        dy: offsetY - this.lastDy,
        pullingDistance: offsetY,
        viewHeight: this.viewHeight
      }));
      this.lastDy = offsetY;
    },
    pullingDown: function pullingDown (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('refresh');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    this.$parent._refresh = this;
    this._renderHook();
    return createElement('aside', {
      ref: 'refresh',
      attrs: { 'weex-type': 'refresh' },
      staticClass: 'weex-refresh weex-ct',
      staticStyle: extractComponentStyle(this)
    }, this.getChildren())
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var loading = {
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: -1,
      viewHeight: 0
    }
  },
  mounted: function mounted () {
    this.viewHeight = this.$el.offsetHeight;
    if (this.display === 'hide') {
      this.height = 0;
    }
    else {
      this.height = this.viewHeight;
    }
  },
  watch: {
    height: function height (val) {
      this.$el.style.height = val + "px";
    },
    display: function display (val) {
      if (val === 'hide') {
        this.height = 0;
      }
      else {
        this.height = this.viewHeight;
      }
    }
  },
  methods: {
    pulling: function pulling (offsetY) {
      if ( offsetY === void 0 ) offsetY = 0;

      this.height = offsetY;
    },
    pullingUp: function pullingUp (offsetY) {
      this.$el.style.transition = "height 0s";
      this.pulling(offsetY);
    },
    pullingEnd: function pullingEnd () {
      this.$el.style.transition = "height .2s";
      if (this.height >= this.viewHeight) {
        this.pulling(this.viewHeight);
        this.$emit('loading');
      }
      else {
        this.pulling(0);
      }
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    this.$parent._loading = this;
    this._renderHook();
    return createElement('aside', {
      ref: 'loading',
      attrs: { 'weex-type': 'loading' },
      staticClass: 'weex-loading weex-ct',
      staticStyle: extractComponentStyle(this)
    }, this.getChildren())
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * @fileOverview Impl of text component.
 *
 * Notes about the style 'height' and 'lines':
 * if the computed value of 'height' is bigger than 'lines', than the text will
 * be clipped according to the 'lines'. Otherwise, it'll be the 'height'.
 */

var _css$8 = "\n.weex-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.426667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n";

/**
 * Get text special styles (lines and text-overflow).
 */
function getTextSpecStyle (ms) {
  if ( ms === void 0 ) ms = {};

  var lines = parseInt(ms.lines) || 0;
  var overflow = ms['text-overflow'] || 'ellipsis';
  if (lines > 0) {
    return {
      overflow: 'hidden',
      'text-overflow': overflow,
      '-webkit-line-clamp': lines
    }
  }
}

var text = {
  props: {
    lines: [Number, String],
    value: [String]
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('text', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var style = extractComponentStyle(this);
    var textSpecStyle = getTextSpecStyle(style);
    this._renderHook();
    return createElement('p', {
      attrs: { 'weex-type': 'text' },
      on: createEventMap(this),
      staticClass: 'weex-text weex-el',
      staticStyle: extend(style, textSpecStyle)
    }, this.$slots.default || [this.value])
  },
  _css: _css$8
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../validator'

var _css$9 = "\n.weex-textarea {\n  font-size: 0.426667rem\n}\n.weex-textarea:focus {\n  outline: none;\n}\n";

var textarea = {
  mixins: [inputCommon],
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    },
    returnKeyType: String
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle)
    // }
    var events = extend(createEventMap(this), mapFormEvents(this));
    this._renderHook();
    return createElement('html:textarea', {
      attrs: {
        'weex-type': 'textarea',
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        rows: this.rows,
        'return-key-type': this.returnKeyType
      },
      domProps: {
        value: this.value
      },
      on: this.createKeyboardEvent(events),
      staticClass: 'weex-textarea weex-el',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css: _css$9
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../validator'
var video = {
  props: {
    src: String,
    playStatus: {
      type: String,
      default: 'pause',
      validator: function validator (value) {
        return ['play', 'pause'].indexOf(value) !== -1
      }
    },
    autoplay: {
      type: [String, Boolean],
      default: false
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },
    playsinline: {
      type: [String, Boolean],
      default: true
    },
    controls: {
      type: [String, Boolean],
      default: false
    }
  },

  render: function render (createElement) {
    this._renderHook();

    if (this.playStatus === 'play') {
      this.$nextTick(function () {
        this.$el && this.$el.play();
      });
    }
    else if (this.playStatus === 'pause') {
      this.$nextTick(function () {
        this.$el && this.$el.pause();
      });
    }

    return createElement('html:video', {
      attrs: {
        'weex-type': 'video',
        autoplay: ((this.autoplay !== 'false' && this.autoplay !== false)
          || (this.autoPlay !== 'false' && this.autoPlay !== false)),
        'webkit-playsinline': this.playsinline,
        controls: this.controls,
        src: this.src
      },
      on: createEventMap(this, ['start', 'pause', 'finish', 'fail']),
      staticClass: 'weex-video weex-el',
      staticStyle: extractComponentStyle(this)
    })
  }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import { validateStyles } from '../validator'

var _css$10 = "\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n";

var web = {
  props: {
    src: String
  },
  methods: {
    // TODO: check cross-origin
    goBack: function goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back();
      }
    },
    goForward: function goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward();
      }
    },
    reload: function reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload();
      }
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    if (this.$el) {
      this.$emit('pagestart', createEvent(this.$el, 'pagestart', { url: this.src }));
      this.$el.addEventListener('load', function (event) {
        this$1.$emit('pagefinish', createEvent(this$1.$el, 'pagefinish', { url: this$1.src }));
      });
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    // if ("development" === 'development') {
    //   validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle)
    // }

    this._renderHook();
    return createElement('iframe', {
      attrs: {
        'weex-type': 'web',
        src: this.src
      },
      on: createEventMap(this, ['error']),
      staticClass: 'weex-web weex-el',
      staticStyle: extractComponentStyle(this)
    })
  },
  _css: _css$10
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import indicator from './warning'
// import refresh from './warning'
// import loading from './warning'
var components = {
  a: a,
  div: div,
  container: div,
  image: image,
  img: image,
  input: input,
  switch: _switch,
  header: header,
  list: list,
  waterfall: waterfall,
  cell: cell,
  scroller: scroller,
  slider: slider,
  cycleslider: slider,
  'slider-neighbor': neighbor,
  indicator: indicator,
  refresh: refresh,
  loading: loading,
  'loading-indicator': LoadingIndicator,
  text: text,
  textarea: textarea,
  video: video,
  web: web
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// import styleMixin from './mixins/style'

/**
 * init weex.
 * @param  {Vue$2} Vue: Vue Constructor.
 * @param  {object} options: extend weex plugins.
 *         - components.
 *         - modules.
 */
var _inited = false;
function init$1 (Vue/*, options = {}*/) {
  if (_inited) { return }
  _inited = true;

  setVue(Vue);

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
    return weex.config
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  // register sdk components.
  for (var name in components) {
    weex.registerComponent(name, components[name]);
  }

  /* istanbul ignore next */
  // if ("development" === 'development') {
  //   if (semver.lt(Vue.version, '2.1.5')) {
  //     console.warn(`[Vue Render] The version of Vue should be ` +
  //       `greater than 2.1.5, current is ${Vue.version}.`)
  //   }
  //   console.info(`[Vue Render] Registered components: `
  //     + `[${Object.keys(components).join(', ')}].`)
  Vue.mixin(base$1);
  Vue.mixin(style);
  Vue.mixin(sticky);
  // }
}

// auto init in dist mode.
if (typeof window !== 'undefined' && window.Vue) {
  init$1(window.Vue);
}

weex.init = init$1;

// perf stat for componentCount.
window._component_count = 0;

// perf stat for JSLibInitTime.
window._jslib_init_end = window.performance && window.performance.now() || +new Date();
window._weex_perf.stat.JSLibInitTime = parseInt(window._jslib_init_end - window._jslib_init_start);
delete window._jslib_init_end;
delete window._jslib_init_start;

return weex;

})));
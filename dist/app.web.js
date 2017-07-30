// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_App2.default.el = '#root';
	exports.default = new Vue(_App2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(2)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(27),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weexs\\weex-demo\\src\\App.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d4559a50", Component.options)
	  } else {
	    hotAPI.reload("data-v-d4559a50", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("c2c53c30", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d4559a50!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
	     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-d4559a50!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.app {\r\n    flex: 1;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    background-color: #f7f7f7;\n}\n.icon-container {\r\n    background: white;\r\n    align-items: stretch;\r\n    margin-bottom: 20px;\r\n    border-top-width: 1px;\r\n    border-top-color: #ccc;\r\n    border-bottom-width: 1px;\r\n    border-bottom-color: #ccc;\n}\n.icon-container--last {\r\n    margin-bottom: 0;\n}\n.icon-drawer {\r\n    flex: 1;\r\n    border-top-width: 1px;\r\n    border-top-color: #ccc;\n}\n.icon-drawer--first {\r\n    border-top-width: 0;\n}\n.drawer-footer {\r\n    border-top-width: 1px;\r\n    border-top-color: #ccc;\n}\r\n", ""]);

	// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/

	var hasDocument = typeof document !== 'undefined'

	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}

	var listToStyles = __webpack_require__(6)

	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}

	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/

	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}

	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction

	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)

	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}

	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}

	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}

	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

	  if (styleElement) {
	    if (isProduction) {
	      // has SSR styles and in production mode.
	      // simply do nothing.
	      return noop
	    } else {
	      // has SSR styles but in dev mode.
	      // for some reason Chrome can't handle source map in server-rendered
	      // style tags - source maps in <style> only works if the style tag is
	      // created and inserted dynamically. So we remove the server rendered
	      // styles and inject new ones.
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }

	  update(obj)

	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}

	var replaceText = (function () {
	  var textStore = []

	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()

	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}

	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap

	  if (media) {
	    styleElement.setAttribute('media', media)
	  }

	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }

	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _IconDrawer = __webpack_require__(9);

	var _IconDrawer2 = _interopRequireDefault(_IconDrawer);

	var _SliderNews = __webpack_require__(20);

	var _SliderNews2 = _interopRequireDefault(_SliderNews);

	var _drawerData = __webpack_require__(25);

	var _drawerData2 = _interopRequireDefault(_drawerData);

	var _adminData = __webpack_require__(26);

	var _adminData2 = _interopRequireDefault(_adminData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            drawers: _drawerData2.default,
	            adminDrawers: _adminData2.default,
	            adminNews: ['床前明月光，疑是地上霜~~~', '举头望明月，低头~思故乡~~~', '哈哈哈哈，这是黑化后的亚瑟是黑化后的亚瑟哈哈哈哈哈哈~~~']
	        };
	    },

	    components: {
	        IconDrawer: _IconDrawer2.default,
	        SliderNews: _SliderNews2.default
	    }
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(10)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(19),
	  /* scopeId */
	  "data-v-ea509ccc",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weexs\\weex-demo\\src\\components\\IconDrawer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] IconDrawer.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-ea509ccc", Component.options)
	  } else {
	    hotAPI.reload("data-v-ea509ccc", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("7d1af475", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ea509ccc&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IconDrawer.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-ea509ccc&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IconDrawer.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.container[data-v-ea509ccc] {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    align-content: flex-start;\r\n    background-color: white;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\n}\n.header[data-v-ea509ccc] {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\n}\n.header-title[data-v-ea509ccc] {\r\n    font-size: 28px;\n}\n.aside-text[data-v-ea509ccc] {\r\n    color: #666;\r\n    font-size: 28px;\n}\n.body[data-v-ea509ccc] {\r\n    width: 722px;\r\n    /* height: 188px; */\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    overflow: hidden;\n}\n.icon-item[data-v-ea509ccc] {\r\n    margin: 20px;\n}\n.footer[data-v-ea509ccc] {\r\n    /* width: 720px; */\r\n    padding-left: 10px;\r\n    padding-right: 10px;\n}\r\n", ""]);

	// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _IconItem = __webpack_require__(13);

	var _IconItem2 = _interopRequireDefault(_IconItem);

	var _const = __webpack_require__(18);

	var _const2 = _interopRequireDefault(_const);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');

	exports.default = {
	    props: ['title', 'data', 'limit'],
	    components: {
	        IconItem: _IconItem2.default
	    },
	    data: function data() {
	        return {
	            status: _const2.default.SHOW_TEXT
	        };
	    },

	    computed: {
	        curLimit: function curLimit() {
	            return this.status === _const2.default.SHOW_TEXT ? this.limit : this.data.length;
	        }
	    },
	    methods: {
	        onItemClick: function onItemClick(fn, url) {
	            if (typeof fn === 'function') {
	                fn(url);
	            }
	        },
	        onMoreClick: function onMoreClick() {
	            console.log('onMoreClick');
	            var body = this.$refs.body;

	            switch (this.status) {
	                case _const2.default.SHOW_TEXT:
	                    this.status = _const2.default.HIDE_TEXT;
	                    // this.animator(body, {height: `${this.getHeight(this.data.length)}px`});
	                    break;
	                case _const2.default.HIDE_TEXT:
	                    // this.animator(body, {height: `${this.getHeight(this.limit)}px`}, () => {
	                    this.status = _const2.default.SHOW_TEXT;
	                    // });
	                    break;
	            }
	        },
	        getHeight: function getHeight(length) {
	            var per = 188;
	            console.log(Math.ceil(length / 4) * per);
	            return Math.ceil(length / 4) * per;
	        },
	        animator: function animator(el, styles, callback) {
	            animation.transition(el, {
	                styles: styles,
	                duration: 600,
	                timingFunction: 'ease',
	                delay: 0
	            }, callback);
	        }
	    }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(14)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(17),
	  /* scopeId */
	  "data-v-04f8c2fc",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weexs\\weex-demo\\src\\components\\IconItem.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] IconItem.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-04f8c2fc", Component.options)
	  } else {
	    hotAPI.reload("data-v-04f8c2fc", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("46826cb4", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04f8c2fc&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IconItem.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-04f8c2fc&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./IconItem.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.container[data-v-04f8c2fc] {\r\n    justify-content: space-around;\r\n    align-items: center;\n}\n.icon[data-v-04f8c2fc] {\r\n    width: 100px;\r\n    height: 100px;\n}\n.title[data-v-04f8c2fc] {\r\n    display: block;\r\n    margin-top: 10px;\r\n    width: 140px;\r\n    height: 38px;\r\n    text-align: center;\r\n    font-size: 28px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\n}\r\n", ""]);

	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['url', 'title', 'onClick'],
	    methods: {
	        oItemClick: function oItemClick() {
	            this.$emit('item-click');
	        }
	    }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('image', {
	    staticClass: "icon",
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "click": _vm.oItemClick
	    }
	  }), _vm._v(" "), _c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-04f8c2fc", module.exports)
	  }
	}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    SHOW_TEXT: '更多',
	    HIDE_TEXT: '收起'
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [(_vm.title) ? _c('div', {
	    staticClass: "header"
	  }, [_c('text', {
	    staticClass: "header-title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (_vm.data.length > _vm.limit) ? _c('a', {
	    staticClass: "header-aside",
	    on: {
	      "click": _vm.onMoreClick
	    }
	  }, [_c('text', {
	    staticClass: "aside-text"
	  }, [_vm._v(_vm._s(_vm.status))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
	    ref: "body",
	    staticClass: "body"
	  }, _vm._l((_vm.data.slice(0, _vm.curLimit)), function(item) {
	    return _c('icon-item', {
	      key: item.title,
	      staticClass: "icon-item",
	      attrs: {
	        "url": item.url,
	        "title": item.title
	      },
	      on: {
	        "item-click": function($event) {
	          _vm.onItemClick(item.click, item.url)
	        }
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    staticClass: "footer"
	  }, [_vm._t("footer")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-ea509ccc", module.exports)
	  }
	}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(21)

	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(23),
	  /* template */
	  __webpack_require__(24),
	  /* scopeId */
	  "data-v-214b4db8",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weexs\\weex-demo\\src\\components\\SliderNews.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] SliderNews.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-214b4db8", Component.options)
	  } else {
	    hotAPI.reload("data-v-214b4db8", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("1af755bd", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-214b4db8&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SliderNews.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-214b4db8&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SliderNews.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.container[data-v-214b4db8] {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: stretch;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    height: 82px;\n}\n.title[data-v-214b4db8] {\r\n    color: #0b98d8;\r\n    border-width: 2px;\r\n    border-color: #0b98d8;\r\n    border-radius: 8px;\r\n    padding-top: 4px;\r\n    padding-bottom: 4px;\r\n    padding-left: 14px;\r\n    padding-right: 14px;\r\n    font-size: 22px;\n}\n.content[data-v-214b4db8] {\r\n    flex: 1;\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    height: 42px;\n}\n.content-item[data-v-214b4db8] {\n}\n.content-text[data-v-214b4db8] {\r\n    text-align: left;\r\n    text-overflow: ellipsis;\r\n    font-size: 28px;\r\n    line-height: 42px;\r\n    lines: 1;\r\n    /* white-space: nowrap;\r\n    overflow: hidden;  */\r\n    text-overflow: ellipsis;\n}\n.aside[data-v-214b4db8] {\r\n    color: #666;\r\n    font-size: 28px;\r\n    line-height: 42px;\n}\r\n", ""]);

	// exports


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['title', 'data']
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', [_c('text', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.title || '公告'))])]), _vm._v(" "), _c('slider', {
	    staticClass: "content",
	    attrs: {
	      "interval": "3000",
	      "auto-play": "true"
	    }
	  }, _vm._l((_vm.data), function(item) {
	    return _c('a', {
	      key: item,
	      staticClass: "content-item"
	    }, [_c('text', {
	      staticClass: "content-text"
	    }, [_vm._v(_vm._s(item))])])
	  })), _vm._v(" "), _c('div', [_c('text', {
	    staticClass: "aside"
	  }, [_vm._v("更多")])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-214b4db8", module.exports)
	  }
	}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [{
	    title: '已开课程',
	    data: [{
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡1',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/94f8a0317f18ba387d19199808f545f2.png',
	        title: '每日打卡3'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡4'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5'
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/94f8a0317f18ba387d19199808f545f2.png',
	        title: '每日打卡3'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡4'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5'
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/94f8a0317f18ba387d19199808f545f2.png',
	        title: '每日打卡3'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡4'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5'
	    }],
	    limit: 4
	}, {
	    title: '考试成绩',
	    data: [{
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡1',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡3',
	        click: function click(url) {
	            console.log(url);
	        }
	    }],
	    limit: 4
	}, {
	    title: '社团活动',
	    data: [{
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡1',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡3',
	        click: function click(url) {
	            console.log(url);
	        }
	    }],
	    limit: 4
	}, {
	    title: '学术交流',
	    data: [{
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/1fe738f4291dd806d03e039cc5d60afb.png',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡3',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡4',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡4',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5',
	        click: function click(url) {
	            console.log(url);
	        }
	    }],
	    limit: 4
	}, {
	    title: '聚餐啦啦啦',
	    data: [{
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡1',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }],
	    limit: 4
	}, {
	    title: '聚餐啦啦啦',
	    data: [{
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡1',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡3',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡4',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5',
	        click: function click(url) {
	            console.log(url);
	        }
	    }],
	    limit: 4
	}];

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [{
	    title: '管理员控制台',
	    data: [{
	        url: 'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C206-128.png',
	        title: '增加学分',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C206-128.png',
	        title: '提高成绩',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '发奖学金'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '出去实习'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5'
	    }, {
	        url: 'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C206-128.png',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }, {
	        url: 'http://msqq.com/d/file/appicon/2014-05-02/94f8a0317f18ba387d19199808f545f2.png',
	        title: '每日打卡3'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡4'
	    }, {
	        url: 'http://bpic.588ku.com//element_origin_min_pic/17/06/08/dd729cb9adf0d382488ef37b79623931.jpg',
	        title: '每日打卡5'
	    }, {
	        url: 'https://cdn3.iconfinder.com/data/icons/food-set-3/91/Food_C206-128.png',
	        title: '每日打卡2',
	        click: function click(url) {
	            console.log(url);
	        }
	    }],
	    limit: 4
	}];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: "app"
	  }, [_c('div', {
	    staticClass: "icon-container"
	  }, _vm._l((_vm.adminDrawers), function(drawer, index) {
	    return _c('icon-drawer', {
	      key: drawer.title,
	      staticClass: "icon-drawer",
	      class: {
	        'icon-drawer--first': index === 0
	      },
	      attrs: {
	        "title": drawer.title,
	        "data": drawer.data,
	        "limit": drawer.limit
	      }
	    }, [_c('div', {
	      staticClass: "drawer-footer",
	      slot: "footer"
	    }, [_c('slider-news', {
	      attrs: {
	        "title": "公告",
	        "data": _vm.adminNews
	      }
	    })], 1)])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "icon-container"
	  }, _vm._l((_vm.drawers), function(drawer, index) {
	    return _c('icon-drawer', {
	      key: drawer.title,
	      staticClass: "icon-drawer",
	      class: {
	        'icon-drawer--first': index === 0
	      },
	      attrs: {
	        "title": drawer.title,
	        "data": drawer.data,
	        "limit": drawer.limit
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    staticClass: "icon-container icon-container--last"
	  }, _vm._l((_vm.drawers.slice(0, 1)), function(drawer, index) {
	    return _c('icon-drawer', {
	      key: drawer.title,
	      staticClass: "icon-drawer",
	      class: {
	        'icon-drawer--first': index === 0
	      },
	      attrs: {
	        "title": drawer.title,
	        "data": drawer.data,
	        "limit": drawer.limit
	      }
	    })
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d4559a50", module.exports)
	  }
	}

/***/ })
/******/ ]);
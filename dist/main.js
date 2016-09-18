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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vue = __webpack_require__(1);
	var style = __webpack_require__(2);
	var modal_1 = __webpack_require__(6);
	var summary_1 = __webpack_require__(8);
	var PreviewCard = {
	    template: __webpack_require__(10),
	    data: function () {
	        return {
	            isFrontVisible: true,
	            buttonLabel: this.backTitle
	        };
	    },
	    props: ['header', 'footer', 'width', 'height', 'transition',
	        'hide-footer', 'hide-header', 'front-title', 'back-title',
	        'flip-on-hover'],
	    methods: {
	        flip: function () {
	            this.isFrontVisible = !this.isFrontVisible;
	            if (!this.isFrontVisible) {
	                this.buttonLabel = this.frontTitle;
	            }
	            else {
	                this.buttonLabel = this.backTitle;
	            }
	        },
	        click: function () {
	            if (!this.flipOnHover) {
	                this.flip();
	            }
	        },
	        mouseOver: function () {
	            if (this.flipOnHover && this.isFrontVisible) {
	                this.flip();
	            }
	        },
	        mouseLeave: function () {
	            if (this.flipOnHover && !this.isFrontVisible) {
	                this.flip();
	            }
	        }
	    },
	    transitions: {
	        zoom: {
	            enterClass: "zoomIn",
	            leaveClass: "deleted"
	        },
	        flip: {
	            enterClass: "flipInX",
	            leaveClass: "deleted"
	        },
	        fade: {
	            enterClass: "fadeInDown",
	            leaveClas: "deleted"
	        }
	    },
	    components: {
	        modal: modal_1.default,
	        summary: summary_1.default
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PreviewCard;
	//# sourceMappingURL=preview-card.js.map

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Vue;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./preview-card.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./preview-card.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\r\n.preview-card-container {\r\n    margin-bottom: 60px;\r\n    display: inline-block;\r\n}\r\n\r\n.preview-card-footer-text {\r\n    font-size: large;\r\n    margin-top: .25em;\r\n    color: #DBDBDB;\r\n}\r\n\r\n.preview-card-footer-button {\r\n    background-color: #ed952b;\r\n    padding: 4px 20px 4px 20px;\r\n    color: black;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-left-width: 1px;\r\n    border-left-style: solid;\r\n}\r\n\r\n.preview-card-footer {\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n    background-color: #191919;\r\n\r\n}\r\n\r\n.preview-card-back {\r\n    background-color: #CCCCCC;\r\n}\r\n\r\n.preview-card-front {\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px;\r\n}\r\n\r\n.preview-card-header {\r\n    color: #a2a0a0;\r\n    font-size: 2em;\r\n    line-height: 20px;\r\n}\r\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vue = __webpack_require__(1);
	var Modal = {
	    template: __webpack_require__(7),
	    props: {
	        show: {
	            type: Boolean,
	            required: true,
	            twoWay: true
	        }
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Modal;
	//# sourceMappingURL=modal.js.map

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-mask\" v-show=\"show\" transition=\"modal\">\r\n    <div class=\"modal-wrapper\">\r\n        <div class=\"modal-container\">\r\n            <div class=\"modal-body\">\r\n                <slot name=\"body\">\r\n                    No Data Available\r\n                </slot>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button class=\"modal-default-button btn\" @click=\"show = false\">\r\n              Close\r\n            </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Vue = __webpack_require__(1);
	var modal_1 = __webpack_require__(6);
	var Summary = {
	    template: __webpack_require__(9),
	    data: function () {
	        return {
	            isOverflowed: false,
	            isModalVisible: false
	        };
	    },
	    props: ['height', 'width'],
	    ready: function () {
	        this.isOverflowed = this.$el.scrollHeight > this.$el.clientHeight;
	    },
	    components: {
	        modal: modal_1.default
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Summary;
	//# sourceMappingURL=summary.js.map

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"summary-content\" v-bind:style=\"{\r\n    position: 'relative',\r\n    width: width,\r\n    height: height,\r\n    overflow: 'hidden'\r\n    }\">\r\n    <slot name=\"content\"></slot>\r\n    <!--A gradient transparency mask to fade out text if we're overflowed.-->\r\n    <div class=\"summary-mask\" v-bind:style=\" {\r\n            position: 'absolute',\r\n            top: '0px',\r\n            width: width,\r\n            height: height\r\n        }\">\r\n    </div>\r\n    <a v-if=\"isOverflowed && !isModalVisible\" v-on:click.stop=\"isModalVisible=true\" class=\"summary-btn\">\r\n               More\r\n    </a>\r\n    <modal :show.sync='isModalVisible'>\r\n        <div slot=\"body\">\r\n            <slot name=\"content\"></slot>\r\n        </div>\r\n    </modal>\r\n</div>";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div @click=\"click\" @mouseover=\"mouseOver\" @mouseleave=\"mouseLeave\" class=\"preview-card-container\">\r\n    <h2 class=\"preview-card-header\" v-if=\"!hideHeader\">{{ header }}</h2>\r\n    <div class=\"animated preview-card-front\" :style=\"{\r\n        width: width,\r\n        height: height\r\n        }\" v-if=\"isFrontVisible\" :transition=\"transition\">\r\n        <slot name=\"front\"></slot>\r\n    </div>\r\n    <div class=\"animated preview-card-back\" :style=\"{\r\n        width: width,\r\n        height: height,\r\n        position: 'relative'\r\n        }\" v-show=\"!isFrontVisible\" :transition=\"transition\">\r\n        <summary :width.sync=\"width\" :height.sync=\"height\">\r\n                <slot name=\"back\" slot=\"content\"></slot>\r\n        </summary>\r\n    </div>\r\n    <div class=\"preview-card-footer\" v-if=\"!hideFooter\" :style=\"{\r\n        width: width,\r\n        overflow: 'auto'\r\n        }\">\r\n        <span class=\"preview-card-footer-text\" style=\"float: left;\"> {{ footer }} </span>\r\n        <span class=\"preview-card-footer-button\" style=\"float: right;\"> {{ buttonLabel }} </span>\r\n    </div>\r\n</div>";

/***/ }
/******/ ]);
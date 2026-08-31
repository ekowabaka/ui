/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fzui"] = factory();
	else
		root["fzui"] = factory();
})(Object(typeof self !== "undefined" ? self : this), () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs/index.js!./js/components/cards/cards.css"
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs/index.js!./js/components/cards/cards.css ***!
  \******************************************************************************************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{// Imports\nvar ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:host {\n  display: block;\n}\n\n.card {\n  display: flex;\n  flex-direction: var(--card-flex-direction, column);\n  border: var(--card-border, 1px solid #ccc);\n  border-color: var(--card-border-color, #ccc);\n  box-shadow: var(--card-box-shadow, 2px 2px 4px rgba(0, 0, 0, 0.1));\n  border-radius: var(--card-border-radius, 4px);\n  background-color: var(--card-background-color, #fff);\n  color: var(--card-body-color, #4a4a4a);\n  line-height: 1.1em;\n  font-family: inherit;\n  overflow: hidden;\n  slot[name=image] {\n    display: block;\n    width: var(--card-image-width, 100%);\n    height: var(--card-image-height, auto);\n    order: var(--card-image-order, 0);\n    padding: var(--card-image-padding, var(--card-padding, 1.25em) var(--card-padding, 1.25em) 0 var(--card-padding, 1.25em));\n    box-sizing: border-box;\n    flex-shrink: 0;\n  }\n  /*slot:not([name]) {*/\n  /*    display: block;*/\n  /*}*/\n  .card__body {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    padding: var(--card-padding, 1.25em);\n    order: 1;\n  }\n}\n\n::slotted([slot=image]),\n::slotted(.fz-card__image) {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: var(--card-image-object-fit, cover);\n  border-radius: var(--card-image-border-radius, var(--card-border-radius, 4px));\n  box-sizing: border-box;\n}\n\n::slotted([slot=title]) {\n  display: block;\n  color: var(--card-title-color, #1a1a1a);\n  font-size: var(--card-title-font-size, 1em);\n  font-weight: var(--card-title-font-weight, 700);\n  letter-spacing: -0.01em;\n  margin-bottom: var(--card-title-margin-bottom, 0.3em);\n}\n\n::slotted(:not([slot=title]):not([slot=image])) {\n  color: var(--card-body-color, #4a4a4a);\n  font-size: var(--card-body-font-size, 1em);\n  font-weight: var(--card-body-font-weight, 400);\n  line-height: 1.5;\n}`, \"\"]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n\n\n//# sourceURL=webpack://fzui/./js/components/cards/cards.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/sass-loader/dist/cjs/index.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://fzui/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fzui/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./sass/fzui.scss"
/*!************************!*\
  !*** ./sass/fzui.scss ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fzui/./sass/fzui.scss?\n}");

/***/ },

/***/ "./js/components/cards/cards.css"
/*!***************************************!*\
  !*** ./js/components/cards/cards.css ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n        var result = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs/index.js!./cards.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs/index.js!./js/components/cards/cards.css\");\n\n        if (result && result.__esModule) {\n            result = result.default;\n        }\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack://fzui/./js/components/cards/cards.css?\n}");

/***/ },

/***/ "./js/components/cards/cards.js"
/*!**************************************!*\
  !*** ./js/components/cards/cards.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardComponent: () => (/* binding */ CardComponent)\n/* harmony export */ });\n/* harmony import */ var _cards_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.css */ \"./js/components/cards/cards.css\");\n\n\nclass CardComponent extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({mode: 'open'}).innerHTML = \n            `<style>\n                ${_cards_css__WEBPACK_IMPORTED_MODULE_0__}\n            </style>\n            <div class=\"card\">\n                <slot name=\"image\"></slot>\n                <div class=\"card__body\">\n                    <slot name=\"title\"></slot>\n                    <slot></slot>\n                </div>\n            </div>`\n    }\n}\n\n\n//# sourceURL=webpack://fzui/./js/components/cards/cards.js?\n}");

/***/ },

/***/ "./js/fzui.js"
/*!********************!*\
  !*** ./js/fzui.js ***!
  \********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialize: () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _sass_fzui_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/fzui.scss */ \"./sass/fzui.scss\");\n/* harmony import */ var _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards/cards.js */ \"./js/components/cards/cards.js\");\n\n\n\nfunction initialize() {\n    customElements.define('fz-card', _components_cards_cards_js__WEBPACK_IMPORTED_MODULE_1__.CardComponent);\n}\n\n//# sourceURL=webpack://fzui/./js/fzui.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./js/fzui.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_fragments_main_img_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/fragments/main-img.scss */ \"./src/scss/fragments/main-img.scss\");\n/* harmony import */ var _scss_fragments_main_img_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_fragments_main_img_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_fragments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/fragments/page.scss */ \"./src/scss/fragments/page.scss\");\n/* harmony import */ var _scss_fragments_page_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_fragments_page_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_fragments_article_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/fragments/article.scss */ \"./src/scss/fragments/article.scss\");\n/* harmony import */ var _scss_fragments_article_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_fragments_article_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_fragments_slider_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/fragments/slider.scss */ \"./src/scss/fragments/slider.scss\");\n/* harmony import */ var _scss_fragments_slider_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_fragments_slider_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // Воспользуемся замыканием, чтобы всегда иметь доступ к номеру текущего слайда\n// код вне функции не сможет ее переопределить\n\nvar changeSlide = function () {\n  var number = 1; // номер текущего слайда\n\n  var prev = document.querySelector('#prev');\n  var next = document.querySelector('#next'); // переменная indicator если true, то функция вызывается индикатором\n  // можно было проверить и при помощи this\n\n  return function (n) {\n    var indicator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    var currentVal = number;\n    var sum = number + n; // определяем номер следующего слайда\n    // eslint-disable-next-line no-nested-ternary\n\n    number = indicator ? n : sum > 3 ? 3 : sum < 1 ? 1 : sum; // если закончились слайды в одну из сторон ничего не выполнять\n\n    if (number === currentVal) return; // слайд, который надо скрыть\n\n    var slideToHidden = document.querySelector(\"#slide\".concat(currentVal)); // слайд, который надо показать\n\n    var slideToShow = document.querySelector(\"#slide\".concat(number)); // индикатор, который надо показать\n\n    var indicatorToShow = document.querySelector(\"#indicator\".concat(number)); // индикатор, который надо скрыть\n\n    var indicatorToHidden = document.querySelector(\"#indicator\".concat(currentVal));\n    indicatorToShow.style.opacity = '1';\n    indicatorToHidden.style.opacity = '.5';\n    slideToHidden.classList.add('hiddenByAnimation');\n    slideToHidden.classList.remove('shownByAnimation');\n    slideToShow.classList.remove('hidden');\n    slideToShow.classList.add('shownByAnimation');\n    slideToShow.classList.remove('hiddenByAnimation'); // следим за затенением стрелок слайдера\n\n    next.style.color = number === 3 ? 'rgb(130,130,130)' : 'rgb(212, 210, 210)';\n    prev.style.color = number === 1 ? 'rgb(130,130,130)' : 'rgb(212, 210, 210)';\n  };\n}(); // зададим начальные значения\n\n\ndocument.querySelector('#indicator1').style.opacity = '1';\ndocument.querySelector('#prev').style.color = 'rgb(130,130,130)'; // зададим обработчики для стрелок слайдера\n\ndocument.querySelector('#prev').addEventListener('click', function () {\n  changeSlide(-1);\n});\ndocument.querySelector('#next').addEventListener('click', function () {\n  changeSlide(1);\n}); // в цикле зададим обработчики для индикаторов\n\ndocument.querySelectorAll('.indicator').forEach(function (indicator, index) {\n  indicator.addEventListener('click', function () {\n    changeSlide(index + 1, true);\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/fragments/article.scss":
/*!*****************************************!*\
  !*** ./src/scss/fragments/article.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/fragments/article.scss?");

/***/ }),

/***/ "./src/scss/fragments/main-img.scss":
/*!******************************************!*\
  !*** ./src/scss/fragments/main-img.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/fragments/main-img.scss?");

/***/ }),

/***/ "./src/scss/fragments/page.scss":
/*!**************************************!*\
  !*** ./src/scss/fragments/page.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/fragments/page.scss?");

/***/ }),

/***/ "./src/scss/fragments/slider.scss":
/*!****************************************!*\
  !*** ./src/scss/fragments/slider.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/fragments/slider.scss?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });
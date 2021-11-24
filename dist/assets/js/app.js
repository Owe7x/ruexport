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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n// Мобильный слайдер программы\r\n$('.architecture__mobile-slider').slick({\r\n  dots: true,\r\n  adaptiveHeight: true,\r\n});\r\n\r\n\r\n// Смена языка\r\n\r\n$('.checkbox-ios').on(\"click\", \"input:checkbox\", function (a) {\r\n  var urlEng = \"/eng.html\";\r\n  var urlRu = \"/\";\r\n  if ($('#checkbox').is(':checked')){\r\n    $('#checkbox').prop('checked', true);\r\n    $(location).attr('href',urlEng);\r\n\r\n  } else {\r\n    $('#checkbox').prop('checked', false);\r\n    $(location).attr('href',urlRu);\r\n\r\n  }\r\n});\r\n\r\n// Отображение карты \r\n\r\n$('.russianMap').on(\"click\",  function (a) {\r\n  showMap('.russianMap')\r\n});\r\n$('.worldMap').on(\"click\",  function (a) {\r\n  showMap('.worldMap')\r\n});\r\n\r\nfunction showMap (map) {\r\n  if(map === '.worldMap' ) {\r\n    $(map).addClass('map-active')\r\n    $('.map__world').removeClass('d-none')\r\n    $('.map__russian').addClass('d-none')\r\n    $('.russianMap').removeClass('map-active')\r\n  } else {\r\n    $(map).addClass('map-active')\r\n    $('.map__russian').removeClass('d-none')\r\n    $('.map__world').addClass('d-none')\r\n    $('.worldMap').removeClass('map-active')\r\n  }\r\n}\r\n\r\n// Слайдер Фотогалерии \r\n\r\n$('.gallery__slider').slick({\r\n  infinite: true,\r\n  slidesToShow: 3,\r\n  slidesToScroll: 3,\r\n  prevArrow: '<button type=\"button\" class=\"slick-prev-gallery\"></button>',\r\n  nextArrow: '<button type=\"button\" class=\"slick-next-gallery\"></button>'\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\ruexport\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\ruexport\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });
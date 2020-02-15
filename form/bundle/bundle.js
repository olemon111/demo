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
/******/ 		if(mode & 1) {value = __webpack_require__(value);}
/******/ 		if(mode & 8) {return value;}
/******/ 		if(mode & 4 && typeof value === 'object' && value && value.__esModule) {return value;}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') {for(var key in value) {__webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));}}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throttle */ \"./js/throttle.js\");\n/*\r\n * @Author: your name\r\n * @Date: 2020-02-14 16:18:57\r\n * @LastEditTime : 2020-02-15 09:44:24\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\test\\builder-form\\builder.js\r\n */\r\n// let debounce = require(\"./debounce\").debounce;\r\n// import { debounce } from \"./debounce\";\r\n\r\n//构造者模式\r\nlet form = document.getElementById(\"form\");\r\nclass Student {}\r\nclass StudentBuilder {\r\n\tconstructor() {\r\n\t\tthis.student = new Student();\r\n\t}\r\n\tsetName(name) {\r\n\t\t//doSomething...\r\n\t\tthis.student.name = name;\r\n\t}\r\n\tsetGender(gender) {\r\n\t\tthis.student.gender = gender;\r\n\t}\r\n\tsetAge(age) {\r\n\t\tthis.student.age = age;\r\n\t}\r\n\tbuild() {\r\n\t\treturn this.student;\r\n\t}\r\n}\r\n\r\nfunction init() {\r\n\tlet name = document.querySelector(\"[name=name]\").value;\r\n\tlet gender = document.querySelector(\"[name=gender]:checked\").value;\r\n\tlet age = document.querySelector(\"[name=age]\").value;\r\n\tconst builder = new StudentBuilder();\r\n\tbuilder.setName(name);\r\n\tbuilder.setGender(gender);\r\n\tbuilder.setAge(age);\r\n\tlet student = builder.build();\r\n\tconsole.log(student);\r\n}\r\n\r\n// const oDebounce = debounce(init, 1000); //修饰\r\n// form.addEventListener(\"submit\", e => {\r\n// \tlet ev = e || window.event;\r\n// \tev.preventDefault();\r\n// \toDebounce();\r\n// });\r\nconst oThrottle = Object(_throttle__WEBPACK_IMPORTED_MODULE_0__[\"throttle\"])(init, 1000); //修饰\r\nform.addEventListener(\"submit\", e => {\r\n\tlet ev = e || window.event;\r\n\tev.preventDefault();\r\n\toThrottle();\r\n});\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ },

/***/ "./js/throttle.js":
/*!************************!*\
  !*** ./js/throttle.js ***!
  \************************/
/*! exports provided: throttle */
/***/ function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"throttle\", function() { return throttle; });\n/*\r\n * @Author: your name\r\n * @Date: 2020-02-15 16:50:19\r\n * @LastEditTime: 2020-02-15 16:50:19\r\n * @LastEditors: Please set LastEditors\r\n * @Description: In User Settings Edit\r\n * @FilePath: \\form\\throttle.js\r\n */\r\n//函数节流\r\nlet flag = true;\r\nlet throttle = (func, delay) => {\r\n\treturn (...args) => {\r\n\t\tif (flag) {\r\n\t\t\tflag = false;\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tfunc.apply(undefined, args);\r\n\t\t\t\tflag = true;\r\n\t\t\t}, delay);\r\n\t\t}\r\n\t};\r\n};\r\n\n\n//# sourceURL=webpack:///./js/throttle.js?");

/***/ }

/******/ });
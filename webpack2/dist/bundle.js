/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/affichage.js":
/*!**************************!*\
  !*** ./src/affichage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dUpdate\": () => (/* binding */ displayUpdate)\n/* harmony export */ });\n\r\n\r\nfunction displayUpdate(people, pUpdate) {\r\n\r\n  window.document.addEventListener(\"DOMContentLoaded\", function () {\r\n\r\n    console.log('étape 1');\r\n    var oneDiv = window.document.createElement('div');\r\n    console.log('étape 2');\r\n    pUpdate(people);\r\n    console.log('étape 3');\r\n    people.forEach(function (onePerson) {\r\n    var oneP = window.document.createElement('p');\r\n    oneP.innerText = onePerson.firstName + ' ' + onePerson.lastName + ' est présent ? ' + onePerson.isPresent;\r\n    oneDiv.appendChild(oneP);\r\n    });\r\n    console.log('étape 4');\r\n    window.document.body.appendChild(oneDiv);\r\n    console.log('étape 5');\r\n  });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack2/./src/affichage.js?");

/***/ }),

/***/ "./src/donnees.js":
/*!************************!*\
  !*** ./src/donnees.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\n\r\n  var people = [\r\n    {\r\n      firstName: 'Kim',\r\n      lastName: 'Morvan'\r\n    },\r\n    {\r\n      firstName: 'Benjamin',\r\n      lastName: 'Jeannerot'\r\n    },\r\n    {\r\n      firstName: 'Anne',\r\n      lastName: 'Quiniou'\r\n    },\r\n    {\r\n      firstName: 'Ludovic',\r\n      lastName: 'Manet'\r\n    },\r\n  ];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (people);\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack2/./src/donnees.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _affichage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affichage.js */ \"./src/affichage.js\");\n/* harmony import */ var _donnees_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donnees.js */ \"./src/donnees.js\");\n/* harmony import */ var _traitement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traitement.js */ \"./src/traitement.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nif (_affichage_js__WEBPACK_IMPORTED_MODULE_0__.dUpdate) {\r\n  (0,_affichage_js__WEBPACK_IMPORTED_MODULE_0__.dUpdate)(_donnees_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _traitement_js__WEBPACK_IMPORTED_MODULE_2__.pUpdate);\r\n} else {\r\n  console.error('Aucune fonction dUpdate trouvée dans l\\'objet globalContextObject');\r\n};\n\n//# sourceURL=webpack://webpack2/./src/main.js?");

/***/ }),

/***/ "./src/traitement.js":
/*!***************************!*\
  !*** ./src/traitement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pUpdate\": () => (/* binding */ peopleUpdate)\n/* harmony export */ });\n\r\n\r\nvar peopleUpdate = function(updateArray) {\r\n  updateArray.map(function (element) {\r\n    element.isPresent = true;\r\n    element.lastName = element.lastName.toUpperCase();\r\n    return element;\r\n  })\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack2/./src/traitement.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
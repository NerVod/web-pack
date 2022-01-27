/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var message = function message() {
  console.log("Webpack c'est gal\xE8re");
};

var bouilloireES6 = {
  bruitQuandCaBout: "PShhiit",
  chauffer: function chauffer() {
    var _this = this;

    console.log("L'eau commence \xE0 chauffer ..");
    setTimeout(function () {
      console.log("L'eau est \xE0 100\xB0");
      alert("Bouilloire ES6 dit : ".concat(_this.bruitQuandCaBout));
    }, 3000);
  }
};
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired!");
  var h1 = document.createElement("h1");
  h1.innerText = "Hello World!";
  var start = document.querySelector("button[type='button']"); //document.body.appendChild(h1);

  document.body.insertBefore(h1, document.body.children[0]);
  start.addEventListener('click', function () {
    bouilloireES6.chauffer();
  });
  message();
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
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

/***/ "./src/renderContent.js":
/*!******************************!*\
  !*** ./src/renderContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContacts\": () => (/* binding */ renderContacts),\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome),\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\nfunction renderHome () {\n  const wrapper = document.querySelector('.content');\n  wrapper.innerHTML = '';\n\n  const header = document.createElement('h1');\n  header.textContent = 'Welcome to $RESTAURANT_NAME$!';\n  wrapper.appendChild(header);\n\n  const description = document.createElement('p');\n  description.textContent = \"Here will be description about how good our \" + \n  \"$RESTAURANT_NAME$ is. It's the best place in city, i'm telling ya \" +\n  \"Such place. Much wow. Gotta visit it for sure! Ja ja ja ja ja\" +\n  \"I got to add some picture here for sure, yea.\";\n  wrapper.appendChild(description);\n\n  const review_box = document.createElement('div');\n  const review = document.createElement('p');\n  review.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit,\" + \n  \" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\" +\n  \" minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\" +\n  \" commodo consequat.\";\n  review_box.appendChild(review);\n  const author = document.createElement('p');\n  author.textContent = ' - Loremus Ipsumovich';\n  review_box.appendChild(author);\n  wrapper.appendChild(review_box);\n};\n\nfunction renderMenu () {\n  const wrapper = document.querySelector('.content');\n  wrapper.innerHTML = '';\n  const menu = document.createElement('p');\n  menu.textContent = \"Placeholder for menu, maybe even with pictures\" +\n  \"1\\n2\\n3\\n4\\n5\\n6\\n7\\n8\\n\";\n  wrapper.appendChild(menu);\n};\nfunction renderContacts () {\n  const wrapper = document.querySelector('.content');\n  wrapper.innerHTML = '';\n  const info = document.createElement('p');\n  info.textContent = \"La La La will place adres and phone here and maybe even add da map!\";\n  wrapper.appendChild(info);\n};\n\n//# sourceURL=webpack://restaurant-page/./src/renderContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/renderContent.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
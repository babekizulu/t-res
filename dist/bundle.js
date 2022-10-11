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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _scss_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/App.scss */ \"./src/scss/App.scss\");\n//libs\n\nvar WebGLRenderer = three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer,\n  PerspectiveCamera = three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera,\n  Scene = three__WEBPACK_IMPORTED_MODULE_0__.Scene,\n  BoxGeometry = three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry,\n  MeshPhongMaterial = three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial,\n  Mesh = three__WEBPACK_IMPORTED_MODULE_0__.Mesh,\n  DirectionalLight = three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight;\n//dom elements\nvar canvas = document.querySelector('#canvas');\n//style\n\n//instantiate a renderer\nvar renderer = new WebGLRenderer({\n  canvas: canvas\n});\n//camera params: field of view, aspect ratio, near clipping, far clipping\nvar fov = 75;\nvar a = 2;\nvar n = 0.1;\nvar f = 5;\n//instantiate a camera\nvar camera = new PerspectiveCamera(fov, a, n, f);\n//set camera position\ncamera.position.z = 2;\n//instantiate a scene\nvar scene = new Scene();\n//geometry params: (box) width, height, depth\nvar w = 1,\n  h = 1,\n  d = 1;\n//instantiate a geometry\nvar geometry = new BoxGeometry(w, h, d);\n//material params: color\nvar color = 0x44aa88;\n//instantiate a material\nvar material = new MeshPhongMaterial({\n  color: color\n});\n//instantiate a mesh\n//@params: geometry, material\nvar cube = new Mesh(geometry, material);\n//set mesh position(set to origin by default)\n//add mesh to scene \n//@func: add()\nscene.add(cube);\n//light params: color, intensity\nvar lightColor = 0xffffff;\nvar intensity = 1;\n//instantiate a light\nvar light = new DirectionalLight(lightColor, intensity);\n//set light position:\n//@func: position.set(x, y, z)\nlight.position.set(-2, 2, 4);\n//add light to scene\n//@func: add()\nscene.add(light);\n//resize renderer to display size(if necessary)\n//@param: renderer\nvar resize = function resize(renderer) {\n  //get canvas element\n  var canvas = renderer.domElement;\n  var clientWidth = canvas.clientWidth,\n    clientHeight = canvas.clientHeight;\n  //get client width and height of canvas element\n  var w = clientWidth;\n  var h = clientHeight;\n  //store a boolean that evaluates:\n  // - If Canvas width is not equal to Client Width\n  // - If Canvas height is not equal to Client Height\n  var needResize = canvas.width !== w || canvas.height !== h;\n  //if drawbuffer size is not equal to display size then resize\n  if (needResize) {\n    //set size to display size\n    renderer.setSize(w, h, false);\n  }\n  //will return true if canvas was resized\n  return needResize;\n};\n//create a render loop\n//@param: time\nvar loop = function loop(t) {\n  //convert time to milliseconds\n  t *= 0.001;\n  //set rotation of mesh to time\n  cube.rotation.x = t;\n  cube.rotation.y = t;\n  //if the canvas drawbuffer size needs to be resized,\n  // then update the aspect ratio to the canvas display size\n  if (resize(renderer)) {\n    //update aspect ratio to canvas size\n    //1. get canvas\n    var _canvas = renderer.domElement;\n    var clientWidth = _canvas.clientWidth,\n      clientHeight = _canvas.clientHeight;\n    //2. set camera aspect to canvas size\n    camera.aspect = clientWidth / clientHeight;\n    //3. update the cameras projection matrix\n    camera.updateProjectionMatrix();\n  }\n  //render the scene\n  //@params: scene, camera\n  renderer.render(scene, camera);\n  //request animation frame\n  //@param: render loop function\n  requestAnimationFrame(loop);\n};\n//initial animation frame request\nrequestAnimationFrame(loop);\n\n//# sourceURL=webpack://test_beta_res/./src/index.js?");

/***/ }),

/***/ "./src/scss/App.scss":
/*!***************************!*\
  !*** ./src/scss/App.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test_beta_res/./src/scss/App.scss?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
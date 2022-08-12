/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reloadUI": () => (/* binding */ reloadUI)
/* harmony export */ });
function reloadUI(weatherObj) {
  const weather = document.querySelector('#weather');
  const city = document.querySelector('#city');
  const date = document.querySelector('#date');
  const time = document.querySelector('#time');
  const temp = document.querySelector('#temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const feelsLike = document.querySelector('#feels-like-temp');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');

  city.textContent = weatherObj.city;
  weather.textContent = weatherObj.weather;
  date.textContent = 'TBA';
  time.textContent = 'TBA';
  temp.textContent = `${weatherObj.temp}\u00B0 F`;
  feelsLike.textContent = weatherObj.feelsLike;
  humidity.textContent = weatherObj.humidity;
  windSpeed.textContent = weatherObj.windSpeed;
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchWeatherData": () => (/* binding */ fetchWeatherData),
/* harmony export */   "processData": () => (/* binding */ processData)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");


async function fetchWeatherData(city) {
  let value;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85db5f12d307416a29142d60485efdaf&units=imperial`);
    const data = await response.json();
    if (data.cod === '404') {
      throw new Error('Invalid city');
    }
    value = data;
  } catch (err) {
    console.log(err);
    value = {};
  }
  return value;
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function processData(data) {
  const processedData = {};
  processedData.feelsLike = data.main.feels_like;
  processedData.humidity = data.main.humidity;
  processedData.temp = data.main.temp;
  processedData.weather = data.weather[0].main;
  processedData.windSpeed = data.wind.speed;
  processedData.city = data.name;
  return processedData;
}



(function logicController() {
  const cityInput = document.querySelector('#city-input');
  cityInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cityValue = cityInput.value;
      const weatherData = await fetchWeatherData(cityValue);
      if (isEmpty(weatherData) === true) {
        return 'Failed to fetch';
      }
      const processedData = processData(weatherData);
      console.log(processedData);
      (0,_ui__WEBPACK_IMPORTED_MODULE_0__.reloadUI)(processedData);
    }
  });
}());

/* FORMAT OF WEATHER APP DATA
base: "stations"
clouds: {all: 0}
cod: 200
coord: {lon: -118.2437, lat: 34.0522}
dt: 1660227215
id: 5368361
main:
feels_like: 294.32
humidity: 65
pressure: 1016
temp: 294.44
temp_max: 299.04
temp_min: 291.75
[[Prototype]]: Object
name: "Los Angeles"
sys: {type: 1, id: 3694, country: 'US', sunrise: 1660223503, sunset: 1660272285}
timezone: -25200
visibility: 10000
weather: Array(1)
0: {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}
length: 1
[[Prototype]]: Array(0)
wind: {speed: 2.57, deg: 310}
[[Prototype]]: Object
*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7OztVQ3ZCRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05nQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLEtBQUs7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDZDQUFRO0FBQ2Q7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmVsb2FkVUkod2VhdGhlck9iaikge1xuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXInKTtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuICBjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWUnKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItaWNvbicpO1xuICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZS10ZW1wJyk7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLXNwZWVkJyk7XG5cbiAgY2l0eS50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmouY2l0eTtcbiAgd2VhdGhlci50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmoud2VhdGhlcjtcbiAgZGF0ZS50ZXh0Q29udGVudCA9ICdUQkEnO1xuICB0aW1lLnRleHRDb250ZW50ID0gJ1RCQSc7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyT2JqLnRlbXB9XFx1MDBCMCBGYDtcbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gd2VhdGhlck9iai5mZWVsc0xpa2U7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gd2VhdGhlck9iai5odW1pZGl0eTtcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gd2VhdGhlck9iai53aW5kU3BlZWQ7XG59XG5cbmV4cG9ydCB7XG4gIHJlbG9hZFVJLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVsb2FkVUkgfSBmcm9tICcuL3VpJztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShjaXR5KSB7XG4gIGxldCB2YWx1ZTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9ODVkYjVmMTJkMzA3NDE2YTI5MTQyZDYwNDg1ZWZkYWYmdW5pdHM9aW1wZXJpYWxgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGlmIChkYXRhLmNvZCA9PT0gJzQwNCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjaXR5Jyk7XG4gICAgfVxuICAgIHZhbHVlID0gZGF0YTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB2YWx1ZSA9IHt9O1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gIGNvbnN0IHByb2Nlc3NlZERhdGEgPSB7fTtcbiAgcHJvY2Vzc2VkRGF0YS5mZWVsc0xpa2UgPSBkYXRhLm1haW4uZmVlbHNfbGlrZTtcbiAgcHJvY2Vzc2VkRGF0YS5odW1pZGl0eSA9IGRhdGEubWFpbi5odW1pZGl0eTtcbiAgcHJvY2Vzc2VkRGF0YS50ZW1wID0gZGF0YS5tYWluLnRlbXA7XG4gIHByb2Nlc3NlZERhdGEud2VhdGhlciA9IGRhdGEud2VhdGhlclswXS5tYWluO1xuICBwcm9jZXNzZWREYXRhLndpbmRTcGVlZCA9IGRhdGEud2luZC5zcGVlZDtcbiAgcHJvY2Vzc2VkRGF0YS5jaXR5ID0gZGF0YS5uYW1lO1xuICByZXR1cm4gcHJvY2Vzc2VkRGF0YTtcbn1cblxuZXhwb3J0IHtcbiAgZmV0Y2hXZWF0aGVyRGF0YSxcbiAgcHJvY2Vzc0RhdGEsXG59O1xuXG4oZnVuY3Rpb24gbG9naWNDb250cm9sbGVyKCkge1xuICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eS1pbnB1dCcpO1xuICBjaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBhc3luYyAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgY2l0eVZhbHVlID0gY2l0eUlucHV0LnZhbHVlO1xuICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGNpdHlWYWx1ZSk7XG4gICAgICBpZiAoaXNFbXB0eSh3ZWF0aGVyRGF0YSkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuICdGYWlsZWQgdG8gZmV0Y2gnO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IHByb2Nlc3NEYXRhKHdlYXRoZXJEYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3NlZERhdGEpO1xuICAgICAgcmVsb2FkVUkocHJvY2Vzc2VkRGF0YSk7XG4gICAgfVxuICB9KTtcbn0oKSk7XG5cbi8qIEZPUk1BVCBPRiBXRUFUSEVSIEFQUCBEQVRBXG5iYXNlOiBcInN0YXRpb25zXCJcbmNsb3Vkczoge2FsbDogMH1cbmNvZDogMjAwXG5jb29yZDoge2xvbjogLTExOC4yNDM3LCBsYXQ6IDM0LjA1MjJ9XG5kdDogMTY2MDIyNzIxNVxuaWQ6IDUzNjgzNjFcbm1haW46XG5mZWVsc19saWtlOiAyOTQuMzJcbmh1bWlkaXR5OiA2NVxucHJlc3N1cmU6IDEwMTZcbnRlbXA6IDI5NC40NFxudGVtcF9tYXg6IDI5OS4wNFxudGVtcF9taW46IDI5MS43NVxuW1tQcm90b3R5cGVdXTogT2JqZWN0XG5uYW1lOiBcIkxvcyBBbmdlbGVzXCJcbnN5czoge3R5cGU6IDEsIGlkOiAzNjk0LCBjb3VudHJ5OiAnVVMnLCBzdW5yaXNlOiAxNjYwMjIzNTAzLCBzdW5zZXQ6IDE2NjAyNzIyODV9XG50aW1lem9uZTogLTI1MjAwXG52aXNpYmlsaXR5OiAxMDAwMFxud2VhdGhlcjogQXJyYXkoMSlcbjA6IHtpZDogODAwLCBtYWluOiAnQ2xlYXInLCBkZXNjcmlwdGlvbjogJ2NsZWFyIHNreScsIGljb246ICcwMWQnfVxubGVuZ3RoOiAxXG5bW1Byb3RvdHlwZV1dOiBBcnJheSgwKVxud2luZDoge3NwZWVkOiAyLjU3LCBkZWc6IDMxMH1cbltbUHJvdG90eXBlXV06IE9iamVjdFxuKi9cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Result.js":
/*!******************************!*\
  !*** ./components/Result.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/home/lynx/projects/is-my-twitter-slow-or-what/components/Result.js",
    _this = undefined;

var SIZE = 3000;

var Result = function Result(_ref) {
  var started = _ref.started,
      ended = _ref.ended;
  var time = (ended - started) / 1000;
  var speed = SIZE / time;
  var result = null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Result;
/* harmony default export */ __webpack_exports__["default"] = (Result);

var _c;

$RefreshReg$(_c, "Result");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Speedometer.js":
/*!***********************************!*\
  !*** ./components/Speedometer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Result */ "./components/Result.js");



var _jsxFileName = "/home/lynx/projects/is-my-twitter-slow-or-what/components/Speedometer.js",
    _this = undefined,
    _s = $RefreshSig$();




var Speedometer = function Speedometer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isChecking = _useState[0],
      setIsChecking = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      imgSrc = _useState2[0],
      setImgSrc = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      startedAt = _useState3[0],
      setStartedAt = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      result = _useState4[0],
      setResult = _useState4[1];

  var run = function run() {
    setStartedAt(null);
    setResult(null); // Картинка, хранящаяся на замедленном сервере твиттера + обход кеширования браузером

    setImgSrc("https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png?nocache=".concat(Math.random()));
    setIsChecking(true);
    setStartedAt(+new Date());
  };

  var onLoad = function onLoad() {
    setIsChecking(false);
    setResult(+new Date());
  };

  var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u043E\u0435\u0445\u0430\u043B\u0438!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      "class": "w-5 h-5 ml-3 fill-current",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M17 8l4 4m0 0l-4 4m4-4H3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 135
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true);

  var img = null;

  if (isChecking) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this);
    img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imgSrc,
      onLoad: onLoad,
      width: 1,
      height: 1,
      style: {
        opacity: 0.1
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }, _this);
  }

  var resultContent = null;
  if (!isChecking && result) resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_2__["default"], {
    started: startedAt,
    ended: result
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 46
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [resultContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50",
      disabled: isChecking,
      onClick: setIsChecking,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), img]
  }, void 0, true);
};

_s(Speedometer, "PSNO0SmoOscXjfTTB0qyAxopfss=");

_c = Speedometer;
/* harmony default export */ __webpack_exports__["default"] = (Speedometer);

var _c;

$RefreshReg$(_c, "Speedometer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3BlZWRvbWV0ZXIuanMiXSwibmFtZXMiOlsiU0laRSIsIlJlc3VsdCIsInN0YXJ0ZWQiLCJlbmRlZCIsInRpbWUiLCJzcGVlZCIsInJlc3VsdCIsIlNwZWVkb21ldGVyIiwidXNlU3RhdGUiLCJpc0NoZWNraW5nIiwic2V0SXNDaGVja2luZyIsImltZ1NyYyIsInNldEltZ1NyYyIsInN0YXJ0ZWRBdCIsInNldFN0YXJ0ZWRBdCIsInNldFJlc3VsdCIsInJ1biIsIk1hdGgiLCJyYW5kb20iLCJEYXRlIiwib25Mb2FkIiwiY29udGVudCIsImltZyIsIm9wYWNpdHkiLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUcsSUFBYjs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUF3QjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDckMsTUFBTUMsSUFBSSxHQUFHLENBQUNELEtBQUssR0FBR0QsT0FBVCxJQUFvQixJQUFqQztBQUNBLE1BQU1HLEtBQUssR0FBR0wsSUFBSSxHQUFHSSxJQUFyQjtBQUVBLE1BQUlFLE1BQU0sR0FBRyxJQUFiO0FBRUEsc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBR0QsQ0FURDs7S0FBTUwsTTtBQVdTQSxxRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDakJDLFVBRGlCO0FBQUEsTUFDTEMsYUFESzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxJQUFELENBRlo7QUFBQSxNQUVqQkcsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUFBLG1CQUdVSixzREFBUSxDQUFDLElBQUQsQ0FIbEI7QUFBQSxNQUdqQkssU0FIaUI7QUFBQSxNQUdOQyxZQUhNOztBQUFBLG1CQUlJTixzREFBUSxDQUFDLEtBQUQsQ0FKWjtBQUFBLE1BSWpCRixNQUppQjtBQUFBLE1BSVRTLFNBSlM7O0FBTXhCLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEJGLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FDLGFBQVMsQ0FBQyxJQUFELENBQVQsQ0FGZ0IsQ0FJaEI7O0FBQ0FILGFBQVMsZ0ZBQXlFSyxJQUFJLENBQUNDLE1BQUwsRUFBekUsRUFBVDtBQUVBUixpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBSSxnQkFBWSxDQUFDLENBQUMsSUFBSUssSUFBSixFQUFGLENBQVo7QUFDRCxHQVREOztBQVdBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJWLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FLLGFBQVMsQ0FBQyxDQUFDLElBQUlJLElBQUosRUFBRixDQUFUO0FBQ0QsR0FIRDs7QUFLQSxNQUFJRSxPQUFPLGdCQUNUO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBTSwyQkFBWDtBQUF1QyxVQUFJLEVBQUMsTUFBNUM7QUFBbUQsWUFBTSxFQUFDLGNBQTFEO0FBQXlFLGFBQU8sRUFBQyxXQUFqRjtBQUE2RixXQUFLLEVBQUMsNEJBQW5HO0FBQUEsNkJBQWdJO0FBQU0sMEJBQWUsT0FBckI7QUFBNkIsMkJBQWdCLE9BQTdDO0FBQXFELHdCQUFhLEdBQWxFO0FBQXNFLFNBQUMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGOztBQU9BLE1BQUlDLEdBQUcsR0FBRyxJQUFWOztBQUVBLE1BQUliLFVBQUosRUFBZ0I7QUFDZFksV0FBTyxnQkFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBSUFDLE9BQUcsZ0JBQUc7QUFBSyxTQUFHLEVBQUVYLE1BQVY7QUFBa0IsWUFBTSxFQUFFUyxNQUExQjtBQUFrQyxXQUFLLEVBQUUsQ0FBekM7QUFBNEMsWUFBTSxFQUFFLENBQXBEO0FBQXVELFdBQUssRUFBRTtBQUFFRyxlQUFPLEVBQUU7QUFBWDtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU47QUFDRDs7QUFFRCxNQUFJQyxhQUFhLEdBQUcsSUFBcEI7QUFFQSxNQUFJLENBQUNmLFVBQUQsSUFBZUgsTUFBbkIsRUFBMkJrQixhQUFhLGdCQUFHLHFFQUFDLCtDQUFEO0FBQVEsV0FBTyxFQUFFWCxTQUFqQjtBQUE0QixTQUFLLEVBQUVQO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaEI7QUFFM0Isc0JBQ0U7QUFBQSxlQUNHa0IsYUFESCxlQUVFO0FBQ0UsZUFBUyxFQUFDLHdPQURaO0FBRUUsY0FBUSxFQUFFZixVQUZaO0FBR0UsYUFBTyxFQUFFQyxhQUhYO0FBQUEsZ0JBS0dXO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBU0dDLEdBVEg7QUFBQSxrQkFERjtBQWFELENBeEREOztHQUFNZixXOztLQUFBQSxXO0FBMERTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZTA4NWUzMDExZjdmMjA3MDhlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU0laRSA9IDMwMDBcblxuY29uc3QgUmVzdWx0ID0gKHsgc3RhcnRlZCwgZW5kZWQgfSkgPT4ge1xuICBjb25zdCB0aW1lID0gKGVuZGVkIC0gc3RhcnRlZCkgLyAxMDAwXG4gIGNvbnN0IHNwZWVkID0gU0laRSAvIHRpbWVcblxuICBsZXQgcmVzdWx0ID0gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPGgzPjwvaDM+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcblxuY29uc3QgU3BlZWRvbWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNraW5nLCBzZXRJc0NoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3RhcnRlZEF0LCBzZXRTdGFydGVkQXRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgIHNldFN0YXJ0ZWRBdChudWxsKVxuICAgIHNldFJlc3VsdChudWxsKVxuXG4gICAgLy8g0JrQsNGA0YLQuNC90LrQsCwg0YXRgNCw0L3Rj9GJ0LDRj9GB0Y8g0L3QsCDQt9Cw0LzQtdC00LvQtdC90L3QvtC8INGB0LXRgNCy0LXRgNC1INGC0LLQuNGC0YLQtdGA0LAgKyDQvtCx0YXQvtC0INC60LXRiNC40YDQvtCy0LDQvdC40Y8g0LHRgNCw0YPQt9C10YDQvtC8XG4gICAgc2V0SW1nU3JjKGBodHRwczovL2Ficy50d2ltZy5jb20vc3RpY2t5L2lsbHVzdHJhdGlvbnMvbG9ocF8xMzAyeDk1NS5wbmc/bm9jYWNoZT0ke01hdGgucmFuZG9tKCl9YClcblxuICAgIHNldElzQ2hlY2tpbmcodHJ1ZSlcbiAgICBzZXRTdGFydGVkQXQoK25ldyBEYXRlKCkpXG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgc2V0SXNDaGVja2luZyhmYWxzZSlcbiAgICBzZXRSZXN1bHQoK25ldyBEYXRlKCkpXG4gIH1cblxuICBsZXQgY29udGVudCA9IChcbiAgICA8PlxuICAgICAgPHNwYW4+0J/QvtC10YXQsNC70LghPC9zcGFuPlxuICAgICAgPHN2ZyBjbGFzcz1cInctNSBoLTUgbWwtMyBmaWxsLWN1cnJlbnRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIj48L3BhdGg+PC9zdmc+XG4gICAgPC8+XG4gIClcblxuICBsZXQgaW1nID0gbnVsbFxuXG4gIGlmIChpc0NoZWNraW5nKSB7XG4gICAgY29udGVudCA9IChcbiAgICAgIDxzcGFuPtCf0YDQvtCy0LXRgNGP0LXQvC4uLjwvc3Bhbj5cbiAgICApXG5cbiAgICBpbWcgPSA8aW1nIHNyYz17aW1nU3JjfSBvbkxvYWQ9e29uTG9hZH0gd2lkdGg9ezF9IGhlaWdodD17MX0gc3R5bGU9e3sgb3BhY2l0eTogMC4xIH19IC8+XG4gIH1cblxuICBsZXQgcmVzdWx0Q29udGVudCA9IG51bGxcblxuICBpZiAoIWlzQ2hlY2tpbmcgJiYgcmVzdWx0KSByZXN1bHRDb250ZW50ID0gPFJlc3VsdCBzdGFydGVkPXtzdGFydGVkQXR9IGVuZGVkPXtyZXN1bHR9IC8+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Jlc3VsdENvbnRlbnR9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBoLTEyIHB4LTYgdGV4dC1sZyB0ZXh0LXB1cnBsZS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIGJnLXB1cnBsZS02MDAgaG92ZXI6YmctcHVycGxlLTcwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNjAwIGZvY3VzOnJpbmctb3BhY2l0eS01MCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgZGlzYWJsZWQ9e2lzQ2hlY2tpbmd9XG4gICAgICAgIG9uQ2xpY2s9e3NldElzQ2hlY2tpbmd9XG4gICAgICA+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aW1nfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWRvbWV0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=
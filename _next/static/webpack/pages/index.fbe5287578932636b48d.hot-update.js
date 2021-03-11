webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _home_lynx_projects_is_my_twitter_slow_or_what_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ "./components/Result.js");
/* harmony import */ var _TestImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestImg */ "./components/TestImg.js");




var _jsxFileName = "/home/lynx/projects/is-my-twitter-slow-or-what/components/Speedometer.js",
    _this = undefined,
    _s = $RefreshSig$();





var Speedometer = function Speedometer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isChecking = _useState[0],
      setIsChecking = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Math.random()),
      key = _useState2[0],
      setKey = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      testResult = _useState3[0],
      setTestResult = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      controlResult = _useState4[0],
      setControlResult = _useState4[1];

  var _useStae = useStae(false),
      _useStae2 = Object(_home_lynx_projects_is_my_twitter_slow_or_what_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useStae, 2),
      controlTacoResult = _useStae2[0],
      setControlTacoResult = _useStae2[1];

  var done = testResult && controlResult && controlTacoResult;

  var run = function run() {
    setTestResult(null);
    setControlResult(null);
    setControlTacoResult(null);
    setIsChecking(true);
  };

  var onLoad = function onLoad(type, result) {
    switch (type) {
      case 'test':
        setTestResult(result);
        setKey(Math.random());
        break;

      case 'control':
        setControlResult(result);
        setKey(Math.random());
        break;

      case 'control-taco':
        setControlTacoResult(result);
        setKey(Math.random());
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (done && isChecking) setIsChecking(false);
  }, [isChecking, done]);

  var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u043E\u0435\u0445\u0430\u043B\u0438!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
      className: "w-5 h-5 ml-3 fill-current",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M17 8l4 4m0 0l-4 4m4-4H3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 139
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true);

  var img = null;

  if (isChecking) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this);

    if (!testResult) {
      img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "test",
          src: "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
          onLoad: onLoad
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this);
    } else if (!controlResult) {
      img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "control",
          src: "https://imgtest-nine.vercel.app/lohp_1302x955.png",
          onLoad: onLoad
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this);
    } else if (!controlTacoResult) {
      img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          type: "control-taco",
          src: "https://t.co.test.lynx.pink/lohp_1302x955.png",
          onLoad: onLoad
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this);
    }
  }

  var resultContent = null;

  if (!isChecking && done) {
    resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_3__["default"], {
      test: testResult,
      control: controlResult,
      controlTaco: controlTacoResult
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }, _this);
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [resultContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50",
      disabled: isChecking,
      onClick: run,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), img]
  }, void 0, true);
};

_s(Speedometer, "n5QxL6EGAa+Kd9IzlpP8gyBmKRk=", true);

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIl0sIm5hbWVzIjpbIlNwZWVkb21ldGVyIiwidXNlU3RhdGUiLCJpc0NoZWNraW5nIiwic2V0SXNDaGVja2luZyIsIk1hdGgiLCJyYW5kb20iLCJrZXkiLCJzZXRLZXkiLCJ0ZXN0UmVzdWx0Iiwic2V0VGVzdFJlc3VsdCIsImNvbnRyb2xSZXN1bHQiLCJzZXRDb250cm9sUmVzdWx0IiwidXNlU3RhZSIsImNvbnRyb2xUYWNvUmVzdWx0Iiwic2V0Q29udHJvbFRhY29SZXN1bHQiLCJkb25lIiwicnVuIiwib25Mb2FkIiwidHlwZSIsInJlc3VsdCIsInVzZUVmZmVjdCIsImNvbnRlbnQiLCJpbWciLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDWTtBQUNZO0FBQ3RCO0FBQzFEO0FBQ2YsU0FBUyx5RkFBYyxTQUFTLCtGQUFvQixZQUFZLHFHQUEwQixZQUFZLDBGQUFlO0FBQ3JILEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUEyRTtBQUM1RDtBQUNmO0FBQ0Esb0NBQW9DLDJGQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsMkZBQWdCO0FBQ3RHLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmJlNTI4NzU3ODkzMjYzNmI0OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcbmltcG9ydCBUZXN0SW1nIGZyb20gJy4vVGVzdEltZyc7XG5cbmNvbnN0IFNwZWVkb21ldGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNDaGVja2luZywgc2V0SXNDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkpXG5cbiAgY29uc3QgW3Rlc3RSZXN1bHQsIHNldFRlc3RSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb250cm9sUmVzdWx0LCBzZXRDb250cm9sUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29udHJvbFRhY29SZXN1bHQsIHNldENvbnRyb2xUYWNvUmVzdWx0XSA9IHVzZVN0YWUoZmFsc2UpXG4gIGNvbnN0IGRvbmUgPSB0ZXN0UmVzdWx0ICYmIGNvbnRyb2xSZXN1bHQgJiYgY29udHJvbFRhY29SZXN1bHRcbiAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgIHNldFRlc3RSZXN1bHQobnVsbClcbiAgICBzZXRDb250cm9sUmVzdWx0KG51bGwpXG4gICAgc2V0Q29udHJvbFRhY29SZXN1bHQobnVsbClcblxuICAgIHNldElzQ2hlY2tpbmcodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICh0eXBlLCByZXN1bHQpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3Rlc3QnOlxuICAgICAgICBzZXRUZXN0UmVzdWx0KHJlc3VsdClcbiAgICAgICAgc2V0S2V5KE1hdGgucmFuZG9tKCkpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb250cm9sJzpcbiAgICAgICAgc2V0Q29udHJvbFJlc3VsdChyZXN1bHQpXG4gICAgICAgIHNldEtleShNYXRoLnJhbmRvbSgpKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29udHJvbC10YWNvJzpcbiAgICAgICAgc2V0Q29udHJvbFRhY29SZXN1bHQocmVzdWx0KVxuICAgICAgICBzZXRLZXkoTWF0aC5yYW5kb20oKSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb25lICYmIGlzQ2hlY2tpbmcpIHNldElzQ2hlY2tpbmcoZmFsc2UpXG4gIH0sIFtpc0NoZWNraW5nLCBkb25lXSlcblxuICBsZXQgY29udGVudCA9IChcbiAgICA8PlxuICAgICAgPHNwYW4+0J/QvtC10YXQsNC70LghPC9zcGFuPlxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IG1sLTMgZmlsbC1jdXJyZW50XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvPlxuICApXG5cbiAgbGV0IGltZyA9IG51bGxcblxuICBpZiAoaXNDaGVja2luZykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8c3Bhbj7Qn9GA0L7QstC10YDRj9C10LwuLi48L3NwYW4+XG4gICAgKVxuXG4gICAgaWYgKCF0ZXN0UmVzdWx0KSB7XG4gICAgICBpbWcgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgICB0eXBlPVwidGVzdFwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2Ficy50d2ltZy5jb20vc3RpY2t5L2lsbHVzdHJhdGlvbnMvbG9ocF8xMzAyeDk1NS5wbmdcIlxuICAgICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICghY29udHJvbFJlc3VsdCkge1xuICAgICAgaW1nID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8VGVzdEltZ1xuICAgICAgICAgICAgdHlwZT1cImNvbnRyb2xcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWd0ZXN0LW5pbmUudmVyY2VsLmFwcC9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKCFjb250cm9sVGFjb1Jlc3VsdCkge1xuICAgICAgaW1nID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8VGVzdEltZ1xuICAgICAgICAgICAgdHlwZT1cImNvbnRyb2wtdGFjb1wiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3QuY28udGVzdC5seW54LnBpbmsvbG9ocF8xMzAyeDk1NS5wbmdcIlxuICAgICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IHJlc3VsdENvbnRlbnQgPSBudWxsXG5cbiAgaWYgKCFpc0NoZWNraW5nICYmIGRvbmUpIHtcbiAgICByZXN1bHRDb250ZW50ID0gPFJlc3VsdCB0ZXN0PXt0ZXN0UmVzdWx0fSBjb250cm9sPXtjb250cm9sUmVzdWx0fSBjb250cm9sVGFjbz17Y29udHJvbFRhY29SZXN1bHR9IC8+XG4gICAgY29udGVudCA9IDxzcGFuPtCf0YDQvtCy0LXRgNC40YLRjCDQtdGJ0LUg0YDQsNC3PC9zcGFuPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Jlc3VsdENvbnRlbnR9XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBoLTEyIHB4LTYgdGV4dC1sZyB0ZXh0LXB1cnBsZS0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMTUwIGJnLXB1cnBsZS02MDAgaG92ZXI6YmctcHVycGxlLTcwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wdXJwbGUtNjAwIGZvY3VzOnJpbmctb3BhY2l0eS01MCBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgZGlzYWJsZWQ9e2lzQ2hlY2tpbmd9XG4gICAgICAgIG9uQ2xpY2s9e3J1bn1cbiAgICAgID5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtpbWd9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlZWRvbWV0ZXJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=
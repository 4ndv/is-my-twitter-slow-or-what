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
  var test = _ref.test,
      control = _ref.control,
      controlTaco = _ref.controlTaco;
  var testTime = test / 1000;
  var controlTime = control / 1000;
  var controlTacoTime = controlTaco / 1000;
  var testSpeed = SIZE / test / 1000;
  var controlSpeed = SIZE / control / 1000;
  var controlTacoSpeed = SIZE / controlTaco / 1000;
  var result = null;

  if (testSpeed < 600 && controlSpeed > 600) {
    result = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
      children: "\u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 14
    }, _this);
  } else if (controlSpeed < 600) {
    result = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
      children: "\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 14
    }, _this);
  } else {
    result = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
      children: "\u043D\u0435 \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 14
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["\u2248 ", testSpeed.toFixed(2), " kbps, ", Math.round(testTime), " \u0441\u0435\u043A\u0443\u043D\u0434"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0442\u0432\u0438\u0442\u0442\u0435\u0440 \u0443 \u0432\u0430\u0441: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 39
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C 1 (\u044D\u0442\u0430 \u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430): ", controlSpeed.toFixed(2), " kbps, ", Math.round(controlTime), " \u0441\u0435\u043A\u0443\u043D\u0434"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C 2 (\u044D\u0442\u0430 \u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0435\u0441\u0442\u044C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "t.co"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 80
      }, _this), "): ", controlTacoSpeed.toFixed(2), " kbps, ", Math.round(controlTacoTime), " \u0441\u0435\u043A\u0443\u043D\u0434"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHQuanMiXSwibmFtZXMiOlsiU0laRSIsIlJlc3VsdCIsInRlc3QiLCJjb250cm9sIiwiY29udHJvbFRhY28iLCJ0ZXN0VGltZSIsImNvbnRyb2xUaW1lIiwiY29udHJvbFRhY29UaW1lIiwidGVzdFNwZWVkIiwiY29udHJvbFNwZWVkIiwiY29udHJvbFRhY29TcGVlZCIsInJlc3VsdCIsInRvRml4ZWQiLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUcsSUFBYjs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFvQztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsT0FBMkIsUUFBM0JBLE9BQTJCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNqRCxNQUFNQyxRQUFRLEdBQUdILElBQUksR0FBRyxJQUF4QjtBQUNBLE1BQU1JLFdBQVcsR0FBR0gsT0FBTyxHQUFHLElBQTlCO0FBQ0EsTUFBTUksZUFBZSxHQUFHSCxXQUFXLEdBQUcsSUFBdEM7QUFFQSxNQUFNSSxTQUFTLEdBQUdSLElBQUksR0FBR0UsSUFBUCxHQUFjLElBQWhDO0FBQ0EsTUFBTU8sWUFBWSxHQUFHVCxJQUFJLEdBQUdHLE9BQVAsR0FBaUIsSUFBdEM7QUFDQSxNQUFNTyxnQkFBZ0IsR0FBR1YsSUFBSSxHQUFHSSxXQUFQLEdBQXFCLElBQTlDO0FBRUEsTUFBSU8sTUFBTSxHQUFHLElBQWI7O0FBRUEsTUFBSUgsU0FBUyxHQUFHLEdBQVosSUFBbUJDLFlBQVksR0FBRyxHQUF0QyxFQUEyQztBQUN6Q0UsVUFBTSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFUO0FBQ0QsR0FGRCxNQUVPLElBQUlGLFlBQVksR0FBRyxHQUFuQixFQUF3QjtBQUM3QkUsVUFBTSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFUO0FBQ0QsR0FGTSxNQUVBO0FBQ0xBLFVBQU0sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw0QkFBYUgsU0FBUyxDQUFDSSxPQUFWLENBQWtCLENBQWxCLENBQWIsYUFBMENDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxRQUFYLENBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSw2S0FBZ0M7QUFBQSxrQkFBSU07QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSx5UEFBb0RGLFlBQVksQ0FBQ0csT0FBYixDQUFxQixDQUFyQixDQUFwRCxhQUFvRkMsSUFBSSxDQUFDQyxLQUFMLENBQVdSLFdBQVgsQ0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRTtBQUFBLDJYQUF5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6RSxTQUE4RkksZ0JBQWdCLENBQUNFLE9BQWpCLENBQXlCLENBQXpCLENBQTlGLGFBQWtJQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsZUFBWCxDQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLGtCQURGO0FBUUQsQ0EzQkQ7O0tBQU1OLE07QUE2QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkxMzk0NWIwN2FjZDhmYjc2OGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTSVpFID0gMzAwMFxuXG5jb25zdCBSZXN1bHQgPSAoeyB0ZXN0LCBjb250cm9sLCBjb250cm9sVGFjbyB9KSA9PiB7XG4gIGNvbnN0IHRlc3RUaW1lID0gdGVzdCAvIDEwMDBcbiAgY29uc3QgY29udHJvbFRpbWUgPSBjb250cm9sIC8gMTAwMFxuICBjb25zdCBjb250cm9sVGFjb1RpbWUgPSBjb250cm9sVGFjbyAvIDEwMDBcblxuICBjb25zdCB0ZXN0U3BlZWQgPSBTSVpFIC8gdGVzdCAvIDEwMDBcbiAgY29uc3QgY29udHJvbFNwZWVkID0gU0laRSAvIGNvbnRyb2wgLyAxMDAwXG4gIGNvbnN0IGNvbnRyb2xUYWNvU3BlZWQgPSBTSVpFIC8gY29udHJvbFRhY28gLyAxMDAwXG5cbiAgbGV0IHJlc3VsdCA9IG51bGxcblxuICBpZiAodGVzdFNwZWVkIDwgNjAwICYmIGNvbnRyb2xTcGVlZCA+IDYwMCkge1xuICAgIHJlc3VsdCA9IDxiPtC30LDQvNC10LTQu9C10L08L2I+XG4gIH0gZWxzZSBpZiAoY29udHJvbFNwZWVkIDwgNjAwKSB7XG4gICAgcmVzdWx0ID0gPGI+0LLQvtC30LzQvtC20L3QviDQt9Cw0LzQtdC00LvQtdC9PC9iPlxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IDxiPtC90LUg0LfQsNC80LXQtNC70LXQvTwvYj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMz4mIzg3NzY7IHt0ZXN0U3BlZWQudG9GaXhlZCgyKX0ga2Jwcywge01hdGgucm91bmQodGVzdFRpbWUpfSDRgdC10LrRg9C90LQ8L2gzPlxuICAgICAgPHA+0KHQutC+0YDQtdC1INCy0YHQtdCz0L4sINGC0LLQuNGC0YLQtdGAINGDINCy0LDRgTogPGI+e3Jlc3VsdH08L2I+PC9wPlxuICAgICAgPHA+0JrQvtC90YLRgNC+0LvRjCAxICjRjdGC0LAg0LbQtSDQutCw0YDRgtC40L3QutCwINGBINC00YDRg9Cz0L7Qs9C+INGB0LXRgNCy0LXRgNCwKToge2NvbnRyb2xTcGVlZC50b0ZpeGVkKDIpfSBrYnBzLCB7TWF0aC5yb3VuZChjb250cm9sVGltZSl9INGB0LXQutGD0L3QtDwvcD5cbiAgICAgIDxwPtCa0L7QvdGC0YDQvtC70YwgMiAo0Y3RgtCwINC20LUg0LrQsNGA0YLQuNC90LrQsCDRgSDQtNGA0YPQs9C+0LPQviDRgdC10YDQstC10YDQsCwg0LIg0LDQtNGA0LXRgdC1INC60L7RgtC+0YDQvtCz0L4g0LXRgdGC0YwgPGNvZGU+dC5jbzwvY29kZT4pOiB7Y29udHJvbFRhY29TcGVlZC50b0ZpeGVkKDIpfSBrYnBzLCB7TWF0aC5yb3VuZChjb250cm9sVGFjb1RpbWUpfSDRgdC10LrRg9C90LQ8L3A+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0XG4iXSwic291cmNlUm9vdCI6IiJ9
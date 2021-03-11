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
  var testSpeed = SIZE / test * 1000;
  var controlSpeed = SIZE / control * 1000;
  var controlTacoSpeed = SIZE / controlTaco * 1000;
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
      children: "\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D (\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F < 600 kpbs)"
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

  var logParams = new URLSearchParams({
    test: testSpeed,
    control: controlSpeed,
    controlTaco: controlTacoSpeed
  });
  var logUrl = "https://imtsow-logs.vercel.app/api/log?".concat(logParams.toString());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["\u2248 ", testSpeed.toFixed(2), " kbps, ", Math.round(testTime), " \u0441\u0435\u043A\u0443\u043D\u0434(-\u0430)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0442\u0432\u0438\u0442\u0442\u0435\u0440 \u0443 \u0432\u0430\u0441: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 39
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C 1 (\u044D\u0442\u0430 \u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430): ", controlSpeed.toFixed(2), " kbps, ", Math.round(controlTime), " \u0441\u0435\u043A\u0443\u043D\u0434(-\u0430)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C 2 (\u044D\u0442\u0430 \u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0435\u0441\u0442\u044C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "t.co"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 80
      }, _this), "): ", controlTacoSpeed.toFixed(2), " kbps, ", Math.round(controlTacoTime), " \u0441\u0435\u043A\u0443\u043D\u0434(-\u0430)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: logUrl,
      width: 1,
      height: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHQuanMiXSwibmFtZXMiOlsiU0laRSIsIlJlc3VsdCIsInRlc3QiLCJjb250cm9sIiwiY29udHJvbFRhY28iLCJ0ZXN0VGltZSIsImNvbnRyb2xUaW1lIiwiY29udHJvbFRhY29UaW1lIiwidGVzdFNwZWVkIiwiY29udHJvbFNwZWVkIiwiY29udHJvbFRhY29TcGVlZCIsInJlc3VsdCIsImxvZ1BhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvZ1VybCIsInRvU3RyaW5nIiwidG9GaXhlZCIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBRyxJQUFiOztBQUVBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQW9DO0FBQUEsTUFBakNDLElBQWlDLFFBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ2pELE1BQU1DLFFBQVEsR0FBR0gsSUFBSSxHQUFHLElBQXhCO0FBQ0EsTUFBTUksV0FBVyxHQUFHSCxPQUFPLEdBQUcsSUFBOUI7QUFDQSxNQUFNSSxlQUFlLEdBQUdILFdBQVcsR0FBRyxJQUF0QztBQUVBLE1BQU1JLFNBQVMsR0FBR1IsSUFBSSxHQUFHRSxJQUFQLEdBQWMsSUFBaEM7QUFDQSxNQUFNTyxZQUFZLEdBQUdULElBQUksR0FBR0csT0FBUCxHQUFpQixJQUF0QztBQUNBLE1BQU1PLGdCQUFnQixHQUFHVixJQUFJLEdBQUdJLFdBQVAsR0FBcUIsSUFBOUM7QUFFQSxNQUFJTyxNQUFNLEdBQUcsSUFBYjs7QUFFQSxNQUFJSCxTQUFTLEdBQUcsR0FBWixJQUFtQkMsWUFBWSxHQUFHLEdBQXRDLEVBQTJDO0FBQ3pDRSxVQUFNLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVQ7QUFDRCxHQUZELE1BRU8sSUFBSUYsWUFBWSxHQUFHLEdBQW5CLEVBQXdCO0FBQzdCRSxVQUFNLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVQ7QUFDRCxHQUZNLE1BRUE7QUFDTEEsVUFBTSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFUO0FBQ0Q7O0FBRUQsTUFBTUMsU0FBUyxHQUFHLElBQUlDLGVBQUosQ0FBb0I7QUFBRVgsUUFBSSxFQUFFTSxTQUFSO0FBQW1CTCxXQUFPLEVBQUVNLFlBQTVCO0FBQTBDTCxlQUFXLEVBQUVNO0FBQXZELEdBQXBCLENBQWxCO0FBRUEsTUFBTUksTUFBTSxvREFBNkNGLFNBQVMsQ0FBQ0csUUFBVixFQUE3QyxDQUFaO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDRCQUFhUCxTQUFTLENBQUNRLE9BQVYsQ0FBa0IsQ0FBbEIsQ0FBYixhQUEwQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdiLFFBQVgsQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDZLQUFnQztBQUFBLGtCQUFJTTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLHlQQUFvREYsWUFBWSxDQUFDTyxPQUFiLENBQXFCLENBQXJCLENBQXBELGFBQW9GQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osV0FBWCxDQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUEsMlhBQXlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXpFLFNBQThGSSxnQkFBZ0IsQ0FBQ00sT0FBakIsQ0FBeUIsQ0FBekIsQ0FBOUYsYUFBa0lDLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxlQUFYLENBQWxJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0U7QUFBSyxTQUFHLEVBQUVPLE1BQVY7QUFBa0IsV0FBSyxFQUFFLENBQXpCO0FBQTRCLFlBQU0sRUFBRTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFERjtBQVNELENBaENEOztLQUFNYixNO0FBa0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZmUwZWZkYTc3MzhiMWNlYTIzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU0laRSA9IDMwMDBcblxuY29uc3QgUmVzdWx0ID0gKHsgdGVzdCwgY29udHJvbCwgY29udHJvbFRhY28gfSkgPT4ge1xuICBjb25zdCB0ZXN0VGltZSA9IHRlc3QgLyAxMDAwXG4gIGNvbnN0IGNvbnRyb2xUaW1lID0gY29udHJvbCAvIDEwMDBcbiAgY29uc3QgY29udHJvbFRhY29UaW1lID0gY29udHJvbFRhY28gLyAxMDAwXG5cbiAgY29uc3QgdGVzdFNwZWVkID0gU0laRSAvIHRlc3QgKiAxMDAwXG4gIGNvbnN0IGNvbnRyb2xTcGVlZCA9IFNJWkUgLyBjb250cm9sICogMTAwMFxuICBjb25zdCBjb250cm9sVGFjb1NwZWVkID0gU0laRSAvIGNvbnRyb2xUYWNvICogMTAwMFxuXG4gIGxldCByZXN1bHQgPSBudWxsXG5cbiAgaWYgKHRlc3RTcGVlZCA8IDYwMCAmJiBjb250cm9sU3BlZWQgPiA2MDApIHtcbiAgICByZXN1bHQgPSA8Yj7Qt9Cw0LzQtdC00LvQtdC9PC9iPlxuICB9IGVsc2UgaWYgKGNvbnRyb2xTcGVlZCA8IDYwMCkge1xuICAgIHJlc3VsdCA9IDxiPtCy0L7Qt9C80L7QttC90L4g0LfQsNC80LXQtNC70LXQvSAo0YHQutC+0YDQvtGB0YLRjCDQutC+0L3RgtGA0L7Qu9GPICZsdDsgNjAwIGtwYnMpPC9iPlxuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IDxiPtC90LUg0LfQsNC80LXQtNC70LXQvTwvYj5cbiAgfVxuXG4gIGNvbnN0IGxvZ1BhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyB0ZXN0OiB0ZXN0U3BlZWQsIGNvbnRyb2w6IGNvbnRyb2xTcGVlZCwgY29udHJvbFRhY286IGNvbnRyb2xUYWNvU3BlZWQgfSlcblxuICBjb25zdCBsb2dVcmwgPSBgaHR0cHM6Ly9pbXRzb3ctbG9ncy52ZXJjZWwuYXBwL2FwaS9sb2c/JHtsb2dQYXJhbXMudG9TdHJpbmcoKX1gXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzPiYjODc3Njsge3Rlc3RTcGVlZC50b0ZpeGVkKDIpfSBrYnBzLCB7TWF0aC5yb3VuZCh0ZXN0VGltZSl9INGB0LXQutGD0L3QtCgt0LApPC9oMz5cbiAgICAgIDxwPtCh0LrQvtGA0LXQtSDQstGB0LXQs9C+LCDRgtCy0LjRgtGC0LXRgCDRgyDQstCw0YE6IDxiPntyZXN1bHR9PC9iPjwvcD5cbiAgICAgIDxwPtCa0L7QvdGC0YDQvtC70YwgMSAo0Y3RgtCwINC20LUg0LrQsNGA0YLQuNC90LrQsCDRgSDQtNGA0YPQs9C+0LPQviDRgdC10YDQstC10YDQsCk6IHtjb250cm9sU3BlZWQudG9GaXhlZCgyKX0ga2Jwcywge01hdGgucm91bmQoY29udHJvbFRpbWUpfSDRgdC10LrRg9C90LQoLdCwKTwvcD5cbiAgICAgIDxwPtCa0L7QvdGC0YDQvtC70YwgMiAo0Y3RgtCwINC20LUg0LrQsNGA0YLQuNC90LrQsCDRgSDQtNGA0YPQs9C+0LPQviDRgdC10YDQstC10YDQsCwg0LIg0LDQtNGA0LXRgdC1INC60L7RgtC+0YDQvtCz0L4g0LXRgdGC0YwgPGNvZGU+dC5jbzwvY29kZT4pOiB7Y29udHJvbFRhY29TcGVlZC50b0ZpeGVkKDIpfSBrYnBzLCB7TWF0aC5yb3VuZChjb250cm9sVGFjb1RpbWUpfSDRgdC10LrRg9C90LQoLdCwKTwvcD5cbiAgICAgIDxpbWcgc3JjPXtsb2dVcmx9IHdpZHRoPXsxfSBoZWlnaHQ9ezF9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0XG4iXSwic291cmNlUm9vdCI6IiJ9
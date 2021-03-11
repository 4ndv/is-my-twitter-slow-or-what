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
  var ad = null;

  if (testSpeed < 600 && controlSpeed > 600) {
    result = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
      children: "\u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 14
    }, _this);
    ad = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("blockquote", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0415\u0441\u043B\u0438 \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043A\u0430\u043A \u0440\u0430\u043D\u044C\u0448\u0435 \u2014 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          target: "_blank",
          href: "https://my.redshieldvpn.com/?r=TWITTER",
          children: "Red Shield VPN"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 55
        }, _this), " \u0432\u0441\u0435\u0433\u043E \u0437\u0430 $39 \u043D\u0430 \u0433\u043E\u0434 \u0441 \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u043E\u043C TWITTER.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: "- \u043D\u0430 \u043F\u0440\u0430\u0432\u0430\u0445 \u0440\u0435\u043A\u043B\u0430\u043C\u044B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this);
  } else if (controlSpeed < 600) {
    result = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
      children: "\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D (\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F < 600 kpbs)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 14
    }, _this);
  } else {
    result = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
      children: "\u043D\u0435 \u0437\u0430\u043C\u0435\u0434\u043B\u0435\u043D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 14
    }, _this);
  }

  var logParams = new URLSearchParams({
    test: testSpeed.toFixed(2),
    control: controlSpeed.toFixed(2),
    controlTaco: controlTacoSpeed.toFixed(2),
    v: 4
  });
  var logUrl = "https://imtsow-new.lynx.pink/log.png?".concat(logParams.toString());
  var darkkLogUrl = "https://darkk.net.ru/garbage/is-my-twitter-slow-or-what/log?".concat(logParams.toString());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["\u2248 ", testSpeed.toFixed(2), " kbps, ", Math.round(testTime), " \u0441\u0435\u043A\u0443\u043D\u0434(-\u0430)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u0421\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0442\u0432\u0438\u0442\u0442\u0435\u0440 \u0443 \u0432\u0430\u0441: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 39
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), ad, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C 1 (\u044D\u0442\u0430 \u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430): ", controlSpeed.toFixed(2), " kbps, ", Math.round(controlTime), " \u0441\u0435\u043A\u0443\u043D\u0434(-\u0430)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C 2 (\u044D\u0442\u0430 \u0436\u0435 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0441 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0435\u0441\u0442\u044C ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        children: "t.co"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 80
      }, _this), "): ", controlTacoSpeed.toFixed(2), " kbps, ", Math.round(controlTacoTime), " \u0441\u0435\u043A\u0443\u043D\u0434(-\u0430)"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: logUrl,
      width: 1,
      height: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: darkkLogUrl,
      width: 1,
      height: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHQuanMiXSwibmFtZXMiOlsiU0laRSIsIlJlc3VsdCIsInRlc3QiLCJjb250cm9sIiwiY29udHJvbFRhY28iLCJ0ZXN0VGltZSIsImNvbnRyb2xUaW1lIiwiY29udHJvbFRhY29UaW1lIiwidGVzdFNwZWVkIiwiY29udHJvbFNwZWVkIiwiY29udHJvbFRhY29TcGVlZCIsInJlc3VsdCIsImFkIiwibG9nUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9GaXhlZCIsInYiLCJsb2dVcmwiLCJ0b1N0cmluZyIsImRhcmtrTG9nVXJsIiwiTWF0aCIsInJvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLElBQWI7O0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBb0M7QUFBQSxNQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLE9BQTJCLFFBQTNCQSxPQUEyQjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7QUFDakQsTUFBTUMsUUFBUSxHQUFHSCxJQUFJLEdBQUcsSUFBeEI7QUFDQSxNQUFNSSxXQUFXLEdBQUdILE9BQU8sR0FBRyxJQUE5QjtBQUNBLE1BQU1JLGVBQWUsR0FBR0gsV0FBVyxHQUFHLElBQXRDO0FBRUEsTUFBTUksU0FBUyxHQUFHUixJQUFJLEdBQUdFLElBQVAsR0FBYyxJQUFoQztBQUNBLE1BQU1PLFlBQVksR0FBR1QsSUFBSSxHQUFHRyxPQUFQLEdBQWlCLElBQXRDO0FBQ0EsTUFBTU8sZ0JBQWdCLEdBQUdWLElBQUksR0FBR0ksV0FBUCxHQUFxQixJQUE5QztBQUVBLE1BQUlPLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLElBQVQ7O0FBRUEsTUFBSUosU0FBUyxHQUFHLEdBQVosSUFBbUJDLFlBQVksR0FBRyxHQUF0QyxFQUEyQztBQUN6Q0UsVUFBTSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFUO0FBQ0FDLE1BQUUsZ0JBQ0E7QUFBQSw2QkFDRTtBQUFBLHlRQUM4QztBQUFHLGdCQUFNLEVBQUMsUUFBVjtBQUFtQixjQUFJLEVBQUMsd0NBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUQ5QyxnTEFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBU0QsR0FYRCxNQVdPLElBQUlILFlBQVksR0FBRyxHQUFuQixFQUF3QjtBQUM3QkUsVUFBTSxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFUO0FBQ0QsR0FGTSxNQUVBO0FBQ0xBLFVBQU0sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVDtBQUNEOztBQUVELE1BQU1FLFNBQVMsR0FBRyxJQUFJQyxlQUFKLENBQW9CO0FBQUVaLFFBQUksRUFBRU0sU0FBUyxDQUFDTyxPQUFWLENBQWtCLENBQWxCLENBQVI7QUFBOEJaLFdBQU8sRUFBRU0sWUFBWSxDQUFDTSxPQUFiLENBQXFCLENBQXJCLENBQXZDO0FBQWdFWCxlQUFXLEVBQUVNLGdCQUFnQixDQUFDSyxPQUFqQixDQUF5QixDQUF6QixDQUE3RTtBQUEwR0MsS0FBQyxFQUFFO0FBQTdHLEdBQXBCLENBQWxCO0FBRUEsTUFBTUMsTUFBTSxrREFBMkNKLFNBQVMsQ0FBQ0ssUUFBVixFQUEzQyxDQUFaO0FBQ0EsTUFBTUMsV0FBVyx5RUFBa0VOLFNBQVMsQ0FBQ0ssUUFBVixFQUFsRSxDQUFqQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw0QkFBYVYsU0FBUyxDQUFDTyxPQUFWLENBQWtCLENBQWxCLENBQWIsYUFBMENLLElBQUksQ0FBQ0MsS0FBTCxDQUFXaEIsUUFBWCxDQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsNktBQWdDO0FBQUEsa0JBQUlNO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUdHQyxFQUhILGVBSUU7QUFBQSx5UEFBb0RILFlBQVksQ0FBQ00sT0FBYixDQUFxQixDQUFyQixDQUFwRCxhQUFvRkssSUFBSSxDQUFDQyxLQUFMLENBQVdmLFdBQVgsQ0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFBLDJYQUF5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUF6RSxTQUE4RkksZ0JBQWdCLENBQUNLLE9BQWpCLENBQXlCLENBQXpCLENBQTlGLGFBQWtJSyxJQUFJLENBQUNDLEtBQUwsQ0FBV2QsZUFBWCxDQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRixlQU1FO0FBQUssU0FBRyxFQUFFVSxNQUFWO0FBQWtCLFdBQUssRUFBRSxDQUF6QjtBQUE0QixZQUFNLEVBQUU7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBT0U7QUFBSyxTQUFHLEVBQUVFLFdBQVY7QUFBdUIsV0FBSyxFQUFFLENBQTlCO0FBQWlDLFlBQU0sRUFBRTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQSxrQkFERjtBQVdELENBN0NEOztLQUFNbEIsTTtBQStDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGExZmI4Mzk3ZmY1MzY3MDYyYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNJWkUgPSAzMDAwXG5cbmNvbnN0IFJlc3VsdCA9ICh7IHRlc3QsIGNvbnRyb2wsIGNvbnRyb2xUYWNvIH0pID0+IHtcbiAgY29uc3QgdGVzdFRpbWUgPSB0ZXN0IC8gMTAwMFxuICBjb25zdCBjb250cm9sVGltZSA9IGNvbnRyb2wgLyAxMDAwXG4gIGNvbnN0IGNvbnRyb2xUYWNvVGltZSA9IGNvbnRyb2xUYWNvIC8gMTAwMFxuXG4gIGNvbnN0IHRlc3RTcGVlZCA9IFNJWkUgLyB0ZXN0ICogMTAwMFxuICBjb25zdCBjb250cm9sU3BlZWQgPSBTSVpFIC8gY29udHJvbCAqIDEwMDBcbiAgY29uc3QgY29udHJvbFRhY29TcGVlZCA9IFNJWkUgLyBjb250cm9sVGFjbyAqIDEwMDBcblxuICBsZXQgcmVzdWx0ID0gbnVsbFxuICBsZXQgYWQgPSBudWxsXG5cbiAgaWYgKHRlc3RTcGVlZCA8IDYwMCAmJiBjb250cm9sU3BlZWQgPiA2MDApIHtcbiAgICByZXN1bHQgPSA8Yj7Qt9Cw0LzQtdC00LvQtdC9PC9iPlxuICAgIGFkID0gKFxuICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgIDxwPlxuICAgICAgICAgINCV0YHQu9C4INGF0L7RgtC40YLQtSDQstC10YDQvdGD0YLRjCDQutCw0Log0YDQsNC90YzRiNC1IOKAlCDRg9GB0YLQsNC90L7QstC40YLQtSA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9teS5yZWRzaGllbGR2cG4uY29tLz9yPVRXSVRURVJcIj5SZWQgU2hpZWxkIFZQTjwvYT4g0LLRgdC10LPQviDQt9CwICQzOSDQvdCwINCz0L7QtCDRgSDQv9GA0L7QvNC+0LrQvtC00L7QvCBUV0lUVEVSLlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxpPi0g0L3QsCDQv9GA0LDQstCw0YUg0YDQtdC60LvQsNC80Ys8L2k+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICApXG4gIH0gZWxzZSBpZiAoY29udHJvbFNwZWVkIDwgNjAwKSB7XG4gICAgcmVzdWx0ID0gPGI+0LLQvtC30LzQvtC20L3QviDQt9Cw0LzQtdC00LvQtdC9ICjRgdC60L7RgNC+0YHRgtGMINC60L7QvdGC0YDQvtC70Y8gJmx0OyA2MDAga3Bicyk8L2I+XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gPGI+0L3QtSDQt9Cw0LzQtdC00LvQtdC9PC9iPlxuICB9XG5cbiAgY29uc3QgbG9nUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IHRlc3Q6IHRlc3RTcGVlZC50b0ZpeGVkKDIpLCBjb250cm9sOiBjb250cm9sU3BlZWQudG9GaXhlZCgyKSwgY29udHJvbFRhY286IGNvbnRyb2xUYWNvU3BlZWQudG9GaXhlZCgyKSwgdjogNCB9KVxuXG4gIGNvbnN0IGxvZ1VybCA9IGBodHRwczovL2ltdHNvdy1uZXcubHlueC5waW5rL2xvZy5wbmc/JHtsb2dQYXJhbXMudG9TdHJpbmcoKX1gXG4gIGNvbnN0IGRhcmtrTG9nVXJsID0gYGh0dHBzOi8vZGFya2submV0LnJ1L2dhcmJhZ2UvaXMtbXktdHdpdHRlci1zbG93LW9yLXdoYXQvbG9nPyR7bG9nUGFyYW1zLnRvU3RyaW5nKCl9YFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMz4mIzg3NzY7IHt0ZXN0U3BlZWQudG9GaXhlZCgyKX0ga2Jwcywge01hdGgucm91bmQodGVzdFRpbWUpfSDRgdC10LrRg9C90LQoLdCwKTwvaDM+XG4gICAgICA8cD7QodC60L7RgNC10LUg0LLRgdC10LPQviwg0YLQstC40YLRgtC10YAg0YMg0LLQsNGBOiA8Yj57cmVzdWx0fTwvYj48L3A+XG4gICAgICB7YWR9XG4gICAgICA8cD7QmtC+0L3RgtGA0L7Qu9GMIDEgKNGN0YLQsCDQttC1INC60LDRgNGC0LjQvdC60LAg0YEg0LTRgNGD0LPQvtCz0L4g0YHQtdGA0LLQtdGA0LApOiB7Y29udHJvbFNwZWVkLnRvRml4ZWQoMil9IGticHMsIHtNYXRoLnJvdW5kKGNvbnRyb2xUaW1lKX0g0YHQtdC60YPQvdC0KC3QsCk8L3A+XG4gICAgICA8cD7QmtC+0L3RgtGA0L7Qu9GMIDIgKNGN0YLQsCDQttC1INC60LDRgNGC0LjQvdC60LAg0YEg0LTRgNGD0LPQvtCz0L4g0YHQtdGA0LLQtdGA0LAsINCyINCw0LTRgNC10YHQtSDQutC+0YLQvtGA0L7Qs9C+INC10YHRgtGMIDxjb2RlPnQuY288L2NvZGU+KToge2NvbnRyb2xUYWNvU3BlZWQudG9GaXhlZCgyKX0ga2Jwcywge01hdGgucm91bmQoY29udHJvbFRhY29UaW1lKX0g0YHQtdC60YPQvdC0KC3QsCk8L3A+XG4gICAgICA8aW1nIHNyYz17bG9nVXJsfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSAvPlxuICAgICAgPGltZyBzcmM9e2RhcmtrTG9nVXJsfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Result */ "./components/Result.js");
/* harmony import */ var _TestImg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestImg */ "./components/TestImg.js");



var _jsxFileName = "/home/lynx/projects/is-my-twitter-slow-or-what/components/Speedometer.js",
    _this = undefined,
    _s = $RefreshSig$();





var Speedometer = function Speedometer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isChecking = _useState[0],
      setIsChecking = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      startedAt = _useState2[0],
      setStartedAt = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      testResult = _useState3[0],
      setTestResult = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      controlResult = _useState4[0],
      setControlResult = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      controlTacoResult = _useState5[0],
      setControlTacoResult = _useState5[1];

  var done = testResult && controlResult && controlTacoResult;

  var run = function run() {
    setTestResult(null);
    setControlResult(null);
    setControlTacoResult(null);
    setIsChecking(true);
    setStartedAt(+new Date());
  };

  var onLoad = function onLoad(type, result) {
    switch (type) {
      case 'test':
        setTestResult(result);
        break;

      case 'control':
        setControlResult(result);
        break;

      case 'control-taco':
        setControlTacoResult(result);
        break;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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

  if (isChecking && startedAt) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this);
    img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "test",
        src: "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
        startedAt: startedAt,
        onLoad: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "control",
        src: "https://imgtest-nine.vercel.app/lohp_1302x955.png",
        startedAt: startedAt,
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "control-taco",
        src: "https://t.co.test.lynx.pink/lohp_1302x955.png",
        startedAt: startedAt,
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true);
  }

  var resultContent = null;

  if (!isChecking && done) {
    resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_2__["default"], {
      test: testResult,
      control: controlResult,
      controlTaco: controlTacoResult
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }, _this);
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
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
      lineNumber: 90,
      columnNumber: 7
    }, _this), img]
  }, void 0, true);
};

_s(Speedometer, "9kp0WpzLej6rPwl/n5zbrGJQNRE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJzdGFydGVkQXQiLCJzZXRTdGFydGVkQXQiLCJ0ZXN0UmVzdWx0Iiwic2V0VGVzdFJlc3VsdCIsImNvbnRyb2xSZXN1bHQiLCJzZXRDb250cm9sUmVzdWx0IiwiY29udHJvbFRhY29SZXN1bHQiLCJzZXRDb250cm9sVGFjb1Jlc3VsdCIsImRvbmUiLCJydW4iLCJEYXRlIiwib25Mb2FkIiwidHlwZSIsInJlc3VsdCIsInVzZUVmZmVjdCIsImNvbnRlbnQiLCJpbWciLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNqQkMsVUFEaUI7QUFBQSxNQUNMQyxhQURLOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUVqQkcsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUFBLG1CQUlZSixzREFBUSxDQUFDLEtBQUQsQ0FKcEI7QUFBQSxNQUlqQkssVUFKaUI7QUFBQSxNQUlMQyxhQUpLOztBQUFBLG1CQUtrQk4sc0RBQVEsQ0FBQyxLQUFELENBTDFCO0FBQUEsTUFLakJPLGFBTGlCO0FBQUEsTUFLRkMsZ0JBTEU7O0FBQUEsbUJBTTBCUixzREFBUSxDQUFDLEtBQUQsQ0FObEM7QUFBQSxNQU1qQlMsaUJBTmlCO0FBQUEsTUFNRUMsb0JBTkY7O0FBUXhCLE1BQU1DLElBQUksR0FBR04sVUFBVSxJQUFJRSxhQUFkLElBQStCRSxpQkFBNUM7O0FBRUEsTUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQk4s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R0FUSDtBQUFBLGtCQURGO0FBYUQsQ0EvRkQ7O0dBQU1wQixXOztLQUFBQSxXO0FBaUdTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZTlmYmFiNDQ1MmQ2YzBlYjVlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9SZXN1bHQnO1xuaW1wb3J0IFRlc3RJbWcgZnJvbSAnLi9UZXN0SW1nJztcblxuY29uc3QgU3BlZWRvbWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNraW5nLCBzZXRJc0NoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3N0YXJ0ZWRBdCwgc2V0U3RhcnRlZEF0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFt0ZXN0UmVzdWx0LCBzZXRUZXN0UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRyb2xSZXN1bHQsIHNldENvbnRyb2xSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udHJvbFRhY29SZXN1bHQsIHNldENvbnRyb2xUYWNvUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBkb25lID0gdGVzdFJlc3VsdCAmJiBjb250cm9sUmVzdWx0ICYmIGNvbnRyb2xUYWNvUmVzdWx0O1xuXG4gIGNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICBzZXRUZXN0UmVzdWx0KG51bGwpXG4gICAgc2V0Q29udHJvbFJlc3VsdChudWxsKVxuICAgIHNldENvbnRyb2xUYWNvUmVzdWx0KG51bGwpXG5cbiAgICBzZXRJc0NoZWNraW5nKHRydWUpXG4gICAgc2V0U3RhcnRlZEF0KCtuZXcgRGF0ZSgpKVxuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKHR5cGUsIHJlc3VsdCkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAndGVzdCc6XG4gICAgICAgIHNldFRlc3RSZXN1bHQocmVzdWx0KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29udHJvbCc6XG4gICAgICAgIHNldENvbnRyb2xSZXN1bHQocmVzdWx0KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29udHJvbC10YWNvJzpcbiAgICAgICAgc2V0Q29udHJvbFRhY29SZXN1bHQocmVzdWx0KVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvbmUgJiYgaXNDaGVja2luZykgc2V0SXNDaGVja2luZyhmYWxzZSlcbiAgfSwgW2lzQ2hlY2tpbmcsIGRvbmVdKVxuXG4gIGxldCBjb250ZW50ID0gKFxuICAgIDw+XG4gICAgICA8c3Bhbj7Qn9C+0LXRhdCw0LvQuCE8L3NwYW4+XG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgbWwtMyBmaWxsLWN1cnJlbnRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIj48L3BhdGg+PC9zdmc+XG4gICAgPC8+XG4gIClcblxuICBsZXQgaW1nID0gbnVsbFxuXG4gIGlmIChpc0NoZWNraW5nICYmIHN0YXJ0ZWRBdCkge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8c3Bhbj7Qn9GA0L7QstC10YDRj9C10LwuLi48L3NwYW4+XG4gICAgKVxuXG4gICAgaW1nID0gKFxuICAgICAgPD5cbiAgICAgICAgPFRlc3RJbWdcbiAgICAgICAgICB0eXBlPVwidGVzdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hYnMudHdpbWcuY29tL3N0aWNreS9pbGx1c3RyYXRpb25zL2xvaHBfMTMwMng5NTUucG5nXCJcbiAgICAgICAgICBzdGFydGVkQXQ9e3N0YXJ0ZWRBdH1cbiAgICAgICAgICBvbkxvYWRcbiAgICAgICAgLz5cbiAgICAgICAgPFRlc3RJbWdcbiAgICAgICAgICB0eXBlPVwiY29udHJvbFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWd0ZXN0LW5pbmUudmVyY2VsLmFwcC9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgc3RhcnRlZEF0PXtzdGFydGVkQXR9XG4gICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgdHlwZT1cImNvbnRyb2wtdGFjb1wiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly90LmNvLnRlc3QubHlueC5waW5rL2xvaHBfMTMwMng5NTUucG5nXCJcbiAgICAgICAgICBzdGFydGVkQXQ9e3N0YXJ0ZWRBdH1cbiAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIGxldCByZXN1bHRDb250ZW50ID0gbnVsbFxuXG4gIGlmICghaXNDaGVja2luZyAmJiBkb25lKSB7XG4gICAgcmVzdWx0Q29udGVudCA9IDxSZXN1bHQgdGVzdD17dGVzdFJlc3VsdH0gY29udHJvbD17Y29udHJvbFJlc3VsdH0gY29udHJvbFRhY289e2NvbnRyb2xUYWNvUmVzdWx0fSAvPlxuICAgIGNvbnRlbnQgPSA8c3Bhbj7Qn9GA0L7QstC10YDQuNGC0Ywg0LXRidC1INGA0LDQtzwvc3Bhbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXN1bHRDb250ZW50fVxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBweC02IHRleHQtbGcgdGV4dC1wdXJwbGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgIGRpc2FibGVkPXtpc0NoZWNraW5nfVxuICAgICAgICBvbkNsaWNrPXtydW59XG4gICAgICA+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aW1nfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWRvbWV0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=
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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      testResult = _useState2[0],
      setTestResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      controlResult = _useState3[0],
      setControlResult = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      controlTacoResult = _useState4[0],
      setControlTacoResult = _useState4[1];

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
      lineNumber: 42,
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
        lineNumber: 43,
        columnNumber: 139
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true);

  var img = null;

  if (isChecking && startedAt) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this);
    img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "control",
        src: "https://imgtest-nine.vercel.app/lohp_1302x955.png",
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "control-taco",
        src: "https://t.co.test.lynx.pink/lohp_1302x955.png",
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "test",
        src: "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this);
  }

  var resultContent = null;

  if (!isChecking && done) {
    resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_2__["default"], {
      test: testResult,
      control: controlResult,
      controlTaco: controlTacoResult
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }, _this);
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 85,
      columnNumber: 7
    }, _this), img]
  }, void 0, true);
};

_s(Speedometer, "3MvMq8CkFnwczrz4KVs+JQ1U2KA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJ0ZXN0UmVzdWx0Iiwic2V0VGVzdFJlc3VsdCIsImNvbnRyb2xSZXN1bHQiLCJzZXRDb250cm9sUmVzdWx0IiwiY29udHJvbFRhY29SZXN1bHQiLCJzZXRDb250cm9sVGFjb1Jlc3VsdCIsImRvbmUiLCJydW4iLCJvbkxvYWQiLCJ0eXBlIiwicmVzdWx0IiwidXNlRWZmZWN0IiwiY29udGVudCIsImltZyIsInN0YXJ0ZWRBdCIsInJlc3VsdENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsS0FBRCxDQURwQjtBQUFBLE1BQ2pCQyxVQURpQjtBQUFBLE1BQ0xDLGFBREs7O0FBQUEsbUJBR1lGLHNEQUFRLENBQUMsS0FBRCxDQUhwQjtBQUFBLE1BR2pCRyxVQUhpQjtBQUFBLE1BR0xDLGFBSEs7O0FBQUEsbUJBSWtCSixzREFBUSxDQUFDLEtBQUQsQ0FKMUI7QUFBQSxNQUlqQkssYUFKaUI7QUFBQSxNQUlGQyxnQkFKRTs7QUFBQSxtQkFLMEJOLHNEQUFRLENBQUMsS0FBRCxDQUxsQztBQUFBLE1BS2pCTyxpQkFMaUI7QUFBQSxNQUtFQyxvQkFMRjs7QUFPeEIsTUFBTUMsSUFBSSxHQUFHTixVQUFVLElBQUlFLGFBQWQsSUFBK0JFLGlCQUE1Qzs7QUFFQSxNQUFNRyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2hCTixpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBRSxvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0FFLHdCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFFQU4saUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQU5EOztBQVFBLE1BQU1TLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFrQjtBQUMvQixZQUFRRCxJQUFSO0FBQ0UsV0FBSyxNQUFMO0FBQ0VSLHFCQUFhLENBQUNTLE1BQUQsQ0FBYjtBQUNBOztBQUNGLFdBQUssU0FBTDtBQUNFUCx3QkFBZ0IsQ0FBQ08sTUFBRCxDQUFoQjtBQUNBOztBQUNGLFdBQUssY0FBTDtBQUNFTCw0QkFBb0IsQ0FBQ0ssTUFBRCxDQUFwQjtBQUNBO0FBVEo7QUFXRCxHQVpEOztBQWNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxJQUFJLElBQUlSLFVBQVosRUFBd0JDLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDekIsR0FGUSxFQUVOLENBQUNELFVBQUQsRUFBYVEsSUFBYixDQUZNLENBQVQ7O0FBSUEsTUFBSU0sT0FBTyxnQkFDVDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQywyQkFBZjtBQUEyQyxVQUFJLEVBQUMsTUFBaEQ7QUFBdUQsWUFBTSxFQUFDLGNBQTlEO0FBQTZFLGFBQU8sRUFBQyxXQUFyRjtBQUFpRyxXQUFLLEVBQUMsNEJBQXZHO0FBQUEsNkJBQW9JO0FBQU0scUJBQWEsRUFBQyxPQUFwQjtBQUE0QixzQkFBYyxFQUFDLE9BQTNDO0FBQW1ELG1CQUFXLEVBQUMsR0FBL0Q7QUFBbUUsU0FBQyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7O0FBT0EsTUFBSUMsR0FBRyxHQUFHLElBQVY7O0FBRUEsTUFBSWYsVUFBVSxJQUFJZ0IsU0FBbEIsRUFBNkI7QUFDM0JGLFdBQU8sZ0JBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUlBQyxPQUFHLGdCQUNEO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsV0FBRyxFQUFDLG1EQUZOO0FBR0UsY0FBTSxFQUFFTDtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FLHFFQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLGNBRFA7QUFFRSxXQUFHLEVBQUMsK0NBRk47QUFHRSxjQUFNLEVBQUVBO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBV0UscUVBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUcsRUFBQyw4REFGTjtBQUdFLGNBQU0sRUFBRUE7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFtQkQ7O0FBRUQsTUFBSU8sYUFBYSxHQUFHLElBQXBCOztBQUVBLE1BQUksQ0FBQ2pCLFVBQUQsSUFBZVEsSUFBbkIsRUFBeUI7QUFDdkJTLGlCQUFhLGdCQUFHLHFFQUFDLCtDQUFEO0FBQVEsVUFBSSxFQUFFZixVQUFkO0FBQTBCLGFBQU8sRUFBRUUsYUFBbkM7QUFBa0QsaUJBQVcsRUFBRUU7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFoQjtBQUNBUSxXQUFPLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVY7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGVBQ0dHLGFBREgsZUFFRTtBQUNFLGVBQVMsRUFBQyx3T0FEWjtBQUVFLGNBQVEsRUFBRWpCLFVBRlo7QUFHRSxhQUFPLEVBQUVTLEdBSFg7QUFBQSxnQkFLR0s7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFTR0MsR0FUSDtBQUFBLGtCQURGO0FBYUQsQ0ExRkQ7O0dBQU1qQixXOztLQUFBQSxXO0FBNEZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YzkzZWVlMmI1NGZmNWU2ZTdhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9SZXN1bHQnO1xuaW1wb3J0IFRlc3RJbWcgZnJvbSAnLi9UZXN0SW1nJztcblxuY29uc3QgU3BlZWRvbWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNraW5nLCBzZXRJc0NoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbdGVzdFJlc3VsdCwgc2V0VGVzdFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250cm9sUmVzdWx0LCBzZXRDb250cm9sUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRyb2xUYWNvUmVzdWx0LCBzZXRDb250cm9sVGFjb1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZG9uZSA9IHRlc3RSZXN1bHQgJiYgY29udHJvbFJlc3VsdCAmJiBjb250cm9sVGFjb1Jlc3VsdDtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgc2V0VGVzdFJlc3VsdChudWxsKVxuICAgIHNldENvbnRyb2xSZXN1bHQobnVsbClcbiAgICBzZXRDb250cm9sVGFjb1Jlc3VsdChudWxsKVxuXG4gICAgc2V0SXNDaGVja2luZyh0cnVlKVxuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKHR5cGUsIHJlc3VsdCkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAndGVzdCc6XG4gICAgICAgIHNldFRlc3RSZXN1bHQocmVzdWx0KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29udHJvbCc6XG4gICAgICAgIHNldENvbnRyb2xSZXN1bHQocmVzdWx0KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29udHJvbC10YWNvJzpcbiAgICAgICAgc2V0Q29udHJvbFRhY29SZXN1bHQocmVzdWx0KVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvbmUgJiYgaXNDaGVja2luZykgc2V0SXNDaGVja2luZyhmYWxzZSlcbiAgfSwgW2lzQ2hlY2tpbmcsIGRvbmVdKVxuXG4gIGxldCBjb250ZW50ID0gKFxuICAgIDw+XG4gICAgICA8c3Bhbj7Qn9C+0LXRhdCw0LvQuCE8L3NwYW4+XG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgbWwtMyBmaWxsLWN1cnJlbnRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPVwiMlwiIGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIj48L3BhdGg+PC9zdmc+XG4gICAgPC8+XG4gIClcblxuICBsZXQgaW1nID0gbnVsbFxuXG4gIGlmIChpc0NoZWNraW5nICYmIHN0YXJ0ZWRBdCkge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8c3Bhbj7Qn9GA0L7QstC10YDRj9C10LwuLi48L3NwYW4+XG4gICAgKVxuXG4gICAgaW1nID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgdHlwZT1cImNvbnRyb2xcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1ndGVzdC1uaW5lLnZlcmNlbC5hcHAvbG9ocF8xMzAyeDk1NS5wbmdcIlxuICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAvPlxuICAgICAgICA8VGVzdEltZ1xuICAgICAgICAgIHR5cGU9XCJjb250cm9sLXRhY29cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdC5jby50ZXN0Lmx5bngucGluay9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgdHlwZT1cInRlc3RcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWJzLnR3aW1nLmNvbS9zdGlja3kvaWxsdXN0cmF0aW9ucy9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBsZXQgcmVzdWx0Q29udGVudCA9IG51bGxcblxuICBpZiAoIWlzQ2hlY2tpbmcgJiYgZG9uZSkge1xuICAgIHJlc3VsdENvbnRlbnQgPSA8UmVzdWx0IHRlc3Q9e3Rlc3RSZXN1bHR9IGNvbnRyb2w9e2NvbnRyb2xSZXN1bHR9IGNvbnRyb2xUYWNvPXtjb250cm9sVGFjb1Jlc3VsdH0gLz5cbiAgICBjb250ZW50ID0gPHNwYW4+0J/RgNC+0LLQtdGA0LjRgtGMINC10YnQtSDRgNCw0Lc8L3NwYW4+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVzdWx0Q29udGVudH1cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGgtMTIgcHgtNiB0ZXh0LWxnIHRleHQtcHVycGxlLTEwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS02MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICBkaXNhYmxlZD17aXNDaGVja2luZ31cbiAgICAgICAgb25DbGljaz17cnVufVxuICAgICAgPlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2ltZ31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWVkb21ldGVyXG4iXSwic291cmNlUm9vdCI6IiJ9
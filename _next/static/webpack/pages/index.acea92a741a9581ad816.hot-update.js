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
        type: "control",
        src: "https://imgtest-nine.vercel.app/lohp_1302x955.png",
        startedAt: startedAt,
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "control-taco",
        src: "https://t.co.test.lynx.pink/lohp_1302x955.png",
        startedAt: startedAt,
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "test",
        src: "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
        startedAt: startedAt,
        onLoad: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJzdGFydGVkQXQiLCJzZXRTdGFydGVkQXQiLCJ0ZXN0UmVzdWx0Iiwic2V0VGVzdFJlc3VsdCIsImNvbnRyb2xSZXN1bHQiLCJzZXRDb250cm9sUmVzdWx0IiwiY29udHJvbFRhY29SZXN1bHQiLCJzZXRDb250cm9sVGFjb1Jlc3VsdCIsImRvbmUiLCJydW4iLCJEYXRlIiwib25Mb2FkIiwidHlwZSIsInJlc3VsdCIsInVzZUVmZmVjdCIsImNvbnRlbnQiLCJpbWciLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNqQkMsVUFEaUI7QUFBQSxNQUNMQyxhQURLOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUVqQkcsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUFBLG1CQUlZSixzREFBUSxDQUFDLEtBQUQsQ0FKcEI7QUFBQSxNQUlqQkssVUFKaUI7QUFBQSxNQUlMQyxhQUpLOztBQUFBLG1CQUtrQk4sc0RBQVEsQ0FBQyxLQUFELENBTDFCO0FBQUEsTUFLakJPLGFBTGlCO0FBQUEsTUFLRkMsZ0JBTEU7O0FBQUEsbUJBTTBCUixzREFBUSxDQUFDLEtBQUQsQ0FObEM7QUFBQSxNQU1qQlMsaUJBTmlCO0FBQUEsTUFNRUMsb0JBTkY7O0FBUXhCLE1BQU1DLElBQUksR0FBR04sVUFBVSxJQUFJRSxhQUFkLElBQStCRSxpQkFBNUM7O0FBRUEsTUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQk4s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LEdBVEg7QUFBQSxrQkFERjtBQWFELENBL0ZEOztHQUFNcEIsVzs7S0FBQUEsVztBQWlHU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWNlYTkyYTc0MWE5NTgxYWQ4MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcbmltcG9ydCBUZXN0SW1nIGZyb20gJy4vVGVzdEltZyc7XG5cbmNvbnN0IFNwZWVkb21ldGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNDaGVja2luZywgc2V0SXNDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGFydGVkQXQsIHNldFN0YXJ0ZWRBdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbdGVzdFJlc3VsdCwgc2V0VGVzdFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250cm9sUmVzdWx0LCBzZXRDb250cm9sUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbnRyb2xUYWNvUmVzdWx0LCBzZXRDb250cm9sVGFjb1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZG9uZSA9IHRlc3RSZXN1bHQgJiYgY29udHJvbFJlc3VsdCAmJiBjb250cm9sVGFjb1Jlc3VsdDtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgc2V0VGVzdFJlc3VsdChudWxsKVxuICAgIHNldENvbnRyb2xSZXN1bHQobnVsbClcbiAgICBzZXRDb250cm9sVGFjb1Jlc3VsdChudWxsKVxuXG4gICAgc2V0SXNDaGVja2luZyh0cnVlKVxuICAgIHNldFN0YXJ0ZWRBdCgrbmV3IERhdGUoKSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICh0eXBlLCByZXN1bHQpID0+IHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3Rlc3QnOlxuICAgICAgICBzZXRUZXN0UmVzdWx0KHJlc3VsdClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbnRyb2wnOlxuICAgICAgICBzZXRDb250cm9sUmVzdWx0KHJlc3VsdClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbnRyb2wtdGFjbyc6XG4gICAgICAgIHNldENvbnRyb2xUYWNvUmVzdWx0KHJlc3VsdClcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb25lICYmIGlzQ2hlY2tpbmcpIHNldElzQ2hlY2tpbmcoZmFsc2UpXG4gIH0sIFtpc0NoZWNraW5nLCBkb25lXSlcblxuICBsZXQgY29udGVudCA9IChcbiAgICA8PlxuICAgICAgPHNwYW4+0J/QvtC10YXQsNC70LghPC9zcGFuPlxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IG1sLTMgZmlsbC1jdXJyZW50XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvPlxuICApXG5cbiAgbGV0IGltZyA9IG51bGxcblxuICBpZiAoaXNDaGVja2luZyAmJiBzdGFydGVkQXQpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPHNwYW4+0J/RgNC+0LLQtdGA0Y/QtdC8Li4uPC9zcGFuPlxuICAgIClcblxuICAgIGltZyA9IChcbiAgICAgIDw+XG4gICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgdHlwZT1cImNvbnRyb2xcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaW1ndGVzdC1uaW5lLnZlcmNlbC5hcHAvbG9ocF8xMzAyeDk1NS5wbmdcIlxuICAgICAgICAgIHN0YXJ0ZWRBdD17c3RhcnRlZEF0fVxuICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAvPlxuICAgICAgICA8VGVzdEltZ1xuICAgICAgICAgIHR5cGU9XCJjb250cm9sLXRhY29cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdC5jby50ZXN0Lmx5bngucGluay9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgc3RhcnRlZEF0PXtzdGFydGVkQXR9XG4gICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgdHlwZT1cInRlc3RcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWJzLnR3aW1nLmNvbS9zdGlja3kvaWxsdXN0cmF0aW9ucy9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgc3RhcnRlZEF0PXtzdGFydGVkQXR9XG4gICAgICAgICAgb25Mb2FkXG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICBsZXQgcmVzdWx0Q29udGVudCA9IG51bGxcblxuICBpZiAoIWlzQ2hlY2tpbmcgJiYgZG9uZSkge1xuICAgIHJlc3VsdENvbnRlbnQgPSA8UmVzdWx0IHRlc3Q9e3Rlc3RSZXN1bHR9IGNvbnRyb2w9e2NvbnRyb2xSZXN1bHR9IGNvbnRyb2xUYWNvPXtjb250cm9sVGFjb1Jlc3VsdH0gLz5cbiAgICBjb250ZW50ID0gPHNwYW4+0J/RgNC+0LLQtdGA0LjRgtGMINC10YnQtSDRgNCw0Lc8L3NwYW4+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVzdWx0Q29udGVudH1cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGgtMTIgcHgtNiB0ZXh0LWxnIHRleHQtcHVycGxlLTEwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS02MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICBkaXNhYmxlZD17aXNDaGVja2luZ31cbiAgICAgICAgb25DbGljaz17cnVufVxuICAgICAgPlxuICAgICAgICB7Y29udGVudH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge2ltZ31cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWVkb21ldGVyXG4iXSwic291cmNlUm9vdCI6IiJ9
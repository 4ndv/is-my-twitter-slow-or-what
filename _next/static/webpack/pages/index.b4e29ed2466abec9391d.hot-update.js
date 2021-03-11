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
    img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "control",
        src: "https://imgtest-nine.vercel.app/lohp_1302x955.png",
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "control-taco",
        src: "https://t.co.test.lynx.pink/lohp_1302x955.png",
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: "test",
        src: "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
        onLoad: onLoad
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 80,
      columnNumber: 21
    }, _this);
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJzdGFydGVkQXQiLCJzZXRTdGFydGVkQXQiLCJ0ZXN0UmVzdWx0Iiwic2V0VGVzdFJlc3VsdCIsImNvbnRyb2xSZXN1bHQiLCJzZXRDb250cm9sUmVzdWx0IiwiY29udHJvbFRhY29SZXN1bHQiLCJzZXRDb250cm9sVGFjb1Jlc3VsdCIsImRvbmUiLCJydW4iLCJEYXRlIiwib25Mb2FkIiwidHlwZSIsInJlc3VsdCIsInVzZUVmZmVjdCIsImNvbnRlbnQiLCJpbWciLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNqQkMsVUFEaUI7QUFBQSxNQUNMQyxhQURLOztBQUFBLG1CQUVVRixzREFBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUVqQkcsU0FGaUI7QUFBQSxNQUVOQyxZQUZNOztBQUFBLG1CQUlZSixzREFBUSxDQUFDLEtBQUQsQ0FKcEI7QUFBQSxNQUlqQkssVUFKaUI7QUFBQSxNQUlMQyxhQUpLOztBQUFBLG1CQUtrQk4sc0RBQVEsQ0FBQyxLQUFELENBTDFCO0FBQUEsTUFLakJPLGFBTGlCO0FBQUEsTUFLRkMsZ0JBTEU7O0FBQUEsbUJBTTBCUixzREFBUSxDQUFDLEtBQUQsQ0FObEM7QUFBQSxNQU1qQlMsaUJBTmlCO0FBQUEsTUFNRUMsb0JBTkY7O0FBUXhCLE1BQU1DLElBQUksR0FBR04sVUFBVSxJQUFJRSxhQUFkLElBQStCRSxpQkFBNUM7O0FBRUEsTUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQk4s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QTVGRDs7R0FBTXBCLFc7O0tBQUFBLFc7QUE4RlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0ZTI5ZWQyNDY2YWJlYzkzOTFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XG5pbXBvcnQgVGVzdEltZyBmcm9tICcuL1Rlc3RJbWcnO1xuXG5jb25zdCBTcGVlZG9tZXRlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2hlY2tpbmcsIHNldElzQ2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhcnRlZEF0LCBzZXRTdGFydGVkQXRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW3Rlc3RSZXN1bHQsIHNldFRlc3RSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udHJvbFJlc3VsdCwgc2V0Q29udHJvbFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250cm9sVGFjb1Jlc3VsdCwgc2V0Q29udHJvbFRhY29SZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGRvbmUgPSB0ZXN0UmVzdWx0ICYmIGNvbnRyb2xSZXN1bHQgJiYgY29udHJvbFRhY29SZXN1bHQ7XG5cbiAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgIHNldFRlc3RSZXN1bHQobnVsbClcbiAgICBzZXRDb250cm9sUmVzdWx0KG51bGwpXG4gICAgc2V0Q29udHJvbFRhY29SZXN1bHQobnVsbClcblxuICAgIHNldElzQ2hlY2tpbmcodHJ1ZSlcbiAgICBzZXRTdGFydGVkQXQoK25ldyBEYXRlKCkpXG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAodHlwZSwgcmVzdWx0KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0ZXN0JzpcbiAgICAgICAgc2V0VGVzdFJlc3VsdChyZXN1bHQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb250cm9sJzpcbiAgICAgICAgc2V0Q29udHJvbFJlc3VsdChyZXN1bHQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb250cm9sLXRhY28nOlxuICAgICAgICBzZXRDb250cm9sVGFjb1Jlc3VsdChyZXN1bHQpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9uZSAmJiBpc0NoZWNraW5nKSBzZXRJc0NoZWNraW5nKGZhbHNlKVxuICB9LCBbaXNDaGVja2luZywgZG9uZV0pXG5cbiAgbGV0IGNvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIDxzcGFuPtCf0L7QtdGF0LDQu9C4ITwvc3Bhbj5cbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBtbC0zIGZpbGwtY3VycmVudFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xNyA4bDQgNG0wIDBsLTQgNG00LTRIM1wiPjwvcGF0aD48L3N2Zz5cbiAgICA8Lz5cbiAgKVxuXG4gIGxldCBpbWcgPSBudWxsXG5cbiAgaWYgKGlzQ2hlY2tpbmcgJiYgc3RhcnRlZEF0KSB7XG4gICAgY29udGVudCA9IChcbiAgICAgIDxzcGFuPtCf0YDQvtCy0LXRgNGP0LXQvC4uLjwvc3Bhbj5cbiAgICApXG5cbiAgICBpbWcgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgPFRlc3RJbWdcbiAgICAgICAgICB0eXBlPVwiY29udHJvbFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWd0ZXN0LW5pbmUudmVyY2VsLmFwcC9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgb25Mb2FkPXtvbkxvYWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgdHlwZT1cImNvbnRyb2wtdGFjb1wiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly90LmNvLnRlc3QubHlueC5waW5rL2xvaHBfMTMwMng5NTUucG5nXCJcbiAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRlc3RJbWdcbiAgICAgICAgICB0eXBlPVwidGVzdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hYnMudHdpbWcuY29tL3N0aWNreS9pbGx1c3RyYXRpb25zL2xvaHBfMTMwMng5NTUucG5nXCJcbiAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGxldCByZXN1bHRDb250ZW50ID0gbnVsbFxuXG4gIGlmICghaXNDaGVja2luZyAmJiBkb25lKSB7XG4gICAgcmVzdWx0Q29udGVudCA9IDxSZXN1bHQgdGVzdD17dGVzdFJlc3VsdH0gY29udHJvbD17Y29udHJvbFJlc3VsdH0gY29udHJvbFRhY289e2NvbnRyb2xUYWNvUmVzdWx0fSAvPlxuICAgIGNvbnRlbnQgPSA8c3Bhbj7Qn9GA0L7QstC10YDQuNGC0Ywg0LXRidC1INGA0LDQtzwvc3Bhbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXN1bHRDb250ZW50fVxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBweC02IHRleHQtbGcgdGV4dC1wdXJwbGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgIGRpc2FibGVkPXtpc0NoZWNraW5nfVxuICAgICAgICBvbkNsaWNrPXtydW59XG4gICAgICA+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aW1nfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWRvbWV0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=
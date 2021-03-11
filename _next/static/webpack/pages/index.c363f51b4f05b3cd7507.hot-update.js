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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Math.random()),
      key = _useState2[0],
      setKey = _useState2[1];

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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "test",
          src: "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
          onLoad: onLoad
        }, key, false, {
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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "control",
          src: "https://imgtest-nine.vercel.app/lohp_1302x955.png",
          onLoad: onLoad
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this);
    } else if (!controlTacoResult) {
      img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TestImg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "control-taco",
          src: "https://t.co.test.lynx.pink/lohp_1302x955.png",
          onLoad: onLoad
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this);
    }
  }

  var resultContent = null;

  if (!isChecking && done) {
    resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_2__["default"], {
      test: testResult,
      control: controlResult,
      controlTaco: controlTacoResult
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }, _this);
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 102,
      columnNumber: 7
    }, _this), img]
  }, void 0, true);
};

_s(Speedometer, "72bhQAUZSjLo0/mcsrKYrlGqSwo=");

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
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJNYXRoIiwicmFuZG9tIiwia2V5Iiwic2V0S2V5IiwidGVzdFJlc3VsdCIsInNldFRlc3RSZXN1bHQiLCJjb250cm9sUmVzdWx0Iiwic2V0Q29udHJvbFJlc3VsdCIsImNvbnRyb2xUYWNvUmVzdWx0Iiwic2V0Q29udHJvbFRhY29SZXN1bHQiLCJkb25lIiwicnVuIiwib25Mb2FkIiwidHlwZSIsInJlc3VsdCIsInVzZUVmZmVjdCIsImNvbnRlbnQiLCJpbWciLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNqQkMsVUFEaUI7QUFBQSxNQUNMQyxhQURLOztBQUFBLG1CQUVGRixzREFBUSxDQUFDRyxJQUFJLENBQUNDLE1BQUwsRUFBRCxDQUZOO0FBQUEsTUFFakJDLEdBRmlCO0FBQUEsTUFFWkMsTUFGWTs7QUFBQSxtQkFJWU4sc0RBQVEsQ0FBQyxLQUFELENBSnBCO0FBQUEsTUFJakJPLFVBSmlCO0FBQUEsTUFJTEMsYUFKSzs7QUFBQSxtQkFLa0JSLHNEQUFRLENBQUMsS0FBRCxDQUwxQjtBQUFBLE1BS2pCUyxhQUxpQjtBQUFBLE1BS0ZDLGdCQUxFOztBQUFBLG1CQU0wQlYsc0RBQVEsQ0FBQyxLQUFELENBTmxDO0FBQUEsTUFNakJXLGlCQU5pQjtBQUFBLE1BTUVDLG9CQU5GOztBQU94QixNQUFNQyxJQUFJLEdBQUdOLFVBQVUsSUFBSUUsYUFBZCxJQUErQkUsaUJBQTVDOztBQUNBLE1BQU1HLEdBQUcsR0FBRyxTQUFOQSxHQUFN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LElBQWVZLElBQW5CLEVBQXlCO0FBQ3ZCUSxpQkFBYSxnQkFBRyxxRUFBQywrQ0FBRDtBQUFRLFVBQUksRUFBRWQsVUFBZDtBQUEwQixhQUFPLEVBQUVFLGFBQW5DO0FBQWtELGlCQUFXLEVBQUVFO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBaEI7QUFDQVEsV0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFWO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSxlQUNHRSxhQURILGVBRUU7QUFDRSxlQUFTLEVBQUMsd09BRFo7QUFFRSxjQUFRLEVBQUVwQixVQUZaO0FBR0UsYUFBTyxFQUFFYSxHQUhYO0FBQUEsZ0JBS0dLO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBU0dDLEdBVEg7QUFBQSxrQkFERjtBQWFELENBM0dEOztHQUFNckIsVzs7S0FBQUEsVztBQTZHU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzM2M2Y1MWI0ZjA1YjNjZDc1MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcbmltcG9ydCBUZXN0SW1nIGZyb20gJy4vVGVzdEltZyc7XG5cbmNvbnN0IFNwZWVkb21ldGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNDaGVja2luZywgc2V0SXNDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2tleSwgc2V0S2V5XSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkpXG5cbiAgY29uc3QgW3Rlc3RSZXN1bHQsIHNldFRlc3RSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb250cm9sUmVzdWx0LCBzZXRDb250cm9sUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29udHJvbFRhY29SZXN1bHQsIHNldENvbnRyb2xUYWNvUmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBkb25lID0gdGVzdFJlc3VsdCAmJiBjb250cm9sUmVzdWx0ICYmIGNvbnRyb2xUYWNvUmVzdWx0XG4gIGNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICBzZXRUZXN0UmVzdWx0KG51bGwpXG4gICAgc2V0Q29udHJvbFJlc3VsdChudWxsKVxuICAgIHNldENvbnRyb2xUYWNvUmVzdWx0KG51bGwpXG5cbiAgICBzZXRJc0NoZWNraW5nKHRydWUpXG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAodHlwZSwgcmVzdWx0KSA9PiB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICd0ZXN0JzpcbiAgICAgICAgc2V0VGVzdFJlc3VsdChyZXN1bHQpXG4gICAgICAgIHNldEtleShNYXRoLnJhbmRvbSgpKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29udHJvbCc6XG4gICAgICAgIHNldENvbnRyb2xSZXN1bHQocmVzdWx0KVxuICAgICAgICBzZXRLZXkoTWF0aC5yYW5kb20oKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbnRyb2wtdGFjbyc6XG4gICAgICAgIHNldENvbnRyb2xUYWNvUmVzdWx0KHJlc3VsdClcbiAgICAgICAgc2V0S2V5KE1hdGgucmFuZG9tKCkpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9uZSAmJiBpc0NoZWNraW5nKSBzZXRJc0NoZWNraW5nKGZhbHNlKVxuICB9LCBbaXNDaGVja2luZywgZG9uZV0pXG5cbiAgbGV0IGNvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIDxzcGFuPtCf0L7QtdGF0LDQu9C4ITwvc3Bhbj5cbiAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNSBtbC0zIGZpbGwtY3VycmVudFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xNyA4bDQgNG0wIDBsLTQgNG00LTRIM1wiPjwvcGF0aD48L3N2Zz5cbiAgICA8Lz5cbiAgKVxuXG4gIGxldCBpbWcgPSBudWxsXG5cbiAgaWYgKGlzQ2hlY2tpbmcpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPHNwYW4+0J/RgNC+0LLQtdGA0Y/QtdC8Li4uPC9zcGFuPlxuICAgIClcblxuICAgIGlmICghdGVzdFJlc3VsdCkge1xuICAgICAgaW1nID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8VGVzdEltZ1xuICAgICAgICAgICAgdHlwZT1cInRlc3RcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9hYnMudHdpbWcuY29tL3N0aWNreS9pbGx1c3RyYXRpb25zL2xvaHBfMTMwMng5NTUucG5nXCJcbiAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICghY29udHJvbFJlc3VsdCkge1xuICAgICAgaW1nID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8VGVzdEltZ1xuICAgICAgICAgICAgdHlwZT1cImNvbnRyb2xcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWd0ZXN0LW5pbmUudmVyY2VsLmFwcC9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoIWNvbnRyb2xUYWNvUmVzdWx0KSB7XG4gICAgICBpbWcgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxUZXN0SW1nXG4gICAgICAgICAgICB0eXBlPVwiY29udHJvbC10YWNvXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdC5jby50ZXN0Lmx5bngucGluay9sb2hwXzEzMDJ4OTU1LnBuZ1wiXG4gICAgICAgICAgICBvbkxvYWQ9e29uTG9hZH1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCByZXN1bHRDb250ZW50ID0gbnVsbFxuXG4gIGlmICghaXNDaGVja2luZyAmJiBkb25lKSB7XG4gICAgcmVzdWx0Q29udGVudCA9IDxSZXN1bHQgdGVzdD17dGVzdFJlc3VsdH0gY29udHJvbD17Y29udHJvbFJlc3VsdH0gY29udHJvbFRhY289e2NvbnRyb2xUYWNvUmVzdWx0fSAvPlxuICAgIGNvbnRlbnQgPSA8c3Bhbj7Qn9GA0L7QstC10YDQuNGC0Ywg0LXRidC1INGA0LDQtzwvc3Bhbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXN1bHRDb250ZW50fVxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBweC02IHRleHQtbGcgdGV4dC1wdXJwbGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgIGRpc2FibGVkPXtpc0NoZWNraW5nfVxuICAgICAgICBvbkNsaWNrPXtydW59XG4gICAgICA+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aW1nfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWVkb21ldGVyXG4iXSwic291cmNlUm9vdCI6IiJ9
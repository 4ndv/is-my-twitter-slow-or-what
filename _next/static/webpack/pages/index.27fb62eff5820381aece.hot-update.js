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
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Result__WEBPACK_IMPORTED_MODULE_2__);



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

  var onload = function onload() {
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

  if (isChecking) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this);
  }

  var resultContent = null;
  if (!isChecking && result) resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_2___default.a, {
    started: startedAt,
    ended: result
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
      lineNumber: 46,
      columnNumber: 7
    }, _this)]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJzdGFydGVkQXQiLCJzZXRTdGFydGVkQXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJydW4iLCJNYXRoIiwicmFuZG9tIiwiRGF0ZSIsIm9ubG9hZCIsImNvbnRlbnQiLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDakJDLFVBRGlCO0FBQUEsTUFDTEMsYUFESzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxJQUFELENBRlo7QUFBQSxNQUVqQkcsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUFBLG1CQUdVSixzREFBUSxDQUFDLElBQUQsQ0FIbEI7QUFBQSxNQUdqQkssU0FIaUI7QUFBQSxNQUdOQyxZQUhNOztBQUFBLG1CQUlJTixzREFBUSxDQUFDLEtBQUQsQ0FKWjtBQUFBLE1BSWpCTyxNQUppQjtBQUFBLE1BSVRDLFNBSlM7O0FBTXhCLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEJILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLGFBQVMsQ0FBQyxJQUFELENBQVQsQ0FGZ0IsQ0FJaEI7O0FBQ0FKLGFBQVMsZ0ZBQXlFTSxJQUFJLENBQUNDLE1BQUwsRUFBekUsRUFBVDtBQUVBVCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBSSxnQkFBWSxDQUFDLENBQUMsSUFBSU0sSUFBSixFQUFGLENBQVo7QUFDRCxHQVREOztBQVdBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJYLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FNLGFBQVMsQ0FBQyxDQUFDLElBQUlJLElBQUosRUFBRixDQUFUO0FBQ0QsR0FIRDs7QUFLQSxNQUFJRSxPQUFPLGdCQUNUO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBTSwyQkFBWDtBQUF1QyxVQUFJLEVBQUMsTUFBNUM7QUFBbUQsWUFBTSxFQUFDLGNBQTFEO0FBQXlFLGFBQU8sRUFBQyxXQUFqRjtBQUE2RixXQUFLLEVBQUMsNEJBQW5HO0FBQUEsNkJBQWdJO0FBQU0sMEJBQWUsT0FBckI7QUFBNkIsMkJBQWdCLE9BQTdDO0FBQXFELHdCQUFhLEdBQWxFO0FBQXNFLFNBQUMsRUFBQztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGOztBQU9BLE1BQUliLFVBQUosRUFBZ0I7QUFDZGEsV0FBTyxnQkFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBR0Q7O0FBRUQsTUFBSUMsYUFBYSxHQUFHLElBQXBCO0FBRUEsTUFBSSxDQUFDZCxVQUFELElBQWVNLE1BQW5CLEVBQTJCUSxhQUFhLGdCQUFHLHFFQUFDLDhDQUFEO0FBQVEsV0FBTyxFQUFFVixTQUFqQjtBQUE0QixTQUFLLEVBQUVFO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaEI7QUFFM0Isc0JBQ0U7QUFBQSxlQUNHUSxhQURILGVBRUU7QUFDRSxlQUFTLEVBQUMsd09BRFo7QUFFRSxjQUFRLEVBQUVkLFVBRlo7QUFHRSxhQUFPLEVBQUVDLGFBSFg7QUFBQSxnQkFLR1k7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQVlELENBbkREOztHQUFNZixXOztLQUFBQSxXO0FBcURTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yN2ZiNjJlZmY1ODIwMzgxYWVjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XG5cbmNvbnN0IFNwZWVkb21ldGVyID0gKCkgPT4ge1xuICBjb25zdCBbaXNDaGVja2luZywgc2V0SXNDaGVja2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NyY10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3N0YXJ0ZWRBdCwgc2V0U3RhcnRlZEF0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICBzZXRTdGFydGVkQXQobnVsbClcbiAgICBzZXRSZXN1bHQobnVsbClcblxuICAgIC8vINCa0LDRgNGC0LjQvdC60LAsINGF0YDQsNC90Y/RidCw0Y/RgdGPINC90LAg0LfQsNC80LXQtNC70LXQvdC90L7QvCDRgdC10YDQstC10YDQtSDRgtCy0LjRgtGC0LXRgNCwICsg0L7QsdGF0L7QtCDQutC10YjQuNGA0L7QstCw0L3QuNGPINCx0YDQsNGD0LfQtdGA0L7QvFxuICAgIHNldEltZ1NyYyhgaHR0cHM6Ly9hYnMudHdpbWcuY29tL3N0aWNreS9pbGx1c3RyYXRpb25zL2xvaHBfMTMwMng5NTUucG5nP25vY2FjaGU9JHtNYXRoLnJhbmRvbSgpfWApXG5cbiAgICBzZXRJc0NoZWNraW5nKHRydWUpXG4gICAgc2V0U3RhcnRlZEF0KCtuZXcgRGF0ZSgpKVxuICB9XG5cbiAgY29uc3Qgb25sb2FkID0gKCkgPT4ge1xuICAgIHNldElzQ2hlY2tpbmcoZmFsc2UpXG4gICAgc2V0UmVzdWx0KCtuZXcgRGF0ZSgpKVxuICB9XG5cbiAgbGV0IGNvbnRlbnQgPSAoXG4gICAgPD5cbiAgICAgIDxzcGFuPtCf0L7QtdGF0LDQu9C4ITwvc3Bhbj5cbiAgICAgIDxzdmcgY2xhc3M9XCJ3LTUgaC01IG1sLTMgZmlsbC1jdXJyZW50XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvPlxuICApXG5cbiAgaWYgKGlzQ2hlY2tpbmcpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPHNwYW4+0J/RgNC+0LLQtdGA0Y/QtdC8Li4uPC9zcGFuPlxuICAgIClcbiAgfVxuXG4gIGxldCByZXN1bHRDb250ZW50ID0gbnVsbFxuXG4gIGlmICghaXNDaGVja2luZyAmJiByZXN1bHQpIHJlc3VsdENvbnRlbnQgPSA8UmVzdWx0IHN0YXJ0ZWQ9e3N0YXJ0ZWRBdH0gZW5kZWQ9e3Jlc3VsdH0gLz5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cmVzdWx0Q29udGVudH1cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGgtMTIgcHgtNiB0ZXh0LWxnIHRleHQtcHVycGxlLTEwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0xNTAgYmctcHVycGxlLTYwMCBob3ZlcjpiZy1wdXJwbGUtNzAwIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLXB1cnBsZS02MDAgZm9jdXM6cmluZy1vcGFjaXR5LTUwIGRpc2FibGVkOm9wYWNpdHktNTBcIlxuICAgICAgICBkaXNhYmxlZD17aXNDaGVja2luZ31cbiAgICAgICAgb25DbGljaz17c2V0SXNDaGVja2luZ31cbiAgICAgID5cbiAgICAgICAge2NvbnRlbnR9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWVkb21ldGVyXG4iXSwic291cmNlUm9vdCI6IiJ9
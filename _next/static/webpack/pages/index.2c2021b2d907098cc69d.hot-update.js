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



var _jsxFileName = "/home/lynx/projects/is-my-twitter-slow-or-what/components/Speedometer.js",
    _this = undefined,
    _s = $RefreshSig$();



var Speedometer = function Speedometer() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isChecking = _useState[0],
      setIsChecking = _useState[1];

  var check = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsChecking(true);
  });

  var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u043E\u0435\u0445\u0430\u043B\u0438!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
        lineNumber: 13,
        columnNumber: 135
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true);

  if (isChecking) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50",
    disabled: isChecking,
    onClick: setIsChecking,
    children: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(Speedometer, "iDbXK5O7B7xeOs9pBFRcO1QqxlQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJjaGVjayIsInVzZUNhbGxiYWNrIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDakJDLFVBRGlCO0FBQUEsTUFDTEMsYUFESzs7QUFHeEIsTUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDOUJGLGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FGd0IsQ0FBekI7O0FBSUEsTUFBSUcsT0FBTyxnQkFDVDtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQU0sMkJBQVg7QUFBdUMsVUFBSSxFQUFDLE1BQTVDO0FBQW1ELFlBQU0sRUFBQyxjQUExRDtBQUF5RSxhQUFPLEVBQUMsV0FBakY7QUFBNkYsV0FBSyxFQUFDLDRCQUFuRztBQUFBLDZCQUFnSTtBQUFNLDBCQUFlLE9BQXJCO0FBQTZCLDJCQUFnQixPQUE3QztBQUFxRCx3QkFBYSxHQUFsRTtBQUFzRSxTQUFDLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjs7QUFPQSxNQUFJSixVQUFKLEVBQWdCO0FBQ2RJLFdBQU8sZ0JBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUdEOztBQUVELHNCQUNFO0FBQ0UsYUFBUyxFQUFDLHdPQURaO0FBRUUsWUFBUSxFQUFFSixVQUZaO0FBR0UsV0FBTyxFQUFFQyxhQUhYO0FBQUEsY0FLR0c7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQTdCRDs7R0FBTU4sVzs7S0FBQUEsVztBQStCU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmMyMDIxYjJkOTA3MDk4Y2M2OWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3BlZWRvbWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNraW5nLCBzZXRJc0NoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjaGVjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0NoZWNraW5nKHRydWUpO1xuICB9KTtcblxuICBsZXQgY29udGVudCA9IChcbiAgICA8PlxuICAgICAgPHNwYW4+0J/QvtC10YXQsNC70LghPC9zcGFuPlxuICAgICAgPHN2ZyBjbGFzcz1cInctNSBoLTUgbWwtMyBmaWxsLWN1cnJlbnRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIj48L3BhdGg+PC9zdmc+XG4gICAgPC8+XG4gIClcblxuICBpZiAoaXNDaGVja2luZykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8c3Bhbj7Qn9GA0L7QstC10YDRj9C10LwuLi48L3NwYW4+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBweC02IHRleHQtbGcgdGV4dC1wdXJwbGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICBkaXNhYmxlZD17aXNDaGVja2luZ31cbiAgICAgIG9uQ2xpY2s9e3NldElzQ2hlY2tpbmd9XG4gICAgPlxuICAgICAge2NvbnRlbnR9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZG9tZXRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
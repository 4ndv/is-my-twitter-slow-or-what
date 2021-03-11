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

  var onLoad = function onLoad() {
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
      className: "w-5 h-5 ml-3 fill-current",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        "stroke-linecap": "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M17 8l4 4m0 0l-4 4m4-4H3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 139
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)]
  }, void 0, true);

  var img = null;

  if (isChecking) {
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this);
    img = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: imgSrc,
      onLoad: onLoad,
      width: 1,
      height: 1,
      style: {
        opacity: 0.1
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }, _this);
  }

  var resultContent = null;

  if (!isChecking && result) {
    resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_2__["default"], {
      started: startedAt,
      ended: result
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }, _this);
    content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [resultContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inline-flex",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50",
        disabled: isChecking,
        onClick: run,
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), img]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJzdGFydGVkQXQiLCJzZXRTdGFydGVkQXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJydW4iLCJNYXRoIiwicmFuZG9tIiwiRGF0ZSIsIm9uTG9hZCIsImNvbnRlbnQiLCJpbWciLCJvcGFjaXR5IiwicmVzdWx0Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDakJDLFVBRGlCO0FBQUEsTUFDTEMsYUFESzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxJQUFELENBRlo7QUFBQSxNQUVqQkcsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUFBLG1CQUdVSixzREFBUSxDQUFDLElBQUQsQ0FIbEI7QUFBQSxNQUdqQkssU0FIaUI7QUFBQSxNQUdOQyxZQUhNOztBQUFBLG1CQUlJTixzREFBUSxDQUFDLEtBQUQsQ0FKWjtBQUFBLE1BSWpCTyxNQUppQjtBQUFBLE1BSVRDLFNBSlM7O0FBTXhCLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEJILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLGFBQVMsQ0FBQyxJQUFELENBQVQsQ0FGZ0IsQ0FJaEI7O0FBQ0FKLGFBQVMsZ0ZBQXlFTSxJQUFJLENBQUNDLE1BQUwsRUFBekUsRUFBVDtBQUVBVCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBSSxnQkFBWSxDQUFDLENBQUMsSUFBSU0sSUFBSixFQUFGLENBQVo7QUFDRCxHQVREOztBQVdBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJYLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FNLGFBQVMsQ0FBQyxDQUFDLElBQUlJLElBQUosRUFBRixDQUFUO0FBQ0QsR0FIRDs7QUFLQSxNQUFJRSxPQUFPLGdCQUNUO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQTJDLFVBQUksRUFBQyxNQUFoRDtBQUF1RCxZQUFNLEVBQUMsY0FBOUQ7QUFBNkUsYUFBTyxFQUFDLFdBQXJGO0FBQWlHLFdBQUssRUFBQyw0QkFBdkc7QUFBQSw2QkFBb0k7QUFBTSwwQkFBZSxPQUFyQjtBQUE2QixzQkFBYyxFQUFDLE9BQTVDO0FBQW9ELG1CQUFXLEVBQUMsR0FBaEU7QUFBb0UsU0FBQyxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7O0FBT0EsTUFBSUMsR0FBRyxHQUFHLElBQVY7O0FBRUEsTUFBSWQsVUFBSixFQUFnQjtBQUNkYSxXQUFPLGdCQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFJQUMsT0FBRyxnQkFBRztBQUFLLFNBQUcsRUFBRVosTUFBVjtBQUFrQixZQUFNLEVBQUVVLE1BQTFCO0FBQWtDLFdBQUssRUFBRSxDQUF6QztBQUE0QyxZQUFNLEVBQUUsQ0FBcEQ7QUFBdUQsV0FBSyxFQUFFO0FBQUVHLGVBQU8sRUFBRTtBQUFYO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUNEOztBQUVELE1BQUlDLGFBQWEsR0FBRyxJQUFwQjs7QUFFQSxNQUFJLENBQUNoQixVQUFELElBQWVNLE1BQW5CLEVBQTJCO0FBQ3pCVSxpQkFBYSxnQkFBRyxxRUFBQywrQ0FBRDtBQUFRLGFBQU8sRUFBRVosU0FBakI7QUFBNEIsV0FBSyxFQUFFRTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWhCO0FBQ0FPLFdBQU8sZ0JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVjtBQUNEOztBQUVELHNCQUNFO0FBQUEsZUFDR0csYUFESCxlQUVFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUMsd09BRFo7QUFFRSxnQkFBUSxFQUFFaEIsVUFGWjtBQUdFLGVBQU8sRUFBRVEsR0FIWDtBQUFBLGtCQUtHSztBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVFHQyxHQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFlRCxDQTdERDs7R0FBTWhCLFc7O0tBQUFBLFc7QUErRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY5MWRkZGNhN2U3MjE3NmE1NzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcblxuY29uc3QgU3BlZWRvbWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNraW5nLCBzZXRJc0NoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3RhcnRlZEF0LCBzZXRTdGFydGVkQXRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgIHNldFN0YXJ0ZWRBdChudWxsKVxuICAgIHNldFJlc3VsdChudWxsKVxuXG4gICAgLy8g0JrQsNGA0YLQuNC90LrQsCwg0YXRgNCw0L3Rj9GJ0LDRj9GB0Y8g0L3QsCDQt9Cw0LzQtdC00LvQtdC90L3QvtC8INGB0LXRgNCy0LXRgNC1INGC0LLQuNGC0YLQtdGA0LAgKyDQvtCx0YXQvtC0INC60LXRiNC40YDQvtCy0LDQvdC40Y8g0LHRgNCw0YPQt9C10YDQvtC8XG4gICAgc2V0SW1nU3JjKGBodHRwczovL2Ficy50d2ltZy5jb20vc3RpY2t5L2lsbHVzdHJhdGlvbnMvbG9ocF8xMzAyeDk1NS5wbmc/bm9jYWNoZT0ke01hdGgucmFuZG9tKCl9YClcblxuICAgIHNldElzQ2hlY2tpbmcodHJ1ZSlcbiAgICBzZXRTdGFydGVkQXQoK25ldyBEYXRlKCkpXG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgc2V0SXNDaGVja2luZyhmYWxzZSlcbiAgICBzZXRSZXN1bHQoK25ldyBEYXRlKCkpXG4gIH1cblxuICBsZXQgY29udGVudCA9IChcbiAgICA8PlxuICAgICAgPHNwYW4+0J/QvtC10YXQsNC70LghPC9zcGFuPlxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IG1sLTMgZmlsbC1jdXJyZW50XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9XCIyXCIgZD1cIk0xNyA4bDQgNG0wIDBsLTQgNG00LTRIM1wiPjwvcGF0aD48L3N2Zz5cbiAgICA8Lz5cbiAgKVxuXG4gIGxldCBpbWcgPSBudWxsXG5cbiAgaWYgKGlzQ2hlY2tpbmcpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPHNwYW4+0J/RgNC+0LLQtdGA0Y/QtdC8Li4uPC9zcGFuPlxuICAgIClcblxuICAgIGltZyA9IDxpbWcgc3JjPXtpbWdTcmN9IG9uTG9hZD17b25Mb2FkfSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBzdHlsZT17eyBvcGFjaXR5OiAwLjEgfX0gLz5cbiAgfVxuXG4gIGxldCByZXN1bHRDb250ZW50ID0gbnVsbFxuXG4gIGlmICghaXNDaGVja2luZyAmJiByZXN1bHQpIHtcbiAgICByZXN1bHRDb250ZW50ID0gPFJlc3VsdCBzdGFydGVkPXtzdGFydGVkQXR9IGVuZGVkPXtyZXN1bHR9IC8+XG4gICAgY29udGVudCA9IDxzcGFuPtCf0YDQvtCy0LXRgNC40YLRjCDQtdGJ0LUg0YDQsNC3PC9zcGFuPlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Jlc3VsdENvbnRlbnR9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBweC02IHRleHQtbGcgdGV4dC1wdXJwbGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzQ2hlY2tpbmd9XG4gICAgICAgICAgb25DbGljaz17cnVufVxuICAgICAgICA+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7aW1nfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZG9tZXRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
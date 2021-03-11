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
        strokeLinecap: "round",
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
      width: 100
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
    children: [resultContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50",
      disabled: isChecking,
      onClick: run,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), img]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJzdGFydGVkQXQiLCJzZXRTdGFydGVkQXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJydW4iLCJNYXRoIiwicmFuZG9tIiwiRGF0ZSIsIm9uTG9hZCIsImNvbnRlbnQiLCJpbWciLCJyZXN1bHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNqQkMsVUFEaUI7QUFBQSxNQUNMQyxhQURLOztBQUFBLG1CQUVJRixzREFBUSxDQUFDLElBQUQsQ0FGWjtBQUFBLE1BRWpCRyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBQUEsbUJBR1VKLHNEQUFRLENBQUMsSUFBRCxDQUhsQjtBQUFBLE1BR2pCSyxTQUhpQjtBQUFBLE1BR05DLFlBSE07O0FBQUEsbUJBSUlOLHNEQUFRLENBQUMsS0FBRCxDQUpaO0FBQUEsTUFJakJPLE1BSmlCO0FBQUEsTUFJVEMsU0FKUzs7QUFNeEIsTUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQkgsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQUUsYUFBUyxDQUFDLElBQUQsQ0FBVCxDQUZnQixDQUloQjs7QUFDQUosYUFBUyxnRkFBeUVNLElBQUksQ0FBQ0MsTUFBTCxFQUF6RSxFQUFUO0FBRUFULGlCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FJLGdCQUFZLENBQUMsQ0FBQyxJQUFJTSxJQUFKLEVBQUYsQ0FBWjtBQUNELEdBVEQ7O0FBV0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQlgsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDQU0sYUFBUyxDQUFDLENBQUMsSUFBSUksSUFBSixFQUFGLENBQVQ7QUFDRCxHQUhEOztBQUtBLE1BQUlFLE9BQU8sZ0JBQ1Q7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUMsMkJBQWY7QUFBMkMsVUFBSSxFQUFDLE1BQWhEO0FBQXVELFlBQU0sRUFBQyxjQUE5RDtBQUE2RSxhQUFPLEVBQUMsV0FBckY7QUFBaUcsV0FBSyxFQUFDLDRCQUF2RztBQUFBLDZCQUFvSTtBQUFNLHFCQUFhLEVBQUMsT0FBcEI7QUFBNEIsc0JBQWMsRUFBQyxPQUEzQztBQUFtRCxtQkFBVyxFQUFDLEdBQS9EO0FBQW1FLFNBQUMsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGOztBQU9BLE1BQUlDLEdBQUcsR0FBRyxJQUFWOztBQUVBLE1BQUlkLFVBQUosRUFBZ0I7QUFDZGEsV0FBTyxnQkFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBSUFDLE9BQUcsZ0JBQUc7QUFBSyxTQUFHLEVBQUVaLE1BQVY7QUFBa0IsWUFBTSxFQUFFVSxNQUExQjtBQUFrQyxXQUFLLEVBQUU7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFOO0FBQ0Q7O0FBRUQsTUFBSUcsYUFBYSxHQUFHLElBQXBCOztBQUVBLE1BQUksQ0FBQ2YsVUFBRCxJQUFlTSxNQUFuQixFQUEyQjtBQUN6QlMsaUJBQWEsZ0JBQUcscUVBQUMsK0NBQUQ7QUFBUSxhQUFPLEVBQUVYLFNBQWpCO0FBQTRCLFdBQUssRUFBRUU7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFoQjtBQUNBTyxXQUFPLGdCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVY7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGVBQ0dFLGFBREgsZUFFRTtBQUNFLGVBQVMsRUFBQyx3T0FEWjtBQUVFLGNBQVEsRUFBRWYsVUFGWjtBQUdFLGFBQU8sRUFBRVEsR0FIWDtBQUFBLGdCQUtHSztBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQVNHQyxHQVRIO0FBQUEsa0JBREY7QUFhRCxDQTNERDs7R0FBTWhCLFc7O0tBQUFBLFc7QUE2RFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3MDExNjM1NDlkMmVkMjE3NWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdWx0IGZyb20gJy4vUmVzdWx0JztcblxuY29uc3QgU3BlZWRvbWV0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NoZWNraW5nLCBzZXRJc0NoZWNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3RhcnRlZEF0LCBzZXRTdGFydGVkQXRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcnVuID0gKCkgPT4ge1xuICAgIHNldFN0YXJ0ZWRBdChudWxsKVxuICAgIHNldFJlc3VsdChudWxsKVxuXG4gICAgLy8g0JrQsNGA0YLQuNC90LrQsCwg0YXRgNCw0L3Rj9GJ0LDRj9GB0Y8g0L3QsCDQt9Cw0LzQtdC00LvQtdC90L3QvtC8INGB0LXRgNCy0LXRgNC1INGC0LLQuNGC0YLQtdGA0LAgKyDQvtCx0YXQvtC0INC60LXRiNC40YDQvtCy0LDQvdC40Y8g0LHRgNCw0YPQt9C10YDQvtC8XG4gICAgc2V0SW1nU3JjKGBodHRwczovL2Ficy50d2ltZy5jb20vc3RpY2t5L2lsbHVzdHJhdGlvbnMvbG9ocF8xMzAyeDk1NS5wbmc/bm9jYWNoZT0ke01hdGgucmFuZG9tKCl9YClcblxuICAgIHNldElzQ2hlY2tpbmcodHJ1ZSlcbiAgICBzZXRTdGFydGVkQXQoK25ldyBEYXRlKCkpXG4gIH1cblxuICBjb25zdCBvbkxvYWQgPSAoKSA9PiB7XG4gICAgc2V0SXNDaGVja2luZyhmYWxzZSlcbiAgICBzZXRSZXN1bHQoK25ldyBEYXRlKCkpXG4gIH1cblxuICBsZXQgY29udGVudCA9IChcbiAgICA8PlxuICAgICAgPHNwYW4+0J/QvtC10YXQsNC70LghPC9zcGFuPlxuICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01IG1sLTMgZmlsbC1jdXJyZW50XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvPlxuICApXG5cbiAgbGV0IGltZyA9IG51bGxcblxuICBpZiAoaXNDaGVja2luZykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8c3Bhbj7Qn9GA0L7QstC10YDRj9C10LwuLi48L3NwYW4+XG4gICAgKVxuXG4gICAgaW1nID0gPGltZyBzcmM9e2ltZ1NyY30gb25Mb2FkPXtvbkxvYWR9IHdpZHRoPXsxMDB9IC8+XG4gIH1cblxuICBsZXQgcmVzdWx0Q29udGVudCA9IG51bGxcblxuICBpZiAoIWlzQ2hlY2tpbmcgJiYgcmVzdWx0KSB7XG4gICAgcmVzdWx0Q29udGVudCA9IDxSZXN1bHQgc3RhcnRlZD17c3RhcnRlZEF0fSBlbmRlZD17cmVzdWx0fSAvPlxuICAgIGNvbnRlbnQgPSA8c3Bhbj7Qn9GA0L7QstC10YDQuNGC0Ywg0LXRidC1INGA0LDQtzwvc3Bhbj5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXN1bHRDb250ZW50fVxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBweC02IHRleHQtbGcgdGV4dC1wdXJwbGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgIGRpc2FibGVkPXtpc0NoZWNraW5nfVxuICAgICAgICBvbkNsaWNrPXtydW59XG4gICAgICA+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aW1nfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWRvbWV0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=
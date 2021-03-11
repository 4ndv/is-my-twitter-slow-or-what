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
  if (!isChecking && result) resultContent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Result__WEBPACK_IMPORTED_MODULE_2__["default"], {
    started: startedAt,
    ended: result
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 46
  }, _this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [resultContent, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "inline-flex items-center h-12 px-6 text-lg text-purple-100 transition-colors duration-150 bg-purple-600 hover:bg-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 disabled:opacity-50",
      disabled: isChecking,
      onClick: кгт,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlZG9tZXRlci5qcyJdLCJuYW1lcyI6WyJTcGVlZG9tZXRlciIsInVzZVN0YXRlIiwiaXNDaGVja2luZyIsInNldElzQ2hlY2tpbmciLCJpbWdTcmMiLCJzZXRJbWdTcmMiLCJzdGFydGVkQXQiLCJzZXRTdGFydGVkQXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJydW4iLCJNYXRoIiwicmFuZG9tIiwiRGF0ZSIsIm9uTG9hZCIsImNvbnRlbnQiLCJpbWciLCJvcGFjaXR5IiwicmVzdWx0Q29udGVudCIsItC60LPRgiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDakJDLFVBRGlCO0FBQUEsTUFDTEMsYUFESzs7QUFBQSxtQkFFSUYsc0RBQVEsQ0FBQyxJQUFELENBRlo7QUFBQSxNQUVqQkcsTUFGaUI7QUFBQSxNQUVUQyxTQUZTOztBQUFBLG1CQUdVSixzREFBUSxDQUFDLElBQUQsQ0FIbEI7QUFBQSxNQUdqQkssU0FIaUI7QUFBQSxNQUdOQyxZQUhNOztBQUFBLG1CQUlJTixzREFBUSxDQUFDLEtBQUQsQ0FKWjtBQUFBLE1BSWpCTyxNQUppQjtBQUFBLE1BSVRDLFNBSlM7O0FBTXhCLE1BQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEJILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLGFBQVMsQ0FBQyxJQUFELENBQVQsQ0FGZ0IsQ0FJaEI7O0FBQ0FKLGFBQVMsZ0ZBQXlFTSxJQUFJLENBQUNDLE1BQUwsRUFBekUsRUFBVDtBQUVBVCxpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBSSxnQkFBWSxDQUFDLENBQUMsSUFBSU0sSUFBSixFQUFGLENBQVo7QUFDRCxHQVREOztBQVdBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkJYLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FNLGFBQVMsQ0FBQyxDQUFDLElBQUlJLElBQUosRUFBRixDQUFUO0FBQ0QsR0FIRDs7QUFLQSxNQUFJRSxPQUFPLGdCQUNUO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLDJCQUFmO0FBQTJDLFVBQUksRUFBQyxNQUFoRDtBQUF1RCxZQUFNLEVBQUMsY0FBOUQ7QUFBNkUsYUFBTyxFQUFDLFdBQXJGO0FBQWlHLFdBQUssRUFBQyw0QkFBdkc7QUFBQSw2QkFBb0k7QUFBTSwwQkFBZSxPQUFyQjtBQUE2QixzQkFBYyxFQUFDLE9BQTVDO0FBQW9ELG1CQUFXLEVBQUMsR0FBaEU7QUFBb0UsU0FBQyxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7O0FBT0EsTUFBSUMsR0FBRyxHQUFHLElBQVY7O0FBRUEsTUFBSWQsVUFBSixFQUFnQjtBQUNkYSxXQUFPLGdCQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFJQUMsT0FBRyxnQkFBRztBQUFLLFNBQUcsRUFBRVosTUFBVjtBQUFrQixZQUFNLEVBQUVVLE1BQTFCO0FBQWtDLFdBQUssRUFBRSxDQUF6QztBQUE0QyxZQUFNLEVBQUUsQ0FBcEQ7QUFBdUQsV0FBSyxFQUFFO0FBQUVHLGVBQU8sRUFBRTtBQUFYO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUNEOztBQUVELE1BQUlDLGFBQWEsR0FBRyxJQUFwQjtBQUVBLE1BQUksQ0FBQ2hCLFVBQUQsSUFBZU0sTUFBbkIsRUFBMkJVLGFBQWEsZ0JBQUcscUVBQUMsK0NBQUQ7QUFBUSxXQUFPLEVBQUVaLFNBQWpCO0FBQTRCLFNBQUssRUFBRUU7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFoQjtBQUUzQixzQkFDRTtBQUFBLGVBQ0dVLGFBREgsZUFFRTtBQUNFLGVBQVMsRUFBQyx3T0FEWjtBQUVFLGNBQVEsRUFBRWhCLFVBRlo7QUFHRSxhQUFPLEVBQUVpQixHQUhYO0FBQUEsZ0JBS0dKO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBU0dDLEdBVEg7QUFBQSxrQkFERjtBQWFELENBeEREOztHQUFNaEIsVzs7S0FBQUEsVztBQTBEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWFjZjhkMzA4ZjUxMGI1MGUxMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9SZXN1bHQnO1xuXG5jb25zdCBTcGVlZG9tZXRlciA9ICgpID0+IHtcbiAgY29uc3QgW2lzQ2hlY2tpbmcsIHNldElzQ2hlY2tpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzdGFydGVkQXQsIHNldFN0YXJ0ZWRBdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBydW4gPSAoKSA9PiB7XG4gICAgc2V0U3RhcnRlZEF0KG51bGwpXG4gICAgc2V0UmVzdWx0KG51bGwpXG5cbiAgICAvLyDQmtCw0YDRgtC40L3QutCwLCDRhdGA0LDQvdGP0YnQsNGP0YHRjyDQvdCwINC30LDQvNC10LTQu9C10L3QvdC+0Lwg0YHQtdGA0LLQtdGA0LUg0YLQstC40YLRgtC10YDQsCArINC+0LHRhdC+0LQg0LrQtdGI0LjRgNC+0LLQsNC90LjRjyDQsdGA0LDRg9C30LXRgNC+0LxcbiAgICBzZXRJbWdTcmMoYGh0dHBzOi8vYWJzLnR3aW1nLmNvbS9zdGlja3kvaWxsdXN0cmF0aW9ucy9sb2hwXzEzMDJ4OTU1LnBuZz9ub2NhY2hlPSR7TWF0aC5yYW5kb20oKX1gKVxuXG4gICAgc2V0SXNDaGVja2luZyh0cnVlKVxuICAgIHNldFN0YXJ0ZWRBdCgrbmV3IERhdGUoKSlcbiAgfVxuXG4gIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcbiAgICBzZXRJc0NoZWNraW5nKGZhbHNlKVxuICAgIHNldFJlc3VsdCgrbmV3IERhdGUoKSlcbiAgfVxuXG4gIGxldCBjb250ZW50ID0gKFxuICAgIDw+XG4gICAgICA8c3Bhbj7Qn9C+0LXRhdCw0LvQuCE8L3NwYW4+XG4gICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTUgbWwtMyBmaWxsLWN1cnJlbnRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTE3IDhsNCA0bTAgMGwtNCA0bTQtNEgzXCI+PC9wYXRoPjwvc3ZnPlxuICAgIDwvPlxuICApXG5cbiAgbGV0IGltZyA9IG51bGxcblxuICBpZiAoaXNDaGVja2luZykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8c3Bhbj7Qn9GA0L7QstC10YDRj9C10LwuLi48L3NwYW4+XG4gICAgKVxuXG4gICAgaW1nID0gPGltZyBzcmM9e2ltZ1NyY30gb25Mb2FkPXtvbkxvYWR9IHdpZHRoPXsxfSBoZWlnaHQ9ezF9IHN0eWxlPXt7IG9wYWNpdHk6IDAuMSB9fSAvPlxuICB9XG5cbiAgbGV0IHJlc3VsdENvbnRlbnQgPSBudWxsXG5cbiAgaWYgKCFpc0NoZWNraW5nICYmIHJlc3VsdCkgcmVzdWx0Q29udGVudCA9IDxSZXN1bHQgc3RhcnRlZD17c3RhcnRlZEF0fSBlbmRlZD17cmVzdWx0fSAvPlxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtyZXN1bHRDb250ZW50fVxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgaC0xMiBweC02IHRleHQtbGcgdGV4dC1wdXJwbGUtMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCBiZy1wdXJwbGUtNjAwIGhvdmVyOmJnLXB1cnBsZS03MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHVycGxlLTYwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZGlzYWJsZWQ6b3BhY2l0eS01MFwiXG4gICAgICAgIGRpc2FibGVkPXtpc0NoZWNraW5nfVxuICAgICAgICBvbkNsaWNrPXvQutCz0YJ9XG4gICAgICA+XG4gICAgICAgIHtjb250ZW50fVxuICAgICAgPC9idXR0b24+XG4gICAgICB7aW1nfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlZWRvbWV0ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=
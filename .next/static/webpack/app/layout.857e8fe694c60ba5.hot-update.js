"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9783a568ad53\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzc5YTMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI5NzgzYTU2OGFkNTNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/nav/CartCount.tsx":
/*!******************************************!*\
  !*** ./app/components/nav/CartCount.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useCart */ \"(app-pages-browser)/./hooks/useCart.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _barrel_optimize_names_CiShoppingCart_react_icons_ci__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CiShoppingCart!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CartCount = ()=>{\n    _s();\n    const { cartTotalQty } = (0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_1__.useCart)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relavtive cursor-pointer\",\n        onClick: ()=>router.push(\"/cart\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-3xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiShoppingCart_react_icons_ci__WEBPACK_IMPORTED_MODULE_3__.CiShoppingCart, {}, void 0, false, {\n                    fileName: \"/Users/macbookpro/Desktop/E-CommerceShop/app/components/nav/CartCount.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/E-CommerceShop/app/components/nav/CartCount.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute top-[-0.75px] right-[1px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm\",\n                children: cartTotalQty\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/E-CommerceShop/app/components/nav/CartCount.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/E-CommerceShop/app/components/nav/CartCount.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CartCount, \"xCTGvIOMa6gxtsR2D3qCsAhxBQw=\", false, function() {\n    return [\n        _hooks_useCart__WEBPACK_IMPORTED_MODULE_1__.useCart,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CartCount;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartCount);\nvar _c;\n$RefreshReg$(_c, \"CartCount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdi9DYXJ0Q291bnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFMEM7QUFDRTtBQUNJO0FBRWhELE1BQU1HLFlBQVk7O0lBQ2hCLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdKLHVEQUFPQTtJQUNoQyxNQUFNSyxTQUFTSiwwREFBU0E7SUFDeEIscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVU7UUFDVkMsU0FBUyxJQUFNSCxPQUFPSSxJQUFJLENBQUM7OzBCQUUzQiw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNMLGdHQUFjQTs7Ozs7Ozs7OzswQkFFakIsOERBQUNRO2dCQUFLSCxXQUFVOzBCQUNiSDs7Ozs7Ozs7Ozs7O0FBSVQ7R0FoQk1EOztRQUNxQkgsbURBQU9BO1FBQ2pCQyxzREFBU0E7OztLQUZwQkU7QUFrQk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvbmF2L0NhcnRDb3VudC50c3g/MDQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICdAL2hvb2tzL3VzZUNhcnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IENpU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvY2knO1xuXG5jb25zdCBDYXJ0Q291bnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FydFRvdGFsUXR5IH0gPSB1c2VDYXJ0KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF2dGl2ZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2NhcnQnKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XG4gICAgICAgIDxDaVNob3BwaW5nQ2FydCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtWy0wLjc1cHhdIHJpZ2h0LVsxcHhdIGJnLXNsYXRlLTcwMCB0ZXh0LXdoaXRlIGgtNiB3LTYgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc21cIj5cbiAgICAgICAge2NhcnRUb3RhbFF0eX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRDb3VudDtcbiJdLCJuYW1lcyI6WyJ1c2VDYXJ0IiwidXNlUm91dGVyIiwiQ2lTaG9wcGluZ0NhcnQiLCJDYXJ0Q291bnQiLCJjYXJ0VG90YWxRdHkiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/nav/CartCount.tsx\n"));

/***/ })

});
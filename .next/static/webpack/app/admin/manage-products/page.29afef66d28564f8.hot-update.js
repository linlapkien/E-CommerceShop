"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/manage-products/page",{

/***/ "(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx":
/*!************************************************************!*\
  !*** ./app/admin/manage-products/ManageProductsClient.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    let rows = [];\n    if (products) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_1__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            initialState: {\n                pagination: {\n                    paginationModel: {\n                        page: 0,\n                        pageSize: 5\n                    }\n                }\n            },\n            pageSizeOptions: [\n                5,\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFHd0Q7QUFNeEQsTUFBTUMsdUJBQTREO1FBQUMsRUFDakVDLFFBQVEsRUFDVDtJQUNDLElBQUlDLE9BQVksRUFBRTtJQUVsQixJQUFJRCxVQUFVLENBQ2Q7SUFFQSxxQkFDRSw4REFBQ0U7a0JBQ0MsNEVBQUNKLHNEQUFRQTtZQUNQRyxNQUFNQTtZQUNORSxTQUFTQTtZQUNUQyxjQUFjO2dCQUNaQyxZQUFZO29CQUNWQyxpQkFBaUI7d0JBQUVDLE1BQU07d0JBQUdDLFVBQVU7b0JBQUU7Z0JBQzFDO1lBQ0Y7WUFDQUMsaUJBQWlCO2dCQUFDO2dCQUFHO2FBQUc7WUFDeEJDLGlCQUFpQjs7Ozs7Ozs7Ozs7QUFJekI7S0F2Qk1YO0FBeUJOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkbWluL21hbmFnZS1wcm9kdWN0cy9NYW5hZ2VQcm9kdWN0c0NsaWVudC50c3g/OTU2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZENvbERlZiB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xuXG5pbnRlcmZhY2UgTWFuYWdlUHJvZHVjdHNDbGllbnRQcm9wcyB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0O1xufVxuXG5jb25zdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDogUmVhY3QuRkM8TWFuYWdlUHJvZHVjdHNDbGllbnRQcm9wcz4gPSAoe1xuICBwcm9kdWN0cyxcbn0pID0+IHtcbiAgbGV0IHJvd3M6IGFueSA9IFtdO1xuXG4gIGlmIChwcm9kdWN0cykge1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERhdGFHcmlkXG4gICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGluaXRpYWxTdGF0ZT17e1xuICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlbDogeyBwYWdlOiAwLCBwYWdlU2l6ZTogNSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzUsIDEwXX1cbiAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDtcbiJdLCJuYW1lcyI6WyJEYXRhR3JpZCIsIk1hbmFnZVByb2R1Y3RzQ2xpZW50IiwicHJvZHVjdHMiLCJyb3dzIiwiZGl2IiwiY29sdW1ucyIsImluaXRpYWxTdGF0ZSIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uTW9kZWwiLCJwYWdlIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJjaGVja2JveFNlbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
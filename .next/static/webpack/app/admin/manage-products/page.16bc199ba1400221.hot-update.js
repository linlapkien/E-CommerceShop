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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    let rows = [];\n    if (products) {\n        rows = products.map((param)=>{\n            let { product } = param;\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            initialState: {\n                pagination: {\n                    paginationModel: {\n                        page: 0,\n                        pageSize: 5\n                    }\n                }\n            },\n            pageSizeOptions: [\n                5,\n                10\n            ],\n            checkboxSelection: true\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBR3dEO0FBQ047QUFNbEQsTUFBTUUsdUJBQTREO1FBQUMsRUFDakVDLFFBQVEsRUFDVDtJQUNDLElBQUlDLE9BQVksRUFBRTtJQUVsQixJQUFJRCxVQUFVO1FBQ1pDLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQztnQkFBQyxFQUFFQyxPQUFPLEVBQU87WUFDbkMsT0FBTztnQkFDTEMsSUFBSUQsUUFBUUMsRUFBRTtnQkFDZEMsTUFBTUYsUUFBUUUsSUFBSTtnQkFDbEJDLE9BQU9SLCtEQUFXQSxDQUFDSyxRQUFRRyxLQUFLO2dCQUNoQ0MsT0FBT0osUUFBUUksS0FBSztnQkFDcEJDLFNBQVNMLFFBQVFLLE9BQU87Z0JBQ3hCQyxRQUFRTixRQUFRTSxNQUFNO1lBQ3hCO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ2Isc0RBQVFBO1lBQ1BJLE1BQU1BO1lBQ05VLFNBQVNBO1lBQ1RDLGNBQWM7Z0JBQ1pDLFlBQVk7b0JBQ1ZDLGlCQUFpQjt3QkFBRUMsTUFBTTt3QkFBR0MsVUFBVTtvQkFBRTtnQkFDMUM7WUFDRjtZQUNBQyxpQkFBaUI7Z0JBQUM7Z0JBQUc7YUFBRztZQUN4QkMsaUJBQWlCOzs7Ozs7Ozs7OztBQUl6QjtLQWpDTW5CO0FBbUNOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkbWluL21hbmFnZS1wcm9kdWN0cy9NYW5hZ2VQcm9kdWN0c0NsaWVudC50c3g/OTU2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZENvbERlZiB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICdAL3V0aWxzL2Zvcm1hdFByaWNlJztcblxuaW50ZXJmYWNlIE1hbmFnZVByb2R1Y3RzQ2xpZW50UHJvcHMge1xuICBwcm9kdWN0czogUHJvZHVjdDtcbn1cblxuY29uc3QgTWFuYWdlUHJvZHVjdHNDbGllbnQ6IFJlYWN0LkZDPE1hbmFnZVByb2R1Y3RzQ2xpZW50UHJvcHM+ID0gKHtcbiAgcHJvZHVjdHMsXG59KSA9PiB7XG4gIGxldCByb3dzOiBhbnkgPSBbXTtcblxuICBpZiAocHJvZHVjdHMpIHtcbiAgICByb3dzID0gcHJvZHVjdHMubWFwKCh7IHByb2R1Y3QgfTogYW55KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICBwcmljZTogZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZSksXG4gICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICBpblN0b2NrOiBwcm9kdWN0LmluU3RvY2ssXG4gICAgICAgIGltYWdlczogcHJvZHVjdC5pbWFnZXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERhdGFHcmlkXG4gICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGluaXRpYWxTdGF0ZT17e1xuICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlbDogeyBwYWdlOiAwLCBwYWdlU2l6ZTogNSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzUsIDEwXX1cbiAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDtcbiJdLCJuYW1lcyI6WyJEYXRhR3JpZCIsImZvcm1hdFByaWNlIiwiTWFuYWdlUHJvZHVjdHNDbGllbnQiLCJwcm9kdWN0cyIsInJvd3MiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJuYW1lIiwicHJpY2UiLCJicmFuZCIsImluU3RvY2siLCJpbWFnZXMiLCJkaXYiLCJjb2x1bW5zIiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2UiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsImNoZWNrYm94U2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
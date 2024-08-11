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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MdCached,MdClose,MdDelete,MdDone,MdRemoveRedEye!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/ActionBtn */ \"(app-pages-browser)/./app/components/ActionBtn.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    let rows = [];\n    if (products) {\n        rows = Object.values(products).map((product)=>{\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                category: product.category,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdDone,\n                        bg: \"bg-teal-200\",\n                        color: \"text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"out of stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdClose,\n                        bg: \"bg-rose-200\",\n                        color: \"text-rose-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between gap-4 w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdCached,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdDelete,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdRemoveRedEye,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_6__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUd3RDtBQUNOO0FBQ0g7QUFDRjtBQVFyQjtBQUMyQjtBQU1uRCxNQUFNVSx1QkFBNEQ7UUFBQyxFQUNqRUMsUUFBUSxFQUNUO0lBQ0MsSUFBSUMsT0FBWSxFQUFFO0lBRWxCLElBQUlELFVBQVU7UUFDWkMsT0FBT0MsT0FBT0MsTUFBTSxDQUFDSCxVQUFVSSxHQUFHLENBQUMsQ0FBQ0M7WUFDbEMsT0FBTztnQkFDTEMsSUFBSUQsUUFBUUMsRUFBRTtnQkFDZEMsTUFBTUYsUUFBUUUsSUFBSTtnQkFDbEJDLE9BQU9sQiwrREFBV0EsQ0FBQ2UsUUFBUUcsS0FBSztnQkFDaENDLE9BQU9KLFFBQVFJLEtBQUs7Z0JBQ3BCQyxVQUFVTCxRQUFRSyxRQUFRO2dCQUMxQkMsU0FBU04sUUFBUU0sT0FBTztnQkFDeEJDLFFBQVFQLFFBQVFPLE1BQU07WUFDeEI7UUFDRjtJQUNGO0lBRUEsTUFBTUMsVUFBd0I7UUFDNUI7WUFBRUMsT0FBTztZQUFNQyxZQUFZO1lBQU1DLE9BQU87UUFBSTtRQUM1QztZQUFFRixPQUFPO1lBQVFDLFlBQVk7WUFBUUMsT0FBTztRQUFJO1FBQ2hEO1lBQ0VGLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFlBQVksQ0FBQ0M7Z0JBQ1gscUJBQ0UsOERBQUNDO29CQUFJQyxXQUFVOzhCQUE0QkYsT0FBT0csR0FBRyxDQUFDYixLQUFLOzs7Ozs7WUFFL0Q7UUFDRjtRQUNBO1lBQUVNLE9BQU87WUFBWUMsWUFBWTtZQUFZQyxPQUFPO1FBQUk7UUFDeEQ7WUFBRUYsT0FBTztZQUFTQyxZQUFZO1lBQVNDLE9BQU87UUFBSTtRQUNsRDtZQUNFRixPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxZQUFZLENBQUNDO2dCQUNYLHFCQUNFLDhEQUFDQzs4QkFDRUQsT0FBT0csR0FBRyxDQUFDVixPQUFPLElBQUkscUJBQ3JCLDhEQUFDbkIsOERBQU1BO3dCQUNMOEIsTUFBSzt3QkFDTEMsTUFBTTNCLHlIQUFNQTt3QkFDWjRCLElBQUc7d0JBQ0hDLE9BQU07Ozs7O2tEQUdSLDhEQUFDakMsOERBQU1BO3dCQUNMOEIsTUFBSzt3QkFDTEMsTUFBTTdCLDBIQUFPQTt3QkFDYjhCLElBQUc7d0JBQ0hDLE9BQU07Ozs7Ozs7Ozs7O1lBS2hCO1FBQ0Y7UUFDQTtZQUNFWCxPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxZQUFZLENBQUNDO2dCQUNYLHFCQUNFLDhEQUFDQztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUN0QixpRUFBU0E7NEJBQUN5QixNQUFNOUIsMkhBQVFBOzRCQUFFaUMsU0FBUyxLQUFPOzs7Ozs7c0NBQzNDLDhEQUFDNUIsaUVBQVNBOzRCQUFDeUIsTUFBTTVCLDJIQUFRQTs0QkFBRStCLFNBQVMsS0FBTzs7Ozs7O3NDQUMzQyw4REFBQzVCLGlFQUFTQTs0QkFBQ3lCLE1BQU0xQixpSUFBY0E7NEJBQUU2QixTQUFTLEtBQU87Ozs7Ozs7Ozs7OztZQUd2RDtRQUNGO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ1A7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDN0IsK0RBQU9BO29CQUFDb0MsT0FBTTtvQkFBa0JDLE1BQU07Ozs7Ozs7Ozs7OzBCQUV6Qyw4REFBQ1Q7Z0JBQUlVLE9BQU87b0JBQUVDLFFBQVE7b0JBQUtkLE9BQU87Z0JBQU87MEJBQ3ZDLDRFQUFDM0Isc0RBQVFBO29CQUNQWSxNQUFNQTtvQkFDTlksU0FBU0E7b0JBQ1RrQixjQUFjO3dCQUNaQyxZQUFZOzRCQUNWQyxpQkFBaUI7Z0NBQUVDLE1BQU07Z0NBQUdDLFVBQVU7NEJBQUU7d0JBQzFDO29CQUNGO29CQUNBQyxpQkFBaUI7d0JBQUM7d0JBQUc7cUJBQUc7b0JBQ3hCQyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzNCO0tBaEdNdEM7QUFrR04sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vbWFuYWdlLXByb2R1Y3RzL01hbmFnZVByb2R1Y3RzQ2xpZW50LnRzeD85NTY5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJ0AvdXRpbHMvZm9ybWF0UHJpY2UnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBTdGF0dXMgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9TdGF0dXMnO1xuaW1wb3J0IHtcbiAgTWRDYWNoZWQsXG4gIE1kQ2xvc2UsXG4gIE1kRGVsZXRlLFxuICBNZERvbmUsXG4gIE1kUmVtb3ZlLFxuICBNZFJlbW92ZVJlZEV5ZSxcbn0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IEFjdGlvbkJ0biBmcm9tICdAL2FwcC9jb21wb25lbnRzL0FjdGlvbkJ0bic7XG5cbmludGVyZmFjZSBNYW5hZ2VQcm9kdWN0c0NsaWVudFByb3BzIHtcbiAgcHJvZHVjdHM6IFByb2R1Y3Q7XG59XG5cbmNvbnN0IE1hbmFnZVByb2R1Y3RzQ2xpZW50OiBSZWFjdC5GQzxNYW5hZ2VQcm9kdWN0c0NsaWVudFByb3BzPiA9ICh7XG4gIHByb2R1Y3RzLFxufSkgPT4ge1xuICBsZXQgcm93czogYW55ID0gW107XG5cbiAgaWYgKHByb2R1Y3RzKSB7XG4gICAgcm93cyA9IE9iamVjdC52YWx1ZXMocHJvZHVjdHMpLm1hcCgocHJvZHVjdDogYW55KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICBwcmljZTogZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZSksXG4gICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICBjYXRlZ29yeTogcHJvZHVjdC5jYXRlZ29yeSxcbiAgICAgICAgaW5TdG9jazogcHJvZHVjdC5pblN0b2NrLFxuICAgICAgICBpbWFnZXM6IHByb2R1Y3QuaW1hZ2VzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcbiAgICB7IGZpZWxkOiAnaWQnLCBoZWFkZXJOYW1lOiAnSUQnLCB3aWR0aDogMjIwIH0sXG4gICAgeyBmaWVsZDogJ25hbWUnLCBoZWFkZXJOYW1lOiAnTmFtZScsIHdpZHRoOiAyMjAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGhlYWRlck5hbWU6ICdQcmljZShVU0QpJyxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS04MDBcIj57cGFyYW1zLnJvdy5wcmljZX08L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGZpZWxkOiAnY2F0ZWdvcnknLCBoZWFkZXJOYW1lOiAnQ2F0ZWdvcnknLCB3aWR0aDogMTAwIH0sXG4gICAgeyBmaWVsZDogJ2JyYW5kJywgaGVhZGVyTmFtZTogJ0JyYW5kJywgd2lkdGg6IDEwMCB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAnaW5TdG9jaycsXG4gICAgICBoZWFkZXJOYW1lOiAnaW5TdG9jaycsXG4gICAgICB3aWR0aDogMTIwLFxuICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cGFyYW1zLnJvdy5pblN0b2NrID09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxTdGF0dXNcbiAgICAgICAgICAgICAgICB0ZXh0PVwiaW4gc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kRG9uZX1cbiAgICAgICAgICAgICAgICBiZz1cImJnLXRlYWwtMjAwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtdGVhbC03MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFN0YXR1c1xuICAgICAgICAgICAgICAgIHRleHQ9XCJvdXQgb2Ygc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kQ2xvc2V9XG4gICAgICAgICAgICAgICAgYmc9XCJiZy1yb3NlLTIwMFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LXJvc2UtNzAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdhY3Rpb24nLFxuICAgICAgaGVhZGVyTmFtZTogJ0FjdGlvbnMnLFxuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC00IHctZnVsbFwiPlxuICAgICAgICAgICAgPEFjdGlvbkJ0biBpY29uPXtNZENhY2hlZH0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnRuIGljb249e01kRGVsZXRlfSBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdG4gaWNvbj17TWRSZW1vdmVSZWRFeWV9IG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTE1MHB4XSBtLWF1dG8gdGV4dC14bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG10LThcIj5cbiAgICAgICAgPEhlYWRpbmcgdGl0bGU9XCJNYW5hZ2UgUHJvZHVjdHNcIiBjZW50ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgPERhdGFHcmlkXG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgIGluaXRpYWxTdGF0ZT17e1xuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHsgcGFnZTogMCwgcGFnZVNpemU6IDkgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s5LCAyMF19XG4gICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlUHJvZHVjdHNDbGllbnQ7XG4iXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJmb3JtYXRQcmljZSIsIkhlYWRpbmciLCJTdGF0dXMiLCJNZENhY2hlZCIsIk1kQ2xvc2UiLCJNZERlbGV0ZSIsIk1kRG9uZSIsIk1kUmVtb3ZlUmVkRXllIiwiQWN0aW9uQnRuIiwiTWFuYWdlUHJvZHVjdHNDbGllbnQiLCJwcm9kdWN0cyIsInJvd3MiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJuYW1lIiwicHJpY2UiLCJicmFuZCIsImNhdGVnb3J5IiwiaW5TdG9jayIsImltYWdlcyIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsInJlbmRlckNlbGwiLCJwYXJhbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJyb3ciLCJ0ZXh0IiwiaWNvbiIsImJnIiwiY29sb3IiLCJvbkNsaWNrIiwidGl0bGUiLCJjZW50ZXIiLCJzdHlsZSIsImhlaWdodCIsImluaXRpYWxTdGF0ZSIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uTW9kZWwiLCJwYWdlIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJjaGVja2JveFNlbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
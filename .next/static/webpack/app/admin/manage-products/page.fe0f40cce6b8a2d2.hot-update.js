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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    let rows = [];\n    if (products) {\n        rows = Object.values(products).map((product)=>{\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                category: product.category,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: MdDone,\n                        bg: \"bg-teal-200\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 15\n                    }, undefined) : \"out of stock\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Action\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 16\n                }, undefined);\n            }\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHd0Q7QUFDTjtBQUNIO0FBQ0Y7QUFNN0MsTUFBTUksdUJBQTREO1FBQUMsRUFDakVDLFFBQVEsRUFDVDtJQUNDLElBQUlDLE9BQVksRUFBRTtJQUVsQixJQUFJRCxVQUFVO1FBQ1pDLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQ0gsVUFBVUksR0FBRyxDQUFDLENBQUNDO1lBQ2xDLE9BQU87Z0JBQ0xDLElBQUlELFFBQVFDLEVBQUU7Z0JBQ2RDLE1BQU1GLFFBQVFFLElBQUk7Z0JBQ2xCQyxPQUFPWiwrREFBV0EsQ0FBQ1MsUUFBUUcsS0FBSztnQkFDaENDLE9BQU9KLFFBQVFJLEtBQUs7Z0JBQ3BCQyxVQUFVTCxRQUFRSyxRQUFRO2dCQUMxQkMsU0FBU04sUUFBUU0sT0FBTztnQkFDeEJDLFFBQVFQLFFBQVFPLE1BQU07WUFDeEI7UUFDRjtJQUNGO0lBRUEsTUFBTUMsVUFBd0I7UUFDNUI7WUFBRUMsT0FBTztZQUFNQyxZQUFZO1lBQU1DLE9BQU87UUFBSTtRQUM1QztZQUFFRixPQUFPO1lBQVFDLFlBQVk7WUFBUUMsT0FBTztRQUFJO1FBQ2hEO1lBQ0VGLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFlBQVksQ0FBQ0M7Z0JBQ1gscUJBQ0UsOERBQUNDO29CQUFJQyxXQUFVOzhCQUE0QkYsT0FBT0csR0FBRyxDQUFDYixLQUFLOzs7Ozs7WUFFL0Q7UUFDRjtRQUNBO1lBQUVNLE9BQU87WUFBWUMsWUFBWTtZQUFZQyxPQUFPO1FBQUk7UUFDeEQ7WUFBRUYsT0FBTztZQUFTQyxZQUFZO1lBQVNDLE9BQU87UUFBSTtRQUNsRDtZQUNFRixPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxZQUFZLENBQUNDO2dCQUNYLHFCQUNFLDhEQUFDQzs4QkFDRUQsT0FBT0csR0FBRyxDQUFDVixPQUFPLElBQUkscUJBQ3JCLDhEQUFDYiw4REFBTUE7d0JBQUN3QixNQUFLO3dCQUFXQyxNQUFNQzt3QkFBUUMsSUFBRzs7Ozs7b0NBRXpDOzs7Ozs7WUFJUjtRQUNGO1FBQ0E7WUFDRVgsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWSxDQUFDQztnQkFDWCxxQkFBTyw4REFBQ0M7OEJBQUk7Ozs7OztZQUNkO1FBQ0Y7S0FDRDtJQUVELHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN2QiwrREFBT0E7b0JBQUM2QixPQUFNO29CQUFrQkMsTUFBTTs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDUjtnQkFBSVMsT0FBTztvQkFBRUMsUUFBUTtvQkFBS2IsT0FBTztnQkFBTzswQkFDdkMsNEVBQUNyQixzREFBUUE7b0JBQ1BNLE1BQU1BO29CQUNOWSxTQUFTQTtvQkFDVGlCLGNBQWM7d0JBQ1pDLFlBQVk7NEJBQ1ZDLGlCQUFpQjtnQ0FBRUMsTUFBTTtnQ0FBR0MsVUFBVTs0QkFBRTt3QkFDMUM7b0JBQ0Y7b0JBQ0FDLGlCQUFpQjt3QkFBQzt3QkFBRztxQkFBRztvQkFDeEJDLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7S0FoRk1yQztBQWtGTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4Pzk1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRDb2xEZWYgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnQC91dGlscy9mb3JtYXRQcmljZSc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IFN0YXR1cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1N0YXR1cyc7XG5cbmludGVyZmFjZSBNYW5hZ2VQcm9kdWN0c0NsaWVudFByb3BzIHtcbiAgcHJvZHVjdHM6IFByb2R1Y3Q7XG59XG5cbmNvbnN0IE1hbmFnZVByb2R1Y3RzQ2xpZW50OiBSZWFjdC5GQzxNYW5hZ2VQcm9kdWN0c0NsaWVudFByb3BzPiA9ICh7XG4gIHByb2R1Y3RzLFxufSkgPT4ge1xuICBsZXQgcm93czogYW55ID0gW107XG5cbiAgaWYgKHByb2R1Y3RzKSB7XG4gICAgcm93cyA9IE9iamVjdC52YWx1ZXMocHJvZHVjdHMpLm1hcCgocHJvZHVjdDogYW55KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICBwcmljZTogZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZSksXG4gICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICBjYXRlZ29yeTogcHJvZHVjdC5jYXRlZ29yeSxcbiAgICAgICAgaW5TdG9jazogcHJvZHVjdC5pblN0b2NrLFxuICAgICAgICBpbWFnZXM6IHByb2R1Y3QuaW1hZ2VzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcbiAgICB7IGZpZWxkOiAnaWQnLCBoZWFkZXJOYW1lOiAnSUQnLCB3aWR0aDogMjIwIH0sXG4gICAgeyBmaWVsZDogJ25hbWUnLCBoZWFkZXJOYW1lOiAnTmFtZScsIHdpZHRoOiAyMjAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGhlYWRlck5hbWU6ICdQcmljZShVU0QpJyxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS04MDBcIj57cGFyYW1zLnJvdy5wcmljZX08L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGZpZWxkOiAnY2F0ZWdvcnknLCBoZWFkZXJOYW1lOiAnQ2F0ZWdvcnknLCB3aWR0aDogMTAwIH0sXG4gICAgeyBmaWVsZDogJ2JyYW5kJywgaGVhZGVyTmFtZTogJ0JyYW5kJywgd2lkdGg6IDEwMCB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAnaW5TdG9jaycsXG4gICAgICBoZWFkZXJOYW1lOiAnaW5TdG9jaycsXG4gICAgICB3aWR0aDogMTIwLFxuICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cGFyYW1zLnJvdy5pblN0b2NrID09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxTdGF0dXMgdGV4dD1cImluIHN0b2NrXCIgaWNvbj17TWREb25lfSBiZz1cImJnLXRlYWwtMjAwXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICdvdXQgb2Ygc3RvY2snXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAnYWN0aW9uJyxcbiAgICAgIGhlYWRlck5hbWU6ICdBY3Rpb25zJyxcbiAgICAgIHdpZHRoOiAyMDAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiA8ZGl2PkFjdGlvbjwvZGl2PjtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzExNTBweF0gbS1hdXRvIHRleHQteGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBtdC04XCI+XG4gICAgICAgIDxIZWFkaW5nIHRpdGxlPVwiTWFuYWdlIFByb2R1Y3RzXCIgY2VudGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBpbml0aWFsU3RhdGU9e3tcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGVsOiB7IHBhZ2U6IDAsIHBhZ2VTaXplOiA5IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbOSwgMjBdfVxuICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZVByb2R1Y3RzQ2xpZW50O1xuIl0sIm5hbWVzIjpbIkRhdGFHcmlkIiwiZm9ybWF0UHJpY2UiLCJIZWFkaW5nIiwiU3RhdHVzIiwiTWFuYWdlUHJvZHVjdHNDbGllbnQiLCJwcm9kdWN0cyIsInJvd3MiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJuYW1lIiwicHJpY2UiLCJicmFuZCIsImNhdGVnb3J5IiwiaW5TdG9jayIsImltYWdlcyIsImNvbHVtbnMiLCJmaWVsZCIsImhlYWRlck5hbWUiLCJ3aWR0aCIsInJlbmRlckNlbGwiLCJwYXJhbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJyb3ciLCJ0ZXh0IiwiaWNvbiIsIk1kRG9uZSIsImJnIiwidGl0bGUiLCJjZW50ZXIiLCJzdHlsZSIsImhlaWdodCIsImluaXRpYWxTdGF0ZSIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uTW9kZWwiLCJwYWdlIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJjaGVja2JveFNlbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
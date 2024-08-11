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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=MdCached,MdClose,MdDelete,MdDone,MdRemoveRedEye!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/ActionBtn */ \"(app-pages-browser)/./app/components/ActionBtn.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    let rows = [];\n    if (products) {\n        rows = Object.values(products).map((product)=>{\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                category: product.category,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3\",\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdDone,\n                        bg: \"bg-teal-200\",\n                        color: \"text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"out of stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdClose,\n                        bg: \"bg-rose-200\",\n                        color: \"text-rose-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between gap-4 w-full mt-2.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdCached,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdDelete,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdRemoveRedEye,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    ];\n    const handleToggleStock = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, inStock)=>{\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"/api/product\", {\n            id,\n            inStock: !inStock\n        }).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product status changed\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Oops! something went wrong\");\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true,\n                    disableRowSelectionOnClick: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageProductsClient, \"HzXk3yXwl0dpoLXZWBGD+QlfYgI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUd3RDtBQUNOO0FBQ0g7QUFDRjtBQU9yQjtBQUMyQjtBQUNmO0FBQ1Y7QUFDVTtBQUNRO0FBTTVDLE1BQU1jLHVCQUE0RDtRQUFDLEVBQ2pFQyxRQUFRLEVBQ1Q7O0lBQ0MsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLElBQUlJLE9BQVksRUFBRTtJQUVsQixJQUFJRixVQUFVO1FBQ1pFLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVUssR0FBRyxDQUFDLENBQUNDO1lBQ2xDLE9BQU87Z0JBQ0xDLElBQUlELFFBQVFDLEVBQUU7Z0JBQ2RDLE1BQU1GLFFBQVFFLElBQUk7Z0JBQ2xCQyxPQUFPdkIsK0RBQVdBLENBQUNvQixRQUFRRyxLQUFLO2dCQUNoQ0MsT0FBT0osUUFBUUksS0FBSztnQkFDcEJDLFVBQVVMLFFBQVFLLFFBQVE7Z0JBQzFCQyxTQUFTTixRQUFRTSxPQUFPO2dCQUN4QkMsUUFBUVAsUUFBUU8sTUFBTTtZQUN4QjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxVQUF3QjtRQUM1QjtZQUFFQyxPQUFPO1lBQU1DLFlBQVk7WUFBTUMsT0FBTztRQUFJO1FBQzVDO1lBQUVGLE9BQU87WUFBUUMsWUFBWTtZQUFRQyxPQUFPO1FBQUk7UUFDaEQ7WUFDRUYsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWSxDQUFDQztnQkFDWCxxQkFDRSw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQTRCRixPQUFPRyxHQUFHLENBQUNiLEtBQUs7Ozs7OztZQUUvRDtRQUNGO1FBQ0E7WUFBRU0sT0FBTztZQUFZQyxZQUFZO1lBQVlDLE9BQU87UUFBSTtRQUN4RDtZQUFFRixPQUFPO1lBQVNDLFlBQVk7WUFBU0MsT0FBTztRQUFJO1FBQ2xEO1lBQ0VGLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFlBQVksQ0FBQ0M7Z0JBQ1gscUJBQ0UsOERBQUNDO29CQUFJQyxXQUFVOzhCQUNaRixPQUFPRyxHQUFHLENBQUNWLE9BQU8sSUFBSSxxQkFDckIsOERBQUN4Qiw4REFBTUE7d0JBQ0xtQyxNQUFLO3dCQUNMQyxNQUFNaEMseUhBQU1BO3dCQUNaaUMsSUFBRzt3QkFDSEMsT0FBTTs7Ozs7a0RBR1IsOERBQUN0Qyw4REFBTUE7d0JBQ0xtQyxNQUFLO3dCQUNMQyxNQUFNbEMsMEhBQU9BO3dCQUNibUMsSUFBRzt3QkFDSEMsT0FBTTs7Ozs7Ozs7Ozs7WUFLaEI7UUFDRjtRQUNBO1lBQ0VYLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFlBQVksQ0FBQ0M7Z0JBQ1gscUJBQ0UsOERBQUNDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQzNCLGlFQUFTQTs0QkFBQzhCLE1BQU1uQywySEFBUUE7NEJBQUVzQyxTQUFTLEtBQU87Ozs7OztzQ0FDM0MsOERBQUNqQyxpRUFBU0E7NEJBQUM4QixNQUFNakMsMkhBQVFBOzRCQUFFb0MsU0FBUyxLQUFPOzs7Ozs7c0NBQzNDLDhEQUFDakMsaUVBQVNBOzRCQUFDOEIsTUFBTS9CLGlJQUFjQTs0QkFBRWtDLFNBQVMsS0FBTzs7Ozs7Ozs7Ozs7O1lBR3ZEO1FBQ0Y7S0FDRDtJQUVELE1BQU1DLG9CQUFvQmpDLGtEQUFXQSxDQUFDLENBQUNZLElBQVlLO1FBQ2pEaEIsNkNBQUtBLENBQ0ZpQyxHQUFHLENBQUMsZ0JBQWdCO1lBQ25CdEI7WUFDQUssU0FBUyxDQUFDQTtRQUNaLEdBQ0NrQixJQUFJLENBQUMsQ0FBQ0M7WUFDTGxDLHVEQUFLQSxDQUFDbUMsT0FBTyxDQUFDO1lBQ2QvQixPQUFPZ0MsT0FBTztRQUNoQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7WUFDTnRDLHVEQUFLQSxDQUFDdUMsS0FBSyxDQUFDO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2hCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2xDLCtEQUFPQTtvQkFBQ2tELE9BQU07b0JBQWtCQyxNQUFNOzs7Ozs7Ozs7OzswQkFFekMsOERBQUNsQjtnQkFBSW1CLE9BQU87b0JBQUVDLFFBQVE7b0JBQUt2QixPQUFPO2dCQUFPOzBCQUN2Qyw0RUFBQ2hDLHVEQUFRQTtvQkFDUGlCLE1BQU1BO29CQUNOWSxTQUFTQTtvQkFDVDJCLGNBQWM7d0JBQ1pDLFlBQVk7NEJBQ1ZDLGlCQUFpQjtnQ0FBRUMsTUFBTTtnQ0FBR0MsVUFBVTs0QkFBRTt3QkFDMUM7b0JBQ0Y7b0JBQ0FDLGlCQUFpQjt3QkFBQzt3QkFBRztxQkFBRztvQkFDeEJDLGlCQUFpQjtvQkFDakJDLDBCQUEwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEM7R0FqSE1qRDs7UUFHV0Qsc0RBQVNBOzs7S0FIcEJDO0FBbUhOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FkbWluL21hbmFnZS1wcm9kdWN0cy9NYW5hZ2VQcm9kdWN0c0NsaWVudC50c3g/OTU2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZENvbERlZiB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICdAL3V0aWxzL2Zvcm1hdFByaWNlJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSGVhZGluZyc7XG5pbXBvcnQgU3RhdHVzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvU3RhdHVzJztcbmltcG9ydCB7XG4gIE1kQ2FjaGVkLFxuICBNZENsb3NlLFxuICBNZERlbGV0ZSxcbiAgTWREb25lLFxuICBNZFJlbW92ZVJlZEV5ZSxcbn0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IEFjdGlvbkJ0biBmcm9tICdAL2FwcC9jb21wb25lbnRzL0FjdGlvbkJ0bic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdG9hc3QgZnJvbSAncmVhY3QtaG90LXRvYXN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cbmludGVyZmFjZSBNYW5hZ2VQcm9kdWN0c0NsaWVudFByb3BzIHtcbiAgcHJvZHVjdHM6IFByb2R1Y3Q7XG59XG5cbmNvbnN0IE1hbmFnZVByb2R1Y3RzQ2xpZW50OiBSZWFjdC5GQzxNYW5hZ2VQcm9kdWN0c0NsaWVudFByb3BzPiA9ICh7XG4gIHByb2R1Y3RzLFxufSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHJvd3M6IGFueSA9IFtdO1xuXG4gIGlmIChwcm9kdWN0cykge1xuICAgIHJvd3MgPSBPYmplY3QudmFsdWVzKHByb2R1Y3RzKS5tYXAoKHByb2R1Y3Q6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgIG5hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgcHJpY2U6IGZvcm1hdFByaWNlKHByb2R1Y3QucHJpY2UpLFxuICAgICAgICBicmFuZDogcHJvZHVjdC5icmFuZCxcbiAgICAgICAgY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnksXG4gICAgICAgIGluU3RvY2s6IHByb2R1Y3QuaW5TdG9jayxcbiAgICAgICAgaW1hZ2VzOiBwcm9kdWN0LmltYWdlcyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjb2x1bW5zOiBHcmlkQ29sRGVmW10gPSBbXG4gICAgeyBmaWVsZDogJ2lkJywgaGVhZGVyTmFtZTogJ0lEJywgd2lkdGg6IDIyMCB9LFxuICAgIHsgZmllbGQ6ICduYW1lJywgaGVhZGVyTmFtZTogJ05hbWUnLCB3aWR0aDogMjIwIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdwcmljZScsXG4gICAgICBoZWFkZXJOYW1lOiAnUHJpY2UoVVNEKScsXG4gICAgICB3aWR0aDogMTAwLFxuICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc2xhdGUtODAwXCI+e3BhcmFtcy5yb3cucHJpY2V9PC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgeyBmaWVsZDogJ2NhdGVnb3J5JywgaGVhZGVyTmFtZTogJ0NhdGVnb3J5Jywgd2lkdGg6IDEwMCB9LFxuICAgIHsgZmllbGQ6ICdicmFuZCcsIGhlYWRlck5hbWU6ICdCcmFuZCcsIHdpZHRoOiAxMDAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ2luU3RvY2snLFxuICAgICAgaGVhZGVyTmFtZTogJ2luU3RvY2snLFxuICAgICAgd2lkdGg6IDEyMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIHtwYXJhbXMucm93LmluU3RvY2sgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPFN0YXR1c1xuICAgICAgICAgICAgICAgIHRleHQ9XCJpbiBzdG9ja1wiXG4gICAgICAgICAgICAgICAgaWNvbj17TWREb25lfVxuICAgICAgICAgICAgICAgIGJnPVwiYmctdGVhbC0yMDBcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC10ZWFsLTcwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U3RhdHVzXG4gICAgICAgICAgICAgICAgdGV4dD1cIm91dCBvZiBzdG9ja1wiXG4gICAgICAgICAgICAgICAgaWNvbj17TWRDbG9zZX1cbiAgICAgICAgICAgICAgICBiZz1cImJnLXJvc2UtMjAwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtcm9zZS03MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ2FjdGlvbicsXG4gICAgICBoZWFkZXJOYW1lOiAnQWN0aW9ucycsXG4gICAgICB3aWR0aDogMjAwLFxuICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgdy1mdWxsIG10LTIuNVwiPlxuICAgICAgICAgICAgPEFjdGlvbkJ0biBpY29uPXtNZENhY2hlZH0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnRuIGljb249e01kRGVsZXRlfSBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdG4gaWNvbj17TWRSZW1vdmVSZWRFeWV9IG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVN0b2NrID0gdXNlQ2FsbGJhY2soKGlkOiBzdHJpbmcsIGluU3RvY2s6IGJvb2xlYW4pID0+IHtcbiAgICBheGlvc1xuICAgICAgLnB1dCgnL2FwaS9wcm9kdWN0Jywge1xuICAgICAgICBpZCxcbiAgICAgICAgaW5TdG9jazogIWluU3RvY2ssXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdQcm9kdWN0IHN0YXR1cyBjaGFuZ2VkJyk7XG4gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdG9hc3QuZXJyb3IoJ09vcHMhIHNvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTE1MHB4XSBtLWF1dG8gdGV4dC14bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG10LThcIj5cbiAgICAgICAgPEhlYWRpbmcgdGl0bGU9XCJNYW5hZ2UgUHJvZHVjdHNcIiBjZW50ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgPERhdGFHcmlkXG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgIGluaXRpYWxTdGF0ZT17e1xuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHsgcGFnZTogMCwgcGFnZVNpemU6IDkgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s5LCAyMF19XG4gICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgICAgICBkaXNhYmxlUm93U2VsZWN0aW9uT25DbGlja1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDtcbiJdLCJuYW1lcyI6WyJEYXRhR3JpZCIsImZvcm1hdFByaWNlIiwiSGVhZGluZyIsIlN0YXR1cyIsIk1kQ2FjaGVkIiwiTWRDbG9zZSIsIk1kRGVsZXRlIiwiTWREb25lIiwiTWRSZW1vdmVSZWRFeWUiLCJBY3Rpb25CdG4iLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJNYW5hZ2VQcm9kdWN0c0NsaWVudCIsInByb2R1Y3RzIiwicm91dGVyIiwicm93cyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb2R1Y3QiLCJpZCIsIm5hbWUiLCJwcmljZSIsImJyYW5kIiwiY2F0ZWdvcnkiLCJpblN0b2NrIiwiaW1hZ2VzIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsImRpdiIsImNsYXNzTmFtZSIsInJvdyIsInRleHQiLCJpY29uIiwiYmciLCJjb2xvciIsIm9uQ2xpY2siLCJoYW5kbGVUb2dnbGVTdG9jayIsInB1dCIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwicmVmcmVzaCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJ0aXRsZSIsImNlbnRlciIsInN0eWxlIiwiaGVpZ2h0IiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2UiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsImNoZWNrYm94U2VsZWN0aW9uIiwiZGlzYWJsZVJvd1NlbGVjdGlvbk9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
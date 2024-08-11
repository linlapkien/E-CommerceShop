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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=MdCached,MdClose,MdDelete,MdDone,MdRemoveRedEye!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/ActionBtn */ \"(app-pages-browser)/./app/components/ActionBtn.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    let rows = [];\n    if (products) {\n        rows = Object.values(products).map((product)=>{\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                category: product.category,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3\",\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdDone,\n                        bg: \"bg-teal-200\",\n                        color: \"text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"out of stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdClose,\n                        bg: \"bg-rose-200\",\n                        color: \"text-rose-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between gap-4 w-full mt-2.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdCached,\n                            onClick: ()=>{\n                                handleToggleStock(params.row.id, params.row.inStock);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdDelete,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdRemoveRedEye,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    ];\n    // handle toggle inStock of product inStock<->outStock\n    const handleToggleStock = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, inStock)=>{\n        // create PUT method in api/product/route\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"/api/product\", {\n            id,\n            inStock: !inStock\n        }).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product status changed\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Oops! Something went wrong\");\n            console.log(err);\n        });\n    }, []);\n    // handle Delete action button\n    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, images)=>{\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Deleting product, please wait!\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_10__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true,\n                    disableRowSelectionOnClick: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageProductsClient, \"Bs/DWU6BfBZIVO36UGPTFj55MUE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUd3RDtBQUNOO0FBQ0g7QUFDRjtBQU9yQjtBQUMyQjtBQUNmO0FBQ1Y7QUFDVTtBQUNRO0FBTTVDLE1BQU1jLHVCQUE0RDtRQUFDLEVBQ2pFQyxRQUFRLEVBQ1Q7O0lBQ0MsTUFBTUMsU0FBU0gsMERBQVNBO0lBQ3hCLElBQUlJLE9BQVksRUFBRTtJQUVsQixJQUFJRixVQUFVO1FBQ1pFLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQ0osVUFBVUssR0FBRyxDQUFDLENBQUNDO1lBQ2xDLE9BQU87Z0JBQ0xDLElBQUlELFFBQVFDLEVBQUU7Z0JBQ2RDLE1BQU1GLFFBQVFFLElBQUk7Z0JBQ2xCQyxPQUFPdkIsK0RBQVdBLENBQUNvQixRQUFRRyxLQUFLO2dCQUNoQ0MsT0FBT0osUUFBUUksS0FBSztnQkFDcEJDLFVBQVVMLFFBQVFLLFFBQVE7Z0JBQzFCQyxTQUFTTixRQUFRTSxPQUFPO2dCQUN4QkMsUUFBUVAsUUFBUU8sTUFBTTtZQUN4QjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxVQUF3QjtRQUM1QjtZQUFFQyxPQUFPO1lBQU1DLFlBQVk7WUFBTUMsT0FBTztRQUFJO1FBQzVDO1lBQUVGLE9BQU87WUFBUUMsWUFBWTtZQUFRQyxPQUFPO1FBQUk7UUFDaEQ7WUFDRUYsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWSxDQUFDQztnQkFDWCxxQkFDRSw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQTRCRixPQUFPRyxHQUFHLENBQUNiLEtBQUs7Ozs7OztZQUUvRDtRQUNGO1FBQ0E7WUFBRU0sT0FBTztZQUFZQyxZQUFZO1lBQVlDLE9BQU87UUFBSTtRQUN4RDtZQUFFRixPQUFPO1lBQVNDLFlBQVk7WUFBU0MsT0FBTztRQUFJO1FBQ2xEO1lBQ0VGLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFlBQVksQ0FBQ0M7Z0JBQ1gscUJBQ0UsOERBQUNDO29CQUFJQyxXQUFVOzhCQUNaRixPQUFPRyxHQUFHLENBQUNWLE9BQU8sSUFBSSxxQkFDckIsOERBQUN4Qiw4REFBTUE7d0JBQ0xtQyxNQUFLO3dCQUNMQyxNQUFNaEMseUhBQU1BO3dCQUNaaUMsSUFBRzt3QkFDSEMsT0FBTTs7Ozs7a0RBR1IsOERBQUN0Qyw4REFBTUE7d0JBQ0xtQyxNQUFLO3dCQUNMQyxNQUFNbEMsMEhBQU9BO3dCQUNibUMsSUFBRzt3QkFDSEMsT0FBTTs7Ozs7Ozs7Ozs7WUFLaEI7UUFDRjtRQUNBO1lBQ0VYLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFlBQVksQ0FBQ0M7Z0JBQ1gscUJBQ0UsOERBQUNDO29CQUFJQyxXQUFVOztzQ0FFYiw4REFBQzNCLGlFQUFTQTs0QkFDUjhCLE1BQU1uQywySEFBUUE7NEJBQ2RzQyxTQUFTO2dDQUNQQyxrQkFBa0JULE9BQU9HLEdBQUcsQ0FBQ2YsRUFBRSxFQUFFWSxPQUFPRyxHQUFHLENBQUNWLE9BQU87NEJBQ3JEOzs7Ozs7c0NBRUYsOERBQUNsQixpRUFBU0E7NEJBQUM4QixNQUFNakMsMkhBQVFBOzRCQUFFb0MsU0FBUyxLQUFPOzs7Ozs7c0NBQzNDLDhEQUFDakMsaUVBQVNBOzRCQUFDOEIsTUFBTS9CLGlJQUFjQTs0QkFBRWtDLFNBQVMsS0FBTzs7Ozs7Ozs7Ozs7O1lBR3ZEO1FBQ0Y7S0FDRDtJQUVELHNEQUFzRDtJQUN0RCxNQUFNQyxvQkFBb0JqQyxrREFBV0EsQ0FBQyxDQUFDWSxJQUFZSztRQUNqRCx5Q0FBeUM7UUFDekNoQiw2Q0FBS0EsQ0FDRmlDLEdBQUcsQ0FBQyxnQkFBZ0I7WUFDbkJ0QjtZQUNBSyxTQUFTLENBQUNBO1FBQ1osR0FDQ2tCLElBQUksQ0FBQyxDQUFDQztZQUNMbEMsdURBQUtBLENBQUNtQyxPQUFPLENBQUM7WUFDZC9CLE9BQU9nQyxPQUFPO1FBQ2hCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOdEMsdURBQUtBLENBQUN1QyxLQUFLLENBQUM7WUFDWkMsUUFBUUMsR0FBRyxDQUFDSDtRQUNkO0lBQ0osR0FBRyxFQUFFO0lBRUwsOEJBQThCO0lBQzlCLE1BQU1JLGVBQWU1QyxrREFBV0EsQ0FBQyxDQUFDWSxJQUFZTTtRQUM1Q2hCLDJEQUFLQSxDQUFDO0lBQ1IsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNsQywrREFBT0E7b0JBQUNxRCxPQUFNO29CQUFrQkMsTUFBTTs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDckI7Z0JBQUlzQixPQUFPO29CQUFFQyxRQUFRO29CQUFLMUIsT0FBTztnQkFBTzswQkFDdkMsNEVBQUNoQyx1REFBUUE7b0JBQ1BpQixNQUFNQTtvQkFDTlksU0FBU0E7b0JBQ1Q4QixjQUFjO3dCQUNaQyxZQUFZOzRCQUNWQyxpQkFBaUI7Z0NBQUVDLE1BQU07Z0NBQUdDLFVBQVU7NEJBQUU7d0JBQzFDO29CQUNGO29CQUNBQyxpQkFBaUI7d0JBQUM7d0JBQUc7cUJBQUc7b0JBQ3hCQyxpQkFBaUI7b0JBQ2pCQywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBL0hNcEQ7O1FBR1dELHNEQUFTQTs7O0tBSHBCQztBQWlJTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4Pzk1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRDb2xEZWYgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnQC91dGlscy9mb3JtYXRQcmljZSc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IFN0YXR1cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1N0YXR1cyc7XG5pbXBvcnQge1xuICBNZENhY2hlZCxcbiAgTWRDbG9zZSxcbiAgTWREZWxldGUsXG4gIE1kRG9uZSxcbiAgTWRSZW1vdmVSZWRFeWUsXG59IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCBBY3Rpb25CdG4gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9BY3Rpb25CdG4nO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5pbnRlcmZhY2UgTWFuYWdlUHJvZHVjdHNDbGllbnRQcm9wcyB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0O1xufVxuXG5jb25zdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDogUmVhY3QuRkM8TWFuYWdlUHJvZHVjdHNDbGllbnRQcm9wcz4gPSAoe1xuICBwcm9kdWN0cyxcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCByb3dzOiBhbnkgPSBbXTtcblxuICBpZiAocHJvZHVjdHMpIHtcbiAgICByb3dzID0gT2JqZWN0LnZhbHVlcyhwcm9kdWN0cykubWFwKChwcm9kdWN0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgIHByaWNlOiBmb3JtYXRQcmljZShwcm9kdWN0LnByaWNlKSxcbiAgICAgICAgYnJhbmQ6IHByb2R1Y3QuYnJhbmQsXG4gICAgICAgIGNhdGVnb3J5OiBwcm9kdWN0LmNhdGVnb3J5LFxuICAgICAgICBpblN0b2NrOiBwcm9kdWN0LmluU3RvY2ssXG4gICAgICAgIGltYWdlczogcHJvZHVjdC5pbWFnZXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICAgIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiAyMjAgfSxcbiAgICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDIyMCB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAncHJpY2UnLFxuICAgICAgaGVhZGVyTmFtZTogJ1ByaWNlKFVTRCknLFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPntwYXJhbXMucm93LnByaWNlfTwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHsgZmllbGQ6ICdjYXRlZ29yeScsIGhlYWRlck5hbWU6ICdDYXRlZ29yeScsIHdpZHRoOiAxMDAgfSxcbiAgICB7IGZpZWxkOiAnYnJhbmQnLCBoZWFkZXJOYW1lOiAnQnJhbmQnLCB3aWR0aDogMTAwIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdpblN0b2NrJyxcbiAgICAgIGhlYWRlck5hbWU6ICdpblN0b2NrJyxcbiAgICAgIHdpZHRoOiAxMjAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICB7cGFyYW1zLnJvdy5pblN0b2NrID09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxTdGF0dXNcbiAgICAgICAgICAgICAgICB0ZXh0PVwiaW4gc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kRG9uZX1cbiAgICAgICAgICAgICAgICBiZz1cImJnLXRlYWwtMjAwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtdGVhbC03MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFN0YXR1c1xuICAgICAgICAgICAgICAgIHRleHQ9XCJvdXQgb2Ygc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kQ2xvc2V9XG4gICAgICAgICAgICAgICAgYmc9XCJiZy1yb3NlLTIwMFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LXJvc2UtNzAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdhY3Rpb24nLFxuICAgICAgaGVhZGVyTmFtZTogJ0FjdGlvbnMnLFxuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC00IHctZnVsbCBtdC0yLjVcIj5cbiAgICAgICAgICAgIHsvKiB0b2dnbGUgaW5TdG9jayBvZiBwcm9kdWN0IGluU3RvY2s8LT5vdXRTdG9jayAqL31cbiAgICAgICAgICAgIDxBY3Rpb25CdG5cbiAgICAgICAgICAgICAgaWNvbj17TWRDYWNoZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUb2dnbGVTdG9jayhwYXJhbXMucm93LmlkLCBwYXJhbXMucm93LmluU3RvY2spO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdG4gaWNvbj17TWREZWxldGV9IG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ0biBpY29uPXtNZFJlbW92ZVJlZEV5ZX0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgLy8gaGFuZGxlIHRvZ2dsZSBpblN0b2NrIG9mIHByb2R1Y3QgaW5TdG9jazwtPm91dFN0b2NrXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVN0b2NrID0gdXNlQ2FsbGJhY2soKGlkOiBzdHJpbmcsIGluU3RvY2s6IGJvb2xlYW4pID0+IHtcbiAgICAvLyBjcmVhdGUgUFVUIG1ldGhvZCBpbiBhcGkvcHJvZHVjdC9yb3V0ZVxuICAgIGF4aW9zXG4gICAgICAucHV0KCcvYXBpL3Byb2R1Y3QnLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBpblN0b2NrOiAhaW5TdG9jayxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb2R1Y3Qgc3RhdHVzIGNoYW5nZWQnKTtcbiAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcignT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gaGFuZGxlIERlbGV0ZSBhY3Rpb24gYnV0dG9uXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHVzZUNhbGxiYWNrKChpZDogc3RyaW5nLCBpbWFnZXM6IGFueVtdKSA9PiB7XG4gICAgdG9hc3QoJ0RlbGV0aW5nIHByb2R1Y3QsIHBsZWFzZSB3YWl0IScpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMTUwcHhdIG0tYXV0byB0ZXh0LXhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgbXQtOFwiPlxuICAgICAgICA8SGVhZGluZyB0aXRsZT1cIk1hbmFnZSBQcm9kdWN0c1wiIGNlbnRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNjAwLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgaW5pdGlhbFN0YXRlPXt7XG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlbDogeyBwYWdlOiAwLCBwYWdlU2l6ZTogOSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzksIDIwXX1cbiAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxuICAgICAgICAgIGRpc2FibGVSb3dTZWxlY3Rpb25PbkNsaWNrXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZVByb2R1Y3RzQ2xpZW50O1xuIl0sIm5hbWVzIjpbIkRhdGFHcmlkIiwiZm9ybWF0UHJpY2UiLCJIZWFkaW5nIiwiU3RhdHVzIiwiTWRDYWNoZWQiLCJNZENsb3NlIiwiTWREZWxldGUiLCJNZERvbmUiLCJNZFJlbW92ZVJlZEV5ZSIsIkFjdGlvbkJ0biIsInVzZUNhbGxiYWNrIiwiYXhpb3MiLCJ0b2FzdCIsInVzZVJvdXRlciIsIk1hbmFnZVByb2R1Y3RzQ2xpZW50IiwicHJvZHVjdHMiLCJyb3V0ZXIiLCJyb3dzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwiYnJhbmQiLCJjYXRlZ29yeSIsImluU3RvY2siLCJpbWFnZXMiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwicm93IiwidGV4dCIsImljb24iLCJiZyIsImNvbG9yIiwib25DbGljayIsImhhbmRsZVRvZ2dsZVN0b2NrIiwicHV0IiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJyZWZyZXNoIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEZWxldGUiLCJ0aXRsZSIsImNlbnRlciIsInN0eWxlIiwiaGVpZ2h0IiwiaW5pdGlhbFN0YXRlIiwicGFnaW5hdGlvbiIsInBhZ2luYXRpb25Nb2RlbCIsInBhZ2UiLCJwYWdlU2l6ZSIsInBhZ2VTaXplT3B0aW9ucyIsImNoZWNrYm94U2VsZWN0aW9uIiwiZGlzYWJsZVJvd1NlbGVjdGlvbk9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
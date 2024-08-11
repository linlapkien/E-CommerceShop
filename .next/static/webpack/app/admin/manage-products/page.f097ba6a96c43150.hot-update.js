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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=MdCached,MdClose,MdDelete,MdDone,MdRemoveRedEye!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/ActionBtn */ \"(app-pages-browser)/./app/components/ActionBtn.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getStorage)();\n    let rows = [];\n    if (products) {\n        rows = Object.values(products).map((product)=>{\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                category: product.category,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3\",\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDone,\n                        bg: \"bg-teal-200\",\n                        color: \"text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"out of stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdClose,\n                        bg: \"bg-rose-200\",\n                        color: \"text-rose-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between gap-4 w-full mt-2.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdCached,\n                            onClick: ()=>{\n                                handleToggleStock(params.row.id, params.row.inStock);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDelete,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdRemoveRedEye,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    ];\n    // handle toggle inStock of product inStock<->outStock\n    const handleToggleStock = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, inStock)=>{\n        // create PUT method in api/product/route\n        axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].put(\"/api/product\", {\n            id,\n            inStock: !inStock\n        }).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product status changed\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Oops! Something went wrong\");\n            console.log(err);\n        });\n    }, []);\n    // handle Delete action button\n    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, images)=>{\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Deleting product, please wait!\");\n        const handleImageDelete = async ()=>{\n            try {\n                for (const item of images){\n                    if (item.image) {\n                        // item.image is URL of that image\n                        // get image from firebase storage\n                        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(storage, item.image);\n                    }\n                }\n            } catch (error) {\n                return console.log(\"Deleting images error\", error);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 150,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true,\n                    disableRowSelectionOnClick: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 148,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageProductsClient, \"Bs/DWU6BfBZIVO36UGPTFj55MUE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHd0Q7QUFDTjtBQUNIO0FBQ0Y7QUFPckI7QUFDMkI7QUFDZjtBQUNWO0FBQ1U7QUFDUTtBQUNPO0FBTW5ELE1BQU1nQix1QkFBNEQ7UUFBQyxFQUNqRUMsUUFBUSxFQUNUOztJQUNDLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNTSxVQUFVTCw0REFBVUE7SUFDMUIsSUFBSU0sT0FBWSxFQUFFO0lBRWxCLElBQUlILFVBQVU7UUFDWkcsT0FBT0MsT0FBT0MsTUFBTSxDQUFDTCxVQUFVTSxHQUFHLENBQUMsQ0FBQ0M7WUFDbEMsT0FBTztnQkFDTEMsSUFBSUQsUUFBUUMsRUFBRTtnQkFDZEMsTUFBTUYsUUFBUUUsSUFBSTtnQkFDbEJDLE9BQU8xQiwrREFBV0EsQ0FBQ3VCLFFBQVFHLEtBQUs7Z0JBQ2hDQyxPQUFPSixRQUFRSSxLQUFLO2dCQUNwQkMsVUFBVUwsUUFBUUssUUFBUTtnQkFDMUJDLFNBQVNOLFFBQVFNLE9BQU87Z0JBQ3hCQyxRQUFRUCxRQUFRTyxNQUFNO1lBQ3hCO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLFVBQXdCO1FBQzVCO1lBQUVDLE9BQU87WUFBTUMsWUFBWTtZQUFNQyxPQUFPO1FBQUk7UUFDNUM7WUFBRUYsT0FBTztZQUFRQyxZQUFZO1lBQVFDLE9BQU87UUFBSTtRQUNoRDtZQUNFRixPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxZQUFZLENBQUNDO2dCQUNYLHFCQUNFLDhEQUFDQztvQkFBSUMsV0FBVTs4QkFBNEJGLE9BQU9HLEdBQUcsQ0FBQ2IsS0FBSzs7Ozs7O1lBRS9EO1FBQ0Y7UUFDQTtZQUFFTSxPQUFPO1lBQVlDLFlBQVk7WUFBWUMsT0FBTztRQUFJO1FBQ3hEO1lBQUVGLE9BQU87WUFBU0MsWUFBWTtZQUFTQyxPQUFPO1FB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azovL19OX0UvLi9hcHAvYWRtaW4vbWFuYWdlLXByb2R1Y3RzL01hbmFnZVByb2R1Y3RzQ2xpZW50LnRzeD85NTY5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJ0AvdXRpbHMvZm9ybWF0UHJpY2UnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBTdGF0dXMgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9TdGF0dXMnO1xuaW1wb3J0IHtcbiAgTWRDYWNoZWQsXG4gIE1kQ2xvc2UsXG4gIE1kRGVsZXRlLFxuICBNZERvbmUsXG4gIE1kUmVtb3ZlUmVkRXllLFxufSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgQWN0aW9uQnRuIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvQWN0aW9uQnRuJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuXG5pbnRlcmZhY2UgTWFuYWdlUHJvZHVjdHNDbGllbnRQcm9wcyB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0O1xufVxuXG5jb25zdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDogUmVhY3QuRkM8TWFuYWdlUHJvZHVjdHNDbGllbnRQcm9wcz4gPSAoe1xuICBwcm9kdWN0cyxcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4gIGxldCByb3dzOiBhbnkgPSBbXTtcblxuICBpZiAocHJvZHVjdHMpIHtcbiAgICByb3dzID0gT2JqZWN0LnZhbHVlcyhwcm9kdWN0cykubWFwKChwcm9kdWN0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgIHByaWNlOiBmb3JtYXRQcmljZShwcm9kdWN0LnByaWNlKSxcbiAgICAgICAgYnJhbmQ6IHByb2R1Y3QuYnJhbmQsXG4gICAgICAgIGNhdGVnb3J5OiBwcm9kdWN0LmNhdGVnb3J5LFxuICAgICAgICBpblN0b2NrOiBwcm9kdWN0LmluU3RvY2ssXG4gICAgICAgIGltYWdlczogcHJvZHVjdC5pbWFnZXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICAgIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiAyMjAgfSxcbiAgICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDIyMCB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAncHJpY2UnLFxuICAgICAgaGVhZGVyTmFtZTogJ1ByaWNlKFVTRCknLFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPntwYXJhbXMucm93LnByaWNlfTwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHsgZmllbGQ6ICdjYXRlZ29yeScsIGhlYWRlck5hbWU6ICdDYXRlZ29yeScsIHdpZHRoOiAxMDAgfSxcbiAgICB7IGZpZWxkOiAnYnJhbmQnLCBoZWFkZXJOYW1lOiAnQnJhbmQnLCB3aWR0aDogMTAwIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdpblN0b2NrJyxcbiAgICAgIGhlYWRlck5hbWU6ICdpblN0b2NrJyxcbiAgICAgIHdpZHRoOiAxMjAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICB7cGFyYW1zLnJvdy5pblN0b2NrID09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxTdGF0dXNcbiAgICAgICAgICAgICAgICB0ZXh0PVwiaW4gc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kRG9uZX1cbiAgICAgICAgICAgICAgICBiZz1cImJnLXRlYWwtMjAwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtdGVhbC03MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFN0YXR1c1xuICAgICAgICAgICAgICAgIHRleHQ9XCJvdXQgb2Ygc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kQ2xvc2V9XG4gICAgICAgICAgICAgICAgYmc9XCJiZy1yb3NlLTIwMFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LXJvc2UtNzAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdhY3Rpb24nLFxuICAgICAgaGVhZGVyTmFtZTogJ0FjdGlvbnMnLFxuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC00IHctZnVsbCBtdC0yLjVcIj5cbiAgICAgICAgICAgIHsvKiB0b2dnbGUgaW5TdG9jayBvZiBwcm9kdWN0IGluU3RvY2s8LT5vdXRTdG9jayAqL31cbiAgICAgICAgICAgIDxBY3Rpb25CdG5cbiAgICAgICAgICAgICAgaWNvbj17TWRDYWNoZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUb2dnbGVTdG9jayhwYXJhbXMucm93LmlkLCBwYXJhbXMucm93LmluU3RvY2spO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdG4gaWNvbj17TWREZWxldGV9IG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ0biBpY29uPXtNZFJlbW92ZVJlZEV5ZX0gb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgLy8gaGFuZGxlIHRvZ2dsZSBpblN0b2NrIG9mIHByb2R1Y3QgaW5TdG9jazwtPm91dFN0b2NrXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVN0b2NrID0gdXNlQ2FsbGJhY2soKGlkOiBzdHJpbmcsIGluU3RvY2s6IGJvb2xlYW4pID0+IHtcbiAgICAvLyBjcmVhdGUgUFVUIG1ldGhvZCBpbiBhcGkvcHJvZHVjdC9yb3V0ZVxuICAgIGF4aW9zXG4gICAgICAucHV0KCcvYXBpL3Byb2R1Y3QnLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBpblN0b2NrOiAhaW5TdG9jayxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb2R1Y3Qgc3RhdHVzIGNoYW5nZWQnKTtcbiAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcignT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gaGFuZGxlIERlbGV0ZSBhY3Rpb24gYnV0dG9uXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHVzZUNhbGxiYWNrKChpZDogc3RyaW5nLCBpbWFnZXM6IGFueVtdKSA9PiB7XG4gICAgdG9hc3QoJ0RlbGV0aW5nIHByb2R1Y3QsIHBsZWFzZSB3YWl0IScpO1xuXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VEZWxldGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaW1hZ2VzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0uaW1hZ2UpIHtcbiAgICAgICAgICAgIC8vIGl0ZW0uaW1hZ2UgaXMgVVJMIG9mIHRoYXQgaW1hZ2VcbiAgICAgICAgICAgIC8vIGdldCBpbWFnZSBmcm9tIGZpcmViYXNlIHN0b3JhZ2VcbiAgICAgICAgICAgIGNvbnN0IGltYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGl0ZW0uaW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdEZWxldGluZyBpbWFnZXMgZXJyb3InLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTE1MHB4XSBtLWF1dG8gdGV4dC14bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG10LThcIj5cbiAgICAgICAgPEhlYWRpbmcgdGl0bGU9XCJNYW5hZ2UgUHJvZHVjdHNcIiBjZW50ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgPERhdGFHcmlkXG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgIGluaXRpYWxTdGF0ZT17e1xuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHsgcGFnZTogMCwgcGFnZVNpemU6IDkgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s5LCAyMF19XG4gICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgICAgICBkaXNhYmxlUm93U2VsZWN0aW9uT25DbGlja1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDtcbiJdLCJuYW1lcyI6WyJEYXRhR3JpZCIsImZvcm1hdFByaWNlIiwiSGVhZGluZyIsIlN0YXR1cyIsIk1kQ2FjaGVkIiwiTWRDbG9zZSIsIk1kRGVsZXRlIiwiTWREb25lIiwiTWRSZW1vdmVSZWRFeWUiLCJBY3Rpb25CdG4iLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJnZXRTdG9yYWdlIiwicmVmIiwiTWFuYWdlUHJvZHVjdHNDbGllbnQiLCJwcm9kdWN0cyIsInJvdXRlciIsInN0b3JhZ2UiLCJyb3dzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwiYnJhbmQiLCJjYXRlZ29yeSIsImluU3RvY2siLCJpbWFnZXMiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwicm93IiwidGV4dCIsImljb24iLCJiZyIsImNvbG9yIiwib25DbGljayIsImhhbmRsZVRvZ2dsZVN0b2NrIiwicHV0IiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJyZWZyZXNoIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVJbWFnZURlbGV0ZSIsIml0ZW0iLCJpbWFnZSIsImltYWdlUmVmIiwidGl0bGUiLCJjZW50ZXIiLCJzdHlsZSIsImhlaWdodCIsImluaXRpYWxTdGF0ZSIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uTW9kZWwiLCJwYWdlIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJjaGVja2JveFNlbGVjdGlvbiIsImRpc2FibGVSb3dTZWxlY3Rpb25PbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
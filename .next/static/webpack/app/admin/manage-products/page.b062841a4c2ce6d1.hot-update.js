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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=MdCached,MdClose,MdDelete,MdDone,MdRemoveRedEye!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/ActionBtn */ \"(app-pages-browser)/./app/components/ActionBtn.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var _libs_firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/libs/firebase */ \"(app-pages-browser)/./libs/firebase.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getStorage)(_libs_firebase__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\n    let rows = [];\n    if (products) {\n        rows = Object.values(products).map((product)=>{\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                category: product.category,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        //-------------Price-----------------------\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        //------------------------------------\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        //-------------inStock-----------------------\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3\",\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdDone,\n                        bg: \"bg-teal-200\",\n                        color: \"text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"out of stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdClose,\n                        bg: \"bg-rose-200\",\n                        color: \"text-rose-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between gap-4 w-full mt-2.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdCached,\n                            onClick: ()=>{\n                                handleToggleStock(params.row.id, params.row.inStock);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdDelete,\n                            onClick: ()=>{\n                                handleDelete(params.row.id, params.row.images);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdRemoveRedEye,\n                            onClick: ()=>{\n                                router.push(\"/product/\".concat(params.row.id));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    ];\n    // handle toggle inStock of product inStock<->outStock\n    const handleToggleStock = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, inStock)=>{\n        // create PUT method in api/product/route\n        axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].put(\"/api/product\", {\n            id,\n            inStock: !inStock\n        }).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product status changed\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Oops! Something went wrong\");\n            console.log(err);\n        });\n    }, []);\n    // handle Delete action button\n    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async (id, images)=>{\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Deleting product, please wait!\");\n        const handleImageDelete = async ()=>{\n            try {\n                for (const item of images){\n                    if (item.image) {\n                        // item.image is URL of that image\n                        // get image from firebase storage\n                        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(storage, item.image);\n                        // then wait to delete that image URL in firebase\n                        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.deleteObject)(imageRef);\n                        console.log(\"image deleted\", item.image);\n                    }\n                }\n            } catch (error) {\n                return console.log(\"Deleting images error\", error);\n            }\n        };\n        await handleImageDelete();\n        // we have ${id} in api/product/${id}\n        // becuz id is dynamic so we have to create folder [id] inside the api/product\n        axios__WEBPACK_IMPORTED_MODULE_11__[\"default\"].delete(\"/api/product/\".concat(id)).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product deleted\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Failed to delete product\");\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 184,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_12__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true,\n                    disableRowSelectionOnClick: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 187,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 186,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 182,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageProductsClient, \"Bs/DWU6BfBZIVO36UGPTFj55MUE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3dEO0FBQ047QUFDSDtBQUNGO0FBT3JCO0FBQzJCO0FBQ2Y7QUFDVjtBQUNVO0FBQ1E7QUFDcUI7QUFDdkI7QUFNMUMsTUFBTWtCLHVCQUE0RDtRQUFDLEVBQ2pFQyxRQUFRLEVBQ1Q7O0lBQ0MsTUFBTUMsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU1RLFVBQVVOLDREQUFVQSxDQUFDRSxzREFBV0E7SUFDdEMsSUFBSUssT0FBWSxFQUFFO0lBRWxCLElBQUlILFVBQVU7UUFDWkcsT0FBT0MsT0FBT0MsTUFBTSxDQUFDTCxVQUFVTSxHQUFHLENBQUMsQ0FBQ0M7WUFDbEMsT0FBTztnQkFDTEMsSUFBSUQsUUFBUUMsRUFBRTtnQkFDZEMsTUFBTUYsUUFBUUUsSUFBSTtnQkFDbEJDLE9BQU81QiwrREFBV0EsQ0FBQ3lCLFFBQVFHLEtBQUs7Z0JBQ2hDQyxPQUFPSixRQUFRSSxLQUFLO2dCQUNwQkMsVUFBVUwsUUFBUUssUUFBUTtnQkFDMUJDLFNBQVNOLFFBQVFNLE9BQU87Z0JBQ3hCQyxRQUFRUCxRQUFRTyxNQUFNO1lBQ3hCO1FBQ0Y7SUFDRjtJQUVBLE1BQU1DLFVBQXdCO1FBQzVCO1lBQUVDLE9BQU87WUFBTUMsWUFBWTtZQUFNQyxPQUFPO1FBQUk7UUFDNUM7WUFBRUYsT0FBTztZQUFRQyxZQUFZO1lBQVFDLE9BQU87UUFBSTtRQUNoRCwyQ0FBMkM7UUFDM0M7WUFDRUYsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWSxDQUFDQztnQkFDWCxxQkFDRSw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQTRCRixPQUFPRyxHQUFHLENBQUNiLEtBQUs7Ozs7OztZQUUvRDtRQUNGO1FBQ0Esc0NBQXNDO1FBRXRDO1lBQUVNLE9BQU87WUFBWUMsWUFBWTtZQUFZQyxPQUFP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S0FBSyxDQUFDO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDZDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDakI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDdkMsK0RBQU9BO29CQUFDZ0UsT0FBTTtvQkFBa0JDLE1BQU07Ozs7Ozs7Ozs7OzBCQUV6Qyw4REFBQzNCO2dCQUFJNEIsT0FBTztvQkFBRUMsUUFBUTtvQkFBS2hDLE9BQU87Z0JBQU87MEJBQ3ZDLDRFQUFDckMsdURBQVFBO29CQUNQc0IsTUFBTUE7b0JBQ05ZLFNBQVNBO29CQUNUb0MsY0FBYzt3QkFDWkMsWUFBWTs0QkFDVkMsaUJBQWlCO2dDQUFFQyxNQUFNO2dDQUFHQyxVQUFVOzRCQUFFO3dCQUMxQztvQkFDRjtvQkFDQUMsaUJBQWlCO3dCQUFDO3dCQUFHO3FCQUFHO29CQUN4QkMsaUJBQWlCO29CQUNqQkMsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQztHQS9LTTNEOztRQUdXTCxzREFBU0E7OztLQUhwQks7QUFpTE4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vbWFuYWdlLXByb2R1Y3RzL01hbmFnZVByb2R1Y3RzQ2xpZW50LnRzeD85NTY5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJ0AvdXRpbHMvZm9ybWF0UHJpY2UnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBTdGF0dXMgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9TdGF0dXMnO1xuaW1wb3J0IHtcbiAgTWRDYWNoZWQsXG4gIE1kQ2xvc2UsXG4gIE1kRGVsZXRlLFxuICBNZERvbmUsXG4gIE1kUmVtb3ZlUmVkRXllLFxufSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgQWN0aW9uQnRuIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvQWN0aW9uQnRuJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGRlbGV0ZU9iamVjdCwgZ2V0U3RvcmFnZSwgcmVmIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgZmlyZWJhc2VBcHAgZnJvbSAnQC9saWJzL2ZpcmViYXNlJztcblxuaW50ZXJmYWNlIE1hbmFnZVByb2R1Y3RzQ2xpZW50UHJvcHMge1xuICBwcm9kdWN0czogUHJvZHVjdDtcbn1cblxuY29uc3QgTWFuYWdlUHJvZHVjdHNDbGllbnQ6IFJlYWN0LkZDPE1hbmFnZVByb2R1Y3RzQ2xpZW50UHJvcHM+ID0gKHtcbiAgcHJvZHVjdHMsXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShmaXJlYmFzZUFwcCk7XG4gIGxldCByb3dzOiBhbnkgPSBbXTtcblxuICBpZiAocHJvZHVjdHMpIHtcbiAgICByb3dzID0gT2JqZWN0LnZhbHVlcyhwcm9kdWN0cykubWFwKChwcm9kdWN0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBwcm9kdWN0LmlkLFxuICAgICAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgICAgIHByaWNlOiBmb3JtYXRQcmljZShwcm9kdWN0LnByaWNlKSxcbiAgICAgICAgYnJhbmQ6IHByb2R1Y3QuYnJhbmQsXG4gICAgICAgIGNhdGVnb3J5OiBwcm9kdWN0LmNhdGVnb3J5LFxuICAgICAgICBpblN0b2NrOiBwcm9kdWN0LmluU3RvY2ssXG4gICAgICAgIGltYWdlczogcHJvZHVjdC5pbWFnZXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICAgIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiAyMjAgfSxcbiAgICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDIyMCB9LFxuICAgIC8vLS0tLS0tLS0tLS0tLVByaWNlLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB7XG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGhlYWRlck5hbWU6ICdQcmljZShVU0QpJyxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS04MDBcIj57cGFyYW1zLnJvdy5wcmljZX08L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgeyBmaWVsZDogJ2NhdGVnb3J5JywgaGVhZGVyTmFtZTogJ0NhdGVnb3J5Jywgd2lkdGg6IDEwMCB9LFxuICAgIHsgZmllbGQ6ICdicmFuZCcsIGhlYWRlck5hbWU6ICdCcmFuZCcsIHdpZHRoOiAxMDAgfSxcbiAgICAvLy0tLS0tLS0tLS0tLS1pblN0b2NrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB7XG4gICAgICBmaWVsZDogJ2luU3RvY2snLFxuICAgICAgaGVhZGVyTmFtZTogJ2luU3RvY2snLFxuICAgICAgd2lkdGg6IDEyMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIHtwYXJhbXMucm93LmluU3RvY2sgPT0gdHJ1ZSA/IChcbiAgICAgICAgICAgICAgPFN0YXR1c1xuICAgICAgICAgICAgICAgIHRleHQ9XCJpbiBzdG9ja1wiXG4gICAgICAgICAgICAgICAgaWNvbj17TWREb25lfVxuICAgICAgICAgICAgICAgIGJnPVwiYmctdGVhbC0yMDBcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC10ZWFsLTcwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U3RhdHVzXG4gICAgICAgICAgICAgICAgdGV4dD1cIm91dCBvZiBzdG9ja1wiXG4gICAgICAgICAgICAgICAgaWNvbj17TWRDbG9zZX1cbiAgICAgICAgICAgICAgICBiZz1cImJnLXJvc2UtMjAwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtcm9zZS03MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ2FjdGlvbicsXG4gICAgICBoZWFkZXJOYW1lOiAnQWN0aW9ucycsXG4gICAgICB3aWR0aDogMjAwLFxuICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgdy1mdWxsIG10LTIuNVwiPlxuICAgICAgICAgICAgey8qIHRvZ2dsZSBpblN0b2NrIG9mIHByb2R1Y3QgaW5TdG9jazwtPm91dFN0b2NrICovfVxuICAgICAgICAgICAgPEFjdGlvbkJ0blxuICAgICAgICAgICAgICBpY29uPXtNZENhY2hlZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZVRvZ2dsZVN0b2NrKHBhcmFtcy5yb3cuaWQsIHBhcmFtcy5yb3cuaW5TdG9jayk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ0blxuICAgICAgICAgICAgICBpY29uPXtNZERlbGV0ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZShwYXJhbXMucm93LmlkLCBwYXJhbXMucm93LmltYWdlcyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ0blxuICAgICAgICAgICAgICBpY29uPXtNZFJlbW92ZVJlZEV5ZX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3BhcmFtcy5yb3cuaWR9YCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIC8vIGhhbmRsZSB0b2dnbGUgaW5TdG9jayBvZiBwcm9kdWN0IGluU3RvY2s8LT5vdXRTdG9ja1xuICBjb25zdCBoYW5kbGVUb2dnbGVTdG9jayA9IHVzZUNhbGxiYWNrKChpZDogc3RyaW5nLCBpblN0b2NrOiBib29sZWFuKSA9PiB7XG4gICAgLy8gY3JlYXRlIFBVVCBtZXRob2QgaW4gYXBpL3Byb2R1Y3Qvcm91dGVcbiAgICBheGlvc1xuICAgICAgLnB1dCgnL2FwaS9wcm9kdWN0Jywge1xuICAgICAgICBpZCxcbiAgICAgICAgaW5TdG9jazogIWluU3RvY2ssXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdQcm9kdWN0IHN0YXR1cyBjaGFuZ2VkJyk7XG4gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdG9hc3QuZXJyb3IoJ09vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIC8vIGhhbmRsZSBEZWxldGUgYWN0aW9uIGJ1dHRvblxuICBjb25zdCBoYW5kbGVEZWxldGUgPSB1c2VDYWxsYmFjayhhc3luYyAoaWQ6IHN0cmluZywgaW1hZ2VzOiBhbnlbXSkgPT4ge1xuICAgIHRvYXN0KCdEZWxldGluZyBwcm9kdWN0LCBwbGVhc2Ugd2FpdCEnKTtcblxuICAgIGNvbnN0IGhhbmRsZUltYWdlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGltYWdlcykge1xuICAgICAgICAgIGlmIChpdGVtLmltYWdlKSB7XG4gICAgICAgICAgICAvLyBpdGVtLmltYWdlIGlzIFVSTCBvZiB0aGF0IGltYWdlXG4gICAgICAgICAgICAvLyBnZXQgaW1hZ2UgZnJvbSBmaXJlYmFzZSBzdG9yYWdlXG4gICAgICAgICAgICBjb25zdCBpbWFnZVJlZiA9IHJlZihzdG9yYWdlLCBpdGVtLmltYWdlKTtcblxuICAgICAgICAgICAgLy8gdGhlbiB3YWl0IHRvIGRlbGV0ZSB0aGF0IGltYWdlIFVSTCBpbiBmaXJlYmFzZVxuICAgICAgICAgICAgYXdhaXQgZGVsZXRlT2JqZWN0KGltYWdlUmVmKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBkZWxldGVkJywgaXRlbS5pbWFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ0RlbGV0aW5nIGltYWdlcyBlcnJvcicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgYXdhaXQgaGFuZGxlSW1hZ2VEZWxldGUoKTtcblxuICAgIC8vIHdlIGhhdmUgJHtpZH0gaW4gYXBpL3Byb2R1Y3QvJHtpZH1cbiAgICAvLyBiZWN1eiBpZCBpcyBkeW5hbWljIHNvIHdlIGhhdmUgdG8gY3JlYXRlIGZvbGRlciBbaWRdIGluc2lkZSB0aGUgYXBpL3Byb2R1Y3RcbiAgICBheGlvc1xuICAgICAgLmRlbGV0ZShgL2FwaS9wcm9kdWN0LyR7aWR9YClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvZHVjdCBkZWxldGVkJyk7XG4gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgcHJvZHVjdCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzExNTBweF0gbS1hdXRvIHRleHQteGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBtdC04XCI+XG4gICAgICAgIDxIZWFkaW5nIHRpdGxlPVwiTWFuYWdlIFByb2R1Y3RzXCIgY2VudGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIDxEYXRhR3JpZFxuICAgICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICBpbml0aWFsU3RhdGU9e3tcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGVsOiB7IHBhZ2U6IDAsIHBhZ2VTaXplOiA5IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgICAgcGFnZVNpemVPcHRpb25zPXtbOSwgMjBdfVxuICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXG4gICAgICAgICAgZGlzYWJsZVJvd1NlbGVjdGlvbk9uQ2xpY2tcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlUHJvZHVjdHNDbGllbnQ7XG4iXSwibmFtZXMiOlsiRGF0YUdyaWQiLCJmb3JtYXRQcmljZSIsIkhlYWRpbmciLCJTdGF0dXMiLCJNZENhY2hlZCIsIk1kQ2xvc2UiLCJNZERlbGV0ZSIsIk1kRG9uZSIsIk1kUmVtb3ZlUmVkRXllIiwiQWN0aW9uQnRuIiwidXNlQ2FsbGJhY2siLCJheGlvcyIsInRvYXN0IiwidXNlUm91dGVyIiwiZGVsZXRlT2JqZWN0IiwiZ2V0U3RvcmFnZSIsInJlZiIsImZpcmViYXNlQXBwIiwiTWFuYWdlUHJvZHVjdHNDbGllbnQiLCJwcm9kdWN0cyIsInJvdXRlciIsInN0b3JhZ2UiLCJyb3dzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwiYnJhbmQiLCJjYXRlZ29yeSIsImluU3RvY2siLCJpbWFnZXMiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwicm93IiwidGV4dCIsImljb24iLCJiZyIsImNvbG9yIiwib25DbGljayIsImhhbmRsZVRvZ2dsZVN0b2NrIiwiaGFuZGxlRGVsZXRlIiwicHVzaCIsInB1dCIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwicmVmcmVzaCIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSW1hZ2VEZWxldGUiLCJpdGVtIiwiaW1hZ2UiLCJpbWFnZVJlZiIsImRlbGV0ZSIsInRpdGxlIiwiY2VudGVyIiwic3R5bGUiLCJoZWlnaHQiLCJpbml0aWFsU3RhdGUiLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvbk1vZGVsIiwicGFnZSIsInBhZ2VTaXplIiwicGFnZVNpemVPcHRpb25zIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlUm93U2VsZWN0aW9uT25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
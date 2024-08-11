"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/manage-orders/page",{

/***/ "(app-pages-browser)/./app/admin/manage-orders/ManageOrdersClient.tsx":
/*!********************************************************!*\
  !*** ./app/admin/manage-orders/ManageOrdersClient.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=MdCached,MdClose,MdDelete,MdDone,MdRemoveRedEye!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/ActionBtn */ \"(app-pages-browser)/./app/components/ActionBtn.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst ManageOrdersClient = (param)=>{\n    let { orders } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    let rows = [];\n    if (orders) {\n        rows = Object.values(orders).map((order)=>{\n            return {\n                id: order.id,\n                name: order.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(order.price),\n                brand: order.brand,\n                category: order.category,\n                inStock: order.inStock,\n                images: order.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3\",\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDone,\n                        bg: \"bg-teal-200\",\n                        color: \"text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"out of stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdClose,\n                        bg: \"bg-rose-200\",\n                        color: \"text-rose-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between gap-4 w-full mt-2.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdCached,\n                            onClick: ()=>{\n                                handleToggleStock(params.row.id, params.row.inStock);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDelete,\n                            onClick: ()=>{\n                                handleDelete(params.row.id, params.row.images);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdRemoveRedEye,\n                            onClick: ()=>{\n                                router.push(\"/product/\".concat(params.row.id));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    ];\n    // handle toggle inStock of product inStock<->outStock\n    const handleToggleStock = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, inStock)=>{\n        // create PUT method in api/product/route\n        axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].put(\"/api/product\", {\n            id,\n            inStock: !inStock\n        }).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product status changed\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Oops! Something went wrong\");\n            console.log(err);\n        });\n    }, []);\n    // handle Delete action button\n    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async (id, images)=>{\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Deleting product, please wait!\");\n        const handleImageDelete = async ()=>{\n            try {\n                for (const item of images){\n                    if (item.image) {\n                        // item.image is URL of that image\n                        // get image from firebase storage\n                        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(storage, item.image);\n                        // then wait to delete that image URL in firebase\n                        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.deleteObject)(imageRef);\n                        console.log(\"image deleted\", item.image);\n                    }\n                }\n            } catch (error) {\n                return console.log(\"Deleting images error\", error);\n            }\n        };\n        await handleImageDelete();\n        // we have ${id} in api/product/${id}\n        // becuz id is dynamic so we have to create folder [id] inside the api/product\n        axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].delete(\"/api/product/\".concat(id)).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product deleted\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Failed to delete product\");\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                    lineNumber: 181,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true,\n                    disableRowSelectionOnClick: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                    lineNumber: 184,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-orders/ManageOrdersClient.tsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageOrdersClient, \"Bs/DWU6BfBZIVO36UGPTFj55MUE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ManageOrdersClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageOrdersClient);\nvar _c;\n$RefreshReg$(_c, \"ManageOrdersClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2Utb3JkZXJzL01hbmFnZU9yZGVyc0NsaWVudC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUd3RDtBQUNOO0FBQ0g7QUFDRjtBQU9yQjtBQUMyQjtBQUNmO0FBQ1Y7QUFDVTtBQUNRO0FBQ3FCO0FBV2pFLE1BQU1nQixxQkFBd0Q7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3ZFLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixJQUFJTSxPQUFZLEVBQUU7SUFFbEIsSUFBSUYsUUFBUTtRQUNWRSxPQUFPQyxPQUFPQyxNQUFNLENBQUNKLFFBQVFLLEdBQUcsQ0FBQyxDQUFDQztZQUNoQyxPQUFPO2dCQUNMQyxJQUFJRCxNQUFNQyxFQUFFO2dCQUNaQyxNQUFNRixNQUFNRSxJQUFJO2dCQUNoQkMsT0FBT3pCLCtEQUFXQSxDQUFDc0IsTUFBTUcsS0FBSztnQkFDOUJDLE9BQU9KLE1BQU1JLEtBQUs7Z0JBQ2xCQyxVQUFVTCxNQUFNSyxRQUFRO2dCQUN4QkMsU0FBU04sTUFBTU0sT0FBTztnQkFDdEJDLFFBQVFQLE1BQU1PLE1BQU07WUFDdEI7UUFDRjtJQUNGO0lBRUEsTUFBTUMsVUFBd0I7UUFDNUI7WUFBRUMsT0FBTztZQUFNQyxZQUFZO1lBQU1DLE9BQU87UUFBSTtRQUM1QztZQUFFRixPQUFPO1lBQVFDLFlBQVk7WUFBUUMsT0FBTztRQUFJO1FBQ2hEO1lBQ0VGLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxPQUFPO1lBQ1BDLFlBQVksQ0FBQ0M7Z0JBQ1gscUJBQ0UsOERBQUNDO29CQUFJQyxXQUFVOzhCQUE0QkYsT0FBT0csR0FBRyxDQUFDYixLQUFLOzs7Ozs7WUFFL0Q7UUFDRjtRQUNBO1lBQUVNLE9BQU87WUFBWUMsWUFBWTtZQUFZQyxPQUFPO1FBQUk7UUFDeEQ7WUFBRUYsT0FBTztZQUFTQyxZQUFZO1lBQVNDLE9BQU87UUFBSTtRQUNsRDtZQUNFRixPQUFPO1lBQ1BDLFlB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OERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDcEMsK0RBQU9BO29CQUFDOEQsT0FBTTtvQkFBa0JDLE1BQU07Ozs7Ozs7Ozs7OzBCQUV6Qyw4REFBQzVCO2dCQUFJNkIsT0FBTztvQkFBRUMsUUFBUTtvQkFBS2pDLE9BQU87Z0JBQU87MEJBQ3ZDLDRFQUFDbEMsdURBQVFBO29CQUNQbUIsTUFBTUE7b0JBQ05ZLFNBQVNBO29CQUNUcUMsY0FBYzt3QkFDWkMsWUFBWTs0QkFDVkMsaUJBQWlCO2dDQUFFQyxNQUFNO2dDQUFHQyxVQUFVOzRCQUFFO3dCQUMxQztvQkFDRjtvQkFDQUMsaUJBQWlCO3dCQUFDO3dCQUFHO3FCQUFHO29CQUN4QkMsaUJBQWlCO29CQUNqQkMsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQztHQXhLTTNEOztRQUNXSCxzREFBU0E7OztLQURwQkc7QUEwS04sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWRtaW4vbWFuYWdlLW9yZGVycy9NYW5hZ2VPcmRlcnNDbGllbnQudHN4Pzk2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBPcmRlciwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkQ29sRGVmIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJ0AvdXRpbHMvZm9ybWF0UHJpY2UnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZWFkaW5nJztcbmltcG9ydCBTdGF0dXMgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9TdGF0dXMnO1xuaW1wb3J0IHtcbiAgTWRDYWNoZWQsXG4gIE1kQ2xvc2UsXG4gIE1kRGVsZXRlLFxuICBNZERvbmUsXG4gIE1kUmVtb3ZlUmVkRXllLFxufSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgQWN0aW9uQnRuIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvQWN0aW9uQnRuJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IGRlbGV0ZU9iamVjdCwgZ2V0U3RvcmFnZSwgcmVmIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgZmlyZWJhc2VBcHAgZnJvbSAnQC9saWJzL2ZpcmViYXNlJztcblxuaW50ZXJmYWNlIE1hbmFnZU9yZGVyc0NsaWVudFByb3BzIHtcbiAgb3JkZXJzOiBFeHRlbmRlZE9yZGVyW107XG59XG5cbnR5cGUgRXh0ZW5kZWRPcmRlciA9IE9yZGVyICYge1xuICB1c2VyOiBVc2VyO1xufTtcblxuY29uc3QgTWFuYWdlT3JkZXJzQ2xpZW50OiBSZWFjdC5GQzxNYW5hZ2VPcmRlcnNDbGllbnRQcm9wcz4gPSAoeyBvcmRlcnMgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IHJvd3M6IGFueSA9IFtdO1xuXG4gIGlmIChvcmRlcnMpIHtcbiAgICByb3dzID0gT2JqZWN0LnZhbHVlcyhvcmRlcnMpLm1hcCgob3JkZXI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG9yZGVyLmlkLFxuICAgICAgICBuYW1lOiBvcmRlci5uYW1lLFxuICAgICAgICBwcmljZTogZm9ybWF0UHJpY2Uob3JkZXIucHJpY2UpLFxuICAgICAgICBicmFuZDogb3JkZXIuYnJhbmQsXG4gICAgICAgIGNhdGVnb3J5OiBvcmRlci5jYXRlZ29yeSxcbiAgICAgICAgaW5TdG9jazogb3JkZXIuaW5TdG9jayxcbiAgICAgICAgaW1hZ2VzOiBvcmRlci5pbWFnZXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29sdW1uczogR3JpZENvbERlZltdID0gW1xuICAgIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiAyMjAgfSxcbiAgICB7IGZpZWxkOiAnbmFtZScsIGhlYWRlck5hbWU6ICdOYW1lJywgd2lkdGg6IDIyMCB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAncHJpY2UnLFxuICAgICAgaGVhZGVyTmFtZTogJ1ByaWNlKFVTRCknLFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNsYXRlLTgwMFwiPntwYXJhbXMucm93LnByaWNlfTwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHsgZmllbGQ6ICdjYXRlZ29yeScsIGhlYWRlck5hbWU6ICdDYXRlZ29yeScsIHdpZHRoOiAxMDAgfSxcbiAgICB7IGZpZWxkOiAnYnJhbmQnLCBoZWFkZXJOYW1lOiAnQnJhbmQnLCB3aWR0aDogMTAwIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdpblN0b2NrJyxcbiAgICAgIGhlYWRlck5hbWU6ICdpblN0b2NrJyxcbiAgICAgIHdpZHRoOiAxMjAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAgICB7cGFyYW1zLnJvdy5pblN0b2NrID09IHRydWUgPyAoXG4gICAgICAgICAgICAgIDxTdGF0dXNcbiAgICAgICAgICAgICAgICB0ZXh0PVwiaW4gc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kRG9uZX1cbiAgICAgICAgICAgICAgICBiZz1cImJnLXRlYWwtMjAwXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInRleHQtdGVhbC03MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFN0YXR1c1xuICAgICAgICAgICAgICAgIHRleHQ9XCJvdXQgb2Ygc3RvY2tcIlxuICAgICAgICAgICAgICAgIGljb249e01kQ2xvc2V9XG4gICAgICAgICAgICAgICAgYmc9XCJiZy1yb3NlLTIwMFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LXJvc2UtNzAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdhY3Rpb24nLFxuICAgICAgaGVhZGVyTmFtZTogJ0FjdGlvbnMnLFxuICAgICAgd2lkdGg6IDIwMCxcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGdhcC00IHctZnVsbCBtdC0yLjVcIj5cbiAgICAgICAgICAgIHsvKiB0b2dnbGUgaW5TdG9jayBvZiBwcm9kdWN0IGluU3RvY2s8LT5vdXRTdG9jayAqL31cbiAgICAgICAgICAgIDxBY3Rpb25CdG5cbiAgICAgICAgICAgICAgaWNvbj17TWRDYWNoZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVUb2dnbGVTdG9jayhwYXJhbXMucm93LmlkLCBwYXJhbXMucm93LmluU3RvY2spO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdG5cbiAgICAgICAgICAgICAgaWNvbj17TWREZWxldGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGUocGFyYW1zLnJvdy5pZCwgcGFyYW1zLnJvdy5pbWFnZXMpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdG5cbiAgICAgICAgICAgICAgaWNvbj17TWRSZW1vdmVSZWRFeWV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtwYXJhbXMucm93LmlkfWApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICAvLyBoYW5kbGUgdG9nZ2xlIGluU3RvY2sgb2YgcHJvZHVjdCBpblN0b2NrPC0+b3V0U3RvY2tcbiAgY29uc3QgaGFuZGxlVG9nZ2xlU3RvY2sgPSB1c2VDYWxsYmFjaygoaWQ6IHN0cmluZywgaW5TdG9jazogYm9vbGVhbikgPT4ge1xuICAgIC8vIGNyZWF0ZSBQVVQgbWV0aG9kIGluIGFwaS9wcm9kdWN0L3JvdXRlXG4gICAgYXhpb3NcbiAgICAgIC5wdXQoJy9hcGkvcHJvZHVjdCcsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGluU3RvY2s6ICFpblN0b2NrLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvZHVjdCBzdGF0dXMgY2hhbmdlZCcpO1xuICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRvYXN0LmVycm9yKCdPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBoYW5kbGUgRGVsZXRlIGFjdGlvbiBidXR0b25cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGlkOiBzdHJpbmcsIGltYWdlczogYW55W10pID0+IHtcbiAgICB0b2FzdCgnRGVsZXRpbmcgcHJvZHVjdCwgcGxlYXNlIHdhaXQhJyk7XG5cbiAgICBjb25zdCBoYW5kbGVJbWFnZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpbWFnZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbWFnZSkge1xuICAgICAgICAgICAgLy8gaXRlbS5pbWFnZSBpcyBVUkwgb2YgdGhhdCBpbWFnZVxuICAgICAgICAgICAgLy8gZ2V0IGltYWdlIGZyb20gZmlyZWJhc2Ugc3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgaW1hZ2VSZWYgPSByZWYoc3RvcmFnZSwgaXRlbS5pbWFnZSk7XG5cbiAgICAgICAgICAgIC8vIHRoZW4gd2FpdCB0byBkZWxldGUgdGhhdCBpbWFnZSBVUkwgaW4gZmlyZWJhc2VcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZU9iamVjdChpbWFnZVJlZik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgZGVsZXRlZCcsIGl0ZW0uaW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdEZWxldGluZyBpbWFnZXMgZXJyb3InLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGF3YWl0IGhhbmRsZUltYWdlRGVsZXRlKCk7XG5cbiAgICAvLyB3ZSBoYXZlICR7aWR9IGluIGFwaS9wcm9kdWN0LyR7aWR9XG4gICAgLy8gYmVjdXogaWQgaXMgZHluYW1pYyBzbyB3ZSBoYXZlIHRvIGNyZWF0ZSBmb2xkZXIgW2lkXSBpbnNpZGUgdGhlIGFwaS9wcm9kdWN0XG4gICAgYXhpb3NcbiAgICAgIC5kZWxldGUoYC9hcGkvcHJvZHVjdC8ke2lkfWApXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ1Byb2R1Y3QgZGVsZXRlZCcpO1xuICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2R1Y3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVsxMTUwcHhdIG0tYXV0byB0ZXh0LXhsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTYgbXQtOFwiPlxuICAgICAgICA8SGVhZGluZyB0aXRsZT1cIk1hbmFnZSBQcm9kdWN0c1wiIGNlbnRlciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNjAwLCB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICA8RGF0YUdyaWRcbiAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgICAgaW5pdGlhbFN0YXRlPXt7XG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgICAgICAgIHBhZ2luYXRpb25Nb2RlbDogeyBwYWdlOiAwLCBwYWdlU2l6ZTogOSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHBhZ2VTaXplT3B0aW9ucz17WzksIDIwXX1cbiAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxuICAgICAgICAgIGRpc2FibGVSb3dTZWxlY3Rpb25PbkNsaWNrXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZU9yZGVyc0NsaWVudDtcbiJdLCJuYW1lcyI6WyJEYXRhR3JpZCIsImZvcm1hdFByaWNlIiwiSGVhZGluZyIsIlN0YXR1cyIsIk1kQ2FjaGVkIiwiTWRDbG9zZSIsIk1kRGVsZXRlIiwiTWREb25lIiwiTWRSZW1vdmVSZWRFeWUiLCJBY3Rpb25CdG4iLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJkZWxldGVPYmplY3QiLCJyZWYiLCJNYW5hZ2VPcmRlcnNDbGllbnQiLCJvcmRlcnMiLCJyb3V0ZXIiLCJyb3dzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwib3JkZXIiLCJpZCIsIm5hbWUiLCJwcmljZSIsImJyYW5kIiwiY2F0ZWdvcnkiLCJpblN0b2NrIiwiaW1hZ2VzIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsImRpdiIsImNsYXNzTmFtZSIsInJvdyIsInRleHQiLCJpY29uIiwiYmciLCJjb2xvciIsIm9uQ2xpY2siLCJoYW5kbGVUb2dnbGVTdG9jayIsImhhbmRsZURlbGV0ZSIsInB1c2giLCJwdXQiLCJ0aGVuIiwicmVzIiwic3VjY2VzcyIsInJlZnJlc2giLCJjYXRjaCIsImVyciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUltYWdlRGVsZXRlIiwiaXRlbSIsImltYWdlIiwiaW1hZ2VSZWYiLCJzdG9yYWdlIiwiZGVsZXRlIiwidGl0bGUiLCJjZW50ZXIiLCJzdHlsZSIsImhlaWdodCIsImluaXRpYWxTdGF0ZSIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uTW9kZWwiLCJwYWdlIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJjaGVja2JveFNlbGVjdGlvbiIsImRpc2FibGVSb3dTZWxlY3Rpb25PbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-orders/ManageOrdersClient.tsx\n"));

/***/ })

});
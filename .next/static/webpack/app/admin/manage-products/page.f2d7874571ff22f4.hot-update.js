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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/x-data-grid */ \"(app-pages-browser)/./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPrice */ \"(app-pages-browser)/./utils/formatPrice.ts\");\n/* harmony import */ var _app_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/Heading */ \"(app-pages-browser)/./app/components/Heading.tsx\");\n/* harmony import */ var _app_components_Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/Status */ \"(app-pages-browser)/./app/components/Status.tsx\");\n/* harmony import */ var _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=MdCached,MdClose,MdDelete,MdDone,MdRemoveRedEye!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/ActionBtn */ \"(app-pages-browser)/./app/components/ActionBtn.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/storage */ \"(app-pages-browser)/./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst ManageProductsClient = (param)=>{\n    let { products } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.getStorage)();\n    let rows = [];\n    if (products) {\n        rows = Object.values(products).map((product)=>{\n            return {\n                id: product.id,\n                name: product.name,\n                price: (0,_utils_formatPrice__WEBPACK_IMPORTED_MODULE_1__.formatPrice)(product.price),\n                brand: product.brand,\n                category: product.category,\n                inStock: product.inStock,\n                images: product.images\n            };\n        });\n    }\n    const columns = [\n        {\n            field: \"id\",\n            headerName: \"ID\",\n            width: 220\n        },\n        {\n            field: \"name\",\n            headerName: \"Name\",\n            width: 220\n        },\n        {\n            field: \"price\",\n            headerName: \"Price(USD)\",\n            width: 100,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"font-bold text-slate-800\",\n                    children: params.row.price\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"category\",\n            headerName: \"Category\",\n            width: 100\n        },\n        {\n            field: \"brand\",\n            headerName: \"Brand\",\n            width: 100\n        },\n        {\n            field: \"inStock\",\n            headerName: \"inStock\",\n            width: 120,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-3\",\n                    children: params.row.inStock == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"in stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDone,\n                        bg: \"bg-teal-200\",\n                        color: \"text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 15\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Status__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        text: \"out of stock\",\n                        icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdClose,\n                        bg: \"bg-rose-200\",\n                        color: \"text-rose-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, undefined);\n            }\n        },\n        {\n            field: \"action\",\n            headerName: \"Actions\",\n            width: 200,\n            renderCell: (params)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between gap-4 w-full mt-2.5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdCached,\n                            onClick: ()=>{\n                                handleToggleStock(params.row.id, params.row.inStock);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDelete,\n                            onClick: ()=>{\n                                handleDelete(params.row.id, params.row.images);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ActionBtn__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            icon: _barrel_optimize_names_MdCached_MdClose_MdDelete_MdDone_MdRemoveRedEye_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdRemoveRedEye,\n                            onClick: ()=>{}\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    ];\n    // handle toggle inStock of product inStock<->outStock\n    const handleToggleStock = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((id, inStock)=>{\n        // create PUT method in api/product/route\n        axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].put(\"/api/product\", {\n            id,\n            inStock: !inStock\n        }).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product status changed\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Oops! Something went wrong\");\n            console.log(err);\n        });\n    }, []);\n    // handle Delete action button\n    const handleDelete = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async (id, images)=>{\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"Deleting product, please wait!\");\n        const handleImageDelete = async ()=>{\n            try {\n                for (const item of images){\n                    if (item.image) {\n                        // item.image is URL of that image\n                        // get image from firebase storage\n                        const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.ref)(storage, item.image);\n                        // then wait to delete that image URL in firebase\n                        await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_8__.deleteObject)(imageRef);\n                        console.log(\"image deleted\", item.image);\n                    }\n                }\n            } catch (error) {\n                return console.log(\"Deleting images error\", error);\n            }\n        };\n        await handleImageDelete();\n        // we have ${id} in api/product/${id}\n        // so we have to create folder [id] inside the api/product\n        axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].delete(\"/api/product/\".concat(id)).then((res)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].success(\"Product deleted\");\n            router.refresh();\n        }).catch((err)=>{\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_6__[\"default\"].error(\"Failed to delete product\");\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-[1150px] m-auto text-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-6 mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"Manage Products\",\n                    center: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 174,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 600,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_11__.DataGrid, {\n                    rows: rows,\n                    columns: columns,\n                    initialState: {\n                        pagination: {\n                            paginationModel: {\n                                page: 0,\n                                pageSize: 9\n                            }\n                        }\n                    },\n                    pageSizeOptions: [\n                        9,\n                        20\n                    ],\n                    checkboxSelection: true,\n                    disableRowSelectionOnClick: true\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                    lineNumber: 177,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n                lineNumber: 176,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/admin/manage-products/ManageProductsClient.tsx\",\n        lineNumber: 172,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ManageProductsClient, \"Bs/DWU6BfBZIVO36UGPTFj55MUE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = ManageProductsClient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProductsClient);\nvar _c;\n$RefreshReg$(_c, \"ManageProductsClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHd0Q7QUFDTjtBQUNIO0FBQ0Y7QUFPckI7QUFDMkI7QUFDZjtBQUNWO0FBQ1U7QUFDUTtBQUNxQjtBQU1qRSxNQUFNaUIsdUJBQTREO1FBQUMsRUFDakVDLFFBQVEsRUFDVDs7SUFDQyxNQUFNQyxTQUFTTiwwREFBU0E7SUFDeEIsTUFBTU8sVUFBVUwsNERBQVVBO0lBQzFCLElBQUlNLE9BQVksRUFBRTtJQUVsQixJQUFJSCxVQUFVO1FBQ1pHLE9BQU9DLE9BQU9DLE1BQU0sQ0FBQ0wsVUFBVU0sR0FBRyxDQUFDLENBQUNDO1lBQ2xDLE9BQU87Z0JBQ0xDLElBQUlELFFBQVFDLEVBQUU7Z0JBQ2RDLE1BQU1GLFFBQVFFLElBQUk7Z0JBQ2xCQyxPQUFPM0IsK0RBQVdBLENBQUN3QixRQUFRRyxLQUFLO2dCQUNoQ0MsT0FBT0osUUFBUUksS0FBSztnQkFDcEJDLFVBQVVMLFFBQVFLLFFBQVE7Z0JBQzFCQyxTQUFTTixRQUFRTSxPQUFPO2dCQUN4QkMsUUFBUVAsUUFBUU8sTUFBTTtZQUN4QjtRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxVQUF3QjtRQUM1QjtZQUFFQyxPQUFPO1lBQU1DLFlBQVk7WUFBTUMsT0FBTztRQUFJO1FBQzVDO1lBQUVGLE9BQU87WUFBUUMsWUFBWTtZQUFRQyxPQUFPO1FBQUk7UUFDaEQ7WUFDRUYsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLE9BQU87WUFDUEMsWUFBWSxDQUFDQztnQkFDWCxxQkFDRSw4REFBQ0M7b0JBQUlDLFdBQVU7OEJBQTRCRixPQUFPRyxHQUFHLENBQUNiLEtBQUs7Ozs7OztZQUUvRDtRQUNGO1FBQ0E7WUFBRU0sT0FBTztZQUFZQyxZQUFZO1lBQVlDLE9BQU87UUFBSTtRQUN4RDtZQUFFRixPQUFPO1lBQVNDLFlBQVk7WUFBU0MsT0FBTztR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QywrREFBT0E7b0JBQUM4RCxPQUFNO29CQUFrQkMsTUFBTTs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDMUI7Z0JBQUkyQixPQUFPO29CQUFFQyxRQUFRO29CQUFLL0IsT0FBTztnQkFBTzswQkFDdkMsNEVBQUNwQyx1REFBUUE7b0JBQ1BxQixNQUFNQTtvQkFDTlksU0FBU0E7b0JBQ1RtQyxjQUFjO3dCQUNaQyxZQUFZOzRCQUNWQyxpQkFBaUI7Z0NBQUVDLE1BQU07Z0NBQUdDLFVBQVU7NEJBQUU7d0JBQzFDO29CQUNGO29CQUNBQyxpQkFBaUI7d0JBQUM7d0JBQUc7cUJBQUc7b0JBQ3hCQyxpQkFBaUI7b0JBQ2pCQywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0dBdEtNMUQ7O1FBR1dKLHNEQUFTQTs7O0tBSHBCSTtBQXdLTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hZG1pbi9tYW5hZ2UtcHJvZHVjdHMvTWFuYWdlUHJvZHVjdHNDbGllbnQudHN4Pzk1NjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRDb2xEZWYgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnQC91dGlscy9mb3JtYXRQcmljZSc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlYWRpbmcnO1xuaW1wb3J0IFN0YXR1cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1N0YXR1cyc7XG5pbXBvcnQge1xuICBNZENhY2hlZCxcbiAgTWRDbG9zZSxcbiAgTWREZWxldGUsXG4gIE1kRG9uZSxcbiAgTWRSZW1vdmVSZWRFeWUsXG59IGZyb20gJ3JlYWN0LWljb25zL21kJztcbmltcG9ydCBBY3Rpb25CdG4gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9BY3Rpb25CdG4nO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IHsgZGVsZXRlT2JqZWN0LCBnZXRTdG9yYWdlLCByZWYgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcblxuaW50ZXJmYWNlIE1hbmFnZVByb2R1Y3RzQ2xpZW50UHJvcHMge1xuICBwcm9kdWN0czogUHJvZHVjdDtcbn1cblxuY29uc3QgTWFuYWdlUHJvZHVjdHNDbGllbnQ6IFJlYWN0LkZDPE1hbmFnZVByb2R1Y3RzQ2xpZW50UHJvcHM+ID0gKHtcbiAgcHJvZHVjdHMsXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZSgpO1xuICBsZXQgcm93czogYW55ID0gW107XG5cbiAgaWYgKHByb2R1Y3RzKSB7XG4gICAgcm93cyA9IE9iamVjdC52YWx1ZXMocHJvZHVjdHMpLm1hcCgocHJvZHVjdDogYW55KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogcHJvZHVjdC5pZCxcbiAgICAgICAgbmFtZTogcHJvZHVjdC5uYW1lLFxuICAgICAgICBwcmljZTogZm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZSksXG4gICAgICAgIGJyYW5kOiBwcm9kdWN0LmJyYW5kLFxuICAgICAgICBjYXRlZ29yeTogcHJvZHVjdC5jYXRlZ29yeSxcbiAgICAgICAgaW5TdG9jazogcHJvZHVjdC5pblN0b2NrLFxuICAgICAgICBpbWFnZXM6IHByb2R1Y3QuaW1hZ2VzLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbnM6IEdyaWRDb2xEZWZbXSA9IFtcbiAgICB7IGZpZWxkOiAnaWQnLCBoZWFkZXJOYW1lOiAnSUQnLCB3aWR0aDogMjIwIH0sXG4gICAgeyBmaWVsZDogJ25hbWUnLCBoZWFkZXJOYW1lOiAnTmFtZScsIHdpZHRoOiAyMjAgfSxcbiAgICB7XG4gICAgICBmaWVsZDogJ3ByaWNlJyxcbiAgICAgIGhlYWRlck5hbWU6ICdQcmljZShVU0QpJyxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS04MDBcIj57cGFyYW1zLnJvdy5wcmljZX08L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7IGZpZWxkOiAnY2F0ZWdvcnknLCBoZWFkZXJOYW1lOiAnQ2F0ZWdvcnknLCB3aWR0aDogMTAwIH0sXG4gICAgeyBmaWVsZDogJ2JyYW5kJywgaGVhZGVyTmFtZTogJ0JyYW5kJywgd2lkdGg6IDEwMCB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAnaW5TdG9jaycsXG4gICAgICBoZWFkZXJOYW1lOiAnaW5TdG9jaycsXG4gICAgICB3aWR0aDogMTIwLFxuICAgICAgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtM1wiPlxuICAgICAgICAgICAge3BhcmFtcy5yb3cuaW5TdG9jayA9PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8U3RhdHVzXG4gICAgICAgICAgICAgICAgdGV4dD1cImluIHN0b2NrXCJcbiAgICAgICAgICAgICAgICBpY29uPXtNZERvbmV9XG4gICAgICAgICAgICAgICAgYmc9XCJiZy10ZWFsLTIwMFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LXRlYWwtNzAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxTdGF0dXNcbiAgICAgICAgICAgICAgICB0ZXh0PVwib3V0IG9mIHN0b2NrXCJcbiAgICAgICAgICAgICAgICBpY29uPXtNZENsb3NlfVxuICAgICAgICAgICAgICAgIGJnPVwiYmctcm9zZS0yMDBcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwidGV4dC1yb3NlLTcwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpZWxkOiAnYWN0aW9uJyxcbiAgICAgIGhlYWRlck5hbWU6ICdBY3Rpb25zJyxcbiAgICAgIHdpZHRoOiAyMDAsXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAtNCB3LWZ1bGwgbXQtMi41XCI+XG4gICAgICAgICAgICB7LyogdG9nZ2xlIGluU3RvY2sgb2YgcHJvZHVjdCBpblN0b2NrPC0+b3V0U3RvY2sgKi99XG4gICAgICAgICAgICA8QWN0aW9uQnRuXG4gICAgICAgICAgICAgIGljb249e01kQ2FjaGVkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlVG9nZ2xlU3RvY2socGFyYW1zLnJvdy5pZCwgcGFyYW1zLnJvdy5pblN0b2NrKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QWN0aW9uQnRuXG4gICAgICAgICAgICAgIGljb249e01kRGVsZXRlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKHBhcmFtcy5yb3cuaWQsIHBhcmFtcy5yb3cuaW1hZ2VzKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QWN0aW9uQnRuIGljb249e01kUmVtb3ZlUmVkRXllfSBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcblxuICAvLyBoYW5kbGUgdG9nZ2xlIGluU3RvY2sgb2YgcHJvZHVjdCBpblN0b2NrPC0+b3V0U3RvY2tcbiAgY29uc3QgaGFuZGxlVG9nZ2xlU3RvY2sgPSB1c2VDYWxsYmFjaygoaWQ6IHN0cmluZywgaW5TdG9jazogYm9vbGVhbikgPT4ge1xuICAgIC8vIGNyZWF0ZSBQVVQgbWV0aG9kIGluIGFwaS9wcm9kdWN0L3JvdXRlXG4gICAgYXhpb3NcbiAgICAgIC5wdXQoJy9hcGkvcHJvZHVjdCcsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGluU3RvY2s6ICFpblN0b2NrLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnUHJvZHVjdCBzdGF0dXMgY2hhbmdlZCcpO1xuICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRvYXN0LmVycm9yKCdPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICAvLyBoYW5kbGUgRGVsZXRlIGFjdGlvbiBidXR0b25cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGlkOiBzdHJpbmcsIGltYWdlczogYW55W10pID0+IHtcbiAgICB0b2FzdCgnRGVsZXRpbmcgcHJvZHVjdCwgcGxlYXNlIHdhaXQhJyk7XG5cbiAgICBjb25zdCBoYW5kbGVJbWFnZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBpbWFnZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS5pbWFnZSkge1xuICAgICAgICAgICAgLy8gaXRlbS5pbWFnZSBpcyBVUkwgb2YgdGhhdCBpbWFnZVxuICAgICAgICAgICAgLy8gZ2V0IGltYWdlIGZyb20gZmlyZWJhc2Ugc3RvcmFnZVxuICAgICAgICAgICAgY29uc3QgaW1hZ2VSZWYgPSByZWYoc3RvcmFnZSwgaXRlbS5pbWFnZSk7XG5cbiAgICAgICAgICAgIC8vIHRoZW4gd2FpdCB0byBkZWxldGUgdGhhdCBpbWFnZSBVUkwgaW4gZmlyZWJhc2VcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZU9iamVjdChpbWFnZVJlZik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgZGVsZXRlZCcsIGl0ZW0uaW1hZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdEZWxldGluZyBpbWFnZXMgZXJyb3InLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGF3YWl0IGhhbmRsZUltYWdlRGVsZXRlKCk7XG5cbiAgICAvLyB3ZSBoYXZlICR7aWR9IGluIGFwaS9wcm9kdWN0LyR7aWR9XG4gICAgLy8gc28gd2UgaGF2ZSB0byBjcmVhdGUgZm9sZGVyIFtpZF0gaW5zaWRlIHRoZSBhcGkvcHJvZHVjdFxuICAgIGF4aW9zXG4gICAgICAuZGVsZXRlKGAvYXBpL3Byb2R1Y3QvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdQcm9kdWN0IGRlbGV0ZWQnKTtcbiAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBwcm9kdWN0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMTE1MHB4XSBtLWF1dG8gdGV4dC14bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IG10LThcIj5cbiAgICAgICAgPEhlYWRpbmcgdGl0bGU9XCJNYW5hZ2UgUHJvZHVjdHNcIiBjZW50ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgPERhdGFHcmlkXG4gICAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgIGluaXRpYWxTdGF0ZT17e1xuICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZWw6IHsgcGFnZTogMCwgcGFnZVNpemU6IDkgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM9e1s5LCAyMF19XG4gICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgICAgICBkaXNhYmxlUm93U2VsZWN0aW9uT25DbGlja1xuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VQcm9kdWN0c0NsaWVudDtcbiJdLCJuYW1lcyI6WyJEYXRhR3JpZCIsImZvcm1hdFByaWNlIiwiSGVhZGluZyIsIlN0YXR1cyIsIk1kQ2FjaGVkIiwiTWRDbG9zZSIsIk1kRGVsZXRlIiwiTWREb25lIiwiTWRSZW1vdmVSZWRFeWUiLCJBY3Rpb25CdG4iLCJ1c2VDYWxsYmFjayIsImF4aW9zIiwidG9hc3QiLCJ1c2VSb3V0ZXIiLCJkZWxldGVPYmplY3QiLCJnZXRTdG9yYWdlIiwicmVmIiwiTWFuYWdlUHJvZHVjdHNDbGllbnQiLCJwcm9kdWN0cyIsInJvdXRlciIsInN0b3JhZ2UiLCJyb3dzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwiYnJhbmQiLCJjYXRlZ29yeSIsImluU3RvY2siLCJpbWFnZXMiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJyZW5kZXJDZWxsIiwicGFyYW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwicm93IiwidGV4dCIsImljb24iLCJiZyIsImNvbG9yIiwib25DbGljayIsImhhbmRsZVRvZ2dsZVN0b2NrIiwiaGFuZGxlRGVsZXRlIiwicHV0IiwidGhlbiIsInJlcyIsInN1Y2Nlc3MiLCJyZWZyZXNoIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbWFnZURlbGV0ZSIsIml0ZW0iLCJpbWFnZSIsImltYWdlUmVmIiwiZGVsZXRlIiwidGl0bGUiLCJjZW50ZXIiLCJzdHlsZSIsImhlaWdodCIsImluaXRpYWxTdGF0ZSIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uTW9kZWwiLCJwYWdlIiwicGFnZVNpemUiLCJwYWdlU2l6ZU9wdGlvbnMiLCJjaGVja2JveFNlbGVjdGlvbiIsImRpc2FibGVSb3dTZWxlY3Rpb25PbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/admin/manage-products/ManageProductsClient.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./hooks/useCart.tsx":
/*!***************************!*\
  !*** ./hooks/useCart.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: function() { return /* binding */ CartContext; },\n/* harmony export */   CartContextProvider: function() { return /* binding */ CartContextProvider; },\n/* harmony export */   useCart: function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n// creating Context\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\n// Export CartProvider\nconst CartContextProvider = (props)=>{\n    _s();\n    // define state cart Quantity\n    const [cartTotalQty, setCartTotalQty] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // define state cartProduct\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Persistent shopping cart session\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // cartItem = JSON string\n        // The key of localStorage must be the same at the below (which is key of localStorage)\n        const cartItem = localStorage.getItem(\"eShopCartItems\");\n        const cProducts = JSON.parse(cartItem);\n        // update\n        setCartProducts(cProducts);\n    }, []);\n    // handleAddProductToCart fucntion\n    const handleAddProductToCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((product)=>{\n        setCartProducts((prev)=>{\n            let updateCart;\n            // Add product to Cart\n            if (prev) {\n                updateCart = [\n                    ...prev,\n                    product\n                ];\n            } else {\n                updateCart = [\n                    product\n                ];\n            }\n            // When AddProductToCart, we updated 'eShopCartItems' to updateCart\n            // eShopCartItems is localStorage\n            localStorage.setItem(\"eShopCartItems\", JSON.stringify(updateCart));\n            // return the cart with product\n            return updateCart;\n        });\n    }, []);\n    const value = {\n        cartTotalQty,\n        cartProducts,\n        handleAddProductToCart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: value,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Desktop/E-CommerceShop/hooks/useCart.tsx\",\n        lineNumber: 73,\n        columnNumber: 10\n    }, undefined);\n};\n_s(CartContextProvider, \"RFWfDEzHrOlfLguYLkF1L5Obha8=\");\n_c = CartContextProvider;\n// Export the useCartContext\nconst useCart = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (context == null) {\n        throw new Error(\"useCart must be used within a CartContextProvider\");\n    }\n    return context;\n};\n_s1(useCart, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"CartContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZUNhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT2U7QUFVZixtQkFBbUI7QUFDWixNQUFNSyw0QkFBY0wsb0RBQWFBLENBQXlCLE1BQU07QUFNdkUsc0JBQXNCO0FBQ2YsTUFBTU0sc0JBQXNCLENBQUNDOztJQUNsQyw2QkFBNkI7SUFDN0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFakQsMkJBQTJCO0lBQzNCLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUM5QztJQUdGLG1DQUFtQztJQUNuQ0QsZ0RBQVNBLENBQUM7UUFDUix5QkFBeUI7UUFDekIsdUZBQXVGO1FBQ3ZGLE1BQU1TLFdBQWdCQyxhQUFhQyxPQUFPLENBQUM7UUFDM0MsTUFBTUMsWUFBc0NDLEtBQUtDLEtBQUssQ0FBQ0w7UUFFdkQsU0FBUztRQUNURCxnQkFBZ0JJO0lBQ2xCLEdBQUcsRUFBRTtJQUVMLGtDQUFrQztJQUNsQyxNQUFNRyx5QkFBeUJqQixrREFBV0EsQ0FBQyxDQUFDa0I7UUFDMUNSLGdCQUFnQixDQUFDUztZQUNmLElBQUlDO1lBRUosc0JBQXNCO1lBQ3RCLElBQUlELE1BQU07Z0JBQ1JDLGFBQWE7dUJBQUlEO29CQUFNRDtpQkFBUTtZQUNqQyxPQUFPO2dCQUNMRSxhQUFhO29CQUFDRjtpQkFBUTtZQUN4QjtZQUVBLG1FQUFtRTtZQUNuRSxpQ0FBaUM7WUFDakNOLGFBQWFTLE9BQU8sQ0FBQyxrQkFBa0JOLEtBQUtPLFNBQVMsQ0FBQ0Y7WUFFdEQsK0JBQStCO1lBQy9CLE9BQU9BO1FBQ1Q7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNRyxRQUFRO1FBQ1poQjtRQUNBRTtRQUNBUTtJQUNGO0lBRUEscUJBQU8sOERBQUNiLFlBQVlvQixRQUFRO1FBQUNELE9BQU9BO1FBQVEsR0FBR2pCLEtBQUs7Ozs7OztBQUN0RCxFQUFFO0dBaERXRDtLQUFBQTtBQWtEYiw0QkFBNEI7QUFDckIsTUFBTW9CLFVBQVU7O0lBQ3JCLE1BQU1DLFVBQVV6QixpREFBVUEsQ0FBQ0c7SUFFM0IsSUFBSXNCLFdBQVcsTUFBTTtRQUNuQixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxPQUFPRDtBQUNULEVBQUU7SUFSV0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQ2FydC50c3g/MDMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0UHJvZHVjdFR5cGUgfSBmcm9tICdAL2FwcC9wcm9kdWN0L1twcm9kdWN0aWRdL1Byb2R1Y3REZXRhaWxzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tICdyZWFjdCc7XG5cbi8vIENvbnRleHQgQ2FydFByb2R1Y3RUeXBlIHRoYXQgYWRkIHRvIHRoZSBDYXJ0IChzdG9yYWdlKVxuLy8gMyBhdHRyaWJ1dGVcbnR5cGUgQ2FydENvbnRleHRUeXBlID0ge1xuICBjYXJ0VG90YWxRdHk6IG51bWJlcjtcbiAgY2FydFByb2R1Y3RzOiBDYXJ0UHJvZHVjdFR5cGVbXSB8IG51bGw7XG4gIGhhbmRsZUFkZFByb2R1Y3RUb0NhcnQ6IChwcm9kdWN0OiBDYXJ0UHJvZHVjdFR5cGUpID0+IHZvaWQ7XG59O1xuXG4vLyBjcmVhdGluZyBDb250ZXh0XG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENhcnRDb250ZXh0VHlwZSB8IG51bGw+KG51bGwpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBbcHJvcE5hbWU6IHN0cmluZ106IGFueTtcbn1cblxuLy8gRXhwb3J0IENhcnRQcm92aWRlclxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0UHJvdmlkZXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIC8vIGRlZmluZSBzdGF0ZSBjYXJ0IFF1YW50aXR5XG4gIGNvbnN0IFtjYXJ0VG90YWxRdHksIHNldENhcnRUb3RhbFF0eV0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBkZWZpbmUgc3RhdGUgY2FydFByb2R1Y3RcbiAgY29uc3QgW2NhcnRQcm9kdWN0cywgc2V0Q2FydFByb2R1Y3RzXSA9IHVzZVN0YXRlPENhcnRQcm9kdWN0VHlwZVtdIHwgbnVsbD4oXG4gICAgbnVsbFxuICApO1xuXG4gIC8vIFBlcnNpc3RlbnQgc2hvcHBpbmcgY2FydCBzZXNzaW9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY2FydEl0ZW0gPSBKU09OIHN0cmluZ1xuICAgIC8vIFRoZSBrZXkgb2YgbG9jYWxTdG9yYWdlIG11c3QgYmUgdGhlIHNhbWUgYXQgdGhlIGJlbG93ICh3aGljaCBpcyBrZXkgb2YgbG9jYWxTdG9yYWdlKVxuICAgIGNvbnN0IGNhcnRJdGVtOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZVNob3BDYXJ0SXRlbXMnKTtcbiAgICBjb25zdCBjUHJvZHVjdHM6IENhcnRQcm9kdWN0VHlwZVtdIHwgbnVsbCA9IEpTT04ucGFyc2UoY2FydEl0ZW0pO1xuXG4gICAgLy8gdXBkYXRlXG4gICAgc2V0Q2FydFByb2R1Y3RzKGNQcm9kdWN0cyk7XG4gIH0sIFtdKTtcblxuICAvLyBoYW5kbGVBZGRQcm9kdWN0VG9DYXJ0IGZ1Y250aW9uXG4gIGNvbnN0IGhhbmRsZUFkZFByb2R1Y3RUb0NhcnQgPSB1c2VDYWxsYmFjaygocHJvZHVjdDogQ2FydFByb2R1Y3RUeXBlKSA9PiB7XG4gICAgc2V0Q2FydFByb2R1Y3RzKChwcmV2KSA9PiB7XG4gICAgICBsZXQgdXBkYXRlQ2FydDtcblxuICAgICAgLy8gQWRkIHByb2R1Y3QgdG8gQ2FydFxuICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgdXBkYXRlQ2FydCA9IFsuLi5wcmV2LCBwcm9kdWN0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVwZGF0ZUNhcnQgPSBbcHJvZHVjdF07XG4gICAgICB9XG5cbiAgICAgIC8vIFdoZW4gQWRkUHJvZHVjdFRvQ2FydCwgd2UgdXBkYXRlZCAnZVNob3BDYXJ0SXRlbXMnIHRvIHVwZGF0ZUNhcnRcbiAgICAgIC8vIGVTaG9wQ2FydEl0ZW1zIGlzIGxvY2FsU3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2VTaG9wQ2FydEl0ZW1zJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlQ2FydCkpO1xuXG4gICAgICAvLyByZXR1cm4gdGhlIGNhcnQgd2l0aCBwcm9kdWN0XG4gICAgICByZXR1cm4gdXBkYXRlQ2FydDtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHZhbHVlID0ge1xuICAgIGNhcnRUb3RhbFF0eSxcbiAgICBjYXJ0UHJvZHVjdHMsXG4gICAgaGFuZGxlQWRkUHJvZHVjdFRvQ2FydCxcbiAgfTtcblxuICByZXR1cm4gPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0gey4uLnByb3BzfSAvPjtcbn07XG5cbi8vIEV4cG9ydCB0aGUgdXNlQ2FydENvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG5cbiAgaWYgKGNvbnRleHQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydENvbnRleHRQcm92aWRlcicpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydENvbnRleHRQcm92aWRlciIsInByb3BzIiwiY2FydFRvdGFsUXR5Iiwic2V0Q2FydFRvdGFsUXR5IiwiY2FydFByb2R1Y3RzIiwic2V0Q2FydFByb2R1Y3RzIiwiY2FydEl0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY1Byb2R1Y3RzIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlQWRkUHJvZHVjdFRvQ2FydCIsInByb2R1Y3QiLCJwcmV2IiwidXBkYXRlQ2FydCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlQ2FydCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useCart.tsx\n"));

/***/ })

});
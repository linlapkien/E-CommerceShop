"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/product/route";
exports.ids = ["app/api/product/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.ts&appDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.ts&appDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_macbookpro_Projects_JS_E_CommerceShop_app_api_product_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/product/route.ts */ \"(rsc)/./app/api/product/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/product/route\",\n        pathname: \"/api/product\",\n        filename: \"route\",\n        bundlePath: \"app/api/product/route\"\n    },\n    resolvedPagePath: \"/Users/macbookpro/Projects/JS/E-CommerceShop/app/api/product/route.ts\",\n    nextConfigOutput,\n    userland: _Users_macbookpro_Projects_JS_E_CommerceShop_app_api_product_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/product/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9kdWN0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZHVjdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1hY2Jvb2twcm8lMkZQcm9qZWN0cyUyRkpTJTJGRS1Db21tZXJjZVNob3AlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWFjYm9va3BybyUyRlByb2plY3RzJTJGSlMlMkZFLUNvbW1lcmNlU2hvcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2hvcC8/OTQxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWFjYm9va3Byby9Qcm9qZWN0cy9KUy9FLUNvbW1lcmNlU2hvcC9hcHAvYXBpL3Byb2R1Y3Qvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3Qvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcm9kdWN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9wcm9kdWN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hY2Jvb2twcm8vUHJvamVjdHMvSlMvRS1Db21tZXJjZVNob3AvYXBwL2FwaS9wcm9kdWN0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9kdWN0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.ts&appDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./actions/getCurrentUser.ts":
/*!***********************************!*\
  !*** ./actions/getCurrentUser.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCurrentUser: () => (/* binding */ getCurrentUser),\n/* harmony export */   getSession: () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(rsc)/./pages/api/auth/[...nextauth].ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/prismadb */ \"(rsc)/./libs/prismadb.ts\");\n\n\n\nasync function getSession() {\n    return await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_0__.authOptions);\n}\n// this function enable us to get the user from anywhere in our application\nasync function getCurrentUser() {\n    try {\n        const session = await getSession();\n        // if we dont have session (no current user login) return null\n        if (!session?.user?.email) {\n            return null;\n        }\n        const currentUser = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n            where: {\n                email: session?.user?.email\n            }\n        });\n        if (!currentUser) {\n            return null;\n        }\n        // \"npx prisma db push\" after this function\n        return {\n            // https://github.com/prisma/prisma/discussions/14371,\n            // currentUser error: Type 'string' is not assignable to type 'Date'.\" #14371\n            ...currentUser,\n            createdAt: new Date(currentUser.createdAt),\n            updatedAt: new Date(currentUser.updatedAt),\n            emailVerified: currentUser.emailVerified?.toString() || null\n        };\n    } catch (error) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hY3Rpb25zL2dldEN1cnJlbnRVc2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2RDtBQUNoQjtBQUNSO0FBRTlCLGVBQWVHO0lBQ3BCLE9BQU8sTUFBTUYsMkRBQWdCQSxDQUFDRCxrRUFBV0E7QUFDM0M7QUFFQSwyRUFBMkU7QUFDcEUsZUFBZUk7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTUY7UUFFdEIsOERBQThEO1FBQzlELElBQUksQ0FBQ0UsU0FBU0MsTUFBTUMsT0FBTztZQUN6QixPQUFPO1FBQ1Q7UUFFQSxNQUFNQyxjQUFjLE1BQU1OLHNEQUFNQSxDQUFDSSxJQUFJLENBQUNHLFVBQVUsQ0FBQztZQUMvQ0MsT0FBTztnQkFDTEgsT0FBT0YsU0FBU0MsTUFBTUM7WUFDeEI7UUFDRjtRQUVBLElBQUksQ0FBQ0MsYUFBYTtZQUNoQixPQUFPO1FBQ1Q7UUFFQSwyQ0FBMkM7UUFDM0MsT0FBTztZQUNMLHNEQUFzRDtZQUN0RCw2RUFBNkU7WUFDN0UsR0FBR0EsV0FBVztZQUNkRyxXQUFXLElBQUlDLEtBQUtKLFlBQVlHLFNBQVM7WUFDekNFLFdBQVcsSUFBSUQsS0FBS0osWUFBWUssU0FBUztZQUN6Q0MsZUFBZU4sWUFBWU0sYUFBYSxFQUFFQyxjQUFjO1FBQzFEO0lBQ0YsRUFBRSxPQUFPQyxPQUFZO1FBQ25CLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNob3AvLi9hY3Rpb25zL2dldEN1cnJlbnRVc2VyLnRzPzFhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0nO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgcHJpc21hIGZyb20gJ0AvbGlicy9wcmlzbWFkYic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKCkge1xuICByZXR1cm4gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG59XG5cbi8vIHRoaXMgZnVuY3Rpb24gZW5hYmxlIHVzIHRvIGdldCB0aGUgdXNlciBmcm9tIGFueXdoZXJlIGluIG91ciBhcHBsaWNhdGlvblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKCk7XG5cbiAgICAvLyBpZiB3ZSBkb250IGhhdmUgc2Vzc2lvbiAobm8gY3VycmVudCB1c2VyIGxvZ2luKSByZXR1cm4gbnVsbFxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBlbWFpbDogc2Vzc2lvbj8udXNlcj8uZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFjdXJyZW50VXNlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gXCJucHggcHJpc21hIGRiIHB1c2hcIiBhZnRlciB0aGlzIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmlzbWEvcHJpc21hL2Rpc2N1c3Npb25zLzE0MzcxLFxuICAgICAgLy8gY3VycmVudFVzZXIgZXJyb3I6IFR5cGUgJ3N0cmluZycgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSAnRGF0ZScuXCIgIzE0MzcxXG4gICAgICAuLi5jdXJyZW50VXNlcixcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoY3VycmVudFVzZXIuY3JlYXRlZEF0KSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoY3VycmVudFVzZXIudXBkYXRlZEF0KSxcbiAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQ/LnRvU3RyaW5nKCkgfHwgbnVsbCxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhdXRoT3B0aW9ucyIsImdldFNlcnZlclNlc3Npb24iLCJwcmlzbWEiLCJnZXRTZXNzaW9uIiwiZ2V0Q3VycmVudFVzZXIiLCJzZXNzaW9uIiwidXNlciIsImVtYWlsIiwiY3VycmVudFVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjcmVhdGVkQXQiLCJEYXRlIiwidXBkYXRlZEF0IiwiZW1haWxWZXJpZmllZCIsInRvU3RyaW5nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./actions/getCurrentUser.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/product/route.ts":
/*!**********************************!*\
  !*** ./app/api/product/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/prismadb */ \"(rsc)/./libs/prismadb.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/actions/getCurrentUser */ \"(rsc)/./actions/getCurrentUser.ts\");\n\n\n\n// API: Post to add the product to db\nasync function POST(request) {\n    const currentUser = await (0,_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();\n    // If currentUser is not Admin role, return err\n    if (!currentUser || currentUser.role != \"ADMIN\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.error();\n    }\n    // get the body from req\n    const body = await request.json();\n    // properties from body\n    const { name, description, price, brand, category, inStock, images } = body;\n    // Create a product\n    const product = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.create({\n        data: {\n            name,\n            description,\n            brand,\n            category,\n            inStock,\n            images,\n            price: parseFloat(price)\n        }\n    });\n    // Return the user using NextResponse\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(product);\n}\n// API: PUT modify inStock of the product\nasync function PUT(request) {\n    const currentUser = await (0,_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_2__.getCurrentUser)();\n    // If currentUser is not Admin role, return err\n    if (!currentUser || currentUser.role != \"ADMIN\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.error();\n    }\n    const body = await request.json();\n    const { id, inStock } = body;\n    const product = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__[\"default\"].product.update({\n        where: {\n            id: id\n        },\n        data: {\n            inStock\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(product);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Byb2R1Y3Qvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDTTtBQUNlO0FBRTFELHFDQUFxQztBQUM5QixlQUFlRyxLQUFLQyxPQUFnQjtJQUN6QyxNQUFNQyxjQUFjLE1BQU1ILHVFQUFjQTtJQUV4QywrQ0FBK0M7SUFDL0MsSUFBSSxDQUFDRyxlQUFlQSxZQUFZQyxJQUFJLElBQUksU0FBUztRQUMvQyxPQUFPTCxxREFBWUEsQ0FBQ00sS0FBSztJQUMzQjtJQUVBLHdCQUF3QjtJQUN4QixNQUFNQyxPQUFPLE1BQU1KLFFBQVFLLElBQUk7SUFDL0IsdUJBQXVCO0lBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFLEdBQUdSO0lBRXZFLG1CQUFtQjtJQUNuQixNQUFNUyxVQUFVLE1BQU1qQixzREFBTUEsQ0FBQ2lCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO1FBQzFDQyxNQUFNO1lBQ0pUO1lBQ0FDO1lBQ0FFO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FKLE9BQU9RLFdBQVdSO1FBQ3BCO0lBQ0Y7SUFFQSxxQ0FBcUM7SUFDckMsT0FBT1gscURBQVlBLENBQUNRLElBQUksQ0FBQ1E7QUFDM0I7QUFFQSx5Q0FBeUM7QUFDbEMsZUFBZUksSUFBSWpCLE9BQWdCO0lBQ3hDLE1BQU1DLGNBQWMsTUFBTUgsdUVBQWNBO0lBRXhDLCtDQUErQztJQUMvQyxJQUFJLENBQUNHLGVBQWVBLFlBQVlDLElBQUksSUFBSSxTQUFTO1FBQy9DLE9BQU9MLHFEQUFZQSxDQUFDTSxLQUFLO0lBQzNCO0lBRUEsTUFBTUMsT0FBTyxNQUFNSixRQUFRSyxJQUFJO0lBQy9CLE1BQU0sRUFBRWEsRUFBRSxFQUFFUCxPQUFPLEVBQUUsR0FBR1A7SUFFeEIsTUFBTVMsVUFBVSxNQUFNakIsc0RBQU1BLENBQUNpQixPQUFPLENBQUNNLE1BQU0sQ0FBQztRQUMxQ0MsT0FBTztZQUFFRixJQUFJQTtRQUFHO1FBQ2hCSCxNQUFNO1lBQUVKO1FBQVE7SUFDbEI7SUFFQSxPQUFPZCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDUTtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzaG9wLy4vYXBwL2FwaS9wcm9kdWN0L3JvdXRlLnRzP2Y2MDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICdAL2FjdGlvbnMvZ2V0Q3VycmVudFVzZXInO1xuXG4vLyBBUEk6IFBvc3QgdG8gYWRkIHRoZSBwcm9kdWN0IHRvIGRiXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcblxuICAvLyBJZiBjdXJyZW50VXNlciBpcyBub3QgQWRtaW4gcm9sZSwgcmV0dXJuIGVyclxuICBpZiAoIWN1cnJlbnRVc2VyIHx8IGN1cnJlbnRVc2VyLnJvbGUgIT0gJ0FETUlOJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoKTtcbiAgfVxuXG4gIC8vIGdldCB0aGUgYm9keSBmcm9tIHJlcVxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIC8vIHByb3BlcnRpZXMgZnJvbSBib2R5XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlLCBicmFuZCwgY2F0ZWdvcnksIGluU3RvY2ssIGltYWdlcyB9ID0gYm9keTtcblxuICAvLyBDcmVhdGUgYSBwcm9kdWN0XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBwcmlzbWEucHJvZHVjdC5jcmVhdGUoe1xuICAgIGRhdGE6IHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGJyYW5kLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBpblN0b2NrLFxuICAgICAgaW1hZ2VzLFxuICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJpY2UpLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vIFJldHVybiB0aGUgdXNlciB1c2luZyBOZXh0UmVzcG9uc2VcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3QpO1xufVxuXG4vLyBBUEk6IFBVVCBtb2RpZnkgaW5TdG9jayBvZiB0aGUgcHJvZHVjdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcblxuICAvLyBJZiBjdXJyZW50VXNlciBpcyBub3QgQWRtaW4gcm9sZSwgcmV0dXJuIGVyclxuICBpZiAoIWN1cnJlbnRVc2VyIHx8IGN1cnJlbnRVc2VyLnJvbGUgIT0gJ0FETUlOJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoKTtcbiAgfVxuXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgY29uc3QgeyBpZCwgaW5TdG9jayB9ID0gYm9keTtcblxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJpc21hLnByb2R1Y3QudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZDogaWQgfSxcbiAgICBkYXRhOiB7IGluU3RvY2sgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3QpO1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsIk5leHRSZXNwb25zZSIsImdldEN1cnJlbnRVc2VyIiwiUE9TVCIsInJlcXVlc3QiLCJjdXJyZW50VXNlciIsInJvbGUiLCJlcnJvciIsImJvZHkiLCJqc29uIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJicmFuZCIsImNhdGVnb3J5IiwiaW5TdG9jayIsImltYWdlcyIsInByb2R1Y3QiLCJjcmVhdGUiLCJkYXRhIiwicGFyc2VGbG9hdCIsIlBVVCIsImlkIiwidXBkYXRlIiwid2hlcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/product/route.ts\n");

/***/ }),

/***/ "(rsc)/./libs/prismadb.ts":
/*!**************************!*\
  !*** ./libs/prismadb.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL3ByaXNtYWRiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxTQUFTQyxXQUFXQyxNQUFNLElBQUksSUFBSUgsd0RBQVlBO0FBRXBELElBQUlJLElBQXdCLEVBQWNGLFdBQVdDLE1BQU0sR0FBR0Y7QUFFOUQsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lc2hvcC8uL2xpYnMvcHJpc21hZGIudHM/N2Q5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBjbGllbnQgPSBnbG9iYWxUaGlzLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPSAncHJvZHVjdGlvbicpIGdsb2JhbFRoaXMucHJpc21hID0gY2xpZW50O1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./libs/prismadb.ts\n");

/***/ }),

/***/ "(rsc)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/prismadb */ \"(rsc)/./libs/prismadb.ts\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                // check we dont have user email or user PW, then throw err\n                if (!credentials?.email || !credentials.password) throw new Error(\"Invalid email or password\");\n                const user = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_4__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                // check we dont have user or user that have a hashedPW, then throw err\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                // compare user pw and hashed pw, if correct, return T else return F.\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_5___default().compare(credentials.password, user.hashedPassword);\n                // Wrong PW, throw err\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid email or password\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    debug: \"development\" == \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    // jwt secret key\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDTTtBQUNTO0FBQ1A7QUFDckI7QUFDVDtBQUVyQixNQUFNTSxjQUEyQjtJQUN0Q0MsU0FBU0osd0VBQWFBLENBQUNDLHNEQUFNQTtJQUM3QkksV0FBVztRQUNUUCxzRUFBY0EsQ0FBQztZQUNiUSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7UUFDaEQ7UUFDQVosMkVBQWtCQSxDQUFDO1lBQ2pCYSxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0FDLFVBQVU7b0JBQ1JGLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7WUFDRjtZQUNBLE1BQU1FLFdBQVVMLFdBQVc7Z0JBQ3pCLDJEQUEyRDtnQkFDM0QsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELFlBQVlJLFFBQVEsRUFDOUMsTUFBTSxJQUFJRSxNQUFNO2dCQUVsQixNQUFNQyxPQUFPLE1BQU1uQixzREFBTUEsQ0FBQ21CLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFDTFIsT0FBT0QsWUFBWUMsS0FBSztvQkFDMUI7Z0JBQ0Y7Z0JBRUEsdUVBQXVFO2dCQUN2RSxJQUFJLENBQUNNLFFBQVEsQ0FBQ0EsTUFBTUcsZ0JBQWdCO29CQUNsQyxNQUFNLElBQUlKLE1BQU07Z0JBQ2xCO2dCQUVBLHFFQUFxRTtnQkFDckUsTUFBTUssb0JBQW9CLE1BQU10QixxREFBYyxDQUM1Q1csWUFBWUksUUFBUSxFQUNwQkcsS0FBS0csY0FBYztnQkFHckIsc0JBQXNCO2dCQUN0QixJQUFJLENBQUNDLG1CQUFtQjtvQkFDdEIsTUFBTSxJQUFJTCxNQUFNO2dCQUNsQjtnQkFFQSxPQUFPQztZQUNUO1FBQ0Y7S0FDRDtJQUNETSxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxPQUFPckIsaUJBQXdCO0lBQy9Cc0IsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQSxpQkFBaUI7SUFDakJDLFFBQVF4QixRQUFRQyxHQUFHLENBQUN3QixlQUFlO0FBQ3JDLEVBQUU7QUFFRixpRUFBZW5DLGdEQUFRQSxDQUFDTSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNob3AvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XG5pbXBvcnQgQ3JlZGVudGlhbFByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gJ0BuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXInO1xuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYnMvcHJpc21hZGInO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IEF1dGhPcHRpb25zID0ge1xuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEIGFzIHN0cmluZyxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQgYXMgc3RyaW5nLFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxQcm92aWRlcih7XG4gICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICBsYWJlbDogJ2VtYWlsJyxcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgbGFiZWw6ICdwYXNzd29yZCcsXG4gICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgLy8gY2hlY2sgd2UgZG9udCBoYXZlIHVzZXIgZW1haWwgb3IgdXNlciBQVywgdGhlbiB0aHJvdyBlcnJcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCcpO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNrIHdlIGRvbnQgaGF2ZSB1c2VyIG9yIHVzZXIgdGhhdCBoYXZlIGEgaGFzaGVkUFcsIHRoZW4gdGhyb3cgZXJyXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlcj8uaGFzaGVkUGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbXBhcmUgdXNlciBwdyBhbmQgaGFzaGVkIHB3LCBpZiBjb3JyZWN0LCByZXR1cm4gVCBlbHNlIHJldHVybiBGLlxuICAgICAgICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHVzZXIuaGFzaGVkUGFzc3dvcmRcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBXcm9uZyBQVywgdGhyb3cgZXJyXG4gICAgICAgIGlmICghaXNDb3JyZWN0UGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICB9LFxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50JyxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgfSxcbiAgLy8gand0IHNlY3JldCBrZXlcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxQcm92aWRlciIsIlByaXNtYUFkYXB0ZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc0NvcnJlY3RQYXNzd29yZCIsImNvbXBhcmUiLCJwYWdlcyIsInNpZ25JbiIsImRlYnVnIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fproduct%2Froute&page=%2Fapi%2Fproduct%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproduct%2Froute.ts&appDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmacbookpro%2FProjects%2FJS%2FE-CommerceShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
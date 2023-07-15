"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StateContext */ \"./context/StateContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var _this1 = _this;\n    _s();\n    var image = product.image, name = product.name, details = product.details, price = product.price;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index = ref[0], setIndex = ref[1];\n    var ref1 = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext)(), decQty = ref1.decQty, incQty = ref1.incQty, qty = ref1.qty;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(image && image[index]),\n                                    className: \"product-detail-image\"\n                                }, void 0, false, {\n                                    fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                    lineNumber: 42,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image === null || image === void 0 ? void 0 : image.map(function(item, i) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(item),\n                                        className: i === index ? 'small-image selected-image' : 'small-image',\n                                        onMouseEnter: function() {\n                                            return setIndex(i);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 60,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 62,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"(20)\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details: \"\n                            }, void 0, false, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: details\n                            }, void 0, false, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \" $\",\n                                    price,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantity: \"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onCLick: decQty,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 70\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 76,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                onCLick: \"\",\n                                                children: qty\n                                            }, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 77,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onCLick: incQty,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 69\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                                lineNumber: 78,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: \"\",\n                                        children: \"Add to cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        onClick: \"\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                        lineNumber: 83,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"You may also like\"\n                    }, void 0, false, {\n                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.Product, {\n                                    product: item\n                                }, item._id, false, {\n                                    fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                                    lineNumber: 93,\n                                    columnNumber: 33\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                        lineNumber: 90,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/karel/Documents/ReactProjects2023/reactnext-ecommerce-app/store-v1/pages/product/[slug].js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this));\n};\n_s(ProductDetails, \"RHX+CyvRPjnfVi446d7TG24hYwg=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_4__.useStateContext\n    ];\n});\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1gsU0FBUyxFQUFDLENBQU07Z0RBQUNZLE9BQU8sRUFBRWYsTUFBTTtzSUFBR2YseURBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0dBRzdEaUIsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQVM7O2dIQUNuQmEsQ0FBTTt3Q0FBQ0MsSUFBSSxFQUFDLENBQVE7d0NBQUNkLFNBQVMsRUFBQyxDQUFhO3dDQUFDZSxPQUFPLEVBQUMsQ0FBRTtrREFBQyxDQUFXOzs7Ozs7Z0hBQ25FRixDQUFNO3dDQUFDQyxJQUFJLEVBQUMsQ0FBUTt3Q0FBQ2QsU0FBUyxFQUFDLENBQVM7d0NBQUNlLE9BQU8sRUFBQyxDQUFFO2tEQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLdkVoQixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7O2dHQUNoQ2dCLENBQUU7a0NBQUMsQ0FBaUI7Ozs7OztnR0FDcEJqQixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs4R0FDbkJELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFrQztzQ0FDNUNYLFFBQVEsQ0FBQ2MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTs4Q0FDZixNQUFNLCtEQUFKbkIsZ0RBQU87b0NBQWdCRyxPQUFPLEVBQUVnQixJQUFJO21DQUF2QkEsSUFBSSxDQUFDYSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZELENBQUM7R0F0RUs5QixjQUFjOztRQUtnQkQsa0VBQWU7OztLQUw3Q0MsY0FBYzs7QUFtRnBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSAnLi4vLi4vbGliL2NsaWVudCc7XG5pbXBvcnQgeyBBaU91dGxpbmVNaW51cywgQWlPdXRsaW5lUGx1cywgQWlGaWxsU3RhciwgQWlPdXRsaW5lU3RhciB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgdXNlU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdGF0ZUNvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBgKltfdHlwZSA9PSBcInByb2R1Y3RcIl0ge1xuICAgICAgICBzbHVnIHtcbiAgICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgfVxuICAgIH0gIFxuICAgIGA7XG5cbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG5cbiAgICBjb25zdCBwYXRocyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcbiAgICAgICAgLy93aGVuIHBhcmVudGhlc2lzIGFuZCBjdXJseSBicmFjZXMgd2UgcmV0dXJuIGluc3RhbnRseSBhbiBvYmplY3RcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBzbHVnOiBwcm9kdWN0LnNsdWcuY3VycmVudCBcbiAgICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocywgXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnIFxuICAgIH1cbn1cblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoeyBwcm9kdWN0LCBwcm9kdWN0cyB9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgeyBpbWFnZSwgbmFtZSwgZGV0YWlscywgcHJpY2UgfSA9IHByb2R1Y3Q7XG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IHsgZGVjUXR5LCBpbmNRdHksIHF0eSB9ID0gdXNlU3RhdGVDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoaW1hZ2UgJiYgaW1hZ2VbaW5kZXhdKX0gY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1pbWFnZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2U/Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW1nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2kgPT09IGluZGV4ID8gJ3NtYWxsLWltYWdlIHNlbGVjdGVkLWltYWdlJyA6ICdzbWFsbC1pbWFnZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEluZGV4KGkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtZGVzY1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMjApXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+RGV0YWlsczogPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2RldGFpbHN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPiAke3ByaWNlfSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5RdWFudGl0eTogPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInF1YW50aXR5LWRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaW51c1wiIG9uQ0xpY2s9e2RlY1F0eX0+PEFpT3V0bGluZU1pbnVzLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtXCIgb25DTGljaz1cIlwiPntxdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsdXNcIiBvbkNMaWNrPXtpbmNRdHl9PjxBaU91dGxpbmVQbHVzLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImFkZC10by1jYXJ0XCIgb25DbGljaz1cIlwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidXktbm93XCIgb25DbGljaz1cIlwiPkJ1eSBOb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF5bGlrZS1wcm9kdWN0cy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Zb3UgbWF5IGFsc28gbGlrZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLWNvbnRhaW5lciB0cmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBQcm9kdWN0IGtleT17aXRlbS5faWR9IHByb2R1Y3Q9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHNsdWcgfSB9ICkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwcm9kdWN0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICcke3NsdWd9J10gWzBdYDtcbiAgICBjb25zdCBwcm9kdWN0UXVlcnkgPSAnKltfdHlwZSA9PSBcInByb2R1Y3RcIl0nXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocHJvZHVjdFF1ZXJ5KTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IHByb2R1Y3RzLCBwcm9kdWN0IH1cbiAgICB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHMgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1cmxGb3IiLCJBaU91dGxpbmVNaW51cyIsIkFpT3V0bGluZVBsdXMiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lU3RhciIsIlByb2R1Y3QiLCJ1c2VTdGF0ZUNvbnRleHQiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImltYWdlIiwibmFtZSIsImRldGFpbHMiLCJwcmljZSIsImluZGV4Iiwic2V0SW5kZXgiLCJkZWNRdHkiLCJpbmNRdHkiLCJxdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtYXAiLCJpdGVtIiwiaSIsIm9uTW91c2VFbnRlciIsImgxIiwicCIsImg0IiwiaDMiLCJzcGFuIiwib25DTGljayIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiaDIiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});
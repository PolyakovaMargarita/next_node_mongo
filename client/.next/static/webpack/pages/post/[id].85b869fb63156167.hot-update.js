"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar */ \"./components/Navbar.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #EEF5FF;\\n  min-height: 100vh;\\n  width: 100%;\\n  padding-bottom: 100px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #FFFFFF;\\n  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);\\n  border-radius: 10px;\\n  font-style: normal;\\n  font-weight: 600;\\n  font-size: 16px;\\n  line-height: 24px;\\n  color: #3260A1;\\n  padding: 15px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  cursor: pointer;\\n  margin-top: 10px;\\n  outline: none;\\n  height: 45px;\\n  width: 117px;\\n  :hover {\\n    box-shadow: 0px 0px 35px rgba(148, 174, 213, 1);\\n    transition: .3s all ease;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  background: #FEFEFE;\\n  border-radius: 15px;\\n  margin-top: 50px;\\n  position: relative;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  flex: 0 0 50%;\\n  padding: 35px;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-style: normal;\\n  font-weight: 500;\\n  font-size: 24px;\\n  line-height: 28px;\\n  color: #3260A1;\\n  margin-bottom: 25px;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-style: normal;\\n  font-weight: 300;\\n  font-size: 18px;\\n  line-height: 21px;\\n  color: #000000;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-weight: 300;\\n  font-size: 14px;\\n  line-height: 16px;\\n  color: #FFFFFF;\\n  background: #EB5050;\\n  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);\\n  border-radius: 10px;\\n  width: 139px;\\n  height: 25px;\\n  left: 50%;\\n  bottom: -12px;\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n  transform: translate(-50%);\\n\\n  :hover {\\n    box-shadow: 0px 0px 25px rgba(148, 174, 213, 1);\\n    transition: .3s all ease;\\n  }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = Wrapper;\nconst BackBtn = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject1());\n_c1 = BackBtn;\nconst PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2());\n_c2 = PostWrapper;\nconst PostItem = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3());\n_c3 = PostItem;\nconst PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h1(_templateObject4());\n_c4 = PostTitle;\nconst PostText = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject5());\n_c5 = PostText;\nconst DelPost = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject6());\n_c6 = DelPost;\nconst Post = (param)=>{\n    let { post  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    if (!post) \"Loading...\";\n    const removePost = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"http://localhost:8000/api/post/remove\", {\n                id: post._id\n            }).then((res)=>{\n                console.log(res);\n            });\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: [\n                            \"Post | \",\n                            post.title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                        lineNumber: 125,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 124,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 127,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(BackBtn, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: \"/static/back.svg\",\n                                        alt: \"Picture back\",\n                                        width: 24,\n                                        height: 15\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                        lineNumber: 131,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \"Назад\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                lineNumber: 130,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 129,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostWrapper, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostTitle, {\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                            lineNumber: 142,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostText, {\n                                            children: post.text\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                            lineNumber: 143,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                    lineNumber: 141,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PostItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: post.imgUrl,\n                                        alt: \"Picture\",\n                                        width: 500,\n                                        height: 315\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                        lineNumber: 146,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                    lineNumber: 145,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DelPost, {\n                                    onClick: removePost,\n                                    children: \"Удалить статью\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                                    lineNumber: 153,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                            lineNumber: 140,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\личное\\\\projects\\\\practice\\\\next_node_mongo\\\\client\\\\pages\\\\post\\\\[id].js\",\n            lineNumber: 123,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c7 = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"BackBtn\");\n$RefreshReg$(_c2, \"PostWrapper\");\n$RefreshReg$(_c3, \"PostItem\");\n$RefreshReg$(_c4, \"PostTitle\");\n$RefreshReg$(_c5, \"PostText\");\n$RefreshReg$(_c6, \"DelPost\");\n$RefreshReg$(_c7, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNWO0FBQ2dCO0FBQ2hCO0FBQ0U7QUFDTDtBQUNZO0FBRXRDLE1BQU1RLFVBQVVQLDZEQUFVO0tBQXBCTztBQU9OLE1BQU1FLFVBQVVULDZEQUFVO01BQXBCUztBQXdCTixNQUFNQyxjQUFjViw2REFBVTtNQUF4QlU7QUFRTixNQUFNQyxXQUFXWCw2REFBVTtNQUFyQlc7QUFRTixNQUFNQyxZQUFZWiw0REFBUztNQUFyQlk7QUFTTixNQUFNRSxXQUFXZCw2REFBVTtNQUFyQmM7QUFRTixNQUFNQyxVQUFVZiw2REFBVTtNQUFwQmU7QUF5Qk4sTUFBTUMsT0FBTyxTQUFZO1FBQVgsRUFBQ0MsS0FBSSxFQUFDOztJQUNoQixNQUFNQyxTQUFTWixzREFBU0E7SUFFeEIsSUFBSSxDQUFDVyxNQUFNO0lBRVgsTUFBTUUsYUFBYSxVQUFZO1FBQzNCLElBQUk7WUFDQSxNQUFNZCxrREFBVSxDQUFFLHlDQUF3QztnQkFDdERlLElBQUlILEtBQUtJLEdBQUc7WUFDaEIsR0FBR0MsSUFBSSxDQUFDQyxDQUFBQSxNQUFPO2dCQUNYQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1o7UUFNUixFQUFFLE9BQU9HLEdBQUc7WUFDUkYsUUFBUUMsR0FBRyxDQUFDQztRQUNoQjtJQUNKO0lBRUEscUJBQ0k7a0JBQ0ksNEVBQUNuQjs7OEJBQ0csOERBQUNOLGtEQUFJQTs4QkFDRCw0RUFBQzBCOzs0QkFBTTs0QkFBUVYsS0FBS1UsS0FBSzs7Ozs7Ozs7Ozs7OzhCQUU3Qiw4REFBQ3pCLDBEQUFNQTs7Ozs7OEJBQ1AsOERBQUNNO29CQUFJb0IsV0FBVTs7c0NBQ1gsOERBQUN6QixrREFBSUE7NEJBQUMwQixNQUFLO3NDQUNQLDRFQUFDcEI7O2tEQUNHLDhEQUFDTCxtREFBS0E7d0NBQ0YwQixLQUFJO3dDQUNKQyxLQUFJO3dDQUNKQyxPQUFPO3dDQUNQQyxRQUFROzs7Ozs7b0NBQ1Y7Ozs7Ozs7Ozs7OztzQ0FJViw4REFBQ3ZCOzs4Q0FDRyw4REFBQ0M7O3NEQUNHLDhEQUFDQztzREFBV0ssS0FBS1UsS0FBSzs7Ozs7O3NEQUN0Qiw4REFBQ2I7c0RBQVVHLEtBQUtpQixJQUFJOzs7Ozs7Ozs7Ozs7OENBRXhCLDhEQUFDdkI7OENBQ0csNEVBQUNQLG1EQUFLQTt3Q0FDRjBCLEtBQUtiLEtBQUtrQixNQUFNO3dDQUNoQkosS0FBSTt3Q0FDSkMsT0FBTzt3Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7OENBR2hCLDhEQUFDbEI7b0NBQVFxQixTQUFTakI7OENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEQ7R0E1RE1IOztRQUNhVixrREFBU0E7OztNQUR0QlU7O0FBNkVOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW2lkXS5qcz80OTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjRUVGNUZGO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuYFxyXG5cclxuY29uc3QgQmFja0J0biA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCAyNXB4IHJnYmEoMTQ4LCAxNzQsIDIxMywgMC4xNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgY29sb3I6ICMzMjYwQTE7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIHdpZHRoOiAxMTdweDtcclxuICA6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IHJnYmEoMTQ4LCAxNzQsIDIxMywgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2U7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBQb3N0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjRkVGRUZFO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuXHJcbmNvbnN0IFBvc3RJdGVtID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMCAwIDUwJTtcclxuICBwYWRkaW5nOiAzNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBQb3N0VGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGNvbG9yOiAjMzI2MEExO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbmBcclxuXHJcbmNvbnN0IFBvc3RUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbmBcclxuXHJcbmNvbnN0IERlbFBvc3QgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6ICNFQjUwNTA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCByZ2JhKDE0OCwgMTc0LCAyMTMsIDAuMTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDEzOXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAtMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDE0OCwgMTc0LCAyMTMsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgaWYgKCFwb3N0KSBcIkxvYWRpbmcuLi5cIlxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wb3N0L3JlbW92ZWAsIHtcclxuICAgICAgICAgICAgICAgIGlkOiBwb3N0Ll9pZFxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZihyZXMuc3RhdHVzID09PSBcIk9LXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+UG9zdCB8IHtwb3N0LnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tCdG4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvc3RhdGljL2JhY2suc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezE1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDQt9Cw0LRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWNrQnRuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0VGl0bGU+e3Bvc3QudGl0bGV9PC9Qb3N0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9zdFRleHQ+e3Bvc3QudGV4dH08L1Bvc3RUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UG9zdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuaW1nVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMTV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Bvc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsUG9zdCBvbkNsaWNrPXtyZW1vdmVQb3N0fT7Qo9C00LDQu9C40YLRjCDRgdGC0LDRgtGM0Y48L0RlbFBvc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3N0V3JhcHBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyggY29udGV4dCApIHtcclxuICAgIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICAgIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Bvc3QvJHtpZH1gKVxyXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICBpZighcG9zdCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBvc3QgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSGVhZCIsIk5hdmJhciIsIkxpbmsiLCJJbWFnZSIsImF4aW9zIiwidXNlUm91dGVyIiwiV3JhcHBlciIsImRpdiIsIkJhY2tCdG4iLCJQb3N0V3JhcHBlciIsIlBvc3RJdGVtIiwiUG9zdFRpdGxlIiwiaDEiLCJQb3N0VGV4dCIsIkRlbFBvc3QiLCJQb3N0IiwicG9zdCIsInJvdXRlciIsInJlbW92ZVBvc3QiLCJpZCIsIl9pZCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZSIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImltZ1VybCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n"));

/***/ })

});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/src/views/pages/School/Create.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/pages/School/Create.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Create; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");

 // components


function Create() {
  // import Form from './Form'
  var Detail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./Detail */ "./resources/js/src/views/pages/School/Detail.js"));
  });
  var Fee = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./Fee */ "./resources/js/src/views/pages/School/Fee.js"));
  });
  var Account = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./Account */ "./resources/js/src/views/pages/School/Account.js"));
  });
  var Page404 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
    return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../Page404/Page404 */ "./resources/js/src/views/pages/Page404/Page404.js"));
  });

  var loading = function loading() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Loading"], {
      color: "primary",
      size: "lg"
    });
  };

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useRouteMatch"])(),
      path = _useRouteMatch.path;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "create-school"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    action: function action() {
      return history.push("/dashboard/school");
    }
  }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: loading()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: path,
    component: Detail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "".concat(path, "/fee/:userId"),
    component: Fee
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "".concat(path, "/account/:userId"),
    component: Account
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    component: Page404
  })))));
}

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/src/views/pages/School/School.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/pages/School/School.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return School; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
 // components


function School() {
  var image = '/images/default-school-img.png';
  var head = ['picture', 'name', 'email', 'phone', 'account'];
  var body = [{
    id: 1,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }, {
    id: 2,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }, {
    id: 3,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }, {
    id: 4,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }, {
    id: 5,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }, {
    id: 6,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }, {
    id: 7,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }, {
    id: 8,
    picture: image,
    name: 'Student Name',
    items: ['example@email.com', '08012345678', '001234567'],
    button: 'edit'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "school"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["PageHeading"], null, "School"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    classes: "xl"
  }, "Add School")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["PageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    heading: head,
    body: body,
    search: {
      placeholder: "Search School"
    }
  })));
}

/***/ })

}]);
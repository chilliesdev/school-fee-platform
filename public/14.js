(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./resources/js/src/views/pages/Profile/Profile.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/Profile/Profile.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks */ "./resources/js/src/hooks/index.js");
 // components

 // hooks


function Profile(_ref) {
  var userDetails = _ref.userDetails;
  var name = userDetails.name,
      email = userDetails.email,
      picture = userDetails.picture,
      address = userDetails.address,
      fees = userDetails.fees;

  var formatFee = function formatFee() {
    var tempFee = [];
    fees && fees.map(function (_ref2) {
      var id = _ref2.id,
          name = _ref2.name,
          amount = _ref2.amount;
      var temp = {
        id: "",
        label: "",
        additionalData: []
      };
      temp.id = id;
      temp.label = name;
      temp.additionalData.push("₦" + Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useThousand"])(amount));
      tempFee.push(temp);
    });
    return tempFee;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["PageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["SubHeading"], null, "Picture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: picture ? "/storage/" + picture : "/images/default-school-img.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["SubHeading"], null, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontWeight: "bold"
    }
  }, email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["SubHeading"], null, "Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["List"], {
    size: "sm",
    card: true,
    listItems: formatFee()
  })))));
}

/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/src/views/pages/Dashboard/Dashboard.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/Dashboard/Dashboard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
 // Components


function Dashboard() {
  var transactionList = [{
    id: 1,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"],
    button: "Invoice"
  }, {
    id: 2,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"],
    button: "Invoice"
  }, {
    id: 3,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"],
    button: "Invoice"
  }, {
    id: 4,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"],
    button: "Invoice"
  }, {
    id: 5,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"],
    button: "Invoice"
  }];
  var withdrawList = [{
    id: 1,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }, {
    id: 2,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }, {
    id: 3,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }, {
    id: 4,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }, {
    id: 5,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }, {
    id: 6,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }, {
    id: 7,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }, {
    id: 8,
    label: "STUDENT NAME",
    additionalData: ["$5,000", "10:00AM"]
  }];

  var SubHeadings = function SubHeadings(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.children);
  };

  var WithdrawButton = function WithdrawButton() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      classes: "xl"
    }, "WITHDRAW");
  };

  var WithdrawalList = function WithdrawalList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "withdrawal-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeadings, null, "Withdrawals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["List"], {
      size: "sm",
      card: true,
      listItems: withdrawList
    }));
  };

  var TransctionList = function TransctionList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "transaction-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeadings, null, "Latest Transactions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      classes: "sm"
    }, "MORE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["List"], {
      listItems: transactionList,
      size: "lg"
    }));
  };

  var Monitor = function Monitor() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "monitor"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeadings, null, "Transaction in Numbers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      figure: "\u20A6500,000",
      label: "balance"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      figure: "1000",
      label: "all"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      figure: "10",
      label: "today"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      figure: "50",
      label: "this month"
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-heading"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WithdrawButton, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Monitor, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransctionList, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WithdrawalList, null))));
}

/***/ })

}]);
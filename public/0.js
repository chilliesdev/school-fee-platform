(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/src/views/components/Alert.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/Alert.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
 // icons


function Alert(_ref) {
  var message = _ref.message,
      type = _ref.type;

  var ErrorMessage = function ErrorMessage() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "error-message"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__["BsExclamationCircleFill"], null)), message);
  };

  var PopUp = function PopUp() {
    return null;
  };

  switch (type) {
    case 'error':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorMessage, null);

    case 'popup':
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopUp, null);

    default:
      return null;
  }
}

/***/ }),

/***/ "./resources/js/src/views/components/Button.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/components/Button.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button(_ref) {
  var _ref$action = _ref.action,
      action = _ref$action === void 0 ? null : _ref$action,
      children = _ref.children,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? '' : _ref$classes,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "" : _ref$id;
  var moreClasses = classes;
  if (disabled) moreClasses = "".concat(classes, " disabled");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    disabled: disabled,
    type: type,
    className: "btn ".concat(moreClasses),
    id: id,
    onClick: function onClick(e) {
      e.preventDefault();
      action && action();
    }
  }, children);
}

/***/ }),

/***/ "./resources/js/src/views/components/Card.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/components/Card.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Card(_ref) {
  var figure = _ref.figure,
      label = _ref.label;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, figure), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "line"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, label));
}

/***/ }),

/***/ "./resources/js/src/views/components/CheckBox.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/components/CheckBox.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function CheckBox(_ref) {
  var label = _ref.label,
      ref = _ref.ref,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? null : _ref$name,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkBox",
    name: name,
    ref: ref,
    disabled: disabled
  }), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name,
    style: {
      display: 'inline'
    }
  }, label));
}

/***/ }),

/***/ "./resources/js/src/views/components/Input.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/Input.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./resources/js/src/views/components/Alert.js");
 // components


function Input(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "" : _ref$size,
      handleChange = _ref.handleChange,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? null : _ref$name,
      error = _ref.error,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group ".concat(size)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type,
    name: name,
    placeholder: placeholder,
    ref: handleChange,
    className: rounded ? 'input-rounded' : null,
    disabled: disabled
  }), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-icon"
  }, icon), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: error,
    type: "error"
  }));
}

/***/ }),

/***/ "./resources/js/src/views/components/List.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/components/List.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./resources/js/src/views/components/Button.js");


function List(_ref) {
  var size = _ref.size,
      listItems = _ref.listItems,
      card = _ref.card;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: card ? "list-group list-card" : "list-group"
  }, listItems ? listItems.map(function (_ref2) {
    var id = _ref2.id,
        label = _ref2.label,
        additionalData = _ref2.additionalData,
        button = _ref2.button;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "list-item ".concat(size),
      key: id
    }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "label"
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "additional-data"
    }, additionalData ? additionalData.map(function (item, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "additional-data-item",
        key: idx
      }, item);
    }) : null), button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      classes: true
    }, button));
  }) : null);
}

/***/ }),

/***/ "./resources/js/src/views/components/Logo.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/components/Logo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function Logo(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "lg" : _ref$size,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? "/" : _ref$link;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "logo ".concat(size)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: link,
    className: size
  }, size === "sm" ? "Pay" : "PayMySchoolFees"));
}

/***/ }),

/***/ "./resources/js/src/views/components/PageContent.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/components/PageContent.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PageContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content"
  }, children);
}

/***/ }),

/***/ "./resources/js/src/views/components/PageHeader.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/components/PageHeader.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PageHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header"
  }, children);
}

/***/ }),

/***/ "./resources/js/src/views/components/PageHeading.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/components/PageHeading.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageHeading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PageHeading(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "page-heading"
  }, children);
}

/***/ }),

/***/ "./resources/js/src/views/components/Select.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/components/Select.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./resources/js/src/views/components/Alert.js");
 // components


function Select(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "" : _ref$size,
      handleChange = _ref.handleChange,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? null : _ref$name,
      error = _ref.error,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      options = _ref.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group ".concat(size)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: name,
    ref: handleChange,
    disabled: disabled,
    defaultValue: "placeholder"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "placeholder",
    disabled: true
  }, placeholder), options ? options.map(function (_ref2) {
    var id = _ref2.id,
        name = _ref2.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: id,
      value: id
    }, name);
  }) : null), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-icon"
  }, icon), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: error,
    type: "error"
  }));
}

/***/ }),

/***/ "./resources/js/src/views/components/SubHeading.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/components/SubHeading.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubHeading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SubHeading(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "sub-heading"
  }, children);
}

/***/ }),

/***/ "./resources/js/src/views/components/Table.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/Table.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./resources/js/src/views/components/Button.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./resources/js/src/views/components/Input.js");



function Table(_ref) {
  var heading = _ref.heading,
      body = _ref.body,
      search = _ref.search;

  var Row = function Row(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, children);
  };

  var Head = function Head(_ref3) {
    var heading = _ref3.heading,
        search = _ref3.search;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, null, heading ? heading.map(function (heading, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        key: idx
      }, heading);
    }) : null, search && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "table-search"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rounded: true,
      placeholder: search.placeholder
    }))));
  };

  var Body = function Body(_ref4) {
    var body = _ref4.body;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, body ? body.map(function (_ref5) {
      var id = _ref5.id,
          name = _ref5.name,
          picture = _ref5.picture,
          items = _ref5.items,
          button = _ref5.button;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {
        key: id
      }, picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "table-picture-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "table-picture",
        src: picture
      })), name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "table-name"
      }, name), items && items.map(function (item, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: idx
        }, item);
      }), button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "table-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], null, button)));
    }) : null);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Head, {
    heading: heading,
    search: search
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, {
    body: body
  }));
}

/***/ }),

/***/ "./resources/js/src/views/components/index.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/index.js ***!
  \****************************************************/
/*! exports provided: Button, Input, Logo, Loading, Alert, CheckBox, Select, Card, List, PageHeading, PageHeader, PageContent, SubHeading, Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./resources/js/src/views/components/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./resources/js/src/views/components/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ "./resources/js/src/views/components/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./resources/js/src/views/components/Loading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Alert */ "./resources/js/src/views/components/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _Alert__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CheckBox */ "./resources/js/src/views/components/CheckBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _CheckBox__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Select */ "./resources/js/src/views/components/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Card */ "./resources/js/src/views/components/Card.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./List */ "./resources/js/src/views/components/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _PageHeading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PageHeading */ "./resources/js/src/views/components/PageHeading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeading", function() { return _PageHeading__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _PageHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PageHeader */ "./resources/js/src/views/components/PageHeader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeader", function() { return _PageHeader__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _PageContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PageContent */ "./resources/js/src/views/components/PageContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageContent", function() { return _PageContent__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _SubHeading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SubHeading */ "./resources/js/src/views/components/SubHeading.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubHeading", function() { return _SubHeading__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Table */ "./resources/js/src/views/components/Table.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_13__["default"]; });

















/***/ })

}]);
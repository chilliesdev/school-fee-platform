(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/src/actions/AuthAction.js":
/*!************************************************!*\
  !*** ./resources/js/src/actions/AuthAction.js ***!
  \************************************************/
/*! exports provided: requestLogin, saveAccessToken, requestLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLogin", function() { return requestLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAccessToken", function() { return saveAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLogout", function() { return requestLogout; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./resources/js/src/actions/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var requestLogin = function requestLogin(loginData) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', {
      'email': loginData.email,
      'password': loginData.password
    }).then(function (response) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_LOGIN"],
        payload: response
      });
    })["catch"](function (error) {
      return dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_LOGIN"],
        payload: error.response
      });
    });
  };
}; // To save accesss token

var saveAccessToken = function saveAccessToken(accessToken) {
  return function (dispatch) {
    // Set token in local storage or session
    accessToken.method === 'LOCAL_STORAGE' ? localStorage.setItem('accessToken', accessToken.token) : sessionStorage.setItem('accessToken', accessToken.token);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SAVE_ACCESS_TOKEN"],
      payload: accessToken.token
    });
  };
};
var requestLogout = function requestLogout(accessToken) {
  return function (dispatch) {
    // delete accessToken from local storage an session storage
    localStorage.removeItem('accessToken');
    sessionStorage.removeItem('accessToken');
    console.log('deleted accessToken');
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/logout', {
      headers: {
        'Authorization': "Bearer ".concat(accessToken)
      }
    }).then(function (response) {
      console.log(response);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_LOGOUT"],
        payload: response
      });
    })["catch"](function (error) {
      console.log(error.response);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["REQUEST_LOGOUT"],
        payload: error.response
      });
    });
  };
};

/***/ }),

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
      type = _ref$type === void 0 ? "button" : _ref$type;
  var moreClasses = classes;
  if (disabled) moreClasses = "".concat(classes, " disabled");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    disabled: disabled,
    type: type,
    className: "btn ".concat(moreClasses),
    onClick: function onClick(e) {
      e.preventDefault();
      action && action();
    }
  }, children);
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
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? null : _ref$value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group ".concat(size)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type,
    name: name,
    placeholder: placeholder,
    ref: handleChange // value={value ? value : ""}
    // className={error ? 'input-error' : null}
    ,
    disabled: disabled
  }), icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "input-icon"
  }, icon), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: error,
    type: "error"
  }));
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
      size = _ref$size === void 0 ? "lg" : _ref$size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    className: size
  }, "PayMySchoolFees"));
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

/***/ "./resources/js/src/views/components/index.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/index.js ***!
  \****************************************************/
/*! exports provided: Button, Input, Logo, Loading, Alert, CheckBox, Select */
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










/***/ }),

/***/ "./resources/js/src/views/pages/Login/ForgotPassword.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/Login/ForgotPassword.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
 // Components 


function ForgotPassword(_ref) {
  var changeContent = _ref.changeContent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card forgot-password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Logo"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Forgot Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    label: "Email",
    placeholder: "example@example.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Reset Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      changeContent();
    },
    href: "/vendor/forgot-password"
  }, "Go back to Login")));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Login/Index.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/Login/Index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login */ "./resources/js/src/views/pages/Login/Login.js");
/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword */ "./resources/js/src/views/pages/Login/ForgotPassword.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Content



function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      content = _useState2[0],
      setContent = _useState2[1]; // Login Card = true and Forgot Password Card is false


  var changeContent = function changeContent() {
    return setContent(!content);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login-container"
  }, content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {
    changeContent: changeContent
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForgotPassword__WEBPACK_IMPORTED_MODULE_2__["default"], {
    changeContent: changeContent
  }));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Login/Login.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/Login/Login.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_AuthAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../actions/AuthAction */ "./resources/js/src/actions/AuthAction.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Components 

 // Redux





function Login(_ref) {
  var loginResponse = _ref.loginResponse,
      saveAccessToken = _ref.saveAccessToken,
      requestLogin = _ref.requestLogin,
      changeContent = _ref.changeContent;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])(),
      loginInput = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object.entries(loginResponse).length > 0 && processLoginResponse();
  }, [loginResponse]); // States

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      statusError = _useState4[0],
      setStatusError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disabled = _useState6[0],
      setDisabled = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      rememberMe = _useState8[0],
      setRememberMe = _useState8[1]; // Input Requirements


  var inputRequirement = {
    email: {
      required: "Email is required"
    },
    password: {
      required: "Password is required"
    }
  };

  function sendLoginData(data) {
    var loginData = {
      email: data.email,
      password: data.password
    };
    setRememberMe(data.rememberMe);
    sendDataActon();
    requestLogin(loginData);
  }

  function sendDataActon() {
    var errorMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    setLoading(!loading);
    setDisabled(!disabled);
    setStatusError(errorMessage);
  }

  function processLoginResponse() {
    var statusCode = loginResponse.status;
    var response = loginResponse;
    var UNKNOWN_ERROR = 'Please try again';

    switch (statusCode) {
      case 200:
        // OK
        // method to store user access token
        var accessToken = {
          method: rememberMe ? 'LOCAL_STORAGE' : 'SESSION_STORAGE',
          token: response.data.access_token
        };
        saveAccessToken(accessToken);
        break;

      case 401:
        // Invalid Credentials
        sendDataActon(response.data.message);
        break;

      case 422:
        // Invalid Credentials
        sendDataActon(response.data.message);
        break;

      default:
        sendDataActon(UNKNOWN_ERROR);
        break;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Logo"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    label: "Email",
    placeholder: "example@example.com",
    handleChange: loginInput(inputRequirement.email),
    name: "email",
    error: errors.email && errors.email.message,
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    label: "Password",
    placeholder: "Password",
    type: "password",
    handleChange: loginInput(inputRequirement.password),
    name: "password",
    error: errors.password && errors.password.message,
    disabled: disabled
  }), statusError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
    message: statusError,
    type: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["CheckBox"], {
    label: "Remember Me?",
    handleChange: loginInput,
    name: "rememberMe",
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    action: handleSubmit(sendLoginData),
    disabled: disabled
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Loading"], {
    color: "default"
  }) : "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick(e) {
      e.preventDefault();
      changeContent();
    },
    href: "/vendor/forgot-password"
  }, "Forgot Password?")));
} // Redux


Login.propTypes = {
  requestLogin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  loginResponse: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  saveAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loginResponse: state.auth.loginResponse
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  requestLogin: _actions_AuthAction__WEBPACK_IMPORTED_MODULE_5__["requestLogin"],
  saveAccessToken: _actions_AuthAction__WEBPACK_IMPORTED_MODULE_5__["saveAccessToken"]
})(Login));

/***/ })

}]);
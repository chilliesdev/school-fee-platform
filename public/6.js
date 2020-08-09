(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_AuthAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/AuthAction */ "./resources/js/src/actions/AuthAction.js");
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
      setRememberMe = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      sendToDashboard = _useState10[0],
      setSendToDashboard = _useState10[1]; // Input Requirements


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
        setSendToDashboard(true);
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
  }, sendToDashboard && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/dashboard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Logo"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    label: "Email",
    placeholder: "example@example.com",
    handleChange: loginInput(inputRequirement.email),
    name: "email",
    error: errors.email && errors.email.message,
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    label: "Password",
    placeholder: "Password",
    type: "password",
    handleChange: loginInput(inputRequirement.password),
    name: "password",
    error: errors.password && errors.password.message,
    disabled: disabled
  }), statusError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    message: statusError,
    type: "error"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["CheckBox"], {
    label: "Remember Me?",
    handleChange: loginInput,
    name: "rememberMe",
    disabled: disabled
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    action: handleSubmit(sendLoginData),
    disabled: disabled
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Loading"], {
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
  requestLogin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  loginResponse: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
  saveAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    loginResponse: state.auth.loginResponse
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  requestLogin: _actions_AuthAction__WEBPACK_IMPORTED_MODULE_6__["requestLogin"],
  saveAccessToken: _actions_AuthAction__WEBPACK_IMPORTED_MODULE_6__["saveAccessToken"]
})(Login));

/***/ })

}]);
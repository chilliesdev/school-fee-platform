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

/***/ "./resources/js/src/actions/types.js":
/*!*******************************************!*\
  !*** ./resources/js/src/actions/types.js ***!
  \*******************************************/
/*! exports provided: REQUEST_LOGIN, SAVE_ACCESS_TOKEN, REQUEST_LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_LOGIN", function() { return REQUEST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_ACCESS_TOKEN", function() { return SAVE_ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_LOGOUT", function() { return REQUEST_LOGOUT; });
var REQUEST_LOGIN = 'RESQUEST_LOGIN';
var SAVE_ACCESS_TOKEN = 'SAVE_ACCESS_TOKEN';
var REQUEST_LOGOUT = 'REQUEST_LOGOUT';

/***/ }),

/***/ "./resources/js/src/views/pages/Logout/Logout.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/pages/Logout/Logout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_AuthAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/AuthAction */ "./resources/js/src/actions/AuthAction.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Loading */ "./resources/js/src/views/components/Loading.js");

 // Redux



 // components



function Logout(_ref) {
  var accessToken = _ref.accessToken,
      requestLogout = _ref.requestLogout;

  var loading = function loading() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      size: "lg"
    });
  }; // Run Logout function


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    requestLogout(accessToken);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: loading()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/vendor/login"
  }));
}

Logout.propType = {
  accesToken: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  requestLogout: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  requestLogout: _actions_AuthAction__WEBPACK_IMPORTED_MODULE_4__["requestLogout"]
})(Logout));

/***/ })

}]);
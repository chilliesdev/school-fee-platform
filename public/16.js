(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./resources/js/src/views/pages/School/Edit.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/pages/School/Edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks */ "./resources/js/src/hooks/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Redux


 // components

 // hooks



function Edit(_ref) {
  var accessToken = _ref.accessToken;
  // import Form from './Form'
  var Detail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./Detail */ "./resources/js/src/views/pages/School/Detail.js"));
  });
  var Fee = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./Fee */ "./resources/js/src/views/pages/School/Fee.js"));
  });
  var Account = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./Account */ "./resources/js/src/views/pages/School/Account.js"));
  });
  var Page404 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
    return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../Page404/Page404 */ "./resources/js/src/views/pages/Page404/Page404.js"));
  });

  var loadingScreen = function loadingScreen() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
      color: "primary",
      size: "lg"
    });
  };

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      userId = _useParams.userId;

  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRouteMatch"])(),
      path = _useRouteMatch.path;

  var _useSecureConnect = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSecureConnect"])(),
      get = _useSecureConnect.get; // state


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      userInfo = _useState2[0],
      setUserInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (userId) {
      getUserInfo();
    } else {
      setLoading(false);
    }
  }, [userId]);

  var getUserInfo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return get("/api/user/".concat(userId), accessToken);

            case 4:
              response = _context.sent;
              data = response.data;
              setUserInfo(data);
              setLoading(false);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0.response); // const { data } = response
              // history.push("/500")
              // switch (response.status) {
              //   // Unprocessable Entity
              //   case 422:
              //     break
              //   default:
              //     history.push("/500")
              //     break
              // }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function getUserInfo() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "create-school"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    action: function action() {
      return history.push("/dashboard/school");
    }
  }, "Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["PageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: loadingScreen()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(path),
    component: function component() {
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
        color: "primary",
        size: "lg"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Detail, {
        userInfo: userInfo
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "".concat(path, "/fee"),
    component: function component() {
      return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
        color: "primary",
        size: "lg"
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fee, {
        feeList: userInfo ? userInfo.fees : null
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: Page404
  })))));
} // props from redux


var mapStateToProps = function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  };
};

Edit.propTypes = {
  accessToken: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Edit));

/***/ })

}]);
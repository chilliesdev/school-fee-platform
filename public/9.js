(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/src/routes.js":
/*!************************************!*\
  !*** ./resources/js/src/routes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Dashboard = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./views/pages/Dashboard/Dashboard */ "./resources/js/src/views/pages/Dashboard/Dashboard.js"));
});
var School = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./views/pages/School/Index */ "./resources/js/src/views/pages/School/Index.js"));
});
var CreateSchool = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ./views/pages/School/Create */ "./resources/js/src/views/pages/School/Create.js"));
});
var EditSchool = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./views/pages/School/Edit */ "./resources/js/src/views/pages/School/Edit.js"));
});
var Transaction = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! ./views/pages/Transaction/Transaction */ "./resources/js/src/views/pages/Transaction/Transaction.js"));
});
var Profile = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./views/pages/Profile/Profile */ "./resources/js/src/views/pages/Profile/Profile.js"));
});
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "/",
  exact: true,
  name: "Dashboard",
  permission: "school",
  component: Dashboard
}, {
  path: "/school",
  exact: true,
  name: "School",
  permission: "admin",
  component: School
}, {
  path: "/school/create",
  exact: false,
  name: "Create School",
  permission: "admin",
  component: CreateSchool
}, {
  path: "/school/:userId/edit",
  exact: false,
  name: "Edit School",
  permission: "admin",
  component: EditSchool
}, {
  path: "/transaction",
  exact: true,
  name: "Transaction",
  permission: "school",
  component: Transaction
}, {
  path: "/profile",
  exact: true,
  name: "Profile",
  permission: "school",
  component: Profile
}]);

/***/ }),

/***/ "./resources/js/src/views/container/SideBar.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/container/SideBar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./resources/js/src/views/components/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // components


function SideBar(_ref) {
  var userType = _ref.userType,
      profilePicture = _ref.profilePicture;

  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
      pathname = _useLocation.pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      collapse = _useState2[0],
      setCollapse = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      changeClass = _useState4[0],
      setChangeClass = _useState4[1];

  function openSideBar() {
    setCollapse(true);
    setChangeClass(true); // setTimeout(() => {
    // }, 400)
  }

  function closeSideBar() {
    setCollapse(false);
    setChangeClass(false);
  }

  var admin = [{
    image: "/svg/user.svg",
    name: "School",
    link: "/school",
    svg: true
  }, {
    image: "/svg/gear.svg",
    name: "Logout",
    link: "/logout",
    svg: true
  }];
  var school = [{
    image: profilePicture ? "/storage/" + profilePicture : "/images/default-school-img.png",
    name: "Profile",
    link: "/profile",
    svg: false
  }, {
    image: "/svg/transaction.svg",
    name: "Transactions",
    link: "/transaction",
    svg: true
  }, {
    image: "/svg/marketing.svg",
    name: "Statistics",
    link: "/statistics",
    svg: true
  }, {
    image: "/svg/gear.svg",
    name: "Logout",
    link: "/logout",
    svg: true
  }];

  var SideBarList = function SideBarList(_ref2) {
    var image = _ref2.image,
        name = _ref2.name,
        _ref2$link = _ref2.link,
        link = _ref2$link === void 0 ? "#" : _ref2$link,
        currentPath = _ref2.currentPath,
        changeClass = _ref2.changeClass,
        svg = _ref2.svg;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: link === "/logout" ? link : "/dashboard".concat(link),
      className: "list-item ".concat("/dashboard".concat(link) === currentPath && "active")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: svg ? "icon svg" : "icon",
      src: image
    }), changeClass && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sidebar-text"
    }, name));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: collapse ? "sidebar open" : "sidebar",
    onMouseEnter: function onMouseEnter() {
      return openSideBar();
    },
    onMouseLeave: function onMouseLeave() {
      return closeSideBar();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Logo"], {
    link: "/dashboard",
    size: changeClass ? "lg" : "sm"
  }), userType === "admin" ? admin.map(function (_ref3, idx) {
    var image = _ref3.image,
        name = _ref3.name,
        link = _ref3.link,
        svg = _ref3.svg;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarList, {
      key: idx,
      image: image,
      name: name,
      link: link,
      currentPath: pathname,
      changeClass: changeClass,
      svg: svg
    });
  }) : school.map(function (_ref4, idx) {
    var image = _ref4.image,
        name = _ref4.name,
        link = _ref4.link,
        svg = _ref4.svg;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBarList, {
      key: idx,
      image: image,
      name: name,
      link: link,
      currentPath: pathname,
      changeClass: changeClass,
      svg: svg
    });
  }));
}

/***/ }),

/***/ "./resources/js/src/views/container/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/container/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes */ "./resources/js/src/routes.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideBar */ "./resources/js/src/views/container/SideBar.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks */ "./resources/js/src/hooks/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Protected routes

 // Redux


 // Container components

 // components

 // custom Hooks



function Index(_ref) {
  var accessToken = _ref.accessToken;
  var Page404 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(function () {
    return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ../pages/Page404/Page404 */ "./resources/js/src/views/pages/Page404/Page404.js"));
  });

  var loading = function loading() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Loading"], {
      color: "primary",
      size: "lg"
    });
  };

  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useRouteMatch"])(),
      path = _useRouteMatch.path;

  var _useSecureConnect = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useSecureConnect"])(),
      get = _useSecureConnect.get; // State


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      redirect = _useState2[0],
      setRedirect = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userDetails = _useState4[0],
      setUserDetails = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    accessToken && validateAccessToken();
  }, [accessToken]);

  var validateAccessToken = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, _response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return get("/api/auth", accessToken);

            case 3:
              response = _context.sent;
              setUserDetails(response.data);
              _context.next = 18;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              _response = _context.t0.response;
              _context.t1 = _response.status;
              _context.next = _context.t1 === 401 ? 13 : 15;
              break;

            case 13:
              setRedirect(true);
              return _context.abrupt("break", 18);

            case 15:
              console.error(_response); // If their was an error retry

              setTimeout(function () {
                return validateAccessToken();
              }, 3000);
              return _context.abrupt("break", 18);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function validateAccessToken() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: loading()
  }, !userDetails ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Loading"], {
    color: "primary",
    size: "lg"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SideBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    userType: userDetails.type,
    profilePicture: userDetails.picture
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dashboard-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_3__["default"] ? _routes__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (route, idx) {
    return (
      /*#__PURE__*/
      // check if user has permission to access the route
      // route.permission === userDetails.type || route.permission === "general" &&
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        key: idx,
        exact: route.exact,
        path: "".concat(path).concat(route.path),
        component: function component() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(route.component, {
            userDetails: userDetails
          });
        }
      })
    );
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    component: Page404
  })))), (!accessToken || redirect) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
    to: "/login"
  }));
} // props from redux


var mapStateToProps = function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  };
};

Index.propTypes = {
  accessToken: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Index));

/***/ })

}]);
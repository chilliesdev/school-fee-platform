(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/src/views/pages/Dashboard/Dashboard.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/Dashboard/Dashboard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hooks */ "./resources/js/src/hooks/index.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // redux


 // Components

 // hooks

 // icons



function Dashboard(_ref) {
  var _errors$amount;

  var accessToken = _ref.accessToken,
      userDetails = _ref.userDetails;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors;

  var _useSecureConnect = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useSecureConnect"])(),
      get = _useSecureConnect.get,
      post = _useSecureConnect.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    balance: 0,
    today: 0,
    month: 0,
    all: 0,
    account: {},
    payment: [],
    withdraw: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dashboardData = _useState2[0],
      setDashboardData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var account = dashboardData.account;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getDataFromServer();
  }, []);

  var getDataFromServer = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return get("/api/dashboard", accessToken);

            case 3:
              _yield$get = _context.sent;
              data = _yield$get.data;
              setDashboardData(data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.response);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getDataFromServer() {
      return _ref2.apply(this, arguments);
    };
  }();

  function onSubmit(formData) {
    setLoading(true);
    requestWithdraw(formData);
  }

  var requestWithdraw = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(formData) {
      var _yield$post, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return post("/api/payment/withdraw", formData, accessToken);

            case 3:
              _yield$post = _context2.sent;
              data = _yield$post.data;
              console.log(data); // setDashboardData(data)

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.response);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function requestWithdraw(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var withdarwSturture = function withdarwSturture(data) {
    var newStructure = [];
    data.map(function (row) {
      var id = row.id,
          name = row.name,
          amount = row.amount,
          created_at = row.created_at,
          label = row.label;

      if (!label) {
        var tempRow = {
          id: id,
          // label: name,
          additionalData: [Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useThousand"])("\u20A6".concat(amount)), created_at]
        };
        newStructure.push(tempRow);
      } else {
        newStructure.push(row);
      }
    });
    return newStructure;
  };

  var paymentSturture = function paymentSturture(data) {
    var newStructure = [];
    data.map(function (row) {
      var id = row.id,
          name = row.name,
          amount = row.amount,
          created_at = row.created_at,
          label = row.label;

      if (!label) {
        // If it as has not been structured
        var tempRow = {
          id: id,
          label: name,
          additionalData: [row["class"], Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useThousand"])("\u20A6".concat(amount)), created_at],
          button: "Invoice"
        };
        newStructure.push(tempRow);
      } else {
        newStructure.push(row);
      }
    });
    return newStructure;
  };

  var WithdrawalList = function WithdrawalList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "withdrawal-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], null, "Withdrawals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["List"], {
      pagination: {
        status: true,
        structure: withdarwSturture,
        accessToken: accessToken
      },
      size: "sm",
      card: true,
      listItems: dashboardData.withdraw
    }));
  };

  var PaymentList = function PaymentList() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "transaction-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], null, "Latest Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      classes: "sm"
    }, "MORE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["List"], {
      pagination: {
        status: true,
        structure: paymentSturture,
        loadMoreDistructure: function loadMoreDistructure(data) {
          return data.payment;
        },
        accessToken: accessToken
      },
      listItems: dashboardData.payment,
      size: "lg"
    }));
  };

  var Monitor = function Monitor(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "monitor"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], null, "Transaction in Numbers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "card-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      figure: "\u20A6".concat(Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useThousand"])(props.balance)) // animate
      ,
      label: "balance"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      figure: props.all,
      label: "all"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      figure: props.today,
      label: "today"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      figure: props.month,
      label: "this month"
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, userDetails.type === "admin" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
    from: "/dashboard",
    to: "/dashboard/school"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["PageHeader"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["PageHeading"], null, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    title: "Withdraw",
    disabled: Object.keys(account).length > 0 ? loading : true,
    loading: loading,
    handleClick: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "withdraw-container"
  }, Object.keys(account).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], null, "Account Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, account.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, account.bank_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, account.account_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "withdraw-form",
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    rounded: true,
    type: "number",
    name: "amount",
    handleChange: register({
      required: "Please add a valid amount"
    }),
    placeholder: "Amount",
    error: (_errors$amount = errors.amount) === null || _errors$amount === void 0 ? void 0 : _errors$amount.message
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "bank-error"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__["BsExclamationCircleFill"], null)), "Unable To Withdraw due to invalid account details please contact the Admin")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["PageContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Monitor, dashboardData), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PaymentList, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WithdrawalList, null)))));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  };
};

Dashboard.propTypes = {
  accessToken: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Dashboard));

/***/ })

}]);
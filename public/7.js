(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/src/views/pages/School/Fee.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/pages/School/Fee.js ***!
  \****************************************************/
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
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Redux


 // components

 // custom hooks

 // icons



function Fee(_ref) {
  var accessToken = _ref.accessToken,
      feeList = _ref.feeList;

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      userId = _useParams.userId;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useSecureConnect = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSecureConnect"])(),
      post = _useSecureConnect.post,
      deleteRequest = _useSecureConnect.deleteRequest;

  function checkFeeListProp() {
    return feeList ? feeList.length > 0 ? true : false : false;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    checkFeeListProp() && mapFeeToForm();
  }, [feeList]); // state

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([1]),
      _useState4 = _slicedToArray(_useState3, 2),
      allListId = _useState4[0],
      setallListId = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1]; // Store server endpoint


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    form: "/api/fee/".concat(userId),
    next: function next(userId) {
      return "dashboard/school/create/account/".concat(userId);
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      endpoint = _useState8[0],
      setEndpoint = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    general: ""
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      serverError = _useState10[0],
      setServerError = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name_1: "",
    amount_1: ""
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      fees = _useState12[0],
      setFees = _useState12[1];

  function mapFeeToForm() {
    var tempFeeId = [];
    var tempFees = {};
    feeList.map(function (_ref2) {
      var id = _ref2.id,
          amount = _ref2.amount,
          name = _ref2.name;
      tempFeeId.push(id);
      tempFees["name_".concat(id)] = name, tempFees["amount_".concat(id)] = amount;
    });
    setallListId(tempFeeId);
    setFees(tempFees);
    setEndpoint({
      form: "/api/fee/".concat(userId, "/edit"),
      next: function next(userId) {
        return "/dashboard/school";
      }
    });
  }

  function addallListId() {
    setallListId(function (prevAllListId) {
      var _objectSpread2;

      var numId = prevAllListId[prevAllListId.length - 1];
      numId++; // initailize the new id in the state

      setFees(_objectSpread(_objectSpread({}, fees), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, "name_".concat(numId), ""), _defineProperty(_objectSpread2, "amount_".concat(numId), ""), _objectSpread2)));
      return [].concat(_toConsumableArray(prevAllListId), [numId]);
    });
  }

  function removeListId(id) {
    var removeIdFromList = function removeIdFromList() {
      var newAllListId = allListId.filter(function (value) {
        return value !== id;
      });
      setallListId(newAllListId);
    };

    var removeFeeFromList = function removeFeeFromList() {
      var newFees = fees;
      var toRemove = ["name_".concat(id), "amount_".concat(id)];
      Object.keys(newFees).filter(function (key) {
        return toRemove.includes(key);
      }).forEach(function (key) {
        return delete newFees[key];
      });
      setFees(newFees);
    };

    var deleteFromServer = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return deleteRequest("/api/fee/".concat(id), accessToken);

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 5]]);
      }));

      return function deleteFromServer() {
        return _ref3.apply(this, arguments);
      };
    }();

    if (allListId.length > 1) {
      removeIdFromList();
      removeFeeFromList(); // if the data is coming from the server

      checkFeeListProp() && deleteFromServer();
    }
  }

  function validate() {
    var tempErrors = {};

    var setTempError = function setTempError(name, message) {
      tempErrors = _objectSpread(_objectSpread({}, tempErrors), {}, _defineProperty({}, name, message));
    };

    var checkEmpty = function checkEmpty() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var removeId = function removeId() {
        return name.substring(0, name.length - 2);
      };

      value.length < 1 && setTempError(name, "Fee ".concat(removeId(), " is required"));
    };

    var validateAmountisPositive = function validateAmountisPositive() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (name.substring(0, 7) === "amount_") {
        var newValue = Number(value);
        newValue < 0 && setTempError(name, "Amount most be greater than zero");
      }
    };

    for (var key in fees) {
      checkEmpty(key, fees[key]);
      validateAmountisPositive(key, fees[key]);
    } // If there is an error add it to the state


    if (Object.keys(tempErrors).length > 0) {
      return setErrors(tempErrors);
    } else {
      setErrors({});
      return fees;
    }
  }

  var sendToServer = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(formData) {
      var response, data, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setLoading(true);
              _context2.prev = 1;
              _context2.next = 4;
              return post(endpoint.form, formData, accessToken);

            case 4:
              setLoading(false); // history.push(endpoint.next(userId))

              history.push("/dashboard/school");
              _context2.next = 21;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              response = _context2.t0.response;
              console.error(response);
              setLoading(false);
              data = response.data, status = response.status;
              _context2.t1 = status;
              _context2.next = _context2.t1 === 422 ? 17 : 19;
              break;

            case 17:
              if (data.errors) {
                // very unlikely
                console.error("serve error");
              }

              return _context2.abrupt("break", 21);

            case 19:
              setServerError(_objectSpread(_objectSpread({}, serverError), {}, {
                general: "Something went wrong, please try again"
              }));
              return _context2.abrupt("break", 21);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function sendToServer(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  function handleSubmit() {
    var formData = validate();
    formData && sendToServer(formData);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "school-form fee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["SubHeading"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    action: addallListId,
    disabled: loading
  }, "Add")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["List"], {
    size: "sm",
    card: true,
    disableLoading: true
  }, serverError.general && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    message: serverError.general,
    type: "error"
  }), allListId.map(function (id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: id,
      className: "list-item sm fee-list-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "close-icon btn",
      onClick: function onClick() {
        return removeListId(id);
      },
      disabled: allListId.length < 2 ? true :  false || loading
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoMdClose"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: ""
    }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "name_".concat(id),
      id: "name_".concat(id),
      className: "input-rounded",
      placeholder: "Fee Name",
      value: fees["name_".concat(id)],
      onChange: function onChange(e) {
        setFees(_objectSpread(_objectSpread({}, fees), {}, _defineProperty({}, e.target.name, e.target.value)));
      },
      disabled: loading
    }), errors && errors["name_".concat(id)] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
      message: errors["name_".concat(id)],
      type: "error"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: ""
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "number",
      name: "amount_".concat(id),
      id: "amount_".concat(id),
      className: "input-rounded",
      placeholder: "Fee Amount",
      value: fees["amount_".concat(id)],
      onChange: function onChange(e) {
        setFees(_objectSpread(_objectSpread({}, fees), {}, _defineProperty({}, e.target.name, e.target.value)));
      },
      disabled: loading
    }), errors && errors["amount_".concat(id)] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
      message: errors["amount_".concat(id)],
      type: "error"
    })));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    action: handleSubmit,
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
    color: "default"
  }) : "Next")));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  };
};

Fee.propTypes = {
  accessToken: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Fee));

/***/ })

}]);
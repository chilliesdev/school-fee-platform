(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "./node_modules/react-countup/build/index.js");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "./resources/js/src/hooks/index.js");

 // hooks


function Card(_ref) {
  var figure = _ref.figure,
      label = _ref.label,
      prefix = _ref.prefix,
      thousand = _ref.thousand;

  var _useCountUp = Object(react_countup__WEBPACK_IMPORTED_MODULE_1__["useCountUp"])({
    end: figure,
    prefix: prefix
  }),
      countUp = _useCountUp.countUp;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dashboard-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, thousand ? Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useThousand"])(countUp) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    end: figure,
    prefix: prefix ? prefix : null
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      handleChange = _ref.handleChange,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? null : _ref$name,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group checkbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkBox",
    id: name,
    name: name,
    ref: handleChange,
    disabled: disabled
  }), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name,
    style: {
      display: "inline"
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
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? "" : _ref$id,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "" : _ref$size,
      _ref$controlled = _ref.controlled,
      controlled = _ref$controlled === void 0 ? false : _ref$controlled,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "" : _ref$value,
      handleChange = _ref.handleChange,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? null : _ref$name,
      error = _ref.error,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? false : _ref$rounded;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: type === 'file' ? "input-group ".concat(size, " input-file-group") : "input-group ".concat(size)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), controlled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type,
    name: name,
    id: id,
    placeholder: placeholder,
    value: value,
    onChange: handleChange,
    className: rounded ? 'input-rounded' : null,
    disabled: disabled
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type,
    name: name,
    id: name,
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./resources/js/src/views/components/Button.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./resources/js/src/views/components/Loading.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "./resources/js/src/hooks/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



 // hooks


function List(_ref) {
  var children = _ref.children,
      size = _ref.size,
      listItems = _ref.listItems,
      card = _ref.card,
      pagination = _ref.pagination,
      _ref$disableLoading = _ref.disableLoading,
      disableLoading = _ref$disableLoading === void 0 ? false : _ref$disableLoading;

  // @pagingation object
  // pagination.status boolean
  // pagination.stucture function
  // pagination.loadMoreDistructure function
  // pagination.accessToken string
  var _useSecureConnect = Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useSecureConnect"])(),
      get = _useSecureConnect.get;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    pagination && pagination.status ? Object.keys(listItems).length > 0 && mapListToPaginate(listItems) : setList(listItems);
  }, [listItems]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    current_page: "",
    last_page: "",
    next_page_url: "",
    prev_page_url: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      paginationUrl = _useState4[0],
      setPaginationUrl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  function mapListToPaginate(toMap) {
    var current_page = toMap.current_page,
        last_page = toMap.last_page,
        next_page_url = toMap.next_page_url,
        prev_page_url = toMap.prev_page_url;
    var formattedData = pagination.structure(list.length > 0 ? list.concat(toMap.data) : toMap.data);
    setList(formattedData); // setUrl(next_page_url)

    setPaginationUrl({
      current_page: current_page,
      last_page: last_page,
      next_page_url: next_page_url,
      prev_page_url: prev_page_url
    });
  }

  function loadMore() {
    var requestNextPage = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, moreData, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return get(paginationUrl.next_page_url, pagination.accessToken);

              case 3:
                response = _context.sent;
                // check if respons will be nested
                // if it will nested a disstructure function will be sent
                moreData = pagination.loadMoreDistructure ? pagination.loadMoreDistructure(response.data) : response.data;
                console.log(moreData);
                setLoading(false);
                mapListToPaginate(moreData);
                _context.next = 14;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                _response = _context.t0.response;
                console.error(_response);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      return function requestNextPage() {
        return _ref2.apply(this, arguments);
      };
    }(); // it will not request more if it is at the last page


    if (paginationUrl.current_page != paginationUrl.last_page) {
      setLoading(true);
      requestNextPage();
    }
  }

  function handleScroll(e) {
    var bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    bottom && loadMore();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    onScroll: handleScroll,
    className: card ? "list-group list-card" : "list-group"
  }, children, list && list.length > 0 ? list.map(function (_ref4) {
    var id = _ref4.id,
        label = _ref4.label,
        additionalData = _ref4.additionalData,
        button = _ref4.button;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "list-item ".concat(size),
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main"
    }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "label"
    }, label), button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      classes: true
    }, button)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "additional-data"
    }, additionalData ? additionalData.map(function (item, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "additional-data-item",
        key: idx
      }, item);
    }) : null));
  }) : // waiting for data loading screen
  disableLoading ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary",
    size: "lg",
    relative: true
  }), loading &&
  /*#__PURE__*/
  // pagination loading
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "loading-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "primary",
    size: "md",
    relative: true
  })));
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

/***/ "./resources/js/src/views/components/Modal.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/Modal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Button */ "./resources/js/src/views/components/Button.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loading */ "./resources/js/src/views/components/Loading.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // components




var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    img: _defineProperty({
      margin: "auto",
      display: "block",
      width: 250
    }, "width", 300)
  };
};

var DialogTitle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(function (_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onClose = _ref.onClose,
      titleClass = _ref.titleClass,
      other = _objectWithoutProperties(_ref, ["children", "classes", "onClose", "titleClass"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    disableTypography: true,
    className: classes.root
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: "modal-title",
    variant: "h4"
  }, children), onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null)) : null);
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(function Modal(_ref2) {
  var title = _ref2.title,
      handleClick = _ref2.handleClick,
      children = _ref2.children,
      disabled = _ref2.disabled,
      loading = _ref2.loading,
      confirmButton = _ref2.confirmButton;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var toggleOpen = function toggleOpen() {
    return setOpen(!open);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    onClose: toggleOpen,
    "aria-labelledby": "customized-dialog-title",
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogTitle, {
    onClose: toggleOpen
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    classes: "modal-confirm-btn",
    disabled: disabled,
    action: handleClick
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "default"
  }) : confirmButton ? confirmButton : "Confirm"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    action: toggleOpen,
    classes: "xl"
  }, title));
}));

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
      options = _ref.options,
      rounded = _ref.rounded,
      newValue = _ref.newValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group ".concat(size)
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: name,
    ref: handleChange,
    disabled: disabled,
    className: rounded ? "select-rounded" : "",
    defaultValue: "placeholder"
  }, placeholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    disabled: true
  }, placeholder), options ? options.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: option.id,
      value: option[newValue] || option.id
    }, option.name);
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./resources/js/src/views/components/Button.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./resources/js/src/views/components/Input.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loading */ "./resources/js/src/views/components/Loading.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./resources/js/src/hooks/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Table(_ref) {
  var heading = _ref.heading,
      body = _ref.body,
      search = _ref.search,
      url = _ref.url,
      pagination = _ref.pagination;

  // @pagingation object
  // pagination.status boolean
  // pagination.stucture function
  // pagination.loadMoreDistructure function
  // pagination.accessToken string
  var _useSecureConnect = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useSecureConnect"])(),
      get = _useSecureConnect.get;

  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    pagination && pagination.status ? Object.keys(body).length > 0 && mapBodyToPaginate(body) : setTableBody(body);
  }, [body]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      tableBody = _useState2[0],
      setTableBody = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    current_page: "",
    last_page: "",
    next_page_url: "",
    prev_page_url: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      paginationUrl = _useState4[0],
      setPaginationUrl = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  function mapBodyToPaginate(toMap) {
    var current_page = toMap.current_page,
        last_page = toMap.last_page,
        next_page_url = toMap.next_page_url,
        prev_page_url = toMap.prev_page_url;
    var formattedData = pagination.structure(toMap.data);

    if (toMap.refresh) {
      setTableBody(formattedData);
    } else {
      setTableBody(tableBody.concat(formattedData));
    }

    setPaginationUrl({
      current_page: current_page,
      last_page: last_page,
      next_page_url: next_page_url,
      prev_page_url: prev_page_url
    });
  }

  function loadMore() {
    var requestNextPage = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return get(paginationUrl.next_page_url, pagination.accessToken);

              case 3:
                _yield$get = _context.sent;
                data = _yield$get.data;
                setLoading(false);
                mapBodyToPaginate(_objectSpread(_objectSpread({}, data), {}, {
                  refresh: false
                }));
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);
                console.error(_context.t0.response);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function requestNextPage() {
        return _ref2.apply(this, arguments);
      };
    }(); // it will not request more if it is at the last page


    if (paginationUrl.current_page != paginationUrl.last_page) {
      setLoading(true);
      requestNextPage();
    }
  }

  function handleScroll(e) {
    var bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    bottom && loadMore();
  }

  var verifyDataSent = function verifyDataSent() {
    return Object.keys(body).length > 0 ? body.data.length > 0 ? true : null : false;
  };

  var Row = function Row(_ref3) {
    var children = _ref3.children,
        addClass = _ref3.addClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      className: addClass
    }, children);
  };

  var Head = function Head(_ref4) {
    var heading = _ref4.heading,
        search = _ref4.search;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, null, heading ? heading.map(function (heading, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        key: idx
      }, heading);
    }) : null, search && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      className: "table-search"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rounded: true,
      placeholder: search.placeholder
    }))));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Head, {
    heading: heading,
    search: search
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    onScroll: handleScroll
  }, verifyDataSent() ? tableBody.map(function (_ref5) {
    var id = _ref5.id,
        name = _ref5.name,
        picture = _ref5.picture,
        items = _ref5.items,
        button = _ref5.button,
        addClass = _ref5.addClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, {
      key: id,
      addClass: addClass
    }, picture && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "table-picture-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "table-picture",
      src: picture
    })), name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "table-name"
    }, name), items && items.map(function (item, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        key: idx
      }, item);
    }), button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "table-button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      action: function action() {
        return history.push(url + id + "/edit");
      }
    }, button)));
  }) : verifyDataSent() === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "table-loading-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "table-loading-data"
  }, "No Data")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "table-loading-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "table-loading-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    size: "md",
    relative: true
  }))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "table-loading-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "table-loading-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    size: "md",
    relative: true
  })))));
}

/***/ }),

/***/ "./resources/js/src/views/components/index.js":
/*!****************************************************!*\
  !*** ./resources/js/src/views/components/index.js ***!
  \****************************************************/
/*! exports provided: Button, Input, Logo, Loading, Alert, CheckBox, Select, Card, List, PageHeading, PageHeader, PageContent, SubHeading, Table, Modal */
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

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Modal */ "./resources/js/src/views/components/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_14__["default"]; });


















/***/ })

}]);
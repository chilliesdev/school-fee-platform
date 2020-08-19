(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@hookform/resolvers/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@hookform/resolvers/dist/index.esm.js ***!
  \************************************************************/
/*! exports provided: joiResolver, superstructResolver, yupResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joiResolver", function() { return joiResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superstructResolver", function() { return superstructResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yupResolver", function() { return yupResolver; });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");


const parseErrorSchema = (error, validateAllFieldCriteria) => Array.isArray(error.inner) && error.inner.length
    ? error.inner.reduce((previous, { path, message, type }) => {
        const previousTypes = (previous[path] && previous[path].types) || {};
        return Object.assign(Object.assign({}, previous), (path
            ? {
                [path]: Object.assign(Object.assign({}, (previous[path] || {
                    message,
                    type,
                })), (validateAllFieldCriteria
                    ? {
                        types: Object.assign(Object.assign({}, previousTypes), { [type]: previousTypes[type]
                                ? [...[].concat(previousTypes[type]), message]
                                : message }),
                    }
                    : {})),
            }
            : {}));
    }, {})
    : {
        [error.path]: { message: error.message, type: error.type },
    };
const yupResolver = (schema, options = {
    abortEarly: false,
}) => async (values, context, validateAllFieldCriteria = false) => {
    try {
        if (options.context &&
            "development" === 'development') {
            // eslint-disable-next-line no-console
            console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead");
        }
        return {
            values: (await schema.validate(values, Object.assign(Object.assign({}, options), { context }))),
            errors: {},
        };
    }
    catch (e) {
        const parsedErrors = parseErrorSchema(e, validateAllFieldCriteria);
        return {
            values: {},
            errors: validateAllFieldCriteria
                ? parsedErrors
                : Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["transformToNestObject"])(parsedErrors),
        };
    }
};

var convertArrayToPathName = (paths) => paths
    .reduce((previous, path, index) => `${previous}${typeof path === 'string'
    ? `${index > 0 ? '.' : ''}${path}`
    : `[${path}]`}`, '')
    .toString();

const parseErrorSchema$1 = (error, validateAllFieldCriteria) => Array.isArray(error.failures)
    ? error.failures.reduce((previous, { path, message = '', type }) => {
        const currentPath = convertArrayToPathName(path);
        return Object.assign(Object.assign({}, previous), (path
            ? previous[currentPath] && validateAllFieldCriteria
                ? {
                    [currentPath]: Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["appendErrors"])(currentPath, validateAllFieldCriteria, previous, type || '', message),
                }
                : {
                    [currentPath]: previous[currentPath] || Object.assign({ message,
                        type }, (validateAllFieldCriteria
                        ? {
                            types: { [type || '']: message || true },
                        }
                        : {})),
                }
            : {}));
    }, {})
    : [];
const superstructResolver = (schema) => async (values, _, validateAllFieldCriteria = false) => {
    try {
        return {
            values: schema(values),
            errors: {},
        };
    }
    catch (e) {
        return {
            values: {},
            errors: Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["transformToNestObject"])(parseErrorSchema$1(e, validateAllFieldCriteria)),
        };
    }
};

const parseErrorSchema$2 = (error, validateAllFieldCriteria) => Array.isArray(error.details)
    ? error.details.reduce((previous, { path, message = '', type }) => {
        const currentPath = convertArrayToPathName(path);
        return Object.assign(Object.assign({}, previous), (path
            ? previous[currentPath] && validateAllFieldCriteria
                ? {
                    [currentPath]: Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["appendErrors"])(currentPath, validateAllFieldCriteria, previous, type, message),
                }
                : {
                    [currentPath]: previous[currentPath] || Object.assign({ message,
                        type }, (validateAllFieldCriteria
                        ? {
                            types: { [type]: message || true },
                        }
                        : {})),
                }
            : {}));
    }, {})
    : [];
const joiResolver = (schema, options = {
    abortEarly: false,
}) => async (values, _, validateAllFieldCriteria = false) => {
    try {
        return {
            values: await schema.validateAsync(values, Object.assign({}, options)),
            errors: {},
        };
    }
    catch (e) {
        return {
            values: {},
            errors: Object(react_hook_form__WEBPACK_IMPORTED_MODULE_0__["transformToNestObject"])(parseErrorSchema$2(e, validateAllFieldCriteria)),
        };
    }
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./resources/js/src/views/pages/School/Detail.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/pages/School/Detail.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers */ "./node_modules/@hookform/resolvers/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hooks */ "./resources/js/src/hooks/index.js");


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





 // components

 // Redux


 // hooks



function Form(_ref) {
  var _errors$picture, _errors$name, _errors$email, _errors$address, _errors$password, _errors$conFirmPasswo;

  var accessToken = _ref.accessToken,
      userInfo = _ref.userInfo;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useParams"])(),
      userId = _useParams.userId;

  var _useStudentValidation = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useStudentValidationRules"])(),
      create = _useStudentValidation.create,
      edit = _useStudentValidation.edit;

  var signupSchema = yup__WEBPACK_IMPORTED_MODULE_4__["object"]().shape(userId ? edit : create);

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    resolver: Object(_hookform_resolvers__WEBPACK_IMPORTED_MODULE_3__["yupResolver"])(signupSchema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors,
      watch = _useForm.watch,
      setValue = _useForm.setValue; // values being watch


  var picture = watch("picture");

  var _useSecureConnect = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useSecureConnect"])(),
      post = _useSecureConnect.post;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (userInfo) {
      setEdit(userInfo);
    }
  }, [userInfo]); // state

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    email: "",
    password: "",
    address: "",
    picture: "",
    general: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      serverError = _useState2[0],
      setServerError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1]; // Store picture sent from server when Editing


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      pictureValueFromServer = _useState6[0],
      setPictureValueFromServer = _useState6[1]; // Store server endpoint


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    form: "/api/user",
    next: function next(userId) {
      return "/dashboard/school/create/fee/" + userId;
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      endpoint = _useState8[0],
      setEndpoint = _useState8[1];

  function setEdit(data) {
    var name = data.name,
        email = data.email,
        address = data.address,
        picture = data.picture;
    name && setValue("name", name);
    email && setValue("email", email);
    address && setValue("address", address);
    picture && setPictureValueFromServer(picture);
    setEndpoint({
      form: "/api/user/".concat(userId, "/edit"),
      next: function next(userId) {
        return "/dashboard/school/".concat(userId, "/edit/fee/");
      }
    });
  }

  var sendFormData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      var formData, response, _data, _response, _data2;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              formData = _objectSpread(_objectSpread({}, data), {}, {
                picture: data.picture[0],
                type: 1
              });
              _context.prev = 2;
              _context.next = 5;
              return post(endpoint.form, formData, accessToken, picture.length > 0 ? true : false);

            case 5:
              response = _context.sent;
              console.log(response);
              _data = response.data;
              history.push(endpoint.next(_data.id));
              _context.next = 23;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              _response = _context.t0.response;
              setLoading(false);
              _data2 = _response.data;
              _context.t1 = _response.status;
              _context.next = _context.t1 === 422 ? 19 : 21;
              break;

            case 19:
              if (_data2.errors) {
                setServerError(_objectSpread(_objectSpread({}, serverError), {}, {
                  name: _data2.errors.name && _data2.errors.name[0],
                  email: _data2.errors.email && _data2.errors.email[0],
                  password: _data2.errors.password && _data2.errors.password[0],
                  address: _data2.errors.address && _data2.errors.address[0],
                  picture: _data2.errors.picture && _data2.errors.picture[0]
                }));
              }

              return _context.abrupt("break", 23);

            case 21:
              setServerError(_objectSpread(_objectSpread({}, serverError), {}, {
                general: "Something went wrong, please try again"
              }));
              return _context.abrupt("break", 23);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));

    return function sendFormData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  function onSubmit(data) {
    sendFormData(data);
  }

  var getImageSource = function getImageSource() {
    return picture ? // check if a picture has been uploading and displays it
    picture[0] ? URL.createObjectURL(picture[0]) : // check if a picture was sent from the server
    pictureValueFromServer ? "/storage/" + pictureValueFromServer : "/images/default-school-img.png" : "/images/default-school-img.png";
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "school-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], null, "Picture"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: getImageSource()
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    rounded: true,
    name: "picture",
    label: "change",
    type: "file",
    disabled: loading,
    handleChange: register,
    error: ((_errors$picture = errors.picture) === null || _errors$picture === void 0 ? void 0 : _errors$picture.message) || serverError.picture
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["SubHeading"], null, "Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    rounded: true,
    name: "name",
    label: "Name",
    placeholder: "School Name",
    disabled: loading,
    handleChange: register,
    error: ((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message) || serverError.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    rounded: true,
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "example@email.com",
    disabled: loading,
    handleChange: register,
    error: ((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message) || serverError.email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    rounded: true,
    name: "address",
    label: "Address",
    placeholder: "Opp. City, State, Country",
    disabled: loading,
    handleChange: register,
    error: ((_errors$address = errors.address) === null || _errors$address === void 0 ? void 0 : _errors$address.message) || serverError.address
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    rounded: true,
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "password",
    disabled: loading,
    handleChange: register,
    error: ((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message) || serverError.password
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    rounded: true,
    name: "conFirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm Password",
    disabled: loading,
    handleChange: register,
    error: (_errors$conFirmPasswo = errors.conFirmPassword) === null || _errors$conFirmPasswo === void 0 ? void 0 : _errors$conFirmPasswo.message
  }), serverError.general && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
    message: serverError.general,
    type: "error"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    action: handleSubmit(onSubmit),
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Loading"], {
    color: "default"
  }) : "Next")));
} // props from redux


var mapStateToProps = function mapStateToProps(state) {
  return {
    accessToken: state.auth.accessToken
  };
};

Form.propTypes = {
  accessToken: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Form));

/***/ })

}]);
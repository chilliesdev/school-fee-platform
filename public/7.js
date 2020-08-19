(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/react-paystack/dist/index.es.js":
/*!******************************************************!*\
  !*** ./node_modules/react-paystack/dist/index.es.js ***!
  \******************************************************/
/*! exports provided: PaystackButton, PaystackConsumer, usePaystackPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaystackButton", function() { return PaystackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaystackConsumer", function() { return PaystackConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePaystackPayment", function() { return usePaystackPayment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var cachedScripts = [];
function usePaystackScript() {
    var src = 'https://js.paystack.co/v1/inline.js';
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        loaded: false,
        error: false,
    }), state = _a[0], setState = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (cachedScripts.includes(src)) {
            setState({
                loaded: true,
                error: false,
            });
        }
        else {
            cachedScripts.push(src);
            var script_1 = document.createElement('script');
            script_1.src = src;
            script_1.async = true;
            var onScriptLoad_1 = function () {
                setState({
                    loaded: true,
                    error: false,
                });
            };
            var onScriptError_1 = function () {
                var index = cachedScripts.indexOf(src);
                if (index >= 0)
                    cachedScripts.splice(index, 1);
                script_1.remove();
                setState({
                    loaded: true,
                    error: true,
                });
            };
            script_1.addEventListener('load', onScriptLoad_1);
            script_1.addEventListener('complete', onScriptLoad_1);
            script_1.addEventListener('error', onScriptError_1);
            document.body.appendChild(script_1);
            return function () {
                script_1.removeEventListener('load', onScriptLoad_1);
                script_1.removeEventListener('error', onScriptError_1);
            };
        }
    }, [src]);
    return [state.loaded, state.error];
}

var callPaystackPop = function (paystackArgs) {
    //@ts-ignore
    var handler = window.PaystackPop && window.PaystackPop.setup(paystackArgs);
    handler && handler.openIframe();
};

function usePaystackPayment(options) {
    var _a = usePaystackScript(), scriptLoaded = _a[0], scriptError = _a[1];
    var publicKey = options.publicKey, firstname = options.firstname, lastname = options.lastname, phone = options.phone, email = options.email, amount = options.amount, reference = options.reference, _b = options.metadata, metadata = _b === void 0 ? {} : _b, _c = options.currency, currency = _c === void 0 ? 'NGN' : _c, channels = options.channels, _d = options.label, label = _d === void 0 ? '' : _d, _e = options.plan, plan = _e === void 0 ? '' : _e, _f = options.quantity, quantity = _f === void 0 ? '' : _f, _g = options.subaccount, subaccount = _g === void 0 ? '' : _g, _h = options.transaction_charge, transaction_charge = _h === void 0 ? 0 : _h, _j = options.bearer, bearer = _j === void 0 ? 'account' : _j;
    function initializePayment(callback, onClose) {
        if (scriptError) {
            throw new Error('Unable to load paystack inline script');
        }
        if (scriptLoaded) {
            var paystackArgs = {
                callback: callback ? callback : function () { return null; },
                onClose: onClose ? onClose : function () { return null; },
                key: publicKey,
                ref: reference,
                email: email,
                firstname: firstname,
                lastname: lastname,
                phone: phone,
                amount: amount,
                currency: currency,
                plan: plan,
                quantity: quantity,
                'data-custom-button': options['data-custom-button'] || '',
                channels: channels,
                subaccount: subaccount,
                transaction_charge: transaction_charge,
                bearer: bearer,
                label: label,
                metadata: metadata,
            };
            callPaystackPop(paystackArgs);
        }
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (scriptError) {
            throw new Error('Unable to load paystack inline script');
        }
    }, [scriptError]);
    return initializePayment;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var PaystackButton = function (_a) {
    var text = _a.text, className = _a.className, children = _a.children, onSuccess = _a.onSuccess, onClose = _a.onClose, others = __rest(_a, ["text", "className", "children", "onSuccess", "onClose"]);
    var initializePayment = usePaystackPayment(others);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: className, onClick: function () { return initializePayment(onSuccess, onClose); } }, text || children));
};

var PaystackContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
    initializePayment: function () { return null; },
    onSuccess: function () { return null; },
    onClose: function () { return null; },
});

var PaystackProvider = function (_a) {
    var children = _a.children, onSuccess = _a.onSuccess, onClose = _a.onClose, others = __rest(_a, ["children", "onSuccess", "onClose"]);
    var initializePayment = usePaystackPayment(others);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaystackContext.Provider, { value: { initializePayment: initializePayment, onSuccess: onSuccess, onClose: onClose } }, children));
};

var PaystackConsumerChild = function (_a) {
    var children = _a.children, ref = _a.ref;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(PaystackContext), initializePayment = _b.initializePayment, onSuccess = _b.onSuccess, onClose = _b.onClose;
    var completeInitializePayment = function () { return initializePayment(onSuccess, onClose); };
    return children({ initializePayment: completeInitializePayment, ref: ref });
};
var PaystackConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (_a, ref) {
    var children = _a.children, paraSuccess = _a.onSuccess, paraClose = _a.onClose, others = __rest(_a, ["children", "onSuccess", "onClose"]);
    var onSuccess = paraSuccess ? paraSuccess : function () { return null; };
    var onClose = paraClose ? paraClose : function () { return null; };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaystackProvider, __assign({}, others, { onSuccess: onSuccess, onClose: onClose }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaystackConsumerChild, { ref: ref }, children)));
});


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./resources/js/src/views/pages/Home/Home.js":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/Home/Home.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./resources/js/src/views/pages/Home/header/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./resources/js/src/views/pages/Home/services/index.js");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment */ "./resources/js/src/views/pages/Home/payment/index.js");
/* harmony import */ var _header_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/Navbar */ "./resources/js/src/views/pages/Home/header/Navbar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./resources/js/src/views/pages/Home/footer/index.js");






function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_services__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_payment__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/footer/Title.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/Home/footer/Title.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.children);
});

/***/ }),

/***/ "./resources/js/src/views/pages/Home/footer/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/Home/footer/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./resources/js/src/views/pages/Home/footer/Title.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], null, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-texts",
    id: "contact"
  }, "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Navigation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "footer-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-texts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-texts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-texts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Payment")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Social Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "social-icons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedinIn"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-texts"
  }, "#No, Street Name. Town, Local Govt, State, Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "footer-texts"
  }, "Tel: (+234) 0801 - 234 -5678")))));
});

/***/ }),

/***/ "./resources/js/src/views/pages/Home/header/Buttons.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/header/Buttons.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn-primary",
    href: "#"
  }, "Start Now"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "btn-default",
    href: "#"
  }, "Learn More"));
});

/***/ }),

/***/ "./resources/js/src/views/pages/Home/header/Navbar.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/header/Navbar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks */ "./resources/js/src/hooks/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // hooks

 // component

 // icons



function Navbar() {
  var atTop = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useScrollHandler"])();

  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])(),
      pathname = _useLocation.pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      menu = _useState2[0],
      setMenu = _useState2[1];

  var toggleMenu = function toggleMenu() {
    return setMenu(!menu);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar ".concat(!atTop ? "at-top" : "not-at-top")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "PayMySchoolFees")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    classes: "menu-open",
    action: toggleMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaBars"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu-container ".concat(menu && "open")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "menu-close-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdClose"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "/" === pathname ? "active" : "",
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "#services" === pathname ? "active" : "",
    to: "#services"
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "#payments" === pathname ? "active" : "",
    to: "#payments"
  }, "Payments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "#contact" === pathname ? "active" : "",
    to: "#contact"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard"
  }, "Login")))));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/header/Texts.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/Home/header/Texts.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ "./resources/js/src/views/pages/Home/header/Buttons.js");


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "texts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Lorem Ipsum is simply dummy text of the printing. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
});

/***/ }),

/***/ "./resources/js/src/views/pages/Home/header/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/Home/header/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Texts */ "./resources/js/src/views/pages/Home/header/Texts.js");


function Index() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/payment/ConfirmDialog.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/payment/ConfirmDialog.js ***!
  \********************************************************************/
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
/* harmony import */ var react_paystack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-paystack */ "./node_modules/react-paystack/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks */ "./resources/js/src/hooks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // paystack

 // components

 // custom Hooks



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
      other = _objectWithoutProperties(_ref, ["children", "classes", "onClose"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
    disableTypography: true,
    className: classes.root
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4"
  }, children), onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "close",
    className: classes.closeButton,
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_3___default.a, null)) : null);
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(function ConfirmDialog(_ref2) {
  var classes = _ref2.classes,
      open = _ref2.open,
      toggleOpen = _ref2.toggleOpen,
      allFormData = _ref2.allFormData,
      _ref2$school = _ref2.school,
      name = _ref2$school.name,
      picture = _ref2$school.picture,
      _ref2$fee = _ref2.fee,
      feeName = _ref2$fee.name,
      amount = _ref2$fee.amount;
  var amountInThounsands = Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useThousand"])(amount || "");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    onClose: toggleOpen,
    "aria-labelledby": "customized-dialog-title",
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DialogTitle, {
    onClose: toggleOpen
  }, "Confrim Your Request"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.img,
    alt: "complex",
    src: picture ? picture : "images/default-school-img.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "subtitle1"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    gutterBottom: true
  }, "No, Street Name. Town, Local Govt, State, Country"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    color: "textSecondary"
  }, "(+234) 0801 - 234 -5678")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1",
    gutterBottom: true
  }, "\u20A6", amountInThounsands), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "subtitle1"
  }, feeName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_paystack__WEBPACK_IMPORTED_MODULE_8__["PaystackConsumer"], allFormData, function (_ref3) {
    var initializePayment = _ref3.initializePayment;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      id: "confirm-card-button",
      action: function action() {
        return initializePayment();
      }
    }, "Confirm");
  }))));
}));

/***/ }),

/***/ "./resources/js/src/views/pages/Home/payment/Form.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/Home/payment/Form.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components */ "./resources/js/src/views/components/index.js");
/* harmony import */ var _ConfirmDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ConfirmDialog */ "./resources/js/src/views/pages/Home/payment/ConfirmDialog.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks */ "./resources/js/src/hooks/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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


 // custom Hooks

 // icons


function Form() {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      formInput = _useForm.register,
      watch = _useForm.watch,
      setValue = _useForm.setValue,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.errors; // Form values being watched


  var watchSchool = watch("school");
  var watchFeeName = watch("fee"); // state

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      disabledButton = _useState2[0],
      setDisabledButton = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      paymentConst = _useState4[0],
      setPaymentConst = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openDialog = _useState6[0],
      setOpenDialog = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      allFormData = _useState8[0],
      setAllFormData = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedSchoolInfo = _useState10[0],
      setSelectedSchoolInfo = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedFee = _useState12[0],
      setSelectedFee = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      loading = _useState14[0],
      setLoading = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState16 = _slicedToArray(_useState15, 2),
      redirectToInvoice = _useState16[0],
      setRedirectToInvoice = _useState16[1]; // To disable submit button if their is an error


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // Mange button disabled
    errors.school || errors.name || errors["class"] || errors.email ? setDisabledButton(true) : setDisabledButton(false);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // when school or fee is selected
    watchSchool && handleOnSchoolSelect(watchSchool);
    watchFeeName && handleFeeSelect(watchFeeName);
  }, [watchSchool, watchFeeName]); // To get payment constants

  var getPaymentConstants = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("api/pay/constant");

            case 3:
              response = _context.sent;
              data = response.data;
              setPaymentConst(data);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0.response); // If their was an error retry

              setTimeout(function () {
                getPaymentConstants();
              }, 3000);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getPaymentConstants() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getPaymentConstants();
  }, []); // Input Requirements

  var inputRequirement = {
    school: {
      required: true
    },
    name: {
      required: true
    },
    "class": {
      required: true
    },
    email: {
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Enter a valid e-mail address"
      }
    },
    fee: {
      required: true
    },
    amount: {
      required: true
    }
  };

  var toggleDialog = function toggleDialog() {
    return setOpenDialog(!openDialog);
  };

  var toggleLoading = function toggleLoading() {
    return setLoading(!loading);
  };

  function processPayment(response) {
    setOpenDialog(false);
    toggleLoading();
    setAllFormData(function (prevAllFormData) {
      var data = {
        user_id: prevAllFormData.school,
        fee_id: prevAllFormData.fee,
        type: 0,
        reference: response.reference,
        transaction_no: response.transaction,
        trxref: response.trxref,
        message: response.message,
        // To remove the kobo in amount it is divide by 100
        amount: prevAllFormData.amount / 100,
        name: prevAllFormData.name,
        email: prevAllFormData.email,
        "class": prevAllFormData["class"],
        status: 1
      };
      sendToServer(data);
      return data;
    });
  }

  var sendToServer = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(formData) {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("api/payment/callback", formData);

            case 3:
              response = _context2.sent;
              data = response.data;
              setRedirectToInvoice(true);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0.response);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function sendToServer(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var openConfirmDialogue = function openConfirmDialogue(data) {
    toggleDialog();
    setAllFormData(_objectSpread(_objectSpread({}, data), {}, {
      // multipied by 100 to include kobo
      amount: Number(selectedFee.amount) * 100,
      reference: new Date().getTime(),
      currency: paymentConst.currency,
      publicKey: paymentConst.publicKey,
      onSuccess: function onSuccess(res) {
        return processPayment(res);
      }
    }));
  };

  var handleOnSchoolSelect = function handleOnSchoolSelect(id) {
    if (id) {
      var allSchools = paymentConst.schools;
      var tempSelctedSchool = allSchools.filter(function (school) {
        return school.id == id;
      });
      setSelectedSchoolInfo.apply(void 0, _toConsumableArray(tempSelctedSchool));
    }
  };

  var handleFeeSelect = function handleFeeSelect(id) {
    if (id) {
      var allFees = selectedSchoolInfo.fees;
      var tempSelectedFee = allFees.filter(function (fee) {
        return fee.id == id;
      });
      setSelectedFee.apply(void 0, _toConsumableArray(tempSelectedFee));
      setValue("amount", Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useThousand"])(tempSelectedFee[0].amount));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Loading"], {
    color: "default",
    size: "lg",
    background: "full"
  }) : null, redirectToInvoice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: {
      pathname: "/invoice",
      invoiceData: allFormData
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    rounded: true,
    label: "School Name",
    placeholder: "YOUR SCHOOL NAME" // icon={<FaSearch />}
    ,
    size: "lg",
    name: "school",
    options: paymentConst ? paymentConst.schools : null,
    handleChange: formInput(inputRequirement.school),
    error: errors.school && errors.school.message
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    rounded: true,
    placeholder: "SELECT A FEE" // icon={<FaSearch/>}
    ,
    label: "Fee",
    name: "fee",
    options: selectedSchoolInfo ? selectedSchoolInfo.fees : null,
    handleChange: formInput(inputRequirement.fee)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    rounded: true,
    label: "Amount",
    placeholder: "NGN",
    value: selectedFee ? selectedFee : null,
    name: "amount",
    disabled: true,
    handleChange: formInput(inputRequirement.name) // error={errors.name && errors.name.message}

  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    rounded: true,
    label: "Full Name",
    placeholder: "YourName YourSurname",
    name: "name",
    handleChange: formInput(inputRequirement.name) // error={errors.name && errors.name.message}

  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    rounded: true,
    label: "Class",
    name: "class",
    handleChange: formInput(inputRequirement["class"]) // error={errors.class && errors.class.message}
    ,
    placeholder: "Eg. Primary 5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    rounded: true,
    label: "Email",
    name: "email",
    handleChange: formInput(inputRequirement.email),
    error: errors.email && errors.email.message,
    placeholder: "Eg. example@example.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    classes: "payment-btn",
    action: handleSubmit(openConfirmDialogue),
    disabled: disabledButton
  }, "Pay")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ConfirmDialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: openDialog,
    toggleOpen: toggleDialog,
    allFormData: allFormData,
    school: selectedSchoolInfo,
    fee: selectedFee
  }));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/payment/Heading.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/payment/Heading.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Heading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Heading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "payment-heading"
  }, "Pay Now");
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/payment/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/payment/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading */ "./resources/js/src/views/pages/Home/payment/Heading.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./resources/js/src/views/pages/Home/payment/Form.js");



function Payment() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "payment",
    id: "payments"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Heading__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/services/Cards.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/services/Cards.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Image = function Image(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", _extends({}, props, {
    className: "service-card-img"
  }));
};

var Text = function Text(_ref) {
  var heading = _ref.heading,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service-card-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, text));
};

var AlignLeft = function AlignLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: props.image
  }));
};

var AlignRight = function AlignRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: props.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, props));
};

function Card(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service-card align-".concat(props.align)
  }, props.align === "right" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlignRight, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlignLeft, props));
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/services/Texts.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/services/Texts.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Text() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Why Us?");
}

/***/ }),

/***/ "./resources/js/src/views/pages/Home/services/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/pages/Home/services/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Service; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Texts */ "./resources/js/src/views/pages/Home/services/Texts.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards */ "./resources/js/src/views/pages/Home/services/Cards.js");



function Service() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "services",
    id: "services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "services-card-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "left",
    image: "images/ill1.png",
    heading: "Fast Payments",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "right",
    image: "images/ill2.png",
    heading: "Great Pricing",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_2__["default"], {
    align: "left",
    image: "images/ill3.png",
    heading: "24/7 Customer Care",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  })));
}

/***/ })

}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{79:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),o=n(1),c=n.n(o),u=n(6),i=n(4),s=n.n(i),l=n(12),m=n(3),f=n(8),b=n(42);function p(e,t,n,r,a,o,c){try{var u=e[o](c),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,a)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){p(o,r,a,c,u,"next",e)}function u(e){p(o,r,a,c,u,"throw",e)}c(void 0)}))}}function v(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||j(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||j(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e){var t=e.accessToken,n=e.feeList,r=Object(u.i)().userId,i=Object(u.g)(),s=Object(f.c)(),l=s.post,p=s.deleteRequest;function h(){return!!n&&n.length>0}Object(o.useEffect)((function(){var e,t;h()&&(e=[],t={},n.map((function(n){var r=n.id,a=n.amount,o=n.name;e.push(r),t["name_".concat(r)]=o,t["amount_".concat(r)]=a})),S(e),J(t),F({form:"/api/fee/".concat(r,"/edit"),next:function(e){return"/dashboard/school"}}))}),[n]);var j=O(Object(o.useState)(!1),2),w=j[0],E=j[1],_=O(Object(o.useState)([1]),2),k=_[0],S=_[1],x=O(Object(o.useState)({}),2),A=x[0],N=x[1],P=O(Object(o.useState)({form:"/api/fee/".concat(r),next:function(e){return"dashboard/school/create/account/".concat(e)}}),2),T=P[0],F=P[1],I=O(Object(o.useState)({general:""}),2),C=I[0],D=I[1],q=O(Object(o.useState)({name_1:"",amount_1:""}),2),z=q[0],J=q[1];var L=function(){var e=d(a.a.mark((function e(n){var r,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,l(T.form,n,t);case 4:E(!1),i.push("/dashboard/school"),e.next=21;break;case 8:e.prev=8,e.t0=e.catch(1),r=e.t0.response,console.error(r),E(!1),o=r.data,c=r.status,e.t1=c,e.next=422===e.t1?17:19;break;case 17:return o.errors&&console.error("serve error"),e.abrupt("break",21);case 19:return D(y(y({},C),{},{general:"Something went wrong, please try again"})),e.abrupt("break",21);case 21:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"school-form fee"},c.a.createElement("div",{className:"grid"},c.a.createElement(m.n,null,c.a.createElement("span",null,"Fees"),c.a.createElement(m.b,{action:function(){S((function(e){var t,n=e[e.length-1];return n++,J(y(y({},z),{},(g(t={},"name_".concat(n),""),g(t,"amount_".concat(n),""),t))),[].concat(v(e),[n])}))},disabled:w},"Add")),c.a.createElement(m.f,{size:"sm",card:!0,disableLoading:!0},C.general&&c.a.createElement(m.a,{message:C.general,type:"error"}),k.map((function(e){return c.a.createElement("li",{key:e,className:"list-item sm fee-list-item"},c.a.createElement("button",{className:"close-icon btn",onClick:function(){return function(e){var n,r,o,c=function(){var n=d(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p("/api/fee/".concat(e),t);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.error(n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();k.length>1&&(o=k.filter((function(t){return t!==e})),S(o),n=z,r=["name_".concat(e),"amount_".concat(e)],Object.keys(n).filter((function(e){return r.includes(e)})).forEach((function(e){return delete n[e]})),J(n),h()&&c())}(e)},disabled:k.length<2||w},c.a.createElement(b.a,null)),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{htmlFor:""},"Name"),c.a.createElement("input",{type:"text",name:"name_".concat(e),id:"name_".concat(e),className:"input-rounded",placeholder:"Fee Name",value:z["name_".concat(e)],onChange:function(e){J(y(y({},z),{},g({},e.target.name,e.target.value)))},disabled:w}),A&&A["name_".concat(e)]&&c.a.createElement(m.a,{message:A["name_".concat(e)],type:"error"})),c.a.createElement("div",{className:"input-group"},c.a.createElement("label",{htmlFor:""},"Amount"),c.a.createElement("input",{type:"number",name:"amount_".concat(e),id:"amount_".concat(e),className:"input-rounded",placeholder:"Fee Amount",value:z["amount_".concat(e)],onChange:function(e){J(y(y({},z),{},g({},e.target.name,e.target.value)))},disabled:w}),A&&A["amount_".concat(e)]&&c.a.createElement(m.a,{message:A["amount_".concat(e)],type:"error"})))})))),c.a.createElement("div",{className:"button-grid"},c.a.createElement(m.b,{action:function(){var e=function(){var e={},t=function(t,n){e=y(y({},e),{},g({},t,n))},n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=function(){return e.substring(0,e.length-2)};n.length<1&&t(e,"Fee ".concat(r()," is required"))},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("amount_"===e.substring(0,7)){var r=Number(n);r<0&&t(e,"Amount most be greater than zero")}};for(var a in z)n(a,z[a]),r(a,z[a]);return Object.keys(e).length>0?N(e):(N({}),z)}();e&&L(e)},disabled:w},w?c.a.createElement(m.g,{color:"default"}):"Next")))}E.propTypes={accessToken:s.a.string.isRequired},t.default=Object(l.b)((function(e){return{accessToken:e.auth.accessToken}}))(E)}}]);
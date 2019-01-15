webpackHotUpdate("static\\development\\pages\\createaccount.js",{

/***/ "./components/RegisterForm.js":
/*!************************************!*\
  !*** ./components/RegisterForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\baseb\\Desktop\\Projects\\GearGuide\\react_app\\components\\RegisterForm.js";





var RegisterForm = function RegisterForm() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    onSubmit: function onSubmit(values, actions) {
      setTimeout(function () {
        fetch('http://127.0.0.1:5000/createaccount', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: values.json()
        });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
    },
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: props.handleSubmit,
        className: "jsx-1759587366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.email,
        name: "email",
        placeholder: "Email",
        className: "jsx-1759587366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "username",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.username,
        name: "username",
        placeholder: "username",
        className: "jsx-1759587366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.password,
        name: "password",
        placeholder: "password",
        className: "jsx-1759587366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1759587366",
        css: "input.jsx-1759587366{width:100%;padding:12px 20px;margin:8px 0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYmFzZWJcXERlc2t0b3BcXFByb2plY3RzXFxHZWFyR3VpZGVcXHJlYWN0X2FwcFxcY29tcG9uZW50c1xcUmVnaXN0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEc0IsQUFHMEIsV0FDTyxrQkFDTCxhQUNTLHNCQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXGJhc2ViXFxEZXNrdG9wXFxQcm9qZWN0c1xcR2Vhckd1aWRlXFxyZWFjdF9hcHBcXGNvbXBvbmVudHNcXFJlZ2lzdGVyRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0sIEVycm9yTWVzc2FnZSB9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5jb25zdCBSZWdpc3RlckZvcm0gPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxGb3JtaWtcclxuICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogJycgLCB1c2VybmFtZTogJycgLCBwYXNzd29yZDogJyd9fVxyXG4gICAgICBvblN1Ym1pdD17KHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9jcmVhdGVhY2NvdW50Jywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiB2YWx1ZXMuanNvbigpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9fVxyXG4gICAgICByZW5kZXI9e3Byb3BzID0+IChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBvbkJsdXI9e3Byb3BzLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgb25CbHVyPXtwcm9wcy5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWVzLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0ndXNlcm5hbWUnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIG9uQmx1cj17cHJvcHMuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlcy5wYXNzd29yZH1cclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICB7cHJvcHMuZXJyb3JzLnVzZXJuYW1lICYmIDxkaXYgaWQ9XCJmZWVkYmFja1wiPntwcm9wcy5lcnJvcnMudXNlcm5hbWV9PC9kaXY+fVxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e3Byb3BzLmlzU3VibWl0dGluZ30+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckZvcm1cclxuIl19 */\n/*@ sourceURL=C:\\Users\\baseb\\Desktop\\Projects\\GearGuide\\react_app\\components\\RegisterForm.js */",
        __self: this
      }), props.errors.username && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "feedback",
        className: "jsx-1759587366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, props.errors.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        disabled: props.isSubmitting,
        className: "jsx-1759587366",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Submit"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ })

})
//# sourceMappingURL=createaccount.js.925e40ca3c9cce581849.hot-update.js.map
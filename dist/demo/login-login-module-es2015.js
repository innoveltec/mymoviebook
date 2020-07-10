(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/auth/login/containers/login/login.container.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/auth/login/containers/login/login.container.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loginForm\">\n  <mb-auth-form (submitted)=\"loginUser($event)\">\n    <b>Login</b>\n    <a routerLink=\"/auth/register\">Not registered?</a>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n    <div class=\"error\" *ngIf=\"error\">\n      {{ error }}\n    </div>\n  </mb-auth-form>\n</div>\n"

/***/ }),

/***/ "./src/auth/login/containers/login/login.container.scss":
/*!**************************************************************!*\
  !*** ./src/auth/login/containers/login/login.container.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginForm {\n  height: 400px;\n}\n.loginForm a {\n  margin-left: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJyeXZlbHRqZW4vaW5ub3ZlbHRlYy9kZW1vL215bW92aWVib29rL3NyYy9hdXRoL2xvZ2luL2NvbnRhaW5lcnMvbG9naW4vbG9naW4uY29udGFpbmVyLnNjc3MiLCJzcmMvYXV0aC9sb2dpbi9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXV0aC9sb2dpbi9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbnRhaW5lci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRm9ybSB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIiwiLmxvZ2luRm9ybSB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ubG9naW5Gb3JtIGEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/auth/login/containers/login/login.container.ts":
/*!************************************************************!*\
  !*** ./src/auth/login/containers/login/login.container.ts ***!
  \************************************************************/
/*! exports provided: LoginContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContainer", function() { return LoginContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/auth/shared/services/auth.service.ts");




let LoginContainer = class LoginContainer {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    loginUser(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password } = event.value;
            try {
                yield this.authService.loginUser(email, password);
                this.router.navigate(['/movies']);
            }
            catch (err) {
                this.error = err.message;
            }
        });
    }
};
LoginContainer.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mb-login',
        template: __webpack_require__(/*! raw-loader!./login.container.html */ "./node_modules/raw-loader/index.js!./src/auth/login/containers/login/login.container.html"),
        styles: [__webpack_require__(/*! ./login.container.scss */ "./src/auth/login/containers/login/login.container.scss")]
    })
], LoginContainer);



/***/ }),

/***/ "./src/auth/login/login.module.ts":
/*!****************************************!*\
  !*** ./src/auth/login/login.module.ts ***!
  \****************************************/
/*! exports provided: ROUTES, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/auth/shared/shared.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _containers_login_login_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/login/login.container */ "./src/auth/login/containers/login/login.container.ts");







const ROUTES = [
    {
        path: '',
        component: _containers_login_login_container__WEBPACK_IMPORTED_MODULE_6__["LoginContainer"],
    },
];
let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        ],
        declarations: [_containers_login_login_container__WEBPACK_IMPORTED_MODULE_6__["LoginContainer"]],
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map
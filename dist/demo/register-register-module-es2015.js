(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/auth/register/containers/register/register.container.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/auth/register/containers/register/register.container.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registerForm\">\n  <mb-auth-form (submitted)=\"registerUser($event)\">\n    <b>Register</b>\n    <a routerLink=\"/auth/login\">Already have an account?</a>\n    <button mat-raised-button color=\"primary\" type=\"submit\">Create</button>\n    <div class=\"error\" *ngIf=\"error\">\n      {{ error }}\n    </div>\n  </mb-auth-form>\n</div>\n"

/***/ }),

/***/ "./src/auth/register/containers/register/register.container.scss":
/*!***********************************************************************!*\
  !*** ./src/auth/register/containers/register/register.container.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registerForm {\n  height: 400px;\n}\n.registerForm a {\n  margin-left: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJyeXZlbHRqZW4vaW5ub3ZlbHRlYy9kZW1vL215bW92aWVib29rL3NyYy9hdXRoL3JlZ2lzdGVyL2NvbnRhaW5lcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29udGFpbmVyLnNjc3MiLCJzcmMvYXV0aC9yZWdpc3Rlci9jb250YWluZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbnRhaW5lci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXV0aC9yZWdpc3Rlci9jb250YWluZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbnRhaW5lci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyRm9ybSB7XG4gIGhlaWdodDogNDAwcHg7XG4gIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIiwiLnJlZ2lzdGVyRm9ybSB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ucmVnaXN0ZXJGb3JtIGEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/auth/register/containers/register/register.container.ts":
/*!*********************************************************************!*\
  !*** ./src/auth/register/containers/register/register.container.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterContainer", function() { return RegisterContainer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/auth/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegisterContainer = class RegisterContainer {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    registerUser(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { email, password } = event.value;
            try {
                yield this.authService.createUser(email, password);
                this.router.navigate(['/']);
            }
            catch (err) {
                this.error = err.message;
            }
        });
    }
};
RegisterContainer.ctorParameters = () => [
    { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterContainer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mb-register',
        template: __webpack_require__(/*! raw-loader!./register.container.html */ "./node_modules/raw-loader/index.js!./src/auth/register/containers/register/register.container.html"),
        styles: [__webpack_require__(/*! ./register.container.scss */ "./src/auth/register/containers/register/register.container.scss")]
    })
], RegisterContainer);



/***/ }),

/***/ "./src/auth/register/register.module.ts":
/*!**********************************************!*\
  !*** ./src/auth/register/register.module.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/auth/shared/shared.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _containers_register_register_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/register/register.container */ "./src/auth/register/containers/register/register.container.ts");







const ROUTES = [
    {
        path: '',
        component: _containers_register_register_container__WEBPACK_IMPORTED_MODULE_6__["RegisterContainer"],
    },
];
let RegisterModule = class RegisterModule {
};
RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        ],
        declarations: [_containers_register_register_container__WEBPACK_IMPORTED_MODULE_6__["RegisterContainer"]],
    })
], RegisterModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map
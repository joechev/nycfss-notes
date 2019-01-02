(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _individuals_individuals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./individuals/individuals.component */ "./src/app/individuals/individuals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_3__["StaffComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'individuals', component: _individuals_individuals_component__WEBPACK_IMPORTED_MODULE_6__["IndividualsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_user_info_nav_user_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-user-info/nav-user-info.component */ "./src/app/nav-user-info/nav-user-info.component.ts");
/* harmony import */ var _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./note-form/note-form.component */ "./src/app/note-form/note-form.component.ts");
/* harmony import */ var _date_selector_date_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./date-selector/date-selector.component */ "./src/app/date-selector/date-selector.component.ts");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./staff/staff.component */ "./src/app/staff/staff.component.ts");
/* harmony import */ var _individuals_individuals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./individuals/individuals.component */ "./src/app/individuals/individuals.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _nav_user_info_nav_user_info_component__WEBPACK_IMPORTED_MODULE_9__["NavUserInfoComponent"],
                _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_10__["NoteFormComponent"],
                _date_selector_date_selector_component__WEBPACK_IMPORTED_MODULE_11__["DateSelectorComponent"],
                _staff_staff_component__WEBPACK_IMPORTED_MODULE_12__["StaffComponent"],
                _individuals_individuals_component__WEBPACK_IMPORTED_MODULE_13__["IndividualsComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigate(['/login']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(loggedIn);
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _staff_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff/staff.service */ "./src/app/staff/staff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(staffService) {
        this.staffService = staffService;
        this.isAuthenticated();
    }
    AuthService.prototype.isAuthenticated = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        // return this.staffService.findByEmail('me').pipe(
        //     map(response => {
        //         if (response['authenticated']) {
        //             const details = response['userAuthentication']['details'];
        //             localStorage.setItem('email', details['email']);
        //             localStorage.setItem('firstName', details['given_name']);
        //             localStorage.setItem('lastName', details['family_name']);
        //             localStorage.setItem('picture', details['picture']);
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }),
        //     catchError(error => { return of(false) })
        // );
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_staff_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\" style=\"margin-top: 4em\">\n    <app-date-selector></app-date-selector>\n</div>\n<div class=\"d-flex justify-content-center\" style=\"margin-top: 4em\">\n    <div class=\"row\">\n        <ul class=\"pagination\">\n            <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"#\">&laquo;</a>\n            </li>\n            <ul class=\"nav nav-tabs\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#sunday\">Sun</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#monday\">Mon</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tuesday\">Tue</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#wednesday\">Wed</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#thursday\">Thu</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#friday\">Fri</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#saturday\">Sat</a>\n                </li>\n            </ul>\n            <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">&raquo;</a>\n            </li>\n        </ul>\n    </div>\n</div>\n<div class=\"d-flex justify-content-center\">\n    <div class=\"row\">\n        <div id=\"myTabContent\" class=\"tab-content\">\n            <div class=\"tab-pane fade active show\" id=\"sunday\">\n                <app-note-form></app-note-form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"monday\">\n                <app-note-form></app-note-form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tuesday\">\n                <app-note-form></app-note-form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"wednesday\">\n                <app-note-form></app-note-form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"thursday\">\n                <app-note-form></app-note-form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"friday\">\n                <app-note-form></app-note-form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"saturday\">\n                <app-note-form></app-note-form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/date-selector/date-selector.component.css":
/*!***********************************************************!*\
  !*** ./src/app/date-selector/date-selector.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/date-selector/date-selector.component.html":
/*!************************************************************!*\
  !*** ./src/app/date-selector/date-selector.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  \n</h1>\n"

/***/ }),

/***/ "./src/app/date-selector/date-selector.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/date-selector/date-selector.component.ts ***!
  \**********************************************************/
/*! exports provided: DateSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSelectorComponent", function() { return DateSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateSelectorComponent = /** @class */ (function () {
    function DateSelectorComponent() {
    }
    DateSelectorComponent.prototype.ngOnInit = function () {
    };
    DateSelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-date-selector',
            template: __webpack_require__(/*! ./date-selector.component.html */ "./src/app/date-selector/date-selector.component.html"),
            styles: [__webpack_require__(/*! ./date-selector.component.css */ "./src/app/date-selector/date-selector.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DateSelectorComponent);
    return DateSelectorComponent;
}());



/***/ }),

/***/ "./src/app/domain/domain-entity.ts":
/*!*****************************************!*\
  !*** ./src/app/domain/domain-entity.ts ***!
  \*****************************************/
/*! exports provided: DomainEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainEntity", function() { return DomainEntity; });
var DomainEntity = /** @class */ (function () {
    function DomainEntity() {
    }
    DomainEntity.prototype.location = function () {
        if (this._links != null && this._links['self'] != null) {
            return this._links['self']['href'];
        }
        return '/api/' + this.resourceName() + '/' + this.id;
    };
    DomainEntity.prototype.delete = function () {
        this.active = false;
    };
    DomainEntity.prototype.defaultSort = function () {
        return 'id,asc';
    };
    return DomainEntity;
}());



/***/ }),

/***/ "./src/app/domain/domain-service.ts":
/*!******************************************!*\
  !*** ./src/app/domain/domain-service.ts ***!
  \******************************************/
/*! exports provided: DomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainService", function() { return DomainService; });
var DomainService = /** @class */ (function () {
    function DomainService(api, ctor) {
        this.api = api;
        this.ctor = ctor;
    }
    DomainService.prototype.findOne = function (id) {
        var entity = new this.ctor();
        entity.id = id;
        return this.api.findOne(entity);
    };
    DomainService.prototype.search = function (pageRequest) {
        return this.api.search(pageRequest, this.ctor);
    };
    DomainService.prototype.create = function (entity) {
        return this.api.create(entity);
    };
    DomainService.prototype.update = function (entity) {
        return this.api.update(entity);
    };
    DomainService.prototype.delete = function (entity) {
        this.api.delete(entity);
    };
    return DomainService;
}());



/***/ }),

/***/ "./src/app/domain/page-request.ts":
/*!****************************************!*\
  !*** ./src/app/domain/page-request.ts ***!
  \****************************************/
/*! exports provided: PageRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRequest", function() { return PageRequest; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var PageRequest = /** @class */ (function () {
    function PageRequest(resource, page, size, sort) {
        this.resource = resource;
        this.page = page;
        this.size = size;
        this.sort = sort;
    }
    PageRequest.prototype.getUrl = function () {
        return ("/api/" + this.resource).toString();
    };
    PageRequest.prototype.toHttpParams = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('page', this.page)
            .set('size', this.size)
            .set('sort', this.sort);
    };
    PageRequest.parsePage = function (dtOptions) {
        if (dtOptions.start < dtOptions.length) {
            return "0";
        }
        return "" + (dtOptions.start / dtOptions.length);
    };
    PageRequest.parseSort = function (dtOptions) {
        if (!dtOptions.order || dtOptions.order == []) {
            dtOptions.order = [{ column: 0, dir: 'asc' }];
        }
        var orders = dtOptions.order;
        var o = orders[0];
        var cols = dtOptions.columns;
        return (cols[o['column']]['name'] + "," + o['dir']).toString();
    };
    PageRequest.parseSize = function (dtOptions) {
        return "" + dtOptions.length;
    };
    PageRequest.fromDTOptions = function (dtOptions, resource) {
        return new PageRequest('/api/' + resource, PageRequest.parsePage(dtOptions), PageRequest.parseSize(dtOptions), PageRequest.parseSort(dtOptions));
    };
    PageRequest.default = function (resource) {
        return new PageRequest(resource);
    };
    return PageRequest;
}());



/***/ }),

/***/ "./src/app/individuals/individual.ts":
/*!*******************************************!*\
  !*** ./src/app/individuals/individual.ts ***!
  \*******************************************/
/*! exports provided: Individual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Individual", function() { return Individual; });
/* harmony import */ var _domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/domain-entity */ "./src/app/domain/domain-entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Individual = /** @class */ (function (_super) {
    __extends(Individual, _super);
    function Individual() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Individual.prototype.resourceName = function () {
        return "individuals";
    };
    return Individual;
}(_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__["DomainEntity"]));



/***/ }),

/***/ "./src/app/individuals/individuals.component.css":
/*!*******************************************************!*\
  !*** ./src/app/individuals/individuals.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/individuals/individuals.component.html":
/*!********************************************************!*\
  !*** ./src/app/individuals/individuals.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n    <thead>\n        <tr>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Middle Name</th>\n            <th scope=\"col\">Last Name</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let ind of individuals\" class=\"table-primary\">\n            <th scope=\"row\">{{ind.firstName}}</th>\n            <td>{{ind.middleName}}</td>\n            <td>{{ind.lastName}}</td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/individuals/individuals.component.ts":
/*!******************************************************!*\
  !*** ./src/app/individuals/individuals.component.ts ***!
  \******************************************************/
/*! exports provided: IndividualsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualsComponent", function() { return IndividualsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _individuals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./individuals.service */ "./src/app/individuals/individuals.service.ts");
/* harmony import */ var _domain_page_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/page-request */ "./src/app/domain/page-request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndividualsComponent = /** @class */ (function () {
    function IndividualsComponent(service) {
        this.service = service;
    }
    IndividualsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.service.search(_domain_page_request__WEBPACK_IMPORTED_MODULE_2__["PageRequest"].default('individuals')).subscribe(function (response) {
            _this.individuals = response.entityList();
        }, function (err) {
        }, function () {
            _this.subscription.unsubscribe();
        });
    };
    IndividualsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individuals',
            template: __webpack_require__(/*! ./individuals.component.html */ "./src/app/individuals/individuals.component.html"),
            styles: [__webpack_require__(/*! ./individuals.component.css */ "./src/app/individuals/individuals.component.css")]
        }),
        __metadata("design:paramtypes", [_individuals_service__WEBPACK_IMPORTED_MODULE_1__["IndividualsService"]])
    ], IndividualsComponent);
    return IndividualsComponent;
}());



/***/ }),

/***/ "./src/app/individuals/individuals.service.ts":
/*!****************************************************!*\
  !*** ./src/app/individuals/individuals.service.ts ***!
  \****************************************************/
/*! exports provided: IndividualsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualsService", function() { return IndividualsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _individual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./individual */ "./src/app/individuals/individual.ts");
/* harmony import */ var _domain_domain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/domain-service */ "./src/app/domain/domain-service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndividualsService = /** @class */ (function (_super) {
    __extends(IndividualsService, _super);
    function IndividualsService(api) {
        return _super.call(this, api, _individual__WEBPACK_IMPORTED_MODULE_1__["Individual"]) || this;
    }
    IndividualsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], IndividualsService);
    return IndividualsService;
}(_domain_domain_service__WEBPACK_IMPORTED_MODULE_2__["DomainService"]));



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-buffer { margin-top:40px; }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-buffer\">\n    <div class=\"card border-primary mb-3\">\n        <div class=\"card-header\"><img src=\"assets/img/nycfss-logo.gif\" class=\"img-fluid\"></div>\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">NY CFSS Staff Login</h4>\n            <a class=\"btn btn-social btn-google\" href=\"/google/login\">\n                <span class=\"fa fa-google\"></span> Sign in with Google\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\">\n        <a href=\"#\" routerLink=\"#\" class=\"navbar-brand\">NYCFSS</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/individuals\" routerLinkActive=\"active\">Individuals</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/notes\" routerLinkActive=\"active\">Notes</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/refData\" routerLinkActive=\"active\">RefData</a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" routerLink=\"#\" routerLinkActive=\"active\" id=\"nav-profile\">Hello, User <span class=\"caret\"></span></a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"nav-profile\">\n                        <a class=\"dropdown-item\" href=\"#\" routerLink=\"/profile\">Profile</a>\n                        <a class=\"dropdown-item\" href=\"#\" routerLink=\"/logout\">Logout</a>\n                    </div>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router) {
        this.router = router;
        this.user = 'User';
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/nav-user-info/nav-user-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/nav-user-info/nav-user-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav-user-info/nav-user-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/nav-user-info/nav-user-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nav-user-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/nav-user-info/nav-user-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/nav-user-info/nav-user-info.component.ts ***!
  \**********************************************************/
/*! exports provided: NavUserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavUserInfoComponent", function() { return NavUserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavUserInfoComponent = /** @class */ (function () {
    function NavUserInfoComponent() {
    }
    NavUserInfoComponent.prototype.ngOnInit = function () {
    };
    NavUserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-user-info',
            template: __webpack_require__(/*! ./nav-user-info.component.html */ "./src/app/nav-user-info/nav-user-info.component.html"),
            styles: [__webpack_require__(/*! ./nav-user-info.component.css */ "./src/app/nav-user-info/nav-user-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavUserInfoComponent);
    return NavUserInfoComponent;
}());



/***/ }),

/***/ "./src/app/note-form/note-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/note-form/note-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/note-form/note-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/note-form/note-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  note-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/note-form/note-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-form/note-form.component.ts ***!
  \**************************************************/
/*! exports provided: NoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteFormComponent", function() { return NoteFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteFormComponent = /** @class */ (function () {
    function NoteFormComponent() {
    }
    NoteFormComponent.prototype.ngOnInit = function () {
    };
    NoteFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note-form',
            template: __webpack_require__(/*! ./note-form.component.html */ "./src/app/note-form/note-form.component.html"),
            styles: [__webpack_require__(/*! ./note-form.component.css */ "./src/app/note-form/note-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoteFormComponent);
    return NoteFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/api.service.ts":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.set('Content-Type', 'text/uri-list');
        this.opts = { headers: headers };
    }
    ApiService.prototype.create = function (entity) {
        return this.http.post('/api/' + entity.resourceName(), entity);
    };
    ApiService.prototype.update = function (entity) {
        return this.http.put(entity.location(), entity);
    };
    ApiService.prototype.delete = function (entity) {
        entity.delete();
        return this.http.put(entity.location(), entity);
    };
    ApiService.prototype.link = function (rel) {
        return this.http.put(rel.parentLoc(), rel.toBody(), this.opts);
    };
    ApiService.prototype.unlink = function (rel) {
        return this.http.delete(rel.deletePath(), this.opts);
    };
    ApiService.prototype.findOne = function (entity) {
        return this.http.get(entity.location());
    };
    ApiService.prototype.search = function (pageRequest, ctor) {
        return this.http.get(pageRequest.getUrl(), { params: pageRequest.toHttpParams() });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/staff/staff.component.css":
/*!*******************************************!*\
  !*** ./src/app/staff/staff.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/staff/staff.component.html":
/*!********************************************!*\
  !*** ./src/app/staff/staff.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"card\">\n    <div class=\"container\">\n        <table id=\"staff-table\" class=\"cell-border table table-hover dt-responsive table-striped\" cellspacing=\"0\" style=\"width:100%;\">\n            <thead>\n                <tr>\n                    <th>First Name</th>\n                    <th>Middle Name</th>\n                    <th>Last Name</th>\n                    <th>E-mail</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let staffMember of staff\">\n                    <td id=\"firstName\">{{staffMember.firstName}}</td>\n                    <td id=\"middleName\">{{staffMember.middleName}}</td>\n                    <td id=\"lastName\">{{staffMember.lastName}}</td>\n                    <td id=\"email\">{{staffMember.email}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/staff/staff.component.ts":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(datatables_net__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-bs4 */ "./node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js");
/* harmony import */ var datatables_net_bs4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(datatables_net_bs4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff.service */ "./src/app/staff/staff.service.ts");
/* harmony import */ var _domain_page_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/page-request */ "./src/app/domain/page-request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StaffComponent = /** @class */ (function () {
    function StaffComponent(staffService) {
        this.staffService = staffService;
    }
    StaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.table = jquery__WEBPACK_IMPORTED_MODULE_3__('#staff-table').DataTable({
            serverSide: true,
            ajax: function (dtOptions, callback) {
                _this.sub = _this.staffService.search(_domain_page_request__WEBPACK_IMPORTED_MODULE_5__["PageRequest"].fromDTOptions(dtOptions, 'staff')).subscribe(function (resp) {
                    _this.staff = resp.entityList();
                    callback({
                        recordsTotal: resp.page.totalElements,
                        recordsFiltered: resp.page.totalElements,
                        data: [],
                    });
                }, function (err) { }, function () {
                    _this.table.columns.adjust();
                    _this.sub.unsubscribe();
                });
            },
            columnDefs: [
                { name: 'firstName', targets: 0 },
                { name: 'middleName', targets: 1 },
                { name: 'lastName', targets: 2 },
                { name: 'email', targets: 3 },
            ],
            destroy: true,
            paging: true,
            info: true,
            autoWidth: true,
            responsive: true,
            lengthMenu: [25, 50, 100],
            scrollY: '600',
            scrollX: true
        });
    };
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/staff.component.css")]
        }),
        __metadata("design:paramtypes", [_staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/staff/staff.service.ts":
/*!****************************************!*\
  !*** ./src/app/staff/staff.service.ts ***!
  \****************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/domain-service */ "./src/app/domain/domain-service.ts");
/* harmony import */ var _staff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./staff */ "./src/app/staff/staff.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api.service */ "./src/app/shared/api.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StaffService = /** @class */ (function (_super) {
    __extends(StaffService, _super);
    function StaffService(api) {
        return _super.call(this, api, _staff__WEBPACK_IMPORTED_MODULE_2__["Staff"]) || this;
    }
    StaffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], StaffService);
    return StaffService;
}(_domain_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]));



/***/ }),

/***/ "./src/app/staff/staff.ts":
/*!********************************!*\
  !*** ./src/app/staff/staff.ts ***!
  \********************************/
/*! exports provided: Staff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Staff", function() { return Staff; });
/* harmony import */ var _domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/domain-entity */ "./src/app/domain/domain-entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Staff.prototype.resourceName = function () {
        return 'staff';
    };
    return Staff;
}(_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__["DomainEntity"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    apiHost: '/api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Joe\git\nycfss-notes\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
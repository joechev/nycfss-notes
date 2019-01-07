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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _individuals_component_individual_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./individuals/component/individual.component */ "./src/app/individuals/component/individual.component.ts");
/* harmony import */ var _staff_component_staff_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff/component/staff.component */ "./src/app/staff/component/staff.component.ts");
/* harmony import */ var _notes_component_notes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes/component/notes.component */ "./src/app/notes/component/notes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'individuals', component: _individuals_component_individual_component__WEBPACK_IMPORTED_MODULE_5__["IndividualComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'notes', component: _notes_component_notes_component__WEBPACK_IMPORTED_MODULE_7__["NotesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'staff', component: _staff_component_staff_component__WEBPACK_IMPORTED_MODULE_6__["StaffComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
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

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _nav_user_info_nav_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-user-info/nav-user-info.component */ "./src/app/nav-user-info/nav-user-info.component.ts");
/* harmony import */ var _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./note-form/note-form.component */ "./src/app/note-form/note-form.component.ts");
/* harmony import */ var _date_selector_date_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./date-selector/date-selector.component */ "./src/app/date-selector/date-selector.component.ts");
/* harmony import */ var _individuals_component_individual_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./individuals/component/individual.component */ "./src/app/individuals/component/individual.component.ts");
/* harmony import */ var _individuals_dialog_individual_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./individuals/dialog/individual-dialog.component */ "./src/app/individuals/dialog/individual-dialog.component.ts");
/* harmony import */ var _notes_component_notes_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./notes/component/notes.component */ "./src/app/notes/component/notes.component.ts");
/* harmony import */ var _notes_dialog_notes_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notes/dialog/notes-dialog.component */ "./src/app/notes/dialog/notes-dialog.component.ts");
/* harmony import */ var _staff_component_staff_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./staff/component/staff.component */ "./src/app/staff/component/staff.component.ts");
/* harmony import */ var _staff_dialog_staff_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./staff/dialog/staff-dialog.component */ "./src/app/staff/dialog/staff-dialog.component.ts");
/* harmony import */ var _shared_window_providers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/window-providers */ "./src/app/shared/window-providers.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _nav_user_info_nav_user_info_component__WEBPACK_IMPORTED_MODULE_10__["NavUserInfoComponent"],
                _note_form_note_form_component__WEBPACK_IMPORTED_MODULE_11__["NoteFormComponent"],
                _date_selector_date_selector_component__WEBPACK_IMPORTED_MODULE_12__["DateSelectorComponent"],
                _staff_component_staff_component__WEBPACK_IMPORTED_MODULE_17__["StaffComponent"],
                _individuals_component_individual_component__WEBPACK_IMPORTED_MODULE_13__["IndividualComponent"],
                _individuals_dialog_individual_dialog_component__WEBPACK_IMPORTED_MODULE_14__["IndividualDialogComponent"],
                _notes_component_notes_component__WEBPACK_IMPORTED_MODULE_15__["NotesComponent"],
                _notes_dialog_notes_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NotesDialogComponent"],
                _staff_dialog_staff_dialog_component__WEBPACK_IMPORTED_MODULE_18__["StaffDialogComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [_shared_window_providers__WEBPACK_IMPORTED_MODULE_19__["WINDOW_PROVIDERS"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_individuals_dialog_individual_dialog_component__WEBPACK_IMPORTED_MODULE_14__["IndividualDialogComponent"], _notes_dialog_notes_dialog_component__WEBPACK_IMPORTED_MODULE_16__["NotesDialogComponent"], _staff_dialog_staff_dialog_component__WEBPACK_IMPORTED_MODULE_18__["StaffDialogComponent"]]
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
/* harmony import */ var _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff/service/staff.service */ "./src/app/staff/service/staff.service.ts");
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
        var _this = this;
        this.sub = this.staffService.findByEmail('jchiavaroli@nycfss.org').subscribe(function (resp) { return localStorage.setItem('userId', resp.id); }, function (err) { }, function () { return _this.sub.unsubscribe(); });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        // return this.staffService.findOne('me').pipe(
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
        __metadata("design:paramtypes", [_staff_service_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"]])
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

/***/ "./src/app/individuals/component/individual.component.css":
/*!****************************************************************!*\
  !*** ./src/app/individuals/component/individual.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    max-height: 500px;\n    min-width: 300px;\n}\n\n.mat-table {\n    overflow: auto;\n    max-height: 500px;\n}\n\n.mat-row:hover {\n    background-color: pink;\n}\n\nth.mat-sort-header-sorted {\n    color: black;\n}"

/***/ }),

/***/ "./src/app/individuals/component/individual.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/individuals/component/individual.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"mat-display-3\">Individuals</h1>\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n        <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- Hidden id Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef> Id </th>\n                <td mat-cell *matCellDef=\"let ind\"> {{ind.id}} </td>\n            </ng-container>\n\n            <!-- firstName Column -->\n            <ng-container matColumnDef=\"firstName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n                <td mat-cell *matCellDef=\"let ind\"> {{ind.firstName}} </td>\n            </ng-container>\n\n            <!-- middleName Column -->\n            <ng-container matColumnDef=\"middleName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Middle Name </th>\n                <td mat-cell *matCellDef=\"let ind\"> {{ind.middleName}} </td>\n            </ng-container>\n\n            <!-- lastName Column -->\n            <ng-container matColumnDef=\"lastName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n                <td mat-cell *matCellDef=\"let ind\"> {{ind.lastName}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row class=\"hover\" *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"loadIndividual(row)\"></tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/individuals/component/individual.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/individuals/component/individual.component.ts ***!
  \***************************************************************/
/*! exports provided: IndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualComponent", function() { return IndividualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _individual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../individual */ "./src/app/individuals/individual.ts");
/* harmony import */ var _service_individual_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/individual.service */ "./src/app/individuals/service/individual.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dialog_individual_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog/individual-dialog.component */ "./src/app/individuals/dialog/individual-dialog.component.ts");
/* harmony import */ var _shared_domain_entity_data_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/domain/entity-data-source */ "./src/app/shared/domain/entity-data-source.ts");
/* harmony import */ var _shared_domain_page_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/domain/page-request */ "./src/app/shared/domain/page-request.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var IndividualComponent = /** @class */ (function () {
    function IndividualComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['firstName', 'middleName', 'lastName'];
    }
    IndividualComponent.prototype.ngOnInit = function () {
        this.dataSource = new _shared_domain_entity_data_source__WEBPACK_IMPORTED_MODULE_7__["EntityDataSource"](this.service);
        this.dataSource.loadData(_shared_domain_page_request__WEBPACK_IMPORTED_MODULE_8__["PageRequest"].default('individuals'));
    };
    IndividualComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.loadData(); }))
            .subscribe();
    };
    IndividualComponent.prototype.loadData = function () {
        this.dataSource.loadData(_shared_domain_page_request__WEBPACK_IMPORTED_MODULE_8__["PageRequest"].fromTable('individuals', this.paginator, this.sort));
    };
    IndividualComponent.prototype.loadIndividual = function (row) {
        if (row === void 0) { row = new _individual__WEBPACK_IMPORTED_MODULE_1__["Individual"](); }
        this.dialog.open(_dialog_individual_dialog_component__WEBPACK_IMPORTED_MODULE_6__["IndividualDialogComponent"], { data: row });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], IndividualComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], IndividualComponent.prototype, "sort", void 0);
    IndividualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individuals',
            template: __webpack_require__(/*! ./individual.component.html */ "./src/app/individuals/component/individual.component.html"),
            styles: [__webpack_require__(/*! ./individual.component.css */ "./src/app/individuals/component/individual.component.css")]
        }),
        __metadata("design:paramtypes", [_service_individual_service__WEBPACK_IMPORTED_MODULE_2__["IndividualService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], IndividualComponent);
    return IndividualComponent;
}());



/***/ }),

/***/ "./src/app/individuals/dialog/individual-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/individuals/dialog/individual-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row button,\n.button-row a {\n    margin-right: 8px;\n}"

/***/ }),

/***/ "./src/app/individuals/dialog/individual-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/individuals/dialog/individual-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create/Update Individual</h1>\n<mat-dialog-content>\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>First Name</mat-label>\n        <input matInput placeholder=\"First Name\" required value=\"{{data.firstName}}\">\n    </mat-form-field>\n\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>Middle Name</mat-label>\n        <input matInput placeholder=\"Middle Name\">\n    </mat-form-field>\n\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>Last Name</mat-label>\n        <input matInput placeholder=\"Last Name\" required>\n    </mat-form-field>\n</mat-dialog-content>\n<div class=\"button-row\">\n    <mat-dialog-actions align=\"end\">\n        <button mat-flat-button mat-dialog-close>Cancel</button>\n        <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>Save</button>\n    </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/individuals/dialog/individual-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/individuals/dialog/individual-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: IndividualDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualDialogComponent", function() { return IndividualDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _individual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../individual */ "./src/app/individuals/individual.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var IndividualDialogComponent = /** @class */ (function () {
    function IndividualDialogComponent(data) {
        this.data = data;
    }
    IndividualDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-dialog',
            template: __webpack_require__(/*! ./individual-dialog.component.html */ "./src/app/individuals/dialog/individual-dialog.component.html"),
            styles: [__webpack_require__(/*! ./individual-dialog.component.css */ "./src/app/individuals/dialog/individual-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_individual__WEBPACK_IMPORTED_MODULE_2__["Individual"]])
    ], IndividualDialogComponent);
    return IndividualDialogComponent;
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
/* harmony import */ var _shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/domain/domain-entity */ "./src/app/shared/domain/domain-entity.ts");
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
}(_shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__["DomainEntity"]));



/***/ }),

/***/ "./src/app/individuals/service/individual.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/individuals/service/individual.service.ts ***!
  \***********************************************************/
/*! exports provided: IndividualService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualService", function() { return IndividualService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _individual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../individual */ "./src/app/individuals/individual.ts");
/* harmony import */ var _shared_domain_domain_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/domain/domain-service */ "./src/app/shared/domain/domain-service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_domain_entity_deserializer_impl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/domain/entity-deserializer-impl */ "./src/app/shared/domain/entity-deserializer-impl.ts");
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





var IndividualService = /** @class */ (function (_super) {
    __extends(IndividualService, _super);
    function IndividualService(api) {
        return _super.call(this, api, new _shared_domain_entity_deserializer_impl__WEBPACK_IMPORTED_MODULE_4__["EntityDeserializerImpl"](_individual__WEBPACK_IMPORTED_MODULE_1__["Individual"])) || this;
    }
    IndividualService.prototype.resource = function () {
        return "individuals";
    };
    IndividualService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], IndividualService);
    return IndividualService;
}(_shared_domain_domain_service__WEBPACK_IMPORTED_MODULE_2__["DomainService"]));



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

module.exports = "<div class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <div class=\"container\">\n        <a href=\"#\" routerLink=\"#\" class=\"navbar-brand\">NYCFSS</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/staff\" routerLinkActive=\"active\">Staff</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/individuals\" routerLinkActive=\"active\">Individuals</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/notes\" routerLinkActive=\"active\">Notes</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" routerLink=\"/refData\" routerLinkActive=\"active\">RefData</a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav ml-auto\">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" routerLink=\"#\" routerLinkActive=\"active\" id=\"nav-profile\">Hello, User <span class=\"caret\"></span></a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"nav-profile\">\n                        <a class=\"dropdown-item\" href=\"#\" routerLink=\"/profile\">Profile</a>\n                        <a class=\"dropdown-item\" href=\"#\" routerLink=\"/logout\">Logout</a>\n                    </div>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</div>"

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

/***/ "./src/app/notes/component/notes.component.css":
/*!*****************************************************!*\
  !*** ./src/app/notes/component/notes.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: flex;\n    flex-direction: column;\n    max-height: 500px;\n    min-width: 300px;\n}\n\n.mat-table {\n    overflow: auto;\n    max-height: 500px;\n}\n\n.mat-row:hover {\n    background-color: pink;\n}\n\nth.mat-sort-header-sorted {\n    color: black;\n}"

/***/ }),

/***/ "./src/app/notes/component/notes.component.html":
/*!******************************************************!*\
  !*** ./src/app/notes/component/notes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"mat-display-3\">Notes</h1>\n    <div class=\"spinner-container\" *ngIf=\"loading\">\n        <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"row\">\n        <mat-form-field [floatLabel]=\"auto\">\n            <input matInput [matDatepicker]=\"weekOfPicker\" placeholder=\"mm/dd/yyyy\" [value]=\"date.value\" disabled>\n            <mat-datepicker-toggle matSuffix [for]=\"weekOfPicker\"></mat-datepicker-toggle>\n            <mat-datepicker #weekOfPicker disabled=\"false\"></mat-datepicker>\n        </mat-form-field>\n    </div>\n    <mat-tab-group animationDuration=\"500ms\">\n        <mat-tab *ngFor=\"let day of days; let i = index\" label=\"{{day}}\">\n            <div class=\"example-container mat-elevation-z8\">\n                <table mat-table [dataSource]=\"dataSources[i]\" matSort>\n\n                    <!-- Hidden id Column -->\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef> Id </th>\n                        <td mat-cell *matCellDef=\"let n\"> {{n.id}} </td>\n                    </ng-container>\n\n                    <!-- serviceDate Column -->\n                    <ng-container matColumnDef=\"serviceDate\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Service Date </th>\n                        <td mat-cell *matCellDef=\"let n\"> {{n.serviceDate}} </td>\n                    </ng-container>\n\n                    <!-- firstName Column -->\n                    <ng-container matColumnDef=\"individual\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Individual </th>\n                        <td mat-cell *matCellDef=\"let n\"> {{n.lastNameFirst()}} </td>\n                    </ng-container>\n\n                    <!-- startTime Column -->\n                    <ng-container matColumnDef=\"startTime\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Start Time </th>\n                        <td mat-cell *matCellDef=\"let n\"> {{n.startTime}} </td>\n                    </ng-container>\n\n                    <!-- endTime Column -->\n                    <ng-container matColumnDef=\"endTime\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> End Time </th>\n                        <td mat-cell *matCellDef=\"let n\"> {{n.endTime}} </td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row class=\"hover\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                    <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\" showFirstLastButtons></mat-paginator>\n                </table>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n\n"

/***/ }),

/***/ "./src/app/notes/component/notes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/notes/component/notes.component.ts ***!
  \****************************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_weekly_summary_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/weekly-summary.service */ "./src/app/notes/service/weekly-summary.service.ts");
/* harmony import */ var _weeklySummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weeklySummary */ "./src/app/notes/weeklySummary.ts");
/* harmony import */ var _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../staff/service/staff.service */ "./src/app/staff/service/staff.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotesComponent = /** @class */ (function () {
    function NotesComponent(service, dialog) {
        var _this = this;
        this.service = service;
        this.dialog = dialog;
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.displayedColumns = ['serviceDate', 'individual', 'startTime', 'endTime'];
        this.loading = true;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
        this.notes = [[], [], [], [], [], [], []];
        this.dataSources = [];
        this.notes.forEach(function (note) { return _this.dataSources.push(new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](note)); });
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.service.findByDate(date).subscribe(function (resp) { return _this.handleSummaryResponse(resp, date); }, function (error) { return _this.handleNotFound(error, date); });
    };
    NotesComponent.prototype.selectDate = function (date) {
        var _this = this;
        this.selectedDate = date;
        this.summary.notes.forEach(function (note) {
            _this.notes[note.serviceDate.getDay()].push(note);
        });
        this.loading = false;
    };
    NotesComponent.prototype.handleSummaryResponse = function (summary, date) {
        this.summary = summary;
        this.selectDate(date);
    };
    NotesComponent.prototype.handleNotFound = function (error, date) {
        var _this = this;
        if (error.status == 404) {
            this.service
                .create(_weeklySummary__WEBPACK_IMPORTED_MODULE_4__["WeeklySummary"].forDate(date))
                .subscribe(function (resp) {
                _this.service.linkToStaff(resp, _staff_service_staff_service__WEBPACK_IMPORTED_MODULE_5__["StaffService"].getMe());
                _this.handleSummaryResponse(resp, date);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], NotesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], NotesComponent.prototype, "sort", void 0);
    NotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes',
            template: __webpack_require__(/*! ./notes.component.html */ "./src/app/notes/component/notes.component.html"),
            styles: [__webpack_require__(/*! ./notes.component.css */ "./src/app/notes/component/notes.component.css")]
        }),
        __metadata("design:paramtypes", [_service_weekly_summary_service__WEBPACK_IMPORTED_MODULE_3__["WeeklySummaryService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], NotesComponent);
    return NotesComponent;
}());



/***/ }),

/***/ "./src/app/notes/dialog/notes-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/notes/dialog/notes-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notes/dialog/notes-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notes/dialog/notes-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Notes</h1>\n<mat-dialog-content>\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>First Name</mat-label>\n        <input matInput placeholder=\"First Name\" required value=\"{{data.firstName}}\">\n    </mat-form-field>\n\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>Middle Name</mat-label>\n        <input matInput placeholder=\"Middle Name\">\n    </mat-form-field>\n\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>Last Name</mat-label>\n        <input matInput placeholder=\"Last Name\" required>\n    </mat-form-field>\n</mat-dialog-content>\n<div class=\"button-row\">\n    <mat-dialog-actions align=\"end\">\n        <button mat-flat-button mat-dialog-close>Cancel</button>\n        <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>Save</button>\n    </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/notes/dialog/notes-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notes/dialog/notes-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: NotesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesDialogComponent", function() { return NotesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../note */ "./src/app/notes/note.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NotesDialogComponent = /** @class */ (function () {
    function NotesDialogComponent(data) {
        this.data = data;
    }
    NotesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notes-dialog',
            template: __webpack_require__(/*! ./notes-dialog.component.html */ "./src/app/notes/dialog/notes-dialog.component.html"),
            styles: [__webpack_require__(/*! ./notes-dialog.component.css */ "./src/app/notes/dialog/notes-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_note__WEBPACK_IMPORTED_MODULE_2__["Note"]])
    ], NotesDialogComponent);
    return NotesDialogComponent;
}());



/***/ }),

/***/ "./src/app/notes/note.ts":
/*!*******************************!*\
  !*** ./src/app/notes/note.ts ***!
  \*******************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony import */ var _shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/domain/domain-entity */ "./src/app/shared/domain/domain-entity.ts");
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

var Note = /** @class */ (function (_super) {
    __extends(Note, _super);
    function Note() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Note.prototype.resourceName = function () {
        return "notes";
    };
    Note.prototype.lastNameFirst = function () {
        return this.individual.lastName + ", " + this.individual.firstName;
    };
    return Note;
}(_shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__["DomainEntity"]));



/***/ }),

/***/ "./src/app/notes/service/weekly-summary.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/notes/service/weekly-summary.service.ts ***!
  \*********************************************************/
/*! exports provided: WeeklySummaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklySummaryService", function() { return WeeklySummaryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_domain_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/domain/domain-service */ "./src/app/shared/domain/domain-service.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_domain_entity_deserializer_impl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/domain/entity-deserializer-impl */ "./src/app/shared/domain/entity-deserializer-impl.ts");
/* harmony import */ var _weeklySummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weeklySummary */ "./src/app/notes/weeklySummary.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_domain_one_to_one_relationship__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/domain/one-to-one-relationship */ "./src/app/shared/domain/one-to-one-relationship.ts");
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








var WeeklySummaryService = /** @class */ (function (_super) {
    __extends(WeeklySummaryService, _super);
    function WeeklySummaryService(api) {
        return _super.call(this, api, new _shared_domain_entity_deserializer_impl__WEBPACK_IMPORTED_MODULE_3__["EntityDeserializerImpl"](_weeklySummary__WEBPACK_IMPORTED_MODULE_4__["WeeklySummary"])) || this;
    }
    WeeklySummaryService_1 = WeeklySummaryService;
    WeeklySummaryService.prototype.resource = function () {
        return "summaries";
    };
    WeeklySummaryService.prototype.search = function (pageRequest) {
        return _super.prototype.search.call(this, pageRequest.withProjection('withNotes'));
    };
    WeeklySummaryService.prototype.findByDate = function (date) {
        var _this = this;
        return this.api.findOneQuery(this.resource(), 'findByStaffIdAndWeekOf', WeeklySummaryService_1.weekOfParam(date))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resp) { return _this.deserializer.deserialize(resp); }));
    };
    WeeklySummaryService.prototype.linkToStaff = function (summary, staff) {
        var er = new _shared_domain_one_to_one_relationship__WEBPACK_IMPORTED_MODULE_7__["OneToOneRelationship"](summary, 'staff', staff);
        this.api.link(er);
    };
    WeeklySummaryService.weekOfParam = function (date) {
        if (date.getDay() != 0) {
            date.setDate(date.getDate() - date.getDay());
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]()
            .set('weekOf', date.toISOString().substr(0, 10))
            .set('staffId', localStorage.getItem('userId'));
    };
    WeeklySummaryService = WeeklySummaryService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], WeeklySummaryService);
    return WeeklySummaryService;
    var WeeklySummaryService_1;
}(_shared_domain_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]));



/***/ }),

/***/ "./src/app/notes/weeklySummary.ts":
/*!****************************************!*\
  !*** ./src/app/notes/weeklySummary.ts ***!
  \****************************************/
/*! exports provided: WeeklySummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklySummary", function() { return WeeklySummary; });
/* harmony import */ var _shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/domain/domain-entity */ "./src/app/shared/domain/domain-entity.ts");
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

var WeeklySummary = /** @class */ (function (_super) {
    __extends(WeeklySummary, _super);
    function WeeklySummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeeklySummary.prototype.resourceName = function () {
        return "summaries";
    };
    WeeklySummary.forDate = function (date) {
        var toRet = new WeeklySummary();
        date.setDate(date.getDate() - date.getDay());
        toRet.weekOf = date;
        return toRet;
    };
    return WeeklySummary;
}(_shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__["DomainEntity"]));



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
/* harmony import */ var _window_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window-providers */ "./src/app/shared/window-providers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ApiService = /** @class */ (function () {
    function ApiService(http, window) {
        this.http = http;
        this.window = window;
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
        return this.http.put(rel.relPath(), rel.toBody(this.getHost()), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'text/uri-list' }) })
            .subscribe(function (resp) { });
    };
    ApiService.prototype.unlink = function (rel) {
        return this.http.delete(rel.deletePath(), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'text/uri-list' }) });
    };
    ApiService.prototype.findOne = function (resource, id) {
        return this.http.get(("/api/" + resource + "/" + id).toString());
    };
    ApiService.prototype.findOneQuery = function (resource, query, params) {
        return this.http.get(("/api/" + resource + "/search/" + query).toString(), { params: params });
    };
    ApiService.prototype.search = function (pageRequest) {
        return this.http.get(pageRequest.getUrl(), { params: pageRequest.toHttpParams() });
    };
    ApiService.prototype.findChildren = function (resource, id, childRel) {
        return this.http.get("/api/" + resource + "/" + id + "/" + childRel);
    };
    ApiService.prototype.getHost = function () {
        return this.window.location.protocol + "//" + this.window.location.host;
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_window_providers__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Window])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/domain/domain-entity.ts":
/*!************************************************!*\
  !*** ./src/app/shared/domain/domain-entity.ts ***!
  \************************************************/
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

/***/ "./src/app/shared/domain/domain-service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/domain/domain-service.ts ***!
  \*************************************************/
/*! exports provided: DomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainService", function() { return DomainService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

var DomainService = /** @class */ (function () {
    function DomainService(api, deserializer) {
        this.api = api;
        this.deserializer = deserializer;
    }
    DomainService.prototype.findOne = function (id) {
        var _this = this;
        return this.api
            .findOne(this.resource(), id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return _this.deserializer.deserialize(resp); }));
    };
    DomainService.prototype.search = function (pageRequest) {
        var _this = this;
        return this.api
            .search(pageRequest)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return _this.deserializer.deserializeList(resp); }));
    };
    DomainService.prototype.create = function (entity) {
        var _this = this;
        return this.api
            .create(entity)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return _this.deserializer.deserialize(resp); }));
    };
    DomainService.prototype.update = function (entity) {
        var _this = this;
        return this.api
            .update(entity)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (resp) { return _this.deserializer.deserialize(resp); }));
    };
    DomainService.prototype.delete = function (entity) {
        this.api.delete(entity);
    };
    return DomainService;
}());



/***/ }),

/***/ "./src/app/shared/domain/entity-data-source.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/domain/entity-data-source.ts ***!
  \*****************************************************/
/*! exports provided: EntityDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityDataSource", function() { return EntityDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var EntityDataSource = /** @class */ (function () {
    function EntityDataSource(service) {
        this.service = service;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    ;
    EntityDataSource.prototype.connect = function (collectionViewer) {
        return this.subject.asObservable();
    };
    EntityDataSource.prototype.disconnect = function (collectionViewer) {
        this.subject.complete();
        this.loading.complete();
    };
    EntityDataSource.prototype.loadData = function (pageRequest) {
        var _this = this;
        this.loading.next(true);
        this.service.search(pageRequest).subscribe(function (response) { return _this.subject.next(response.entityList()); }, function (err) { return _this.subject.next([]); }, function () { return _this.loading.next(false); });
    };
    return EntityDataSource;
}());



/***/ }),

/***/ "./src/app/shared/domain/entity-deserializer-impl.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/domain/entity-deserializer-impl.ts ***!
  \***********************************************************/
/*! exports provided: EntityDeserializerImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityDeserializerImpl", function() { return EntityDeserializerImpl; });
/* harmony import */ var _entity_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-list */ "./src/app/shared/domain/entity-list.ts");

var EntityDeserializerImpl = /** @class */ (function () {
    function EntityDeserializerImpl(EntityType) {
        this.EntityType = EntityType;
    }
    EntityDeserializerImpl.prototype.deserialize = function (json) {
        var entity = new this.EntityType();
        Object.assign(entity, json);
        return entity;
    };
    EntityDeserializerImpl.prototype.deserializeList = function (json) {
        var _this = this;
        var embedded = json._embedded;
        var jsonList = embedded[Object.keys(embedded)[0]];
        return new _entity_list__WEBPACK_IMPORTED_MODULE_0__["EntityList"](jsonList.map(function (jsonItem) { return _this.deserialize(jsonItem); }), json._links, json.page);
    };
    return EntityDeserializerImpl;
}());



/***/ }),

/***/ "./src/app/shared/domain/entity-list.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/domain/entity-list.ts ***!
  \**********************************************/
/*! exports provided: EntityList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityList", function() { return EntityList; });
var EntityList = /** @class */ (function () {
    function EntityList(_embedded, _links, page) {
        this._embedded = _embedded;
        this._links = _links;
        this.page = page;
    }
    EntityList.prototype.entityList = function () {
        return this._embedded;
    };
    EntityList.prototype.links = function () {
        return this._links;
    };
    EntityList.prototype.next = function () {
        return this._links['next']['href'];
    };
    EntityList.prototype.prev = function () {
        return this._links['prev']['href'];
    };
    return EntityList;
}());



/***/ }),

/***/ "./src/app/shared/domain/entity-relationship.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/domain/entity-relationship.ts ***!
  \******************************************************/
/*! exports provided: EntityRelationship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRelationship", function() { return EntityRelationship; });
var EntityRelationship = /** @class */ (function () {
    function EntityRelationship(parent, rel) {
        this.parent = parent;
        this.rel = rel;
    }
    EntityRelationship.prototype.relPath = function () {
        return this.parent.location() + "/" + this.rel;
    };
    return EntityRelationship;
}());



/***/ }),

/***/ "./src/app/shared/domain/one-to-one-relationship.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/domain/one-to-one-relationship.ts ***!
  \**********************************************************/
/*! exports provided: OneToOneRelationship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneToOneRelationship", function() { return OneToOneRelationship; });
/* harmony import */ var _entity_relationship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-relationship */ "./src/app/shared/domain/entity-relationship.ts");
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

var OneToOneRelationship = /** @class */ (function (_super) {
    __extends(OneToOneRelationship, _super);
    function OneToOneRelationship(parent, path, child) {
        var _this = _super.call(this, parent, path) || this;
        _this.child = child;
        return _this;
    }
    OneToOneRelationship.prototype.toBody = function (host) {
        return "" + host + this.child.location();
    };
    OneToOneRelationship.prototype.deletePath = function () {
        return _super.prototype.relPath.call(this);
    };
    return OneToOneRelationship;
}(_entity_relationship__WEBPACK_IMPORTED_MODULE_0__["EntityRelationship"]));



/***/ }),

/***/ "./src/app/shared/domain/page-request.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/domain/page-request.ts ***!
  \***********************************************/
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
        var toRet = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('page', this.page)
            .set('size', this.size)
            .set('sort', this.sort);
        if (this.projection != null) {
            toRet = toRet.set('projection', this.projection);
        }
        return toRet;
    };
    PageRequest.prototype.withProjection = function (projection) {
        this.projection = projection;
        return this;
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
    PageRequest.fromTable = function (resource, paginator, sort) {
        return new PageRequest(resource, "" + paginator.pageIndex, "" + paginator.pageSize, sort.active + "," + sort.direction);
    };
    PageRequest.default = function (resource) {
        return new PageRequest(resource, '0', '25', 'id,asc');
    };
    return PageRequest;
}());



/***/ }),

/***/ "./src/app/shared/window-providers.ts":
/*!********************************************!*\
  !*** ./src/app/shared/window-providers.ts ***!
  \********************************************/
/*! exports provided: WINDOW, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('window');
var windowProvider = {
    provide: WINDOW,
    useFactory: function () { return window; }
};
var WINDOW_PROVIDERS = [
    windowProvider
];


/***/ }),

/***/ "./src/app/staff/component/staff.component.css":
/*!*****************************************************!*\
  !*** ./src/app/staff/component/staff.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-icon {\n    height: 44px;\n    width: 44px;\n}"

/***/ }),

/***/ "./src/app/staff/component/staff.component.html":
/*!******************************************************!*\
  !*** ./src/app/staff/component/staff.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"mat-display-3\">Staff</h1>\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n        <mat-spinner></mat-spinner>\n    </div>\n    <div class=\"example-container mat-elevation-z8\">\n        <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- Hidden id Column -->\n            <ng-container matColumnDef=\"id\">\n                <th mat-header-cell *matHeaderCellDef> Id </th>\n                <td mat-cell *matCellDef=\"let stf\"> {{stf.id}} </td>\n            </ng-container>\n\n            <!-- pictureUrl Column -->\n            <ng-container matColumnDef=\"pictureUrl\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Icon </th>\n                <td mat-cell *matCellDef=\"let stf\"><img class=\"table-icon\" src=\"{{stf.pictureUrl}}\"></td>\n            </ng-container>\n\n            <!-- firstName Column -->\n            <ng-container matColumnDef=\"firstName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> First Name </th>\n                <td mat-cell *matCellDef=\"let stf\"> {{stf.firstName}} </td>\n            </ng-container>\n\n            <!-- middleName Column -->\n            <ng-container matColumnDef=\"middleName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Middle Name </th>\n                <td mat-cell *matCellDef=\"let stf\"> {{stf.middleName}} </td>\n            </ng-container>\n\n            <!-- lastName Column -->\n            <ng-container matColumnDef=\"lastName\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n                <td mat-cell *matCellDef=\"let stf\"> {{stf.lastName}} </td>\n            </ng-container>\n\n            <!-- email Column -->\n            <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> E-mail </th>\n                <td mat-cell *matCellDef=\"let stf\"> {{stf.email}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row class=\"hover\" *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"loadStaff(row)\"></tr>\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/staff/component/staff.component.ts":
/*!****************************************************!*\
  !*** ./src/app/staff/component/staff.component.ts ***!
  \****************************************************/
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_domain_entity_data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/domain/entity-data-source */ "./src/app/shared/domain/entity-data-source.ts");
/* harmony import */ var _staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../staff */ "./src/app/staff/staff.ts");
/* harmony import */ var _service_staff_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/staff.service */ "./src/app/staff/service/staff.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_domain_page_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/domain/page-request */ "./src/app/shared/domain/page-request.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _dialog_staff_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog/staff-dialog.component */ "./src/app/staff/dialog/staff-dialog.component.ts");
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
    function StaffComponent(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['pictureUrl', 'firstName', 'lastName', 'email'];
    }
    StaffComponent.prototype.ngOnInit = function () {
        this.dataSource = new _shared_domain_entity_data_source__WEBPACK_IMPORTED_MODULE_4__["EntityDataSource"](this.service);
        this.dataSource.loadData(_shared_domain_page_request__WEBPACK_IMPORTED_MODULE_8__["PageRequest"].default('staff'));
    };
    StaffComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () { return _this.loadData(); }))
            .subscribe();
    };
    StaffComponent.prototype.loadData = function () {
        this.dataSource.loadData(_shared_domain_page_request__WEBPACK_IMPORTED_MODULE_8__["PageRequest"].fromTable('staff', this.paginator, this.sort));
    };
    StaffComponent.prototype.loadStaff = function (row) {
        if (row === void 0) { row = new _staff__WEBPACK_IMPORTED_MODULE_5__["Staff"](); }
        this.dialog.open(_dialog_staff_dialog_component__WEBPACK_IMPORTED_MODULE_10__["StaffDialogComponent"], { data: row });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], StaffComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], StaffComponent.prototype, "sort", void 0);
    StaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff',
            template: __webpack_require__(/*! ./staff.component.html */ "./src/app/staff/component/staff.component.html"),
            styles: [__webpack_require__(/*! ./staff.component.css */ "./src/app/staff/component/staff.component.css")]
        }),
        __metadata("design:paramtypes", [_service_staff_service__WEBPACK_IMPORTED_MODULE_6__["StaffService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], StaffComponent);
    return StaffComponent;
}());



/***/ }),

/***/ "./src/app/staff/dialog/staff-dialog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/staff/dialog/staff-dialog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row button,\n.button-row a {\n    margin-right: 8px;\n}"

/***/ }),

/***/ "./src/app/staff/dialog/staff-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/staff/dialog/staff-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create/Update Staff</h1>\n<mat-dialog-content>\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>First Name</mat-label>\n        <input matInput placeholder=\"First Name\" required value=\"{{data.firstName}}\">\n    </mat-form-field>\n\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>Last Name</mat-label>\n        <input matInput placeholder=\"Last Name\" required value=\"{{data.lastName}}\">\n    </mat-form-field>\n\n    <mat-form-field [floatLabel]=\"auto\">\n        <mat-label>E-mail</mat-label>\n        <input matInput placeholder=\"E-mail\" required value=\"{{data.email}}\">\n    </mat-form-field>\n\n</mat-dialog-content>\n<div class=\"button-row\">\n    <mat-dialog-actions align=\"end\">\n        <button mat-flat-button mat-dialog-close>Cancel</button>\n        <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>Save</button>\n    </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/staff/dialog/staff-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/staff/dialog/staff-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: StaffDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffDialogComponent", function() { return StaffDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _staff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff */ "./src/app/staff/staff.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var StaffDialogComponent = /** @class */ (function () {
    function StaffDialogComponent(data) {
        this.data = data;
    }
    StaffDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-dialog',
            template: __webpack_require__(/*! ./staff-dialog.component.html */ "./src/app/staff/dialog/staff-dialog.component.html"),
            styles: [__webpack_require__(/*! ./staff-dialog.component.css */ "./src/app/staff/dialog/staff-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_staff__WEBPACK_IMPORTED_MODULE_2__["Staff"]])
    ], StaffDialogComponent);
    return StaffDialogComponent;
}());



/***/ }),

/***/ "./src/app/staff/service/staff.service.ts":
/*!************************************************!*\
  !*** ./src/app/staff/service/staff.service.ts ***!
  \************************************************/
/*! exports provided: StaffService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffService", function() { return StaffService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_domain_domain_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/domain/domain-service */ "./src/app/shared/domain/domain-service.ts");
/* harmony import */ var _staff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../staff */ "./src/app/staff/staff.ts");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/api.service */ "./src/app/shared/api.service.ts");
/* harmony import */ var _shared_domain_entity_deserializer_impl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/domain/entity-deserializer-impl */ "./src/app/shared/domain/entity-deserializer-impl.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
        return _super.call(this, api, new _shared_domain_entity_deserializer_impl__WEBPACK_IMPORTED_MODULE_4__["EntityDeserializerImpl"](_staff__WEBPACK_IMPORTED_MODULE_2__["Staff"])) || this;
    }
    StaffService.prototype.findByEmail = function (email) {
        var _this = this;
        return this.api.findOneQuery('staff', 'findByEmail', new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpParams"]().set('email', email))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resp) { return _this.deserializer.deserialize(resp); }));
    };
    StaffService.prototype.resource = function () {
        return "staff";
    };
    StaffService.getMe = function () {
        var me = new _staff__WEBPACK_IMPORTED_MODULE_2__["Staff"]();
        me.id = localStorage.getItem('userId');
        return me;
    };
    StaffService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], StaffService);
    return StaffService;
}(_shared_domain_domain_service__WEBPACK_IMPORTED_MODULE_1__["DomainService"]));



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
/* harmony import */ var _shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/domain/domain-entity */ "./src/app/shared/domain/domain-entity.ts");
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
}(_shared_domain_domain_entity__WEBPACK_IMPORTED_MODULE_0__["DomainEntity"]));



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

module.exports = __webpack_require__(/*! /home/jchiavaroli/Documents/git/nycfss-notes/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
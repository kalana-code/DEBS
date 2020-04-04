(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/hod-layout/hod-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/hod-layout/hod-layout.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" >\n    <div class=\"sidebar\" data-color=\"hod\" >\n        <app-sidebar-hod></app-sidebar-hod>\n        <div class=\"sidebar-background\" ></div>\n    </div>\n  \n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/hod-layout/sidebar-hod/sidebar-hod.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/hod-layout/sidebar-hod/sidebar-hod.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/crest.png\"/>\n            </div>\n            HOD-view\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        \n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        \n        <li *ngIf=\"isMobileMenu()\" class=\"active-pro\">\n            <hr/>\n            <a href=\"\" (click)=\"logOut()\">\n                <p>Log out</p>\n            </a>\n        </li>\n        \n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/lecturer-layout/lecturer-layout.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/lecturer-layout/lecturer-layout.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\" >\n    <div class=\"sidebar\" data-color=\"lecturer\" >\n        <app-sidebar-lecturer></app-sidebar-lecturer>\n        <div class=\"sidebar-background\" ></div>\n    </div>\n  \n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/crest.png\"/>\n            </div>\n            lecturer-view\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        \n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        \n        <li *ngIf=\"isMobileMenu()\" class=\"active-pro\">\n            <hr/>\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        \n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/admin-layout.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/admin-layout.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color=\"admin\" >\n      <app-sidebar></app-sidebar>\n      <div class=\"sidebar-background\" ></div>\n  </div>\n\n  <div class=\"main-panel\">\n      <navbar-cmp></navbar-cmp>\n      <router-outlet></router-outlet>\n      <div *ngIf=\"isMap('maps')\">\n          <footer-cmp></footer-cmp>\n      </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/shared/footer/footer.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/shared/footer/footer.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n               \n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"\">Department of Computer Engineering</a>, University of Peradeniya\n        </p>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/shared/navbar/navbar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/shared/navbar/navbar.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\" >{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-left\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <p class=\"hidden-lg hidden-md\">{{getTitle()}}</p>\n                    </a>\n                </li>\n                \n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\">\n                        <p>Account</p>\n                    </a>\n                </li>\n                \n                <li>\n                    <a href=\"\" (click) = \"logOut()\">\n                        <p>Log out</p>\n                    </a>\n                </li>\n                <li class=\"separator hidden-lg hidden-md\"></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/sidebar/sidebar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/sidebar/sidebar.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/crest.png\"/>\n            </div>\n            admin-view\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        \n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        \n        <li *ngIf=\"isMobileMenu()\" class=\"active-pro\">\n            <hr/>\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        \n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/student-layout/sidebar-student/sidebar-student.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/student-layout/sidebar-student/sidebar-student.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/crest.png\"/>\n            </div>\n            student-view\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        \n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        \n        <li *ngIf=\"isMobileMenu()\" class=\"active-pro\">\n            <hr/>\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        \n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/student-layout/student-layout.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/student-layout/student-layout.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\" >\n    <div class=\"sidebar\" data-color=\"student\" >\n        <app-sidebar-student></app-sidebar-student>\n        <div class=\"sidebar-background\" ></div>\n    </div>\n  \n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/crest.png\"/>\n            </div>\n            to-view\n        </a>\n    </div>\n    <ul class=\"nav responsive-nav\">\n        \n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n            <a  [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n        \n        <li *ngIf=\"isMobileMenu()\" class=\"active-pro\">\n            <hr/>\n            <a>\n                <p>Log out</p>\n            </a>\n        </li>\n        \n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/tech-officer-layout/tech-officer-layout.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/tech-officer-layout/tech-officer-layout.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\" >\n    <div class=\"sidebar\" data-color=\"techOfficer\" >\n        <app-sidebar-techofficer></app-sidebar-techofficer>\n        <div class=\"sidebar-background\" ></div>\n    </div>\n  \n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMap('maps')\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n  \n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-page\">\n  <div class=\"form\">\n    <div class=\"logo\">\n      <img src=\"assets/img/crest.png\" alt=\"\" />\n    </div>\n    <div class=\"caption\">\n      <p>Account Login</p>\n    </div>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"login-form\">\n      <div class=\"form-group\">\n        <input\n          placeholder=\"username\"\n          type=\"text\"\n          formControlName=\"username\"\n          [ngClass]=\"{ 'is-invalid': submitted && formData.username.errors }\"\n        />\n        <div\n          *ngIf=\"submitted && formData.username.errors\"\n          class=\"invalid-feedback\"\n        >\n          <div *ngIf=\"formData.username.errors.required\">\n            Username is required\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input\n          placeholder=\"password\"\n          type=\"password\"\n          formControlName=\"password\"\n          [ngClass]=\"{ 'is-invalid': submitted && formData.password.errors }\"\n        />\n        <div\n          *ngIf=\"submitted && formData.password.errors\"\n          class=\"invalid-feedback\"\n        >\n          <div *ngIf=\"formData.password.errors.required\">\n            Password is required\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n          <span\n            *ngIf=\"loading\"\n            class=\"spinner-border spinner-border-sm mr-1\"\n          ></span>\n          Login\n        </button>\n      </div>\n    </form>\n  </div>\n  <footer-cmp></footer-cmp>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page404/page404.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page404/page404.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page_404_con\">\n    <h1>Not found <span>:(</span></h1>\n        <p>Sorry, but the page you were trying to view does not exist.</p>\n        <i></i>\n        <p class=\"i\">404</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/hod-layout/hod-layout.module": [
		"./src/app/layouts/hod-layout/hod-layout.module.ts",
		"default~layouts-hod-layout-hod-layout-module~layouts-lecturer-layout-lecturer-layout-module~layouts-~4ed2045b",
		"layouts-hod-layout-hod-layout-module"
	],
	"./layouts/lecturer-layout/lecturer-layout.module": [
		"./src/app/layouts/lecturer-layout/lecturer-layout.module.ts",
		"default~layouts-hod-layout-hod-layout-module~layouts-lecturer-layout-lecturer-layout-module~layouts-~4ed2045b",
		"layouts-lecturer-layout-lecturer-layout-module"
	],
	"./layouts/sample/admin-layout.module": [
		"./src/app/layouts/sample/admin-layout.module.ts",
		"default~layouts-hod-layout-hod-layout-module~layouts-lecturer-layout-lecturer-layout-module~layouts-~4ed2045b",
		"layouts-sample-admin-layout-module"
	],
	"./layouts/student-layout/student-layout.module": [
		"./src/app/layouts/student-layout/student-layout.module.ts",
		"default~layouts-hod-layout-hod-layout-module~layouts-lecturer-layout-lecturer-layout-module~layouts-~4ed2045b",
		"layouts-student-layout-student-layout-module"
	],
	"./layouts/tech-officer-layout/tech-officer-layout.module": [
		"./src/app/layouts/tech-officer-layout/tech-officer-layout.module.ts",
		"default~layouts-hod-layout-hod-layout-module~layouts-lecturer-layout-lecturer-layout-module~layouts-~4ed2045b",
		"layouts-tech-officer-layout-tech-officer-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: common_1.Location }
    ]; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var app_routing_1 = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var navbar_module_1 = __webpack_require__(/*! ./layouts/sample/shared/navbar/navbar.module */ "./src/app/layouts/sample/shared/navbar/navbar.module.ts");
var footer_module_1 = __webpack_require__(/*! ./layouts/sample/shared/footer/footer.module */ "./src/app/layouts/sample/shared/footer/footer.module.ts");
//sideBar Module
var sidebar_module_1 = __webpack_require__(/*! ./layouts/sample/sidebar/sidebar.module */ "./src/app/layouts/sample/sidebar/sidebar.module.ts");
var sidebar_student_module_1 = __webpack_require__(/*! ./layouts/student-layout/sidebar-student/sidebar-student.module */ "./src/app/layouts/student-layout/sidebar-student/sidebar-student.module.ts");
var sidebar_lecturer_module_1 = __webpack_require__(/*! ./layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.module */ "./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.module.ts");
var sidebar_techofficer_module_1 = __webpack_require__(/*! ./layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.module */ "./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.module.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
//layouts 
var admin_layout_component_1 = __webpack_require__(/*! ./layouts/sample/admin-layout.component */ "./src/app/layouts/sample/admin-layout.component.ts");
var lecturer_layout_component_1 = __webpack_require__(/*! ./layouts/lecturer-layout/lecturer-layout.component */ "./src/app/layouts/lecturer-layout/lecturer-layout.component.ts");
var tech_officer_layout_component_1 = __webpack_require__(/*! ./layouts/tech-officer-layout/tech-officer-layout.component */ "./src/app/layouts/tech-officer-layout/tech-officer-layout.component.ts");
var hod_layout_component_1 = __webpack_require__(/*! ./layouts/hod-layout/hod-layout.component */ "./src/app/layouts/hod-layout/hod-layout.component.ts");
var student_layout_component_1 = __webpack_require__(/*! ./layouts/student-layout/student-layout.component */ "./src/app/layouts/student-layout/student-layout.component.ts");
var slider_1 = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slider.js");
var login_component_1 = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var page404_component_1 = __webpack_require__(/*! ./pages/page404/page404.component */ "./src/app/pages/page404/page404.component.ts");
var sidebar_hod_component_1 = __webpack_require__(/*! ./layouts/hod-layout/sidebar-hod/sidebar-hod.component */ "./src/app/layouts/hod-layout/sidebar-hod/sidebar-hod.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                platform_browser_1.BrowserModule /* or CommonModule */,
                forms_1.FormsModule, forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                // Side bar 
                sidebar_module_1.SidebarModule,
                sidebar_lecturer_module_1.SidebarLecturerModule,
                sidebar_student_module_1.SidebarStudentModule,
                sidebar_techofficer_module_1.SidebarTechofficerModule,
                app_routing_1.AppRoutingModule,
                slider_1.MatSliderModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.Login,
                page404_component_1.Page404,
                //layout -----
                admin_layout_component_1.AdminLayoutComponent,
                lecturer_layout_component_1.LecturerLayoutComponent,
                tech_officer_layout_component_1.TechOfficerLayoutComponent,
                hod_layout_component_1.HodLayoutComponent,
                student_layout_component_1.StudentLayoutComponent,
                sidebar_hod_component_1.SidebarHodComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
// Guard
var auth_guard_1 = __webpack_require__(/*! app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var role_1 = __webpack_require__(/*! ./auth/model/user/role */ "./src/app/auth/model/user/role.ts");
//Pages
var login_component_1 = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var page404_component_1 = __webpack_require__(/*! ./pages/page404/page404.component */ "./src/app/pages/page404/page404.component.ts");
//layouts
var admin_layout_component_1 = __webpack_require__(/*! ./layouts/sample/admin-layout.component */ "./src/app/layouts/sample/admin-layout.component.ts");
var lecturer_layout_component_1 = __webpack_require__(/*! ./layouts/lecturer-layout/lecturer-layout.component */ "./src/app/layouts/lecturer-layout/lecturer-layout.component.ts");
var tech_officer_layout_component_1 = __webpack_require__(/*! ./layouts/tech-officer-layout/tech-officer-layout.component */ "./src/app/layouts/tech-officer-layout/tech-officer-layout.component.ts");
var hod_layout_component_1 = __webpack_require__(/*! ./layouts/hod-layout/hod-layout.component */ "./src/app/layouts/hod-layout/hod-layout.component.ts");
var student_layout_component_1 = __webpack_require__(/*! ./layouts/student-layout/student-layout.component */ "./src/app/layouts/student-layout/student-layout.component.ts");
var routes = [
    {
        path: "",
        redirectTo: "/login",
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: admin_layout_component_1.AdminLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: [role_1.Role.Admin],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: './layouts/sample/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    {
        path: 'student',
        component: student_layout_component_1.StudentLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: [role_1.Role.Student],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: './layouts/student-layout/student-layout.module#StudentLayoutModule'
            }
        ]
    },
    {
        path: 'lecturer',
        component: lecturer_layout_component_1.LecturerLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: [role_1.Role.Lecturer],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: './layouts/lecturer-layout/lecturer-layout.module#LecturerLayoutModule'
            }
        ]
    },
    {
        path: 'hod',
        component: hod_layout_component_1.HodLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: [role_1.Role.Hod],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: './layouts/hod-layout/hod-layout.module#HodLayoutModule'
            }
        ]
    },
    {
        path: 'tech-officer',
        component: tech_officer_layout_component_1.TechOfficerLayoutComponent,
        canActivate: [auth_guard_1.AuthGuard],
        data: [role_1.Role.TechOfficer],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: './layouts/tech-officer-layout/tech-officer-layout.module#TechOfficerLayoutModule'
            }
        ]
    },
    {
        path: 'login',
        component: login_component_1.Login
    },
    {
        path: '**',
        component: page404_component_1.Page404
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: false
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.RoutingComponent = [];


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.hasRole = function (rolesList, currentUserRole) {
        for (var index = 0; index < rolesList.length; index++) {
            var role = rolesList[index];
            if (role === currentUserRole) {
                return true;
            }
        }
        return false;
    };
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.authService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            var RoleList = Object.values(next.data);
            console.log(next.data);
            console.log(this.hasRole(RoleList, currentUser.role));
            if (next.data && this.hasRole(RoleList, currentUser.role)) {
                // role authorised so return true
                console.log("authorized route so return true.");
                return true;
            }
        }
        console.log("cannot active route redirec to login page.");
        // unauthorized route access so return false and navigate to login
        this.router.navigate(['login']);
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    AuthGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var environment_1 = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.refreshUserInfo = function () {
        this.currentUserSubject = new rxjs_1.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.currentUser == null;
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(environment_1.environment.apiUrl + "/authenticate", { username: username, password: password })
            .pipe(operators_1.map(function (data) {
            if (data.body) {
                localStorage.setItem('currentUser', JSON.stringify(data.body));
                _this.currentUserSubject.next(data.body);
                return data.body;
            }
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/auth/model/user/role.ts":
/*!*****************************************!*\
  !*** ./src/app/auth/model/user/role.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Note
// All role should be in capital letter
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Student"] = "STUDENT";
    Role["Lecturer"] = "LECTURER";
    Role["TechOfficer"] = "TECHOFFICER";
    Role["Hod"] = "HOD";
})(Role = exports.Role || (exports.Role = {}));


/***/ }),

/***/ "./src/app/layouts/hod-layout/hod-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/hod-layout/hod-layout.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
__webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var perfect_scrollbar_1 = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var HodLayoutComponent = /** @class */ (function () {
    function HodLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    HodLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNotification('top', 'right');
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof router_1.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps = new perfect_scrollbar_1.default(elemSidebar);
        }
    };
    HodLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    HodLayoutComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    HodLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps.update();
        }
    };
    HodLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    HodLayoutComponent.prototype.showNotification = function (from, align) {
        var color = 'success';
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b> Student Bashboard </b>"
        }, {
            type: color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    HodLayoutComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    HodLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-hod-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./hod-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/hod-layout/hod-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], HodLayoutComponent);
    return HodLayoutComponent;
}());
exports.HodLayoutComponent = HodLayoutComponent;


/***/ }),

/***/ "./src/app/layouts/hod-layout/sidebar-hod/sidebar-hod.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layouts/hod-layout/sidebar-hod/sidebar-hod.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! app/auth/auth.service */ "./src/app/auth/auth.service.ts");
exports.ROUTES = [
    { path: '/hod/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
];
var SidebarHodComponent = /** @class */ (function () {
    function SidebarHodComponent(authService) {
        this.authService = authService;
    }
    SidebarHodComponent.prototype.ngOnInit = function () {
        console.log("student-side");
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
        console.log(this.menuItems);
    };
    SidebarHodComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarHodComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    SidebarHodComponent.ctorParameters = function () { return [
        { type: auth_service_1.AuthService }
    ]; };
    SidebarHodComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar-hod',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar-hod.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/hod-layout/sidebar-hod/sidebar-hod.component.html")).default
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], SidebarHodComponent);
    return SidebarHodComponent;
}());
exports.SidebarHodComponent = SidebarHodComponent;


/***/ }),

/***/ "./src/app/layouts/lecturer-layout/lecturer-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/lecturer-layout/lecturer-layout.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
__webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var perfect_scrollbar_1 = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var LecturerLayoutComponent = /** @class */ (function () {
    function LecturerLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    LecturerLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNotification('top', 'right');
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof router_1.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps = new perfect_scrollbar_1.default(elemSidebar);
        }
    };
    LecturerLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    LecturerLayoutComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    LecturerLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps.update();
        }
    };
    LecturerLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    LecturerLayoutComponent.prototype.showNotification = function (from, align) {
        var color = 'success';
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b> Lecturer Bashboard </b>"
        }, {
            type: color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    LecturerLayoutComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    LecturerLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-lecturer-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lecturer-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/lecturer-layout/lecturer-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], LecturerLayoutComponent);
    return LecturerLayoutComponent;
}());
exports.LecturerLayoutComponent = LecturerLayoutComponent;


/***/ }),

/***/ "./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.component.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
exports.ROUTES = [
    { path: '/lecturer/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
];
var SidebarLecturerComponent = /** @class */ (function () {
    function SidebarLecturerComponent() {
    }
    SidebarLecturerComponent.prototype.ngOnInit = function () {
        console.log("student-side");
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
        console.log(this.menuItems);
    };
    SidebarLecturerComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarLecturerComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar-lecturer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar-lecturer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], SidebarLecturerComponent);
    return SidebarLecturerComponent;
}());
exports.SidebarLecturerComponent = SidebarLecturerComponent;


/***/ }),

/***/ "./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.module.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var sidebar_lecturer_component_1 = __webpack_require__(/*! ./sidebar-lecturer.component */ "./src/app/layouts/lecturer-layout/sidebar-lecturer/sidebar-lecturer.component.ts");
var SidebarLecturerModule = /** @class */ (function () {
    function SidebarLecturerModule() {
    }
    SidebarLecturerModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_lecturer_component_1.SidebarLecturerComponent],
            exports: [sidebar_lecturer_component_1.SidebarLecturerComponent]
        })
    ], SidebarLecturerModule);
    return SidebarLecturerModule;
}());
exports.SidebarLecturerModule = SidebarLecturerModule;


/***/ }),

/***/ "./src/app/layouts/sample/admin-layout.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/sample/admin-layout.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
__webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var perfect_scrollbar_1 = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNotification('top', 'right');
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof router_1.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps = new perfect_scrollbar_1.default(elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.prototype.showNotification = function (from, align) {
        var color = 'info';
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b>Admin Bashboard"
        }, {
            type: color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    AdminLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/admin-layout.component.html")).default,
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());
exports.AdminLayoutComponent = AdminLayoutComponent;


/***/ }),

/***/ "./src/app/layouts/sample/shared/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/sample/shared/footer/footer.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/shared/footer/footer.component.html")).default
        })
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/layouts/sample/shared/footer/footer.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/sample/shared/footer/footer.module.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var footer_component_1 = __webpack_require__(/*! ./footer.component */ "./src/app/layouts/sample/shared/footer/footer.component.ts");
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [footer_component_1.FooterComponent],
            exports: [footer_component_1.FooterComponent]
        })
    ], FooterModule);
    return FooterModule;
}());
exports.FooterModule = FooterModule;


/***/ }),

/***/ "./src/app/layouts/sample/shared/navbar/navbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/sample/shared/navbar/navbar.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var sidebar_component_1 = __webpack_require__(/*! ../../sidebar/sidebar.component */ "./src/app/layouts/sample/sidebar/sidebar.component.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var auth_service_1 = __webpack_require__(/*! app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, authService) {
        this.element = element;
        this.authService = authService;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: core_1.ElementRef },
        { type: auth_service_1.AuthService }
    ]; };
    NavbarComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'navbar-cmp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/shared/navbar/navbar.component.html")).default
        }),
        __metadata("design:paramtypes", [common_1.Location, core_1.ElementRef, auth_service_1.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/layouts/sample/shared/navbar/navbar.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/sample/shared/navbar/navbar.module.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var navbar_component_1 = __webpack_require__(/*! ./navbar.component */ "./src/app/layouts/sample/shared/navbar/navbar.component.ts");
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [navbar_component_1.NavbarComponent],
            exports: [navbar_component_1.NavbarComponent]
        })
    ], NavbarModule);
    return NavbarModule;
}());
exports.NavbarModule = NavbarModule;


/***/ }),

/***/ "./src/app/layouts/sample/sidebar/sidebar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/sample/sidebar/sidebar.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
exports.ROUTES = [
    { path: '/admin/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: '/admin/user', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    { path: '/admin/table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
    { path: '/admin/typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    { path: '/admin/icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    { path: '/admin/maps', title: 'Maps', icon: 'pe-7s-map-marker', class: '' },
    { path: '/admin/notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/sample/sidebar/sidebar.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/app/layouts/sample/sidebar/sidebar.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/sample/sidebar/sidebar.module.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var sidebar_component_1 = __webpack_require__(/*! ./sidebar.component */ "./src/app/layouts/sample/sidebar/sidebar.component.ts");
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_component_1.SidebarComponent],
            exports: [sidebar_component_1.SidebarComponent]
        })
    ], SidebarModule);
    return SidebarModule;
}());
exports.SidebarModule = SidebarModule;


/***/ }),

/***/ "./src/app/layouts/student-layout/sidebar-student/sidebar-student.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layouts/student-layout/sidebar-student/sidebar-student.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
exports.ROUTES = [
    { path: '/student/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
];
var SidebarStudentComponent = /** @class */ (function () {
    function SidebarStudentComponent() {
    }
    SidebarStudentComponent.prototype.ngOnInit = function () {
        console.log("student-side");
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
        console.log(this.menuItems);
    };
    SidebarStudentComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarStudentComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar-student',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/student-layout/sidebar-student/sidebar-student.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], SidebarStudentComponent);
    return SidebarStudentComponent;
}());
exports.SidebarStudentComponent = SidebarStudentComponent;


/***/ }),

/***/ "./src/app/layouts/student-layout/sidebar-student/sidebar-student.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/student-layout/sidebar-student/sidebar-student.module.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var sidebar_student_component_1 = __webpack_require__(/*! ./sidebar-student.component */ "./src/app/layouts/student-layout/sidebar-student/sidebar-student.component.ts");
var SidebarStudentModule = /** @class */ (function () {
    function SidebarStudentModule() {
    }
    SidebarStudentModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_student_component_1.SidebarStudentComponent],
            exports: [sidebar_student_component_1.SidebarStudentComponent]
        })
    ], SidebarStudentModule);
    return SidebarStudentModule;
}());
exports.SidebarStudentModule = SidebarStudentModule;


/***/ }),

/***/ "./src/app/layouts/student-layout/student-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/student-layout/student-layout.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
__webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var perfect_scrollbar_1 = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var StudentLayoutComponent = /** @class */ (function () {
    function StudentLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    StudentLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNotification('top', 'right');
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof router_1.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps = new perfect_scrollbar_1.default(elemSidebar);
        }
    };
    StudentLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    StudentLayoutComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    StudentLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps.update();
        }
    };
    StudentLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    StudentLayoutComponent.prototype.showNotification = function (from, align) {
        var color = 'success';
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b> Student Bashboard </b>"
        }, {
            type: color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    StudentLayoutComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    StudentLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-student-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./student-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/student-layout/student-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], StudentLayoutComponent);
    return StudentLayoutComponent;
}());
exports.StudentLayoutComponent = StudentLayoutComponent;


/***/ }),

/***/ "./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.component.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
exports.ROUTES = [
    { path: '/tech-officer/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
];
var SidebarTechofficerComponent = /** @class */ (function () {
    function SidebarTechofficerComponent() {
    }
    SidebarTechofficerComponent.prototype.ngOnInit = function () {
        console.log("student-side");
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
        console.log(this.menuItems);
    };
    SidebarTechofficerComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarTechofficerComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar-techofficer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar-techofficer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.component.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], SidebarTechofficerComponent);
    return SidebarTechofficerComponent;
}());
exports.SidebarTechofficerComponent = SidebarTechofficerComponent;


/***/ }),

/***/ "./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.module.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var sidebar_techofficer_component_1 = __webpack_require__(/*! ./sidebar-techofficer.component */ "./src/app/layouts/tech-officer-layout/sidebar-techofficer/sidebar-techofficer.component.ts");
var SidebarTechofficerModule = /** @class */ (function () {
    function SidebarTechofficerModule() {
    }
    SidebarTechofficerModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule, common_1.CommonModule],
            declarations: [sidebar_techofficer_component_1.SidebarTechofficerComponent],
            exports: [sidebar_techofficer_component_1.SidebarTechofficerComponent]
        })
    ], SidebarTechofficerModule);
    return SidebarTechofficerModule;
}());
exports.SidebarTechofficerModule = SidebarTechofficerModule;


/***/ }),

/***/ "./src/app/layouts/tech-officer-layout/tech-officer-layout.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layouts/tech-officer-layout/tech-officer-layout.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
__webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var perfect_scrollbar_1 = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var TechOfficerLayoutComponent = /** @class */ (function () {
    function TechOfficerLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    TechOfficerLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showNotification('top', 'right');
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof router_1.NavigationEnd) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps = new perfect_scrollbar_1.default(elemSidebar);
        }
    };
    TechOfficerLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    TechOfficerLayoutComponent.prototype.isMap = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    TechOfficerLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar_1.default(elemMainPanel);
            ps.update();
        }
    };
    TechOfficerLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    TechOfficerLayoutComponent.prototype.showNotification = function (from, align) {
        var color = 'success';
        $.notify({
            icon: "pe-7s-gift",
            message: "Welcome to <b> Student Bashboard </b>"
        }, {
            type: color,
            timer: 1000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    TechOfficerLayoutComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: router_1.Router }
    ]; };
    TechOfficerLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-tech-officer-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tech-officer-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/tech-officer-layout/tech-officer-layout.component.html")).default
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.Router])
    ], TechOfficerLayoutComponent);
    return TechOfficerLayoutComponent;
}());
exports.TechOfficerLayoutComponent = TechOfficerLayoutComponent;


/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-page {\n  width: 400px;\n  padding: 8% 0 0;\n  margin: auto;\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: rgb(255, 255, 255);\n  max-width: 400px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  padding-top: 20px;\n  text-align: center;\n  /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); */\n}\n.caption p{\n    color: rgb(88, 88, 88);\n    font-family: \"Roboto\", sans-serif; \n    font-size: 25px;\n    font-weight: 100;\n    padding-bottom: 10px; \n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #eeeeee;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 16px;\n}\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: rgb(2, 67, 121);\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover,.form button:active,.form button:focus {\n  background: rgb(14, 19, 94);\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #4CAF50;\n  text-decoration: none;\n}\n.form .register-form {\n  display: none;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.container .info {\n  margin: 50px auto;\n  text-align: center;\n}\n.container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\n.container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\n.container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\n.container .info span .fa {\n  color: #EF3B3A;\n}\nbody {\n  background: #5eac34; /* fallback for old browsers */\n  background: linear-gradient(to left, #76b852, #8DC26F);\n  font-family: \"Roboto\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;      \n}\n.logo{\n    padding: 20px;\n}\n.logo img{\n    \n    width: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdGQUFnRjtBQUNsRjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFFZix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsbUJBQW1CLEVBQUUsOEJBQThCO0VBSW5ELHNEQUFzRDtFQUN0RCxpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLGtDQUFrQztBQUNwQztBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogOCUgMCAwO1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxMDBweDtcbiAgcGFkZGluZzogNDVweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNCk7ICovXG59XG4uY2FwdGlvbiBwe1xuICAgIGNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7IFxuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyBcbn1cbi5mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mb3JtIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2IoMiwgNjcsIDEyMSk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtIGJ1dHRvbjpob3ZlciwuZm9ybSBidXR0b246YWN0aXZlLC5mb3JtIGJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYigxNCwgMTksIDk0KTtcbn1cbi5mb3JtIC5tZXNzYWdlIHtcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mb3JtIC5tZXNzYWdlIGEge1xuICBjb2xvcjogIzRDQUY1MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZvcm0gLnJlZ2lzdGVyLWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY29udGFpbmVyOmJlZm9yZSwgLmNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250YWluZXIgLmluZm8ge1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuaW5mbyBoMSB7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uY29udGFpbmVyIC5pbmZvIHNwYW4ge1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIGEge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhaW5lciAuaW5mbyBzcGFuIC5mYSB7XG4gIGNvbG9yOiAjRUYzQjNBO1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICM1ZWFjMzQ7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsICM3NmI4NTIsICM4REMyNkYpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyaWdodCwgIzc2Yjg1MiwgIzhEQzI2Rik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNzZiODUyLCAjOERDMjZGKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyAgICAgIFxufSBcbi5sb2dve1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4ubG9nbyBpbWd7XG4gICAgXG4gICAgd2lkdGg6IDkwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var auth_service_1 = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var urlResolve_1 = __webpack_require__(/*! ./utils/urlResolve */ "./src/app/pages/login/utils/urlResolve.ts");
var Login = /** @class */ (function () {
    function Login(formBuilder, route, router, authService) {
        // redirect to home if already logged in
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.isVaid = false;
        var user = this.authService.currentUserValue;
        // redirect to home if already logged in
        if (user) {
            console.log(urlResolve_1.urlResolver(user.role));
            this.router.navigate([
                urlResolve_1.urlResolver(user.role)
            ]);
        }
    }
    Login.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(Login.prototype, "formData", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    Login.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.isVaid = false;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.login(this.formData.username.value, this.formData.password.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this.loading = false;
            console.log("user data");
            _this.authService.refreshUserInfo();
            console.log(_this.authService.currentUserValue);
            _this.router.navigate([
                urlResolve_1.urlResolver(_this.authService.currentUserValue.role)
            ]);
        }, function (error) {
            _this.loading = false;
        });
    };
    Login.ctorParameters = function () { return [
        { type: forms_1.FormBuilder },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router },
        { type: auth_service_1.AuthService }
    ]; };
    Login = __decorate([
        core_1.Component({
            // selector: 'login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            auth_service_1.AuthService])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./src/app/pages/login/utils/urlResolve.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/login/utils/urlResolve.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = __webpack_require__(/*! app/auth/model/user/role */ "./src/app/auth/model/user/role.ts");
function urlResolver(userRole) {
    switch (userRole) {
        case role_1.Role.Admin:
            return 'admin';
            break;
        case role_1.Role.Student:
            return 'student';
            break;
        case role_1.Role.Lecturer:
            return 'lecturer';
            break;
        case role_1.Role.Hod:
            return 'hod';
            break;
        case role_1.Role.TechOfficer:
            return 'tech-officer';
            break;
        default:
            return '';
            break;
    }
}
exports.urlResolver = urlResolver;


/***/ }),

/***/ "./src/app/pages/page404/page404.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/page404/page404.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Oswald);\n\n\t\t\t\n\t\t\t.page_404_con {\n                position: relative;\n                background:rgb(230, 230, 230);\n                \n\t\t\t\ttop:10%;\n\t\t\t\tleft:0%;\n\t\t\t\tpadding: 100px;\n\t\t\t\theight:100%;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth:100%;\n\t\t\t\n\t\t\t}\n\n\t\t\t\n\t\t\t.i {\n                margin-top: -80px;\n                font-style: normal;\n                font-weight: 400;\n\t\t\t\tfont-size:200px;\n\t\t\t}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkRBQTJEOzs7R0FHeEQ7Z0JBQ2Esa0JBQWtCO2dCQUNsQiw2QkFBNkI7O0lBRXpDLE9BQU87SUFDUCxPQUFPO0lBQ1AsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTs7R0FFWDs7O0dBQ0E7Z0JBQ2EsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtJQUM1QixlQUFlO0dBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkKTtcblxuXHRcdFx0XG5cdFx0XHQucGFnZV80MDRfY29uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDpyZ2IoMjMwLCAyMzAsIDIzMCk7XG4gICAgICAgICAgICAgICAgXG5cdFx0XHRcdHRvcDoxMCU7XG5cdFx0XHRcdGxlZnQ6MCU7XG5cdFx0XHRcdHBhZGRpbmc6IDEwMHB4O1xuXHRcdFx0XHRoZWlnaHQ6MTAwJTtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0XG5cdFx0XHR9XG5cdFx0XHQuaSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTgwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdGZvbnQtc2l6ZToyMDBweDtcblx0XHRcdH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/page404/page404.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/page404/page404.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var Page404 = /** @class */ (function () {
    function Page404() {
    }
    Page404.prototype.ngOnInit = function () {
    };
    Page404 = __decorate([
        core_1.Component({
            selector: 'app-page404',
            template: __importDefault(__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page404/page404.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./page404.component.css */ "./src/app/pages/page404/page404.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], Page404);
    return Page404;
}());
exports.Page404 = Page404;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiUrl: 'http://localhost:8081'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!

 =========================================================
 * Light Bootstrap Dashboard Angular - v1.6.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-angular2
 * Copyright 2016 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kalana/Desktop/debs/frontend/src/main/resources/frontend/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /Users/kalana/Desktop/debs/frontend/src/main/resources/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
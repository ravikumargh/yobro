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
/* harmony import */ var _modules_home_container_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home/container/home/home.component */ "./src/app/modules/home/container/home/home.component.ts");
/* harmony import */ var _modules_signin_container_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/signin/container/signin/signin.component */ "./src/app/modules/signin/container/signin/signin.component.ts");
/* harmony import */ var _modules_register_container_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/register/container/register/register.component */ "./src/app/modules/register/container/register/register.component.ts");
/* harmony import */ var _modules_post_job_container_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/post-job/container/post-job/post-job.component */ "./src/app/modules/post-job/container/post-job/post-job.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _modules_home_container_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { title: 'Home' } },
    { path: 'signin', component: _modules_signin_container_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], data: { title: 'Signin' } },
    { path: 'register', component: _modules_register_container_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], data: { title: 'register' } },
    { path: 'postjob', component: _modules_post_job_container_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_5__["PostJobComponent"], data: { title: 'post job' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\r\n<header id=\"header\" class=\"clearfix\">\r\n  <app-header></app-header>\r\n</header>\r\n<!-- header -->\r\n<!-- <app-content></app-content> -->\r\n<router-outlet></router-outlet>\r\n<!-- footer -->\r\n<footer id=\"footer\" class=\"clearfix\">\r\n  <app-footer></app-footer>\r\n</footer>\r\n<!-- footer -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'yobro';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _app_modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/modules */ "./src/app/modules/index.ts");
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
                _app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_11__["UiModule"],
                _app_modules__WEBPACK_IMPORTED_MODULE_12__["HomeModule"], _app_modules__WEBPACK_IMPORTED_MODULE_12__["SigninModule"], _app_modules__WEBPACK_IMPORTED_MODULE_12__["RegisterModule"], _app_modules__WEBPACK_IMPORTED_MODULE_12__["PostJobModule"],
                /**
                 * StoreModule.forRoot is imported once in the root module, accepting a reducer
                 * function or object map of reducer functions. If passed an object of
                 * reducers, combineReducers will be run creating your application
                 * meta-reducer. This returns all providers for an @ngrx/store
                 * based application.
                 */
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_app_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], { metaReducers: _app_reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"] }),
                /**
                 * @ngrx/router-store keeps router state up-to-date in the store.
                 */
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["StoreRouterConnectingModule"].forRoot({
                    /*
                      They stateKey defines the name of the state used by the router-store reducer.
                      This matches the key defined in the map of reducers
                    */
                    stateKey: 'router',
                }),
                /**
                 * Store devtools instrument the store retaining past versions of state
                 * and recalculating new states. This enables powerful time-travel
                 * debugging.
                 *
                 * To use the debugger, install the Redux Devtools extension for either
                 * Chrome or Firefox
                 *
                 * See: https://github.com/zalmoxisus/redux-devtools-extension
                 */
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                    name: 'NgRx YoBro DevTools',
                    logOnly: _env_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production,
                }),
                /**
                 * EffectsModule.forRoot() is imported once in the root module and
                 * sets up the effects class to be initialized immediately when the
                 * application starts.
                 *
                 * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
                 */
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([]),
            ],
            providers: [],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/home/components/banner/banner.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/home/components/banner/banner.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner-job\">\n  <div class=\"banner-overlay\"></div>\n  <div class=\"container text-center\">\n    <h1 class=\"title\">The Easiest Way to Get Your New Job</h1>\n    <h3>We offer 12000 jobs vacation right now</h3>\n    <div class=\"banner-form\">\n      <form action=\"#\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Type your key word\">\n        <div class=\"dropdown category-dropdown\">\n          <a data-toggle=\"dropdown\" href=\"#\"><span class=\"change-text\">Job\n              Location</span> <i class=\"fa fa-angle-down\"></i></a>\n          <ul class=\"dropdown-menu category-change\">\n            <li><a href=\"#\">Location 1</a></li>\n            <li><a href=\"#\">Location 2</a></li>\n            <li><a href=\"#\">Location 3</a></li>\n          </ul>\n        </div><!-- category-change -->\n        <button type=\"submit\" class=\"btn btn-primary\" value=\"Search\">Search</button>\n      </form>\n    </div><!-- banner-form -->\n\n    <ul class=\"banner-socail list-inline\">\n      <li><a href=\"#\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n      <li><a href=\"#\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n      <li><a href=\"#\" title=\"Google Plus\"><i class=\"fa fa-google-plus\"></i></a></li>\n      <li><a href=\"#\" title=\"Youtube\"><i class=\"fa fa-youtube\"></i></a></li>\n    </ul><!-- banner-socail -->\n  </div><!-- container -->\n</div><!-- banner-section -->\n"

/***/ }),

/***/ "./src/app/modules/home/components/banner/banner.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/home/components/banner/banner.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/home/components/banner/banner.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/home/components/banner/banner.component.ts ***!
  \********************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
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

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/modules/home/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.scss */ "./src/app/modules/home/components/banner/banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/category-items/category-items.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/category-items/category-items.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section category-items job-category-items  text-center\">\n  <ul class=\"category-list\">\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/1.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Accounting/Finance</span>\n        <span class=\"category-quantity\">(1298)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/2.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Education/Training</span>\n        <span class=\"category-quantity\">(76212)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/3.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Engineer/Architects</span>\n        <span class=\"category-quantity\">(212)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/4.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Garments/Textile</span>\n        <span class=\"category-quantity\">(972)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/5.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">HR/Org. Development</span>\n        <span class=\"category-quantity\">(1298)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/6.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Design/Creative</span>\n        <span class=\"category-quantity\">(76212)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/7.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Research/Consultancy</span>\n        <span class=\"category-quantity\">(1298)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/8.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Medical/Pharma</span>\n        <span class=\"category-quantity\">(76212)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/9.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Music &amp; Arts</span>\n        <span class=\"category-quantity\">(212)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/10.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Marketing/Sales</span>\n        <span class=\"category-quantity\">(1298)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/11.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Production/Operation</span>\n        <span class=\"category-quantity\">(124)</span>\n      </a>\n    </li><!-- category-item -->\n\n    <li class=\"category-item\">\n      <a href=\"job-list.html\">\n        <div class=\"category-icon\"><img src=\"./assets/images/icons/12.png\" alt=\"images\" class=\"img-responsive\"></div>\n        <span class=\"category-title\">Miscellaneous</span>\n        <span class=\"category-quantity\">(972)</span>\n      </a>\n    </li><!-- category-item -->\n  </ul>\n</div><!-- category ad -->\n"

/***/ }),

/***/ "./src/app/modules/home/components/category-items/category-items.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/category-items/category-items.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2NhdGVnb3J5LWl0ZW1zL2NhdGVnb3J5LWl0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/home/components/category-items/category-items.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/category-items/category-items.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoryItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemsComponent", function() { return CategoryItemsComponent; });
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

var CategoryItemsComponent = /** @class */ (function () {
    function CategoryItemsComponent() {
    }
    CategoryItemsComponent.prototype.ngOnInit = function () {
    };
    CategoryItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-items',
            template: __webpack_require__(/*! ./category-items.component.html */ "./src/app/modules/home/components/category-items/category-items.component.html"),
            styles: [__webpack_require__(/*! ./category-items.component.scss */ "./src/app/modules/home/components/category-items/category-items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoryItemsComponent);
    return CategoryItemsComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/downloads/downloads.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/downloads/downloads.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- download -->\n<section id=\"download\" class=\"clearfix parallax-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 text-center\">\n        <h2>Download on App Store</h2>\n      </div>\n    </div><!-- row -->\n\n    <!-- row -->\n    <div class=\"row\">\n      <!-- download-app -->\n      <div class=\"col-sm-4\">\n        <a href=\"#\" class=\"download-app\">\n          <img src=\"./assets/images/icons/16.png\" alt=\"Image\" class=\"img-responsive\">\n          <span class=\"pull-left\">\n            <span>available on</span>\n            <strong>Google Play</strong>\n          </span>\n        </a>\n      </div><!-- download-app -->\n\n      <!-- download-app -->\n      <div class=\"col-sm-4\">\n        <a href=\"#\" class=\"download-app\">\n          <img src=\"./assets/images/icons/17.png\" alt=\"Image\" class=\"img-responsive\">\n          <span class=\"pull-left\">\n            <span>available on</span>\n            <strong>App Store</strong>\n          </span>\n        </a>\n      </div><!-- download-app -->\n\n      <!-- download-app -->\n      <div class=\"col-sm-4\">\n        <a href=\"#\" class=\"download-app\">\n          <img src=\"./assets/images/icons/18.png\" alt=\"Image\" class=\"img-responsive\">\n          <span class=\"pull-left\">\n            <span>available on</span>\n            <strong>Windows Store</strong>\n          </span>\n        </a>\n      </div><!-- download-app -->\n    </div><!-- row -->\n  </div><!-- contaioner -->\n</section><!-- download -->\n"

/***/ }),

/***/ "./src/app/modules/home/components/downloads/downloads.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/downloads/downloads.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2Rvd25sb2Fkcy9kb3dubG9hZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/home/components/downloads/downloads.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/downloads/downloads.component.ts ***!
  \**************************************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
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

var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent() {
    }
    DownloadsComponent.prototype.ngOnInit = function () {
    };
    DownloadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloads',
            template: __webpack_require__(/*! ./downloads.component.html */ "./src/app/modules/home/components/downloads/downloads.component.html"),
            styles: [__webpack_require__(/*! ./downloads.component.scss */ "./src/app/modules/home/components/downloads/downloads.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/latest-jobs/latest-jobs.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/latest-jobs/latest-jobs.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\t\t<div class=\"section latest-jobs-ads\">\n          <div class=\"section-title tab-manu\">\n            <h4>Latest Jobs</h4>\n             <!-- Nav tabs -->      \n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n              <li role=\"presentation\"><a href=\"#hot-jobs\" data-toggle=\"tab\">Hot Jobs</a></li>\n              <li role=\"presentation\"><a href=\"#recent-jobs\" data-toggle=\"tab\">Recent Jobs</a></li>\n              <li role=\"presentation\" class=\"active\"><a href=\"#popular-jobs\" data-toggle=\"tab\">Popular Jobs</a></li>\n            </ul>\n          </div>\n  \n          <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane fade in\" id=\"hot-jobs\">\n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/3.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">CTO</a> @ <a href=\"#\">Volja Events &amp; Entertainment</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n  \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/1.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Project Manager</a> @ <a href=\"#\">Dominos Pizza</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n            \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/2.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Graphics Designer</a> @ <a href=\"#\">AOK Security</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n  \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/4.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Human Resource Manager</a> @ <a href=\"#\">Dropbox Inc</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\n            </div><!-- tab-pane -->\n  \n            <div role=\"tabpanel\" class=\"tab-pane fade in\" id=\"recent-jobs\">\n            \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/2.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Graphics Designer</a> @ <a href=\"#\">AOK Security</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n  \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/1.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Project Manager</a> @ <a href=\"#\">Dominos Pizza</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n  \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/4.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Human Resource Manager</a> @ <a href=\"#\">Dropbox Inc</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\t\t\t\t\t\n            \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/3.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">CTO</a> @ <a href=\"#\">Volja Events &amp; Entertainment</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n            </div><!-- tab-pane -->\n  \n            <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"popular-jobs\">\n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/1.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Project Manager</a> @ <a href=\"#\">Dominos Pizza</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n            \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/2.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Graphics Designer</a> @ <a href=\"#\">AOK Security</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n            \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/3.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">CTO</a> @ <a href=\"#\">Volja Events &amp; Entertainment</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\t\n  \n              <div class=\"job-ad-item\">\n                <div class=\"item-info\">\n                  <div class=\"item-image-box\">\n                    <div class=\"item-image\">\n                      <a href=\"job-details.html\"><img src=\"./assets/images/job/4.png\" alt=\"Image\" class=\"img-responsive\"></a>\n                    </div><!-- item-image -->\n                  </div>\n  \n                  <div class=\"ad-info\">\n                    <span><a href=\"job-details.html\" class=\"title\">Human Resource Manager</a> @ <a href=\"#\">Dropbox Inc</a></span>\n                    <div class=\"ad-meta\">\n                      <ul>\n                        <li><a href=\"#\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>San Francisco, CA, US </a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>Full Time</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-money\" aria-hidden=\"true\"></i>$25,000 - $35,000</a></li>\n                        <li><a href=\"#\"><i class=\"fa fa-tags\" aria-hidden=\"true\"></i>HR/Org. Development</a></li>\n                      </ul>\n                    </div><!-- ad-meta -->\t\t\t\t\t\t\t\t\t\n                  </div><!-- ad-info -->\n                  <div class=\"button\">\n                    <a href=\"#\" class=\"btn btn-primary\">Apply Now</a>\n                  </div>\n                </div><!-- item-info -->\n              </div><!-- ad-item -->\n            </div><!-- tab-pane -->\n          </div><!-- tab-content -->\n        </div><!-- trending ads -->\t\t\n  "

/***/ }),

/***/ "./src/app/modules/home/components/latest-jobs/latest-jobs.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/home/components/latest-jobs/latest-jobs.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2xhdGVzdC1qb2JzL2xhdGVzdC1qb2JzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/home/components/latest-jobs/latest-jobs.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/components/latest-jobs/latest-jobs.component.ts ***!
  \******************************************************************************/
/*! exports provided: LatestJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestJobsComponent", function() { return LatestJobsComponent; });
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

var LatestJobsComponent = /** @class */ (function () {
    function LatestJobsComponent() {
    }
    LatestJobsComponent.prototype.ngOnInit = function () {
    };
    LatestJobsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-latest-jobs',
            template: __webpack_require__(/*! ./latest-jobs.component.html */ "./src/app/modules/home/components/latest-jobs/latest-jobs.component.html"),
            styles: [__webpack_require__(/*! ./latest-jobs.component.scss */ "./src/app/modules/home/components/latest-jobs/latest-jobs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LatestJobsComponent);
    return LatestJobsComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/total-records/total-records.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/total-records/total-records.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section cta cta-two text-center\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"single-cta\">\n          <div class=\"cta-icon icon-jobs\">\n            <img src=\"./assets/images/job/31.png\" alt=\"Icon\" class=\"img-responsive\">\n          </div><!-- cta-icon -->\n          <h3>3,412</h3>\n          <h4>Live Jobs</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n        </div>\n      </div><!-- single-cta -->\n\n      <div class=\"col-sm-4\">\n        <div class=\"single-cta\">\n          <!-- cta-icon -->\n          <div class=\"cta-icon icon-company\">\n            <img src=\"./assets/images/job/32.png\" alt=\"Icon\" class=\"img-responsive\">\n          </div><!-- cta-icon -->\n          <h3>12,043</h3>\n          <h4>Total Company</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n        </div>\n      </div><!-- single-cta -->\n\n      <div class=\"col-sm-4\">\n        <div class=\"single-cta\">\n          <div class=\"cta-icon icon-candidate\">\n            <img src=\"./assets/images/job/33.png\" alt=\"Icon\" class=\"img-responsive\">\n          </div><!-- cta-icon -->\n          <h3>5,798,298</h3>\n          <h4>Total Candidate</h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n        </div>\n      </div><!-- single-cta -->\n    </div><!-- row -->\n  </div><!-- cta -->\t\t"

/***/ }),

/***/ "./src/app/modules/home/components/total-records/total-records.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/home/components/total-records/total-records.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL3RvdGFsLXJlY29yZHMvdG90YWwtcmVjb3Jkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/home/components/total-records/total-records.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/total-records/total-records.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TotalRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalRecordsComponent", function() { return TotalRecordsComponent; });
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

var TotalRecordsComponent = /** @class */ (function () {
    function TotalRecordsComponent() {
    }
    TotalRecordsComponent.prototype.ngOnInit = function () {
    };
    TotalRecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-total-records',
            template: __webpack_require__(/*! ./total-records.component.html */ "./src/app/modules/home/components/total-records/total-records.component.html"),
            styles: [__webpack_require__(/*! ./total-records.component.scss */ "./src/app/modules/home/components/total-records/total-records.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TotalRecordsComponent);
    return TotalRecordsComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/components/workshop-traning/workshop-traning.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/home/components/workshop-traning/workshop-traning.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section workshop-traning\">\n    <div class=\"section-title\">\n      <h4>Workshop Traning</h4>\n      <a href=\"#\" class=\"btn btn-primary\">See all</a>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"workshop\">\n          <img src=\"./assets/images/job/5.png\" alt=\"Image\" class=\"img-responsive\">\n          <h3><a href=\"#\">Business Process Management Training</a></h3>\n          <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>\n          <div class=\"workshop-price\">\n            <h5>Course instructor: Kim Jon ley</h5>\n            <h5>Course Amount: $200</h5>\n          </div>\n          <div class=\"ad-meta\">\n            <div class=\"meta-content\">\n              <span class=\"dated\"><a href=\"#\">7 Jan 10:10 pm </a></span>\n            </div>\n            <div class=\"user-option pull-right\">\n              <a href=\"#\"><i class=\"fa fa-map-marker\"></i> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"workshop\">\n          <img src=\"./assets/images/job/6.png\" alt=\"Image\" class=\"img-responsive\">\n          <h3><a href=\"#\">Employee Motivation and Engagement</a></h3>\n          <h4>Course Duration: 3 Month ( Sat, Mon, Fri)</h4>\n          <div class=\"workshop-price\">\n            <h5>Course instructor: Kim Jon ley</h5>\n            <h5>Course Amount: $200</h5>\n          </div>\n          <div class=\"ad-meta\">\n            <div class=\"meta-content\">\n              <span class=\"dated\"><a href=\"#\">7 Jan 10:10 pm </a></span>\n            </div>\n            <div class=\"user-option pull-right\">\n              <a href=\"#\"><i class=\"fa fa-map-marker\"></i> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div><!-- workshop-traning -->"

/***/ }),

/***/ "./src/app/modules/home/components/workshop-traning/workshop-traning.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/home/components/workshop-traning/workshop-traning.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL3dvcmtzaG9wLXRyYW5pbmcvd29ya3Nob3AtdHJhbmluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/home/components/workshop-traning/workshop-traning.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/home/components/workshop-traning/workshop-traning.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WorkshopTraningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopTraningComponent", function() { return WorkshopTraningComponent; });
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

var WorkshopTraningComponent = /** @class */ (function () {
    function WorkshopTraningComponent() {
    }
    WorkshopTraningComponent.prototype.ngOnInit = function () {
    };
    WorkshopTraningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workshop-traning',
            template: __webpack_require__(/*! ./workshop-traning.component.html */ "./src/app/modules/home/components/workshop-traning/workshop-traning.component.html"),
            styles: [__webpack_require__(/*! ./workshop-traning.component.scss */ "./src/app/modules/home/components/workshop-traning/workshop-traning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkshopTraningComponent);
    return WorkshopTraningComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/container/home/home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/container/home/home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<div class=\"page\">\n  <div class=\"container\">\n    <app-category-items></app-category-items>\n    <app-latest-jobs></app-latest-jobs>\n    <app-workshop-traning></app-workshop-traning>\n    <app-total-records></app-total-records>\n  </div>\n</div>\n<app-downloads></app-downloads>\n"

/***/ }),

/***/ "./src/app/modules/home/container/home/home.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home/container/home/home.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb250YWluZXIvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/home/container/home/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home/container/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/container/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/container/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/home.reducer */ "./src/app/modules/home/store/reducers/home.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_home_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/effects/home.effects */ "./src/app/modules/home/store/effects/home.effects.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/modules/home/components/banner/banner.component.ts");
/* harmony import */ var _container_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/home/home.component */ "./src/app/modules/home/container/home/home.component.ts");
/* harmony import */ var _components_category_items_category_items_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category-items/category-items.component */ "./src/app/modules/home/components/category-items/category-items.component.ts");
/* harmony import */ var _components_latest_jobs_latest_jobs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/latest-jobs/latest-jobs.component */ "./src/app/modules/home/components/latest-jobs/latest-jobs.component.ts");
/* harmony import */ var _components_workshop_traning_workshop_traning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/workshop-traning/workshop-traning.component */ "./src/app/modules/home/components/workshop-traning/workshop-traning.component.ts");
/* harmony import */ var _components_total_records_total_records_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/total-records/total-records.component */ "./src/app/modules/home/components/total-records/total-records.component.ts");
/* harmony import */ var _components_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/downloads/downloads.component */ "./src/app/modules/home/components/downloads/downloads.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _container_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_category_items_category_items_component__WEBPACK_IMPORTED_MODULE_8__["CategoryItemsComponent"], _components_latest_jobs_latest_jobs_component__WEBPACK_IMPORTED_MODULE_9__["LatestJobsComponent"], _components_workshop_traning_workshop_traning_component__WEBPACK_IMPORTED_MODULE_10__["WorkshopTraningComponent"], _components_total_records_total_records_component__WEBPACK_IMPORTED_MODULE_11__["TotalRecordsComponent"], _components_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_12__["DownloadsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('home', _store_reducers_home_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_home_effects__WEBPACK_IMPORTED_MODULE_5__["HomeEffects"]])
            ],
            exports: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _container_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/store/actions/home.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/home/store/actions/home.actions.ts ***!
  \************************************************************/
/*! exports provided: HomeActionTypes, LoadHomes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeActionTypes", function() { return HomeActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadHomes", function() { return LoadHomes; });
var HomeActionTypes;
(function (HomeActionTypes) {
    HomeActionTypes["LoadHomes"] = "[Home] Load Homes";
})(HomeActionTypes || (HomeActionTypes = {}));
var LoadHomes = /** @class */ (function () {
    function LoadHomes() {
        this.type = HomeActionTypes.LoadHomes;
    }
    return LoadHomes;
}());



/***/ }),

/***/ "./src/app/modules/home/store/effects/home.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/home/store/effects/home.effects.ts ***!
  \************************************************************/
/*! exports provided: HomeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEffects", function() { return HomeEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_home_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/home.actions */ "./src/app/modules/home/store/actions/home.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeEffects = /** @class */ (function () {
    function HomeEffects(actions$) {
        this.actions$ = actions$;
        this.loadFoos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_home_actions__WEBPACK_IMPORTED_MODULE_2__["HomeActionTypes"].LoadHomes));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], HomeEffects.prototype, "loadFoos$", void 0);
    HomeEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], HomeEffects);
    return HomeEffects;
}());



/***/ }),

/***/ "./src/app/modules/home/store/reducers/home.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/store/reducers/home.reducer.ts ***!
  \*************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_home_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/home.actions */ "./src/app/modules/home/store/actions/home.actions.ts");

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_home_actions__WEBPACK_IMPORTED_MODULE_0__["HomeActionTypes"].LoadHomes:
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/modules/index.ts":
/*!**********************************!*\
  !*** ./src/app/modules/index.ts ***!
  \**********************************/
/*! exports provided: HomeModule, SigninModule, RegisterModule, PostJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return _home_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"]; });

/* harmony import */ var _signin_signin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.module */ "./src/app/modules/signin/signin.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return _signin_signin_module__WEBPACK_IMPORTED_MODULE_1__["SigninModule"]; });

/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.module */ "./src/app/modules/register/register.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return _register_register_module__WEBPACK_IMPORTED_MODULE_2__["RegisterModule"]; });

/* harmony import */ var _post_job_post_job_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-job/post-job.module */ "./src/app/modules/post-job/post-job.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostJobModule", function() { return _post_job_post_job_module__WEBPACK_IMPORTED_MODULE_3__["PostJobModule"]; });







/***/ }),

/***/ "./src/app/modules/post-job/container/post-job/post-job.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/post-job/container/post-job/post-job.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- signin-page -->\n<section class=\"clearfix job-bg user-page\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <!-- user-login -->\n      <div class=\"container-center col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n        <div class=\"user-account\">\n          <h2>Post Job</h2>\n           \n\n           \n        </div>\n         \n      </div><!-- user-login -->\n    </div><!-- row -->\n  </div><!-- container -->\n</section><!-- signin-page -->\n"

/***/ }),

/***/ "./src/app/modules/post-job/container/post-job/post-job.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/post-job/container/post-job/post-job.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcG9zdC1qb2IvY29udGFpbmVyL3Bvc3Qtam9iL3Bvc3Qtam9iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/post-job/container/post-job/post-job.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/post-job/container/post-job/post-job.component.ts ***!
  \***************************************************************************/
/*! exports provided: PostJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobComponent", function() { return PostJobComponent; });
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

var PostJobComponent = /** @class */ (function () {
    function PostJobComponent() {
    }
    PostJobComponent.prototype.ngOnInit = function () {
    };
    PostJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-job',
            template: __webpack_require__(/*! ./post-job.component.html */ "./src/app/modules/post-job/container/post-job/post-job.component.html"),
            styles: [__webpack_require__(/*! ./post-job.component.scss */ "./src/app/modules/post-job/container/post-job/post-job.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostJobComponent);
    return PostJobComponent;
}());



/***/ }),

/***/ "./src/app/modules/post-job/post-job.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/post-job/post-job.module.ts ***!
  \*****************************************************/
/*! exports provided: PostJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobModule", function() { return PostJobModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_post_job_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/post-job.reducer */ "./src/app/modules/post-job/store/reducers/post-job.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_post_job_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/effects/post-job.effects */ "./src/app/modules/post-job/store/effects/post-job.effects.ts");
/* harmony import */ var _container_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/post-job/post-job.component */ "./src/app/modules/post-job/container/post-job/post-job.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PostJobModule = /** @class */ (function () {
    function PostJobModule() {
    }
    PostJobModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_container_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_6__["PostJobComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('postJob', _store_reducers_post_job_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_post_job_effects__WEBPACK_IMPORTED_MODULE_5__["PostJobEffects"]])
            ]
        })
    ], PostJobModule);
    return PostJobModule;
}());



/***/ }),

/***/ "./src/app/modules/post-job/store/actions/post-job.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/post-job/store/actions/post-job.actions.ts ***!
  \********************************************************************/
/*! exports provided: PostJobActionTypes, LoadPostJobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobActionTypes", function() { return PostJobActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadPostJobs", function() { return LoadPostJobs; });
var PostJobActionTypes;
(function (PostJobActionTypes) {
    PostJobActionTypes["LoadPostJobs"] = "[PostJob] Load PostJobs";
})(PostJobActionTypes || (PostJobActionTypes = {}));
var LoadPostJobs = /** @class */ (function () {
    function LoadPostJobs() {
        this.type = PostJobActionTypes.LoadPostJobs;
    }
    return LoadPostJobs;
}());



/***/ }),

/***/ "./src/app/modules/post-job/store/effects/post-job.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/post-job/store/effects/post-job.effects.ts ***!
  \********************************************************************/
/*! exports provided: PostJobEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobEffects", function() { return PostJobEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_post_job_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/post-job.actions */ "./src/app/modules/post-job/store/actions/post-job.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostJobEffects = /** @class */ (function () {
    function PostJobEffects(actions$) {
        this.actions$ = actions$;
        this.loadFoos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_post_job_actions__WEBPACK_IMPORTED_MODULE_2__["PostJobActionTypes"].LoadPostJobs));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PostJobEffects.prototype, "loadFoos$", void 0);
    PostJobEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], PostJobEffects);
    return PostJobEffects;
}());



/***/ }),

/***/ "./src/app/modules/post-job/store/reducers/post-job.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/post-job/store/reducers/post-job.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_post_job_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/post-job.actions */ "./src/app/modules/post-job/store/actions/post-job.actions.ts");

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_post_job_actions__WEBPACK_IMPORTED_MODULE_0__["PostJobActionTypes"].LoadPostJobs:
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/modules/register/container/register/register.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/register/container/register/register.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"job-bg user-page\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <!-- user-login -->\n      <div class=\"container-center col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n        <div class=\"user-account job-user-account\">\n          <h2>Create An Account</h2>\n          <ul class=\"nav nav-tabs text-center\" role=\"tablist\">\n            <li role=\"presentation\" class=\"active\"><a href=\"#find-job\" aria-controls=\"find-job\" role=\"tab\" data-toggle=\"tab\">Find\n                A Job</a></li>\n            <li role=\"presentation\"><a href=\"#post-job\" aria-controls=\"post-job\" role=\"tab\" data-toggle=\"tab\">Post A\n                Job</a></li>\n          </ul>\n\n          <div class=\"tab-content\">\n            <div role=\"tabpanel\" class=\"tab-pane active\" id=\"find-job\">\n              <form action=\"#\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email Id\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\">\n                </div>\n                <!-- select -->\n                <select class=\"form-control\">\n                  <option value=\"#\">Select City</option>\n                  <option value=\"#\">London UK</option>\n                  <option value=\"#\">Newyork, USA</option>\n                  <option value=\"#\">Seoul, Korea</option>\n                  <option value=\"#\">Beijing, China</option>\n                </select><!-- select -->\n\n                <div class=\"checkbox\">\n                  <label class=\"pull-left checked\" for=\"signing\"><input type=\"checkbox\" name=\"signing\" id=\"signing\"> By\n                    signing up for an account you agree to our Terms and Conditions </label>\n                </div><!-- checkbox -->\n                <button type=\"submit\" class=\"btn\">Registration</button>\n              </form>\n            </div>\n            <div role=\"tabpanel\" class=\"tab-pane\" id=\"post-job\">\n              <form action=\"#\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Employer Name\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email Id\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Contact Number\">\n                </div>\n                <div class=\"checkbox\">\n                  <label class=\"pull-left checked\" for=\"signing-2\"><input type=\"checkbox\" name=\"signing-2\" id=\"signing-2\">By\n                    signing up for an account you agree to our Terms and Conditions</label>\n                </div><!-- checkbox -->\n                <button type=\"submit\" class=\"btn\">Registration</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div><!-- user-login -->\n    </div><!-- row -->\n  </div><!-- container -->\n</section><!-- signup-page -->\n"

/***/ }),

/***/ "./src/app/modules/register/container/register/register.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/register/container/register/register.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVnaXN0ZXIvY29udGFpbmVyL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/register/container/register/register.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/register/container/register/register.component.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/register/container/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/modules/register/container/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/register/register.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/register/register.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_register_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/register.reducer */ "./src/app/modules/register/store/reducers/register.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_register_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/effects/register.effects */ "./src/app/modules/register/store/effects/register.effects.ts");
/* harmony import */ var _container_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/register/register.component */ "./src/app/modules/register/container/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_container_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('register', _store_reducers_register_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_register_effects__WEBPACK_IMPORTED_MODULE_5__["RegisterEffects"]])
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/modules/register/store/actions/register.actions.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/register/store/actions/register.actions.ts ***!
  \********************************************************************/
/*! exports provided: RegisterActionTypes, LoadRegisters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterActionTypes", function() { return RegisterActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadRegisters", function() { return LoadRegisters; });
var RegisterActionTypes;
(function (RegisterActionTypes) {
    RegisterActionTypes["LoadRegisters"] = "[Register] Load Registers";
})(RegisterActionTypes || (RegisterActionTypes = {}));
var LoadRegisters = /** @class */ (function () {
    function LoadRegisters() {
        this.type = RegisterActionTypes.LoadRegisters;
    }
    return LoadRegisters;
}());



/***/ }),

/***/ "./src/app/modules/register/store/effects/register.effects.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/register/store/effects/register.effects.ts ***!
  \********************************************************************/
/*! exports provided: RegisterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEffects", function() { return RegisterEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/register.actions */ "./src/app/modules/register/store/actions/register.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterEffects = /** @class */ (function () {
    function RegisterEffects(actions$) {
        this.actions$ = actions$;
        this.loadFoos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_2__["RegisterActionTypes"].LoadRegisters));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], RegisterEffects.prototype, "loadFoos$", void 0);
    RegisterEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], RegisterEffects);
    return RegisterEffects;
}());



/***/ }),

/***/ "./src/app/modules/register/store/reducers/register.reducer.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/register/store/reducers/register.reducer.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/register.actions */ "./src/app/modules/register/store/actions/register.actions.ts");

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_register_actions__WEBPACK_IMPORTED_MODULE_0__["RegisterActionTypes"].LoadRegisters:
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/modules/signin/container/signin/signin.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/signin/container/signin/signin.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- signin-page -->\n<section class=\"clearfix job-bg user-page\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <!-- user-login -->\n      <div class=\"container-center col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3\">\n        <div class=\"user-account\">\n          <h2>User Login</h2>\n          <!-- form -->\n          <form action=\"#\">\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n            <div class=\"form-group\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n            <button type=\"submit\" href=\"#\" class=\"btn\">Login</button>\n          </form><!-- form -->\n\n          <!-- forgot-password -->\n          <div class=\"user-option\">\n            <div class=\"checkbox pull-left\">\n              <label for=\"logged\"><input type=\"checkbox\" name=\"logged\" id=\"logged\"> Keep me logged in </label>\n            </div>\n            <div class=\"pull-right forgot-password\">\n              <a href=\"#\">Forgot password</a>\n            </div>\n          </div><!-- forgot-password -->\n        </div>\n        <a href=\"#\" class=\"btn-primary\">Create a New Account</a>\n      </div><!-- user-login -->\n    </div><!-- row -->\n  </div><!-- container -->\n</section><!-- signin-page -->\n"

/***/ }),

/***/ "./src/app/modules/signin/container/signin/signin.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/signin/container/signin/signin.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lnbmluL2NvbnRhaW5lci9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/signin/container/signin/signin.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/signin/container/signin/signin.component.ts ***!
  \*********************************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
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

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/modules/signin/container/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/modules/signin/container/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/modules/signin/signin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signin/signin.module.ts ***!
  \*************************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_signin_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/reducers/signin.reducer */ "./src/app/modules/signin/store/reducers/signin.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_effects_signin_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/effects/signin.effects */ "./src/app/modules/signin/store/effects/signin.effects.ts");
/* harmony import */ var _container_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/signin/signin.component */ "./src/app/modules/signin/container/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_container_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('signin', _store_reducers_signin_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_signin_effects__WEBPACK_IMPORTED_MODULE_5__["SigninEffects"]])
            ]
        })
    ], SigninModule);
    return SigninModule;
}());



/***/ }),

/***/ "./src/app/modules/signin/store/actions/signin.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/signin/store/actions/signin.actions.ts ***!
  \****************************************************************/
/*! exports provided: SigninActionTypes, LoadSignins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninActionTypes", function() { return SigninActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSignins", function() { return LoadSignins; });
var SigninActionTypes;
(function (SigninActionTypes) {
    SigninActionTypes["LoadSignins"] = "[Signin] Load Signins";
})(SigninActionTypes || (SigninActionTypes = {}));
var LoadSignins = /** @class */ (function () {
    function LoadSignins() {
        this.type = SigninActionTypes.LoadSignins;
    }
    return LoadSignins;
}());



/***/ }),

/***/ "./src/app/modules/signin/store/effects/signin.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/signin/store/effects/signin.effects.ts ***!
  \****************************************************************/
/*! exports provided: SigninEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninEffects", function() { return SigninEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_signin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/signin.actions */ "./src/app/modules/signin/store/actions/signin.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninEffects = /** @class */ (function () {
    function SigninEffects(actions$) {
        this.actions$ = actions$;
        this.loadFoos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_signin_actions__WEBPACK_IMPORTED_MODULE_2__["SigninActionTypes"].LoadSignins));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], SigninEffects.prototype, "loadFoos$", void 0);
    SigninEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], SigninEffects);
    return SigninEffects;
}());



/***/ }),

/***/ "./src/app/modules/signin/store/reducers/signin.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/signin/store/reducers/signin.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_signin_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/signin.actions */ "./src/app/modules/signin/store/actions/signin.actions.ts");

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_signin_actions__WEBPACK_IMPORTED_MODULE_0__["SigninActionTypes"].LoadSignins:
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, logger, metaReducers, getLayoutState, getShowSidenav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayoutState", function() { return getLayoutState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowSidenav", function() { return getShowSidenav; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_ui_layout_store_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/ui/layout/store/reducers/layout.reducer */ "./src/app/ui/layout/store/reducers/layout.reducer.ts");



/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
var reducers = {
    layout: _app_ui_layout_store_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__["routerReducer"],
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production
    ? [logger, ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_3__["storeFreeze"]]
    : [];
/**
 * Layout Reducers
 */
var getLayoutState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('layout');
var getShowSidenav = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLayoutState, _app_ui_layout_store_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_4__["getShowSidenav"]);


/***/ }),

/***/ "./src/app/ui/layout/components/content/content.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui/layout/components/content/content.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\n"

/***/ }),

/***/ "./src/app/ui/layout/components/content/content.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui/layout/components/content/content.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/layout/components/content/content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/layout/components/content/content.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
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

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/ui/layout/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/ui/layout/components/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/components/footer/footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui/layout/components/footer/footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n <!-- footer-top -->\n <section class=\"footer-top clearfix\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <!-- footer-widget -->\n        <div class=\"col-sm-3\">\n          <div class=\"footer-widget\">\n            <h3>Quik Links</h3>\n            <ul>\n              <li><a href=\"#\">About Us</a></li>\n              <li><a href=\"#\">Contact Us</a></li>\n              <li><a href=\"#\">Careers</a></li>\n              <li><a href=\"#\">All Cities</a></li>\n              <li><a href=\"#\">Help &amp; Support</a></li>\n              <li><a href=\"#\">Advertise With Us</a></li>\n            </ul>\n          </div>\n        </div><!-- footer-widget -->\n\n        <!-- footer-widget -->\n        <div class=\"col-sm-3\">\n          <div class=\"footer-widget\">\n            <h3>How to sell fast</h3>\n            <ul>\n              <li><a href=\"#\">How to sell fast</a></li>\n              <li><a href=\"#\">Membership</a></li>\n              <li><a href=\"#\">Banner Advertising</a></li>\n              <li><a href=\"#\">Promote your ad</a></li>\n              <li><a href=\"#\">Jobs Delivers</a></li>\n              <li><a href=\"#\">FAQ</a></li>\n            </ul>\n          </div>\n        </div><!-- footer-widget -->\n\n        <!-- footer-widget -->\n        <div class=\"col-sm-3\">\n          <div class=\"footer-widget social-widget\">\n            <h3>Follow us on</h3>\n            <ul>\n              <li><a href=\"#\"><i class=\"fa fa-facebook-official\"></i>Facebook</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-twitter-square\"></i>Twitter</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-google-plus-square\"></i>Google+</a></li>\n              <li><a href=\"#\"><i class=\"fa fa-youtube-play\"></i>youtube</a></li>\n            </ul>\n          </div>\n        </div><!-- footer-widget -->\n\n        <!-- footer-widget -->\n        <div class=\"col-sm-3\">\n          <div class=\"footer-widget news-letter\">\n            <h3>Newsletter</h3>\n            <p>Jobs is Worldest leading Portal platform that brings!</p>\n            <!-- form -->\n            <form action=\"#\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"Your email id\">\n              <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n            </form><!-- form -->\t\t\t\n          </div>\n        </div><!-- footer-widget -->\n      </div><!-- row -->\n    </div><!-- container -->\n  </section><!-- footer-top -->\n\n  <div class=\"footer-bottom clearfix text-center\">\n    <div class=\"container\">\n      <p>Copyright © <a href=\"#\">Jobs</a> 2017. Developed by <a href=\"#\">Ravikumar GH</a></p>\n    </div>\n  </div><!-- footer-bottom -->\n<!--   \n<button *ngIf=\"showSidenav$ | async\" type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"top\" ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\n  popoverTitle=\"Popover on top\">\n  Popover on top\n</button>\nshowSidenav$: {{showSidenav$}}\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"closeSidenav()\"> NgRx closeSidenav </button>\n<button type=\"button\" class=\"btn btn-outline-secondary mr-2\" (click)=\"openSidenav()\"> NgRx openSidenav </button>\n<br> -->\n\n<!-- \"close\" is an alias to \"times\", V5 is <i class=\"fa fa-times\"></i> -->\n<!-- <i class=\"fa fa-close\"></i> -->\n\n<!-- Renamed to \"image\", V5 is <i class=\"fa fa-image\"></i> -->\n<!-- <i class=\"fa fa-picture\"></i> -->\n\n<!-- Needs the \"fab\" prefix, V5 <i class=\"fab fa-twitter\"></i> -->\n<!-- <i class=\"fa fa-twitter\"></i> -->\n\n<!-- \"far\" prefix, lose the \"-o\", V5 <i class=\"far fa-circle\"></i> -->\n<!-- <i class=\"fa fa-circle-o\"></i>\n<i class=\"fas fa-adjust\" style=\"font-size: 48px;\"></i> -->"

/***/ }),

/***/ "./src/app/ui/layout/components/footer/footer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui/layout/components/footer/footer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/layout/components/footer/footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/layout/components/footer/footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _app_ui_layout_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/ui/layout/store/actions/layout.actions */ "./src/app/ui/layout/store/actions/layout.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(store) {
        this.store = store;
        /**
         * Selectors can be applied with the `select` operator which passes the state
         * tree to the provided selector
         */
        this.showSidenav$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_app_reducers__WEBPACK_IMPORTED_MODULE_2__["getShowSidenav"]));
        // this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.closeSidenav = function () {
        /**
         * All state updates are handled through dispatched actions in 'container'
         * components. This provides a clear, reproducible history of state
         * updates and user interaction through the life of our
         * application.
         */
        this.store.dispatch(new _app_ui_layout_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["CloseSidenav"]());
    };
    FooterComponent.prototype.openSidenav = function () {
        this.store.dispatch(new _app_ui_layout_store_actions_layout_actions__WEBPACK_IMPORTED_MODULE_3__["OpenSidenav"]());
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/layout/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/layout/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/components/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui/layout/components/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light navbar-default\">\r\n  <a class=\"navbar-brand\" routerLink=\"/home\">YoBro</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': navbarOpen }\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" (click)=\"collapseNavbar()\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" (click)=\"collapseNavbar()\">Feeds</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Dropdown\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"form-inline my-2 my-lg-0\">\r\n      <ul class=\"sign-in\">\r\n        <li><i class=\"fa fa-user\"></i></li>\r\n        <li><a routerLink=\"/signin\" (click)=\"collapseNavbar()\">Sign In</a></li>\r\n        <li><a routerLink=\"/register\" (click)=\"collapseNavbar()\">Register</a></li>\r\n      </ul><!-- sign-in -->\r\n\r\n      <a routerLink=\"/postjob\" class=\"btn\" (click)=\"collapseNavbar()\">Post Your Job</a>\r\n    </div>\r\n    <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form> -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/ui/layout/components/header/header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui/layout/components/header/header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/layout/components/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/layout/components/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'yobro';
        this.navbarOpen = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    HeaderComponent.prototype.collapseNavbar = function () {
        this.navbarOpen = false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/ui/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.module.ts":
/*!********************************************!*\
  !*** ./src/app/ui/layout/layout.module.ts ***!
  \********************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/ui/layout/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/ui/layout/components/footer/footer.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/ui/layout/components/content/content.component.ts");
/* harmony import */ var _store_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/layout.reducer */ "./src/app/ui/layout/store/reducers/layout.reducer.ts");
/* harmony import */ var _store_effects_layout_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/effects/layout.effects */ "./src/app/ui/layout/store/effects/layout.effects.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_modules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/modules */ "./src/app/modules/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _app_modules__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_store_effects_layout_effects__WEBPACK_IMPORTED_MODULE_8__["LayoutEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('layout', _store_reducers_layout_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"])
            ],
            exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_content_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"]],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/ui/layout/store/actions/layout.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/layout/store/actions/layout.actions.ts ***!
  \***********************************************************/
/*! exports provided: LayoutActionTypes, LoadLayouts, OpenSidenav, CloseSidenav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutActionTypes", function() { return LayoutActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadLayouts", function() { return LoadLayouts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSidenav", function() { return OpenSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseSidenav", function() { return CloseSidenav; });
var LayoutActionTypes;
(function (LayoutActionTypes) {
    LayoutActionTypes["LoadLayouts"] = "[Layout] Load Layouts";
    LayoutActionTypes["OpenSidenav"] = "[Layout] Open Sidenav";
    LayoutActionTypes["CloseSidenav"] = "[Layout] Close Sidenav";
})(LayoutActionTypes || (LayoutActionTypes = {}));
var LoadLayouts = /** @class */ (function () {
    function LoadLayouts() {
        this.type = LayoutActionTypes.LoadLayouts;
    }
    return LoadLayouts;
}());

var OpenSidenav = /** @class */ (function () {
    function OpenSidenav() {
        this.type = LayoutActionTypes.OpenSidenav;
    }
    return OpenSidenav;
}());

var CloseSidenav = /** @class */ (function () {
    function CloseSidenav() {
        this.type = LayoutActionTypes.CloseSidenav;
    }
    return CloseSidenav;
}());



/***/ }),

/***/ "./src/app/ui/layout/store/effects/layout.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/layout/store/effects/layout.effects.ts ***!
  \***********************************************************/
/*! exports provided: LayoutEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutEffects", function() { return LayoutEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/layout.actions */ "./src/app/ui/layout/store/actions/layout.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutEffects = /** @class */ (function () {
    function LayoutEffects(actions$) {
        this.actions$ = actions$;
        this.loadFoos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_layout_actions__WEBPACK_IMPORTED_MODULE_2__["LayoutActionTypes"].LoadLayouts));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], LayoutEffects.prototype, "loadFoos$", void 0);
    LayoutEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]])
    ], LayoutEffects);
    return LayoutEffects;
}());



/***/ }),

/***/ "./src/app/ui/layout/store/reducers/layout.reducer.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/layout/store/reducers/layout.reducer.ts ***!
  \************************************************************/
/*! exports provided: initialState, reducer, getShowSidenav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowSidenav", function() { return getShowSidenav; });
/* harmony import */ var _actions_layout_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/layout.actions */ "./src/app/ui/layout/store/actions/layout.actions.ts");

var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_layout_actions__WEBPACK_IMPORTED_MODULE_0__["LayoutActionTypes"].CloseSidenav:
            return {
                showSidenav: false,
            };
        case _actions_layout_actions__WEBPACK_IMPORTED_MODULE_0__["LayoutActionTypes"].OpenSidenav:
            return {
                showSidenav: true,
            };
        case _actions_layout_actions__WEBPACK_IMPORTED_MODULE_0__["LayoutActionTypes"].LoadLayouts:
            return state;
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };


/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/ui/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]
            ],
            exports: [_layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"]]
        })
    ], UiModule);
    return UiModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SourceCode\Projects\yobro\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
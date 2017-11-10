webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beer_feed_page_beer_feed_page_component__ = __webpack_require__("../../../../../src/app/beer-feed-page/beer-feed-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_users_show_users_show_component__ = __webpack_require__("../../../../../src/app/users/users-show/users-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_edit_users_edit_component__ = __webpack_require__("../../../../../src/app/users/users-edit/users-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beers_beers_show_beers_show_component__ = __webpack_require__("../../../../../src/app/beers/beers-show/beers-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__beers_beers_edit_beers_edit_component__ = __webpack_require__("../../../../../src/app/beers/beers-edit/beers-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beers_beers_new_beers_new_component__ = __webpack_require__("../../../../../src/app/beers/beers-new/beers-new.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { AuthGaurd } from 







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__beer_feed_page_beer_feed_page_component__["a" /* BeerFeedPageComponent */] //, canActivate: [AuthGaurd]
    },
    {
        path: 'welcome',
        component: __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__["a" /* LandingPageComponent */]
    },
    /* beers and user routes could be broken out into module routes */
    {
        path: 'beers',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__beer_feed_page_beer_feed_page_component__["a" /* BeerFeedPageComponent */]
            },
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_8__beers_beers_new_beers_new_component__["a" /* BeersNewComponent */]
            },
            {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_7__beers_beers_edit_beers_edit_component__["a" /* BeersEditComponent */]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_6__beers_beers_show_beers_show_component__["a" /* BeersShowComponent */]
            }
        ]
    },
    {
        path: 'brewer',
        children: [
            {
                path: 'edit',
                component: __WEBPACK_IMPORTED_MODULE_5__users_users_edit_users_edit_component__["a" /* UsersEditComponent */]
            },
            {
                path: ':userName',
                component: __WEBPACK_IMPORTED_MODULE_4__users_users_show_users_show_component__["a" /* UsersShowComponent */]
            }
        ]
    },
    // all others redirect to beer feed
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beers_beers_module__ = __webpack_require__("../../../../../src/app/beers/beers.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_users_module__ = __webpack_require__("../../../../../src/app/users/users.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beer_feed_page_beer_feed_service__ = __webpack_require__("../../../../../src/app/beer-feed-page/beer-feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sign_up_modal_sign_up_modal_component__ = __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_modal_login_modal_component__ = __webpack_require__("../../../../../src/app/login-modal/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__beer_feed_page_beer_feed_page_component__ = __webpack_require__("../../../../../src/app/beer-feed-page/beer-feed-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__beer_card_beer_card_component__ = __webpack_require__("../../../../../src/app/beer-card/beer-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sign_up_modal_sign_up_modal_component__["a" /* SignUpModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_modal_login_modal_component__["a" /* LoginModalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__beer_feed_page_beer_feed_page_component__["a" /* BeerFeedPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__beer_card_beer_card_component__["a" /* BeerCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__beers_beers_module__["a" /* BeersModule */],
            __WEBPACK_IMPORTED_MODULE_5__users_users_module__["a" /* UsersModule */],
            __WEBPACK_IMPORTED_MODULE_13_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__beer_feed_page_beer_feed_service__["a" /* BeerFeedService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/beer-card/beer-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beer-card/beer-card.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  beer-card works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/beer-card/beer-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BeerCardComponent = (function () {
    function BeerCardComponent() {
    }
    BeerCardComponent.prototype.ngOnInit = function () {
    };
    return BeerCardComponent;
}());
BeerCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beer-card',
        template: __webpack_require__("../../../../../src/app/beer-card/beer-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/beer-card/beer-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BeerCardComponent);

//# sourceMappingURL=beer-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/beer-feed-page/beer-feed-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**********/\n/* HEADER */\n/**********/\n\n.logo-header {\n\tmargin: 0;\n\tcolor: #fff;\n\tbackground-color: #374353;\n\theight: 7rem;\n}\n\n.logo {\n\tfont-size: 4rem;\n\tfont-family: 'Old Standard TT', serif;\n\tmargin-top: .7%;\n}\n\n.fa-user-circle {\n\tfloat: right;\n}\n\n.user {\n\tmargin-top: .9%;\n}\n\n/********/\n/* FORM */\n/********/\n\n.form-control {\n\twidth: 20%;\n\tdisplay: inline;\n\tpadding: 1.7%;\n\tmargin-left: 5px;\n}\n\n.search {\n\tbackground-color: #fabc09;\n\tpadding: 1.7%;\n\tfont-family: \"Raleway\", sans-serif;\n\tfont-size: 2.3rem;\n\tpadding-left: 3%;\n}\n\n .button-search a {\n  font-family: \"Raleway\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 2px;\n  transition: 0.5s;\n  margin: 10px;\n}\n\n .button-search {\n  background: #03C4EB;\n  border: 2px solid #03C4EB;\n  color: #fff;\n}\n\n .button-search:hover {\n  background: none;\n  border: 2px solid #fff;\n  color: #fff;\n}\n\n/*********/\n/* CARDS */\n/*********/\n\n.card {\n  display: inline-block;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);\n  margin: 20px;\n  position: relative;\n  margin-bottom: 50px;\n  transition: all .2s ease-in-out;\n}\n\n.card:hover {\n  /*box-shadow: 0 5px 22px 0 rgba(0,0,0,.25);*/\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n  margin-bottom: 54px;\n}\n\n.image {\n  height: 25rem;\n  opacity: .7;\n  overflow: hidden;\n  transition: all .2s ease-in-out;\n}\n\n.image:hover,\n.card:hover .image {\n  height: 25rem;\n  opacity: 1;\n}\n\n.text {\n  background: #FFF;\n  padding: 20px;\n  min-height: 200px;\n}\n\n.beer-name {\n  font-family: 'Old Standard TT', serif;\n}\n\n.text p {\n  margin-bottom: 0px;\n}\n\n.go-to {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  position: absolute;\n  margin-top: -50px;\n  right: 20px;\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, .3);\n  color: #fff;\n  font-size: 48px;\n  line-height: 48px;\n  text-align: center;\n  background: #F7882F;\n  transition: -webkit-transform .2s ease-in-out;\n  transition: transform .2s ease-in-out;\n  transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\n}\n\n.go-to:hover {\n  background: #03C4EB;\n  cursor: pointer;\n\t-webkit-transform: rotate(90deg);\n\ttransform: rotate(90deg);\n}\n\n\n\n@media (max-width: 738px) {\n  .card {\n    margin: auto;\n  }\n\n  .form-control {\n    width: 55%;\n    display: inline;\n    padding: 1.7%;\n    margin-left: 5px;\n}\n  .search {\n    font-size: 1.6rem;\n    padding: 2%;\n    padding-left: 7%;\n  }\n\n  .logo {\n    font-size: 2.7rem;\n    margin-top: 5%;\n  }\n\n  .fa-user-circle {\n    float: right;\n    margin-top: 4.8%;\n}\n\n  .user {\n    margin-top: 0;\n}\n\n@media (max-width: 668px) {\n  .logo {\n    font-size: 2.3rem;\n    margin-top: 5%;\n  }\n\n  .form-control {\n    width: 52%;\n  }\n}\n\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beer-feed-page/beer-feed-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!--********-->\n<!-- fonts  -->\n<!--********-->\n\n<link href=\"https://fonts.googleapis.com/css?family=Old+Standard+TT|Raleway\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n\n<!--***************-->\n<!-- Logo Heading  -->\n<!--***************-->\n\n<section>\n\t<div class=\"container-fluid logo-header\">\n\t\t<div class=\"row logo-header\">\n\t\t\t<div class=\"col-lg-6 col-xs-8 logo\">Homebrew Heroes</div>\n\t\t\t<div class=\"user col-lg-6\"><i class=\"fa fa-user-circle fa-3x\" aria-hidden=\"true\"></i></div>\n\t\t</div>\n\t</div>\n</section>\n\n<!--*****************-->\n<!-- Search Section  -->\n<!--*****************-->\n\n<section>\n\t<div class=\"container-fluid search\">\n\t\t<div class=\"row col-lg-12 col-xs-12\">\n\t\t\t<div class=\"col-md-auto\">Search:\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Insert brew type here\">\n\t\t\t\t<button type=\"submit\" class=\"btn button-search\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n<!--****************-->\n<!-- Cards Section  -->\n<!--****************-->\n\n  <div class=\"container card-main-css\">\n    <div class=\"row\">\n      <div *ngFor=\"let beer of beerArray\" class=\"col-md-4 col-sm-6 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"image\">\n          \t<img src={{beer.photoUrl}} width=\"100%\">\n          </div>\n          <div class=\"text\">\n       \t    <div class=\"go-to\">&#43;</div>\n\t\t\t      <h2 class=\"beer-name\">{{beer.name}}</h2>\n            <h3 class=\"beer-style\">{{beer.style}}</h3>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/beer-feed-page/beer-feed-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerFeedPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beer_feed_service__ = __webpack_require__("../../../../../src/app/beer-feed-page/beer-feed.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerFeedPageComponent = (function () {
    function BeerFeedPageComponent(beerFeedService) {
        this.beerFeedService = beerFeedService;
        this.beerArray = [];
    }
    BeerFeedPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beerFeedService.getBeerFeed().subscribe(function (response) {
            _this.beerArray = response.json().beers;
            console.log(_this.beerArray);
        });
    };
    return BeerFeedPageComponent;
}());
BeerFeedPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beer-feed-page',
        template: __webpack_require__("../../../../../src/app/beer-feed-page/beer-feed-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/beer-feed-page/beer-feed-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__beer_feed_service__["a" /* BeerFeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__beer_feed_service__["a" /* BeerFeedService */]) === "function" && _a || Object])
], BeerFeedPageComponent);

var _a;
//# sourceMappingURL=beer-feed-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/beer-feed-page/beer-feed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerFeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeerFeedService = (function () {
    function BeerFeedService(http) {
        this.http = http;
        this.baseUrl = '';
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* isDevMode */])()) {
            this.baseUrl = "http://localhost:3000";
        }
    }
    BeerFeedService.prototype.getBeerFeed = function () {
        return this.http.get(this.baseUrl + '/api/beers');
    };
    return BeerFeedService;
}());
BeerFeedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BeerFeedService);

var _a;
//# sourceMappingURL=beer-feed.service.js.map

/***/ }),

/***/ "../../../../../src/app/beers/beers-edit/beers-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beers/beers-edit/beers-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  beers-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/beers/beers-edit/beers-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BeersEditComponent = (function () {
    function BeersEditComponent() {
    }
    BeersEditComponent.prototype.ngOnInit = function () {
    };
    return BeersEditComponent;
}());
BeersEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beers-edit',
        template: __webpack_require__("../../../../../src/app/beers/beers-edit/beers-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/beers/beers-edit/beers-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BeersEditComponent);

//# sourceMappingURL=beers-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/beers/beers-new/beers-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beers/beers-new/beers-new.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  beers-new works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/beers/beers-new/beers-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BeersNewComponent = (function () {
    function BeersNewComponent() {
    }
    BeersNewComponent.prototype.ngOnInit = function () {
    };
    return BeersNewComponent;
}());
BeersNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beers-new',
        template: __webpack_require__("../../../../../src/app/beers/beers-new/beers-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/beers/beers-new/beers-new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BeersNewComponent);

//# sourceMappingURL=beers-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/beers/beers-show/beers-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/beers/beers-show/beers-show.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  beers-show works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/beers/beers-show/beers-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BeersShowComponent = (function () {
    function BeersShowComponent() {
    }
    BeersShowComponent.prototype.ngOnInit = function () {
    };
    return BeersShowComponent;
}());
BeersShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-beers-show',
        template: __webpack_require__("../../../../../src/app/beers/beers-show/beers-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/beers/beers-show/beers-show.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BeersShowComponent);

//# sourceMappingURL=beers-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/beers/beers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beers_new_beers_new_component__ = __webpack_require__("../../../../../src/app/beers/beers-new/beers-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__beers_show_beers_show_component__ = __webpack_require__("../../../../../src/app/beers/beers-show/beers-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__beers_edit_beers_edit_component__ = __webpack_require__("../../../../../src/app/beers/beers-edit/beers-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BeersModule = (function () {
    function BeersModule() {
    }
    return BeersModule;
}());
BeersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__beers_new_beers_new_component__["a" /* BeersNewComponent */], __WEBPACK_IMPORTED_MODULE_3__beers_show_beers_show_component__["a" /* BeersShowComponent */], __WEBPACK_IMPORTED_MODULE_4__beers_edit_beers_edit_component__["a" /* BeersEditComponent */]]
    })
], BeersModule);

//# sourceMappingURL=beers.module.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/img/arrow.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../../../../src/app/landing-page/img/beers2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "beers2.07a369f25222d32cbaa0.jpg";

/***/ }),

/***/ "../../../../../src/app/landing-page/img/craft.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "craft.ad9b1258016cf93f9a75.jpg";

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/*--------------------------------------------------------------\n# Welcome Full Landing Page\n--------------------------------------------------------------*/\n#hero {\n  display: table;\n  width: 100%;\n  height: 100vh;\n  background: url(" + __webpack_require__("../../../../../src/app/landing-page/img/beers2.jpg") + ") top center fixed;\n  background-size: cover;\n}\n\n\n#hero img {\n  max-width: 100%;\n}\n\n#hero .hero-container {\n  background: rgba(0, 0, 0, .2);\n  display: table-cell;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  vertical-align: inherit;\n}\n\n#hero h1 {\n  margin: 7% 0 0 0;\n  color: #fff;\n  font-family: 'Old Standard TT', serif;\n  font-size: 6rem;\n}\n\n#hero h2 {\n  color: #f7c331;\n  font-size: 2rem;\n  font-family: 'Raleway', sans-serif;\n}\n\n@media (max-width: 768px) {\n  #hero h2 {\n    font-size: 2rem;\n    margin-bottom: 30px;\n    font-family: 'Raleway', sans-serif;\n\n  }\n  #hero h2 .rotating {\n    display: block;\n  }\n}\n\n@media (max-width: 768px) {\n  #hero h1 {\n    font-size: 28px;\n    line-height: 36px;\n  }\n}\n\n\n\n\n .actions a {\n  font-family: \"Raleway\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 16px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 15px 30px;\n  border-radius: 2px;\n  transition: 0.5s;\n  margin: 10px;\n}\n\n .btn-get-started {\n  background: #03C4EB;\n  border: 2px solid #03C4EB;\n  color: #fff;\n}\n\n .btn-get-started:hover {\n  background: none;\n  border: 2px solid #fff;\n  color: #fff;\n}\n\n\n\n/*Arrow bounce*/\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px);\n  }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px);\n  }\n}\n\n\n.arrow {\n  background: url(" + __webpack_require__("../../../../../src/app/landing-page/img/arrow.png") + ") bottom center no-repeat;\n  height: 10%;\n  margin-top: 23%;\n}\n\n.bounce {\n  -webkit-animation: bounce 2s infinite;\n  animation: bounce 2s infinite;\n}\n\n/* Services Section\n--------------------------------*/\n\n#services {\n  /*background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));*/\n  background-size: cover;\n  padding: 40px 0 60px 0;\n}\n\n#services .service-item {\n  margin-bottom: 20px;\n}\n\n.section-title {\n  text-align: center;\n  font-family: 'Old Standard TT', serif;\n  font-size: 5rem;\n  margin-bottom: 4%;\n}\n\n#services .service-icon {\n  float: left;\n  background: #03C4EB;\n  padding: 16px;\n  border-radius: 50%;\n  transition: 0.5s;\n  border: 1px solid #03C4EB;\n}\n\n#services .service-item {\n  margin-bottom: 3%;\n}\n\n#services .service-title {\n  margin-left: 80px;\n  font-weight: 700;\n  margin-bottom: 15px;\n  text-transform: uppercase;\n}\n\n.service-title  {\n  color: #F7C331;\n}\n\n#services .service-description {\n  margin-left: 80px;\n  line-height: 24px;\n  font-family: 'Raleway', sans-serif;\n}\n\n.call-to {\n  background-color: #F7882F;\n  text-align: center;\n  padding: 2%;\n}\n\n.final-pic {\n  background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(" + __webpack_require__("../../../../../src/app/landing-page/img/craft.jpg") + ") fixed center center;\n  background-size: cover;\n  padding: 10%;\n}\n\n/*--------------------------------------------------------------\n# Footer\n--------------------------------------------------------------*/\n#footer {\n  background: #374353;\n  padding: 2%;\n  color: white;\n  text-align: center;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Old+Standard+TT|Raleway\" rel=\"stylesheet\">\n\n\n  <section id=\"hero\">\n    <div class=\"hero-container\">\n      <div class=\"fadeIn\">\n         <!--  <img class=\"\" src=\"img/logo.png\" alt=\"Imperial\"> -->\n        </div>\n\n        <h1>Homebrew Heroes</h1>\n        <h2>...A place to connect with your brewing buddies</h2>\n        <div class=\"actions\">\n          <a href=\"{{BASE_URL}}/auth/google\" class=\"btn-get-started\">Get Started</a>\n      </div>\n\n      <div id =\"arrow-container\" class=\"arrow bounce\"></div>\n    </div>\n  </section>\n\n\n  <!--==========================\n  Services Section\n  ============================-->\n  <section id=\"services\">\n    <div class=\"container wow fadeInUp\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <h3 class=\"section-title\">But what is it?</h3>\n        </div>\n      </div>\n\n      <div class=\"hideme row\">\n        <div class=\"col-md-4 service-item\">\n          <div class=\"service-icon\"></div>\n          <h4 class=\"service-title\">Showcase Brews</h4>\n          <p class=\"service-description\">Our app gives you the chance to let your brews be the star of the show. Create a profile for each beer and show people what you can do.</p>\n        </div>\n        <div class=\"col-md-4 service-item\">\n          <div class=\"service-icon\"></div>\n          <h4 class=\"service-title\">Connect</h4>\n          <p class=\"service-description\">We like to think fellow brewers want to connect with people who share their passion. Our app encourages browsing other profiles and reaching out.</p>\n        </div>\n        <div class=\"col-md-4 service-item\">\n          <div class=\"service-icon\"></div>\n          <h4 class=\"service-title\">Share</h4>\n          <p class=\"service-description\">Once you connect with people and like what they are doing, send a message and share tips (or beer)</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!--==========================\n  CALL TO ACTION\n  ============================-->\n\n    <div class=\"call-to actions\">\n          <a href=\"#about\" class=\"btn-get-started\">Sign-Up</a>\n    </div>\n\n\n    <div class=\"final-pic\"></div>\n\n<!--==========================\n  Footer\n============================-->\n  <footer id=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"copyright\">\n            &copy; Copyright <strong>Homebrew Heroes</strong>. All Rights Reserved\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <!-- #footer -->\n\n  <app-sign-up-modal></app-sign-up-modal>\n  <app-login-modal></app-login-modal>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = (function () {
    function LandingPageComponent() {
        this.BASE_URL = "";
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* isDevMode */])()) {
            this.BASE_URL = 'http://localhost:3000';
        }
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingPageComponent);

//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-modal/login-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-modal/login-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<form method=\"POST\" action=\"http://localhost:3000/auth/login\">\n\t<input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\">\n\t<input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" >\n\t<input type=\"submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/login-modal/login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginModalComponent = (function () {
    function LoginModalComponent() {
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    return LoginModalComponent;
}());
LoginModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-modal',
        template: __webpack_require__("../../../../../src/app/login-modal/login-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-modal/login-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginModalComponent);

//# sourceMappingURL=login-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up-modal/sign-up-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up-modal/sign-up-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<form method=\"POST\" action=\"http://localhost:3000/auth/signup\">\n\t<input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\">\n\t<input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" >\n\t<input type=\"submit\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/sign-up-modal/sign-up-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpModalComponent = (function () {
    function SignUpModalComponent() {
    }
    SignUpModalComponent.prototype.ngOnInit = function () {
    };
    return SignUpModalComponent;
}());
SignUpModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-up-modal',
        template: __webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-up-modal/sign-up-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignUpModalComponent);

//# sourceMappingURL=sign-up-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-edit/users-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users-edit/users-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  users-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/users/users-edit/users-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersEditComponent = (function () {
    function UsersEditComponent() {
    }
    UsersEditComponent.prototype.ngOnInit = function () {
    };
    return UsersEditComponent;
}());
UsersEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users-edit',
        template: __webpack_require__("../../../../../src/app/users/users-edit/users-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users-edit/users-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersEditComponent);

//# sourceMappingURL=users-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users-show/users-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users-show/users-show.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  users-show works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/users/users-show/users-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersShowComponent = (function () {
    function UsersShowComponent() {
    }
    UsersShowComponent.prototype.ngOnInit = function () {
    };
    return UsersShowComponent;
}());
UsersShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users-show',
        template: __webpack_require__("../../../../../src/app/users/users-show/users-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users-show/users-show.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersShowComponent);

//# sourceMappingURL=users-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_show_users_show_component__ = __webpack_require__("../../../../../src/app/users/users-show/users-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_edit_users_edit_component__ = __webpack_require__("../../../../../src/app/users/users-edit/users-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__users_show_users_show_component__["a" /* UsersShowComponent */], __WEBPACK_IMPORTED_MODULE_3__users_edit_users_edit_component__["a" /* UsersEditComponent */]]
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
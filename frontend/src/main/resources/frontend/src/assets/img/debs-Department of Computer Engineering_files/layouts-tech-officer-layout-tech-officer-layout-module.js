(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-tech-officer-layout-tech-officer-layout-module"],{

/***/ "./src/app/layouts/tech-officer-layout/tech-officer-layout.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/tech-officer-layout/tech-officer-layout.module.ts ***!
  \***************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var lbd_module_1 = __webpack_require__(/*! ../../components/sample/lbd/lbd.module */ "./src/app/components/sample/lbd/lbd.module.ts");
var map_1 = __webpack_require__(/*! @ngui/map */ "./node_modules/@ngui/map/__ivy_ngcc__/esm5/ngui-map.js");
var techofficer_layout_routing_1 = __webpack_require__(/*! ./techofficer-layout.routing */ "./src/app/layouts/tech-officer-layout/techofficer-layout.routing.ts");
var home_component_1 = __webpack_require__(/*! ../../components/sample/home/home.component */ "./src/app/components/sample/home/home.component.ts");
var user_component_1 = __webpack_require__(/*! ../../components/sample/user/user.component */ "./src/app/components/sample/user/user.component.ts");
var tables_component_1 = __webpack_require__(/*! ../../components/sample/tables/tables.component */ "./src/app/components/sample/tables/tables.component.ts");
var typography_component_1 = __webpack_require__(/*! ../../components/sample/typography/typography.component */ "./src/app/components/sample/typography/typography.component.ts");
var icons_component_1 = __webpack_require__(/*! ../../components/sample/icons/icons.component */ "./src/app/components/sample/icons/icons.component.ts");
var maps_component_1 = __webpack_require__(/*! ../../components/sample/maps/maps.component */ "./src/app/components/sample/maps/maps.component.ts");
var notifications_component_1 = __webpack_require__(/*! ../../components/sample/notifications/notifications.component */ "./src/app/components/sample/notifications/notifications.component.ts");
var upgrade_component_1 = __webpack_require__(/*! ../../components/sample/upgrade/upgrade.component */ "./src/app/components/sample/upgrade/upgrade.component.ts");
var TechOfficerLayoutModule = /** @class */ (function () {
    function TechOfficerLayoutModule() {
    }
    TechOfficerLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(techofficer_layout_routing_1.TechOfficerLayoutRoutes),
                forms_1.FormsModule,
                lbd_module_1.LbdModule,
                map_1.NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE' })
            ],
            declarations: [
                home_component_1.HomeComponent,
                user_component_1.UserComponent,
                tables_component_1.TablesComponent,
                typography_component_1.TypographyComponent,
                icons_component_1.IconsComponent,
                maps_component_1.MapsComponent,
                notifications_component_1.NotificationsComponent,
                upgrade_component_1.UpgradeComponent
            ]
        })
    ], TechOfficerLayoutModule);
    return TechOfficerLayoutModule;
}());
exports.TechOfficerLayoutModule = TechOfficerLayoutModule;


/***/ }),

/***/ "./src/app/layouts/tech-officer-layout/techofficer-layout.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layouts/tech-officer-layout/techofficer-layout.routing.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__(/*! ../../components/sample/home/home.component */ "./src/app/components/sample/home/home.component.ts");
exports.TechOfficerLayoutRoutes = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
];


/***/ })

}]);
//# sourceMappingURL=layouts-tech-officer-layout-tech-officer-layout-module.js.map
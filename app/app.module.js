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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// import './rxjs-extensions';
// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
var contact_detail_component_1 = require('./contact-detail.component');
var heroes_component_1 = require('./heroes.component');
var login_1 = require('./login');
var home_1 = require('./home');
var parm_1 = require('./parm');
var joblist_1 = require('./joblist');
// import { HeroSearchComponent } from './hero-search.component';
var hero_service_1 = require('./hero.service');
var app_routing_1 = require('./app.routing');
var flying_heroes_pipe_1 = require('./flying-heroes.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // imports:      [ BrowserModule,FormsModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),routing ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent, joblist_1.JobListParm, parm_1.ParmComponent, login_1.Login, home_1.Home, hero_detail_component_1.HeroDetailComponent, contact_detail_component_1.ContactDetailComponent, heroes_component_1.HeroesComponent, dashboard_component_1.DashboardComponent, flying_heroes_pipe_1.FlyingHeroesPipe],
            bootstrap: [app_component_1.AppComponent],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
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
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(heroService, router, http) {
        this.heroService = heroService;
        this.router = router;
        this.http = http;
        this.title = 'DiDa';
    }
    // token = '';
    // token=JSON.parse(localStorage.getItem('dida_user')).token;
    // if (localStorage.dida_user){ 
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('dida_token')) {
            this.token = localStorage.getItem('dida_token');
        }
    };
    AppComponent.prototype.logOut = function () {
        this.token = null;
        localStorage.setItem('dida_user', '{}');
        localStorage.setItem('dida_token', '');
        this.router.navigate(['login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1><button class=\"logout\" *ngIf=\"token\" (click)=\"logOut()\">Logout</button>\n  <nav>\n    <a routerLink=\"/home\" routerLinkActive=\"active\" *ngIf=\"token\">Home</a>\n    <a routerLink=\"/dashboard\" routerLinkActive=\"active\" *ngIf=\"token\">Dashboard</a>\n    <a routerLink=\"/heroes\" routerLinkActive=\"active\" *ngIf=\"token\">Plan</a>\n    <a routerLink=\"/parm\" routerLinkActive=\"active\" *ngIf=\"token\">Parm</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
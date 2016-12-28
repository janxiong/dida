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
var hero_service_1 = require('./hero.service');
var router_1 = require('@angular/router');
var ParmComponent = (function () {
    // contacts: Contact[] = [];
    // incidents: Incident[] = [];
    function ParmComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.parms = [];
    }
    ParmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getParms()
            .then(function (parms) {
            _this.parms = parms;
        });
    };
    ParmComponent.prototype.gotoJobList = function (parm) {
        var link = ['/joblist', parm.id];
        this.router.navigate(link);
    };
    ParmComponent = __decorate([
        core_1.Component({
            selector: 'my-parm',
            templateUrl: 'app/parm.html',
            styleUrls: ['app/parm.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], ParmComponent);
    return ParmComponent;
}());
exports.ParmComponent = ParmComponent;
//# sourceMappingURL=parm.js.map
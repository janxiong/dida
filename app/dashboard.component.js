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
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
        this.contacts = [];
        this.incidents = [];
        this.allincidents = [];
        this.selectedPeriod = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var today = new Date(+new Date() + 8 * 3600 * 1000);
        this.heroService.getHeroes()
            .then(function (heroes) {
            var j = 0;
            for (var i = 0; heroes[i].date !== today.toISOString().substr(0, 10); i++) {
                j = i;
            }
            j = j + 2 - today.getDay();
            _this.heroes = heroes.slice(j, j + 7);
        });
        this.heroService.getContacts()
            .then(function (contacts) {
            _this.contacts = contacts;
        });
        this.heroService.getIncidents()
            .then(function (incidents) {
            var lastWeek = new Date(+new Date() + 8 * 3600 * 1000 - 3600 * 1000 * 24 * 7);
            _this.allincidents = incidents;
            _this.incidents = _this.allincidents.filter(function (incidents) {
                return incidents.inctime.substr(0, 10) >= lastWeek.toISOString().substr(0, 10);
            });
        });
    };
    DashboardComponent.prototype.updatePeriod = function (Selected) {
        var today = new Date(+new Date() + 8 * 3600 * 1000);
        var lastMonth = new Date();
        lastMonth.setDate(1);
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        var lastWeek = new Date(+new Date() + 8 * 3600 * 1000 - 3600 * 1000 * 24 * 7);
        switch (Selected) {
            case "LastWeek":
                this.incidents = this.allincidents.filter(function (incidents) {
                    return incidents.inctime.substr(0, 10) >= lastWeek.toISOString().substr(0, 10);
                });
                break;
            case "ThisMonth":
                this.incidents = this.allincidents.filter(function (incidents) {
                    return incidents.inctime.substr(0, 7) == today.toISOString().substr(0, 7);
                });
                break;
            case "LastMonth":
                this.incidents = this.allincidents.filter(function (incidents) {
                    return incidents.inctime.substr(0, 7) == lastMonth.toISOString().substr(0, 7);
                });
                break;
        }
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.date];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.gotoContact = function (contact) {
        var link = ['/contact', contact.id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
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
var hero_service_1 = require('./hero.service');
var hero_1 = require('./hero');
var JobListParm = (function () {
    // loadModules(){
    //   selectedRole={id: 2,  role: 'Team Leader'};
    // }
    function JobListParm(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.informtypes = [];
        this.jobtypes = [];
        this.roles = [];
        // SelectedName:string;
        // contacts: Contact[] = [];
        this.selectedRole = 0;
        this.selectedType = 0;
    }
    JobListParm.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.heroService.getJobList(id)
                .then(function (parm) {
                _this.parm = parm;
                // console.log(this.SelectedRole);
                // this.SelectedRole.role=this.contact.Role;
                // console.log(contact);
            });
        });
        this.heroService.getRoles()
            .then(function (roles) {
            _this.roles = roles;
        });
        this.heroService.getJobTypes()
            .then(function (jobtypes) {
            _this.jobtypes = jobtypes;
        });
    };
    JobListParm.prototype.goBack = function () {
        window.history.back();
    };
    // updateRole(SelectedRole):void {
    //     // this.contact.Role=SelectedRole.role;
    //     // this.contact.role_id=SelectedRole.id;
    // }
    JobListParm.prototype.updateJobType = function (Selected) {
        this.parm.priority = Selected.id;
    };
    // updateContactshift(SelectedContact):void {
    //     this.hero.shift=SelectedContact.name;
    //     this.hero.shiftcall=SelectedContact.cellphone;
    // }
    JobListParm.prototype.save = function () {
        this.heroService.updateJobList(this.parm)
            .then(this.goBack);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Parm)
    ], JobListParm.prototype, "parm", void 0);
    JobListParm = __decorate([
        core_1.Component({
            selector: 'my-parm-joblist',
            templateUrl: 'app/joblist.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], JobListParm);
    return JobListParm;
}());
exports.JobListParm = JobListParm;
//# sourceMappingURL=joblist.js.map
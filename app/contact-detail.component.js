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
var ContactDetailComponent = (function () {
    // loadModules(){
    //   selectedRole={id: 2,  role: 'Team Leader'};
    // }
    function ContactDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.informtypes = [];
        this.roles = [];
        // SelectedName:string;
        this.contacts = [];
        this.selectedRole = 0;
        this.selectedType = 0;
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var me = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.heroService.getContact(id)
                .then(function (contact) {
                _this.contact = contact;
                // console.log(this.SelectedRole);
                // this.SelectedRole.role=this.contact.Role;
                // console.log(contact);
            });
        });
        this.heroService.getRoles()
            .then(function (roles) {
            _this.roles = roles;
        });
        this.heroService.getInformTypes()
            .then(function (informtypes) {
            _this.informtypes = informtypes;
        });
    };
    ContactDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    ContactDetailComponent.prototype.updateRole = function (SelectedRole) {
        this.contact.Role = SelectedRole.role;
        this.contact.role_id = SelectedRole.id;
    };
    ContactDetailComponent.prototype.updateInformType = function (Selected) {
        if (this.contact.Email == '' && Selected.informType == 1) {
            alert("No Email! Couldn't use Type 1");
        }
        else {
            this.contact.InformType = Selected.informType;
        }
    };
    // updateContactshift(SelectedContact):void {
    //     this.hero.shift=SelectedContact.name;
    //     this.hero.shiftcall=SelectedContact.cellphone;
    // }
    ContactDetailComponent.prototype.save = function () {
        this.heroService.updateContact(this.contact)
            .then(this.goBack);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Contact)
    ], ContactDetailComponent.prototype, "contact", void 0);
    ContactDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-contact-detail',
            templateUrl: 'app/contact-detail.component.html'
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], ContactDetailComponent);
    return ContactDetailComponent;
}());
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contact-detail.component.js.map
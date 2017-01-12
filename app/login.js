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
// import { contentHeaders } from '../common/headers';
var Login = (function () {
    function Login(heroService, router, http) {
        this.heroService = heroService;
        this.router = router;
        this.http = http;
        this.user = { loginName: '', password: '', token: '' };
    }
    Login.prototype.ngOnInit = function () {
        if (localStorage.getItem('dida_token')) {
            this.token = localStorage.getItem('dida_token');
        }
        console.log(this.token);
        console.log(!this.token);
    };
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        this.user.loginName = username;
        this.user.password = password;
        this.user.token = '';
        // let body = JSON.stringify({ username, password });
        // localStorage.setItem('id_token', body);
        // console.log(localStorage.getItem('id_token'));
        // this.router.navigate(['home']);
        this.heroService.getToken(this.user)
            .then(function (res) {
            console.log(res);
            _this.user.password = '';
            _this.user.token = '';
            if (res.token) {
                _this.user.token = encodeURIComponent(res.token);
                var body = JSON.stringify(_this.user);
                localStorage.setItem('dida_user', body);
                localStorage.setItem('dida_token', _this.user.token);
                console.log(localStorage.getItem('dida_user'));
                _this.router.navigate(['home']);
                location.reload();
            }
            ;
        });
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login.html',
            styleUrls: ['app/login.css']
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, http_1.Http])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map
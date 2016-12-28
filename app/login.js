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
// import { contentHeaders } from '../common/headers';
var Login = (function () {
    function Login(router, http) {
        this.router = router;
        this.http = http;
    }
    Login.prototype.login = function (event, username, password) {
        event.preventDefault();
        var body = JSON.stringify({ username: username, password: password });
        localStorage.setItem('id_token', body);
        console.log(localStorage.getItem('id_token'));
        this.router.navigate(['home']);
        // this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
        //   .subscribe(
        //     response => {
        //       localStorage.setItem('id_token', response.json().id_token);
        //       this.router.navigate(['home']);
        //     },
        //     error => {
        //       alert(error.text());
        //       console.log(error.text());
        //     }
        //   );
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login.html',
            styleUrls: ['app/login.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map
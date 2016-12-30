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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var mock_heroes_1 = require('./mock-heroes');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        // private heroesUrl = 'app/heroes';  // URL to web api
        // JSON.parse(localStorage.getItem('dida_user')).token
        this.heroesUrl = 'http://starstech.iego.cn:8080/call_center/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    }
    HeroService.prototype.getPre = function () {
        var lastmonth = new Date(+new Date() + 8 * 3600 * 1000);
        lastmonth.setMonth(lastmonth.getMonth() - 1);
        // return heroes.filter(hero => hero.date === today.toISOString().substr(0,7));
        return this.getHeroes()
            .then(function (heroes) {
            return heroes.filter(function (hero) {
                return hero.date.substr(0, 7) === lastmonth.toISOString().substr(0, 7);
            });
        });
        // return this.http.get(this.heroesUrl)
        //          .toPromise()
        //          .then(response => 
        //          	  response.json() 
        //          )
        //          .catch(this.handleError);
    };
    HeroService.prototype.getNext = function () {
        var nextmonth = new Date();
        nextmonth.setMonth(nextmonth.getMonth() + 1);
        // return heroes.filter(hero => hero.date === today.toISOString().substr(0,7));
        return this.getHeroes()
            .then(function (heroes) {
            return heroes.filter(function (hero) {
                return hero.date.substr(0, 7) === nextmonth.toISOString().substr(0, 7);
            });
        });
    };
    HeroService.prototype.getCur = function () {
        var curmonth = new Date();
        return this.getHeroes()
            .then(function (heroes) {
            return heroes.filter(function (hero) {
                return hero.date.substr(0, 7) === curmonth.toISOString().substr(0, 7);
            });
        });
    };
    HeroService.prototype.getHeroes = function () {
        // const headers = new Headers();
        //     headers.append('Access-Control-Allow-Headers', 'Content-Type');
        //     headers.append('Access-Control-Allow-Methods', 'GET');
        //     headers.append('Access-Control-Allow-Origin', '*');
        // 	return this.http.get(this.heroesUrl, {headers: headers})
        // return Promise.resolve(HEROES);
        var apiurl = this.heroesUrl + 'webApi/getScheduleList';
        var creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
        return this.http.post(apiurl, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    HeroService.prototype.getContacts = function () {
        var apiurl = this.heroesUrl + 'webApi/getContactList';
        var creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
        console.log(creds);
        return this.http
            .post(apiurl, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var rc = response.json();
            rc.push({ id: 0, name: '', cellphone: '', telephone: '', City: '', Role: '', Email: '' });
            return rc;
        })
            .catch(this.handleError);
        // return Promise.resolve(CONTACTS);
    };
    HeroService.prototype.getParms = function () {
        var apiurl = 'http://starstech.iego.cn:8080/call_center/jobCode/list';
        var creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
        return this.http.post(apiurl, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            var rc = response.json();
            rc.push({ appId: 0, createTime: "", id: 0, jobCode: "", modelState: "", priority: 0, updateTime: "" });
            return rc;
        })
            .catch(this.handleError);
        // return Promise.resolve(PARMS);
    };
    HeroService.prototype.getRoles = function () {
        return Promise.resolve(mock_heroes_1.ROLES);
    };
    HeroService.prototype.getInformTypes = function () {
        return Promise.resolve(mock_heroes_1.INFORMTYPES);
    };
    HeroService.prototype.getJobTypes = function () {
        return Promise.resolve(mock_heroes_1.JOBTYPES);
    };
    HeroService.prototype.getIncidents = function () {
        var apiurl = this.heroesUrl + 'webApi/getIncidentList';
        var creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
        return this.http.post(apiurl, creds, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
        // return Promise.resolve(INCIDENTS);
    };
    // getHeroes(): Promise<Hero[]> {
    //    	return Promise.resolve(HEROES);
    // }	
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(resolve, 1000); }) // delay 2 seconds
            .then(function () { return _this.getHeroes(); });
    };
    HeroService.prototype.getHero = function (date) {
        return this.getHeroes()
            .then(function (heroes) {
            return heroes.find(function (hero) {
                return hero.date === date;
            });
        });
    };
    HeroService.prototype.getContact = function (id) {
        return this.getContacts()
            .then(function (contacts) {
            return contacts.find(function (contact) {
                return contact.id == id;
            });
        });
    };
    HeroService.prototype.getJobList = function (id) {
        return this.getParms()
            .then(function (parms) {
            return parms.find(function (parm) {
                return parm.id == id;
            });
        });
    };
    //{'Content-Type': 'application/x-www-form-urlencoded'});
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    HeroService.prototype.getToken = function (user) {
        // const url = `${this.heroesUrl}/${hero.date}`;
        // console.log(this.headers);
        var apiurl = this.heroesUrl + 'authApi/checkLogin';
        var creds = "jsonStr=" + JSON.stringify(user);
        console.log(creds);
        return this.http
            .post(apiurl, creds, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json().map;
        })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        // const url = `${this.heroesUrl}/${hero.date}`;
        // console.log(this.headers);
        var url = "http://starstech.iego.cn:8080/call_center/webApi/saveSchedule";
        var creds = "jsonStr=" + JSON.stringify(hero) + '&token=' + JSON.parse(localStorage.getItem('dida_user')).token;
        ;
        console.log(creds);
        return this.http
            .post(url, creds, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json().map;
        })
            .catch(this.handleError);
    };
    HeroService.prototype.updateContact = function (contact) {
        // const url = `${this.heroesUrl}/${hero.date}`;
        var apiurl = this.heroesUrl + 'webApi/saveConcact';
        console.log(this.headers);
        // const url =`http://starstech.iego.cn:8080/call_center/webApi/saveSchedule`;
        if (contact.id == 0) {
            delete contact.id;
        }
        var creds = "jsonStr=" + JSON.stringify(contact) + '&token=' + JSON.parse(localStorage.getItem('dida_user')).token;
        ;
        console.log(creds);
        return this.http
            .post(apiurl, creds, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json().map;
        })
            .catch(this.handleError);
    };
    HeroService.prototype.updateJobList = function (parm) {
        // const url = `${this.heroesUrl}/${hero.date}`;
        var apiurl = 'http://starstech.iego.cn:8080/call_center/jobCode/save';
        console.log(this.headers);
        var creds = "jsonStr=" + JSON.stringify(parm) + '&token=' + JSON.parse(localStorage.getItem('dida_user')).token;
        ;
        console.log(creds);
        return this.http
            .post(apiurl, creds, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json().map;
        })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map
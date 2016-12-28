"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var contact_detail_component_1 = require('./contact-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var login_1 = require('./login');
var parm_1 = require('./parm');
var home_1 = require('./home');
var joblist_1 = require('./joblist');
var appRoutes = [
    {
        path: 'contact/:id',
        component: contact_detail_component_1.ContactDetailComponent
    },
    {
        path: 'joblist/:id',
        component: joblist_1.JobListParm
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_1.Login
    },
    {
        path: 'parm',
        component: parm_1.ParmComponent
    },
    {
        path: 'home',
        component: home_1.Home
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
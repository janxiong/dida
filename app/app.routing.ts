import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }      from './hero-detail.component';
import { ContactDetailComponent }      from './contact-detail.component';
import { DashboardComponent }      from './dashboard.component';
import { Login }      from './login';
import { ParmComponent }      from './parm';
import { Home }      from './home';
import { JobListParm }      from './joblist';
const appRoutes: Routes = [
  {
      path: 'contact/:id',
      component: ContactDetailComponent
  },
  {
      path: 'joblist/:id',
      component: JobListParm
  },
	{
  		path: 'detail/:id',
  		component: HeroDetailComponent
	},
	{
		  path: '',
		  redirectTo: '/login',
		  pathMatch: 'full'
	},
  {
      path: 'login',
      component: Login
  },
  {
      path: 'parm',
      component: ParmComponent
  },
  {
      path: 'home',
      component: Home
  },
  {
  	  path: 'dashboard',
  	  component: DashboardComponent
  },
  {
    	path: 'heroes',
    	component: HeroesComponent
	}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

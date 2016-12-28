import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
// import './rxjs-extensions';
// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }   from './hero-detail.component';
import { ContactDetailComponent }   from './contact-detail.component';
import { HeroesComponent } from './heroes.component';
import { Login } from './login';
import { Home } from './home';
import { ParmComponent } from './parm';
import { JobListParm }      from './joblist';
// import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';
import { routing } from './app.routing';

import {  FlyingHeroesPipe } from './flying-heroes.pipe';


@NgModule({
  // imports:      [ BrowserModule,FormsModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),routing ],
  imports:      [ BrowserModule,FormsModule,HttpModule,routing ],
  declarations: [ AppComponent,JobListParm,ParmComponent,Login,Home,HeroDetailComponent,ContactDetailComponent,HeroesComponent,DashboardComponent,FlyingHeroesPipe ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})
export class AppModule { }

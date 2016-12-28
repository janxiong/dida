import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/login" routerLinkActive="active">Home</a>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Plan</a>
    <a routerLink="/parm" routerLinkActive="active">Parm</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
    
})
export class AppComponent {
    title = 'DiDa';
   }
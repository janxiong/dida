import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1><button class="logout" *ngIf="token" (click)="logOut()">Logout</button>
  <nav>
    <a routerLink="/home" routerLinkActive="active" *ngIf="token">Home</a>
    <a routerLink="/dashboard" routerLinkActive="active" *ngIf="token">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active" *ngIf="token">Plan</a>
    <a routerLink="/parm" routerLinkActive="active" *ngIf="token">Parm</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
    
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService,public router: Router, public http: Http) {
  }

    title = 'DiDa';
    token:string;
    // token = '';
    // token=JSON.parse(localStorage.getItem('dida_user')).token;
    // if (localStorage.dida_user){ 
    
    ngOnInit(): void {
    if (localStorage.getItem('dida_token')){     
    this.token = localStorage.getItem('dida_token');}
    }

  logOut(): void {
    this.token=null;
    localStorage.setItem('dida_user', '{}');
    localStorage.setItem('dida_token', '');
    this.router.navigate(['login']);
  }
}
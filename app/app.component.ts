import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `
  
  <nav class="navbar navbar-default navbar-fixed-top">
	<div class="container">
	<!--小屏幕导航按钮和title-->
	<div class="navbar-header">
	<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	<span class="icon-bar"></span>
	</button>
    <h1>{{title}}</h1>
    </div>
    <!--小屏幕导航按钮和title-->
    <!--导航-->
    <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav navbar-right">
    <li><a routerLink="/home" routerLinkActive="active" *ngIf="token">Home</a></li>
    <li><a routerLink="/dashboard" routerLinkActive="active" *ngIf="token">Dashboard</a></li>
    <li><a routerLink="/heroes" routerLinkActive="active" *ngIf="token">Plan</a></li>
    <li><a routerLink="/parm" routerLinkActive="active" *ngIf="token">Parm</a><li>
    <li><a routerLink="/login" routerLinkActive="active" *ngIf="token" (click)="logOut()">Logout</a></li>
    </ul>
	</div>
    <!--导航-->
	</div>
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
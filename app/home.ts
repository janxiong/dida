import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { Http } from '@angular/http';

@Component({
  selector: 'my-home',
  template: `
  <h1>{{title}}</h1>
  `,
  styleUrls: ['app/app.component.css']
    
})
export class Home {
  // constructor(public router: Router, public http: Http) {  }

  title = 'Hello ' + JSON.parse(localStorage.getItem('dida_user')).loginName;
}
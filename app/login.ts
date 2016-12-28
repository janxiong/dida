import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HeroService } from './hero.service';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'login',
  templateUrl: 'app/login.html',
  styleUrls: [ 'app/login.css' ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event:any, username:string, password:string) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
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
  }

  // signup(event) {
  //   event.preventDefault();
  //   this.router.navigate(['signup']);
  // }
}
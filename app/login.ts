import { Component, Input, OnInit  } from '@angular/core'; 
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HeroService } from './hero.service';
import { User} from './hero';
// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'login',
  templateUrl: 'app/login.html',
  styleUrls: [ 'app/login.css' ]
})
export class Login implements OnInit{
  user:User={loginName:'',password:'',token:''};
  token:any;

  ngOnInit(): void {
    if(localStorage.getItem('dida_token') ){
      this.token=localStorage.getItem('dida_token');
    }
    console.log(this.token);
    console.log(!this.token);
  }
  constructor(private heroService: HeroService,public router: Router, public http: Http) {
  }

  login(event:any, username:string, password:string) {
    event.preventDefault();
    this.user.loginName=username;
    this.user.password=password;
    this.user.token='';
    // let body = JSON.stringify({ username, password });
    // localStorage.setItem('id_token', body);
    // console.log(localStorage.getItem('id_token'));
    // this.router.navigate(['home']);
    this.heroService.getToken(this.user)
    .then(res =>{
      console.log(res);
      this.user.password='';
      this.user.token='';
      if (res.token)
        {
        this.user.token= encodeURIComponent(res.token);
        let body = JSON.stringify(this.user);
        localStorage.setItem('dida_user', body);
        localStorage.setItem('dida_token', this.user.token);
        console.log(localStorage.getItem('dida_user'));
        this.router.navigate(['home']);
        location.reload();
        };
      });
  }



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


  // signup(event) {
  //   event.preventDefault();
  //   this.router.navigate(['signup']);
  // }
}
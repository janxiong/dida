import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Hero,Contact,Incident,Role,InformType,Parm,JobType,User } from './hero';
import { CONTACTS,INCIDENTS,ROLES,INFORMTYPES,PARMS,JOBTYPES } from './mock-heroes';

@Injectable()
export class HeroService {
	// private heroesUrl = 'app/heroes';  // URL to web api
  // JSON.parse(localStorage.getItem('dida_user')).token

	private heroesUrl = 'http://starstech.iego.cn:8080/call_center/';

  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  	constructor(private http: Http) { }
  	

  	getPre(): Promise<Hero[]> {
  		let lastmonth= new Date(+new Date()+8*3600*1000);
  		lastmonth.setMonth(lastmonth.getMonth() -1);
        // return heroes.filter(hero => hero.date === today.toISOString().substr(0,7));

        return this.getHeroes()
        .then(heroes => 
        	heroes.filter(hero => 
        		hero.date.substr(0,7) === lastmonth.toISOString().substr(0,7)));
    	 // return this.http.get(this.heroesUrl)
      //          .toPromise()
      //          .then(response => 
      //          	  response.json() 
      //          )
      //          .catch(this.handleError);
    }
	
	getNext(): Promise<Hero[]> {
  		let nextmonth= new Date();
  		nextmonth.setMonth(nextmonth.getMonth() +1);
        // return heroes.filter(hero => hero.date === today.toISOString().substr(0,7));

        return this.getHeroes()
        .then(heroes => 
        	heroes.filter(hero => 
        		hero.date.substr(0,7) === nextmonth.toISOString().substr(0,7)));
    }

	getCur(): Promise<Hero[]> {
  		let curmonth= new Date();

        return this.getHeroes()
        .then(heroes => 
        	heroes.filter(hero => 
        		hero.date.substr(0,7) === curmonth.toISOString().substr(0,7)));
    }

  	getHeroes(): Promise<Hero[]> {
  		// const headers = new Headers();
    //     headers.append('Access-Control-Allow-Headers', 'Content-Type');
    //     headers.append('Access-Control-Allow-Methods', 'GET');
    //     headers.append('Access-Control-Allow-Origin', '*');
    // 	return this.http.get(this.heroesUrl, {headers: headers})
     
     // return Promise.resolve(HEROES);
       let apiurl= this.heroesUrl + 'webApi/getScheduleList' ;
      let creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
      return this.http.post(apiurl, creds,{headers: this.headers})
               .toPromise()
               .then(response => 
               	  response.json() 
               )
               .catch(this.handleError);
    }


  getContacts(): Promise<Contact[]> {
      let apiurl= this.heroesUrl + 'webApi/getContactList' ;
      let creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
      console.log(creds);
      return this.http
      .post(apiurl, creds,{headers: this.headers})
         .toPromise()
         .then(response => 
            {let rc=response.json()
            rc.push({  id: 0,  name: '',  cellphone: '',  telephone: '',  City: '',  Role: '',  Email: ''});
            return rc;
          }
         )
         .catch(this.handleError);
    	// return Promise.resolve(CONTACTS);
	}

  getParms(): Promise<Parm[]> {
      let apiurl=  'http://starstech.iego.cn:8080/call_center/jobCode/list' ;
      let creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
      return this.http.post(apiurl, creds,{headers: this.headers})
         .toPromise()
         .then(response => 
            {let rc=response.json()
            rc.push({appId:0,createTime:"",id:0,jobCode:"",modelState:"",priority:0,updateTime:""});
            return rc;
          }
         )
         .catch(this.handleError);
      // return Promise.resolve(PARMS);
  }

    getRoles(): Promise<Role[]> {
      return Promise.resolve(ROLES);
  }

    getInformTypes(): Promise<InformType[]> {
      return Promise.resolve(INFORMTYPES);
  }

    getJobTypes(): Promise<JobType[]> {
      return Promise.resolve(JOBTYPES);
  }

	getIncidents(): Promise<Incident[]> {
      let apiurl= this.heroesUrl + 'webApi/getIncidentList';
      let creds = 'token=' + JSON.parse(localStorage.getItem('dida_user')).token;
      return this.http.post(apiurl, creds,{headers: this.headers})
        .toPromise()
         .then(response => 
            response.json() 
         )
         .catch(this.handleError);
    	// return Promise.resolve(INCIDENTS);
	}
	// getHeroes(): Promise<Hero[]> {
 //    	return Promise.resolve(HEROES);
	// }	
	getHeroesSlowly(): Promise<Hero[]> {
 	 	return new Promise<Hero[]>(resolve => setTimeout(resolve, 1000)) // delay 2 seconds
    	.then(() => this.getHeroes());
	}
	getHero(date: string): Promise<Hero> {
    	return this.getHeroes()
        .then(heroes => 
        	heroes.find(hero => 
        		hero.date === date));
	}
  getContact(id: number): Promise<Contact> {
      return this.getContacts()
        .then(contacts => 
          contacts.find(contact => 
            contact.id == id));
  }

  getJobList(id: number): Promise<Parm> {
      return this.getParms()
        .then(parms => 
          parms.find(parm => 
            parm.id == id));
  }

 //{'Content-Type': 'application/x-www-form-urlencoded'});
 
  // headers.append('Content-Type', 'application/x-www-form-urlencoded');

  getToken(user: User): Promise<User> {
      // const url = `${this.heroesUrl}/${hero.date}`;
      // console.log(this.headers);
      let apiurl= this.heroesUrl + 'authApi/checkLogin';
       let creds = "jsonStr=" +JSON.stringify(user);
      console.log(creds);
      return this.http
      // .put(url, JSON.stringify(hero), {headers: this.headers})
      .post(apiurl, creds,{headers: this.headers})
      .toPromise()
      .then(res => 
        res.json().map)
      .catch(this.handleError);
  }

	update(hero: Hero): Promise<Hero> {
	    // const url = `${this.heroesUrl}/${hero.date}`;
	    // console.log(this.headers);
	    const url =`http://starstech.iego.cn:8080/call_center/webApi/saveSchedule`;
	     let creds = "jsonStr=" +JSON.stringify(hero) + '&token=' + JSON.parse(localStorage.getItem('dida_user')).token;;
	    console.log(creds);
	    return this.http
	    // .put(url, JSON.stringify(hero), {headers: this.headers})
	    .post(url, creds,{headers: this.headers})
	    .toPromise()
	    .then(res => 
	    	res.json().map)
	    .catch(this.handleError);
	}

  updateContact(contact: Contact): Promise<Contact> {
      // const url = `${this.heroesUrl}/${hero.date}`;
      let apiurl= this.heroesUrl + 'webApi/saveConcact';
      console.log(this.headers);
      // const url =`http://starstech.iego.cn:8080/call_center/webApi/saveSchedule`;
      if(contact.id==0){
        delete contact.id
      }
      let creds = "jsonStr=" +JSON.stringify(contact) + '&token=' + JSON.parse(localStorage.getItem('dida_user')).token;;
      console.log(creds);
      return this.http
      // .put(url, JSON.stringify(hero), {headers: this.headers})
      .post(apiurl, creds,{headers: this.headers})
      .toPromise()
      .then(res => 
        res.json().map)
      .catch(this.handleError);
  }

  updateJobList(parm: Parm): Promise<Parm> {
      // const url = `${this.heroesUrl}/${hero.date}`;
      let apiurl= 'http://starstech.iego.cn:8080/call_center/jobCode/save';
      console.log(this.headers);
      let creds = "jsonStr=" +JSON.stringify(parm) + '&token=' + JSON.parse(localStorage.getItem('dida_user')).token;;
      console.log(creds);
      return this.http
      .post(apiurl, creds,{headers: this.headers})
      .toPromise()
      .then(res => 
        res.json().map)
      .catch(this.handleError);
  }

	create(name: string): Promise<Hero> {
	  	return this.http
	    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	    let url = `${this.heroesUrl}/${id}`;
	    return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error); // for demo purposes only
    	return Promise.reject(error.message || error);
	}


}

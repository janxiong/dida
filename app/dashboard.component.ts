import { Component, OnInit } from '@angular/core';

import { Hero,Contact,Incident } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
  heroes: Hero[] = [];
  contacts: Contact[] = [];
  incidents: Incident[] = [];
  allincidents: Incident[] = [];
  selectedPeriod :any = 0;

  constructor(private router: Router,private heroService: HeroService) { }


  ngOnInit(): void {
    let today= new  Date(+new Date()+8*3600*1000);
    this.heroService.getHeroes()
      .then(heroes => {
        let j = 0;
        
        for(let i = 0; heroes[i].date!==today.toISOString().substr(0,10); i++){
           j=i;  
        }
        j=j+2-today.getDay();
        this.heroes = heroes.slice(j, j+7)
      });

    this.heroService.getContacts()
      .then(contacts => {
        this.contacts = contacts
      });

    this.heroService.getIncidents()
      .then(incidents => {
        let lastWeek= new  Date(+new Date()+8*3600*1000 - 3600*1000 * 24 * 7);
        this.allincidents = incidents;
        this.incidents= this.allincidents.filter(incidents => 
            incidents.inctime.substr(0,10) >= lastWeek.toISOString().substr(0,10)
        );
      });
  }

  updatePeriod(Selected:string):void {
      let today= new  Date(+new Date()+8*3600*1000);
      let lastMonth = new Date();  
      lastMonth.setDate(1);
      lastMonth.setMonth(lastMonth.getMonth()-1);
      let lastWeek= new  Date(+new Date()+8*3600*1000 - 3600*1000 * 24 * 7)
      switch(Selected)
      {
      case "LastWeek":
        this.incidents= this.allincidents.filter(incidents => 
            incidents.inctime.substr(0,10) >= lastWeek.toISOString().substr(0,10)
        );
        break;
      case "ThisMonth":
        this.incidents= this.allincidents.filter(incidents => 
            incidents.inctime.substr(0,7) == today.toISOString().substr(0,7)
        );
        break;
      case "LastMonth":
        this.incidents= this.allincidents.filter(incidents => 
            incidents.inctime.substr(0,7) == lastMonth.toISOString().substr(0,7)
        );
        break;
      }
  }

  gotoDetail(hero: Hero): void { 
  	let link = ['/detail', hero.date];
  	this.router.navigate(link);
  }
  gotoContact(contact: Contact): void { 
    let link = ['/contact', contact.id];
    this.router.navigate(link);
  }
}

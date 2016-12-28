import { Component, OnInit } from '@angular/core';

import { Parm } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-parm',
  templateUrl: 'app/parm.html',
  styleUrls: ['app/parm.css']
})
export class ParmComponent implements OnInit { 
  parms: Parm[] = [];
  // contacts: Contact[] = [];
  // incidents: Incident[] = [];
  constructor(private router: Router,private heroService: HeroService) { }

  ngOnInit(): void {

    this.heroService.getParms()
      .then(parms => {
        this.parms = parms
      });

  }

  gotoJobList(parm: Parm): void { 
  	let link = ['/joblist', parm.id];
  	this.router.navigate(link);
  }

}

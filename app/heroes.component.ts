import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls : ['app/heroes.component.css']
	
})
export class HeroesComponent implements OnInit {
	title = 'Tour of Heroes';
	getCur(): void {
    	this.heroService.getCur().then(heroes => this.heroes = heroes);
  	}
  	getPre(): void {
    	this.heroService.getPre().then(heroes => this.heroes = heroes);
  	}
  	getNext(): void {
    	this.heroService.getNext().then(heroes => this.heroes = heroes);
  	}
	
	selectedHero: Hero;
	constructor(private router: Router, private heroService: HeroService) { }
	heroes: Hero[];
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	ngOnInit(): void {
		this.getCur();
  	}
  	gotoDetail(): void {
    	this.router.navigate(['/detail', this.selectedHero.date]);
    }

    add(name: string): void {
  		name = name.trim();
	  	if (!name) { return; }
	  	this.heroService.create(name)
	    .then(hero => {
		    this.heroes.push(hero);
		    this.selectedHero = null;
   		});
	}

	delete(hero: Hero): void {
    	this.heroService
        .delete(hero.id)
        .then(() => {
	        this.heroes = this.heroes.filter(h => h !== hero);
	        if (this.selectedHero === hero) { this.selectedHero = null; }
      	});
	}


}
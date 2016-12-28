import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero,Contact} from './hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
	@Input()
	hero: Hero;
  selectedContactShift :any = 0;
  selectedContact :any = 0;
  contacts: Contact[] = [];
  
	constructor(private heroService: HeroService,private route: ActivatedRoute) {}
	ngOnInit(): void {
  		this.route.params.forEach((params: Params) => {
    		let date = params['id'];
    		this.heroService.getHero(date)
    		.then(hero => this.hero = hero);
  		});

      this.heroService.getContacts()
      .then(contacts => {
        this.contacts = contacts;
      });


	}
  goBack(): void {
      window.history.back();
  }
  updateContact(SelectedContact:Contact):void {
      this.hero.name=SelectedContact.name;
      this.hero.oncall=SelectedContact.cellphone;
      this.hero.oncall_id=SelectedContact.id;
  }
  updateContactshift(SelectedContact:Contact):void {
      this.hero.shift=SelectedContact.name;
      this.hero.shiftcall=SelectedContact.cellphone;
      this.hero.shift_id=SelectedContact.id;
  }
  save(): void {
  this.heroService.update(this.hero)
    .then(this.goBack);
}

}

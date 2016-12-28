import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero,Contact,Role,InformType} from './hero';
@Component({
  selector: 'my-contact-detail',
  templateUrl: 'app/contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
	@Input()
	contact: Contact;
  role: Role;
  informtype:InformType;
  informtypes:InformType[]=[];
  roles: Role[] = [];
  // SelectedName:string;
  contacts: Contact[] = [];
  selectedRole :any = 0;
  selectedType :any = 0;

  // loadModules(){
  //   selectedRole={id: 2,  role: 'Team Leader'};
  // }

	constructor(private heroService: HeroService,private route: ActivatedRoute) {  }
	ngOnInit(): void {
      var me=this;

  		this.route.params.forEach((params: Params) => {
    		let id = params['id'];
    		this.heroService.getContact(id)
    		.then(contact => 
          {
            this.contact = contact;
            // console.log(this.SelectedRole);
            // this.SelectedRole.role=this.contact.Role;
            // console.log(contact);
          });
  		});

      this.heroService.getRoles()
      .then(roles => {
        this.roles = roles;
      });

      this.heroService.getInformTypes()
      .then(informtypes => {
        this.informtypes = informtypes;
      });

	}
  goBack(): void {
      window.history.back();
  }
  updateRole(SelectedRole:Role):void {
      this.contact.Role=SelectedRole.role;
      this.contact.role_id=SelectedRole.id;
  }

  updateInformType(Selected:InformType):void {

      if(this.contact.Email == '' && Selected.informType == 1){
        alert("No Email! Couldn't use Type 1");
      }else{
        this.contact.InformType=Selected.informType;
      }
  }
  // updateContactshift(SelectedContact):void {
  //     this.hero.shift=SelectedContact.name;
  //     this.hero.shiftcall=SelectedContact.cellphone;
  // }
  save(): void {
  this.heroService.updateContact(this.contact)
    .then(this.goBack);
}

}
